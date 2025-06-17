import HorizontalLine from "../HorizontalLine";
import { ArrowRight, Tag } from "lucide-react";
import { toast } from 'react-hot-toast';

const OrderSummary = ({ 
    subtotal, 
    discount, 
    total, 
    promoCode, 
    setPromoCode, 
    applyPromoCode 
  }) => {

    function goToCheckout() {
      toast.success("You can pay now!");
    }

    return (
      <div className="flex flex-col gap-4 py-2">
        <p className="text-xl font-bold">Order Summary</p>
        
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="opacity-60">Subtotal</span>
            <span className="font-bold">${subtotal.toFixed(0)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="opacity-60">Discount</span>
            <span className="text-red-600 font-bold">-${discount.toFixed(0)}</span>
          </div>

          <div className="flex justify-between">
            <span className="opacity-60">Delivery Fee</span>
            <span className="font-bold">$15</span>
          </div>

          <HorizontalLine  applyPadding={false}/>
          
          <div className="flex justify-between font-medium text-lg mt-4 pt-2">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        
        {/* Promo Code */}
        <div className="flex flex-row gap-4">
          <div className="flex flex-row gap-2 items-center py-3 px-4 bg-[#f0f0f0] rounded-[25px] w-full">
            <Tag size={20} className="opacity-60" />
            <input
              type="text"
              id="promo-code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className=" focus:outline-none"
              placeholder="Add promo code"
            />
          </div>
          <button
              onClick={applyPromoCode}
              className="px-4 py-2 min-w-[120px] bg-black text-white rounded-[25px] focus:outline-none cursor-pointer"
            >
              Apply
            </button>
        </div>
        
        {/* Checkout Button */}
        <button onClick={goToCheckout}
         className="flex flex-row items-center justify-center gap-3 py-3 w-full bg-black text-white rounded-[25px] focus:outline-none cursor-pointer mt-2">
          Go to Checkout <span><ArrowRight /></span>
        </button>
      </div>
    );
  };
  
  export default OrderSummary;