import React from "react";
import Link from "next/link";
import Instagram from "../../public/icons/instagram.svg";
import Mail from "../../public/icons/gmailcom.svg";
import Facebook from "../../public/icons/fb.svg";
import LInkdin from "../../public/icons/LinkedIn svg.svg";

const icons = [
  {
    id: "1",
    link: "https://www.instagram.com/",
    svg: <Mail />,
  },
  {
    id: "2",
    link: "https://www.instagram.com/",
    svg: <Instagram />,
  },
  {
    id: "3",
    link: "https://www.instagram.com/",
    svg: <Facebook />,
  },
  {
    id: "4",
    link: "https://www.instagram.com/",
    svg: <LInkdin />,
  },
];

const SocialIcon = () => {
  return (
    <div className="flex my-2 gap-2">
      {icons.map((val) => (
        <Link
          key={val.id}
          href={val.link}
          target="_blank"
          className=" rounded-full bg-secondary2 p-2 hover:bg-neutral-400"
        >
          <div className="h-6 w-6 rounded-full">{val.svg}</div>
        </Link>
      ))}
    </div>
  );
};

export default SocialIcon;
