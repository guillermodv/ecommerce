import Link from "next/link";

function currencyFormatter({
  currency,
  value,
}: {
  currency: string;
  value: number;
}) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    minimumFractionDigits: 2,
    currency,
  });
  return formatter.format(value);
}

/* eslint-disable @next/next/no-img-element */
export default function ProductDetail({ product }: { product: any }) {
  return (
    <article className="flex flex-row py-2">
      <div className="rounded-sm">
        <img
          src={product.thumbnail}
          width={120}
          height={120}
          alt={product.title}
        />
      </div>
      <div className="flex flex-col justify-around px-2">
        <div className="font-bold font-sans">{product.title}</div>
        <div>
          {currencyFormatter({ currency: "USD", value: product.price })}
        </div>
        <Link
          className="font-sans font-extrabold text-cyan-500"
          href={product.permalink}
        >
          Comprar en MercaLibre
        </Link>
      </div>
    </article>
  );
}
