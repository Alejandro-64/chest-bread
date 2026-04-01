import toast from "react-hot-toast";

import { useCartStore } from "../../../store/cart.store";
import { useProductsStore } from "../../../store/products.store";

import { BsCart } from "react-icons/bs";

import { Container } from "../../../components/ui";
import { Card, Filtered } from "../components";

const toastStyle = (color) => ({
  style: {
    borderRadius: "4px",
    background: "#fdfbee",
    color,
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
  },
});
const SectionList = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const {
    search,
    filter,
    sort,
    setSearch,
    setFilter,
    setSort,
    getFilteredProducts,
  } = useProductsStore();

  const productsToShow = getFilteredProducts();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart`, {
      icon: <BsCart size={16} />,
      ...toastStyle("#06402b"),
    });
  };

  return (
    <Container>
      <Filtered
        valueSearch={search}
        onChangeSearch={(e) => setSearch(e.target.value)}
        valueTab={filter}
        onChangeTab={setFilter}
        valueSort={sort}
        onChangeSort={(e) => setSort(e.target.value)}
      />

      <div>
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
          {productsToShow.map((product) => (
            <li key={product.id}>
              <Card {...product} onClick={() => handleAddToCart(product)} />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default SectionList;
