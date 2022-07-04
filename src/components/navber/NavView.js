import React from "react";
import './navber.css'
const NavView = ({ data1, data2, data3, heading1, heading2, heading3 }) => {
    // data1, data2, data3 --> datatype = array
    // heading1, heading2, heading3 --> datatype = String
    
  return (
    <div className="bg-gray-50">
      <div className="p-6 flex justify-between">
        <div className={!data1 && "hidden"}>
          <ul className="space-y-2">
            <li>
              <a href="##" className="font-bold text-blue-300 text-lg">
                {heading1}
              </a>
            </li>

            {data1 &&
              data1.map(({ title, href }) => (
                <li key={title}>
                  <a href={href} className="hover:underline">
                    {title}
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <hr />
        <div className={!data2 && "hidden"}>
          <ul className="space-y-2 border-l pl-7">
            <li>
              <a href="##" className="font-bold text-blue-300 text-lg">
                {heading2}
              </a>
            </li>
            {data2 &&
              data2.map(({ title, href }) => (
                <li>
                  <a href={href} className="hover:underline">
                    {title}
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <hr />
        <div className={!data3 && "hidden"}>
          <ul className="space-y-2 border-l pl-7">
            <li>
              <a href="##" className="font-bold text-blue-300 text-lg">
                {heading3}
              </a>
            </li>
            {data3 &&
              data3.map(({ title, href }) => (
                <li>
                  <a href={href} className="hover:underline">
                    {title}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavView;
