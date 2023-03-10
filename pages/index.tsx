import axios from "axios";
import Slider from "../components/Slider";
import ApiResponse from "../types/apiResponse";
import { Brand } from "../types/brand";
import Category from "../types/category";
import SliderImage from "../types/sliderImage";
import SliderSection from "../components/SliderSection";
import ItemsSection from "../components/ItemsSection";
import styles from "../styles/home-page.module.css";
import Product from "../types/product";
import Section from "../components/Section";

type Props = {
  sliderData: ApiResponse<SliderImage>;
  categories: ApiResponse<Category>;
  brands: ApiResponse<Brand>;
  featuredItems: ApiResponse<Product>;
  mostViewedItems: ApiResponse<Product>;
};

const Home = ({ sliderData, categories, brands, featuredItems, mostViewedItems }: Props) => {
  return (
    <>
      <Slider images={sliderData.results} />
      <Section title="Main Categories">
        <SliderSection
          containerCssClass={styles["main-categories"]}
          items={categories.results.map((cat) => ({
            id: cat.id,
            image: cat.image,
            title: cat.name,
          }))}
        />
      </Section>
      <Section title="Popular Brands">
        <SliderSection
          containerCssClass={styles["brands"]}
          items={brands.results.map((brand) => ({
            id: brand.id,
            image: brand.image,
            title: `Up to ${brand.sale_percentage}%`,
          }))}
        />
      </Section>
      <Section title="Featured Items" >
      <ItemsSection
        products={featuredItems.results}
      />
      </Section>
      <Section title="Most Viewed Items" >
      <ItemsSection
        products={mostViewedItems.results}
      />
      </Section>
    </>
  );
};

export async function getStaticProps() {
  const urls = [
    "https://api-task.bit68.com/en/api/slider_image/",
    "https://api-task.bit68.com/en/api/categories/",
    "https://api-task.bit68.com/en/api/brands/",
    "https://api-task.bit68.com/en/api/items?type=featured",
    "https://api-task.bit68.com/en/api/items?type=most_viewed",
  ];
  const resList = await Promise.all(urls.map((url) => axios.get(url)));
  const data = await Promise.all(resList.map((res) => res.data));
  const [sliderData, categories, brands, featuredItems, mostViewedItems] = data;
  return {
    props: { sliderData, categories, brands, featuredItems, mostViewedItems },
    revalidate: 10 * 60,
  };
}

export default Home;
