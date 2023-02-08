import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51MXuJdAyZnpCkMGPtEsXxYTiTHM2Wzc7seuNp3kP74bK9V5LrIy7IEYBQTYrQYHEJwpMof78ywKNNdkKq3bNtaYb007W8xXz8l";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;