import Link from "next/link";
import { Mail, Phone, MapPin, Rocket } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Section */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6 group">
            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
              <Rocket size={20} />
            </div>
            <span className="text-xl font-bold font-heading tracking-tight text-slate-900 dark:text-white">
              Accredian<span className="text-brand-600">Enterprise</span>
            </span>
          </Link>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            Empowering organizations with cutting-edge AI and Data learning solutions. Transform your workforce for the digital future.
          </p>
          <div className="flex gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <Link 
              href="https://github.com/amankv1234" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-brand-600 transition-colors"
            >
              Github
            </Link>
            <Link 
              href="https://www.linkedin.com/in/aman-kumar-vishwakarma-08b223304/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-brand-600 transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-slate-900 dark:text-white">Get in Touch</h4>
          <ul className="space-y-4">
            <li>
              <a href="mailto:amankumarvishwakarma767@gmail.com" className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-brand-600 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  <Mail size={16} />
                </div>
                <span className="text-sm">amankumarvishwakarma767@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+919598490801" className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-brand-600 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  <Phone size={16} />
                </div>
                <span className="text-sm">+91 9598490801</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400 group">
              <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-600 mt-1">
                <MapPin size={16} />
              </div>
              <span className="text-sm leading-relaxed">
                Varanasi 221105,<br />
                Uttar Pradesh, India
              </span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-slate-900 dark:text-white">Resources</h4>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <li><Link href="#courses" className="hover:text-brand-600 transition-colors">All Programs</Link></li>
            <li><Link href="#features" className="hover:text-brand-600 transition-colors">Why Accredian</Link></li>
            <li><Link href="#faq" className="hover:text-brand-600 transition-colors">Support & FAQ</Link></li>
            <li><Link href="#cta" className="hover:text-brand-600 transition-colors">Book a Demo</Link></li>
          </ul>
        </div>

        {/* Newsletter / CTA */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-slate-900 dark:text-white">Newsletter</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            Subscribe to get latest updates on enterprise trends.
          </p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 text-sm outline-none focus:border-brand-600 transition-all w-full"
            />
            <button className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg hover:bg-brand-700 transition-all">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
        <p>© {new Date().getFullYear()} Accredian Enterprise. Built by Aman Kumar.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-slate-900 dark:hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-slate-900 dark:hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
