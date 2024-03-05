import styles from "./Header.module.sass";
import ArrowRight from "../../svg/ArrowRight";
import Star from "../../svg/Star";

import img from "../../images/girl.jpg";
import videoimage from "../../images//videoslug.png";
import PlayArrow from "../../svg/PlayArrow";

const Header = () => {
  return (
    <header>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <div className={styles.info_container}>
          <h1>
            We develop anything what
            <br /> you desire
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Vestibulum est mi, feugiat id velit vel, pharetra rhoncus
            tellus.{" "}
          </p>
          <button>
            Get a free quote
            <span>
              <ArrowRight fill={"white"} />
            </span>
          </button>
          <div className={styles.rating}>
            <span className={styles.rated}>Rated</span>
            <span className={styles.stars}>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </span>
            <div className={styles.photos}>
              <div className={styles.photo}>
                <img src={img} alt="userphoto" />
              </div>
              <div className={styles.photo} style={{ left: "-8px" }}>
                <img src={img} alt="userphoto" />
              </div>
              <div className={styles.photo} style={{ left: "-16px" }}>
                <img src={img} alt="userphoto" />
              </div>
              <div className={styles.photo} style={{ left: "-24px" }}>
                <img src={img} alt="userphoto" />
              </div>
              <div className={styles.photo} style={{ left: "-32px" }}>
                <img src={img} alt="userphoto" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.video_container}>
          <img src={videoimage} alt="video" />
          <div className={styles.play_btn}>
            <PlayArrow />
          </div>
        </div>
        <button className={styles.mobile_btn}>
          Get a free quote
          <span>
            <ArrowRight fill={"white"} />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
