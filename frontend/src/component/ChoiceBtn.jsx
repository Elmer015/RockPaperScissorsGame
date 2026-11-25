import rockHand from "../assets/rockHand.jpg";
import paperHand from "../assets/paperHand.jpg";
import scissorsHand from "../assets/scissorsHand.jpg";

function ChoiceBtn({ choice, onClick}) {
    const images = {
        Rock: rockHand,
        Paper: paperHand,
        Scissors: scissorsHand,
  };
  return (
    <button
      className="choice_btn hover:shadow-lg hover:scale-125 transition-transform duration-300 rounded-lg bg-[#9EDAE5] p-1"
      onClick={() => onClick(choice)}
    >
    <img src={images[choice]} alt={choice} className="w-20 h-20" />
    </button>
  );
}

export default ChoiceBtn;