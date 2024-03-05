import { useState } from "react";
import styles from "./Pricing.module.sass";
import priceImg from "../../images/pricingImg.png";
import pricingBg from "../../images/pricingBg.png";

import LeftSliderArrow from "./../../svg/LeftSliderArrow";
import RightSliderArrow from "./../../svg/RightSliderArrow";
import PricingItem from "../PricingItem/PricingItem";

const items = [
  {
    id: 1,
    image: priceImg,
    price: { from: 1, to: 2 },
    description: `Developers with little work experience up to 2 years, that have just
            completed courses/training and are full of enthusiasm and energy to
            perform various tasks.`,
  },
  {
    id: 2,
    image: priceImg,
    price: { from: 3, to: 4 },
    description: `Developers with little work experience up to 2 years, that have just
            completed courses/training and are full of enthusiasm and energy to
            perform various tasks.`,
  },
  {
    id: 3,
    image: priceImg,
    price: { from: 5, to: 6 },
    description: `Developers with little work experience up to 2 years, that have just
            completed courses/training and are full of enthusiasm and energy to
            perform various tasks.`,
  },
];

const Pricing = () => {
  const [currentSlide, setCurrentSlide] = useState(2);

  const slideForward = () => {
    if (currentSlide < items.length) {
      setCurrentSlide((prev) => prev + 1);
    }
  };
  const slideBack = () => {
    if (currentSlide > 1) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <section className={styles.pricing_container}>
      <h2>Pricing</h2>
      <p className={styles.main_description}>
        When it comes to financial services—be it insurance, wealth management,
        or lending—nothing can replace the personal touch.
        <br />
        Telemarketing provides a direct channel of communication with potential
        clients, allowing financial advisors to answer questions, address
        concerns, and cultivate trust.
        <br />
        When it comes to financial services—be it insurance, wealth management,
        or lending—nothing can replace the personal touch.
      </p>
      <div className={styles.slider_btns}>
        <div
          className={`${styles.slider_btn_left} ${styles.slider_btn}`}
          onClick={() => slideBack()}
          style={{ borderColor: currentSlide === 1 ? "#B8BABF" : "#EE5622" }}
        >
          <LeftSliderArrow fill={currentSlide === 1 ? "#B8BABF" : "#EE5622"} />
        </div>
        <div
          className={`${styles.slider_btn_left} ${styles.slider_btn}`}
          onClick={() => slideForward()}
          style={{ borderColor: currentSlide === 3 ? "#B8BABF" : "#EE5622" }}
        >
          <RightSliderArrow fill={currentSlide === 3 ? "#B8BABF" : "#EE5622"} />
        </div>
      </div>
      <section className={styles.pricing_options}>
        <div className={styles.imageBg_wrapper}>
          <img src={pricingBg} alt="bg" />
        </div>
        {items.map((item) => (
          <PricingItem key={item.id} item={item} currentSlide={currentSlide} />
        ))}
      </section>
    </section>
  );
};

export default Pricing;
