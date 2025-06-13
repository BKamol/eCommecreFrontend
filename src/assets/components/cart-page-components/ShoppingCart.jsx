import { useEffect, useState } from 'react';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';
import { useCart } from './CartContext';
import { toast } from 'react-hot-toast';

// {
//   id: 3,
//   title: "T-shirt",
//   image: "src/assets/images/T-shirt.svg",
//   size: "10",
//   color: "Black",
//   price: 80,
//   discount: 0,
//   amount: 1
// }

const ShoppingCart = () => {
  // Sample cart items data
  const {cart, addToCart, removeFromCart, updateQuantity} = useCart();

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  //console.log(cart);

  // Calculate subtotal
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Calculate total
  const total = subtotal - discount + 15;

  // Handle amount changes
  const handleIncrease = (id, color, size) => {
    const oldAmount = cart.filter(item => item.id === id && item.colors[0] === color && item.sizes === size)[0].quantity;
    updateQuantity(id, oldAmount + 1, color, size);
  };

  const handleDecrease = (id, color, size) => {
    const oldAmount = cart.filter(item => item.id === id && item.colors[0] === color && item.sizes === size)[0].quantity;
    updateQuantity(id, oldAmount - 1, color, size);
  };

  const handleRemove = (id, color, size) => {
    removeFromCart(id, color, size);
  };

  // Handle promo code application
  const applyPromoCode = () => {
    if (promoCode === "DISCOUNT10") {
      setDiscount(subtotal * 0.1); // 10% discount
      toast.success("Promocode applied!");
    } else {
      toast.error("Invalid promocode!");
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-15 px-10 lg:px-16">
        <div className="border-1 flex-1 border-[#f0f0f0] rounded-3xl p-4">
            {/* Cart Items List */}
            <div className="space-y-2">
            {cart.map((item, index) => (
                <div key={`${item.id}-${item.colors[0]}-${item.sizes}`}>
                <CartItem 
                    item={item} 
                    onIncrease={handleIncrease} 
                    onDecrease={handleDecrease}
                    onRemove={handleRemove}
                />
                
                {/* Horizontal line separator (except after last item) */}
                {index < cart.length - 1 && (
                    <hr className="border-t border-[#f0f0f0] mt-2" />
                )}
                </div>
            ))}
            </div>
        </div>

        <div className='border-1 border-[#f0f0f0] rounded-3xl p-4'>
        {/* Order Summary */}
        <OrderSummary 
            subtotal={subtotal}
            discount={discount}
            total={total}
            promoCode={promoCode}
            setPromoCode={setPromoCode}
            applyPromoCode={applyPromoCode}
        />
        </div>
    </div>
  );
};

export default ShoppingCart;