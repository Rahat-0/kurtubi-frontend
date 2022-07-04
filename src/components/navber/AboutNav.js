import React from "react";
import NavView from "./NavView";

const AboutNav = () => {
    const heading1 = 'About US'
    const heading2 = 'About our Campus'
    const heading3 = 'History'
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
        
      ];

  return (
    <div>
        <NavView data1={data1} data2={data2} data3={data3} heading1 = {heading1} heading2={heading2} heading3= {heading3}  />
    </div>
  );
};

export default AboutNav;
