import Head from 'next/head';
import { Fragment } from 'react';

// import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/featured-posts';
import { getFeaturedPosts } from '../utils/posts-util';
import Header from '../components/Header';

function AllPosts(props: { posts: any; }) {
    return (
        <>
            <Header />
            <FeaturedPosts posts={props.posts} />
        </>
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

export default AllPosts;
