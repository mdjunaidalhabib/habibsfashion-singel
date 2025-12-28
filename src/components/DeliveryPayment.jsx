import Container from "./Container";
import { FaShippingFast, FaMoneyBillWave, FaClock } from "react-icons/fa";

export default function DeliveryPayment() {
  return (
    <section
      id="delivery"
      className="py-12 md:py-16 bg-gradient-to-b from-pink-50 via-pink-200 to-pink-50"
    >
      <Container>
        <h2 className="text-3xl font-extrabold text-slate-900">
          Delivery & Payment
        </h2>
        <p className="mt-2 text-slate-600">Simple and easy order process.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-pink-50 p-6 shadow-sm">
            <div className="flex items-center gap-2 text-amber-900 font-extrabold">
              <FaShippingFast /> FREE DELIVERY
            </div>
            <p className="mt-3 text-slate-600">
              All over Bangladesh delivery available.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-pink-50 p-6 shadow-sm">
            <div className="flex items-center gap-2 text-green-700 font-extrabold">
              <FaMoneyBillWave /> Cash on Delivery
            </div>
            <p className="mt-3 text-slate-600">Pay after receiving your bag.</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-pink-50 p-6 shadow-sm">
            <div className="flex items-center gap-2 text-slate-900 font-extrabold">
              <FaClock /> Delivery Time
            </div>
            <p className="mt-3 text-slate-600">
              Dhaka: 1–3 days • Outside: 3–5 days
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
