export function Wrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="padding-x padding-y max-width">{children}</div>;
}
