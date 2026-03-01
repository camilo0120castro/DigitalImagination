import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-4xl md:text-5xl font-bold text-espresso mb-8">Dreams Shape The World</h1>

                <div className="prose prose-lg prose-espresso max-w-none text-espresso/90 text-lg leading-relaxed space-y-6">
                    <p>
                        Digital Imagination was founded on July 9th, 2020. Since the beginning, it has focused on the development of all types of art including photography, movies, and music.
                    </p>

                    <p>
                        We believe that creativity knows no bounds. By breaking down the barriers between different mediums—be it visual artistry in virtual realms, auditory exploration, or storytelling through short films—we strive to create immersive experiences that inspire.
                    </p>

                    <div className="bg-forest/10 p-8 rounded-2xl mt-12 border border-forest/20 shadow-sm">
                        <h3 className="text-2xl font-bold text-forest mb-4">Our Vision</h3>
                        <p className="text-forest/90 font-medium">
                            To build a community where digital artists can thrive, collaborate, and showcase their absolute best work to the world, pushing the boundaries of what is possible in digital media.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
