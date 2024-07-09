import ProductDetail from "./productDetail";

interface props {
  items: any;
}

export default function ShowProducts({ items }: props) {
  return (
    <section className="py-2">
      {items?.map((item: any) => (
        <div key={item.id}>
          <ProductDetail product={item} />
        </div>
      ))}
    </section>
  );
}
