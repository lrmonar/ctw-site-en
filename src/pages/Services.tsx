import React from 'react';
import { useTranslation } from "react-i18next";
import ServiceCard from '@/components/ServiceCard';
import { 
  Phone, 
  Smartphone, 
  Globe, 
  Signal, 
  Server, 
  Shield, 
  BookOpen,
  Workflow,
  Code
} from 'lucide-react';

const Services = () => {
// 	orig. value:  const { t } = useTranslation('services');
  const { t } = useTranslation('services');

  const servicesData = [
    {
      title: t("items.cellular.title"),
      description: t("items.cellular.description"),
      icon: <Smartphone className="w-6 h-6" />,
      features: [
        t("items.cellular.features.0"),
        t("items.cellular.features.1"),
        t("items.cellular.features.2"),
        t("items.cellular.features.3"),
      ]
    },
    {
      title: t("items.telephony.title"),
      description: t("items.telephony.description"),
      icon: <Phone className="w-6 h-6" />,
      features: [
        t("items.telephony.features.0"),
        t("items.telephony.features.1"),
        t("items.telephony.features.2"),
        t("items.telephony.features.3"),
      ]
    },
    {
      title: t("items.webapps.title"),
      description: t("items.webapps.description"),
      icon: <Globe className="w-6 h-6" />,
      features: [
        t("items.webapps.features.0"),
        t("items.webapps.features.1"),
        t("items.webapps.features.2"),
        t("items.webapps.features.3"),
      ]
    },
    {
      title: t("items.network.title"),
      description: t("items.network.description"),
      icon: <Signal className="w-6 h-6" />,
      features: [
        t("items.network.features.0"),
        t("items.network.features.1"),
        t("items.network.features.2"),
        t("items.network.features.3"),
      ]
    },
    {
      title: t("items.cloud.title"),
      description: t("items.cloud.description"),
      icon: <Server className="w-6 h-6" />,
      features: [
        t("items.cloud.features.0"),
        t("items.cloud.features.1"),
        t("items.cloud.features.2"),
        t("items.cloud.features.3"),
      ]
    },
    {
      title: t("items.security.title"),
      description: t("items.security.description"),
      icon: <Shield className="w-6 h-6" />,
      features: [
        t("items.security.features.0"),
        t("items.security.features.1"),
        t("items.security.features.2"),
        t("items.security.features.3"),
      ]
    },
    {
      title: t("items.training.title"),
      description: t("items.training.description"),
      icon: <BookOpen className="w-6 h-6" />,
      features: [
        t("items.training.features.0"),
        t("items.training.features.1"),
        t("items.training.features.2"),
        t("items.training.features.3"),
      ]
    },
    {
      title: t("items.process.title"),
      description: t("items.process.description"),
      icon: <Workflow className="w-6 h-6" />,
      features: [
        t("items.process.features.0"),
        t("items.process.features.1"),
        t("items.process.features.2"),
        t("items.process.features.3"),
      ]
    },
    {
      title: t("items.customdev.title"),
      description: t("items.customdev.description"),
      icon: <Code className="w-6 h-6" />,
      features: [
        t("items.customdev.features.0"),
        t("items.customdev.features.1"),
        t("items.customdev.features.2"),
        t("items.customdev.features.3"),
      ]
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-consulting-light py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-consulting-dark">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                iconComponent={service.icon}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-consulting-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <a href="/contact">
            <button className="bg-white text-consulting-blue hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors">
              {t("cta.button")}
            </button>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Services;
