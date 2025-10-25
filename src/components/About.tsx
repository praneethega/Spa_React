import { motion } from 'framer-motion'
import { FaLeaf, FaHeart, FaStar, FaUsers } from 'react-icons/fa'

const About = () => {
    const features = [
        {
            icon: <FaLeaf className="text-4xl text-green-500" />,
            title: 'Premium Ingredients',
            description: 'We use only the finest natural and organic ingredients for all our therapeutic treatments.'
        },
        {
            icon: <FaHeart className="text-4xl text-red-500" />,
            title: 'Personalized Care',
            description: 'Every treatment is customized to meet your specific wellness needs and preferences.'
        },
        {
            icon: <FaStar className="text-4xl text-yellow-500" />,
            title: 'Certified Therapists',
            description: 'Our licensed therapists have extensive training in wellness and therapeutic techniques.'
        },
        {
            icon: <FaUsers className="text-4xl text-blue-500" />,
            title: 'Professional Environment',
            description: 'A serene, clinical atmosphere designed to promote healing and relaxation.'
        }
    ]

    return (
        <section id="about" className="section-padding bg-black">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-luxury">
                            About Our
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                                Luxury Spa
                            </span>
                        </h2>

                        <p className="text-lg text-gray-300 mb-8 leading-relaxed font-elegant">
                            Welcome to Platinum Spa, where professional wellness meets therapeutic excellence. For over 15 years,
                            we've been providing exceptional therapeutic treatments that promote relaxation, stress relief,
                            and overall well-being. Our commitment to professional standards and attention to detail has
                            made us the premier destination for wellness and therapeutic care.
                        </p>

                        <p className="text-lg text-gray-300 mb-8 leading-relaxed font-elegant">
                            Our wellness center combines evidence-based therapeutic techniques with modern amenities
                            to create a professional healing environment. From our certified therapists to our
                            carefully designed treatment rooms, every aspect of your visit is designed
                            to provide optimal therapeutic benefits and professional care.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { number: '15+', label: 'Years Experience' },
                                { number: '1000+', label: 'Satisfied Clients' },
                                { number: '50+', label: 'Certified Staff' },
                                { number: '25+', label: 'Treatment Types' }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-bold text-yellow-400 mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-300 text-sm">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/2.jpeg"
                                alt="Luxury Spa Treatment Room"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>

                        {/* Floating Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="absolute -bottom-6 -left-6 bg-gray-900 rounded-xl p-6 shadow-xl border border-yellow-500/20"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                                    <FaStar className="text-yellow-600 text-xl" />
                                </div>
                                <div>
                                    <div className="font-semibold text-white">4.9/5</div>
                                    <div className="text-sm text-gray-300">Customer Rating</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Features Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-yellow-500/20"
                        >
                            <div className="flex justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default About
