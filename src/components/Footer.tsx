import { motion } from 'framer-motion'
import { FaSpa, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        services: [
            'Swedish Massage',
            'Deep Tissue Massage',
            'Aromatherapy',
            'Hot Stone Therapy',
            'Reflexology',
            'Premium Package'
        ],
        company: [
            'About Us',
            'Our Team',
            'Careers',
            'Press',
            'Blog',
            'Privacy Policy'
        ],
        support: [
            'Help Center',
            'Contact Us',
            'FAQ',
            'Booking Guide',
            'Gift Cards',
            'Loyalty Program'
        ]
    }

    const socialLinks = [
        { icon: <FaFacebook />, href: '#', label: 'Facebook' },
        { icon: <FaInstagram />, href: '#', label: 'Instagram' },
        { icon: <FaTwitter />, href: '#', label: 'Twitter' },
        { icon: <FaYoutube />, href: '#', label: 'YouTube' }
    ]

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="container-custom py-16">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <div className="flex items-center space-x-2 mb-6">
                            <FaSpa className="text-3xl text-purple-400" />
                            <span className="text-2xl font-bold">Platinum Luxury Spa</span>
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Experience luxury and tranquility at Platinum Luxury Spa. We provide exceptional
                            spa experiences that rejuvenate your body, mind, and soul.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-gray-300">
                                <FaMapMarkerAlt className="text-purple-400" />
                                <span>Pillar No: 1734, KSR Towers, Madhapur, Hyderabad, 500081</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300">
                                <FaPhone className="text-purple-400" />
                                <span>+91 91 212 899 18</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300">
                                <FaEnvelope className="text-purple-400" />
                                <span>platinumluxuryspa@gmail.com</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Services Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Support Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
                        <ul className="space-y-3">
                            {footerLinks.support.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Newsletter Signup */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-12 pt-8 border-t border-gray-800"
                >
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">
                            Stay Updated
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Subscribe to our newsletter for exclusive offers, wellness tips, and
                            updates about new services.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary px-6 py-3"
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Copyright */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-gray-400 text-sm mb-4 md:mb-0"
                        >
                            © {currentYear} Platinum Spa. All rights reserved.
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex space-x-4"
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    href={social.href}
                                    className="w-10 h-10 bg-gray-800 text-gray-300 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
