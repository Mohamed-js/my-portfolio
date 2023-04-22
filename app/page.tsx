"use client";
import React from "react";
import { useRouter } from 'next/navigation';
import { Github, Linkedin, Mail } from "lucide-react";
import { Card } from "./components/card";
import Link from "next/link";
import Image from "next/image";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

const socials = [
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/mohamed-js/",
		label: "LinkedIn",
		handle: "Mohamed Atef",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:atefhamosa@gmail.com",
		label: "Email",
		handle: "atefhamosa@\ngmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/Mohamed-js",
		label: "GitHub",
		handle: "Mohamed Atef",
	},

];

export default function Home() {
	const router = useRouter()
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden p-3">
			<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 w-full h-full fixed"></div>
			{/* <nav className="my-12 lg:my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav> */}
			<div className="flex justify-center">
				<div className="fades-right md:hidden w-36 h-36 rounded-full relative overflow-hidden mb-8 animate-fade-in animate-image shadow-[0_0_8px_7px_rgb(0,145,255)]">
					<Image src="/atef.jpg" alt="me"  className="grayscale object-cover object-top scale-x-[-1]" fill />
				</div>
			</div>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="flex items-center mb-10">
				<div className="fades-right hidden md:block w-28 h-28 lg:w-36 lg:h-36 rounded-full relative overflow-hidden mr-8 animate-image shadow-[0_0_8px_7px_rgb(0,145,255)]">
					<Image src="/atef.jpg" alt="me"  className="grayscale object-cover object-top scale-x-[-1]" fill/>
				</div>
				<div className="z-10 text-3xl text-transparent duration-1000 cursor-default font-display sm:text-5xl md:text-7xl lg:text-8xl bg-clip-text">
					<h1 className="fades-right z-10 text-3xl text-transparent duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-5xl md:text-7xl lg:text-8xl whitespace-nowrap bg-clip-text bg-white mt-2">
						MOHAMED ATEF
					</h1>
					<h2 className="fades-right text-sm text-zinc-500 md:ml-1 whitespace-wrap animate-fade-in">
						Hi, my name is Mohamed, and I build web and mobile solutions...
						<br />
						<button className="text-sky-400 text-sm md:text-lg bg-blue outline outline-1  outline-sky-400 rounded-xl p-3 px-8 mt-5"
						onClick={(e)=>{
							document.querySelectorAll(".fades-left").forEach((el)=> {el.classList.add("fade-left")});
							document.querySelectorAll(".fades-right").forEach((el)=> {el.classList.add("fade-right")});
							
							Array.from(document.querySelectorAll('.card') as NodeListOf<HTMLElement>).forEach((el)=> {el.style.border = "none"})

							setTimeout(()=>{
								router.push("/projects");
							}, 900)
							
						}}>My Projects</button>
					</h2>
				</div>
			</div>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 mb-8" />
			{/* <div className="mt-10 mb-4 lg:mt-6 lg:mb-8 text-center animate-fade-in">
				
				
			</div> */}
			<div className="container flex items-center justify-center mx-auto animate-fade-in max-w-4xl">
				<div className="flex justify-between sm:grid w-full sm:gap-8 mx-auto grid-cols-3 lg:gap-16 justify-items-center">
					{socials.map((s, i) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="fades-left p-2 py-3 relative flex flex-col items-center gap-4 duration-700 group"
								style={{
									animationDelay: `.${1 + Number(i+1)}s`
								}}
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="hidden z-10 sm:flex flex-col items-center">
									<span className="text-lg font-medium text-center duration-150 lg:text-2xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
