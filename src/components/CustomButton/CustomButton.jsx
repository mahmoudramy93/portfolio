import "./customButton.scss";

const CustomButton = ({ text }) => {
  return (
    <a href="https://kma.edu.eg/" className="custom-btn" target="_blank">
      {text}
    </a>
  );
};

export default CustomButton;
