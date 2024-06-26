import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="main_sect flex w-full">
        <div className="header-text font-serif font-bold text-2xl">
          <b>Mern and Next.JS Developer</b> <br />
          <br />
          <br />
          <b>Hi, I am Fatima Rasheed</b>
        </div>
        <div className="main_img">
          <img src="/avatar.png" alt="Avatar" className="w-24 h-auto" />
        </div>
      </div>
    </>
  );
}
