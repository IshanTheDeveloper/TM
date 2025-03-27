function TradeCard(props) {
  return (
    <div className="pl-[2vw] flex gap-[2vw] mt-[2vh]">
      <div className="flex gap-[2vw]">
        <div className="w-[8vw] rounded-xl overflow-hidden">
          <img
            src="https://a0.anyrgb.com/pngimg/1162/398/challenging-%D0%BA%D0%B0%D0%B4%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%BE%D0%B9-%D1%81%D1%82%D0%BE%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8-challenging-apostille-security-policy-washburn-public-policy-preparedness-privacy-policy-policy-government.png"
            alt=""
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-[2vw] w-[26vw] mt-[1vh]">
          <div>
            <p className="font-bold">{props.name}</p>
            <p>{props.owner}</p>
          </div>
          <div>
            <p>{props.tradeId}</p>
            <p>{props.tradeDate}</p>
          </div>
        </div>
        <div className="w-[10vw] flex flex-col gap-[4vw]">
          <div>
            <p className="text-green-600">🟢 Live/{props.status}</p>
            <p className="ml-[1.5vw] mt-[1vh]">{props.statusDate}</p>
          </div>
          <div className="flex mt-[-4vh] ml-[1.4vw]">
            <img
              src="https://cdn-icons-png.flaticon.com/128/724/724858.png"
              alt=""
              className="w-[0.9vw] h-[2vh] mt-[0.2vh]"
            />
            <p>{props.renewalDate}</p>
          </div>
        </div>
        <div className="w-[25vw] h-[11vh] overflow-hidden">
          <div>{props.description1}</div>
        </div>
      </div>
    </div>
  );
}

export default TradeCard;
