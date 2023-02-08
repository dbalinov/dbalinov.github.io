import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css';
import A from './html/A';
import Code from './html/Code';
import Pre from './html/Pre';

export default function Markdown({ children }: any) {
  return (
    <ReactMarkdown
      remarkPlugins={[
        remarkGfm,
        remarkMath
      ]}
      rehypePlugins={[
        rehypeKatex,
        rehypeRaw
      ]}
      components={{
        a: A,
        code: Code,
        pre: Pre
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

