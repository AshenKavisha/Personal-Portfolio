import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// "/#id" links work from any page: React Router navigates to "/" first,
// then ScrollManager (in App.jsx) scrolls to the section.
const navLinks = [
  { to: "/#about", label: "About" },
  { to: "/all-projects", label: "Projects" },
  { to: "/#experience", label: "Experience" },
  { to: "/#contact", label: "Contact Me" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (to) =>
    to === pathname ? "text-primary" : "text-muted-foreground hover:text-foreground";

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      } z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          <span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                to={link.to}
                key={link.label}
                className={`px-4 py-2 text-sm rounded-full hover:bg-surface ${linkClass(link.to)}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/#contact">
            <Button size="sm">Contact Me</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                to={link.to}
                key={link.label}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg py-2 ${linkClass(link.to)}`}
              >
                {link.label}
              </Link>
            ))}

            <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full">Contact Me</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};