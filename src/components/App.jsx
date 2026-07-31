import React from "react";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>

    {/* Pass the blog name to the Header */}
      <Header name={blogData.name} />
      
      {/* Pass the image and about text to the About section */}
      <About image={blogData.image} about={blogData.about} />
      
      {/* Pass the array of posts to the ArticleList */}
      <ArticleList posts={blogData.posts} />
  )
}

export default App;
