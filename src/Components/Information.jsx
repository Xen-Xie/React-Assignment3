import React, { useState } from "react";
import { Info } from "../lib/reuse/InfoItem";
import { Button } from "@heroui/react";
import { X } from "lucide-react";

function Information() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="font-roboto relative px-4 mt-8">
      <h1 className="font-lexend text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 max-w-5xl mx-auto">
        More informations
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Info and social area*/}
        <div className="space-y-4">
          {Info.map((item, i) => (
            <div key={i} className="flex items-center space-x-3">
              <img src={item.icon} alt="" className="w-4 h-4" />
              <span
                onClick={() => i === 0 && setShowModal(true)}
                className={`text-base text-default ${
                  i === 0 || i === Info.length - 1
                    ? "underline underline-offset-2"
                    : ""
                } ${
                  i === 0
                    ? "cursor-pointer hover:text-default/85 transition-all"
                    : ""
                }`}
              >
                {item.title}
              </span>
            </div>
          ))}
          <div className="flex space-x-4 pt-2">
            <a href="#">
              <img
                src="/FaceBook.svg"
                alt="Facebook"
                className="w-5 h-5 hover:scale-105 transition-all duration-300"
              />
            </a>
            <a href="#">
              <img
                src="/Instagram.svg"
                alt="Instagram"
                className="w-5 h-5 hover:scale-105 transition-all duration-300"
              />
            </a>
            <a href="#">
              <img
                src="/Tik.svg"
                alt="TikTok"
                className="w-5 h-5 hover:scale-105 transition-all duration-300"
              />
            </a>
            <a href="#">
              <img
                src="/Wp.svg"
                alt="WhatsApp"
                className="w-5 h-5 hover:scale-105 transition-all duration-300"
              />
            </a>
          </div>
        </div>

        {/*Map Area*/}
        <div>
          <img src="/FakeMap2.svg" alt="Map" className="w-full rounded-md" />
        </div>
      </div>

      {/* Modal Area*/}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-60"
            onClick={() => setShowModal(false)}
          />

          {/* Modal content */}
          <div className="relative bg-foreground rounded-xl shadow-lg max-w-4xl w-full p-4 md:p-6 z-10">
            {/* Close Icon Area*/}
            <button
              className="absolute top-[-10px] xl:top-[-25px] right-0 xl:right-[-20px] z-20 bg-foreground text-[#232323] p-2 rounded-full shadow hover:bg-foreground/85 transition"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <img src="/Menu.svg" alt="Menu" className="w-full rounded-lg" />

            <h2 className="text-center text-xl font-semibold mt-4 mb-2 font-lexend text-default">
              Menu Bella Italia
            </h2>
            {/*Download Button Area */}
            <div className="flex justify-center">
              <a href="/Menu.svg" download="BellaItaliaMenu.svg">
                <Button
                  variant="bordered"
                  className="text-primary border-primary text-base font-roboto"
                >
                  <img src="/Download.svg" alt="" />
                  Download this menu
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Information;
