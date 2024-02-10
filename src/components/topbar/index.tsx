import React, { useEffect, useState } from "react";
import KUKEightLogo from "@/images/logo.png";
import { Image } from "@nextui-org/react";

const TopBar = (): React.JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop: number = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bookCategory = [
    "Fantasy",
    "Romance",
    "Historical Fiction",
    "Biography/Autobiography",
    "Science Fiction",
    "Thriller",
    "Horror",
    "Contemporary Fiction",
  ];

  return (
    <nav
      className={`py-2 px-6 fixed w-full top-0 z-10 transition-colors duration-400 ${
        isScrolled ? "bg-black text-white" : "bg-transparent text-black"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold">
            <div
              className="flex gap-3 items-center hover:opacity-50 cursor-pointer hover:text-2xl transition-opacity duration-300"
              style={{ transitionProperty: "font-size", transitionDuration: "300ms" }}
            >
              <div>
                <Image width={60} src={KUKEightLogo.src} />
              </div>
              <div>|</div>
              <div>The Bookstore</div>
            </div>
          </a>
          <div className="flex gap-5 text-base">
            {bookCategory.map((data, index) => (
              <div
                key={index}
                className="hover:opacity-50 cursor-pointer hover:text-2xl transition-opacity duration-300"
                style={{ transitionProperty: "font-size", transitionDuration: "300ms" }}
              >
                {data}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
