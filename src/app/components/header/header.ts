import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'

type Lang = 'es' | 'en' | 'de' | 'fr'

interface LanguageOption {
  code: Lang
  label: string
  flag: string
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Input() lang: Lang = 'es'
  @Output() langChange = new EventEmitter<Lang>()

  protected isMenuOpen = false

  protected readonly languages: LanguageOption[] = [
    { code: 'es', label: 'ES', flag: '🇪🇸' },
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'de', label: 'DE', flag: '🇩🇪' },
    { code: 'fr', label: 'FR', flag: '🇫🇷' }
  ]

  get currentLanguage(): LanguageOption {
    return this.languages.find(l => l.code === this.lang) ?? this.languages[0]
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen
  }

  selectLang(lang: Lang): void {
    if (this.lang === lang) {
      this.isMenuOpen = false
      return
    }

    this.langChange.emit(lang)
    this.isMenuOpen = false
  }
}