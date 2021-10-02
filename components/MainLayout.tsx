import Link from "next/link";
import Head from "next/head";

export default function MainLayout({ children, title = "Next App" }) {
  return (
    <>
      <Head>
        <title>{title} | Next Course</title>
        <meta name="keywords" content="NextJs" />
        <meta name="description" content="This is tutorial for next" />
        <meta charSet="utf-8" />
      </Head>

      <nav>
        <Link href={"/"}>
          <a>Home</a>
        </Link>
        <Link href={"/about"}>
          <a>About</a>
        </Link>
        <Link href={"/posts"}>
          <a>Posts</a>
        </Link>
      </nav>

      <main>{children}</main>

      <style jsx global>
        {`
          nav {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            height: 60px;
            background: black;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
          }

          nav a {
            text-decoration: none;
            color: white;
          }

          main {
            margin-top: 60px;
            padding: 1rem;
          }
        `}
      </style>
    </>
  );
}
