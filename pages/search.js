// import { PostCardSmall } from "../components";
// import { getPosts } from "../services";
// import BlogLayout from "../components/Layout";
// import styles from "../styles/search.module.scss";

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

import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import BlogLayout from '../components/Layout'

export default function Blog({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
Blog.layout = BlogLayout;

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

