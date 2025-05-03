"use client";
import { Logo } from "@/assets/navbar";
import { experienceArr, navArr } from "@/utils/navbar";
// import { navArrType, SubmenuItem, SuperSubmenuItem } from "@/types";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [openSubmenuId, setOpenSubmenuId] = useState<number | null>(null);
  const [openSuperSubmenuIndex, setOpenSuperSubmenuIndex] = useState<
    number | null
  >(null);
  const [openSuperSuperSubmenuIndex, setOpenSuperSuperSubmenuIndex] = useState<
    number | null
  >(null);

  return (
    <div className="relative">
      <section className="w-full h-20 flex items-center justify-between px-20 shadow-md bg-white z-50">
        <img src={Logo.src} className="w-16 h-16" alt="Logo" />

        {/* Main Navbar */}
        <div className="flex gap-6 items-center">
          {navArr.map((item) => (
            <div key={item.id} className="relative group">
              {item.submenu ? (
                <span
                  onClick={() =>
                    setOpenSubmenuId(openSubmenuId === item.id ? null : item.id)
                  }
                  className="uppercase text-sm font-semibold cursor-pointer hover:underline"
                >
                  {item.title}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="uppercase text-sm font-semibold hover:underline"
                >
                  {item.title}
                </Link>
              )}

              {/* Submenu */}
              {item.submenu && openSubmenuId === item.id && (
                <div className="absolute left-0 top-full mt-2 w-64 bg-gray-800 shadow-md rounded-md z-50">
                  {item.submenu.map((sub, subIndex) => (
                    <div key={subIndex} className="relative group">
                      {sub.superSubmenu ? (
                        <div
                          onClick={() =>
                            setOpenSuperSubmenuIndex(
                              openSuperSubmenuIndex === subIndex
                                ? null
                                : subIndex
                            )
                          }
                          className="block px-4 py-3 text-sm text-white hover:text-green-400 cursor-pointer"
                        >
                          {sub.name}
                        </div>
                      ) : (
                        <Link
                          href={`${item.url}${sub.path}`}
                          className="block px-4 py-3 text-sm text-white hover:text-green-400"
                        >
                          {sub.name}
                        </Link>
                      )}

                      {/* Super Submenu */}
                      {sub.superSubmenu &&
                        openSuperSubmenuIndex === subIndex && (
                          <div className="absolute left-full top-0 ml-2 w-64 bg-gray-700 shadow-md rounded-md z-50">
                            {sub.superSubmenu.map((superSub, superSubIndex) => (
                              <div
                                key={superSubIndex}
                                className="relative group"
                              >
                                {superSub.superSuperSubmenu ? (
                                  <div
                                    onClick={() =>
                                      setOpenSuperSuperSubmenuIndex(
                                        openSuperSuperSubmenuIndex ===
                                          superSubIndex
                                          ? null
                                          : superSubIndex
                                      )
                                    }
                                    className="block px-4 py-3 text-sm text-white hover:text-green-300 cursor-pointer"
                                  >
                                    {superSub.name}
                                  </div>
                                ) : (
                                  <Link
                                    href={`${item.url}${sub.path}${superSub.path}`}
                                    className="block px-4 py-3 text-sm text-white hover:text-green-300"
                                  >
                                    {superSub.name}
                                  </Link>
                                )}

                                {/* Super-Super Submenu */}
                                {superSub.superSuperSubmenu &&
                                  openSuperSuperSubmenuIndex ===
                                    superSubIndex && (
                                    <div className="absolute left-full top-0 ml-2 w-64 bg-gray-600 shadow-md rounded-md z-50">
                                      {superSub.superSuperSubmenu.map(
                                        (superSuper, superSuperIndex) => (
                                          <Link
                                            key={superSuperIndex}
                                            href={`${item.url}${sub.path}${superSub.path}${superSuper.path}`}
                                            className="block px-4 py-3 text-sm text-white hover:text-green-200"
                                          >
                                            {superSuper.name}
                                          </Link>
                                        )
                                      )}
                                    </div>
                                  )}
                              </div>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side experience */}
        <div className="w-44 h-16 pt-2 bg-green-600 text-center hover:bg-green-800 rounded">
          {experienceArr.map((item) => (
            <p key={item.id} className="text-white w-40">
              {item.title}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
// "use client";
// import { Logo } from "@/assets/navbar";
// import { experienceArr, navArr } from "@/utils/navbar";
// import Link from "next/link";
// import React, { useState } from "react";

// export default function Header() {
//   const [openSubmenuId, setOpenSubmenuId] = useState<number | null>(null);
//   const [openSuperSubmenuIndex, setOpenSuperSubmenuIndex] = useState<
//     number | null
//   >(null);

//   return (
//     <div className="relative">
//       <section className="w-full h-20 flex items-center justify-between px-20 shadow-md bg-white z-50">
//         <img src={Logo.src} className="w-16 h-16" alt="Logo" />

//         {/* Main Navbar */}
//         <div className="flex gap-6 items-center">
//           {navArr.map((item) => (
//             <div key={item.id} className="relative group">
//               {item.submenu ? (
//                 <span
//                   onClick={() =>
//                     setOpenSubmenuId(openSubmenuId === item.id ? null : item.id)
//                   }
//                   className="uppercase text-sm font-semibold cursor-pointer hover:underline"
//                 >
//                   {item.title}
//                 </span>
//               ) : (
//                 <Link
//                   href={item.url}
//                   className="uppercase text-sm font-semibold hover:underline"
//                 >
//                   {item.title}
//                 </Link>
//               )}

//               {/* Submenu */}
//               {item.submenu && openSubmenuId === item.id && (
//                 <div className="absolute left-0 top-full mt-2 w-64 bg-gray-800 shadow-md rounded-md z-50">
//                   {item.submenu.map((sub, subIndex) => (
//                     <div key={subIndex} className="relative group">
//                       {sub.superSubmenu ? (
//                         <div
//                           onClick={() =>
//                             setOpenSuperSubmenuIndex(
//                               openSuperSubmenuIndex === subIndex
//                                 ? null
//                                 : subIndex
//                             )
//                           }
//                           className="block px-4 py-3 text-sm text-white hover:text-green-400 cursor-pointer"
//                         >
//                           {sub.name}
//                         </div>
//                       ) : (
//                         <Link
//                           href={`${item.url}${sub.path}`}
//                           className="block px-4 py-3 text-sm text-white hover:text-green-400"
//                         >
//                           {sub.name}
//                         </Link>
//                       )}

//                       {/* Super Submenu */}
//                       {sub.superSubmenu &&
//                         openSuperSubmenuIndex === subIndex && (
//                           <div className="absolute left-full top-0 ml-2 w-64 bg-gray-700 shadow-md rounded-md z-50">
//                             {sub.superSubmenu.map((superSub, superSubIndex) => (
//                               <div
//                                 key={superSubIndex}
//                                 className="relative group"
//                               >
//                                 {superSub.name === "TRAINING" ||
//                                 superSub.name === "SHORT-TERM COURSES" ? (
//                                   <div
//                                     onClick={(e) => e.preventDefault()} // Prevent navigation
//                                     className="block px-4 py-3 text-sm text-white hover:text-green-300 cursor-pointer"
//                                   >
//                                     {superSub.name}
//                                   </div>
//                                 ) : (
//                                   <Link
//                                     href={`${item.url}${sub.path}${superSub.path}`}
//                                     className="block px-4 py-3 text-sm text-white hover:text-green-300"
//                                   >
//                                     {superSub.name}
//                                   </Link>
//                                 )}
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Right side experience */}
//         <div className="w-44 h-16 pt-2 bg-green-600 text-center hover:bg-green-800 rounded">
//           {experienceArr.map((item) => (
//             <p key={item.id} className="text-white w-40">
//               {item.title}
//             </p>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }
