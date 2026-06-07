import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import type { Product } from "../../app/models/product";

export default function Catalog() {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:7072/api/Products")
      .then((res) => res.json())
      .then((data) => setProductList(data));
  }, []);

  return (
    <>
      <ProductList productList={productList} />
    </>
  );
}
