import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading....</h2>;
  }



  return (
    <section className="font-Montserrat my-10 p-8 rounded-3xl bg-teal-100">
      {posts.map((post) => {
        return (<article key={post.id} className="py-2 capitalize">
          {post.id}. {post.title}
        </article>);
      })}
    </section>
  );
};

export default Posts;
