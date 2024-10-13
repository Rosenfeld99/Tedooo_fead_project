import React from "react";

const Navbar = () => {
  const listMenu = [
    { name: "Home", icon: "home-active.svg", isActive: true },
    { name: "Messaging", icon: "messaging-in-active.svg", isActive: false },
    {
      name: "Notifications",
      icon: "notifications-in-active.svg",
      isActive: false,
    },
  ];
  return (
    <div className=" w-full bg-secondary shadow-md shadow-neutral flex items-center h-[56px]">
      <div className="w-full max-w-[1120px] mx-auto flex items-center justify-between">
        {/* right */}
        <div className=" flex items-center gap-4">
          <img
            src="/logo.svg"
            className="w-10 aspect-square"
            alt="logo system"
          />
          <div className=" flex items-center bg-primary max-w-xs px-3 rounded-full">
            <img src="/src/assets/search.svg" alt="logo system" />
            <input
              className="bg-primary w-full h-full py-3 pl-2 outline-none"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* left */}
        <div className=" flex items-center gap-6">
          <ul className=" flex items-center gap-6 h-full">
            {listMenu.map((item, index) => (
              <li
                key={index}
                className={`flex items-center gap-2 cursor-pointer h-[56px] ${
                  item.isActive && "border-b-[3px] border-b-[#2DB8A1]"
                }`}
              >
                <img src={`/src/assets/${item.icon}`} alt="Home icon" />
                <span
                  className={
                    item.isActive
                      ? "text-[#2DB8A1] font-semibold"
                      : "text-[#949796]"
                  }
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
          {/* avatar */}
          <img
            className="w-10 aspect-square rounded-full"
            src="https://lh3.googleusercontent.com/a/ACg8ocJxl7LcCwwTnWX-QAx14Hsig2vInn0OLzPstGV9SwZxrDzGVUU4cg=s540-c-no"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
