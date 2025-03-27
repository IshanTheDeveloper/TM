function TradeCard(props) {
  return (
    <>
      <div className="flex flex-row gap-[2vw] mt-[5vh] ml-[2vw] mb-[1vh] p-4 h-35 ">
        {/* Image Section */}
        <div className="w-[9vw] rounded-xl overflow-hidden ml-[2vw]">
          <img
            src="https://a0.anyrgb.com/pngimg/1162/398/challenging-%D0%BA%D0%B0%D0%B4%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%BE%D0%B9-%D1%81%D1%82%D0%BE%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8-challenging-apostille-security-policy-washburn-public-policy-preparedness-privacy-policy-policy-government.png"
            alt="Logo"
            className="w-[8vw] rounded-xl "
          />
        </div>

        {/* Trade Info */}
        <div className="flex flex-col gap-2 w-[26vw]">
          <div>
            <p className="font-bold">{props.name}</p>
            <p className="h-10">{props.owner}</p>
          </div>
          <div>
            <p>{props.tradeId}</p>
            <p>{props.tradeDate}</p>
          </div>
        </div>

        {/* Status & Renewal */}
        <div className="w-[10vw] flex flex-col gap-2 items-start">
          <div>
            <p className="text-green-600"> 🟢Live/{props.status}</p>
            <p className="ml-2 mt-1">{props.statusDate}</p>
          </div>
          <br />
          <div className="flex items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/128/724/724858.png"
              alt="Calendar Icon"
              className="w-[1vw] h-[2vh]"
            />
            <p>{props.renewalDate}</p>
          </div>
        </div>

        {/* Description */}
        <div className="w-[25vw] h-[10vh] overflow-hidden">
          <p>{props.description1}</p>
        </div>
      </div>
      <br />
    </>
  );
}

export default TradeCard;
