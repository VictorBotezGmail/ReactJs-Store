import { Grid } from "@mui/material"
import React from 'react';
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props 
{
    products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
   
  
    return (
      <Grid container spacing={4} sx={{ mb: 4 }}>
        {products.map((product, index) => (
          <Grid item xs={4} key={product.id}>
        
              <ProductCard  product={product} />
            
          </Grid>
        ))}
      </Grid>
    );
  };
  
  export default ProductList;


