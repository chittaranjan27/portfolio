import { useState, useEffect, memo } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";
      
      sections.forEach((section) => {
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          const sectionId = section.getAttribute("id");
          if (sectionId) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },  // Kept Skills section
    { name: "Experience", href: "#experience" },  // Added Experience
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-gray-100" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <motion.a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Portfolio
          </motion.a>

          <nav className="hidden md:flex space-x-2">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-gray-700 font-medium rounded-lg transition-all ${
                  activeSection === link.href.substring(1)
                    ? "text-indigo-600 font-semibold bg-indigo-50"
                    : "hover:text-indigo-600 hover:bg-gray-50"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                    layoutId="underline"
                    initial={false}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          {isMenuOpen && (
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="bg-white/95 backdrop-blur-md shadow-xl rounded-xl mt-4 border border-gray-100"
            >
              <div className="flex flex-col py-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`px-6 py-3 text-gray-700 transition-all ${
                      activeSection === link.href.substring(1)
                        ? "bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 font-semibold border-l-4 border-indigo-600"
                        : "hover:bg-gray-50 hover:pl-8"
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.header>
  );
};

export default memo(Header);