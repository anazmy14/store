import Image from "next/image";
import styles from "../styles/items-section.module.css";
import Product from "../types/product";

type Props = {
  products: Product[];
};

const calcDiscount = (product: Product) => {
  if (product.price_after_sale < product.price_before_sale)
    return product.price_before_sale - product.price_after_sale;

  return 0;
};

const ProductsSection = ({ products }: Props) => {
  return (
    <div>
      <div className={styles["products"]}>
        {products.map((product) => (
          <div className={styles["product"]} key={product.id}>
            <Image
              src={product.image}
              width={180}
              height={180}
              alt={product.name}
            />
            <p className={styles["product-name"]}> {product.name} </p>
            <p
              className={`${styles["product-price"]} ${
                calcDiscount(product) ? styles["discount"] : ""
              } `}
            > 
              EGP {" "}
              {product.price_after_sale}
              <span className={styles["discount-save"]}>
                {calcDiscount(product) ? `Save ${calcDiscount(product)}` : ""}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
