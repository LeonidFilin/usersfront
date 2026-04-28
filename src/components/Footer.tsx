export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/30 backdrop-blur-xl px-6 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                <div>
                    <h3 className="text-pink-400 font-bold uppercase tracking-[0.25em] text-sm">
                        3D PRINT MARKET
                    </h3>
                    <p className="text-white/40 text-sm mt-1">
                        Премиальные 3D-принтеры в неоновом стиле.
                    </p>
                </div>

                <div className="text-white/40 text-sm text-center md:text-right">
                    © 2026 3D Print Market. All rights reserved.
                </div>
            </div>
        </footer>
    );
}