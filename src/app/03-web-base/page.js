import React from "react";

import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export const dynamic = "force-dynamic";

async function WebBaseHomepage({ isPlaceholder }) {
  // Check out `layout.js` to see the work that needs to be done.
  return (
    <>
      <SiteHeader isPlaceholder={isPlaceholder} />
      <main>
        <section className="hero">
          <h1>Harness the Power of Databases, Without Coding a Single Line</h1>
          <p className="subheading">
            Manage SQL, NoSQL, and beyond with an intuitive visual interface.
            Our service creates efficient, standardized database structures that
            are ready for immediate deployment or seamless handoff to your team.
          </p>
          <button className="cta">Start building</button>
        </section>
      </main>
      <SiteFooter isPlaceholder={isPlaceholder} />
    </>
  );
}

export default WebBaseHomepage;
