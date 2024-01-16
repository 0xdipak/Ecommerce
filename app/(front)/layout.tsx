export default function FrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="container mx-auto flex-grow px-4">{children}</main>;
}
