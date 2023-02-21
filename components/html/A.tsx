export default function A({node, children, href, ...props}: any) {
  const external = href?.indexOf('https://data-for-good.bg') === -1 &&
    href?.indexOf('http://localhost:3000') === -1 &&
    href?.indexOf('https://dbalinov.github.io/') === -1 &&
    href?.indexOf('http') > -1;

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={ external ? 'noopener noreferrer' : undefined}
      className="text-blue-600 hover:no-underline"
      {...props}
    >
      {children}
    </a>
  )
}