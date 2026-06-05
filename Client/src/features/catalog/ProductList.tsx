import { Box } from "@mui/material";
import type { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

type Props = {
  productList: Product[];
};

export default function ProductList({ productList }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "center",
      }}
    >
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Box>
  );
}
