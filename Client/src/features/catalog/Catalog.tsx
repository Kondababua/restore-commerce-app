import type { Product } from "../../app/models/product";
import ProductList from "./ProductList";

type Props = {
  productList: Product[];
};

export default function Catalog({ productList }: Props) {
  return (
    <>
      <ProductList productList={productList} />
    </>
  );
}
