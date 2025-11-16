// src/app/app.ts
import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';

type Lang = 'es' | 'en';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface DifferentialValue {
  number: string;
  title: string;
  description: string;
}

interface OwnerBenefit {
  title: string;
  description: string;
}

interface CopyBlock {
  heroTagline: string;
  heroDescription: string;
  heroButton: string;
  servicesTitle: string;
  differentialTitle: string;
  ownersTitle: string;
  ownersSubtitle: string;
  ownersButton: string;
  contactTitle: string;
  contactSubtitle: string;
  contactButton: string;
  formName: string;
  formEmail: string;
  formPhone: string;
  formServicePlaceholder: string;
  formMessage: string;
  footerTagline: string;
  services: Service[];
  differentialValues: DifferentialValue[];
  ownerBenefits: OwnerBenefit[];
}

const COPY: Record<Lang, CopyBlock> = {
  es: {
    heroTagline: 'Premium Property Management & Luxury Living',
    heroDescription:
      'Elevating the art of refined living through bespoke property management and exceptional long-term residence solutions.',
    heroButton: 'Descubra Más',
    servicesTitle: 'Nuestros Servicios',
    differentialTitle: 'El Valor Caetano',
    ownersTitle: 'Para Propietarios',
    ownersSubtitle:
      'Convierta su propiedad en un activo de alto rendimiento con nuestra gestión exclusiva',
    ownersButton: 'Más Información',
    contactTitle: 'Contáctenos',
    contactSubtitle: 'Permítanos acompañarle en su búsqueda de la excelencia',
    contactButton: 'Enviar Solicitud',
    formName: 'Nombre',
    formEmail: 'Email',
    formPhone: 'Teléfono',
    formServicePlaceholder: 'Servicio de Interés',
    formMessage: 'Mensaje',
    footerTagline: 'Where Luxury Meets Excellence',
    services: [
      {
        icon: '🏛',
        title: 'Gestión de Propiedades',
        description:
          'Administración integral de su patrimonio inmobiliario con estándares excepcionales de calidad y atención al detalle.',
      },
      {
        icon: '🏡',
        title: 'Alquiler de Larga Estancia',
        description:
          'Residencias exclusivas para estadías prolongadas, garantizando confort y elegancia en cada momento.',
      },
      {
        icon: '💎',
        title: 'Servicios de Lujo',
        description:
          'Experiencias personalizadas que transforman su residencia en un refugio de sofisticación absoluta.',
      },
    ],
    differentialValues: [
      {
        number: '01',
        title: 'Excelencia Discreta',
        description:
          'Cada detalle pensado con la meticulosidad de quien entiende el verdadero significado del lujo.',
      },
      {
        number: '02',
        title: 'Atención Personalizada',
        description:
          'Un servicio a medida que anticipa sus necesidades y supera sus expectativas.',
      },
      {
        number: '03',
        title: 'Patrimonio Protegido',
        description:
          'Su inversión inmobiliaria en las manos más confiables del mercado premium.',
      },
    ],
    ownerBenefits: [
      {
        title: 'Valorización Constante',
        description:
          'Estrategias de gestión que maximizan el retorno de su inversión.',
      },
      {
        title: 'Inquilinos Selectos',
        description:
          'Proceso riguroso de selección garantizando residentes de prestigio.',
      },
      {
        title: 'Mantenimiento Premium',
        description:
          'Preservación impecable de su propiedad con los más altos estándares.',
      },
      {
        title: 'Tranquilidad Absoluta',
        description:
          'Gestión integral sin preocupaciones, dejando todo en nuestras manos expertas.',
      },
    ],
  },
  en: {
    heroTagline: 'Premium Property Management & Luxury Living',
    heroDescription:
      'Elevating the art of refined living through bespoke property management and exceptional long-term residence solutions.',
    heroButton: 'Discover More',
    servicesTitle: 'Our Services',
    differentialTitle: 'The Caetano Value',
    ownersTitle: 'For Owners',
    ownersSubtitle:
      'Turn your property into a high-performing asset with our exclusive management.',
    ownersButton: 'More Information',
    contactTitle: 'Contact Us',
    contactSubtitle: 'Let us accompany you in your pursuit of excellence.',
    contactButton: 'Send Request',
    formName: 'Name',
    formEmail: 'Email',
    formPhone: 'Phone',
    formServicePlaceholder: 'Service of Interest',
    formMessage: 'Message',
    footerTagline: 'Where Luxury Meets Excellence',
    services: [
      {
        icon: '🏛',
        title: 'Property Management',
        description:
          'Comprehensive administration of your real estate portfolio with exceptional standards of quality and attention to detail.',
      },
      {
        icon: '🏡',
        title: 'Long-Term Rentals',
        description:
          'Exclusive residences for extended stays, ensuring comfort and elegance at every moment.',
      },
      {
        icon: '💎',
        title: 'Luxury Services',
        description:
          'Personalised experiences that transform your residence into a true sanctuary of sophistication.',
      },
    ],
    differentialValues: [
      {
        number: '01',
        title: 'Discreet Excellence',
        description:
          'Every detail considered with the meticulousness of those who truly understand luxury.',
      },
      {
        number: '02',
        title: 'Personalised Attention',
        description:
          'A tailored service that anticipates your needs and exceeds your expectations.',
      },
      {
        number: '03',
        title: 'Protected Heritage',
        description:
          'Your real estate investment in the most trusted hands of the premium market.',
      },
    ],
    ownerBenefits: [
      {
        title: 'Constant Appreciation',
        description:
          'Management strategies that maximise the return on your investment.',
      },
      {
        title: 'Selected Tenants',
        description:
          'A rigorous selection process ensuring high-profile residents.',
      },
      {
        title: 'Premium Maintenance',
        description:
          'Impeccable preservation of your property with the highest standards.',
      },
      {
        title: 'Absolute Peace of Mind',
        description:
          'End-to-end management without concerns, leaving everything in our expert hands.',
      },
    ],
  },
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly currentYear = signal(new Date().getFullYear());
  protected readonly lang = signal<Lang>('es');

  private readonly copy = COPY;
  protected readonly texts = computed<CopyBlock>(() => this.copy[this.lang()]);

  protected readonly services = computed<Service[]>(() => this.texts().services);
  protected readonly differentialValues = computed<DifferentialValue[]>(
    () => this.texts().differentialValues,
  );
  protected readonly ownerBenefits = computed<OwnerBenefit[]>(
    () => this.texts().ownerBenefits,
  );

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }

  scrollToContact(): void {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    alert(
      this.lang() === 'es'
        ? 'Gracias por su interés. Nos pondremos en contacto con usted en breve.'
        : 'Thank you for your interest. We will contact you shortly.',
    );
  }
}