import Link from "next/link";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer
      className="text-gray-400 py-10 border-t z-20 relative"
      style={{
        backgroundColor: "var(--panel-color)",
        borderColor: "rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="mb-3 text-sm">{SITE.copyright}</p>
        <p className="text-sm space-x-3">
          <Link href={SITE.legalUrl} className="hover:text-accent transition-colors">
            Términos y Condiciones
          </Link>
          <span aria-hidden="true">|</span>
          <Link href={SITE.adminUrl} className="hover:text-accent transition-colors">
            Admin Login
          </Link>
        </p>
      </div>
    </footer>
  );
}
