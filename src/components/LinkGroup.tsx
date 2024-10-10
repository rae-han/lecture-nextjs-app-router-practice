import React from 'react';
import Link from 'next/link';

interface Props {
  header?: string;
  items: {
    text: string;
    href: string;
  }[];
}

const LinkGroup = ({header, items}: Props) => {
  return (
    <section className={"py-4 px-8 border"}>
      {header ? <h2 className={"text-2xl font-bold"}>{header}</h2> : null}
      <ul className={'mt-4 pl-4'}>
        {items.map(item => (<li key={item.href} className={'list-decimal'}>
          <Link href={item.href}>
            {item.text}
          </Link>
        </li>))}
      </ul>
    </section>
  );
};

export default LinkGroup;