import { Link } from "react-router-dom";
import {
  FlaskConical,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-muted to-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FlaskConical className="h-8 w-8 text-primary" />
              <div>
                <span className="font-heading font-bold text-xl text-primary">
                  MMC
                </span>
                <span className="block text-xs text-muted-foreground">
                  Mian Medical Complex
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              ISO Certified Medical Complex with Latest Technology. Providing
              accurate test results at affordable prices since 2010.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-lg bg-primary-light hover:bg-primary hover:text-white transition-all"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-primary-light hover:bg-primary hover:text-white transition-all"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-primary-light hover:bg-primary hover:text-white transition-all"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-primary-light hover:bg-primary hover:text-white transition-all"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  All Tests
                </Link>
              </li>
              <li>
                <Link
                  to="/services#packages"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Health Packages
                </Link>
              </li>
              <li>
                <Link
                  to="/book-test"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Book Test Online
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Tests */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Popular Tests
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Complete Blood Count (CBC)
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Lipid Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Thyroid Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Diabetes Panel
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Vitamin D & B12
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span className="text-sm text-muted-foreground">
                  Block 15, Farooq Shaheed Chock,
                  <br />
                  Chichawatni
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  03047922205
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  info@mianmedicalcomplex.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Mon-Sat: 7AM - 9PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mian Medical Complex. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Terms of Service
              </Link>
              <Link
                to="/disclaimer"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Medical Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
