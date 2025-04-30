import React, { ReactNode } from 'react'
import aboutUs from '@/assets/images/about_us.gif'
import mission from '@/assets/images/our_mission.gif'
import challenges from '@/assets/images/challenges_solve.gif'
import { useThemeStore } from '@/store/themeStore'
import { themes } from '@/views/Home/themes/themeLoader'

interface SectionProps {
    img: any
    icon1: ReactNode
    icon2: ReactNode
    title: string
    content1: string
    content2: string
    icontitle1: string
    iconp1: string
    icontitle2: string
    iconp2: string
    status: 'left' | 'right'
}

const Section: React.FC<SectionProps> = ({
    status,
    img,
    icon1,
    icon2,
    title,
    content1,
    content2,
    icontitle1,
    iconp1,
    icontitle2,
    iconp2,
}) => {
    const { theme } = useThemeStore()
    const currentTheme = themes[theme]?.colors || {}

    // Theme-based colors
    const getBackgroundColor = () => {
        if (theme === 'light') return 'bg-white'
        if (theme === 'dark') return 'bg-gray-900'
        return `bg-[${currentTheme.background}]`
    }

    const getTextColor = () => {
        return theme === 'light' ? 'text-gray-900' : 'text-white'
    }

    const getSecondaryTextColor = () => {
        return theme === 'light' ? 'text-gray-700' : 'text-gray-300'
    }

    const getCardBackground = () => {
        if (theme === 'light') return 'bg-white'
        if (theme === 'dark') return 'bg-gray-800'
        return `bg-[${currentTheme.cardBackground || currentTheme.background}]`
    }

    const getBorderColor = () => {
        if (theme === 'light') return 'border-gray-100'
        if (theme === 'dark') return 'border-gray-700'
        return `border-[${currentTheme.border || currentTheme.background}]`
    }

    const getGradient = () => {
        if (theme === 'light') return 'from-blue-500 to-purple-500'
        if (theme === 'dark') return 'from-blue-400 to-purple-400'
        return currentTheme.gradient || 'from-blue-500 to-purple-500'
    }

    return (
        <div className={`py-20 ${getBackgroundColor()}`}>
            <div className="flex flex-col lg:flex-row gap-12 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Image Section */}
                <div className={`w-full lg:w-1/2 ${status === 'right' ? 'lg:order-last' : ''}`}>
                    <div className="relative group">
                        <img
                            src={img}
                            alt={title}
                            className="w-full object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-[1.02] max-w-[500px] mx-auto"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className={`w-full lg:w-1/2 ${status === 'right' ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="mb-8">
                        <h2 className={`text-4xl font-bold mb-3 ${getTextColor()}`}>
                            {title}
                        </h2>
                        <div className={`h-1.5 w-24 bg-gradient-to-r ${getGradient()} rounded-full`}></div>
                    </div>

                    <div className="space-y-5 mb-8">
                        <p className={`leading-relaxed text-lg ${getSecondaryTextColor()}`}>{content1}</p>
                        <p className={`leading-relaxed text-lg ${getSecondaryTextColor()}`}>{content2}</p>
                    </div>

                    {/* Feature Points */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className={`flex items-start gap-3 p-4 ${getCardBackground()} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border ${getBorderColor()}`}>
                            <div className="flex-shrink-0 mt-1">
                                <div className={`p-3 bg-gradient-to-br ${theme === 'light' ? 'from-blue-50 to-blue-100' : 'from-blue-900/20 to-blue-800/20'} rounded-lg`}>
                                    {React.cloneElement(icon1 as React.ReactElement, {
                                        className: `w-6 h-6 ${theme === 'light' ? 'text-blue-600' : 'text-blue-400'}`
                                    })}
                                </div>
                            </div>
                            <div>
                                <h4 className={`font-bold text-base mb-1 leading-tight ${getTextColor()}`}>
                                    {icontitle1}
                                </h4>
                                <p className={`text-sm leading-tight ${getSecondaryTextColor()}`}>
                                    {iconp1}
                                </p>
                            </div>
                        </div>

                        <div className={`flex items-start gap-3 p-4 ${getCardBackground()} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border ${getBorderColor()}`}>
                            <div className="flex-shrink-0 mt-1">
                                <div className={`p-3 bg-gradient-to-br ${theme === 'light' ? 'from-blue-50 to-blue-100' : 'from-blue-900/20 to-blue-800/20'} rounded-lg`}>
                                    {React.cloneElement(icon2 as React.ReactElement, {
                                        className: `w-6 h-6 ${theme === 'light' ? 'text-blue-600' : 'text-blue-400'}`
                                    })}
                                </div>
                            </div>
                            <div>
                                <h4 className={`font-bold text-base mb-1 leading-tight ${getTextColor()}`}>
                                    {icontitle2}
                                </h4>
                                <p className={`text-sm leading-tight ${getSecondaryTextColor()}`}>
                                    {iconp2}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const FullPageSections = () => {
    const { theme } = useThemeStore()

    const sections = [
        {
            img: aboutUs,
            icon1: (
                <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                </svg>
            ),
            icon2: (
                <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
            ),
            title: 'About Us',
            content1:
                'We are a pioneering AI-driven platform focused on revolutionizing the medical tourism industry. By addressing inefficiencies and disorganization, we empower healthcare facilitators to modernize their operations, attract more patients, and deliver seamless, personalized care across borders.',
            content2:
                'Our cutting-edge solutions are designed to streamline processes and enhance the overall patient experience.',
            icontitle1: 'Modern Solutions',
            iconp1: 'Leveraging AI technology for healthcare',
            icontitle2: 'Patient-Centric',
            iconp2: 'Personalized healthcare experiences',
            status: 'left',
        },
        {
            img: mission,
            icon1: (
                <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
            icon2: (
                <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                </svg>
            ),
            title: 'Our Mission',
            content1:
                'Our mission is to simplify the complex medical tourism process by leveraging advanced AI tools that optimize healthcare facilitators operations, maximize revenue opportunities, and provide patients with personalized and stress-free treatment journeys.',
            content2:
                'We strive to become the leading platform for healthcare tourism management and digital transformation.',
            icontitle1: 'AI-Powered Solutions',
            iconp1: 'Optimizing operations with advanced technology',
            icontitle2: 'Growth Focus',
            iconp2: 'Maximizing revenue and opportunities',
            status: 'right',
        },
        {
            img: challenges,
            icon1: (
                <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
            icon2: (
                <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                </svg>
            ),
            title: 'The Challenges We Solve',
            content1:
                'Medical tourism, especially in India, is plagued by disorganization and inefficiency. Facilitators often rely on outdated methods, leading to delayed bookings, inadequate patient support, and missed growth opportunities.',
            content2:
                'Our platform addresses these pain points by streamlining lead management and improving operational efficiency for facilitators and hospitals alike.',
            icontitle1: 'Efficient Operations',
            iconp1: 'Streamlined booking and management',
            icontitle2: 'Enhanced Support',
            iconp2: 'Improved patient communication',
            status: 'left',
        },
    ]

    return (
        <div className="scroll-smooth" style={{
            backgroundColor: themes[theme]?.colors?.background || '#ffffff',
            color: themes[theme]?.colors?.text || (theme === 'light' ? '#000000' : '#ffffff')
        }}>
            {sections.map((section, index) => (
                <Section
                    key={index}
                    img={section.img}
                    icon1={section.icon1}
                    icon2={section.icon2}
                    title={section.title}
                    content1={section.content1}
                    content2={section.content2}
                    icontitle1={section.icontitle1}
                    iconp1={section.iconp1}
                    icontitle2={section.icontitle2}
                    iconp2={section.iconp2}
                    status={section.status as 'left' | 'right'}
                />
            ))}
        </div>
    )
}

export default FullPageSections