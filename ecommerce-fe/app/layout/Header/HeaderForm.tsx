import { IoSearchOutline } from 'react-icons/io5'

const HeaderForm = () => (
  <form className='flex uppercase w-80 sm:w-96 border border-gray-400 hover:border-white p-1'>
    <button
      className="uppercase text-base text-white px-1"
      type="submit"
    >
      <IoSearchOutline />
    </button>
    <input
      type="text"
      name="seachProduct"
      placeholder='Busca tus productos'
      className="border-none text-xs w-full p-1 text-gray-300 outline-0"
    />
  </form>
);

export default HeaderForm;