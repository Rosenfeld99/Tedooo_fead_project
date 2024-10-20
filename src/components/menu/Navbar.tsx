import { icons } from "../../constant/icons";

const Navbar = () => {
  const listMenu = [
    { name: "Home", icon: icons.homeActive, isActive: true },
    { name: "Messaging", icon: icons.messagingInActive, isActive: false },
    {
      name: "Notifications",
      icon: icons.notificationsInActive,
      isActive: false,
    },
  ];
  return (
    <div className="px-5 md:px-3 xl:px-0 w-full bg-secondary shadow-md shadow-shadow flex items-center h-[56px] fixed inset-0 z-50">
      <div className="w-full max-w-[1120px] mx-auto flex items-center justify-between">
        {/* right */}
        <div className=" flex items-center gap-4">
          <img
            src="/logo.svg"
            className="w-10 aspect-square"
            alt="logo system"
          />
          <div className=" flex items-center bg-accent max-w-xs px-3 rounded-full h-[40px] w-[216px]">
            <img src={icons.search} alt="logo system" />
            <input
              className="bg-accent w-full h-full py-3 pl-2 outline-none placeholder:text-sm placeholder:text-neutral"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* left */}
        <div className=" flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6 h-full">
            {listMenu.map((item, index) => (
              <li
                key={index}
                className={`flex items-center gap-2 cursor-pointer h-[56px] ${
                  item.isActive && "border-b-[3px] border-b-[#2DB8A1]"
                }`}
              >
                <img src={item.icon} alt="Home icon" />
                <span
                  className={
                    item.isActive
                      ? "text-[#2DB8A1] font-semibold text-base"
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
            src={icons.avatar}
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
