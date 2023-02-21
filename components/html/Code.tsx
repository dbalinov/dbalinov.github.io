import { VegaLite, Vega } from 'react-vega'
import SyntaxHighlighter from 'react-syntax-highlighter';

export default function Code({node, inline, className, children, ...props}: any) {
  if (className?.indexOf('vega-lite') > - 1) {
    return (
      <VegaLite spec={eval("(" + children + ')')} />
    );
  }

  if (className?.indexOf('vega') > - 1) {
    return (
      <Vega spec={eval("(" + children + ')')} />
    );
  }

  const match = /language-(\w+)/.exec(className || '')
  return !inline && match ? (
    <SyntaxHighlighter
      language={match[1]}
      PreTag="div"
      {...props}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>{children}</code>
  );
}