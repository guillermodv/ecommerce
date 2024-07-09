import React, { ReactNode } from 'react';

// TODO: Mover interface a donde corresponda, crear directorio de interfaces
interface FooterNavBarIconProps {
  title: string;
  icon: ReactNode;
}

const FooterNavBarIcon: React.FC<FooterNavBarIconProps> = ({ title, icon }) => {
  return (
    <div className='flex flex-col gap-1 items-center text-gray-200 text-2xl p-0 font-thin tracking-wide leading-3 animate__animated animate__fadeInUp'>
      {icon}
      <p className='capitalize p-0 text-xs' style={{fontSize: '0.65rem'}}>{title}</p>
    </div>
  );
};

export default FooterNavBarIcon;

