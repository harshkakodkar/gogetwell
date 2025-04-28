import { Button, Notification, toast } from '@/components/ui';
import { useState } from 'react';
import { BiPhone, BiSend, BiUser } from 'react-icons/bi';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';

const ContactForm = () => {
    const [formState, setFormState] = useState<{
        fullname: string;
        email: string;
        subject: string;
        message: string;
    }>({
        fullname: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focused, setFocused] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsSubmitting(true);
            // await apiContactUs(formState);
            setIsSubmitting(false);
            toast.push(
                <Notification title="Success" type="success">
                    Successfully submitted
                </Notification>
            );
            setFormState({
                fullname: '',
                email: '',
                subject: '',
                message: '',
            });
        } catch (err: any) {
            setIsSubmitting(false);
            toast.push(
                <Notification title={err?.response?.data?.message || 'Error'} type="danger">
                    {err?.response?.data?.message || 'Something went wrong'}
                </Notification>
            );
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="bg-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Contact Info */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">Let's get in touch!</h2>
                            <p className="text-gray-600 text-xl">
                                Got questions about GoGetWell.AI? Our team is here to help. Contact us for quick and friendly support.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {/* Contact Details */}
                            <div className="flex items-center space-x-6">
                                <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                                    <BiPhone className="w-8 h-8 text-indigo-600" />
                                </div>
                                <div>
                                    <p className="text-gray-500">Phone</p>
                                    <a href="tel:+919811396858" className="text-gray-900 hover:text-indigo-600 transition-colors text-xl font-medium">
                                        +91 9811396858
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-6">
                                <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                                    <CgMail className="w-8 h-8 text-indigo-600" />
                                </div>
                                <div>
                                    <p className="text-gray-500">Email</p>
                                    <a href="mailto:hello@gogetwell.ai" className="text-gray-900 hover:text-indigo-600 transition-colors text-xl font-medium">
                                        hello@gogetwell.ai
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Connect With Us</h3>
                            <div className="flex space-x-6">
                                <a
                                    href="https://x.com/gogetwellai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 hover:bg-indigo-100 transition-all"
                                >
                                    <BsTwitter className="w-7 h-7 text-indigo-600 hover:text-indigo-700 transition-colors" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/gogetwellai/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 hover:bg-indigo-100 transition-all"
                                >
                                    <BsLinkedin className="w-7 h-7 text-indigo-600 hover:text-indigo-700 transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl p-8 sm:p-10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Full Name */}
                            <div className="relative">
                                <div
                                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                                        focused === 'fullname' || formState.fullname ? 'text-indigo-600' : 'text-gray-400'
                                    }`}
                                >
                                    <BiUser className="w-6 h-6" />
                                </div>
                                <input
                                    type="text"
                                    name="fullname"
                                    placeholder="Full Name"
                                    value={formState.fullname}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('fullname')}
                                    onBlur={() => setFocused('')}
                                    className="w-full pl-14 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-gray-900 placeholder-gray-400"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <div
                                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                                        focused === 'email' || formState.email ? 'text-indigo-600' : 'text-gray-400'
                                    }`}
                                >
                                    <CgMail className="w-6 h-6" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('email')}
                                    onBlur={() => setFocused('')}
                                    className="w-full pl-14 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-gray-900 placeholder-gray-400"
                                    required
                                />
                            </div>

                            {/* Message */}
                            <div className="relative">
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('message')}
                                    onBlur={() => setFocused('')}
                                    rows={5}
                                    className="w-full p-5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-gray-900 placeholder-gray-400"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <Button
                                loading={isSubmitting}
                                type="submit"
                                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-indigo-500/20"
                            >
                                <span className="text-lg">Submit</span>
                                <BiSend className="w-6 h-6" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;