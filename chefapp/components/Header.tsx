import Image from 'next/image';
import chefLogo from '../assets/cool-chef-icon.png';

const Header = () => {
  return (
    <header className="flex justify-center items-center gap-[11px] h-20 bg-white shadow-md p-4">
      <Image src={chefLogo} alt="Chef Logo" width={50} height={50} />
      <h1 className="font-bold text-2xl">Chef App</h1>
    </header>
  );
};

export default Header;