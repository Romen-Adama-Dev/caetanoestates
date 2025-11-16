import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';

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

@Component({
  selector: 'app-root',
  imports: [CommonModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly currentYear = signal(new Date().getFullYear());

  protected readonly services = signal<Service[]>([
    {
      icon: '🏛',
      title: 'Gestión de Propiedades',
      description: 'Administración integral de su patrimonio inmobiliario con estándares excepcionales de calidad y atención al detalle.'
    },
    {
      icon: '🏡',
      title: 'Alquiler de Larga Estancia',
      description: 'Residencias exclusivas para estadías prolongadas, garantizando confort y elegancia en cada momento.'
    },
    {
      icon: '💎',
      title: 'Servicios de Lujo',
      description: 'Experiencias personalizadas que transforman su residencia en un refugio de sofisticación absoluta.'
    }
  ]);

  protected readonly differentialValues = signal<DifferentialValue[]>([
    {
      number: '01',
      title: 'Excelencia Discreta',
      description: 'Cada detalle pensado con la meticulosidad de quien entiende el verdadero significado del lujo.'
    },
    {
      number: '02',
      title: 'Atención Personalizada',
      description: 'Un servicio a medida que anticipa sus necesidades y supera sus expectativas.'
    },
    {
      number: '03',
      title: 'Patrimonio Protegido',
      description: 'Su inversión inmobiliaria en las manos más confiables del mercado premium.'
    }
  ]);

  protected readonly ownerBenefits = signal<OwnerBenefit[]>([
    {
      title: 'Valorización Constante',
      description: 'Estrategias de gestión que maximizan el retorno de su inversión.'
    },
    {
      title: 'Inquilinos Selectos',
      description: 'Proceso riguroso de selección garantizando residentes de prestigio.'
    },
    {
      title: 'Mantenimiento Premium',
      description: 'Preservación impecable de su propiedad con los más altos estándares.'
    },
    {
      title: 'Tranquilidad Absoluta',
      description: 'Gestión integral sin preocupaciones, dejando todo en nuestras manos expertas.'
    }
  ]);

  scrollToContact(): void {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    // Form submission logic would go here
    alert('Gracias por su interés. Nos pondremos en contacto con usted en breve.');
  }
}
