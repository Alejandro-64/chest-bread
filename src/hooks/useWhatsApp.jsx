import { useState } from "react";
import { selectSubTotal, useCartStore } from "../store/cart.store";
import { usePaymentStore } from "../store/payment.store";
import toast from "react-hot-toast";
import { BsCheck, BsXLg } from "react-icons/bs";

const PHONE = "51999999999";
const DELIVERY = 2.0;
const PAY_LABELS = { card: "Card", cash: "Cash", yape: "Yape" };

const toastStyle = (color) => ({
  style: {
    borderRadius: "4px",
    background: "#fdfbee",
    color,
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
  },
})

export const useWhatsApp = () => {
  const [errors, setErrors] = useState({});

  const { cart, cleanCart } = useCartStore();
  const subtotal = useCartStore(selectSubTotal);
  const { name, address, paymentMethod, reset } = usePaymentStore();

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Please enter your name";
    if (!address.trim())
      newErrors.address = "Please enter your delivery address";
    if (!paymentMethod.trim())
      newErrors.paymentMethod = "Please enter your payment method";
    return newErrors;
  };

  const sendOrder = () => {
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill in all fields", {
        icon: <BsXLg size={16} />,
        ...toastStyle("#c51918"),
      })
      return;
    }

    const total = subtotal + DELIVERY;

    const itemsList = cart
      .map(
        (item) =>
          `• ${item.name} x${item.quantity} — $${(item.price * item.quantity).toFixed(2)}`,
      )
      .join("\n");

    const message =
      `*NEW ORDER — Chest-Bread*\n\n` +
      `*Items:*\n${itemsList}\n\n` +
      `*Subtotal:* $${subtotal.toFixed(2)}\n` +
      `*Delivery fee:* $${DELIVERY.toFixed(2)}\n` +
      `*TOTAL: $${total.toFixed(2)}*\n\n` +
      `*Delivery address:*\n${address}\n\n` +
      `*Name:* ${name}\n` +
      `*Payment method:* ${PAY_LABELS[paymentMethod]}`;

    window.open(
      `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`,
      "_blank",
    );

    toast.success("Order sent via WhatsApp!", {
      icon: <BsCheck size={16} />,
      ...toastStyle("#081a41"),
    })

    cleanCart();
    reset();
    setErrors({});
  };

  return { errors, setErrors, sendOrder };
};
