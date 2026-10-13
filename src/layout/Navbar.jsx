import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isAllProjectsPage = location.pathname === "/all-projects";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }  z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          <span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {[
              { href: isAllProjectsPage ? "/" : "#about", label: "About" },
              { href: isAllProjectsPage ? "/" : "/all-projects", label: "Projects", current: isAllProjectsPage },
              { href: isAllProjectsPage ? "/" : "#experience", label: "Experience" },
              { href: isAllProjectsPage ? "/" : "#testimonials", label: "Testimonials" },
              { href: isAllProjectsPage ? "/" : "#contact", label: "Contact Me" },
            ].map((link, index) => (
              <a
                href={link.href}
                key={index}
                className={`px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface ${link.current ? "text-primary" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href={isAllProjectsPage ? "/" : "#contact"}>
            <Button size="sm">Contact Me</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {[
              { href: isAllProjectsPage ? "/" : "#about", label: "About" },
              { href: isAllProjectsPage ? "/" : "/all-projects", label: "Projects", current: isAllProjectsPage },
              { href: isAllProjectsPage ? "/" : "#experience", label: "Experience" },
              { href: isAllProjectsPage ? "/" : "#testimonials", label: "Testimonials" },
              { href: isAllProjectsPage ? "/" : "#contact", label: "Contact Me" },
            ].map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg text-muted-foreground hover:text-foreground py-2 ${link.current ? "text-primary" : ""}`}
              >
                {link.label}
              </a>
            ))}

            <a href={isAllProjectsPage ? "/" : "#contact"} onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full">Contact Me</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};