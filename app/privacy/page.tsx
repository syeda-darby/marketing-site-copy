const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-24 lg:px-8 lg:py-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: March 2026</p>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Introduction</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">Servinix respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, request a demo, communicate with us, or use the Servinix platform and related services.</p>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Information We Collect</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">We may collect:</p>
        <ul className="text-muted-foreground space-y-2 mb-6 list-disc pl-6">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company name</li>
          <li>Billing information</li>
          <li>Account information</li>
          <li>Communications submitted through forms</li>
          <li>Usage data</li>
          <li>Browser and device information</li>
          <li>Cookies and analytics data</li>
        </ul>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">How We Use Information</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">We use information to:</p>
        <ul className="text-muted-foreground space-y-2 mb-6 list-disc pl-6">
          <li>Provide and improve Servinix services</li>
          <li>Respond to inquiries and demo requests</li>
          <li>Operate the platform</li>
          <li>Provide support</li>
          <li>Send service-related communications</li>
          <li>Maintain security and prevent misuse</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Cookies and Tracking Technologies</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">Servinix may use cookies, analytics tools, and similar technologies to understand site usage, improve website performance, and enhance user experience.</p>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">How We Share Information</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">We may share information with service providers that help us operate our website, platform, communications, payments, hosting, analytics, and support functions.</p>
        <p className="text-muted-foreground leading-relaxed mb-3">We may also disclose information:</p>
        <ul className="text-muted-foreground space-y-2 mb-6 list-disc pl-6">
          <li>To comply with law</li>
          <li>To protect our rights</li>
          <li>In connection with a merger, acquisition, financing, or sale of assets</li>
        </ul>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">SMS Communications</h2>
        <div className="p-6 rounded-xl border border-border/50 bg-card mb-6">
          <p className="text-muted-foreground leading-relaxed mb-4">If you provide your mobile phone number and opt in to receive text messages from Servinix, you consent to receive SMS messages related to demos, scheduling, account notifications, service updates, support communications, and product-related operational messages.</p>
          <ul className="text-muted-foreground space-y-2 list-disc pl-6 mb-4">
            <li>Message frequency may vary.</li>
            <li>Message and data rates may apply.</li>
            <li>You may opt out at any time by replying STOP.</li>
            <li>For assistance, reply HELP or contact us at <a href="mailto:legal@servinix.com" className="text-primary hover:underline">legal@servinix.com</a>.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-2"><strong className="text-foreground">No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.</strong></p>
          <p className="text-muted-foreground leading-relaxed">Text messaging opt-in data, consent records, and related mobile information will not be sold or shared with third parties, except with vendors or service providers that help us deliver messaging services and only to the extent necessary to provide those services.</p>
        </div>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Data Security</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">We use reasonable administrative, technical, and physical safeguards designed to protect personal information. However, no method of transmission over the Internet or method of storage is completely secure.</p>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Data Retention</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">We retain personal information for as long as necessary to provide services, fulfill the purposes described in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce agreements.</p>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Your Choices</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">You may opt out of marketing emails using the unsubscribe link in those emails. You may opt out of SMS messages by replying STOP. You may contact us to request access, correction, or deletion of your information where applicable.</p>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Children's Privacy</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">Servinix services are not directed to children under 13, and we do not knowingly collect personal information from children.</p>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Changes to This Policy</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">We may update this Privacy Policy from time to time. Updated versions will be posted on this page with a revised effective date.</p>

        <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Contact Information</h2>
        <div className="text-muted-foreground mb-6">
          <p>Servinix Inc.</p>
          <p>Email: <a href="mailto:legal@servinix.com" className="text-primary hover:underline">legal@servinix.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
