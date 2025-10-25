import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'

interface HeroProps {
    onBookNow: () => void
}

const Hero = ({ onBookNow }: HeroProps) => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-yellow-900/60"></div>
                <div className="w-full h-full bg-[url('/images/1.jpeg')] bg-cover bg-center bg-no-repeat"></div>
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-luxury"
                    >
                        Experience Luxury
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                            & Tranquility
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed font-elegant"
                    >
                        Experience premium wellness treatments in a serene, professional environment.
                        Our certified therapists provide therapeutic services designed to promote
                        relaxation, stress relief, and overall well-being.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onBookNow}
                            className="btn-primary text-lg px-8 py-4"
                        >
                            Schedule Appointment
                        </motion.button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
                    >
                        {[
                            { number: '500+', label: 'Happy Clients' },
                            { number: '50+', label: 'Expert Therapists' },
                            { number: '15+', label: 'Years Experience' },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-300 text-sm md:text-base">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-white cursor-pointer"
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    <FaArrowDown size={24} />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero
