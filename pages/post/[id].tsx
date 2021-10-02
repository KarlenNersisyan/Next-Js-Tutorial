// import { useRouter } from "next/router";
import MainLayout from "../../components/MainLayout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Post({ post: serverPost }) {
  const router = useRouter();
  // console.log("router:::", router);

  const [post, setPost] = useState(serverPost);

  useEffect(() => {
    async function load() {
      const response = await fetch(
        `http://localhost:4200/posts/${router.query.id}`
      );
      const data = await response.json();

      setPost(data);
    }

    if (!serverPost) {
      load();
    }
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <p>Loading ...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={"Id Page"}>
      <h1>{post.title}</h1>
      <hr />
      <p> {post.body} </p>
      <Link href={"/posts"}>
        <a> Go to all Posts</a>
      </Link>
    </MainLayout>
  );
}

Post.getInitialProps = async ({ query, req }) => {
  // console.log("query::", ctx.query); // id

  if (!req) {
    return { post: null };
  }

  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await response.json();

  return { post };
};

// Server Side Render

// export async function getServerSideProps({ query }) {
//   const response = await fetch(`http://localhost:4200/posts/${query.id}`);
//   const post = await response.json();

//   // Pass data to the page via props
//   return { props: { post } };
// }
