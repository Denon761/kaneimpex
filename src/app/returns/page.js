import LegalPage, { Block } from "../components/LegalPage";

export const metadata = {
  title: "Returns & Refunds Policy",
  description:
    "How returns, replacements and refunds work for custom-manufactured uniforms and sportswear from Kaneimpex.",
};

export default function ReturnsPage() {
  return (
    <LegalPage title="Returns & Refunds Policy" updated="July 13, 2026">
      <p className="text-sm leading-relaxed text-navy/65">
        We want every order to arrive exactly as approved. Because our products
        are custom-manufactured to your specifications, this policy explains
        when returns, replacements and refunds apply, and how to raise a claim.
      </p>

      <Block heading="1. Custom-Made Products">
        <p>
          All garments are produced to order against your approved artwork,
          sizes, fabrics and branding. For this reason, custom-manufactured
          items cannot be returned or refunded for reasons such as change of
          mind, ordering errors in approved specifications, or minor colour
          variation from on-screen previews.
        </p>
        <p>
          Approved pre-production samples and signed-off artwork are treated as
          the agreed standard for the production run.
        </p>
      </Block>

      <Block heading="2. Inspection on Delivery">
        <p>
          Please inspect your order within <strong>7 days of delivery</strong>.
          Check quantities, sizes, branding placement and workmanship against
          your order confirmation before distributing garments to your team or
          customers.
        </p>
      </Block>

      <Block heading="3. Defects & Incorrect Items">
        <p>We will put it right at no cost to you if your order arrives:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>With manufacturing defects (stitching, printing or fabric faults).</li>
          <li>Different from the approved sample or agreed specification.</li>
          <li>With missing items or incorrect quantities.</li>
          <li>Damaged in transit (where shipping was arranged by us).</li>
        </ul>
        <p>
          Depending on the issue, we will offer a replacement, repair, credit
          against a future order, or a refund for the affected items.
        </p>
      </Block>

      <Block heading="4. How to Raise a Claim">
        <p>
          Email{" "}
          <a href="mailto:info@kenimpex.co.uk" className="font-semibold text-brand">
            info@kenimpex.co.uk
          </a>{" "}
          within 7 days of delivery with your order number, a description of
          the issue, the affected quantity and clear photos of the fault. Our
          team responds to all claims within 2 business days.
        </p>
        <p>
          Please do not return goods before a claim is agreed — we will confirm
          whether items need to be sent back and provide return instructions if
          so. Agreed return shipping costs for faulty goods are covered by us.
        </p>
      </Block>

      <Block heading="5. Order Cancellations">
        <p>
          Orders can be cancelled free of charge before production begins. Once
          fabric has been cut or printing has started, cancellation is no
          longer possible; any deposit covers work already completed and
          materials purchased.
        </p>
      </Block>

      <Block heading="6. Refund Processing">
        <p>
          Approved refunds are issued to the original payment method within
          5–10 business days of confirmation. Where a credit against a future
          order is agreed instead, it will be recorded on your account and
          referenced in writing.
        </p>
      </Block>

      <Block heading="7. Samples">
        <p>
          Pre-production samples are chargeable and non-refundable, but the
          sample cost is typically credited against your confirmed bulk order.
        </p>
      </Block>

      <Block heading="8. Contact">
        <p>
          Questions about a return or refund? Email{" "}
          <a href="mailto:info@kenimpex.co.uk" className="font-semibold text-brand">
            info@kenimpex.co.uk
          </a>{" "}
          or call{" "}
          <a href="tel:+447587579766" className="font-semibold text-brand">
            (+44) 07587 579766
          </a>
          .
        </p>
      </Block>
    </LegalPage>
  );
}
