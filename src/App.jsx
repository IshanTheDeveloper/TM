import { useEffect, useState } from "react";
import Header from "./Components/Header/header";
import Navbar from "./Components/Navbar/navbar";
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
        setData(result);
        setHits(result?.body?.hits?.hits || []);
        setFilteredHits(result?.body?.hits?.hits || []);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

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
      <div className="header-container">
        <div className="company-logo">
          <img
            src="https://www.trademarkia.com/assets/images/logo_trademarkia.png"
            alt="Image not available."
          />
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by Name, Owner, Law Firm, or Status"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="search-button">
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      <Navbar />
      <div className="tradeCards">
        <div className="tradeCards1">
          {filteredHits.length > 0 ? (
            filteredHits.map((hit) => (
              <TradeCard
                key={hit._id}
                name={hit._source.attorney_name}
                owner={hit._source.current_owner}
                lawfirm={hit._source.law_firm}
                tradeId={hit._id}
                tradeDate={hit._source.filling_date}
                status={hit._source.status_type}
                statusDate={hit._source.status_date}
                renewalDate={hit._source.renewal_date}
                description1={hit._source.mark_description_description[0]}
                description2={hit._source.mark_description_description[1]}
              />
            ))
          ) : (
            <p>No Data Found...</p>
          )}
        </div>
        <div className="tradeCards2">
          <div className="status-container">
            <div className="status-container1">
              <h2>Status</h2>
              <button>All</button>
              <button>🟢 Registered</button>
              <button>🟡 Pending</button>
              <button>🔴 Abandoned</button>
              <button>🔵 Others</button>
            </div>
            <div className="status-container2">
              <div className="status-container-buttons">
                <button onClick={() => handleDisplayClick("owners")}>
                  Owner
                </button>
                <button onClick={() => handleDisplayClick("lawfirms")}>
                  Law Firms
                </button>
                <button onClick={() => handleDisplayClick("attorneys")}>
                  Attorneys
                </button>
              </div>
              <div className="search-in-result">
                {displayList.map((item, index) => (
                  <div key={index}>
                    <span
                      onClick={() => handleFilterClick(item)}
                      style={{ cursor: "pointer", color: "black" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="display">
              <h2>Display</h2>
              <button>Grid View</button>
              <button>List View</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
