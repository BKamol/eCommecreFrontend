import React from 'react';
import { useState } from 'react';
import StarRating from '../StarRating';
import ColorSelector from '../category-page-components/ColorSelector';
import HorizontalLine from '../HorizontalLine';
import SizeSelector from '../category-page-components/SizeSelector';
import { Minus, Plus } from 'lucide-react'
import { useCart } from '../cart-page-components/CartContext'
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const ProductDetails = ({title, rating, price, discount, description, colors, sizes, image}) => {
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { cart, addToCart, removeFromCart, updateQuantity } = useCart();
    
    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    const {productId} = useParams();

    function handleQuantitySelect(_quantity) {
        setQuantity(_quantity);
    }

    function addToCartUtil() {
        const item = {
            id: productId,
            title: title,
            rating: rating,
            price: price,
            discount: discount,
            description: description,
            colors: selectedColors,
            sizes: selectedSize,
            image: image,
            quantity: quantity
        };
        addToCart(item, quantity);
        toast.success(`${title} is added to cart!`);
        return item;
    }
    
    return (
      <div className="w-full md:w-1/2 flex flex-col gap-2">
        <p className="header-text text-3xl mb-2">{ title }</p>
        
        <div className='flex flex-row gap-2 items-center'>
            <StarRating rating={ rating } textSize='2xl' />
            <p className='opacity-60 text-sm mt-1'>{ rating }/5</p>
        </div>
        
        <div className='flex flex-row gap-3 items-center'>
            <p className='font-bold text-2xl'>${ price }</p>
            {discount && <p className='font-bold text-2xl opacity-40 line-through'>${ price + discount / 100 * price }</p>}
            {discount && <div className='w-[44px] h-[20px] bg-red-200 text-red-500 text-center rounded-[25px] text-[12px]'>-{ discount }%</div>}
        </div>
        
        <div className="my-4">
          <p className="text-black opacity-60 mb-4">{ description }</p>
        </div>
        
        <HorizontalLine applyPadding={false} mb={4} />
        <div className="flex flex-col gap-2">
            <p className='opacity-60'>Select Colors</p>
            <ColorSelector 
                showTitle={false} 
                selectedColors={selectedColors} 
                onColorSelect={setSelectedColors}
                available={colors.map(color => color.name)} 
                onlyOne={true} />
        </div>
        
        <div className="flex flex-col gap-2">
            <p className='opacity-60'>Choose Size</p>
            <SizeSelector 
                showTitle={false} 
                selectedSize={selectedSize}
                onSizeSelect={setSelectedSize}
                available={sizes.map(size => size.name)} />
        </div>
        
        <div className="flex flex-row justify-between gap-4">
            <div className="flex flex-row justify-between items-center min-w-[120px] max-w-[150px] gap-4 bg-[#f0f0f0] rounded-[25px] px-4 py-1">
                <button 
                    onClick={decreaseQuantity}
                    className="font-bold text-lg cursor-pointer"
                >
                    <Minus size={16} />
                </button>
                <p className="">{quantity}</p>
                <button 
                    onClick={increaseQuantity}
                    className="font-bold text-lg cursor-pointer"
                >
                    <Plus size={16} />
                </button>
            </div>
            <button onClick={addToCartUtil} className="w-full bg-black text-white py-3 rounded-[25px] transition-colors cursor-pointer">
                Add to Cart
            </button>
        </div>
      </div>
    );
};

export default ProductDetails;