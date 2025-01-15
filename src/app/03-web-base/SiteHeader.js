import React from "react";
import Link from "next/link";

import { getNavLinks } from "@/helpers/web-base-helpers";

async function SiteHeader({ isPlaceholder }) {
  let navLinks = isPlaceholder ? null : (await getNavLinks()).slice(0, 4);

  return (
    <header className="site-header">
      <Link href="" className="logo">
        WebBase
      </Link>
      <nav>
        <ol className="header-nav-links">
          {isPlaceholder
            ? null
            : navLinks.map(({ slug, label, href, type }) => (
                <li key={slug}>
                  <Link href={href} className={`header-nav-link ${type}`}>
                    {label}
                  </Link>
                </li>
              ))}
        </ol>
      </nav>
    </header>
  );
}

export default SiteHeader;
