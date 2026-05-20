import Link from "next/link";

export default function AppHeader() {
  return (
    <header>
      <nav>
        <ul style={{ display: "flex", gap: 8, listStyle: "none" }}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/auth/login">Login</Link>
          </li>
          <li>
            <Link href="/auth/register">Register</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
