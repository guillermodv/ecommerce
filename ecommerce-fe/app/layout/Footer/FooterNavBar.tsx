import { AiOutlineHeart } from 'react-icons/ai';
import { BsHandbag, BsThreeDots } from 'react-icons/bs';
import { HiOutlineBellAlert } from 'react-icons/hi2';
import { IoHomeOutline } from 'react-icons/io5'

import FooterNavBarIcon from './FooterNavBarIcon';

const iconsItems = [
  { title: 'inicio', icon: <IoHomeOutline /> },
  { title: 'mis compras', icon: <BsHandbag /> },
  { title: 'notificaciones', icon: <HiOutlineBellAlert /> },
  { title: 'favoritos', icon: <AiOutlineHeart /> },
  { title: 'más', icon: <BsThreeDots /> },
];

const filtered = (num: number) => {
  const icons = iconsItems.filter(
    (item, index) => index === num
  );
  return icons
}

const FooterNavBar = () => (
    <div>
      <section className='flex justify-center h-14 bg-black pt-1'>
        <div className='flex justify-around items-center w-screen max-w-md'>
          {filtered(0).map((item) => (
            <FooterNavBarIcon key={item.title} title={item.title} icon={item.icon} />
          ))}
          <div className='flex gap-6 justify-around items-center'>
            {iconsItems.slice(1, 4).map((item) => (
            <FooterNavBarIcon key={item.title} title={item.title} icon={item.icon} />
            ))}
          </div>
          {filtered(4).map((item) => (
            <FooterNavBarIcon key={item.title} title={item.title} icon={item.icon} />
          ))}
        </div>
      </section>
    </div>
  );

export default FooterNavBar;