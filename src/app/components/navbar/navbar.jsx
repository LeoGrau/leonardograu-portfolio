// My Own Components
import "./navbar.css";

// React Components
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar flex justify-between items-center px-5">
      <div>
        <h1>Leonardo Grau</h1>
      </div>
      <ul className="flex gap-4">
        <li>
          <Link href="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/pages/contact-page">
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
