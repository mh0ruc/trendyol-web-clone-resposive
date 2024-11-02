import React, { useState, useEffect } from "react";

const Goup = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll event handler
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center p-2 bg-white text-gray-700 border border-gray-300 rounded-full shadow hover:bg-gray-100"
        >
          <span className="mr-2">⬆️</span> Yukarı Çık
        </button>
      )}
    </div>
  );
};

export default Goup;
