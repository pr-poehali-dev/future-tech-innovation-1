export default function Featured() {
  const features = [
    { icon: "⚡", title: "Мгновенный старт", desc: "Запусти кликкер в два касания — без настроек и регистраций" },
    { icon: "🎯", title: "Точные координаты", desc: "Кликай в любую точку экрана с миллисекундной точностью" },
    { icon: "🔁", title: "Мультитач", desc: "До 10 точек одновременно — идеально для мобильных игр" },
    { icon: "⏱️", title: "Гибкие интервалы", desc: "От 1 мс до нескольких часов — полный контроль скорости" },
  ];

  return (
    <div id="features" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/ffe56454-6a77-47e8-8f74-dd30634aae55/files/159cdb88-3836-47d0-9453-8fd9db9ba2eb.jpg"
          alt="AutoTap app interface"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Возможности приложения</h3>
        <p className="text-2xl lg:text-4xl mb-10 text-neutral-900 leading-tight font-bold">
          Один инструмент — безграничная автоматизация любых действий на Android
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col gap-1">
              <span className="text-2xl">{f.icon}</span>
              <h4 className="font-bold text-neutral-900 text-sm uppercase tracking-wide">{f.title}</h4>
              <p className="text-neutral-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <a
          href="#download"
          className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide"
        >
          Скачать для Android
        </a>
      </div>
    </div>
  );
}
