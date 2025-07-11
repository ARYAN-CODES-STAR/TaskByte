"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  { id: "all", label: "All" },
  { id: "electronics", label: "Electronics" },
  { id: "clothing", label: "Clothing" },
  { id: "books", label: "Books" },
  { id: "home", label: "Home" },
];

export default function Sidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "all"
  );
  const [priceRange, setPriceRange] = useState([
    Number.parseInt(searchParams.get("minPrice") || "0"),
    Number.parseInt(searchParams.get("maxPrice") || "1000"),
  ]);

  const updateFilters = (
    category: string,
    minPrice: number,
    maxPrice: number
  ) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category !== "all") {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    if (minPrice > 0) {
      params.set("minPrice", minPrice.toString());
    } else {
      params.delete("minPrice");
    }

    if (maxPrice < 1000) {
      params.set("maxPrice", maxPrice.toString());
    } else {
      params.delete("maxPrice");
    }

    router.push(`/?${params.toString()}`);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    updateFilters(category, priceRange[0], priceRange[1]);
  };

  return (
    <div className="w-64 bg-gray-50 p-6 h-fit text-black">
      <h2 className="text-lg font-semibold mb-6">Filters</h2>

      <div className="mb-8">
        <h3 className="font-medium mb-4">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                value={category.id}
                checked={selectedCategory === category.id}
                onChange={() => handleCategoryChange(category.id)}
                className="text-blue-600"
              />
              <span className="text-sm">{category.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-medium mb-4">Price</h3>
        <div className="flex flex-col gap-4 px-2">
          <div className="relative h-4">
            {/* Slider  */}
            <div className="absolute inset-0 bg-gray-200 rounded-full h-1" />
            <div
              className="absolute bg-blue-500 h-1 rounded-full"
              style={{
                left: `${(priceRange[0] / 1000) * 100}%`,
                width: `${((priceRange[1] - priceRange[0]) / 1000) * 100}%`,
              }}
            />

            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={priceRange[0]}
              onChange={(e) => {
                const val = Math.min(
                  Number(e.target.value),
                  priceRange[1] - 10
                );
                setPriceRange([val, priceRange[1]]);
                updateFilters(selectedCategory, val, priceRange[1]);
              }}
              className="absolute w-full appearance-none bg-transparent pointer-events-none z-20"
            />

            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={priceRange[1]}
              onChange={(e) => {
                const val = Math.max(
                  Number(e.target.value),
                  priceRange[0] + 10
                );
                setPriceRange([priceRange[0], val]);
                updateFilters(selectedCategory, priceRange[0], val);
              }}
              className="absolute w-full appearance-none bg-transparent pointer-events-none z-10"
            />
          </div>

          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-4">Quick Filters</h3>
        <div className="space-y-2">
          {["Electronics", "Clothing", "Home"].map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat.toLowerCase())}
              className={`block w-full text-left px-3 py-2 rounded text-sm ${
                selectedCategory === cat.toLowerCase()
                  ? "bg-blue-100 text-blue-800"
                  : "hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
