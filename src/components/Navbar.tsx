import { Cart } from "./Cart";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useScrollToSection } from "@/hooks/useScrollToSection";

export function Navbar() {
  const scrollToSection = useScrollToSection();
  
  const menuItems = [
    { href: "features", label: "功能特色" },
    { href: "testimonials", label: "使用評價" },
    { href: "pricing", label: "方案價格" },
    { href: "contact", label: "聯絡我們" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/icon.svg" alt="Logo" className="w-8 h-8" />
            <span className="font-bold text-xl hidden sm:inline">SmartWatch</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Cart />
            
            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="md:hidden"
                  aria-label="選單"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] sm:w-[350px] p-0">
                <div className="flex flex-col h-full">
                  <div className="border-b p-6">
                    <Link to="/" className="flex items-center gap-2">
                      <img src="/icon.svg" alt="Logo" className="w-8 h-8" />
                      <span className="font-bold text-xl">SmartWatch</span>
                    </Link>
                  </div>
                  <div className="flex-1 overflow-auto">
                    <div className="flex flex-col gap-1 p-6">
                      {menuItems.map((item) => (
                        <a
                          key={item.href}
                          href={`#${item.href}`}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className="flex items-center h-10 px-4 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="border-t p-6">
                    <p className="text-sm text-muted-foreground text-center">
                      &copy; 2024 SmartWatch. All rights reserved.
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
