// src/app/components/header/header.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

type Lang = 'es' | 'en';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Input() lang: Lang = 'es';
  @Output() langChange = new EventEmitter<Lang>();

  setLang(lang: Lang): void {
    if (this.lang !== lang) {
      this.langChange.emit(lang);
    }
  }
}