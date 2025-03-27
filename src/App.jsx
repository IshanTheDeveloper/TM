import { useEffect, useState } from "react";
import Navbar from "./Components/navbar";
import TradeCard from "./Components/tradeCard";
import "./app.css";

function App() {
  const [hits, setHits] = useState([]);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredHits, setFilteredHits] = useState([]);
  const [displayList, setDisplayList] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState(new Set());
  const [listSelected, setListSelected] = useState(false); //To track button clicks

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://vit-tm-task.api.trademarkia.app/api/v3/us",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              input_query: "check",
              input_query_type: "",
              sort_by: "default",
              status: [],
              exact_match: false,
              date_query: false,
              owners: [],
              attorneys: [],
              law_firms: [],
              mark_description_description: [],
              classes: [],
              page: 1,
              rows: 10,
              sort_order: "desc",
              states: [],
              counties: [],
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        console.log("API Response:", result?.body?.hits?.hits); // Debugging

        setData(result);
        setHits(result?.body?.hits?.hits || []);
        setFilteredHits(result?.body?.hits?.hits || []);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  //Date formatting function
  const formatDate = (dateString) => {
    if (!dateString) return "N/A"; // Handle empty or invalid date
    const date = new Date(dateString);
    if (isNaN(date)) return "Invalid Date";
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      alert("Kindly write something in input to search");
      return;
    }

    const filtered = hits.filter((hit) => {
      const { attorney_name, current_owner, law_firm, status_type } =
        hit._source;
      return (
        attorney_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        current_owner?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        law_firm?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        status_type?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

    setFilteredHits(filtered);
  };

  const handleDisplayClick = (type) => {
    let list = [];
    if (type === "owners") {
      list = hits.map((hit) => hit._source.current_owner).filter(Boolean);
    } else if (type === "lawfirms") {
      list = hits.map((hit) => hit._source.law_firm).filter(Boolean);
    } else if (type === "attorneys") {
      list = hits.map((hit) => hit._source.attorney_name).filter(Boolean);
    }
    setListSelected(true); //Mark that a button has been clicked
    setDisplayList([...new Set(list)]); // Remove duplicates
  };

  const handleFilterClick = (name) => {
    setFilteredHits(
      hits.filter((hit) => {
        const { attorney_name, current_owner, law_firm } = hit._source;
        return (
          attorney_name === name || current_owner === name || law_firm === name
        );
      })
    );
  };

  return (
    <>
      <div className="flex items-center h-[11vh] gap-[1vw] justify-center">
        <div className="w-max pl-[5vw]">
          <img
            src="https://www.trademarkia.com/assets/images/logo_trademarkia.png"
            className="w-[13vw] ml-[1vw]"
            alt="Image not available."
          />
        </div>
        <div className="h-[7vh] flex justify-center items-center px-[0.8rem] pl-[0.5rem] border border-gray-500/50 rounded-md">
          <input
            type="text"
            placeholder="Search by Name, Owner, Law Firm, or Status"
            value={searchQuery}
            className="w-[42vw] h-[5vh] border-none outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white w-[7vw] h-[7vh] p-4 text-[1.1rem] font-semibold rounded-lg border-none hover:bg-blue-500/90 cursor-pointer"
          >
            Search
          </button>
        </div>
        <div>
          <button className="bg-orange-600 text-white w-[14vw] h-[7vh] p-4 text-[1.1rem] font-semibold rounded-lg border-none ml-[6vw] hover:bg-orange-600/90 cursor-pointer">
            Apply for Trademark
          </button>
        </div>
      </div>
      <Navbar />
      <hr />
      <div className="trade-card-heading">
        <h2>Mark</h2>
        <h2>Details</h2>
        <h2>Status</h2>
        <h2>Class/Description</h2>
      </div>
      <hr />
      <br />
      <div className="main-trade-card">
        <div className="tradeCards1">
          {filteredHits.length > 0 ? (
            filteredHits.map((hit) => (
              <TradeCard
                key={hit._id}
                name={hit._source.attorney_name}
                owner={hit._source.current_owner}
                lawfirm={hit._source.law_firm}
                tradeId={hit._id}
                tradeDate={formatDate(
                  hit._source.filling_date ||
                    hit._source.filing_date ||
                    hit._source.application_date
                )}
                status={hit._source.status_type}
                statusDate={formatDate(hit._source.status_date)}
                renewalDate={formatDate(hit._source.renewal_date)}
                description1={
                  hit._source.mark_description_description?.[0] || "N/A"
                }
                description2={
                  hit._source.mark_description_description?.[1] || "N/A"
                }
              />
            ))
          ) : (
            <p>No Data Found...</p>
          )}
        </div>
        <div className="w-[30vw] flex justify-center">
          <div className="flex flex-col gap-4 h-[600px]">
            <div className="w-[19vw] h-[8vw] shadow-[0_0_3px_3px_rgb(128,128,128,0.5)] p-8 rounded-md">
              <pre>
                <h2 className="font-semibold"> Status</h2>
              </pre>
              <button className="button">All</button>
              <button className="button">🟢 Registered</button>
              <button className="button">🟡 Pending</button>
              <button className="button">🔴 Abandoned</button>
              <button className="button">🔵 Others</button>
            </div>
            <div className="w-[19vw] h-[39vh] mt-[2vh] p-2 shadow-[0_0_3px_3px_rgb(128,128,128,0.5)] rounded-md">
              <div className="flex gap-[1vw]">
                <button
                  onClick={() => handleDisplayClick("owners")}
                  className="status-btn"
                >
                  Owner
                </button>
                <button
                  onClick={() => handleDisplayClick("lawfirms")}
                  className="status-btn"
                >
                  Law Firms
                </button>
                <button
                  onClick={() => handleDisplayClick("attorneys")}
                  className="status-btn"
                >
                  Attorneys
                </button>
              </div>
              <hr />
              <br />
              <div className="mt-[3vh]">
                {listSelected ? (
                  displayList.length > 0 ? (
                    displayList.map((item, index) => (
                      <div key={index}>
                        <span
                          onClick={() => handleFilterClick(item)}
                          className="firm-name"
                          style={{ cursor: "pointer" }}
                        >
                          {item}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p>Nothing to show</p>
                  )
                ) : (
                  <p className="flex justify-center items-center h-[27vh] text-[1rem] font-bold text-gray-400">
                    {`"No data Click on any option to see"`}
                  </p>
                )}
              </div>
            </div>
            <div className="w-[19vw] p-2 mt-[2vh] shadow-[0_0_3px_3px_rgb(128,128,128,0.5)] rounded-md">
              <pre>
                <h2 className="font-semibold"> Display</h2>
              </pre>
              <button className="w-[50%] bg-gray-300">Grid View</button>
              <button className="w-[50%]  bg-gray-300">List View</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
