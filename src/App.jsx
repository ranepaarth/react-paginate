import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Posts";

function App() {
  const [posts,setPosts] = useState([]);
  const [loading,setLoading] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage,setPostsPerPage] = useState(15);
  
  useEffect(()=> {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  },[]);

  console.log(posts);

    //Get Current Posts

    const indexOfLastPost = currentPage * postsPerPage;  //eg. currentPage=2 PostsPerPage=10 then indexOfLastPost = (2*10) =20
    const indexOfFirstPost = indexOfLastPost - postsPerPage; //eg. indexOfLastPost=20 postsPerPage=10 then indexOfFirstPost =(20-10)= 10 
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (<div className="flex justify-center flex-col items-center"><h1 className="text-2xl font-[400] bg-teal-300 mt-4 p-5 rounded-xl font-Montserrat shadow-md">My Blog</h1><Posts posts={currentPosts} loading={loading}/></div>);
}

export default App;
