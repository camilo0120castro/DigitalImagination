import { Link } from 'react-router-dom';
import { Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/digital_img1' },
        { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/digital.img1' },
        { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/channel/UCCKW9yhr0bNlYVWjHsf8iXw' },
    ];

    return (
        <footer className="bg-eggshell-dark mt-auto border-t border-espresso/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <h4 className="font-bold text-lg mb-2 text-espresso">Dreams Shape The World</h4>
                        <Link to="/" className="inline-block">
                            <span className="font-semibold text-espresso">Digital Imagination</span>
                        </Link>
                    </div>

                    <div className="text-center">
                        <p className="text-sm text-espresso/70">
                            {currentYear} © Digital Imagination<br />
                            All rights reserved
                        </p>
                    </div>

                    <div className="flex justify-center md:justify-end space-x-6">
                        {socialLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-espresso/70 hover:text-terracotta transition-colors"
                                    aria-label={`Visit our ${link.name}`}
                                >
                                    <Icon size={24} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
