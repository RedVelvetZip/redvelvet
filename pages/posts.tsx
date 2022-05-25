import Head from 'next/head';
import { Fragment } from 'react';

// import Hero from '../components/home-page/hero';
import AllPosts from '../components/posts/all-posts';
import { getAllPosts } from '../utils/posts-util';
import Header from '../components/Header';

function Posts(props: { posts: any; }) {
    return (
        <Fragment>
            <Head>
                <title>Red Velvet</title>
                <meta
                    name='description'
                    content='Crypto, Coding, Finance, and more'
                ></meta>
            </Head>
            <Header />
            <AllPosts posts={props.posts} />
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

export default Posts;
