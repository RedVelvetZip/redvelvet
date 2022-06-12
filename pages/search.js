import styles from "../styles/search.module.scss";
import React, { useState } from "react";
import { PostCardSmall, PostCard } from "../components";
import { getPosts } from "../services";
import BlogLayout from "../components/Layout";

export default function Search({ posts }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className={styles["search"]}>
      <div className={styles["searchbar"]}>
        <form>
          <input
            type="text"
            placeholder="Search..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </form>
      </div>
      <div className={styles["flex-container"]}>
        {posts
          .filter(
            (postItem) =>
              postItem.node.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) |
              postItem.node.excerpt
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) | //TODO: make this below array search case insensitive w another function
              postItem.node.categories
                .map((cat) => cat.name)
                .toString()
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
          )
          .map((post, index) => (
            <PostCardSmall key={index} post={post.node} />
          ))}
      </div>
    </main>
  );
}
Search.layout = BlogLayout;

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

// export default function Search({ posts }) {
//   return (
//     <main className={styles["search"]}>
//       <div className={styles["flex-container"]}>
//         {posts.map((post, index) => (
//           <div className={styles["flex-item"]}>
//             <PostCardSmall key={index} post={post.node} />
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }
// Search.layout = BlogLayout;

// // Fetch data at build time
// export async function getStaticProps() {
//   const posts = (await getPosts()) || [];
//   return {
//     props: { posts },
//   };
// }
