export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", gap: 16 }}>
      <aside style={{ width: 240, background: "#f0f0f0", padding: 16 }}>
        sidebar
      </aside>
      <main style={{ flex: 1, padding: 16 }}>{children}</main>
    </div>
  );
}
