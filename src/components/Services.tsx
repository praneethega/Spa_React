import { motion } from 'framer-motion'
import { FaSpa, FaHandHoldingHeart, FaLeaf, FaWater, FaFire, FaStar, FaClock } from 'react-icons/fa'

interface ServicesProps {
    onBookNow: () => void
}

const Services = ({ onBookNow }: ServicesProps) => {
    const services = [
        {
            icon: <FaSpa className="text-4xl text-purple-500" />,
            title: 'Swedish Massage',
            description: 'A gentle form of massage that uses long strokes, kneading, and circular movements to help relax and energize you.',
            duration: '60 min',
            price: '$120',
            image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        },
        {
            icon: <FaHandHoldingHeart className="text-4xl text-pink-500" />,
            title: 'Deep Tissue Massage',
            description: 'A therapeutic massage that targets the deeper layers of muscles and connective tissue to release chronic tension.',
            duration: '90 min',
            price: '$180',
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        },
        {
            icon: <FaLeaf className="text-4xl text-green-500" />,
            title: 'Aromatherapy',
            description: 'A therapeutic treatment that uses essential oils to promote physical and psychological well-being.',
            duration: '75 min',
            price: '$140',
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        },
        {
            icon: <FaWater className="text-4xl text-blue-500" />,
            title: 'Hot Stone Therapy',
            description: 'A massage therapy that uses smooth, heated stones to warm and relax your muscles for deeper therapeutic effects.',
            duration: '90 min',
            price: '$200',
            image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        },
        {
            icon: <FaFire className="text-4xl text-orange-500" />,
            title: 'Reflexology',
            description: 'A therapeutic treatment that applies pressure to specific points on the feet, hands, and ears.',
            duration: '60 min',
            price: '$110',
            image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        },
        {
            icon: <FaStar className="text-4xl text-yellow-500" />,
            title: 'Premium Package',
            description: 'Our signature treatment combining multiple therapies for the ultimate spa experience.',
            duration: '120 min',
            price: '$350',
            image: 'https://images.unsplash.com/photo-1544161512-6f8a5d89c709?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        }
    ]

    return (
        <section id="services" className="section-padding bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Our
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                            Premium Services
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Discover our range of luxurious spa treatments designed to rejuvenate your body,
                        mind, and soul. Each service is carefully crafted to provide the ultimate
                        relaxation experience.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
                        >
                            {/* Service Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                {/* Service Icon */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                                    {service.icon}
                                </div>

                                {/* Price Tag */}
                                <div className="absolute bottom-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    {service.price}
                                </div>
                            </div>

                            {/* Service Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2 text-gray-500">
                                        <FaClock className="text-sm" />
                                        <span className="text-sm">{service.duration}</span>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="btn-primary text-sm px-4 py-2"
                                        onClick={onBookNow}
                                    >
                                        Book Now
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                        <h3 className="text-3xl font-bold mb-4">
                            Ready to Experience Luxury?
                        </h3>
                        <p className="text-xl mb-6 text-purple-100">
                            Book your appointment today and discover the ultimate in relaxation and wellness.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                        >
                            View All Services
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Services
