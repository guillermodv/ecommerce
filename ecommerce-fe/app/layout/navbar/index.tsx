import Link from "next/link";

function index() {
  return (
    //TODO: modify gap on mobile
    <div className="flex justify-center gap-4 border-b-2 border-black py-3">
      <div>
        <Link href="/">Hombre</Link>
      </div>
      <div>
        <Link href="/">Mujer</Link>
      </div>
      <div>
        <Link href="/">Zapatillas</Link>
      </div>
      <div>
        <Link href="/">Marcas</Link>
      </div>
    </div>
  );
}

export default index;
