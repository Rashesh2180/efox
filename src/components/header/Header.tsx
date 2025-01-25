"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const handlemenuOpen = () => setMenuOpen(true);
  const handlemenuCLose = () => setMenuOpen(false);
  return (
   <header className="bg-white z-10 sticky">
     <div className="flex justify-between items-center top-0 max-w-[101.9rem] mx-auto px-4 sm:px-4 pb-2 pt-6">
      <Link href="#" className="h-16 max-w-56">
        <Image
          src={"/svg/logo/efox_logo.svg"}
          className="h-full w-full "
          width="0"
          height="0"
          alt="logo"
        />
      </Link>
      <div className="flex w-full justify-end items-center xl:gap-10 gap-5">
        <div className="hidden lg:flex xl:max-w-[40rem] max-w-lg w-full justify-between items-center">
          {[
            { list: "Destinations", href: "/" },
            { list: "How it works", href: "/" },
            { list: "Compatible devices", href: "/" },
          ].map((el, ind) => (
            <Link
              href={el.href}
              className="text-xl leading-8 tracking-wide hover:text-primary transition-all duration-300 ease-out hover:tracking-widest"
              key={ind}
            >
              {el.list}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2.5">
          <button className="text-xl flex gap-1.5 text-center items-center min-w-20 sm:min-w-28 font-semibold border border-bordercolor rounded-full p-4 outline-none">
            <Image
              src={"/svg/flag.svg"}
              height={32}
              width={32}
              className="h-8 w-8"
              alt="flag_logo"
            />

            <div className="flex gap-1 items-center">
              <span> EN</span>
              <Image
                src={"/svg/downchevron.svg"}
                height={12}
                width={6}
                className="h-1.5 w-3"
                alt="flag_logo"
              />
            </div>
          </button>

          <Link
            href="#"
            className="fs20 px-5 xl:px-9 py-4 max-lg:hidden text-center bg-primary rounded-full text-white font-semibold border border-primary hover:bg-white hover:text-primary"
          >
            Sign in
          </Link>
          <button
            onClick={handlemenuOpen}
            className="lg:hidden bg-primary h-11 w-11 flex items-center justify-center rounded-full"
          >
            <Image
              src={"/svg/menu.svg"}
              width="0"
              height="0"
              alt=""
              className="w-5 h-4"
            />
          </button>
          {menuOpen && (
            <div className="bg-[rgba(0,0,0,0.8)] absolute left-0 top-0 gap-8 h-screen lg:hidden flex-col flex w-full justify-center items-center">
              {[
                { list: "Destinations", href: "/" },
                { list: "How it works", href: "/" },
                { list: "Compatible devices", href: "/" },
              ].map((el, ind) => (
                <Link
                  href={el.href}
                  className="text-xl leading-8 tracking-wide text-white hover:text-primary"
                  key={ind}
                >
                  {el.list}
                </Link>
              ))}
              <Link
                href="#"
                className="fs20 px-9 py-4 lg:hidden text-center bg-primary rounded-full text-white font-semibold border border-primary hover:bg-white hover:text-primary"
              >
                Sign in
              </Link>
              <button
                className="text-red-600 text-4xl font-semibold absolute top-5 right-5"
                onClick={handlemenuCLose}
              >
                X
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
   </header>
  );
};

export default Header;
