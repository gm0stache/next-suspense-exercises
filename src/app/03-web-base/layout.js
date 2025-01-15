import React from "react";
import { Kanit } from "next/font/google";

import "./styles.css";

const primaryFont = Kanit({
  weight: ["300", "500"],
  subsets: ["latin"],
});

function WebBaseLayout({ children }) {
  return (
    <div
      className="web-base"
      style={{
        "--font-family-primary": primaryFont.style.fontFamily,
      }}
    >
      {children}
    </div>
  );
}

export default WebBaseLayout;
