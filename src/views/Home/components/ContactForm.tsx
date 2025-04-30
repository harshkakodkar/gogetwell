import { Button, Notification, toast } from '@/components/ui';
import { useState } from 'react';
import { BiPhone, BiSend, BiUser } from 'react-icons/bi';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { useThemeStore } from '@/store/themeStore';
import { themes } from '@/views/Home/themes/themeLoader';

const ContactForm = () => {
    const { theme } = useThemeStore();
    const currentTheme = themes[theme]?.colors || {};
    const [formState, setFormState] = useState({
        fullname: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focused, setFocused] = useState('');

    const handleSubmit = async (e) => {
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
        } catch (err) {
            setIsSubmitting(false);
            toast.push(
                <Notification title={err?.response?.data?.message || 'Error'} type="danger">
                    {err?.response?.data?.message || 'Something went wrong'}
                </Notification>
            );
        }
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    // Helper functions for dark mode styles
    const getInputStyles = () => {
        return theme === 'dark' 
            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500'
            : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500';
    };

    const getIconColor = (field) => {
        if (focused === field || formState[field]) {
            return theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600';
        }
        return theme === 'dark' ? 'text-gray-500' : 'text-gray-400';
    };

    return (
        <div 
            className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
            style={{
                backgroundColor: currentTheme.background || (theme === 'dark' ? '#111827' : '#ffffff'),
                color: currentTheme.text || (theme === 'dark' ? '#f3f4f6' : '#1a1a1a')
            }}
        >
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Contact Info */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-5xl font-bold mb-6 tracking-tight" style={{ color: currentTheme.text || (theme === 'dark' ? '#f3f4f6' : '#1a1a1a') }}>
                                Let's get in touch!
                            </h2>
                            <p className="text-xl" style={{ color: currentTheme.secondaryText || (theme === 'dark' ? '#9ca3af' : '#4b5563') }}>
                                Got questions about GoGetWell.AI? Our team is here to help. Contact us for quick and friendly support.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {/* Contact Details */}
                            <div className="flex items-center space-x-6">
                                <div className="p-4 rounded-xl flex items-center justify-center" style={{ 
                                    backgroundColor: currentTheme.accent || '#4f46e5',
                                    borderColor: currentTheme.border || '#e0e7ff'
                                }}>
                                    <BiPhone className="w-8 h-8" style={{ color: 'white' }} />
                                </div>
                                <div>
                                    <p style={{ color: currentTheme.secondaryText || (theme === 'dark' ? '#9ca3af' : '#6b7280') }}>Phone</p>
                                    <a 
                                        href="tel:+919811396858" 
                                        className="text-xl font-medium transition-colors hover:text-indigo-600"
                                        style={{ 
                                            color: currentTheme.text || (theme === 'dark' ? '#f3f4f6' : '#1a1a1a'),
                                        }}
                                    >
                                        +91 9811396858
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-6">
                                <div className="p-4 rounded-xl flex items-center justify-center" style={{ 
                                    backgroundColor: currentTheme.accent || '#4f46e5',
                                    borderColor: currentTheme.border || '#e0e7ff'
                                }}>
                                    <CgMail className="w-8 h-8" style={{ color: 'white' }} />
                                </div>
                                <div>
                                    <p style={{ color: currentTheme.secondaryText || (theme === 'dark' ? '#9ca3af' : '#6b7280') }}>Email</p>
                                    <a 
                                        href="mailto:hello@gogetwell.ai" 
                                        className="text-xl font-medium transition-colors hover:text-indigo-600"
                                        style={{ 
                                            color: currentTheme.text || (theme === 'dark' ? '#f3f4f6' : '#1a1a1a'),
                                        }}
                                    >
                                        hello@gogetwell.ai
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-6" style={{ color: currentTheme.text || (theme === 'dark' ? '#f3f4f6' : '#1a1a1a') }}>
                                Connect With Us
                            </h3>
                            <div className="flex space-x-6">
                                <a
                                    href="https://x.com/gogetwellai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-xl transition-all flex items-center justify-center hover:bg-indigo-700"
                                    style={{ 
                                        backgroundColor: currentTheme.accent || '#4f46e5',
                                        borderColor: currentTheme.border || '#e0e7ff',
                                    }}
                                >
                                    <BsTwitter className="w-7 h-7" style={{ color: 'white' }} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/gogetwellai/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-xl transition-all flex items-center justify-center hover:bg-indigo-700"
                                    style={{ 
                                        backgroundColor: currentTheme.accent || '#4f46e5',
                                        borderColor: currentTheme.border || '#e0e7ff',
                                    }}
                                >
                                    <BsLinkedin className="w-7 h-7" style={{ color: 'white' }} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="rounded-3xl shadow-2xl p-8 sm:p-10" style={{ 
                        backgroundColor: theme === 'dark' ? '#1f2937' : currentTheme.cardBackground || '#ffffff',
                        borderColor: theme === 'dark' ? '#374151' : currentTheme.border || '#e5e7eb'
                    }}>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Full Name */}
                            <div className="relative">
                                <div
                                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${getIconColor('fullname')}`}
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
                                    className={`w-full pl-14 pr-5 py-4 border rounded-xl focus:ring-2 transition-all ${getInputStyles()}`}
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <div
                                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${getIconColor('email')}`}
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
                                    className={`w-full pl-14 pr-5 py-4 border rounded-xl focus:ring-2 transition-all ${getInputStyles()}`}
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
                                    className={`w-full p-5 border rounded-xl focus:ring-2 transition-all ${getInputStyles()}`}
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
                                <BiSend className="w-6 h-6" style={{ color: 'white' }} />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;