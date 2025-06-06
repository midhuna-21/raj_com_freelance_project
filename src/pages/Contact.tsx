
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, HelpCircle, Users } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Form validation schema
const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
    message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
    // Form handling with react-hook-form and zod validation
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: ""
        }
    });

    const onSubmit = (values: FormValues) => {
        // In a real application, you would send the form data to a backend
        console.log("Form submitted:", values);

        // Show success message
        toast.success("Your message has been sent! We'll get back to you soon.", {
            description: "Our team will review your inquiry and respond promptly.",
            icon: <CheckCircle className="h-4 w-4" />
        });

        // Reset form
        form.reset();
    };

    return (
        <MainLayout>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="circuitPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M0 50 H100 M50 0 V100 M25 25 H75 M25 75 H75" stroke="currentColor" strokeWidth="0.5" fill="none" />
                            <circle cx="50" cy="50" r="3" fill="currentColor" />
                            <circle cx="25" cy="25" r="2" fill="currentColor" />
                            <circle cx="75" cy="75" r="2" fill="currentColor" />
                            <circle cx="75" cy="25" r="2" fill="currentColor" />
                            <circle cx="25" cy="75" r="2" fill="currentColor" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#circuitPattern)" />
                    </svg>
                </div>

                {/* Animated hardware elements */}
                <div className="absolute top-10 left-10 w-16 h-16 bg-blue-500/10 rounded-full animate-pulse-slow"></div>
                <div className="absolute bottom-10 right-10 w-20 h-20 bg-green-500/10 rounded-full animate-float-slow"></div>
                <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-blue-500/20 rounded-md animate-spin-slow"></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Get In Touch</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
                        Need hardware solutions for your business? Our technical experts are ready to assist you with personalized recommendations and support.
                    </p>
                </div>
            </section>

            {/* Contact Information Cards */}
            <section className="py-16 bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        <ContactCard
                            icon={<MapPin className="h-10 w-10" />}
                            title="Our Location"
                            details={["RJA Computer System PO Box: 111013 , Dubai"]}
                            delay={0}
                        />
                        <ContactCard
                            icon={<Phone className="h-10 w-10" />}
                            title="Phone"
                            details={["+9710563861260", "+9710566930268"]}
                            delay={100}
                        />
                        <ContactCard
                            icon={<Mail className="h-10 w-10" />}
                            title="Email"
                            details={["rjanetworkllc@gmail.com"]}
                            delay={200}
                        />
                        <ContactCard
                            icon={<Clock className="h-10 w-10" />}
                            title="Business Hours"
                            details={["Open 24/7"]}
                            delay={300}
                        />
                    </div>

                <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-12">
    {/* Contact Form */}

    {/* Map */}
    <div className="w-full lg:w-[70%] animate-fade-in" style={{ animationDelay: "300ms" }}>
                            <div className="bg-slate-800 p-8 rounded-lg shadow-lg border border-slate-700 h-full flex flex-col">
                                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                                    <MapPin className="mr-3 h-6 w-6 text-blue-400" />
                                    Visit Our Store
                                </h2>
                                <div className="h-[400px] md:h-[450px] bg-slate-900 rounded-lg overflow-hidden flex-grow border border-slate-700 shadow-inner">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178530023701!2d55.27580926880003!3d25.204912130887465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43314c1fc767%3A0x9131d2afb37fff66!2sBurj%20Khalifa!5e0!3m2!1sen!2sus!4v1673452411147!5m2!1sen!2sus"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Google Maps"
                                        className="filter grayscale"
                                    />
                                </div>
                                <div className="mt-4 text-gray-400 text-sm">
                                    <p>Visit our showroom to see our extensive range of hardware products and solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Categories */}
            <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-6 text-center">How Can We Help You?</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto text-center mb-12">
                        Our technical experts are ready to assist with any hardware or IT infrastructure needs
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <SupportCard
                            icon={<HelpCircle className="h-8 w-8" />}
                            title="Technical Support"
                            description="Get expert help with hardware troubleshooting, installations, and maintenance from our certified technicians."
                            delay={0}
                        />
                        <SupportCard
                            icon={<Users className="h-8 w-8" />}
                            title="Business Solutions"
                            description="Custom hardware configurations and enterprise-level IT infrastructure solutions for businesses of all sizes."
                            delay={200}
                        />
                        <SupportCard
                            icon={<Mail className="h-8 w-8" />}
                            title="Product Inquiries"
                            description="Information about our product range, specifications, pricing, and availability for your specific needs."
                            delay={400}
                        />
                    </div>
                </div>
            </section>

            {/* FAQ Section with improved styling */}
            <section className="py-16 bg-slate-950">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <FAQItem
                            question="What areas do you serve?"
                            answer="We provide our hardware solutions globally, with clients in over 25 countries across North America, Europe, Asia, and the Middle East."
                            delay={0}
                        />
                        <FAQItem
                            question="Do you offer custom computer builds?"
                            answer="Yes, we specialize in creating tailored hardware configurations that address the unique needs and challenges of your business or personal requirements."
                            delay={100}
                        />
                        <FAQItem
                            question="What warranty options do you provide?"
                            answer="We offer various warranty packages including standard manufacturer warranties, extended service plans, on-site support, and next-business-day replacements."
                            delay={200}
                        />
                        <FAQItem
                            question="How can I request a hardware quote?"
                            answer="You can request a quote by filling out our contact form above, emailing us directly, or calling our sales team at +9710563861260."
                            delay={300}
                        />
                    </div>
                </div>
            </section>

         
        </MainLayout>
    );
};

// Enhanced Contact Card Component with animation
const ContactCard = ({ icon, title, details, delay = 0 }: {
    icon: React.ReactNode;
    title: string;
    details: string[];
    delay?: number;
}) => (
    <div
        className="bg-slate-800 p-6 rounded-lg text-center border border-slate-700 shadow-lg transform transition-all hover:translate-y-[-5px] animate-fade-in"
        style={{ animationDelay: `${delay}ms` }}
    >
        <div className="flex justify-center mb-4 text-blue-400 animate-float">{icon}</div>
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <div className="text-gray-300">
            {details.map((detail, index) => (
                <p key={index} className="py-1">{detail}</p>
            ))}
        </div>
    </div>
);

// Enhanced Support Card Component with animation
const SupportCard = ({ icon, title, description, delay = 0 }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay?: number;
}) => (
    <div
        className="bg-slate-800 p-8 rounded-lg border border-slate-700 shadow-lg transform transition-all hover:scale-105 animate-fade-in"
        style={{ animationDelay: `${delay}ms` }}
    >
        <div className="flex justify-center mb-6 text-blue-400 animate-float p-4 bg-slate-900 rounded-full w-16 h-16 mx-auto">
            {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white text-center">{title}</h3>
        <p className="text-gray-300 text-center">{description}</p>
    </div>
);

// Enhanced FAQ Item Component with animation
const FAQItem = ({ question, answer, delay = 0 }: {
    question: string;
    answer: string;
    delay?: number;
}) => (
    <div
        className="bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-700 transform transition-all hover:shadow-lg animate-fade-in"
        style={{ animationDelay: `${delay}ms` }}
    >
        <h3 className="text-lg font-semibold mb-3 text-white">{question}</h3>
        <p className="text-gray-400">{answer}</p>
    </div>
);

export default Contact;
