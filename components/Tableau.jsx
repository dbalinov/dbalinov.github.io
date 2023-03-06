import React, { useEffect, useRef } from 'react';

export const Tableau = ({ url }) => {
  const ref = useRef(null);

  const options = { hideTabs: true }

  useEffect(() => {
    if (ref.current) {
      new tableau.Viz(ref, url, options);
    }
  }, [ref])

  return (
    <div ref={ref}></div>
  );
}