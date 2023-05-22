import { useState } from "react";

export default function TabsComponent() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div>
      <div className="container mx-auto mt-3 p-4">
        <div className="flex flex-col w-full">
          <ul className="flex space-x-2">
            <li>
              <a
                href={void 0}
                onClick={() => setOpenTab(1)}
                className={` ${
                  openTab === 1 ? "bg-blue-2 text-white" : ""
                } inline-block px-4 py-2 text-grey-1 rounded shadow`}
              >
                MOUNTAIN 1
              </a>
            </li>
            <li>
              <a
                href={void 0}
                onClick={() => setOpenTab(2)}
                className={` ${
                  openTab === 2 ? "bg-blue-2 text-white" : ""
                } inline-block px-4 py-2 text-grey-1 rounded shadow`}
              >
                MOUNTAIN 2
              </a>
            </li>
          </ul>
          <div className="p-3 mt-6 bg-white border">
            <div className={openTab === 1 ? "block" : "hidden"}>
            <img src="./images/tab_slider_1.jpg" width="100%" />
            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
            <img src="./images/tab_slider_2.jpg" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
