import Link from "next/link";

const routes = [
  { path: `${process.env.NEXT_PUBLIC_BASE_PATH}/terms-conditions`, name: "Terms & Conditions" },
  { path: `${process.env.NEXT_PUBLIC_BASE_PATH}/privacy-policy`, name: "Privacy Policy" }
];

export default function Footer() {
  return (
    <footer className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
      <small className="text-xs">&copy; All rights reserved.</small>
      <ul className="flex gap-x-3 sm:gap-x-8">
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
