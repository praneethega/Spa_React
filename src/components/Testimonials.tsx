import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Regular Client',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            text: 'The Platinum Spa experience is absolutely incredible! The therapists are incredibly skilled and the atmosphere is so relaxing. I leave feeling completely rejuvenated every time.'
        },
        {
            name: 'Michael Chen',
            role: 'First-time Visitor',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            text: 'I was skeptical about spa treatments, but the deep tissue massage here completely changed my perspective. The staff is professional and the facilities are top-notch.'
        },
        {
            name: 'Emily Rodriguez',
            role: 'Wellness Enthusiast',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            text: 'I\'ve been to many spas, but Platinum Spa truly stands out. The aromatherapy session was transformative, and the attention to detail is remarkable. Highly recommend!'
        },
        {
            name: 'David Thompson',
            role: 'Business Executive',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            text: 'After a stressful week at work, the hot stone therapy was exactly what I needed. The spa environment is so peaceful, and the staff goes above and beyond to ensure comfort.'
        },
        {
            name: 'Lisa Wang',
            role: 'Fitness Trainer',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            text: 'As someone who works with clients on physical wellness, I appreciate the expertise of the therapists here. The Swedish massage helped me recover from intense training sessions.'
        },
        {
            name: 'Robert Kim',
            role: 'Retired Teacher',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            text: 'The reflexology treatment was amazing for my circulation and overall well-being. The staff is so caring and professional. I feel like a new person after each visit.'
        }
    ]

    return (
        <section id="testimonials" className="section-padding bg-gray-50">
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
                        What Our
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                            Clients Say
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Don't just take our word for it. Here's what our valued clients have to say
                        about their experiences at Platinum Spa.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Quote Icon */}
                            <div className="mb-4">
                                <FaQuoteLeft className="text-3xl text-purple-200" />
                            </div>

                            {/* Rating */}
                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400 text-lg" />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-600 mb-6 leading-relaxed italic">
                                "{testimonial.text}"
                            </p>

                            {/* Client Info */}
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-800">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Overall Rating */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                        <div className="flex justify-center mb-4">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="text-3xl text-yellow-300 mx-1" />
                            ))}
                        </div>
                        <h3 className="text-3xl font-bold mb-2">
                            4.9/5 Average Rating
                        </h3>
                        <p className="text-xl text-purple-100">
                            Based on 500+ verified reviews
                        </p>
                    </div>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-600 mb-8">
                        Trusted by thousands of clients for over 15 years
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600">15+</div>
                            <div className="text-sm">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600">500+</div>
                            <div className="text-sm">Happy Clients</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600">50+</div>
                            <div className="text-sm">Expert Staff</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600">100%</div>
                            <div className="text-sm">Satisfaction</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials
