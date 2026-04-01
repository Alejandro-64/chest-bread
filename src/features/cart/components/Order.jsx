import { formatterPrice } from "../../../helpers/formatter";

import { selectSubTotal, useCartStore } from "../../../store/cart.store";
import { useWhatsApp } from "../../../hooks/useWhatsApp.jsx";
import { usePaymentStore } from "../../../store/payment.store";

import { BsCash, BsCreditCard, BsPhone } from "react-icons/bs";

const PAYMENT_OPTIONS = [
  { value: "card", label: "Card", icon: BsCreditCard },
  { value: "cash", label: "Cash", icon: BsCash },
  { value: "yape", label: "Yape", icon: BsPhone },
];

const Order = () => {
  const cart = useCartStore((state) => state.cart);
  const subTotal = useCartStore(selectSubTotal);
  const { errors, setErrors, sendOrder } = useWhatsApp();
  const {
    name,
    address,
    paymentMethod,
    setName,
    setAddress,
    setPaymentMethod,
  } = usePaymentStore();

  const DELIVERY = 2;

  const total = subTotal + DELIVERY;

  return (
    <article className="h-max p-4 rounded-sm bg-bg-3 leading-none">
      <h2 className="py-4 text-2xl font-black leading-none text-text-3">
        Order summary
      </h2>

      <div className="py-4 flex flex-col gap-4 border-t border-border-2">
        {cart.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between gap-4"
          >
            <p className="text-sm text-text-4">
              {product.name} x {product.quantity}
            </p>
            <p className="text-base font-bold text-text-3">
              {formatterPrice(product.price * product.quantity)}
            </p>
          </div>
        ))}
      </div>

      <div className="py-4 flex flex-col gap-4 border-y border-border-2">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-text-4">Subtotal</p>
          <p className="text-base font-bold text-text-3">
            {formatterPrice(subTotal)}
          </p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-text-4">Delivery</p>
          <p className="text-base font-bold text-text-3">
            {formatterPrice(DELIVERY)}
          </p>
        </div>
      </div>

      <div className="py-4 flex flex-col gap-2 border-b border-border-2">
        <p className="text-sm text-text-4 uppercase">Total</p>
        <p className="text-4xl font-black text-text-3">
          {formatterPrice(total)}
        </p>
      </div>

      <div className="py-4 flex flex-col gap-2">
        <p className="text-sm text-text-4 uppercase">Delivery info</p>

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="sr-only">
            Your name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrors((p) => ({ ...p, name: "" }));
            }}
            className="w-full h-10 px-2 rounded-sm bg-bg text-text"
          />
          {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}

          <label htmlFor="address" className="sr-only">
            Your delivery address
          </label>
          <input
            id="address"
            type="text"
            placeholder="Delivery address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              setErrors((p) => ({ ...p, address: "" }));
            }}
            className="w-full h-10 px-2 rounded-sm bg-bg text-text"
          />
          {errors.address && (
            <p className="text-xs text-red-500">{errors.address}</p>
          )}
        </div>
      </div>

      <div className="py-4 flex flex-col gap-2">
        <p className="text-sm text-text-4 uppercase">Payment method</p>

        <div className="grid grid-cols-3 gap-4">
          {PAYMENT_OPTIONS.map(({ value, label, icon: Icon }) => (
            <label
              key={value}
              className={`p-4 rounded-sm flex flex-col items-center gap-4 border cursor-pointer transition-colors duration-300 ease-in-out ${paymentMethod === value ? "border-border bg-bg-2/10 text-text-3" : "border-border-2 text-text-3 hover:bg-bg-2/10 hover:border-border"}`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value={value}
                checked={paymentMethod === value}
                onChange={() => {
                  setPaymentMethod(value);
                  setErrors((p) => ({ ...p, paymentMethod: "" }));
                }}
                className="sr-only"
              />

              <Icon size={32} />
              <span>{label}</span>
            </label>
          ))}

          {errors.paymentMethod && (
            <p className="col-span-full text-xs text-red-500">
              {errors.paymentMethod}
            </p>
          )}
        </div>

        <button
          className="w-full h-10 mt-4 grid place-items-center rounded-sm text-lg uppercase border border-border text-text-2 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-bg-2 hover:text-text-3"
          onClick={sendOrder}
        >
          Send Via WhatsApp
        </button>
      </div>

      <p className="mt-4 text-xs text-text-4 leading-none text-center">
        We'll confirm your order via WhatsApp shortly after receiving it.
      </p>
    </article>
  );
};

export default Order;
