import LegalPage, { Block } from "../components/LegalPage";

export const metadata = {
  title: "Terms & Conditions",
  description: "The terms governing use of the Kaneimpex website and services.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" updated="July 8, 2026">
      <p className="text-navy/70">
        These Terms &amp; Conditions govern your use of the Kaneimpex website and
        the ordering of our products and services. By using this site or placing
        an order, you agree to these terms.
      </p>

      <Block heading="1. About Us">
        <p>
          Kaneimpex is a B2B manufacturer and supplier of custom uniforms,
          sportswear and related apparel. All quotes and orders are subject to
          confirmation and availability.
        </p>
      </Block>

      <Block heading="2. Quotes & Orders">
        <p>
          Quotes provided through this website are estimates based on the details
          you supply and are valid for the period stated on the quote. An order is
          only binding once confirmed in writing by both parties, including agreed
          specifications, quantities, pricing and delivery terms.
        </p>
      </Block>

      <Block heading="3. Custom Manufacturing">
        <p>
          As products are custom-manufactured to your specifications, approved
          samples and artwork are considered final. Please review all details
          carefully before approval, as custom orders generally cannot be cancelled
          once production has begun.
        </p>
      </Block>

      <Block heading="4. Pricing & Payment">
        <p>
          Prices are quoted exclusive of taxes, duties and shipping unless stated
          otherwise. Payment terms, including any required deposit, will be set out
          in your order confirmation.
        </p>
      </Block>

      <Block heading="5. Intellectual Property">
        <p>
          You warrant that any logos, designs or artwork you provide do not infringe
          third-party rights. All content on this website remains the property of
          Kaneimpex and may not be reproduced without permission.
        </p>
      </Block>

      <Block heading="6. Limitation of Liability">
        <p>
          To the extent permitted by law, Kaneimpex is not liable for indirect or
          consequential losses. Our total liability for any order is limited to the
          value of that order.
        </p>
      </Block>

      <Block heading="7. Governing Law">
        <p>
          These terms are governed by the laws of the jurisdiction in which
          Kaneimpex operates, and any disputes will be subject to its courts.
        </p>
      </Block>

      <Block heading="8. Contact">
        <p>
          Questions about these terms? Email{" "}
          <a href="mailto:sales@kaneimpex.com" className="font-semibold text-brand">
            sales@kaneimpex.com
          </a>
          .
        </p>
      </Block>
    </LegalPage>
  );
}
