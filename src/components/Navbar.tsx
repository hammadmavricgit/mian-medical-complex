import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Phone, 
  FlaskConical,
  Home,
  TestTube,
  Users,
  Mail,
  Calendar
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/services", label: "Tests & Packages", icon: TestTube },
    { path: "/book-test", label: "Book Test", icon: Calendar },
    { path: "/about", label: "About Us", icon: Users },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <FlaskConical className="h-8 w-8 text-primary" />
            <div>
              <span className="font-heading font-bold text-xl text-primary">MediLab</span>
              <span className="block text-xs text-muted-foreground">Diagnostics</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(item.path)
                    ? "bg-primary-light text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              +91 98765 43210
            </Button>
            <Button variant="hero" size="sm">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t animate-slide-up">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive(item.path)
                    ? "bg-primary-light text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
            <div className="mt-4 px-4 space-y-2">
              <Button variant="outline" className="w-full gap-2">
                <Phone className="h-4 w-4" />
                Call Us
              </Button>
              <Button variant="hero" className="w-full">
                Book Test Online
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;