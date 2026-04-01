import toast from "react-hot-toast";

import { useCartStore } from "../../../store/cart.store";

import { BsTrash } from "react-icons/bs";

import { Container } from "../../../components/ui";
import { Card, Order } from "../components";

const toastStyle = (color) => ({
  style: {
    borderRadius: "4px",
    background: "#fdfbee",
    color,
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
  },
});

const SectionList = () => {
  const cart = useCartStore((state) => state.cart);
  const decreaseProduct = useCartStore((state) => state.updateQuantity);
  const increaseProduct = useCartStore((state) => state.updateQuantity);
  const deleteProduct = useCartStore((state) => state.removeProduct);

  const handleDeleteProduct = (product) => {
    deleteProduct(product);
    toast.success(`${product.name} deleted`, {
      icon: <BsTrash size={16} />,
      ...toastStyle("#c51918"),
    });
  };

  return (
    <Container>
      {cart.length === 0 ? (
        <p className="text-4xl text-text-4 text-center md:text-start">
          Add to Cart
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_400px] lg:grid-cols-[1fr_500px] ">
          <ul className="flex flex-col gap-4">
            {cart.map((product) => (
              <li key={product.id}>
                <Card
                  {...product}
                  decreaseProduct={() =>
                    decreaseProduct(product, product.quantity - 1)
                  }
                  increaseProduct={() =>
                    increaseProduct(product, product.quantity + 1)
                  }
                  deleteProduct={() => handleDeleteProduct(product)}
                />
              </li>
            ))}
          </ul>

          <Order />
        </div>
      )}
    </Container>
  );
};

export default SectionList;
