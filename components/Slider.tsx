import { Slide } from "react-slideshow-image";
import { SliderImage } from "../types/sliderImage";
import Image from "next/image";
import styles from "../styles/slider.module.css";
import "react-slideshow-image/dist/styles.css";

type Props = {
  images: SliderImage[];
};

const Slider = ({ images }: Props) => {
  const properties = {
    prevArrow: (
      <button className={styles["arrow"]}>
        <Image
          src="/slider-arrow-left.svg"
          width={100}
          height={50}
          alt="prev button"
        />
      </button>
    ),
    nextArrow: (
      <button className={styles["arrow"]}>
        <Image
          src="/slider-arrow-right.svg"
          width={100}
          height={50}
          alt="next button"
        />
      </button>
    ),
  };
  const indicators = () => <div className={styles["indicator"]} />;

  return (
    <Slide cssClass={styles["slider"]} {...properties} indicators={indicators}>
      {images.map((image) => (
        <div className="each-slide-effect" key={image.id}>
          {/* <div className={styles["img-box"]} style={{ backgroundImage: `url(${image.image})`}}/>        */}
          <img className={styles["img"]} src={image.image} alt="" />
        </div>
      ))}
    </Slide>
  );
};

export default Slider;
