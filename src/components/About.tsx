import { motion } from 'framer-motion'
import { FaLeaf, FaHeart, FaStar, FaUsers } from 'react-icons/fa'

const About = () => {
    const features = [
        {
            icon: <FaLeaf className="text-4xl text-green-500" />,
            title: 'Natural Ingredients',
            description: 'We use only the finest natural and organic ingredients for all our treatments.'
        },
        {
            icon: <FaHeart className="text-4xl text-red-500" />,
            title: 'Personalized Care',
            description: 'Every treatment is customized to meet your specific needs and preferences.'
        },
        {
            icon: <FaStar className="text-4xl text-yellow-500" />,
            title: 'Expert Therapists',
            description: 'Our certified therapists have years of experience in wellness and relaxation.'
        },
        {
            icon: <FaUsers className="text-4xl text-blue-500" />,
            title: 'Welcoming Environment',
            description: 'Create a serene atmosphere designed to help you relax and rejuvenate.'
        }
    ]

    return (
        <section id="about" className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            About Our
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                                Luxury Spa
                            </span>
                        </h2>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Welcome to Platinum Spa, where luxury meets tranquility. For over 15 years,
                            we've been providing exceptional spa experiences that rejuvenate the body,
                            mind, and soul. Our commitment to excellence and attention to detail has
                            made us the premier destination for wellness and relaxation.
                        </p>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Our spa combines traditional healing techniques with modern luxury amenities
                            to create an unforgettable experience. From our expert therapists to our
                            carefully curated treatment rooms, every aspect of your visit is designed
                            to provide the ultimate in comfort and care.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { number: '15+', label: 'Years Experience' },
                                { number: '1000+', label: 'Happy Clients' },
                                { number: '50+', label: 'Expert Staff' },
                                { number: '25+', label: 'Treatment Types' }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-bold text-purple-600 mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-600 text-sm">
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
                                src="https://images.unsplash.com/photo-1544161512-6f8a5d89c709?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt="Luxury Spa Interior"
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
                            className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                    <FaStar className="text-purple-600 text-xl" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-800">4.9/5</div>
                                    <div className="text-sm text-gray-600">Customer Rating</div>
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
                            className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
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
