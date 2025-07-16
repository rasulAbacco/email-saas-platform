import LandingNavbar from '../components/ui/LandingNavbar';
import Footer from '../components/ui/Footer';

export default function LandingLayout({ children }) {
    return (
        <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
            <LandingNavbar />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}
