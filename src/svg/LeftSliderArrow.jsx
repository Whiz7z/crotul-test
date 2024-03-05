import PropTypes from "prop-types";

const LeftSliderArrow = ({ fill }) => {
  return (
    <>
      <svg
        width="12"
        height="24"
        viewBox="0 0 12 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.501367 11.3176C0.142774 11.7018 0.142774 12.298 0.501367 12.6823L10.0347 22.8965C10.4115 23.3003 11.0443 23.3221 11.4481 22.9453C11.8518 22.5684 11.8736 21.9357 11.4968 21.5319L2.60031 11.9999L11.4968 2.46797C11.8736 2.06422 11.8518 1.43143 11.4481 1.05459C11.0443 0.677758 10.4115 0.699579 10.0347 1.10333L0.501367 11.3176Z"
          fill={fill}
        />
      </svg>
    </>
  );
};

LeftSliderArrow.propTypes = {
  fill: PropTypes.string,
};
export default LeftSliderArrow;
