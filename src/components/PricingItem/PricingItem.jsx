import PropTypes from "prop-types";
import styles from "../Pricing/Pricing.module.sass";
import ArrowRight from "../../svg/ArrowRight";

const PricingItem = ({ item, currentSlide }) => {
  return (
    <div
      key={item.id}
      className={`${styles.option} ${
        currentSlide === item.id
          ? styles.active
          : item.id < currentSlide
          ? styles.left
          : styles.right
      }`}
    >
      <div className={styles.image_wrapper}>
        <img src={item.image} alt="price" />
      </div>
      <p className={styles.price}>
        <span>${item.price.from}</span> to <span>${item.price.to}</span>
        /hour
      </p>
      <p className={styles.description}>{item.description}</p>
      <button>
        Hire now
        <span>
          <ArrowRight fill={"black"} />
        </span>
      </button>
    </div>
  );
};

PricingItem.propTypes = {
  item: PropTypes.object,
  currentSlide: PropTypes.number,
};

export default PricingItem;
