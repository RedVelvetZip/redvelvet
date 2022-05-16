import PostsGrid from './posts-grid';
import styles from '../../styles/featured-posts.module.scss';

function FeaturedPosts(props: { posts: any; }) {
  return (
    <section className={styles["latest"]}>
      <h1>Featured Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;