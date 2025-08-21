"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function StackedCircularFooter() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          {/* Logo (TEDx TIET rectangular image) */}
          <div className="mb-8">
            <Image
              src="/tedx-tiet.png" // <-- place logo inside /public
              alt="TEDx TIET Logo"
              width={350}
              height={200}
              className="object-contain"
              priority
            />
          </div>

          {/* Contact in one line */}
          <nav className="mb-8 flex items-center gap-3">
            <span className="text-2xl font-bold">Contact Us :</span>
            <a
              href="https://www.tedxtiet.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-red-500 hover:underline cursor-pointer"
            >
              tedx@thapar.edu
            </a>
          </nav>

          {/* Social buttons with brand colors */}
          <div className="mb-8 flex space-x-4">
            <a
              href="https://www.facebook.com/tedxtiet/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="icon"
                className="rounded-full bg-[#000000] hover:bg-[#0d65d9] text-white hover:cursor-pointer"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
            </a>

            <a
              href="https://www.youtube.com/playlist?list=PLwvmGZzdo6jA8Fk6aVwQ5zAksnJfCf1o4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="icon"
                className="rounded-full bg-[#000000] hover:bg-[#FF0000] text-white hover:cursor-pointer"
              >
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Button>
            </a>

            <a
              href="https://www.instagram.com/tedxtiet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="icon"
                className="rounded-full bg-[#000000] hover:bg-[#d12f4d] text-white hover:cursor-pointer"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/company/tedxtiet/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="icon"
                className="rounded-full bg-[#000000] hover:bg-[#004182] text-white hover:cursor-pointer"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-400">
              © 2025 TEDx TIET. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
