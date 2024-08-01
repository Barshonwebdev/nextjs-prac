import React from "react";

const page = async () => {
  const res = await fetch("http://localhost:4000/posts", {
    cache:"no-store"
  });
  const posts = await res.json();
  console.log(posts); 

  return (
    <div>
      <h1 className="my-5 text-3xl text-center text-green-700">Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="card m-5 bg-gray-300 w-full shadow-xl">
          
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.description}</p>
            <p>Likes: {post.likeCount}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">See more</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
