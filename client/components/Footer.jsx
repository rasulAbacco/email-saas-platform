export default function Footer() {
    return (
        <footer className="w-full py-6 text-center text-gray-600 dark:text-gray-400 border-t dark:border-gray-700 mt-10">
            <p>© {new Date().getFullYear()} EmailAI Pro — All rights reserved</p>
            <div className="mt-2 space-x-4">
                <a href="https://linkedin.com" target="_blank" className="hover:underline">LinkedIn</a>
                <a href="https://twitter.com" target="_blank" className="hover:underline">Twitter</a>
                <a href="https://facebook.com" target="_blank" className="hover:underline">Facebook</a>
                <a href="https://instagram.com" target="_blank" className="hover:underline">Instagram</a>
            </div>
        </footer>
    );
}
