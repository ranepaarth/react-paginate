import React, { useState, useEffect } from "react";
import Loading from "../Loading";

const Theme2 = () => {
  const [products, setProducts] = useState([]);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch("https://dummyjson.com/products?limit=90");
    const data = await res.json();
    setLoading(false);
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

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  if (loading) {
    return (
      <div className="h-[80dvh] flex justify-center items-center">
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="bg-neutral-100 h-[90vh] min-w-full font-Montserrat">
        {products.length > 0 && (
          <div className="m-[20px] grid gap-[20px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/*we have used .slice(START,END) method of arrays which slices our array and displays data within the range specified including the START INDEX and excluding the END INDEX */}

            {products.slice(page * 9 - 9, page * 9).map((product) => {
              return (
                <span
                  className="h-[250px] p-[20px] bg-teal-200 text-center rounded-lg cursor-pointer border border-neutral-400 shadow-lg"
                  key={product.id}
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-[100%] h-[90%] object-cover mb-[8px]"
                  />
                  <span>{product.title}</span>
                </span>
              );
            })}
          </div>
        )}

        <div className="flex justify-center items-center pb-5 gap-x-2 md:gap-x-4 text-sm cursor-pointer ">
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={
              page > 1 ? "bg-teal-300 p-2 md:p-3 text-xs rounded-md" : "hidden"
            }
          >
            Prev
          </span>
          <span className="flex justify-center items-center  gap-x-3 md:gap-x-8">
            {[...Array(products.length / 10)].map((_, index) => {
              return (
                <span
                  onClick={() => selectPageHandler(index + 1)}
                  className="bg-teal-300 p-2 md:p-4 rounded-full w-6 h-6 flex items-center justify-center"
                >
                  {index + 1}
                </span>
              );
            })}
          </span>
          <span
            onClick={() => selectPageHandler(page + 1)}
            className={
              page < products.length / 10
                ? "bg-teal-300 p-2 rounded-md text-xs md:p-3"
                : "hidden"
            }
          >
            Next
          </span>
        </div>
      </div>
    );
  }
};

export default Theme2;
