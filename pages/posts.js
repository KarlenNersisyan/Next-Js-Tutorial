import MainLayout from "../components/MainLayout";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Posts({ posts: serverPosts }) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(async () => {
    if (!serverPosts) {
      try {
        const response = await fetch("https://localhost:4200/posts");
        const json = await response.json();
        setPosts(json);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  if (!posts) {
    return (
      <MainLayout>
        <p>Loading ...</p>;
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Post Page">
      <h1>Post pages</h1>

      {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}

      <ul>
        {posts &&
          posts.map((post) => (
            <li key={post.id}>
              <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                <a> {post.title} </a>
              </Link>
            </li>
          ))}
      </ul>

      <style jsx global>
        {`
          ul {
            list-style: none;
            width: 200px;
            color: magenta;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            transition: 0.2s;
          }

          li {
            cursor: pointer;
            font-weight: 900;
          }
        `}
      </style>
    </MainLayout>
  );
}

Posts.getInitialProps = async ({ req }) => {
  if (!req) {
    return { posts: null };
  }

  const response = await fetch("http://localhost:4200/posts");
  const posts = await response.json();

  // const todos = await fetch("https://jsonplaceholder.typicode.com/todos").then(
  //   (res) => res.json()
  // );

  // console.log("posts::", posts);

  return { posts };
};
