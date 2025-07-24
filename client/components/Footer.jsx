import {
    FaLinkedinIn,
    FaTwitter,
    FaFacebookF,
    FaInstagram,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-[#001524] text-gray-800 dark:text-white border-t max-w-7xl mx-auto dark:border-gray-700 py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold mb-2 text-[#7F27FF] dark:text-[#AD49E1]">📧 EmailAI Pro</h2>
                    <p className="text-sm">Powering smarter email campaigns & CRM solutions for growing teams.</p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="/#features" className="hover:text-[#6528F7]">Features</a></li>
                        <li><a href="/#pricing" className="hover:text-[#6528F7]">Pricing</a></li>
                        <li><a href="/#about" className="hover:text-[#6528F7]">About</a></li>
                        <li><a href="/login" className="hover:text-[#6528F7]">Login</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-semibold mb-2">Contact</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2"><FaEnvelope /> support@emailai.pro</li>
                        <li className="flex items-center gap-2"><FaPhoneAlt /> +1 (123) 456-7890</li>
                        <li className="flex items-center gap-2"><FaMapMarkerAlt /> Silicon Valley, CA</li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="font-semibold mb-2">Follow Us</h3>
                    <div className="flex gap-4 text-lg">
                        <a href="#" className="hover:text-[#7F27FF]"><FaLinkedinIn /></a>
                        <a href="#" className="hover:text-[#4300FF]"><FaTwitter /></a>
                        <a href="#" className="hover:text-[#9400FF]"><FaFacebookF /></a>
                        <a href="#" className="hover:text-[#AD49E1]"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400 border-t pt-4">
                © 2025 EmailAI Pro. All rights reserved.
            </div>
        </footer>
    );
}
