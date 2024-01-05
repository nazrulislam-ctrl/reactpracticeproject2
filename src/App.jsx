import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
function App() {
  const[products,setProducts]= useState([]);
  const[loading, setLoading]= useState(null);

  const productFetch = () => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });

  };

  useEffect(() => {
    productFetch();
  }, []);
console.log(products)
  return (
    <>
      <div className="mb-4">
      <Navbar/>
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
       {
        loading?(<span className="loading loading-spinner loading-lg"></span>):(
          <>
          { products.map((pod, i)=>(
            <Card key={i} cardInfo={pod}/>
           ))}
          </>
        )
       }
      </div>
    </>
  );
}

export default App;
