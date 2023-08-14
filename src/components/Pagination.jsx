import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <footer className="flex justify-center gap-2 bottom-20 fixed md:gap-4 md:bottom-10">
      {pageNumbers.map((number) => {
        return (
          <span
            key={number}
            className="text-sm border border-teal-500 flex items-center justify-center md:text-xl"
          >
            <button href="#" onClick={() => paginate(number)} className="w-8 h-8
            md:w-10 md:h-10
            active:bg-teal-500
            active:text-teal-50
             focus:outline-none focus:ring focus:ring-teal-500">{number}</button>
          </span>
        );
      })}
    </footer>
  );
};

export default Pagination;
