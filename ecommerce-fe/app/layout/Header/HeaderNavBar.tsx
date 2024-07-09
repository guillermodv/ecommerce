import Link from "next/link";

const HeaderNavBar = () => {
  const linksNavBar = [
    {title: 'categorias', href: '/'},
    {title: 'historial', href: '/'},
    // {title: 'supermercado', href: '/'},
    // {title: 'moda', href: '/'},
    // {title: 'vender', href: '/'},
    {title: 'ayuda', href: '/'},
  ]

  return (
    <nav className="flex justify-start gap-3 sm:gap-4 text-xs text-gray-300 font-normal tracking-wider capitalize py-3">
      {linksNavBar.map((item, index) => (
        <span key={index} className='hover:text-white'>
          <Link href={item.href}>{item.title}</Link>
        </span>
      ))}
    </nav>
  );
}

export default HeaderNavBar