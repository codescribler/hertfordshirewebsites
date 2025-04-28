import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Our terms of service outline the rules, guidelines, and agreements for using our website and services.",
  keywords: "terms of service, terms and conditions, legal, website terms, Hertfordshire Websites",
};

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-lg text-gray-700">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </Container>
      </Section>

      {/* Terms of Service Content */}
      <Section className="py-12 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Introduction</h2>
            <p>
              Welcome to Hertfordshire Websites. These Terms of Service ("Terms") govern your use of our website located at hertfordshirewebsites.co.uk ("Website") and the services we provide ("Services").
            </p>
            <p>
              By accessing our Website or using our Services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Website or use our Services.
            </p>

            <h2>Use of Our Website</h2>
            <p>
              The content on our Website is for general information and use only. It is subject to change without notice.
            </p>
            <p>
              Your use of any information or materials on this Website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this Website meet your specific requirements.
            </p>
            <p>
              This Website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these Terms.
            </p>

            <h2>Services</h2>
            <p>
              Hertfordshire Websites provides web design, development, and digital marketing services to businesses in Hertfordshire and surrounding areas. Our Services include, but are not limited to:
            </p>
            <ul>
              <li>Website design and development</li>
              <li>Search engine optimization (SEO)</li>
              <li>Content writing</li>
              <li>Website maintenance</li>
              <li>Digital marketing consultation</li>
            </ul>
            <p>
              The specific details, deliverables, timelines, and costs of our Services will be outlined in a separate agreement or proposal provided to you before the commencement of any work.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All intellectual property rights in and to the Website and our Services, including but not limited to copyright, trademarks, domain names, patents, design rights, and any other similar rights, are the property of Hertfordshire Websites or our licensors.
            </p>
            <p>
              Upon full payment for our Services, you will own the intellectual property rights to the specific deliverables created for you, such as your website design and content, unless otherwise specified in our agreement. However, we reserve the right to use these deliverables in our portfolio and for promotional purposes.
            </p>
            <p>
              We may use third-party resources such as themes, plugins, images, or code libraries in the delivery of our Services. The intellectual property rights for these resources remain with their respective owners, and their use is subject to their own licensing terms.
            </p>

            <h2>User Responsibilities</h2>
            <p>
              When using our Website or Services, you agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information when communicating with us</li>
              <li>Use our Website and Services only for lawful purposes and in accordance with these Terms</li>
              <li>Not engage in any activity that could harm, disable, overburden, or impair our Website or Services</li>
              <li>Not attempt to gain unauthorized access to any part of our Website, Services, or systems</li>
              <li>Not use our Website or Services to distribute unsolicited commercial communications (spam)</li>
              <li>Not use our Website or Services to distribute malicious software or engage in fraudulent activities</li>
            </ul>

            <h2>Payment Terms</h2>
            <p>
              The cost of our Services will be outlined in a proposal or agreement provided to you before the commencement of any work. Payment terms, including deposit requirements and payment schedules, will also be specified in this document.
            </p>
            <p>
              Unless otherwise agreed in writing, we require a deposit before beginning work on any project. The remaining balance is typically due upon completion of the project or in installments as outlined in our agreement.
            </p>
            <p>
              If you fail to make any payment by the due date, we reserve the right to suspend or terminate our Services and retain any materials created until payment is received in full.
            </p>

            <h2>Project Timelines and Deliverables</h2>
            <p>
              We will make every effort to complete our Services within the estimated timeframes provided in our proposal or agreement. However, these timeframes are estimates only and may be affected by various factors, including but not limited to:
            </p>
            <ul>
              <li>Delays in receiving content, feedback, or approvals from you</li>
              <li>Changes to the project scope or requirements</li>
              <li>Technical issues or unforeseen complexities</li>
              <li>Force majeure events</li>
            </ul>
            <p>
              We are not liable for any delays caused by factors outside our reasonable control, including delays on your part in providing necessary information, content, or approvals.
            </p>

            <h2>Revisions and Changes</h2>
            <p>
              Our proposals and agreements typically include a specified number of revisions or rounds of changes. Additional revisions or changes beyond this number may incur additional charges.
            </p>
            <p>
              Significant changes to the project scope or requirements after the project has commenced may also incur additional charges and affect the project timeline. We will notify you of any such changes and obtain your approval before proceeding.
            </p>

            <h2>Termination</h2>
            <p>
              Either party may terminate our Services by providing written notice to the other party. In the event of termination:
            </p>
            <ul>
              <li>You will be responsible for paying for all work completed up to the date of termination</li>
              <li>Any deposit paid is non-refundable</li>
              <li>We will provide you with all completed deliverables for which you have paid</li>
              <li>We may retain any work-in-progress until all outstanding payments are received</li>
            </ul>
            <p>
              We reserve the right to terminate our Services immediately if you breach these Terms or if you engage in any conduct that we determine, in our sole discretion, to be harmful to our business or reputation.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Hertfordshire Websites shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your use of or inability to use our Website or Services</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from our Website</li>
              <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our Website by any third party</li>
            </ul>
            <p>
              Our total liability for any claims under these Terms, including for any implied warranties, is limited to the amount you paid us for the Services giving rise to the claim.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Hertfordshire Websites, our contractors, agents, officers, directors, and employees from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from:
            </p>
            <ul>
              <li>Your use of and access to our Website or Services</li>
              <li>Your violation of any term of these Terms</li>
              <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
              <li>Any claim that content you provided caused damage to a third party</li>
            </ul>
            <p>
              This defense and indemnification obligation will survive these Terms and your use of our Website or Services.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
            </p>
            <p>
              Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>

            <h2>Changes to These Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p>
              By continuing to access or use our Website or Services after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use our Website or Services.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us:
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
