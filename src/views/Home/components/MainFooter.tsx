import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useThemeStore } from '@/store/themeStore';
import { themes } from '@/views/Home/themes/themeLoader';

interface LinkItem {
    text: string;
    path: string;
}

const links: LinkItem[] = [
    { text: 'Privacy Policy', path: '/privacy-policy' },
    { text: 'Terms of Service', path: '/terms-of-service' },
    { text: 'Pricing Policy', path: '/pricing-policy' },
    { text: 'Editor Policy', path: '/editor-policy' },
];

const MainFooter: React.FC = () => {
    const { theme } = useThemeStore();
    const currentTheme = themes[theme]?.colors || {};

    return (
        <footer 
            className="border-t p-4"
            style={{
                backgroundColor: currentTheme.background || '#ffffff',
                borderColor: currentTheme.border || '#e5e7eb'
            }}
        >
            <div className="w-full flex flex-wrap items-center justify-between mx-auto p-2 sm:px-12">
                {/* Copyright */}
                <h1 
                    className="text-sm md:hidden text-center w-full"
                    style={{ color: currentTheme.text || '#1a1a1a' }}
                >
                    © {new Date().getFullYear()} gogetwell.ai
                </h1>
                <h1 
                    className="text-xs hidden md:block"
                    style={{ color: currentTheme.text || '#1a1a1a' }}
                >
                    © {new Date().getFullYear()} gogetwell.ai
                </h1>

                {/* Policy Links */}
                <ul className="mt-4 md:mt-0 flex gap-x-3 flex-wrap gap-y-3 mx-auto">
                    {links.map((item, index) => (
                        <li 
                            key={index} 
                            className="hover:underline text-xs text-center"
                            style={{ 
                                color: currentTheme.text || '#1a1a1a',
                                hover: { color: currentTheme.accent || '#4f46e5' }
                            }}
                        >
                            <Link to={item.path}>{item.text}</Link>
                        </li>
                    ))}
                </ul>

                {/* Social Links */}
                <div className="items-center gap-4 md:gap-8 hidden md:flex">
                    <a
                        href="https://x.com/gogetwellai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full transition-all"
                        style={{ 
                            backgroundColor: currentTheme.accent || '#4f46e5',
                            color: 'white',
                            hover: { 
                                backgroundColor: currentTheme.accentHover || '#4338ca',
                                transform: 'scale(1.1)'
                            }
                        }}
                    >
                        <FaTwitter size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/gogetwellai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full transition-all"
                        style={{ 
                            backgroundColor: currentTheme.accent || '#4f46e5',
                            color: 'white',
                            hover: { 
                                backgroundColor: currentTheme.accentHover || '#4338ca',
                                transform: 'scale(1.1)'
                            }
                        }}
                    >
                        <FaLinkedinIn size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;