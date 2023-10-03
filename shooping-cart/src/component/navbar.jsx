import "../input.css";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useSelector } from "react-redux";

export default function Navbar() {
   const data = useSelector((state) => state.cart.value);
   return (
      <section className="w-screen h-14 flex border-b-2 border-green-500 items-center justify-evenly">
         <div className="mx-8">
            <img
               src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
               alt="LOGO"
            />
         </div>
         <div></div>
         <div></div>
         <div>
            
         </div>
         <Menu as="div" className="relative inline-block text-left">
            <div>
               <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white text-sm font-semibold">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-6 h-6">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                     />
                  </svg>
               </Menu.Button>
            </div>

            <Transition
               as={Fragment}
               enter="transition ease-out duration-100"
               enterFrom="transform opacity-0 scale-95"
               enterTo="transform opacity-100 scale-100"
               leave="transition ease-in duration-75"
               leaveFrom="transform opacity-100 scale-100"
               leaveTo="transform opacity-0 scale-95">
               <Menu.Items className="absolute right-0 z-10 mt-2 w-60 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                     <form method="POST" action="#">
                        {data.map((item, index) => {
                           return (
                              <Menu.Item>
                                 <div className="flex justify-between items-center text-center ">
                                    <img className="" src={item.img} />
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                 </div>
                              </Menu.Item>
                           );
                        })}
                     </form>
                  </div>
               </Menu.Items>
            </Transition>
         </Menu>
         <div>
            <button>Masuk</button>
            <button>Daftar</button>
         </div>
      </section>
   );
}
