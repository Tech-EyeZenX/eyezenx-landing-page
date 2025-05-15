import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email address";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccess(true);
            setFormData({ name: "", surname: "", email: "", message: "" });
            setTimeout(() => setShowSuccess(false), 3000);
        }, 1500);
    };

    return (
        <section className="relative w-full min-h-screen bg-gradient-to-b from-[#000212] via-[#0A1035] to-[#000000] overflow-hidden">
            <div className="max-w-6xl mx-auto py-12">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Let's Build Something Exceptional Together
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Whether you're looking for tailored solutions, strategic partnerships, or direct support—you're in the right place.
                    </p>
                </motion.div>


                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 w-full max-w-xl shadow-lg rounded-lg overflow-hidden"
                    >
                        <div className="p-6 bg-[#131313]  rounded-xl shadow-lg w-full">
                            <h3 className="text-2xl font-bold text-white mb-4 text-center">
                                Contact Us
                            </h3>

                            <motion.form
                                onSubmit={handleSubmit}
                                variants={formVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                className="space-y-4"
                            >
                                <motion.div variants={itemVariants}>
                                    <label className="block text-sm font-medium text-white dark:text-slate-300 mb-1 ">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label className="block text-sm font-medium text-white dark:text-slate-300 mb-1">
                                        Surname
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.surname}
                                        onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white"
                                    />
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label className="block text-sm font-medium text-white dark:text-slate-300 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label className="block text-sm font-medium text-white dark:text-slate-300 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={4}
                                        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white"
                                    />
                                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                </motion.div>

                                <motion.div variants={itemVariants} className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
                                    >
                                        <motion.span
                                            animate={{ x: isSubmitting ? 2 : 0 }}
                                            transition={{ repeat: Infinity, repeatType: "mirror", duration: 0.6 }}
                                        >
                                            {isSubmitting ? "Sending..." : "Submit"}
                                        </motion.span>
                                        <Send className="w-5 h-5" />
                                    </button>
                                </motion.div>
                            </motion.form>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-center p-6 bg-black dark:bg-slate-800 rounded-xl shadow-lg"
                        >
                            <p className="text-slate-600 dark:text-slate-400">
                                Looking to be our partner?{" "}
                                <a href="#partnership" className="text-blue-600 dark:text-blue-400 hover:underline">
                                    Explore partnership opportunities
                                </a>
                            </p>
                        </motion.div>

                    </motion.div>


                </div>

                {/* Success Message */}
                <AnimatePresence>
                    {showSuccess && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2"
                        >
                            <Send className="w-5 h-5" />
                            Message sent successfully!
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
