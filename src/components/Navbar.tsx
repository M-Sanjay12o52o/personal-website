"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

type NavItem = {
    label: string;
    href: string;
};

type NavbarProps = {
    pageType?: string;
    className?: string;
};

const Navbar = ({ pageType, className = '' }: NavbarProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems: NavItem[] = [
        { label: 'Home', href: '/' },
        {
            label: pageType === 'Blogs' ? 'Projects' : 'Blogs',
            href: pageType === 'Blogs' ? '/projects' : '/blogs'
        },
        { label: 'About', href: '/about' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`
      fixed top-0 left-0 w-full z-10
      transition-all duration-300
      ${isScrolled ? 'shadow-md bg-white/95 backdrop-blur-sm' : 'bg-white'}
      ${className}
    `}>
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-center">
                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`
                    text-lg font-medium transition-colors duration-200
                    ${pathname === item.href
                                        ? 'text-blue-600'
                                        : 'text-gray-700 hover:text-blue-500'}
                  `}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600 hover:text-blue-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-200 shadow-lg">
                    <ul className="px-4 py-2">
                        {navItems.map((item) => (
                            <li key={item.href} className="mb-2">
                                <Link
                                    href={item.href}
                                    className={`
                      block py-2 text-lg transition-colors duration-200
                      ${pathname === item.href
                                            ? 'text-blue-600'
                                            : 'text-gray-700 hover:text-blue-500'}
                    `}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
