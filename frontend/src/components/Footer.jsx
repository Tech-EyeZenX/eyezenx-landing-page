import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="relative py-12 px-6 md:px-10  md:px--54 bg-gradient-to-b from-[#0F1B50] to-[#1E2A78] text-white overflow-hidden ">
            <div className="bg-black shadow-2xl rounded-2xl p-6 max-w-8xl">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-gray-700 pb-8 "
                >
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Connect with us</h2>
                        <p className="text-sm text-gray-400 max-w-md">
                            We are here to provide reliable healthcare information and services. Let's build a healthier future together.
                        </p>
                    </div>
                    <Button variant="outline" className="rounded-full border-white text-white bg-black">
                        Contact Us
                    </Button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 text-sm">
                    <div>
                        <h3 className="font-bold text-white text-lg mb-3">EyezenX</h3>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">FAQ’s</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Services</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#">EyezenX Connect</a></li>
                            <li><a href="#">EyezenX Next</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Contact Information</h4>
                        <ul className="text-gray-400 space-y-2">
                            <li>Email: eyezenx@gmail.com</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
                    <p className="text-sm text-gray-400">2025 | Privacy Policy | Terms And Conditions</p>
                    <div className="flex space-x-4 mt-4 md:mt-0 text-gray-400 text-lg">
                        <FaInstagram className="hover:text-white transition" />
                        <FaFacebook className="hover:text-white transition" />
                        <FaLinkedin className="hover:text-white transition" />
                        <FaXTwitter className="hover:text-white transition" />
                    </div>
                </div>
            </div>
        </footer>
    );
}