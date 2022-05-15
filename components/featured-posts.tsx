import PostsGrid from './posts/posts-grid';
import styles from '../styles/featured-posts.module.scss';

function FeaturedPosts(props: { posts: any; }) {
  return (
    <section className={styles["latest"]}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;