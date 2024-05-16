import {BrowserRouter,Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import ProductList from './components/ProductList'
import AddProduct from './components/AddProduct'
import ProductsDataContext from './context/ProductsContext'

import './App.css';
import {v4 as uuidv4} from 'uuid'
const initialProductsData=[
    {
        id: uuidv4(),
        Category : "Electronics",
        Name: "Smartphone",
        Description: "A sleek and powerful smartphone with advanced features like a high-resolution camera, long-lasting battery, and fast processor.",
        Price: 699.99
    },
    {   id: uuidv4(),
        Category: "Clothing",
        Name: "Men's Denim Jacket",
        Description: "A stylish denim jacket for men, perfect for casual outings or layering over shirts. Made from high-quality denim material.",
        Price: 59.99
    },
    {   id: uuidv4(),
        Category: "Home & Kitchen",
        Name: "Stainless Steel Cookware Set",
        Description: "A complete set of durable stainless steel cookware, including pots, pans, and utensils. Ideal for everyday cooking needs.",
        Price: 129.99
    },
    {   id: uuidv4(),
        Category: "Books",
        Name: "The Great Gatsby",
        Description: "A timeless classic novel by F. Scott Fitzgerald, depicting the glitz and glamour of the Jazz Age in America.",
        Price: 12.99
    },
    {   id: uuidv4(),
        Category: "Beauty",
        Name: "Facial Moisturizer",
        Description: "A nourishing facial moisturizer enriched with vitamins and natural extracts, designed to keep your skin hydrated and radiant.",
        Price: 24.99
    }
]

const App=()=>{
  const [productsData,setProductsData]=useState(initialProductsData)
  const editProductsData=(Data)=>{
    console.log(Data)
    setProductsData(Data)
  }
  return(
    <BrowserRouter>
    <ProductsDataContext.Provider value={{productsData ,editProductsData:editProductsData}}>
      <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/addProduct" element={<AddProduct />} />
      </Routes>
    </ProductsDataContext.Provider>
    </BrowserRouter>
  )
}

export default App;
