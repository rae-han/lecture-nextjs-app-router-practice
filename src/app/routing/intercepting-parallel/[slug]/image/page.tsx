import { notFound } from 'next/navigation';

import DUMMY_NEWS from '../../../../../../dummy-news';
import React from 'react';

interface Props {
  params: {
    slug: string | undefined
  }
}

console.log(1112)

export default async function ImagePage({params}: Props) {
  const {slug: newsItemSlug} = await params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <h2>Normal.</h2>
      <div className="fullscreen-image">
        {/*<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />*/}
        <h2>{newsItem.title}</h2>
        <img src={`/images/news/icon_logo.png`} alt={newsItem.title} />
        <p>{newsItem.content}</p>
      </div>
    </>
  );
}