"use client";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { ProjectCard } from "../components/projectCard";

const socials = [
  {
    image: "/agz5anty.png",
    link: "https://mohamed-js.github.io/agz5anty-landing/",
    label: "Agz5anty Landing",
    github: "https://github.com/Mohamed-js/agz5anty-landing",
    notScrolling: false,
    credentials: null,
    stack: ["React Native", "Ruby on Rails", "React.js", "CSS", "HTML"],
    description: null,
  },
  {
    image: "/sellex.png",
    link: "https://sellex-store.onrender.com/",
    label: "Sellex",
    github: "https://github.com/Mohamed-js/Sell-Ex",
    notScrolling: true,
    credentials: { email: "support@sellex.com", password: "222333" },
    stack: ["Ruby on Rails", "React.js", "CSS", "JavaScript"],
    description: null,
  },
  {
    image: "/sellex-storefront.png",
    link: "https://sellex-store.vercel.app/otaku",
    label: "Sellex Storefront",
    github: "https://github.com/Mohamed-js/sellex-store-front",
    notScrolling: false,
    credentials: null,
    stack: ["Next.js", "Tailwind"],
    description: null,
  },

  {
    image: "/andal.png",
    link: "https://lucid-joliot-e8cdf9.netlify.app/",
    label: "Andal Fighters",
    github: "https://github.com/Mohamed-js/JS--GAME",
    notScrolling: true,
    credentials: null,
    stack: ["JavaScript", "Phaser3"],
    description:
      "A browser JavaScript game I made using the game engine Phaser3. You fight countless Andal and you level up! Can you beat my score?",
  },
  {
    image: "/makeup.png",
    link: "https://mohamed-js.github.io/makeup-online/#/",
    label: "Makeup Catalog",
    github: "https://mohamed-js.github.io/makeup-online/#/",
    notScrolling: false,
    credentials: null,
    stack: ["React.js", "FramerMotion", "CSS"],
    description: null,
  },
  {
    image: "/petsmating.webp",
    link: "https://play.google.com/store/apps/details?id=com.etk.PetsMating",
    label: "PetsMating",
    github: null,
    notScrolling: false,
    credentials: null,
    stack: ["Laravel", "Flutter", "Node.js", "React.js"],
    description: null,
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden">
      <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 w-full h-full fixed"></div>
      <Navigation />
      <div className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="z-10 mt-20 mb-4 p-4 text-transparent cursor-default text-edge-outline fade-from-right font-display text-6xl md:text-9xl whitespace-nowrap bg-clip-text bg-white fades-left w-full max-w-5xl">
          Projects
        </h1>
        <div className="container flex items-center justify-center px-4 mx-auto fade-from-left mb-12 mt-8 max-w-5xl">
          <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:mt-0 md:grid-cols-2 lg:gap-16">
            {socials.map((s) => (
              <ProjectCard>
                <div className="relative duration-700 group fades-right">
                  <h2 className="py-4 text-center text-white text-xl flex justify-between px-2 sm:px-4 items-center">
                    {s.github ? (
                      <span>
                        <Link
                          className="github-link"
                          href={s.github}
                          target="_blank"
                        >
                          <Github size={18} />
                        </Link>
                      </span>
                    ) : (
                      <span
                        style={{
                          width: 35,
                        }}
                      ></span>
                    )}
                    <span>{s.label}</span>
                    <span>
                      <Link className="site-link" href={s.link} target="_blank">
                        <ExternalLink size={18} />
                      </Link>
                    </span>
                  </h2>
                  <div
                    className="overflow-y-scroll relative w-full"
                    style={{
                      height: s.notScrolling ? "auto" : "24rem",
                    }}
                  >
                    <img
                      src={s.image}
                      alt={s.label}
                      className="object-cover object-top"
                    />
                  </div>
                  {s.description && (
                    <div className="p-2 sm:p-2 text-gray-200">
                      <p>{s.description}</p>
                    </div>
                  )}
                  <div className="p-2 sm:p-2">
                    {s.credentials && (
                      <div className="text-white">
                        <h3 className="text-sky-400">Test account:</h3>
                        <ul>
                          <li>
                            <small>Email: {s.credentials.email}</small>
                          </li>
                          <li>
                            <small>Password: {s.credentials.password}</small>
                          </li>
                        </ul>
                        <hr style={{ margin: "10px 0" }} />
                      </div>
                    )}
                    <div className="flex p-1 flex-wrap">
                      {s.stack.map((tech) => {
                        return (
                          <span className="p-2 px-5 bg-sky-400 text-white rounded-3xl m-1">
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </ProjectCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
