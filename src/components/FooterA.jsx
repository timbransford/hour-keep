import React from "react";

function FooterA() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Tim Bransford ⓒ {year}</p>
    </footer>
  );
}

export default FooterA;
