export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex flex-col items-center justify-center py-24">
      {children}
    </div>
  );
}
