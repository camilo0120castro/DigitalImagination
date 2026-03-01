import { motion } from 'framer-motion';

export default function Art() {
    const photos = Array.from({ length: 6 }).map((_, i) => ({
        id: i,
        title: `Virtual Capture ${i + 1}`,
        placeholder: `https://picsum.photos/seed/${i + 10}/800/600`
    }));

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-espresso mb-4">Virtual Photography</h1>
                <p className="text-lg text-espresso/80 max-w-2xl mx-auto">
                    We celebrate the beauty of videogames. Explore the worlds, characters, and stories captured by our lenses.
                </p>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {photos.map((photo) => (
                    <motion.div
                        key={photo.id}
                        variants={item}
                        className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-espresso/5 shadow-sm"
                    >
                        <img
                            src={photo.placeholder}
                            alt={photo.title}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <h3 className="text-eggshell font-medium text-lg">{photo.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
