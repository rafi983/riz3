"use client";

import { m } from "@/providers/MotionProvider";
import { FaRobot, FaShoppingCart, FaUsers, FaCamera } from "react-icons/fa";

const services = [
	{
		title: "AI Integration (Chat & Generative)",
		icon: FaRobot,
		blurb:
			"Building feature-rich, high-performance Next.js platforms utilizing cutting-edge AI models like Gemini and Pollinations.",
		code: `const response = await ai.generateConfig({
  model: 'gemini-pro',
  temperature: 0.8
});`,
		tags: ["Next.js", "TypeScript", "Gemini", "Pollinations AI", "MongoDB"],
	},
	{
		title: "Full-Stack Multi-Vendor E‑commerce",
		icon: FaShoppingCart,
		blurb: "End-to-end marketplaces with dynamic carts, guarded routes, complex aggregation, and scalable product architecture.",
		code: `const vendorItems = await Product.aggregate([
  { $match: { vendor: req.user.id } },
  { $sort: { createdAt: -1 } }
]);`,
		tags: ["React", "Next.js", "MongoDB", "JWT", "Next-Auth"],
	},
	{
		title: "Interactive Gaming Communities",
		icon: FaUsers,
		blurb: "Immersive community hubs combining robust nested routing, deep scroll triggers, and pixel-perfect tailored UI.",
		code: `useGSAP(() => {
  gsap.to(".hero-element", { 
    y: -100, scrollTrigger: { scrub: true } 
  });
});`,
		tags: ["React", "GSAP", "Tailwind CSS", "Zustand"],
	},
	{
		title: "Media Processing Utilities",
		icon: FaCamera,
		blurb: "Lightweight, zero-dependency tools for real-time instantaneous image processing and responsive social gallery interactions.",
		code: `const processImage = (ctx) => {
  const imageData = ctx.getImageData(0, 0, width, height);
  return mapPixelsToAscii(imageData);
};`,
		tags: ["Next.js", "React", "Canvas API", "Firebase"],
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
