import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaSpa } from 'react-icons/fa'

interface HeaderProps {
    onBookNow: () => void
}

const Header = ({ onBookNow }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'Home', href: '/home' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-yellow-500/20' : 'bg-transparent'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2"
                    >
                        <FaSpa className="text-3xl text-yellow-500" />
                        <span className="text-2xl font-bold text-white font-luxury">Platinum Spa</span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="text-gray-300 hover:text-yellow-500 transition-colors duration-300 font-medium font-elegant"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onBookNow}
                            className="bg-yellow-600 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300"
                        >
                            Schedule Now
                        </motion.button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-gray-300 hover:text-yellow-500 transition-colors"
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-yellow-500/20"
                    >
                        <div className="py-4 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="block text-gray-300 hover:text-yellow-500 transition-colors duration-300 font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    onBookNow()
                                    setIsMenuOpen(false)
                                }}
                                className="bg-yellow-600 text-black w-full px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300"
                            >
                                Schedule Now
                            </button>
                        </div>
                    </motion.nav>
                )}
            </div>
        </motion.header>
    )
}

export default Header
