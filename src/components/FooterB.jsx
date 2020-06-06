import React from "react";

function FooterB() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Tim Bransford ⓒ {year}</p>
    </footer>
  );
}

export default FooterB;
