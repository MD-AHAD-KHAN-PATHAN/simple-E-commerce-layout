import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";


const Products = () => {

    const {products} = useLoaderData();
    

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 md:m-20 m-8">
            {
                products?.map(product => <Product product={product} key={product.id}></Product>)
            }
        </div>
    );
};

export default Products;