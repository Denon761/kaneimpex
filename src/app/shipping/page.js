import LegalPage, { Block } from "../components/LegalPage";

export const metadata = {
  title: "Shipping Policy",
  description:
    "Kaneimpex shipping, lead times and delivery information for worldwide B2B orders.",
};

export default function ShippingPage() {
  return (
    <LegalPage title="Shipping Policy" updated="July 8, 2026">
      <p className="text-navy/70">
        Kaneimpex delivers custom uniform and sportswear orders worldwide. This
        policy outlines our production lead times, shipping methods and delivery
        terms for B2B orders.
      </p>

      <Block heading="1. Production Lead Times">
        <p>
          As all products are custom-manufactured, lead times begin once artwork,
          sizing and payment terms are confirmed. Typical production times range
          from 2–4 weeks depending on order size, customization and season. Exact
          timelines are confirmed on your order.
        </p>
      </Block>

      <Block heading="2. Shipping Methods">
        <p>
          We ship globally via trusted air and sea freight partners. The most
          suitable method is selected based on your destination, order volume and
          required delivery date. Express options are available on request.
        </p>
      </Block>

      <Block heading="3. Shipping Costs">
        <p>
          Shipping costs depend on destination, weight, volume and method. Charges
          are quoted separately and confirmed before dispatch. Duties and import
          taxes are the responsibility of the receiver unless otherwise agreed.
        </p>
      </Block>

      <Block heading="4. Order Tracking">
        <p>
          Once your order ships, we provide tracking details and relevant shipping
          documents so you can monitor your delivery through to arrival.
        </p>
      </Block>

      <Block heading="5. Delivery & Inspection">
        <p>
          Please inspect goods on arrival and report any discrepancies or damage
          within 7 days. We will work with you promptly to resolve any verified
          issues.
        </p>
      </Block>

      <Block heading="6. International Orders">
        <p>
          For international shipments, please ensure your business complies with
          local import regulations. Our team can assist with the necessary export
          documentation.
        </p>
      </Block>

      <Block heading="7. Questions">
        <p>
          For shipping enquiries, contact{" "}
          <a href="mailto:info@kenimpex.co.uk" className="font-semibold text-brand">
            info@kenimpex.co.uk
          </a>
          .
        </p>
      </Block>
    </LegalPage>
  );
}
