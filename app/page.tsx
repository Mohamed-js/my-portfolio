"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { Github, Linkedin, Mail } from "lucide-react";
import { Card } from "./components/card";
import Link from "next/link";
import Image from "next/image";
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
	apiKey: process.env.OPEN_API,
  });
const openai = new OpenAIApi(configuration);
const getResponse = async (prompt: string) => {
	const response = await openai.createCompletion({
	model: "text-davinci-003",
	prompt: `I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"I will not answer that :'(\".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: I will not answer that :'(\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: I will not answer that :'(\n\nQ: ${prompt}?\nA:`,
	  temperature: 0,
	  max_tokens: 100,
	  top_p: 1,
	  frequency_penalty: 0.0,
	  presence_penalty: 0.0,
	  stop: ["\n"],
	});
	return response;
  }

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
	const [answer, setAnswer] = useState<string | undefined>();
	const [asking, setAsking] = useState(false);
	const [open, setOpen] = useState(false);
	const [prompt, setPrompt] = useState('');
	const handleOpen = () => setOpen(!open);
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
					<h2 className="fades-right text-base text-zinc-500 md:ml-1 whitespace-wrap animate-fade-in tracking-wide">
						Hi, my name is Mohamed, and I'm a <span className="bg-white p-1 pt-2 mx-1 text-lg text-black">FULL-STACK</span> developer.
						<br />
						<div className="flex">
							<button className="bg-sky-400 text-white text-sm md:text-lg bg-blue rounded-xl p-3 px-8 mt-5 tracking-wider"
							onClick={(e)=>{
								document.querySelectorAll(".fades-left").forEach((el)=> {el.classList.add("fade-left")});
								document.querySelectorAll(".fades-right").forEach((el)=> {el.classList.add("fade-right")});
								
								Array.from(document.querySelectorAll('.card') as NodeListOf<HTMLElement>).forEach((el)=> {el.style.border = "none"})

								setTimeout(()=>{
									router.push("/projects");
								}, 900)
							}}>My Projects</button>
							<button className="text-sky-400 outline outline-1 outline-sky-400a text-sm md:text-lg bg-blue rounded-xl p-3 px-8 mt-5 tracking-wider ml-2 font-thin"
							onClick={()=>{
								handleOpen();
							}}>Ask GPT</button>
							{open && <div className="dialog-container flex fixed w-full h-full bg-gray-800 bg-opacity-50 items-center justify-center top-0 left-0">
								<div className="dialog bg-white p-4 rounded-2xl w-1/2 max-w-xl relative">
									<button className="close absolute top-0 right-0 text-gray-500 m-4 border px-2 rounded"
									onClick={()=>{
										setAnswer(undefined);
										setOpen(false);
										setPrompt('');
									}}
									>×</button>
									<h2 className="text-center text-black mb-3 text-3xl">GPT CHAT</h2>
									<h3 className=" text-gray-900 font-sans font-thin">A chance to talk to GPT while you are here...</h3>
									
									{answer? <div className="answer bg-black text-white font-thin font-mono p-3 rounded-lg mt-3"><div className=" text-green-600 mb-2">Q: {prompt}?</div> A: {answer}</div>: <textarea onChange={(e)=> setPrompt(e.target.value)} className="border border-1 border-gray-300 selection:border-grey-400 w-full p-2 mt-2 rounded" placeholder="How are you doing GPT?" rows={4} aria-expanded={false} autoFocus autoCorrect="false"></textarea>}
									{!answer && <button onClick={async ()=>{
										setAsking(true)
										await getResponse(prompt).then(res => {
											const ans = res.data.choices[0].text?.trim()
											for (let i = 0; i < ans.length; i++) {
												setTimeout(()=>{
													setAnswer(prev => {
														if (prev) {
															return prev + ans[i]
														} else {
															return ans[i]
														}
													})
												}, (i*20) + 200)
											}
										});
										setAsking(false)
									}} className="p-2 w-full rounded text-white" style={{
										backgroundColor: asking ? "gray":"black"
									}}>{asking ? "LOADING...":"ASK"}</button>}
									{answer && <div className="flex justify-between">
										<button onClick={async ()=>{
												setAnswer(undefined);
												setPrompt('');
											}} className="p-2 rounded px-4 text-white mt-3" style={{
												backgroundColor: asking ? "gray":"black"
											}}>ASK AGAIN</button>

										<button onClick={async ()=>{
												setAnswer(undefined);
												setOpen(false);
												setPrompt('');
											}} className="p-2 rounded px-4 text-white mt-3" style={{
												backgroundColor: asking ? "gray":"black"
											}}>Thanks Atef..!</button>
									</div>}
								</div>
							</div>}
							
							{/* <button className="text-sky-400 outline outline-1 outline-sky-400a text-sm md:text-lg bg-blue rounded-xl p-3 px-8 mt-5 tracking-wider ml-2 font-thin"
							onClick={(e)=>{
								document.querySelectorAll(".fades-left").forEach((el)=> {el.classList.add("fade-left")});
								document.querySelectorAll(".fades-right").forEach((el)=> {el.classList.add("fade-right")});
								
								Array.from(document.querySelectorAll('.card') as NodeListOf<HTMLElement>).forEach((el)=> {el.style.border = "none"})

								setTimeout(()=>{
									router.push("/skills");
								}, 900)
								
							}}>Skills</button> */}
							
						</div>
						
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
