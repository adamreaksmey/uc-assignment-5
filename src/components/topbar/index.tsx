import React, { useEffect, useState } from "react";

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

  return (
    <nav
      className={`py-4 px-6 fixed w-full top-0 z-10 ${
        isScrolled ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto">
        {/* Add your content for the top bar */}
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold">
            My Store
          </a>
          <div className="flex gap-5">
            <div>Hello</div>
            <div>Hello too</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
