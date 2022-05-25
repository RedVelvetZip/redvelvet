import Head from 'next/head';
import { Fragment } from 'react';
import Header from '../../components/Header';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../utils/posts-util';

function AllPostsPage(props: { posts: any; }) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name='description'
          content='A list of topics realted to crypto, coding, finance and more! '
        ></meta>
      </Head>
      <Header />
      Under Construction
      <AllPosts posts={props.posts} />;
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
