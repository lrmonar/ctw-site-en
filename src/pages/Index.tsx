import { useTranslation } from "react-i18next";
import React from 'react';
import NewsCarousel from '@/components/NewsCarousel';
import NewsPanel from '@/components/NewsPanel';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Phone, Smartphone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const { t } = useTranslation('index');

  const serviceData = [
    {
      title: t("services.cellular.title"),
      description: t("services.cellular.description"),
      icon: <Smartphone className="w-6 h-6" />,
      features: [
        t("services.cellular.features.0"),
        t("services.cellular.features.1"),
        t("services.cellular.features.2"),
        t("services.cellular.features.3"),
      ]
    },
    {
      title: t("services.telephony.title"),
      description: t("services.telephony.description"),
      icon: <Phone className="w-6 h-6" />,
      features: [
        t("services.telephony.features.0"),
        t("services.telephony.features.1"),
        t("services.telephony.features.2"),
        t("services.telephony.features.3"),
      ]
    },
    {
      title: t("services.web.title"),
      description: t("services.web.description"),
      icon: <Globe className="w-6 h-6" />,
      features: [
        t("services.web.features.0"),
        t("services.web.features.1"),
        t("services.web.features.2"),
        t("services.web.features.3"),
      ]
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-consulting-light">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-consulting-dark">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
              {t("hero.subtitle")}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
          <NewsCarousel />
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-consulting-dark">
              {t("news.title")}
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              {t("news.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NewsPanel title={t("news.categories.cellular")} category="cellular" />
            <NewsPanel title={t("news.categories.telephony")} category="telephony" />
            <NewsPanel title={t("news.categories.web")} category="web" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-20 bg-consulting-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-consulting-dark">
              {t("services.sectionTitle")}
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              {t("services.sectionSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceData.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                iconComponent={service.icon}
                features={service.features}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" size="lg">
                {t("services.viewAll")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-consulting-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button variant="default" size="lg" className="bg-white text-consulting-blue hover:bg-gray-100">
                {t("cta.contact")}
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                {t("cta.explore")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
