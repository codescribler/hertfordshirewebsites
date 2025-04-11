import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import AwardEntryForm from '@/components/awards/AwardEntryForm'; // Assuming this will be created

export default function AwardsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hertfordshire Business Website Awards 2024
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Celebrate the best websites in Hertfordshire! Enter your business for free, get an instant website audit, and gain recognition.
            </p>
            {/* More content can be added here later */}
          </div>
        </Container>
      </Section>

      {/* Form Section */}
      <Section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">Enter the Awards</h2>
          <AwardEntryForm />
        </Container>
      </Section>

      {/* Other sections (Timeline, Benefits, etc.) can be added here */}
    </>
  );
}
