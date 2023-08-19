import React from "react";
import Loading from "./Loading";
import Pagination from "./Pagination";

const Posts = ({ posts }) => {
  return (
    <>
      <section className="font-Montserrat text-sm w-fit py-3 px-5 rounded-3xl bg-teal-100 shadow-lg md:text-xl mb-24">
        {posts.map((post) => {
          return (
            <article key={post.id} className="py-[5px] capitalize">
              {post.id}. {post.title}
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Posts;
