import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialMediaLinks = () => {
  return (
    <div className="flex space-x-2 py-4">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 transition-colors w-[28px] h-[28px] flex items-center justify-center bg-white rounded-[50%] border-1 border-gray-300">
        <FaTwitter size={16} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-800 transition-colors w-[28px] h-[28px] flex items-center justify-center bg-white rounded-[50%]">
        <FaFacebook size={27} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-pink-800 transition-colors w-[28px] h-[28px] flex items-center justify-center bg-white rounded-[50%] border-1 border-gray-300">
        <FaInstagram size={16} />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-800 transition-colors w-[28px] h-[28px] flex items-center justify-center bg-white rounded-[50%] border-1 border-gray-300">
        <FaGithub size={16} />
      </a>
    </div>
  );
};

export default SocialMediaLinks;