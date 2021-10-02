import MainLayout from "../components/MainLayout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MyPost } from "../interfaces/post";
import { NextPageContext } from "next";

interface PostsPageProps {
  posts: MyPost[];
}

export default function Posts({ posts: serverPosts }: PostsPageProps) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/posts/`);
      const data = await response.json();

      setPosts(data);
    }

    if (!serverPosts) {
      load();
    }
  }, []);

  if (!posts) {
    return (
      <MainLayout>
        <p>Loading ...</p>
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

Posts.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return { posts: null };
  }

  const response = await fetch(`${process.env.API_URL}/posts`);
  const posts:MyPost[] = await response.json();

  // const todos = await fetch("https://jsonplaceholder.typicode.com/todos").then(
  //   (res) => res.json()
  // );

  // console.log("posts::", posts);

  return { posts };
};
