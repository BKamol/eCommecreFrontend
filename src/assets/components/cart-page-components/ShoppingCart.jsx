import { useState } from 'react';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';

const ShoppingCart = () => {
  // Sample cart items data
  const [cartItems, setCartItems] = useState([
    {
        id: 1,
        title: "Faded Jeans",
        image: "src/assets/images/FadedJeans.svg",
        size: "M",
        color: "White",
        price: 20,
        discount: 20,
        amount: 1
      },
      {
        id: 2,
        title: "Loose Shorts",
        image: "src/assets/images/LooseShorts.svg",
        size: "32",
        color: "Blue",
        price: 50,
        discount: 20,
        amount: 2
      },
      {
        id: 3,
        title: "T-shirt",
        image: "src/assets/images/T-shirt.svg",
        size: "10",
        color: "Black",
        price: 80,
        discount: 0,
        amount: 1
      }
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.amount), 0);

  // Calculate total
  const total = subtotal - discount;

  // Handle amount changes
  const handleIncrease = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, amount: item.amount + 1 } : item
    ));
  };

  const handleDecrease = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.amount > 1 ? { ...item, amount: item.amount - 1 } : item
    ));
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Handle promo code application
  const applyPromoCode = () => {
    if (promoCode === "DISCOUNT10") {
      setDiscount(subtotal * 0.1); // 10% discount
    } else {
      alert("Invalid promo code");
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-15 px-10 lg:px-16">
        <div className="border-1 flex-1 border-[#f0f0f0] rounded-3xl p-4">
            {/* Cart Items List */}
            <div className="space-y-2">
            {cartItems.map((item, index) => (
                <div key={item.id}>
                <CartItem 
                    item={item} 
                    onIncrease={handleIncrease} 
                    onDecrease={handleDecrease}
                    onRemove={handleRemove}
                />
                
                {/* Horizontal line separator (except after last item) */}
                {index < cartItems.length - 1 && (
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