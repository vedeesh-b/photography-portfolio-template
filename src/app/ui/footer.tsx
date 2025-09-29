export default function Footer() {
  const footerLinks = [
    {
      title: "Email",
      id: "email",
    },
    {
      title: "LinkedIn",
      id: "linkedin",
    },
    {
      title: "Website",
      id: "website",
    },
  ];
  return (
    <div className="flex flex-row justify-between items-center py-6 px-10 border-t-[0.25px] border-t-[#ABA8A2] text-[14px]">
      <div>© Vedeesh Bali, 2025</div>
      <div className="flex flex-row gap-6">
        {footerLinks.map((link) => (
          <div key={link.id}>{link.title}</div>
        ))}
      </div>
    </div>
  );
}
