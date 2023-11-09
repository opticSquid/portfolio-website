import RightCardMainContent from "./RightCardMainContent";
import RightCardNavBar from "./RightCardNavBar";

function RightCard() {
  return (
    <div className="w-3/5 flex flex-row">
      <RightCardMainContent />
      <RightCardNavBar />
    </div>
  );
}

export default RightCard;
