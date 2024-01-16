"use client";
import useCartService from "@/lib/hooks/useCardStore";
import { OrderItem } from "@/lib/models/OrderModel";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const AddToCart = ({ item }: { item: OrderItem }) => {
  const router = useRouter();
  const { items, increase, decrease } = useCartService();
  const [existItem, setExistItem] = useState<OrderItem | undefined>();

  useEffect(() => {
    setExistItem(items.find((x) => x.slug === item.slug));
  }, [item, items]);

  const addToCartHandler = () => {
    increase(item);
  };

  return existItem ? (
    <div>
      <button type="button" className="btn" onClick={() => decrease(existItem)}>
        -{" "}
      </button>
      <span className="px-2">{existItem.qty}</span>
      <button
        type="button"
        className="btn"
        onClick={() => increase(existItem)}
      >
        +
      </button>
    </div>
  ) : (
    <button
      type="button"
      className="btn btn-primary w-full"
      onClick={addToCartHandler}
    >
      Add to cart
    </button>
  );
};

export default AddToCart;
