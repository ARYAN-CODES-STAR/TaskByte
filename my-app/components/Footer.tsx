import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-300">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Price Range
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Brands
                </a>
              </li>
            </ul>
          </div>

          {/* links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 hover:text-blue-300 cursor-pointer" />
              <Twitter className="w-6 h-6 hover:text-blue-300 cursor-pointer" />
              <Instagram className="w-6 h-6 hover:text-blue-300 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} WhatBytes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}