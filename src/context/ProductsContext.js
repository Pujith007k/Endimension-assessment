import React from 'react'



const ProductsDataContext = React.createContext({
    productsData:[],
    editProductsData : () => {},
})

export default ProductsDataContext 