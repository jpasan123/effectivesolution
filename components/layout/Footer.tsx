import { SiFacebook, SiGitter, SiLinkedin, SiInstagram } from 'react-icons/si';
import Link from 'next/link';
import Image from 'next/image';

const socialLinks = {
  facebookUrl: "https://web.facebook.com/ESPvtLtd/?_rdc=1&_rdr#",
  twitterUrl: "https://twitter.com/effectivesolutions",
  linkedinUrl: "https://www.linkedin.com/company/effective-solutions-pvt-ltd/?originalSubdomain=lk",
  instagramUrl: "https://www.instagram.com/effectivesolutions"
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative h-12 w-12">
                <Image
                  src="https://i.ibb.co/Z6cbq3X4/10.jpg"
                  alt="Effective Solutions"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Effective
                  <span className="text-primary-foreground"> Solutions</span>
                </h3>
              </div>
            </div>
            <p className="text-gray-400">
              Delivering innovative software solutions for businesses worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Bay X, Trace Expert City</li>
              <li>Maradana Road</li>
              <li>Colombo 10, Sri Lanka</li>
              <li>Phone: (+94) 11 123 4567</li>
              <li>Email: info@effectivesolutions.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              <a 
                href={socialLinks.facebookUrl} 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiFacebook className="h-6 w-6" />
              </a>
              <a 
                href={socialLinks.twitterUrl} 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGitter className="h-6 w-6" />
              </a>
              <a 
                href={socialLinks.linkedinUrl} 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLinkedin className="h-6 w-6" />
              </a>
              <a 
                href={socialLinks.instagramUrl} 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiInstagram className="h-6 w-6" />
              </a>
            </div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EffectiveSolutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}