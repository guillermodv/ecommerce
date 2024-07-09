import Link from 'next/link';
import { ImPriceTag } from 'react-icons/im'

const links = [
  {title: 'mis compras', href: '/'},
  {title: 'favoritos', href: '/'},
]
const HeaderMiniNavBar = () => {
return (
  <div className='hidden flex-col md:flex-row sm:inline-flex justify-start items-start gap-2 md:gap-5 text-xs text-gray-300 font-normal tracking-wider leading-3 capitalize md:pt-2 pl-5 min-w-max'>
    {links.map((item, index) => (
      <span key={index} className='hover:text-white'>
        <Link href={item.href}>{item.title}</Link>
      </span>
    ))}
    <div className='flex gap-2 items-center md:pl-5'>
      <span className='text-red-600 text-lg'><ImPriceTag /></span>
      <Link className='p-0 hover:text-white text-sm' href='/'>Ofertas!</Link>
    </div>
  </div>
  )
}

export default HeaderMiniNavBar