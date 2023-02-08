export default function Code({node, children, ...props}: any) {
  const childClassName = children?.find(() => true)?.props.className;

  if (childClassName == "language-vega-lite" || childClassName == "language-vega") {
    return (
      <>{children}</>
    )
  }

  return (
    <div {...props}>
      {children}
    </div>
  );
}