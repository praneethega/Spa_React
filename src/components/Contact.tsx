import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
        })
    }

    const contactInfo = [
        {
            icon: <FaMapMarkerAlt className="text-2xl text-purple-600" />,
            title: 'Visit Us',
            details: 'Pillar No: 1734, KSR Towers, Madhapur, Hyderabad, 500081'
        },
        {
            icon: <FaPhone className="text-2xl text-purple-600" />,
            title: 'Call Us',
            details: '+91 91 212 899 18'
        },
        {
            icon: <FaEnvelope className="text-2xl text-purple-600" />,
            title: 'Email Us',
            details: 'platinumluxuryspa@gmail.com'
        },
        {
            icon: <FaClock className="text-2xl text-purple-600" />,
            title: 'Opening Hours',
            details: '9:00 AM - 10:00 PM (All Days)'
        }
    ]

    const services = [
        'Swedish Massage',
        'Deep Tissue Massage',
        'Aromatherapy',
        'Hot Stone Therapy',
        'Reflexology',
        'Premium Package'
    ]

    return (
        <section id="contact" className="section-padding bg-white">
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
                        Get In
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                            Touch
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Ready to experience the ultimate in relaxation? Contact us today to book
                        your appointment or ask any questions about our services.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-8">
                            Contact Information
                        </h3>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start space-x-4"
                                >
                                    <div className="flex-shrink-0 mt-1">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">
                                            {info.title}
                                        </h4>
                                        <p className="text-gray-600">
                                            {info.details}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Media */}
                        <div className="mt-8">
                            <h4 className="text-lg font-semibold text-gray-800 mb-4">
                                Follow Us
                            </h4>
                            <div className="flex space-x-4">
                                {[
                                    { icon: <FaFacebook />, href: '#', label: 'Facebook' },
                                    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
                                    { icon: <FaTwitter />, href: '#', label: 'Twitter' }
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        href={social.href}
                                        className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="mt-8">
                            <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                                <div className="text-center text-gray-500">
                                    <FaMapMarkerAlt className="text-4xl mx-auto mb-2" />
                                    <p>Interactive Map</p>
                                    <p className="text-sm">123 Luxury Lane, Wellness District</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 rounded-2xl p-8"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">
                            Send Us a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                        Service Interest
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                    >
                                        <option value="">Select a service</option>
                                        {services.map((service, index) => (
                                            <option key={index} value={service}>
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                                    placeholder="Tell us about your needs or ask any questions..."
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full btn-primary py-4 text-lg"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
