function ChoiceBtn({ choice, onClick}) {
  return (
    <button
      className="choice_btn"
      onClick={() => onClick(choice)}
    >
      {choice}
    </button>
  );
}

export default ChoiceBtn;