import { notFound } from 'next/navigation';


import DUMMY_NEWS from '../../../../../../dummy-news';
import React from 'react';

interface Props {
  params: {
    slug: string | undefined
  }
}

export default async function InterceptedImagePage({ params }: Props) {
  const {slug: newsItemSlug} = await params;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  console.log(1111)

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <h2>Intercepted!</h2>
      <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      </div>
    </>
  );
}