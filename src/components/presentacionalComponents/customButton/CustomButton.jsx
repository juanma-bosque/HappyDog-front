import Style from "./CustomButton.module.css";
const CustomButton = () => {
  return (
    <div>
      <a href="#adopt">
        <button
          className={`${Style.effect} btn align-bottom `}
          style={{
            fontSize: "18px",
            color: "rgb(129, 204, 176)",
            borderRadius: "5px",
            border: "1px solid rgb(129, 204, 176)",
            height: "60px",
            width: "178px",
            backgroundColor: "#ffffff",
          }}
        >
          
          ADOPTA
        </button>
      </a>
    </div>
  );
};

export default CustomButton;
