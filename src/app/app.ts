import { Component, computed, signal } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Header } from './components/header/header'

type Lang = 'es' | 'en'

interface Service {
  icon: string
  title: string
  description: string
}

interface DifferentialValue {
  number: string
  title: string
  description: string
}

interface OwnerBenefit {
  title: string
  description: string
}

interface CopyBlock {
  heroTagline: string
  heroDescription: string
  heroButton: string
  servicesTitle: string
  differentialTitle: string
  ownersTitle: string
  ownersSubtitle: string
  ownersButton: string
  contactTitle: string
  contactSubtitle: string
  contactButton: string
  formName: string
  formEmail: string
  formPhone: string
  formServicePlaceholder: string
  formMessage: string
  footerTagline: string
  services: Service[]
  differentialValues: DifferentialValue[]
  ownerBenefits: OwnerBenefit[]
}

const COPY: Record<Lang, CopyBlock> = {
  es: {
    heroTagline: 'Gestión premium de propiedades y estilo de vida',
    heroDescription:
      'Elevamos el concepto de vivir bien con una gestión a medida de su patrimonio y residencias de larga duración con auténtico sello boutique.',
    heroButton: 'Descubrir más',
    servicesTitle: 'Nuestros servicios',
    differentialTitle: 'El valor Caetano',
    ownersTitle: 'Para propietarios',
    ownersSubtitle:
      'Transforme su vivienda en un activo de alto rendimiento con una gestión discreta, segura y exquisitamente cuidada.',
    ownersButton: 'Más información',
    contactTitle: 'Contáctenos',
    contactSubtitle: 'Permítanos acompañarle en la búsqueda de la mejor versión de su propiedad.',
    contactButton: 'Enviar solicitud',
    formName: 'Nombre',
    formEmail: 'Correo electrónico',
    formPhone: 'Teléfono',
    formServicePlaceholder: 'Servicio de interés',
    formMessage: 'Mensaje',
    footerTagline: 'Donde el lujo se encuentra con la excelencia',
    services: [
      {
        icon: '🏛',
        title: 'Gestión de propiedades',
        description:
          'Administración integral de su patrimonio inmobiliario con estándares excepcionales de calidad y atención al detalle.'
      },
      {
        icon: '🏡',
        title: 'Alquiler de larga estancia',
        description:
          'Residencias seleccionadas para estancias prolongadas, garantizando confort, privacidad y elegancia en el día a día.'
      },
      {
        icon: '💎',
        title: 'Servicios de lujo',
        description:
          'Experiencias personalizadas que convierten cada vivienda en un refugio de sofisticación y bienestar.'
      }
    ],
    differentialValues: [
      {
        number: '01',
        title: 'Excelencia discreta',
        description:
          'Cada decisión y cada detalle se cuidan con la meticulosidad de quien entiende el verdadero significado del lujo.'
      },
      {
        number: '02',
        title: 'Atención personalizada',
        description:
          'Un servicio a medida que se adelanta a sus necesidades y cuida de su tiempo, su inversión y su tranquilidad.'
      },
      {
        number: '03',
        title: 'Patrimonio protegido',
        description:
          'Su inversión inmobiliaria en manos de un partner de confianza especializado en el segmento premium.'
      }
    ],
    ownerBenefits: [
      {
      title: 'Gestión integral del día a día',
      description:
        'Nos encargamos de la relación con el inquilino, cobros, incidencias y coordinación de servicios, con modelo de cuota o comisión según su preferencia.'
    },
    {
      title: 'Peace of Mind semanal',
      description:
        'Supervisión periódica de la vivienda, fotos actualizadas y reporte directo por WhatsApp para que sepa en todo momento cómo está su propiedad.'
    },
    {
      title: 'Automatización y reportes',
      description:
        'Procesos optimizados (check-in, limpieza, avisos, recordatorios) y reportes claros para que pueda revisar resultados sin perder tiempo.'
    },
    {
      title: 'Inquilinos internacionales filtrados',
      description:
        'Perfiles solventes y verificados, con especial foco en inquilinos extranjeros de larga estancia que cuiden la vivienda como propia.'
    },
    {
      title: 'Servicios de lujo para su propiedad',
      description:
        'Limpieza premium, control de consumos y mantenimiento coordinado para asegurar que la vivienda mantenga siempre un nivel impecable.'
    },
    {
      title: 'Transparencia y control total',
      description:
        'Usted decide el nivel de implicación: nosotros gestionamos, usted conserva la última palabra y visibilidad completa sobre su activo.'
    }
    ]
  },
  en: {
    heroTagline: 'Premium Property Management & Luxury Living',
    heroDescription:
      'Elevating the art of refined living through bespoke property management and exceptional long-term residence solutions.',
    heroButton: 'Discover more',
    servicesTitle: 'Our services',
    differentialTitle: 'The Caetano value',
    ownersTitle: 'For owners',
    ownersSubtitle:
      'Turn your property into a high-performing asset with our exclusive and discreet management.',
    ownersButton: 'More information',
    contactTitle: 'Contact us',
    contactSubtitle: 'Let us accompany you in your pursuit of excellence.',
    contactButton: 'Send request',
    formName: 'Name',
    formEmail: 'Email',
    formPhone: 'Phone',
    formServicePlaceholder: 'Service of interest',
    formMessage: 'Message',
    footerTagline: 'Where luxury meets excellence',
    services: [
      {
        icon: '🏛',
        title: 'Property management',
        description:
          'Comprehensive administration of your real estate portfolio with exceptional standards of quality and attention to detail.'
      },
      {
        icon: '🏡',
        title: 'Long-term rentals',
        description:
          'Exclusive residences for extended stays, ensuring comfort, privacy and elegance at every moment.'
      },
      {
        icon: '💎',
        title: 'Luxury services',
        description:
          'Personalised experiences that transform your residence into a true sanctuary of sophistication and wellbeing.'
      }
    ],
    differentialValues: [
      {
        number: '01',
        title: 'Discreet excellence',
        description:
          'Every detail considered with the meticulousness of those who truly understand what luxury means.'
      },
      {
        number: '02',
        title: 'Personalised attention',
        description:
          'A tailored service that anticipates your needs and takes care of your time, your investment and your peace of mind.'
      },
      {
        number: '03',
        title: 'Protected heritage',
        description:
          'Your real estate investment in the most trusted hands of the premium market.'
      }
    ],
    ownerBenefits: [
      {
      title: 'Full day-to-day management',
      description:
        'We handle tenant relations, payments, issues and service coordination, with either a monthly fee or commission model to suit your needs.'
    },
    {
      title: 'Weekly Peace of Mind',
      description:
        'Regular inspections of the property, updated photos and a direct WhatsApp report so you always know how your home is doing.'
    },
    {
      title: 'Automation and reporting',
      description:
        'Optimised workflows (check-in, cleaning, notifications, reminders) and clear reports so you can review results without wasting time.'
    },
    {
      title: 'Screened international tenants',
      description:
        'Carefully filtered and solvent profiles, with a special focus on long-stay international tenants who treat the property as their own.'
    },
    {
      title: 'Luxury services for your property',
      description:
        'Premium cleaning, utilities monitoring and coordinated maintenance to ensure your property always maintains an exceptional level of quality.'
    },
    {
      title: 'Transparency and full control',
      description:
        'You decide how involved you want to be: we manage the details, you keep full visibility and the final say over your asset.'
    }
    ]
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly currentYear = signal(new Date().getFullYear())
  protected readonly lang = signal<Lang>('es')

  private readonly copy = COPY
  protected readonly texts = computed<CopyBlock>(() => this.copy[this.lang()])

  protected readonly services = computed<Service[]>(() => this.texts().services)
  protected readonly differentialValues = computed<DifferentialValue[]>(
    () => this.texts().differentialValues
  )
  protected readonly ownerBenefits = computed<OwnerBenefit[]>(
    () => this.texts().ownerBenefits
  )

  setLang(lang: Lang): void {
    this.lang.set(lang)
  }

  scrollToContact(): void {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  onSubmit(event: Event): void {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const data = new FormData(form)

    const country = (data.get('phoneCountry') as string | null) ?? ''
    const phoneRaw = ((data.get('phone') as string | null) ?? '').replaceAll(/\s+/g, '')

    const isValidPhone = this.validatePhone(country, phoneRaw)

    if (!isValidPhone) {
      alert(
        this.lang() === 'es'
          ? 'Introduzca un número de teléfono válido para el país seleccionado.'
          : 'Please enter a valid phone number for the selected country.'
      )
      return
    }

    alert(
      this.lang() === 'es'
        ? 'Gracias por su interés. Nos pondremos en contacto con usted en breve.'
        : 'Thank you for your interest. We will contact you shortly.'
    )
  }

  private validatePhone(country: string, phone: string): boolean {
    if (!country || !phone) return false

    if (country === 'es') {
      return /^\d{9}$/.test(phone)
    }

    if (country === 'us') {
      return /^\d{10}$/.test(phone)
    }

    return false
  }
}