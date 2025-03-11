import "./tradecard.css";
function TradeCard(props) {
  return (
    <div className="trade-container">
      <div className="trade-card">
        <div className="card-image">
          <img
            src="https://a0.anyrgb.com/pngimg/1162/398/challenging-%D0%BA%D0%B0%D0%B4%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%BE%D0%B9-%D1%81%D1%82%D0%BE%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8-challenging-apostille-security-policy-washburn-public-policy-preparedness-privacy-policy-policy-government.png"
            alt=""
          />
        </div>
        <div className="trade-card-details">
          <div>
            {" "}
            <p>{props.name}</p>
            {props.owner} <p></p>
          </div>
          <div>
            {" "}
            <p>{props.tradeId}</p> <p>{props.tradeDate}</p>
          </div>
        </div>
        <div className="trade-card-status">
          <div>
            {" "}
            <p>{`🟢 Live/${props.status}`}</p> <p>{props.statusDate}</p>
          </div>
          <div>
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/128/724/724858.png"
              alt=""
            />{" "}
            <p>{props.renewalDate}</p>
          </div>
        </div>
        <div className="trade-card-description">
          <div>{props.description1}</div>
        </div>
      </div>
    </div>
  );
}
export default TradeCard;
