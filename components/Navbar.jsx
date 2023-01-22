import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/images/logo.png";

export default function Navbar() {
  return (
    <div className="navbar">

      <div className="navbar-left">
        <Link href="/">
          <a className="d-flex">
            <Image
              src={Logo}
              alt="fake-twitch"
              width="36"
              height="36"
              className="nav-logo"
            />
          </a>
        </Link>
        <p className="p-3"> Browse </p>
        {/* three dot dropdown menu */}
      </div>


      {/* START Mid Side */}
        {/* Searchbox */}
      {/* End Mid Side */}

      {/* START Right Side */}
        {/* Acount Login  */}
      {/* End Right Side */}

    </div>
  );
}
