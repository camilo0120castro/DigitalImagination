import { motion } from 'framer-motion';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold tracking-tight text-espresso mb-6"
            >
                Dreams Shape The World
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl text-espresso/80 max-w-3xl mb-12"
            >
                Digital Imagination is a creative media company specializing in virtual photography, short films, and musical expression.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mt-12"
            >
                {['Virtual Photography', 'Short Films', 'Music & Radio'].map((feature) => (
                    <div key={feature} className="bg-eggshell-dark p-8 rounded-2xl border border-espresso/5 hover:border-terracotta/50 transition-colors shadow-sm">
                        <h3 className="text-xl font-bold text-espresso mb-3">{feature}</h3>
                        <p className="text-sm text-espresso/70">Explore our latest work in {feature.toLowerCase()}.</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
