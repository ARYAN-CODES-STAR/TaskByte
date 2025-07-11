"use client"
import React from 'react'
import { useState, useEffect } from 'react';

type SidebarProps = {
    onCategoryChange: (category: string) => void;
    onPriceChange: (min: number, max: number) => void;
    initialCategory: string;
    initialMinPrice: number;
    initialMaxPrice: number;
};

const Sidebar = ({ onCategoryChange, onPriceChange, initialCategory, initialMinPrice, initialMaxPrice }: SidebarProps) => {
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [minPrice, setMinPrice] = useState(initialMinPrice);
    const [maxPrice, setMaxPrice] = useState(initialMaxPrice);

    // Sync internal state with props (e.g., when URL filters change)
    useEffect(() => {
        setSelectedCategory(initialCategory);
    }, [initialCategory]);

    useEffect(() => {
        setMinPrice(initialMinPrice);
        setMaxPrice(initialMaxPrice);
    }, [initialMinPrice, initialMaxPrice]);

    const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCategory(e.target.value);
        onCategoryChange(e.target.value);
    };

    const handlePriceApply = () => {
        onPriceChange(minPrice, maxPrice);
    };

    return (
        <aside className="w-64 bg-blue-700 p-6 text-white h-full sticky top-0">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>

            {/* Category Filter */}
            <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Category</h3>
                {['All', 'Electronics', 'Clothing', 'Home'].map((category) => (
                    <label key={category} className="block mb-2 text-base cursor-pointer">
                        <input
                            type="radio"
                            name="category"
                            value={category}
                            checked={selectedCategory === category}
                            onChange={handleCategoryChange}
                            className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        {category}
                    </label>
                ))}
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Price</h3>
                <div className="flex items-center space-x-2 mb-3">
                    <input
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                        className="w-1/2 p-2 rounded-md text-gray-800 text-sm"
                        placeholder="Min"
                        min="0"
                    />
                    <span className="text-gray-200">-</span>
                    <input
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className="w-1/2 p-2 rounded-md text-gray-800 text-sm"
                        placeholder="Max"
                        min="0"
                    />
                </div>
                {/* A simplified slider could be implemented using a range input, but for two specific inputs, this is clearer */}
                <button
                    onClick={handlePriceApply}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm w-full transition duration-200"
                >
                    Apply Filter
                </button>
            </div>

            {/* If 'Cacroy' is a distinct filter type, it would need its own state and logic.
                For now, it's removed to avoid confusion/duplication with 'Category'.
                If it represents another set of categories or brands, you can add it back
                with its own state.
            */}
        </aside>
    );
};

export default Sidebar;