"use client";

import { m } from "@/providers/MotionProvider";
import { FaListUl, FaDatabase, FaPuzzlePiece, FaRocket } from "react-icons/fa";

const steps = [
	{
		icon: FaListUl,
		title: "01. Plan & Scope",
		desc: "Define goals, success metrics, and choose the stack (Next.js + TypeScript + Tailwind).",
	},
	{
		icon: FaDatabase,
		title: "02. Model & APIs",
		desc: "Design data with MongoDB/Mongoose, expose REST/Route Handlers via Next.js API routes.",
	},
	{
		icon: FaPuzzlePiece,
		title: "03. Integrate & UX",
		desc: "Wire Gemini (chat/analysis) and Pollinations (images); auth with Next‑Auth/JWT or Firebase; polish flows and animations.",
	},
	{
		icon: FaRocket,
		title: "04. Ship & Iterate",
		desc: "Deploy to Vercel, monitor metrics, collect feedback, and ship improvements fast.",
	},
];

const ProcessSection = () => {
	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.15 },
		},
	};
	const item = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
	};

	return (
		<section className="py-16 px-4">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-10">
					<h2 className="text-3xl font-bold gradient-text font-mono">
						$ cat ./process.txt
					</h2>
					<p className="text-text-secondary mt-2">
						A path from idea to shipped product that matches my stack
					</p>
				</div>
				<m.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={container}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
				>
					{steps.map((s) => {
						const Icon = s.icon as any;
						return (
							<m.div key={s.title} variants={item} className="dev-card">
								<div className="flex items-center gap-3 mb-2">
									<Icon className="w-5 h-5 text-accent" />
									<h3 className="text-base font-semibold font-mono">
										{s.title}
									</h3>
								</div>
								<p className="text-sm text-text-secondary">{s.desc}</p>
							</m.div>
						);
					})}
				</m.div>
			</div>
		</section>
	);
};

export default ProcessSection;
