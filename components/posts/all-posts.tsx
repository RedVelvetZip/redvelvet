import PostsGrid from './posts-grid';
import styles from '../../styles/featured-posts.module.scss';

function AllPosts(props: { posts: any; }) {
  return (
    <section className={styles["latest"]}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;
