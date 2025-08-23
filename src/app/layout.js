import "./globals.css";
import { Inter } from "next/font/google";
import StackedCircularFooter from "@/components/ui/stacked-circular-footer";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var inter = Inter({
  subsets: ["latin"]
});
export var metadata = {
  title: "Stacked Circular Footer Demo",
  description: "21st.dev footer demo"
};
export default function RootLayout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_jsx("html", {
    lang: "en",
    children: /*#__PURE__*/_jsxs("body", {
      className: inter.className,
      children: [/*#__PURE__*/_jsx(StackedCircularFooter, {}), " "]
    })
  });
}