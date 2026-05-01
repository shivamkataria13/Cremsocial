import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="p-8 rounded-3xl glass-card-matte">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link to="/" className="inline-block mb-4">
                <Logo />
              </Link>
              <p 
                className="text-gray-700 text-sm"
              >
                Marketing that actually works. No unicorn promises.
              </p>
            </div>
            
            <div>
              <h5 
                className="text-gray-900 mb-4 tracking-tight"
                style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}
              >
                COMPANY
              </h5>
              <ul className="space-y-2">
                {[
                  { name: 'About', path: '/about' },
                  { name: 'Services', path: '/services' },
                  { name: 'Shadow Ops', path: '/shadow-operating' },
                  { name: 'Blog', path: '/blog' },
                  { name: 'Contact', path: '/contact' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.path}
                      className="text-gray-700 hover:text-indigo-600 transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5
                className="text-gray-900 mb-4 tracking-tight"
                style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}
              >
                RESOURCES
              </h5>
              <ul className="space-y-2">
                {[
                  { name: 'SEO', path: '/seo' },
                  { name: 'Ads', path: '/ads' },
                  { name: 'Social Media', path: '/social-media' },
                  { name: 'Google Business Profile', path: '/google-business' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-700 hover:text-indigo-600 transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5
                className="text-gray-900 mb-4 tracking-tight"
                style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}
              >
                SOCIAL
              </h5>
              <div className="flex items-center gap-3">
                {[
                  { name: 'Instagram', icon: Instagram },
                  { name: 'LinkedIn', icon: Linkedin },
                  { name: 'Facebook', icon: Facebook }
                ].map((social) => (
                  <span
                    key={social.name}
                    className="w-10 h-10 rounded-full border border-gray-200 bg-white/70 flex items-center justify-center text-gray-700"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 text-center">
            <p 
              className="text-gray-600 text-sm"
            >
              © 2026 Cremsocial. Brampton, ON. Built for SMBs and creators.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
