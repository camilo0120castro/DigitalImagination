import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

export default function Radio() {
    const albums = [
        {
            title: "Shuffle Rhapsody",
            type: "Album",
            tracks: 12,
            cover: "https://picsum.photos/seed/radio1/400/400"
        },
        {
            title: "Neon Echoes",
            type: "EP",
            tracks: 5,
            cover: "https://picsum.photos/seed/radio2/400/400"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-espresso mb-4">Radio</h1>
                <p className="text-lg text-espresso/80 max-w-2xl">
                    Dive into our musical catalog. Listen to our original compositions and curated soundscapes.
                </p>
            </motion.div>

            <div className="space-y-12">
                {albums.map((album, idx) => (
                    <motion.div
                        key={album.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex flex-col md:flex-row gap-8 items-start bg-eggshell-dark p-6 md:p-8 rounded-2xl border border-espresso/5 shadow-sm"
                    >
                        <div className="w-full md:w-64 aspect-square shrink-0 rounded-xl overflow-hidden shadow-sm relative group cursor-pointer">
                            <img src={album.cover} alt={album.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/40 transition-colors flex items-center justify-center">
                                <PlayCircle className="text-eggshell w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                            </div>
                        </div>

                        <div className="flex-1 py-2 md:py-4">
                            <div className="inline-block px-3 py-1 bg-terracotta/10 text-terracotta text-xs uppercase tracking-wider font-semibold rounded-full mb-4">
                                {album.type}
                            </div>
                            <h2 className="text-3xl font-bold text-espresso mb-2">{album.title}</h2>
                            <p className="text-espresso/70 mb-8">{album.tracks} Tracks • High Quality Audio</p>

                            <button className="flex items-center gap-2 bg-espresso text-eggshell px-6 py-3 rounded-full font-medium hover:bg-terracotta transition-colors">
                                <PlayCircle size={20} /> Listen Now
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
