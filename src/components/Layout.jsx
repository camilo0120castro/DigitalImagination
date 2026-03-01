import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen bg-eggshell text-espresso font-sans">
            <Navbar />
            <main className="flex-1 w-full flex flex-col pt-16">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
