import { Component, OnInit } from '@angular/core';
import { CompanyInfo } from './interfaces/company-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  insuranceCompanies: (CompanyInfo & { showInfo: boolean })[] = [];

  ngOnInit(): void {
    this.insuranceCompanies = [
      {
        logo: '../assets/img/logo-sc.jpg',
        name: 'San Cristóbal',
        towingPhone: '0810-444-0100',
        automotivePhone: 'CABA/GBA: 4521-8401 // 4524-1812 // 02 Resto del país 0341-4202000',
        text: 'Te brindamos la información de contacto para que gestiones tu caso.',
        automotiveText:'Automotor',
        towingText:'Servicio de Remolque',
        showInfo: false
      },
      {
        logo: '../assets/img/Logo-Sancor-Seguros-2.png',
        name: 'Sancor',
        towingPhone: '0800-333-2766',
        automotivePhone: '0800-777-4643',
        text: 'Te brindamos la información de contacto para que gestiones tu caso.',
        automotiveText:'Automotor',
        towingText:'Servicio de Remolque',
        showInfo: false
      },
      {
        logo: '../assets/img/allianz-logo-0-2048x2048-1.png',
        name: 'Allianz',
        towingPhone: '0800-888-24324',
        automotivePhone: '00810-222-2243',
        text: 'Te brindamos la información de contacto para que gestiones tu caso.',
        automotiveText:'Automotor',
        towingText:'Servicio de Remolque',
        showInfo: false
      },
      {
        logo: '../assets/img/logo-la-caja.png',
        name: 'La Caja',
        towingPhone: '0810-888-2894',
        automotivePhone: '0810-888-0810',
        text: 'Te brindamos la información de contacto para que gestiones tu caso.',
        automotiveText:'Automotor',
        towingText:'Servicio de Remolque',
        showInfo: false
      },
      {
        logo: '../assets/img/logo-triunfo.jpg',
        name: 'Triunfo',
        towingPhone: '0810-666-0302',
        automotivePhone: '0810-666-0302',
        text: 'Te brindamos la información de contacto para que gestiones tu caso.',
        automotiveText:'Automotor',
        towingText:'Servicio de Remolque',
        showInfo: false
      },
      {
        logo: '../assets/img/logo-mapfre.jpg',
        name: 'Mapfre',
        towingPhone: '0810-666-7424',
        automotivePhone: '0810-666-7424',
        text: 'Te brindamos la información de contacto para que gestiones tu caso.',
        automotiveText:'Automotor',
        towingText:'Servicio de Remolque',
        showInfo: false
      },
      {
        logo: '../assets/img/logo-zurich.png',
        name: 'Zurich',
        towingPhone: '800 123 4567',
        automotivePhone: '800 765 4321',
        text: 'Te brindamos la información de contacto para que gestiones tu caso.',
        automotiveText:'Automotor',
        towingText:'Servicio de Remolque',
        showInfo: false
      },
    ];
  }

  toggleCard(company: any) {
    company.showInfo = !company.showInfo;
  }
}
