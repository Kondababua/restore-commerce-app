import { useParams } from "react-router-dom";
import type { Product } from "../../app/models/product";
import { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Grid2,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://localhost:7072/api/Products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!product) return <Typography variant="h5">Loading...</Typography>;

  const ProductDetails = [
    { name: "Name", value: product.name },
    { name: "Description", value: product.description },
    { name: "Type", value: product.type },
    { name: "Brand", value: product.brand },
    { name: "Quantity in Stock", value: product.quantityInStock.toString() },
  ];

  return (
    <Grid2 container spacing={6} maxWidth="lg" sx={{ mx: "auto" }}>
      <Grid2 size={6}>
        <img
          src={product?.pictureUrl}
          alt={product?.name}
          style={{ width: "100%", height: "auto" }}
        />
      </Grid2>
      <Grid2 size={6}>
        <Typography variant="h3">{product?.name}</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1">{product?.description}</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h4" color="primary">
          ${((product?.price ?? 0) / 100).toFixed(2)}
        </Typography>
        <TableContainer>
          <Table sx={{ "& td": { fontSize: "1rem" } }}>
            <TableBody>
              {ProductDetails.map((detail, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    {detail.name}
                  </TableCell>
                  <TableCell>{detail.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Grid2 container spacing={2} sx={{ mt: 4 }}>
          <Grid2 size={6}>
            <TextField
              label="Quantity in Cart"
              variant="outlined"
              type="number"
              fullWidth
              defaultValue={1}
            />
          </Grid2>
          <Grid2 size={6}>
            <Button
              sx={{ height: "55px" }}
              variant="contained"
              color="primary"
              size="large"
              fullWidth
            >
              Add to Cart
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
}
