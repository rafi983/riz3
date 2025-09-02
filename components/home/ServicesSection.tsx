"use client";

import { m } from "@/providers/MotionProvider";
import { FaRobot, FaChartLine, FaShoppingCart, FaUsers, FaCamera } from "react-icons/fa";

const services = [
	{
		title: "AI Apps (Chat, Studio, Images)",
		icon: FaRobot,
		blurb:
			"Next.js AI products: chat platforms and image studios powered by Gemini and Pollinations.",
		code: `const res = await gemini.generateContent({ model: 'gemini-1.5-flash', input });`,
		tags: ["Next.js", "TypeScript", "Gemini", "Pollinations", "MongoDB"],
	},
	{
		title: "E‑commerce (Multi‑vendor)",
		icon: FaShoppingCart,
		blurb: "Catalogs, carts, orders, payments, auth, and admin flows that scale.",
		code: `const order = await orders.insertOne({ items, userId, createdAt: Date.now() });`,
		tags: ["React", "Next.js", "MongoDB", "Mongoose", "JWT", "Next-Auth"],
	},
	{
		title: "Social & Community Apps",
		icon: FaUsers,
		blurb: "Feeds, profiles, media, and real-time updates with smooth UX.",
		code: `app.post('/posts', auth, async (req, res) => { const post = await db.Posts.create(req.body); res.json(post); });`,
		tags: ["React", "Firebase", "GSAP", "Zustand"],
	},
	{
		title: "Media Tools (Converters & Photo Apps)",
		icon: FaCamera,
		blurb: "Lightweight image utilities (ASCII, galleries) and fast photo-sharing UIs.",
		code: `function toAscii(img) { /* map pixels -> chars */ return ascii; }`,
		tags: ["React", "Vite", "Canvas", "Firebase"],
	},
];

const ServicesSection = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<section className="py-16 px-4">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-10">
					<h2 className="text-3xl font-bold gradient-text font-mono">
						$ mkdir ./what-i-build
					</h2>
					<p className="text-text-secondary mt-2">
						Focused on outcomes, shipped fast
					</p>
				</div>

				<m.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={containerVariants}
					className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
				>
					{services.map((s) => {
						const Icon = s.icon;
						return (
							<m.div
								key={s.title}
								variants={itemVariants}
								className="dev-card group"
							>
								<div className="flex items-start justify-between mb-3">
									<div className="flex items-center gap-3">
										<Icon className="w-6 h-6 text-accent" />
										<h3 className="text-lg font-semibold font-mono">
											{s.title}
										</h3>
									</div>
									<span className="status-online text-xs">Ready</span>
								</div>
								<p className="text-sm text-text-secondary mb-4">
									{s.blurb}
								</p>
								<div className="code-block mb-3">
									<pre className="text-xs">
										<code className="text-text-secondary">{s.code}</code>
									</pre>
								</div>
								<div className="flex flex-wrap gap-2">
									{s.tags.map((t) => (
										<span key={t} className="badge badge-info text-xs">
											{t}
										</span>
									))}
								</div>
							</m.div>
						);
					})}
				</m.div>
			</div>
		</section>
	);
};

export default ServicesSection;
