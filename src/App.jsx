import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileDown, ExternalLink } from "lucide-react";
import avatar from "./image/avatar.jpg";
import amazon from "./image/amazon.png";
import robpunks from "./image/robpunks.png";
import multi from "./image/multi.png";

const PROFILE = {
  name: "Muhammed Shameem P",
  role: "Frontend Developer",
  tagline: "Building user-first, high-quality web apps with React & Next.js",
  location: "India",
  email: "me.muhammedshameem@gmail.com",
  linkedin: "https://www.linkedin.com/in/mushameem",
  github: "https://github.com/mushameem",
  resume: "/shameem.docx",
  avatar: avatar
};

const SKILLS = [
  "HTML",
  "CSS",
  "React.js",
  "Next.js",
  "JavaScript",
  "Tailwind CSS",
  "Chakra UI",
  "API Integration",
  "Performance",
  "Web 3.0"
];

const PROJECTS = [
  {
    id: "nft-minting-app",
    title: "RobPunks NFT Mint",
    desc: "A full NFT mint website to and mint robPunksNFTs on the goerli testnet.",
    stack: ["React.js", "Tailwind", "Blockchain", "Framer Motion"],
    image: robpunks,
    github: "https://github.com/shameem8ods/web3-RobPunksFullMintNFt",
    live: "https://web3-rob-punks-full-mint-nft.vercel.app/"
  },
  {
    id: "amazon-clone",
    title: "Amazon Clone",
    desc: "A responsive front-end clone of Amazon focused on product listing and cart interactions",
    stack: ["React.js", "Firebase", "Emotion"],
    image: amazon,
    github: "https://github.com/shameem8ods/Amazon_clone",
    live: "https://amazon-clone-nine-roan.vercel.app"
  },
  {
    id: "multi-wallet-connect",
    title: "Multi Wallet Connect",
    desc: "A Decentralized multi wallet connect that supports metamask, coinbase, wallet connect, Formatic, Portis and Torus",
    stack: ["Next.js", "Chakra UI", "Web3.0"],
    image: multi,
    github: "https://github.com/shameem8ods/Web3-multiWalletConnect",
    live: "web3-token-farm-ntmg.vercel.app"
  }
];

const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: { y: -8, scale: 1.02, transition: { duration: 0.28 } }
};

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <div className="max-w-[1400px] mx-auto px-6 py-12 lg:grid lg:grid-cols-12 lg:gap-8">
        <aside className="lg:col-span-4 lg:sticky top-6 self-start">
          <div className="backdrop-blur-sm bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <img
                src={PROFILE.avatar}
                alt="avatar"
                className="w-20 h-20 rounded-full object-cover ring-1 ring-neutral-800"
              />
              <div>
                <h1 className="text-2xl font-semibold tracking-tight">
                  {PROFILE.name}
                </h1>
                <p className="text-sm text-neutral-400">
                  {PROFILE.role} • {PROFILE.location}
                </p>
              </div>
            </div>
            <p className="mt-4 text-neutral-300 leading-relaxed">
              {PROFILE.tagline}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <a
                href={PROFILE.resume}
                download="shameem.docx"
                className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-black text-sm font-medium"
              >
                <FileDown className="w-4 h-4" /> Resume
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-800 text-sm text-neutral-200 hover:border-emerald-600"
              >
                <Mail className="w-4 h-4" /> {PROFILE.email}
              </a>
            </div>

            <div className="mt-6">
              <h4 className="text-xs text-neutral-400 uppercase tracking-wide">
                Skills
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {SKILLS.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-200 hover:text-emerald-400"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-200 hover:text-emerald-400"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <p className="mt-6 text-xs text-neutral-500">
              Available for frontend roles • Remote or India
            </p>
          </div>
        </aside>

        <main className="lg:col-span-8 mt-12 lg:mt-0">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-neutral-100">
              Selected Work
            </h2>
            <p className="text-neutral-400 mt-2">
              A hand-picked collection of projects with notes on impact and
              tech.
            </p>
          </section>

          <section className="relative">
            <div className="overflow-x-auto no-scrollbar snap-x snap-mandatory py-6">
              <div className="flex gap-8 items-start pb-6">
                <div className="w-[10px] shrink-0" />

                {PROJECTS.map((p, idx) => (
                  <article
                    key={p.id}
                    className="snap-start shrink-0 w-[300px] sm:w-[360px] md:w-[420px]"
                  >
                    <motion.div
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      variants={cardHover}
                      className="relative"
                      style={{
                        backgroundImage: `url(${p.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "16px"
                      }}
                    >
                      <div className="relative rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5  shadow-xl">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-neutral-100">
                              {p.title}
                            </h3>
                          </div>
                        </div>

                        <p className="mt-3 text-neutral-300 leading-relaxed">
                          {p.desc}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {p.stack.map((s) => (
                            <span
                              key={s}
                              className="text-xs px-2 py-1 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-300"
                            >
                              {s}
                            </span>
                          ))}
                        </div>

                        <div className="mt-4 flex gap-2">
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-sm text-neutral-200 hover:border-emerald-600"
                          >
                            <Github className="w-4 h-4" /> Code
                          </a>
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-black text-sm font-medium"
                          >
                            <ExternalLink className="w-4 h-4" /> Live
                          </a>
                        </div>
                      </div>
                    </motion.div>

                    <div className="mt-4 flex items-center gap-3 text-sm text-neutral-500">
                      <div className="w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs">
                        •
                      </div>
                      <div className="flex-1 border-t border-neutral-800"></div>
                    </div>
                  </article>
                ))}

                <div className="w-[10px] shrink-0" />
              </div>
            </div>
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[2px] bg-neutral-800/40" />
          </section>

          <section className="mt-5">
            <h2 className="text-xl font-semibold text-neutral-100">
              Get in Touch
            </h2>
            <p className="text-neutral-400 mt-2">
              Have a question or want to work together? Send me a message!
            </p>
            <form
              action="https://formspree.io/f/mrbaynvy"
              method="POST"
              className="mt-6 grid grid-cols-1 gap-4 max-w-xl"
            >
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-200 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="_replyto"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-200 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-200 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-black text-sm font-medium"
              >
                Send Message
              </button>
            </form>
          </section>
        </main>
      </div>

      <footer className="py-8">
        <div className="max-w-[1400px] mx-auto px-6 text-center text-neutral-500 text-sm">
          © {new Date().getFullYear()} {PROFILE.name}. Crafted with attention to
          detail.
        </div>
      </footer>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
