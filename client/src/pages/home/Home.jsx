import Header from "../../components/header/Header";
import "./home.css";
import {Sidebar} from "../../components/sidebar/Sidebar"; 
import {Posts} from "../../components/posts/Posts"
import axios from "axios";
// import { useLocation } from "react-router";
import { useEffect, useState } from "react";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  // const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data)
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar/>
       </div>  

    </>
  );
};
