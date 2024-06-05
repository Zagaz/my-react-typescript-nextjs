import React from "react";

type BlogLayoutProps = {
  children: React.ReactNode;
};

export default function BlogLayout({ children }: BlogLayoutProps) {
  const style = {
    margin: 0,
    padding: "20px",
    backgroundColor: "lightgreen",
  };

  return (
    <>
     
        <div style={style}>Blog Header</div>
        {children}
       
      
    </>
  );
}
