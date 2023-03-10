import axios from "axios";
import Slider from "../components/Slider";
import ApiResponse from "../types/apiResponse";
import { Brand } from "../types/brand";
import Category from "../types/category";
import SliderImage from "../types/sliderImage";
import SliderSection from "../components/SliderSection";
import styles from "../styles/home-page.module.css"

type Props = {
  sliderData: ApiResponse<SliderImage>;
  categories: ApiResponse<Category>;
  brands: ApiResponse<Brand>;
};

const Home = ({ sliderData, categories, brands }: Props) => {
  return (
    <>
      <Slider images={sliderData.results} />
      <SliderSection
        sectionTitle="Main Categories"
        containerCssClass={styles["main-categories"]} 
        items={categories.results.map(cat => ({
        id : cat.id,
        image: cat.image,
        title: cat.name
      }))} />
       <SliderSection
        sectionTitle="Popular Brands"
        containerCssClass={styles["brands"]} 
        items={brands.results.map(brand => ({
        id : brand.id,
        image: brand.image,
        title: `Up to ${brand.sale_percentage}%`
      }))} />
    </>
  );
};

export async function getStaticProps() {
  const urls = [
    "https://api-task.bit68.com/en/api/slider_image/",
    "https://api-task.bit68.com/en/api/categories/",
    "https://api-task.bit68.com/en/api/brands/",
    "https://api-task.bit68.com/en/api/items?type=featured",
  ];
  const resList = await Promise.all(urls.map((url) => axios.get(url)));
  const data = await Promise.all(resList.map((res) => res.data));
  const [sliderData, categories, brands, featuredItems] = data;
  console.log(featuredItems)

  return {
    props: { sliderData, categories, brands },
    revalidate: 10 * 60,
  };
}

export default Home;
