import Link from 'next/link';
import { ShoppingCart, User, Search } from 'lucide-react';

const Header = () => {
    
    const cartItemCount = 0; // Placeholder for cart item count, will update it

    return (
        <header className="bg-blue-600 text-white p-3 flex items-center justify-center">
            <div className="text-2xl font-bold">
                <Link href="/">Logo</Link>
            </div>

            <div className="flex-grow mx-8 relative">
                <input
                    type="text"
                    placeholder="Search for products..."
                    className="w-full p-2 pl-10 rounded-md text-gray-100"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            </div>

            <div className="flex items-center space-x-6 bg-blue-800 p-4 rounded-md">
                <div className="relative">
                    <Link href="/cart">
                        <ShoppingCart size={28} />
                        {cartItemCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                                {cartItemCount}
                            </span>
                        )}
                    </Link>
                </div>
                <User size={28} />
            </div>
        </header>
    );
};

export default Header;