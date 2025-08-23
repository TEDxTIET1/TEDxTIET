"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function StackedCircularFooter() {
  return /*#__PURE__*/_jsx("footer", {
    className: "bg-black text-white py-12",
    children: /*#__PURE__*/_jsx("div", {
      className: "container mx-auto px-4 md:px-6",
      children: /*#__PURE__*/_jsxs("div", {
        className: "flex flex-col items-center",
        children: [/*#__PURE__*/_jsx("div", {
          className: "mb-8",
          children: /*#__PURE__*/_jsx(Image, {
            src: "/tedx-tiet.png" // <-- place logo inside /public
            ,
            alt: "TEDx TIET Logo",
            width: 350,
            height: 200,
            className: "object-contain",
            priority: true
          })
        }), /*#__PURE__*/_jsxs("nav", {
          className: "mb-8 flex items-center gap-3",
          children: [/*#__PURE__*/_jsx("span", {
            className: "text-2xl font-bold",
            children: "Contact Us :"
          }), /*#__PURE__*/_jsx("a", {
            href: "https://www.tedxtiet.in/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-xl font-semibold text-red-500 hover:underline cursor-pointer",
            children: "tedx@thapar.edu"
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "mb-8 flex space-x-4",
          children: [/*#__PURE__*/_jsx("a", {
            href: "https://www.facebook.com/tedxtiet/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/_jsxs(Button, {
              size: "icon",
              className: "rounded-full bg-[#000000] hover:bg-[#0d65d9] text-white hover:cursor-pointer",
              children: [/*#__PURE__*/_jsx(Facebook, {
                className: "h-4 w-4"
              }), /*#__PURE__*/_jsx("span", {
                className: "sr-only",
                children: "Facebook"
              })]
            })
          }), /*#__PURE__*/_jsx("a", {
            href: "https://www.youtube.com/playlist?list=PLwvmGZzdo6jA8Fk6aVwQ5zAksnJfCf1o4",
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/_jsxs(Button, {
              size: "icon",
              className: "rounded-full bg-[#000000] hover:bg-[#FF0000] text-white hover:cursor-pointer",
              children: [/*#__PURE__*/_jsx(Youtube, {
                className: "h-4 w-4"
              }), /*#__PURE__*/_jsx("span", {
                className: "sr-only",
                children: "YouTube"
              })]
            })
          }), /*#__PURE__*/_jsx("a", {
            href: "https://www.instagram.com/tedxtiet",
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/_jsxs(Button, {
              size: "icon",
              className: "rounded-full bg-[#000000] hover:bg-[#d12f4d] text-white hover:cursor-pointer",
              children: [/*#__PURE__*/_jsx(Instagram, {
                className: "h-4 w-4"
              }), /*#__PURE__*/_jsx("span", {
                className: "sr-only",
                children: "Instagram"
              })]
            })
          }), /*#__PURE__*/_jsx("a", {
            href: "https://www.linkedin.com/company/tedxtiet/posts/?feedView=all",
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/_jsxs(Button, {
              size: "icon",
              className: "rounded-full bg-[#000000] hover:bg-[#004182] text-white hover:cursor-pointer",
              children: [/*#__PURE__*/_jsx(Linkedin, {
                className: "h-4 w-4"
              }), /*#__PURE__*/_jsx("span", {
                className: "sr-only",
                children: "LinkedIn"
              })]
            })
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "text-center",
          children: /*#__PURE__*/_jsx("p", {
            className: "text-sm text-gray-400",
            children: "\xA9 2025 TEDx TIET. All rights reserved."
          })
        })]
      })
    })
  });
}