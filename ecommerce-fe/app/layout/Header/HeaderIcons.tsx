import { PiShoppingCartSimpleLight } from 'react-icons/pi'
import { HiOutlineBellAlert } from 'react-icons/hi2';

const HeaderIcons = () => (
    <div className='flex items-center gap-5 text-2xl text-gray-300 '>
      <span
        className='hidden sm:block hover:text-white cursor-pointer'
        title='Notificaciones'
        >
          <HiOutlineBellAlert />
      </span>
      <span
        className=' hover:text-white cursor-pointer'
        title='Carrito de compras'
        >
          <PiShoppingCartSimpleLight />
      </span>
    </div>
  )

export default HeaderIcons;