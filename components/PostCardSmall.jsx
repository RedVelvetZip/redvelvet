import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import styles from '../styles/search.module.scss'

import { graphCMSImageLoader } from '../util';

const PostCard = ({ post }) => (
  <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
    <div className="relative overflow-hidden shadow-md pb-40 mb-4">
      <img src={post.featuredImage.url} alt="" className="object-top absolute h-40 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
    </div>
    <h1 className={styles["post-card-title"]}>
      <Link href={`/post/${post.slug}`}>{post.title}</Link>
    </h1>
    <p className={styles["post-card-excerpt"]}>
      {post.excerpt}
    </p>
    <div className="text-center">
      <Link href={`/post/${post.slug}`} passHref>
        <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-black text-sm font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue</span>
      </Link>
    </div>
  </div>
);

export default PostCard;
