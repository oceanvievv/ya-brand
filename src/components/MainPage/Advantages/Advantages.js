import "./css/advantages.scss";
import advantagesData from "../Advantages/js/advantagesData";
import AdvantageItem from "./AdvantageItem";

export default function Advantages() {
  return (
    <div className="advantages md:advantages_md lg:advantages_lg">
      <div className="advantages-items-wrapper lg:advantages-items-wrapper_lg">
        {advantagesData.map((data, i) => (
          <AdvantageItem key={i} data={data} />
        ))}
      </div>
    </div>
  );
}
