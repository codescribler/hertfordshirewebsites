import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy | Hertfordshire Websites",
  description: "Our privacy policy explains how we collect, use, and protect your personal information when you use our website and services.",
  keywords: "privacy policy, data protection, GDPR, cookies, personal data, Hertfordshire Websites",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-lg text-gray-700">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </Container>
      </Section>

      {/* Privacy Policy Content */}
      <Section className="py-12 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Introduction</h2>
            <p>
              Hertfordshire Websites ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website hertfordshirewebsites.co.uk (the "Website") or use our services.
            </p>
            <p>
              We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>

            <h2>Information We Collect</h2>
            <p>We collect several types of information from and about users of our Website, including:</p>
            <ul>
              <li>
                <strong>Personal Data:</strong> Personal data refers to any information that identifies you as an individual. This includes your name, email address, phone number, and any other information you provide when filling out forms on our Website, such as our contact form or discovery call booking form.
              </li>
              <li>
                <strong>Usage Data:</strong> We automatically collect information about how you interact with our Website through cookies and similar technologies. This may include your IP address, browser type, operating system, referring URLs, access times, and pages viewed.
              </li>
            </ul>

            <h2>How We Collect Your Information</h2>
            <p>We collect information from you in the following ways:</p>
            <ul>
              <li>
                <strong>Direct Interactions:</strong> When you fill out forms on our Website, contact us, or request information about our services.
              </li>
              <li>
                <strong>Automated Technologies:</strong> As you navigate through our Website, we may use cookies, web beacons, and other tracking technologies to collect information about your equipment, browsing actions, and patterns.
              </li>
              <li>
                <strong>Third-Party Sources:</strong> We may receive information about you from third-party service providers, such as Google Analytics.
              </li>
            </ul>

            <h2>Google Analytics</h2>
            <p>
              We use Google Analytics to help us understand how visitors engage with our Website. Google Analytics uses cookies and similar technologies to collect information about Website usage and report website trends. This information is used to improve our Website and services.
            </p>
            <p>
              The information collected by Google Analytics includes:
            </p>
            <ul>
              <li>Pages visited and time spent on each page</li>
              <li>Referring websites or sources</li>
              <li>Technical information such as browser type, device type, and operating system</li>
              <li>Approximate geographic location (country or city)</li>
            </ul>
            <p>
              Google Analytics may also collect your IP address, which is anonymized before being stored. Google Analytics does not identify individual users or associate your IP address with any other data held by Google.
            </p>
            <p>
              You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
            </p>

            <h2>Cookies</h2>
            <p>
              Our Website uses cookies to enhance your browsing experience. Cookies are small text files that are placed on your device when you visit our Website. They help us recognize your device and remember certain information about your visit.
            </p>
            <p>We use the following types of cookies:</p>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the Website to function properly and cannot be switched off in our systems.
              </li>
              <li>
                <strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our Website. They help us know which pages are the most and least popular and see how visitors move around the Website.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These cookies enable the Website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
              </li>
              <li>
                <strong>Social Media Cookies:</strong> These cookies are set by social media services that we have added to the Website to enable you to share our content with your friends and networks. They are capable of tracking your browser across other sites and building up a profile of your interests.
              </li>
            </ul>
            <p>
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this Website may become inaccessible or not function properly.
            </p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect about you for the following purposes:</p>
            <ul>
              <li>To provide, maintain, and improve our Website and services</li>
              <li>To respond to your inquiries, comments, or questions</li>
              <li>To send you information about our services, special offers, and promotions</li>
              <li>To understand how users interact with our Website and improve user experience</li>
              <li>To protect our Website, services, and users from fraudulent or malicious activity</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2>How We Share Your Information</h2>
            <p>We may share your personal information with:</p>
            <ul>
              <li>
                <strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as web hosting, data analysis, payment processing, and customer service.
              </li>
              <li>
                <strong>Business Partners:</strong> We may share your information with our business partners to offer you certain products, services, or promotions.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).
              </li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information to third parties for their marketing purposes without your explicit consent.
            </p>

            <h2>Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>
            <p>
              While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security. If you have reason to believe that your interaction with us is no longer secure, please contact us immediately.
            </p>

            <h2>Data Retention</h2>
            <p>
              We will retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
            <p>
              To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data, and whether we can achieve those purposes through other means, and the applicable legal requirements.
            </p>

            <h2>Your Rights</h2>
            <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
            <ul>
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
            <p>
              If you wish to exercise any of these rights, please contact us using the details provided below.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our Website is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and you believe your child has provided us with personal information, please contact us so that we can take necessary actions.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul>
              <li>By email: hello@hertfordshirewebsites.co.uk</li>
              <li>By phone: 07786 556885</li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
