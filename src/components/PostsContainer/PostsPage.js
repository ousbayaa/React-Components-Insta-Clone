//Complete the necessary code in this file
// import useState
import DummyData from "../../dummy-data";
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 

const PostsPage = () => {
  // set up state for your data
  const [data, setData] = useState(DummyData)

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {data.map((element, index) => {
        return <Post key={index} post={element}/>
      })}
    </div>
  );
};

export default PostsPage;

