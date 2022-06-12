// import { PostCardSmall } from "../components";
// import { getPosts } from "../services";
// import BlogLayout from "../components/Layout";
import styles from "../styles/search.module.scss";
import React, { useState, useEffect } from 'react';

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

import { PostCardSmall, PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";
import BlogLayout from "../components/Layout";

export default function Search({ posts }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className={styles["search"]}>
      <div className={styles["searchbar"]}>
        <form>
          <input type="text" placeholder="Search..."></input>
        </form>
      </div>
      <div className={styles["flex-container"]}>
        {posts.map((post, index) => (
          <div className={styles["flex-item"]}>
            <PostCardSmall key={index} post={post.node} />
          </div>
        ))}
      </div>
    </main>
    // <div className="container mx-auto px-10 mb-8">
    //   <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
    //     <div className="lg:col-span-8 col-span-1">
    //       {posts.map((post, index) => (
    //         <PostCard key={index} post={post.node} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
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
