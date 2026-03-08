import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/ffe56454-6a77-47e8-8f74-dd30634aae55/files/6a79ce03-7ce6-4583-9ff5-583dbc3ec474.jpg"
          alt="AutoTap hero"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-green-400 uppercase tracking-widest text-sm mb-4 font-medium">Авто-кликкер для Android</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          AUTOTAP
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-10">
          Автоматизируй любые касания на экране. Игры, приложения, рутинные задачи — просто настрой и запусти.
        </p>
        <a
          href="#download"
          className="inline-block bg-green-500 hover:bg-green-400 text-black font-bold uppercase tracking-wide px-8 py-4 text-sm transition-all duration-300"
        >
          Скачать бесплатно
        </a>
      </div>
    </div>
  );
}