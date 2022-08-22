import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-section',
  templateUrl: './why-section.component.html',
  styleUrls: ['./why-section.component.css'],
})
export class WhySectionComponent implements OnInit {
  features: Feature[] = [
    {
      icon: '../../../assets/images/icon-online.svg',
      name: 'Online Banking',
      description:
        'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world',
    },
    {
      icon: '../../../assets/images/icon-budgeting.svg',
      name: 'Simple Budgeting',
      description:
        "See exactly where your money goes each month. Receive notifications when your're close to hitting your limits",
    },
    {
      icon: '../../../assets/images/icon-onboarding.svg',
      name: 'Fast Onboarding',
      description:
        "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      icon: '../../../assets/images/icon-api.svg',
      name: 'Open API',
      description:
        'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

interface Feature {
  icon: string;
  name: string;
  description: string;
}
