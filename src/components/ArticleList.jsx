import React from "react";
import Article from './Article'; // Import the blueprint we just made

function ArticleList({ posts }) {
  return (
    <main>
        {posts.map((post) => 
        (
            <Article 
                key={post.id} // Unique identifier required by React
                title={post.title} 
                date={post.date} 
                preview={post.preview} 
            />
        ))}
    </main>
  )
}

export default ArticleList;