export default function Navbar() {
  const menuItems = [
    {
      title: "About",
      id: "about",
    },
    {
      title: "Contact",
      id: "contact",
    },
  ];

  return (
    <div className="flex flex-row justify-center items-center py-6 px-10 border-b-[0.25px] border-b-[#ABA8A2]">
      <div className="w-1/3" />
      <div className="w-1/3 flex justify-center font-bold text-[20px] tracking-tight text-[#000000]">
        VB
      </div>
      <div className="w-1/3 flex justify-end text-[14px] gap-6 font-medium">
        {menuItems.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </div>
  );
}
