import { Component, computed, signal } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Header } from './components/header/header'
import esCopy from '../assets/i18n/es.json'
import enCopy from '../assets/i18n/en.json'
import deCopy from '../assets/i18n/de.json'
import frCopy from '../assets/i18n/fr.json'

type Lang = 'es' | 'en' | 'de' | 'fr'

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
  es: esCopy as CopyBlock,
  en: enCopy as CopyBlock,
  de: deCopy as CopyBlock,
  fr: frCopy as CopyBlock
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
    const currentLang = this.lang()

    let invalidPhoneMessage = ''
    let successMessage = ''

    if (currentLang === 'es') {
      invalidPhoneMessage = 'Introduzca un número de teléfono válido para el país seleccionado.'
      successMessage = 'Gracias por su interés. Nos pondremos en contacto con usted en breve.'
    } else if (currentLang === 'de') {
      invalidPhoneMessage = 'Bitte geben Sie eine gültige Telefonnummer für das ausgewählte Land ein.'
      successMessage = 'Vielen Dank für Ihr Interesse. Wir werden Sie in Kürze kontaktieren.'
    } else if (currentLang === 'fr') {
      invalidPhoneMessage = 'Veuillez saisir un numéro de téléphone valide pour le pays sélectionné.'
      successMessage = 'Merci pour votre intérêt. Nous vous contacterons prochainement.'
    } else {
      invalidPhoneMessage = 'Please enter a valid phone number for the selected country.'
      successMessage = 'Thank you for your interest. We will contact you shortly.'
    }

    if (!isValidPhone) {
      alert(invalidPhoneMessage)
      return
    }

    alert(successMessage)
  }

  private validatePhone(country: string, phone: string): boolean {
    if (!country || !phone) return false

    if (country === 'es') {
      return /^\d{9}$/.test(phone)
    }

    if (country === 'us') {
      return /^\d{10}$/.test(phone)
    }

    if (country === 'de') {
      return /^\d{10,11}$/.test(phone)
    }

    if (country === 'fr') {
      return /^\d{9,10}$/.test(phone)
    }

    return false
  }
}