import React from 'react';
import Link from 'next/link';
import './styles.css';
import Image from 'next/image';
import DUMMY_NEWS from '../../../../dummy-news';

const InterceptingParallelRouting = () => {
  return (
    <div>
      <h1>InterceptingParallelRouting</h1>
      <main>
        <ul className="news-list">
          {DUMMY_NEWS.map((newsItem) => (
            <li key={newsItem.id}>
              <Link href={`/routing/intercepting-parallel/${newsItem.slug}/image`}>
                <Image width={320} height={180} src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                <span>{newsItem.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default InterceptingParallelRouting;