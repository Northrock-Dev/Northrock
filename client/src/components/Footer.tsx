import { FaDiscord, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-neutral-800 dark:bg-neutral-950 text-neutral-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {new Date().getFullYear()} Northrock Roleplay. All rights reserved.</p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">Created for GTA5 RP community</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-neutral-300 hover:text-white transition-colors">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-neutral-300 hover:text-white transition-colors">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-neutral-300 hover:text-white transition-colors">
              <FaDiscord className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
