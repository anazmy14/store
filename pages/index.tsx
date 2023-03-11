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
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {
  sliderData: SliderImage[];
  categories: Category[];
  brands: Brand[];
  featuredItems: Product[];
  mostViewedItems: Product[];
};

const Home = ({
  sliderData,
  categories,
  brands,
  featuredItems,
  mostViewedItems,
}: Props) => {
  return (
    <>
      <title> Store Locator </title>
      <Header />
      <Slider images={sliderData} />
      <Section title="Main Categories">
        <SliderSection
          containerCssClass={styles["main-categories"]}
          items={categories.map((cat) => ({
            id: cat.id,
            image: cat.image,
            title: cat.name,
          }))}
        />
      </Section>
      <Section title="Popular Brands">
        <SliderSection
          containerCssClass={styles["brands"]}
          items={brands.map((brand) => ({
            id: brand.id,
            image: brand.image,
            title: `Up to ${brand.sale_percentage}%`,
          }))}
        />
      </Section>
      <Section title="Featured Items">
        <ItemsSection products={featuredItems} />
      </Section>
      <Section title="Most Viewed Items">
        <ItemsSection products={mostViewedItems} />
      </Section>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const getALlPages = async (url: string) => {
    const allData: any[] = [];
    const getPage = async (url: string) => {
      if (!url) return;
      const res = await axios.get(url);
      const data: ApiResponse<any> = await res.data;
      allData.push(...data.results);
      await getPage(data.next);
    };
    await getPage(url);
    return allData;
  };

  const baseUrl = "https://api-task.bit68.com/en/api";

  const urls = [
    `${baseUrl}/slider_image/`,
    `${baseUrl}/categories/`,
    `${baseUrl}/brands/`,
    `${baseUrl}/items?type=featured`,
    `${baseUrl}/items?type=most_viewed`,
  ];
  const [sliderData, categories, brands, featuredItems, mostViewedItems] =
    await Promise.all(urls.map(async (url) => await getALlPages(url)));

  return {
    props: { sliderData, categories, brands, featuredItems, mostViewedItems },
    revalidate: 60,
  };
}

export default Home;
