import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-24 dark:bg-dark xl:p-20 lg:p-12 md:p-8 ${className}`}>
      {children}
    </div>
  )
};

export default Layout;
