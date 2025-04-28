import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import AwardEntryForm from '@/components/awards/AwardEntryForm';
import { awardCategories } from '@/lib/types';

export default function AwardsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-primary-900 drop-shadow">
              Hertfordshire Business Website Awards 2024
            </h1>
            <p className="text-xl md:text-2xl text-primary-700 mb-6 font-semibold">
              Win recognition, boost your website’s visibility, and get a free expert audit—enter your business for <span className="text-primary-600 font-bold">FREE</span>!
            </p>
            <ul className="flex flex-wrap justify-center gap-4 text-lg text-primary-800 mb-8">
              <li className="bg-primary-100 rounded px-4 py-2 shadow">Instant Website Audit</li>
              <li className="bg-primary-100 rounded px-4 py-2 shadow">Prestigious Local Award</li>
              <li className="bg-primary-100 rounded px-4 py-2 shadow">Backlink &amp; Exposure</li>
              <li className="bg-primary-100 rounded px-4 py-2 shadow">Simple, Fast Entry</li>
            </ul>
            <p className="text-md text-gray-600 mb-2">
              <span className="font-bold text-primary-700">Deadline:</span> 30th June 2024 &nbsp;|&nbsp; <span className="font-bold text-primary-700">Winners Announced:</span> 15th July 2024
            </p>
          </div>
        </Container>
      </Section>

      {/* Value Proposition Section */}
      <Section className="py-12 bg-white border-b border-primary-100">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary-800">Why Enter?</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary-700">Free Website Audit</h3>
                <p className="text-gray-700">Get a professional review of your website’s strengths and opportunities, with actionable tips to improve your online presence—just for entering.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary-700">Prestige &amp; Backlinks</h3>
                <p className="text-gray-700">Winners and shortlisted sites receive featured listings, valuable backlinks, and social media shoutouts—boosting your SEO and credibility.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary-700">Local Recognition</h3>
                <p className="text-gray-700">Showcase your business as a leader in Hertfordshire, attract new customers, and gain recognition in your community.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Categories Section */}
      <Section className="py-12 bg-primary-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary-800">Award Categories</h2>
            <p className="mb-8 text-gray-700">Enter your business in one or more of the following categories. You can select as many as apply!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {awardCategories.map(cat => (
                <div key={cat.id} className="bg-white rounded-lg shadow p-5 border border-primary-100 flex flex-col items-center">
                  {/* Optionally add icons here */}
                  <span className="text-lg font-semibold text-primary-700 mb-2">{cat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Entry Form Section */}
      <Section className="py-16 bg-white" id="awards-entry-form">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6 text-primary-800">Enter Your Business</h2>
            <p className="text-center text-gray-700 mb-8">
              Complete the quick form below to enter. It’s free, takes just a few minutes, and every entry gets a website audit!
            </p>
            <AwardEntryForm />
          </div>
        </Container>
      </Section>

      {/* Trust & FAQ Section */}
      <Section className="py-12 bg-primary-50 border-t border-primary-100">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-primary-800 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary-700">Who can enter?</h3>
                <p className="text-gray-700">Any business based in Hertfordshire can enter. Agencies can also enter on behalf of clients.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary-700">Is it really free?</h3>
                <p className="text-gray-700">Yes! There’s no cost to enter or to receive your website audit.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary-700">What do winners get?</h3>
                <p className="text-gray-700">Winners receive a featured listing, a backlink, a digital badge, and social media promotion. All entrants get a website audit and exposure.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary-700">How are winners chosen?</h3>
                <p className="text-gray-700">
                  Winners are selected through a balanced review of both quantitative and qualitative factors. We analyze your website’s performance data (such as Google Analytics) and also assess your site against the latest digital growth strategies and best practices being used by top businesses online today. This ensures a fair, insightful, and up-to-date evaluation for every entrant.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary-700">How will I know if I’ve won?</h3>
                <p className="text-gray-700">We’ll contact winners by email and announce them on our website and social media.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section className="py-12 bg-gradient-to-br from-primary-50 to-white border-t border-primary-100">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary-900">Ready to showcase your business?</h2>
            <p className="text-lg text-primary-700 mb-6">Don’t miss your chance to gain recognition, backlinks, and a free expert website audit. Enter now—it’s fast, free, and could transform your online presence!</p>
            <a
              href="#awards-entry-form"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded shadow transition"
            >
              Enter the Awards Now
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
