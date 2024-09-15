import {Routes,Route, Navigate} from 'react-router-dom'
import ProductsListing from './ProductsListing'


const ProductsPage=()=>{
    return (
      <Routes>
        <Route path="/products-listing" element={<ProductsListing />} index />

        <Route path="/" element={<Navigate to="/admin/product/products-listing" />} />
      </Routes>
    );
}


export default ProductsPage;