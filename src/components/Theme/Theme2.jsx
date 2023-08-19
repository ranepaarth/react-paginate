import React, { useState } from "react";
import { useEffect } from "react";

const Theme2 = () => {
  const [products, setProducts] = useState([]);

  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();

    // console.log(data);
    //optional chaining  same as  (data && data.products)
    if (data?.products) {
      setProducts(data.products);
    }
  };

  // console.log(products);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-neutral-100 h-[90vh] min-w-full">
      {products.length > 0 && (
        <div className="m-[20px] grid gap-[20px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/*we have used .slice(START,END) method of arrays which slices our array and displays data within the range specified including the START INDEX and excluding the END INDEX */}

          {products.slice(page * 10 - 10, page * 10).map((product) => {
            return (
              <span
                className="h-[250px] p-[20px] bg-neutral-50 text-center rounded-lg cursor-pointer border border-neutral-400 shadow-lg"
                key={product.id}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-[100%] h-[95%] object-cover mb-[3px]"
                />
                <span>{product.title}</span>
              </span>
            );
          })}
        </div>
      )}
      <div>
        <span>Prev</span>
        <span></span>
        <span>Next</span>
      </div>
    </div>
  );
};

export default Theme2;
