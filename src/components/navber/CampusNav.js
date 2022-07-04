import React from "react";
import NavView from "./NavView";

const CampusNav = () => {
    const heading1 = 'Campus Life'
    const heading2 = 'Campus Section of tangail'
    const heading3 = 'Campus Gallery'
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
        { title: "this is fds fsdfnew", href: "##" },
        { title: "this is new", href: "##" },
        { title: "this isfdsf new", href: "##" },
        { title: "this is new", href: "##" },
        { title: "this is fdsnew", href: "##" },
      ];
      const data3 = [
        { title: "new tag here", href: "##" },
        { title: "another tag here with link", href: "##" },
        { title: "new tag", href: "##" },
        { title: "this ifdss new", href: "##" },
        { title: "this is new", href: "##" },
        { title: "thissfdsis new", href: "##" },
        { title: "tfhis is nfdsfdsfsdew", href: "##" },
        { title: "tdsfdhis is new", href: "##" },
      ];

  return (
    <div>
        <NavView data1={data1} data2={data2} data3={data3} heading1 = {heading1} heading2={heading2} heading3= {heading3}  />
    </div>
  );
};

export default CampusNav;
