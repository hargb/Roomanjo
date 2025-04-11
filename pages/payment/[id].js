import axios from "axios";
import Script from "next/script";
import { useRouter } from "next/router";

const Payment = () => {
  const router = useRouter();

  const makePayment = async () => {
    try {
      const val = {
        id: router.query?.id,
      };

      const { data } = await axios.post(`/api/razorpay`, val);

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
        name: "Roomanjo Hotel Booking",
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        description: "Thanks for booking!",
        handler: function (response) {
          alert("✅ Payment Success! ID: " + response.razorpay_payment_id);
        },
        prefill: {
          name: "Harsh Aggarwal",
          email: "harsh@email.com",
          contact: "9999999999",
        },
        theme: {
          color: "#007bff",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("❌ Payment Error:", err);
    }
  };

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="beforeInteractive"
        onLoad={makePayment} // ✅ Key fix
      />
      <div className="text-center text-xl mt-20 text-gray-500">
        Please wait, redirecting to payment gateway...
      </div>
    </>
  );
};

export default Payment;
