import { Plus, Minus, Trash2 } from "lucide-react";


const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
    return (
      <div>
        <div className="flex flex-row gap-4 items-center justify-between">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-30 h-30 object-cover rounded-2xl"
            />
          </div>
          
          {/* Product Info */}
          <div className="flex flex-col gap-1 flex-grow">
            <div className="flex flex-row items-center justify-between">
                <p className="text-lg font-bold">{item.title}</p>
                <button 
                    onClick={() => onRemove(item.id)}
                    className="cursor-pointer"
                >
                    <Trash2 color="#ff0000" />
                </button>
            </div>
            <p className="text-sm">Size: {item.sizes}</p>
            <p className="text-sm">Color: {item.colors}</p>
            <div className="flex flex-row items-center justify-between">
              <p className="header-text text-xl">${(item.price * item.quantity).toFixed(0)}</p>
              <div className="flex flex-row justify-between items-center min-w-[110px] max-w-[150px] gap-4 bg-[#f0f0f0] rounded-[25px] px-4 py-1">
                <button 
                    onClick={() => onDecrease(item.id)}
                    className="font-bold text-lg cursor-pointer"
                >
                    <Minus size={16} />
                </button>
                <p className="">{item.quantity}</p>
                <button 
                    onClick={() => onIncrease(item.id)}
                    className="font-bold text-lg cursor-pointer"
                >
                    <Plus size={16} />
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CartItem;