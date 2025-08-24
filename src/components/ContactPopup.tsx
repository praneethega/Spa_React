import { motion, AnimatePresence } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaTimes, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa'

interface ContactPopupProps {
    isOpen: boolean
    onClose: () => void
}

const ContactPopup = ({ isOpen, onClose }: ContactPopupProps) => {
    const handleCall = () => {
        window.location.href = 'tel:+919121289918'
    }

    const handleWhatsApp = () => {
        window.open('https://wa.me/919121289918', '_blank')
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white text-center relative">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-200"
                            >
                                <FaTimes className="text-xl" />
                            </button>
                            <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
                            <p className="text-purple-100">Get in touch with us today!</p>
                        </div>

                        {/* Contact Info */}
                        <div className="p-6 space-y-4">
                            {/* Phone */}
                            <div className="flex items-center space-x-3 text-gray-700">
                                <FaPhone className="text-purple-600 text-lg" />
                                <span className="font-medium">+91 91 212 899 18</span>
                            </div>

                            {/* Email */}
                            <div className="flex items-center space-x-3 text-gray-700">
                                <FaEnvelope className="text-purple-600 text-lg" />
                                <span className="font-medium">platinumluxuryspa@gmail.com</span>
                            </div>

                            {/* Address */}
                            <div className="flex items-start space-x-3 text-gray-700">
                                <FaMapMarkerAlt className="text-purple-600 text-lg mt-1 flex-shrink-0" />
                                <span className="font-medium">
                                    Pillar No: 1734, KSR Towers, Madhapur, Hyderabad, 500081<br />
                                    KSR Towers, Hitech City Rd, Phase 2, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081
                                </span>
                            </div>

                            {/* Opening Hours */}
                            <div className="flex items-center space-x-3 text-gray-700">
                                <FaClock className="text-purple-600 text-lg" />
                                <span className="font-medium">9:00 AM - 10:00 PM (All Days)</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="p-6 pt-0 space-y-3">
                            {/* Call Button */}
                            <button
                                onClick={handleCall}
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                            >
                                <FaPhone className="text-lg" />
                                <span>Call Now</span>
                            </button>

                            {/* WhatsApp Button */}
                            <button
                                onClick={handleWhatsApp}
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                            >
                                <FaWhatsapp className="text-lg" />
                                <span>WhatsApp</span>
                            </button>

                            {/* Cancel Button */}
                            <button
                                onClick={onClose}
                                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                            >
                                Cancel
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default ContactPopup
