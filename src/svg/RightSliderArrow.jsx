import PropTypes from "prop-types";

const RightSliderArrow = ({ fill }) => {
  return (
    <>
      <svg
        width="13"
        height="24"
        viewBox="0 0 13 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9986 12.6824C12.3572 12.2982 12.3572 11.702 11.9986 11.3177L2.4653 1.10346C2.08847 0.699711 1.45568 0.677891 1.05193 1.05472C0.648178 1.43156 0.626358 2.06435 1.00319 2.4681L9.89969 12.0001L1.00319 21.532C0.626358 21.9358 0.648178 22.5686 1.05193 22.9454C1.45568 23.3222 2.08847 23.3004 2.4653 22.8967L11.9986 12.6824Z"
          fill={fill}
        />
      </svg>
    </>
  );
};

RightSliderArrow.propTypes = {
  fill: PropTypes.string,
};

export default RightSliderArrow;
