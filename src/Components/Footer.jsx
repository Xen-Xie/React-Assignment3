import React from "react";

function Footer() {
  const date = new Date();
  const monthYear = date.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <footer className="bg-white border-t mt-10 px-6 py-10">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-700">
        <div>
          <h3 className="font-extrabold font-lexend text-lg text-[#1E1E1E] mb-2">
            About
          </h3>
          <ul className="space-y-1 font-roboto text-[#5E5E5E]">
            <li>
              <a href="#" className="hover:underline">
                About MyFeedback
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Investor Relations
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-extrabold font-lexend text-lg text-[#1E1E1E] mb-2">
            MyFeedback
          </h3>
          <ul className="space-y-1 font-roboto text-[#5E5E5E]">
            <li>
              <a href="#" className="hover:underline">
                MyFeedback for business
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Collections
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Talk
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                MyFeedback blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Developers
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <div>
            <h3 className="font-extrabold font-lexend text-lg text-[#1E1E1E] mb-2">
              Languages
            </h3>
            <select className="px-2 py-1 font-roboto text-[#5E5E5E] outline-none">
              <option>English</option>
              <option>Spanish</option>
              <option>Bangla</option>
              <option>German</option>
            </select>
          </div>

          <div>
            <h3 className="font-extrabold font-lexend text-lg text-[#1E1E1E] mb-2">
              Countries
            </h3>
            <select className="px-2 py-1 font-roboto text-[#5E5E5E] outline-none">
              <option>Singapore</option>
              <option>England</option>
              <option>Bangladesh</option>
              <option>Germany</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-[#1E1E1E] font-roboto font-semibold">
        <p>Copyright © {monthYear} myfeedback, designed by scott</p>
      </div>
    </footer>
  );
}

export default Footer;
