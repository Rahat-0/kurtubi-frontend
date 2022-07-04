import React from "react";
import NavView from "./NavView";

const AcademicsNav = () => {
    const heading1 = 'this is Academics'
    const heading2 = 'Academics heading'
    const heading3 = 'Academic Events'
    const data1 = [
        { title: "new tag here", href: "##" },
        { title: "another tag here with link", href: "##" },
        { title: "new tag", href: "##" },
        { title: "this is dsfdsnew", href: "##" },
        { title: "this ifds new", href: "##" },
        { title: "this is fdsfdssdfsdfew", href: "##" },
        { title: "this is new", href: "##" },
        { title: "this is nefdsw", href: "##" },
      ];
 
      const data2 = [
        { title: "new tag here", href: "##" },
        { title: "another tag here with link", href: "##" },
        { title: "new tag", href: "##" },
        
      ];
      const data3 = [
        { title: "new tag here", href: "##" },
        { title: "another tag here with link", href: "##" },
        { title: "new tag", href: "##" },
        { title: "this ifdss new", href: "##" },
        { title: "this is new", href: "##" },
        
      ];

  return (
    <div>
        <NavView data1={data1} data2={data2} data3={data3} heading1 = {heading1} heading2={heading2} heading3= {heading3}  />
    </div>
  );
};

export default AcademicsNav;
