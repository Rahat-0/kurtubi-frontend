import React from "react";
import NavView from "./NavView";

const AdmissionNav = () => {
    const heading1 = 'this is Admission heading'
    const heading2 = 'Admission Offer'
    const heading3 = 'Catagory of Admission'
    const data1 = [
        { title: "new tag here", href: "##" },
        { title: "another tag here with link", href: "##" },
        { title: "new tag", href: "##" },
        { title: "this is dsfdsnew", href: "##" },
       
      ];
 
      const data2 = [
        { title: "new tag here", href: "##" },
        { title: "another tag here with link", href: "##" },
        { title: "new tag", href: "##" },
        { title: "this is fds fsdfnew", href: "##" },
        { title: "this is new", href: "##" },
        { title: "this isfdsf new", href: "##" },
       
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

export default AdmissionNav;
