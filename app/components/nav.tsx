"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation';

export const Navigation: React.FC = () => {
	const router = useRouter()
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						
						
					</div>

					<button
						onClick={()=>{
							document.querySelectorAll(".fades-left").forEach((el)=> {
								if(el.classList.contains("fade-from-left")){
									el.classList.remove("fade-from-left");
								}
								if(el.classList.contains("fade-from-right") && el.classList.contains("fades-left")){
									el.classList.remove("fade-from-right");
									el.classList.add("fade-left")
									return;
								}
								el.classList.add("fade-left")
							});
							document.querySelectorAll(".fades-right").forEach((el)=> {
								if(el.classList.contains("fade-from-right")){
									el.classList.remove("fade-from-right");
								}
								
									el.classList.add("fade-right")
								});
							document.querySelectorAll(".card").forEach((el)=> {el.style.border = "none"});
							setTimeout(()=>{
								router.push("/");
							}, 900)
						}}
						className="duration-200 text-zinc-300 hover:text-zinc-100 fade-from-left fades-left"
					>
						<ArrowLeft className="w-6 h-6 " />
					</button>
				</div>
			</div>
		</header>
	);
};
