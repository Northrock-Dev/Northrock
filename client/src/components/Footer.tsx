import { FaDiscord } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {new Date().getFullYear()} Northrock Roleplay. All rights reserved.</p>
            <p className="text-xs text-white/80 mt-1">Created for GTA5 RP community</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-white text-sm mr-2">Join our community:</span>
            <a href="https://discord.gg/SBE8dJWe" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors flex items-center gap-2 bg-[#5865F2]/80 hover:bg-[#5865F2] px-3 py-2 rounded-md">
              <FaDiscord className="h-5 w-5" />
              <span>Discord</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
