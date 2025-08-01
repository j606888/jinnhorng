'use client'

import { use } from 'react'
import { PRODUCTS } from "@/lib/products";
import ProductDetail from "@/features/ProductPage/ProductDetail";

const ProductPage = ({ params }) => {
  const { id } = use(params);
  const product = PRODUCTS.find((product) => product.slug === id);
  if (!product) {
    return <div>Product not found</div>;
  }
  return <ProductDetail product={product} />;
};

export default ProductPage;