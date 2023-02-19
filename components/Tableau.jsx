import React, { useEffect, useRef } from 'react';
import Script from "next/script"


export const Tableau =()=> {
  const ref = useRef(null);
  const url =  "https://public.tableau.com/views/SEBRAdashboard/Story";

  useEffect(() => {
    const {tableau} = window;
    const options = {hideTabs: true,};
    new tableau.Viz(ref.current,url, options);
  }, []);

  return (
    <>
      <Script type="text/javascript" src="https://public.tableau.com/javascripts/api/tableau-2.min.js"></Script>
      <div ref={ref} style={{width:'70%', margin:'auto'}}></div>
    </>
  );
}