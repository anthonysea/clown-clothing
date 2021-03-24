import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IYJeKKN9iJdHESBa5BBViAzDzqv7Hz2EiaWVjjrdTm0xio2zvri2K1f3Qg0tQtjk4lweMN9gXjbcfbZwtYNIE4K00E50myI1C';

    const onToken = token => {
        console.log(token);
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Clown Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken} // On success callback
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;