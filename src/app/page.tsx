import UsersAvatar from "@/app/public/users-avatar_upscaled.webp";
import Image from "next/image";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background font-sans">
      <Navbar />
      <main>
        <section className="max-w-screen-xl flex flex-col space-y-4 items-center text-wrap mx-auto text-center px-8 lg:px-0 mt-20">
          <button
            type="button"
            className="hero-btn p-1 pt-[3px] pr-2 bg-[#171F05] text-sm flex items-center justify-between space-x-2 text-[#A3DC2F] rounded-full"
          >
            <span className="p-1 px-2 bg-[#A3DC2F] text-center text-sm text-foreground rounded-full">
              New
            </span>
            <span className="flex items-baseline">
              Introducing AI Automation
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </span>
          </button>
          <h1 className="text-5xl md:text-6xl text-foreground font-bold leading-tight tracking-tight max-w-2xl">
            The finance Solutions For
            <span className="inline-block text-transparent bg-gradient-to-r from-[#A3DC2F] to-[#35450c] bg-clip-text animate-pulse">
              Your Business
            </span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-muted text-wrap px-4 md:px-0 max-w-xs sm:max-w-2xl">
            Empower your finance team. The onestop plateform for all financial
            management of small and medium-sized business
          </p>
          <form
            action="post"
            id="emailForm"
            className="relative inline-block bg-[#242424] rounded-full pr-20 md:pr-40 max-w-lg w-full font-dm"
          >
            <input
              type="email"
              name="email"
              id="emailInput"
              placeholder="Enter your email adress"
              className="w-full bg-transparent border-0 text-sm md:text-base text-foreground rounded-full p-4 px-6 py-4 md:p-5 md:px-8 md:py-5 focus:outline-none focus:ring-0"
            />
            <button
              type="button"
              className="bg-foreground text-dark_background border-0 rounded-full p-3 px-4 md:p-4 md:px-8 absolute right-1 bottom-1 text-sm md:text-base font-ahrefs"
            >
              <span>Book a Demo</span>
            </button>
          </form>
          <div className="flex flex-col justify-center items-center pt-6 md:pt-12">
            {/* <img
              src="../public/users-avatar_upscaled.webp"
              alt="users avatar"
              className="w-32 h-12"
            /> */}
            <Image
              src={UsersAvatar}
              alt="users avatar"
              className="w-32 h-12"
            ></Image>
            <p className="text-muted text-sm mt-2">1,200+ reviews (4.9 of 5)</p>
          </div>
        </section>
      </main>
    </div>
  );
}
