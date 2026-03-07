import NewsCarousel from '@/components/NewsCarousel';
import NewsPanel from '@/components/NewsPanel';

const Index = () => {
  return (
    <main>
      <h1>Test Page</h1>
	  <NewsCarousel />
	  <NewsPanel title="Test" category="cellular" />
    </main>
  );
};

export default Index;