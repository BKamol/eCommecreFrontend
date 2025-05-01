const PaymentMethodsList = () => {
return (
    <div className="flex flex-row gap-3 items-center justify-center">
        <div className="min-w-[40px] min-h-[25px] bg-white flex justify-center items-center rounded-[5px]" title="Visa">
            <img src="src/assets/images/Visa.svg" alt="visa" />
        </div>
        <div className="min-w-[40px] min-h-[25px] bg-white flex justify-center items-center rounded-[5px]" title="Mastercard">
            <img src="src/assets/images/MasterCard.svg" alt="master-card" />
        </div>
        <div className="min-w-[40px] min-h-[25px] bg-white flex justify-center items-center rounded-[5px]" title="PayPal">
            <img src="src/assets/images/PayPal.svg" alt="pay-pal" />
        </div>
        <div className="min-w-[40px] min-h-[25px] bg-white flex justify-center items-center rounded-[5px]" title="Apple Pay">
            <img src="src/assets/images/ApplePay.svg" alt="apple-pay" />
        </div>
        <div className="min-w-[40px] min-h-[25px] bg-white flex justify-center items-center rounded-[5px]" title="Google Pay">
            <img src="src/assets/images/GPay.svg" alt="google-pay" />
        </div>
    </div>
);
};

export default PaymentMethodsList;