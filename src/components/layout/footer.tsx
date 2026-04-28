import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold font-heading text-brand-600 dark:text-brand-400">
              Accredian<span className="text-slate-900 dark:text-white text-lg">Enterprise</span>
            </span>
          </Link>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Empowering organizations with cutting-edge learning solutions. Up-skill your workforce for the digital future.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-slate-900 dark:text-white">Product</h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li><Link href="#" className="hover:text-brand-600">Features</Link></li>
            <li><Link href="#" className="hover:text-brand-600">How it works</Link></li>
            <li><Link href="#" className="hover:text-brand-600">Case Studies</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-slate-900 dark:text-white">Company</h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li><Link href="#" className="hover:text-brand-600">About Us</Link></li>
            <li><Link href="#" className="hover:text-brand-600">Careers</Link></li>
            <li><Link href="#" className="hover:text-brand-600">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-slate-900 dark:text-white">Legal</h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li><Link href="#" className="hover:text-brand-600">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-brand-600">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-900 text-center text-sm text-slate-500 dark:text-slate-500">
        © {new Date().getFullYear()} Accredian Enterprise. All rights reserved.
      </div>
    </footer>
  );
}
