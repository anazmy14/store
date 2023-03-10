import { Slide } from "react-slideshow-image";
import Image from "next/image";
import styles from "../styles/slider-section.module.css";

type SliderItem = {
  id: string | number;
  image: string;
  title?: string;
};

type Props = {
  sectionTitle: string;
  items: SliderItem[];
  containerCssClass?: string;
};

const SliderSection = ({ items, sectionTitle ,containerCssClass }: Props) => {
  const properties = {
    prevArrow: (
      <button className={styles["arrow"]}>
        <Image
          src="/slider-arrow-left.svg"
          width={50}
          height={50}
          alt="prev button"
        />
      </button>
    ),
    nextArrow: (
      <button className={styles["arrow"]}>
        <Image
          src="/slider-arrow-right.svg"
          width={50}
          height={50}
          alt="next button"
        />
      </button>
    ),
  };

  return (
    <div className={`${styles["container"]} ${containerCssClass || ""} `}>
      <h3 className={styles["title"]}> {sectionTitle} </h3>
      <Slide
        cssClass={styles["slider"]}
        infinite={false}
        autoplay={false}
        slidesToShow={2}
        slidesToScroll={2}
        responsive={[
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
        ]}
        {...properties}
      >
        {items.map((item) => (
          <div key={item.id} className={styles["item"]}>
            <div className={styles["img-wrapper"]}>
              <Image
                width={140}
                height={140}
                src={item.image}
                alt={item.title || "item"}
              />
            </div>
            <p> {item.title}</p>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SliderSection;
