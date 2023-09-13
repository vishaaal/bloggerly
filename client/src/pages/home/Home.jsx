import Header from "../../components/header/Header";
import "./home.css";
import {Sidebar} from "../../components/sidebar/Sidebar"; 
import {Posts} from "../../posts/Posts"

export const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts/>
        <Sidebar/>
       </div>  

    </>
  );
};
