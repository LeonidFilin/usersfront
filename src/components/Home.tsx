type CardProps = {
    title: string;
    price: string;
};

export const Home = () => {
    return (
        <div className="space-y-8">
            <section className="relative overflow-hidden rounded-2xl border border-pink-500/20 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_30px_rgba(255,0,128,0.15)]">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-cyan-400/10 pointer-events-none" />

                <div className="relative z-10">
                    <p className="uppercase tracking-[0.3em] text-xs text-pink-400 mb-3">
                        premium collection
                    </p>

                    <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide text-white">
                        Будущее <span className="text-pink-400">3D печати</span>
                    </h1>

                    <p className="text-white/70 mt-4 max-w-2xl text-lg">
                        Магазин премиальных 3D-принтеров в неоновом стиле:
                        технологично, дерзко и современно.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <button className="px-6 py-3 rounded-xl bg-pink-500 text-white font-bold uppercase tracking-wide hover:scale-105 transition shadow-[0_0_20px_rgba(236,72,153,0.45)]">
                            Смотреть каталог
                        </button>

                        <button className="px-6 py-3 rounded-xl border border-white/15 bg-white/5 text-white hover:bg-white/10 transition">
                            Узнать больше
                        </button>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold uppercase tracking-wider text-cyan-300">
                        Популярные модели
                    </h2>
                    <span className="text-white/50 text-sm">2026 Collection</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <Card title="Creality K1" price="599$" />
                    <Card title="Bambu Lab X1" price="1299$" />
                    <Card title="Anycubic Pro" price="799$" />
                </div>
            </section>
        </div>
    );
};

const Card = ({ title, price }: CardProps) => {
    return (
        <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 hover:border-pink-400/40 transition hover:shadow-[0_0_25px_rgba(236,72,153,0.18)]">
            <div className="h-40 rounded-xl mb-4 bg-gradient-to-br from-pink-500/20 via-white/5 to-cyan-400/20 border border-white/10 flex items-center justify-center text-white/40 text-sm uppercase tracking-widest">
                product preview
            </div>

            <h2 className="text-xl font-bold text-white group-hover:text-pink-400 transition">
                {title}
            </h2>

            <p className="text-cyan-300 text-lg font-semibold mt-1">{price}</p>

            <button className="mt-4 w-full py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-cyan-400 text-black font-bold uppercase tracking-wide hover:scale-[1.02] transition">
                Купить
            </button>
        </div>
    );
};