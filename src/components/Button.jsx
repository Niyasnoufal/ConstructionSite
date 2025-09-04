import { useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const Button = (props) => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/contact");

  return (
    <button
      onClick={handleClick}
      className="group flex justify-center gap-x-2 items-center w-[200px] rounded-xl border border-textColor text-textColor hover:bg-textColor hover:text-mainBg transition duration-700 ease-in-out"
      style={{ marginTop: "30px", cursor: "pointer" }}
    >
      {/* removed the bad hover:p-20 */}
      <p className="m-0">{props.name}</p>

      {/* transition is on the span, with transform + group-hover */}
      <span
        className="w-[40px] h-[40px] rounded-full bg-black flex justify-center items-center transition-transform duration-500 ease-in-out transform group-hover:translate-x-4"
        style={{ marginTop: "10px", marginBottom: "10px" }}
      >
        <FiArrowUpRight className="text-textColor text-2xl" />
      </span>
    </button>
  );
};

export default Button;
