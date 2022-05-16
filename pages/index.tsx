import Head from 'next/head';
import { Fragment } from 'react';

// import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/posts/featured-posts';
import { getFeaturedPosts } from '../utils/posts-util';
import Header from '../components/Header';

function HomePage(props: { posts: any; }) {
  return (
    <Fragment>
      <Head>
        <title>Red Velvet Wiki</title>
        <meta
          name='description'
          content='Crypto, Coding, Finance, and more'
        ></meta>
      </Head>
      <Header />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
