import Highlight from 'react-highlight'
import React from 'react'
import { VegaLite } from 'react-vega'

export default function Code({ className, children }: any) {
  const language = className?.replace("lang-", "");
  if (className == 'lang-vega-lite') {
    const obj = eval("(" + children + ')');

    return (
      <VegaLite spec={obj} />
    );
  }

  console.log(language, 'lang-vega-lite');

  return (
    <Highlight className={`${className}`}>
      {children}
    </Highlight>
  );
}