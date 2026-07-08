import LegalPage, { Block } from "../components/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  description: "How Kaneimpex collects, uses and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 8, 2026">
      <p className="text-navy/70">
        Kaneimpex (“we”, “us”, “our”) respects your privacy. This policy explains
        what information we collect when you use our website or request a quote,
        how we use it, and the choices you have.
      </p>

      <Block heading="1. Information We Collect">
        <p>
          When you submit a quote request or contact us, we may collect your name,
          company, email address, phone number, country and the details of your
          enquiry. We also collect standard technical data such as browser type
          and pages visited through cookies and analytics.
        </p>
      </Block>

      <Block heading="2. How We Use Your Information">
        <p>We use the information you provide to:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Prepare and send quotes and respond to enquiries.</li>
          <li>Process and fulfil orders and manage our business relationship.</li>
          <li>Improve our website, products and services.</li>
          <li>Send relevant updates where you have opted in.</li>
        </ul>
      </Block>

      <Block heading="3. Sharing of Information">
        <p>
          We do not sell your personal data. We may share information with trusted
          service providers (such as logistics and payment partners) only as needed
          to fulfil your request, and where required by law.
        </p>
      </Block>

      <Block heading="4. Data Security">
        <p>
          We apply reasonable technical and organisational measures to protect your
          information against unauthorised access, loss or misuse. No method of
          transmission over the internet is fully secure, however, and we cannot
          guarantee absolute security.
        </p>
      </Block>

      <Block heading="5. Cookies">
        <p>
          Our website uses cookies to enable core functionality and understand how
          visitors use the site. You can control cookies through your browser
          settings.
        </p>
      </Block>

      <Block heading="6. Your Rights">
        <p>
          You may request access to, correction of, or deletion of your personal
          data, subject to applicable law. To exercise these rights, contact us at
          the address below.
        </p>
      </Block>

      <Block heading="7. Contact Us">
        <p>
          For any privacy questions, email us at{" "}
          <a href="mailto:privacy@kaneimpex.com" className="font-semibold text-brand">
            privacy@kaneimpex.com
          </a>
          .
        </p>
      </Block>
    </LegalPage>
  );
}
