import React from 'react';

type PageTitlePropsType = {
  title: string
}

export function PageTitle({ title }: PageTitlePropsType) {
  return (
    <h1>{title}</h1>
  );
}
