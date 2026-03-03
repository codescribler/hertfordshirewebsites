import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import AnimateIn from '@/components/ui/AnimateIn';

const Cta = () => {
  return (
    <Section className="bg-primary-800 text-white relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] mb-6 text-white">
            Ready to grow your business with a website that works?
          </h2>

          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Book a free 15-minute discovery call. We&apos;ll discuss your goals, answer your questions, and recommend the best approach for your business.
          </p>

          {/* What to expect */}
          <div className="inline-flex flex-col gap-3 mb-10 text-left">
            {[
              'No-obligation consultation with a website expert',
              'Personalised recommendations for your business',
              'Clear pricing with no hidden costs',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-secondary-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-secondary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/80 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact#discovery-call"
              variant="accent"
              size="xl"
              className="hover-lift"
            >
              Book Your Free Discovery Call
            </Button>

            <Button
              href="/contact"
              variant="outline"
              size="xl"
              className="border-white/20 text-white hover:bg-white/10 hover-lift"
            >
              Send Us a Message
            </Button>
          </div>

          <p className="text-white/40 text-sm mt-6">No technical knowledge required &mdash; we speak plain English!</p>
        </AnimateIn>
      </div>
    </Section>
  );
};

export default Cta;
