import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between">
      <div>Logo goes here</div>
      <div className="flex gap-8">
        <Link href="/">Home</Link>
        <Link href="/play">Play</Link>
        <Link href="/profile">Profile</Link>
      </div>
      <div>Other links here</div>
    </nav>
  );
}
