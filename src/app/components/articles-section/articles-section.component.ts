import { Component, OnInit } from '@angular/core';
import { Article } from './articles-section.types';

@Component({
  selector: 'app-articles-section',
  templateUrl: './articles-section.component.html',
  styleUrls: ['./articles-section.component.css'],
})
export class ArticlesSectionComponent implements OnInit {
  articles: Article[] = [
    {
      author: 'Clare Robinson',
      title: 'Receive money in any currency with no fees',
      description:
        "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
      cover: '../../../assets/images/image-currency.jpg',
    },
    {
      author: 'Wilson Hutton',
      title: 'Treat yourself without worrying about money',
      description:
        'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...',
      cover: '../../../assets/images/image-restaurant.jpg',
    },
    {
      author: 'Wilson Hutton',
      title: 'Take your Easybank card wherever you go',
      description:
        "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. WWe'll even show you...",
      cover: '../../../assets/images/image-plane.jpg',
    },
    {
      author: 'Clare Robinson',
      title: 'Our invite-only Beta accounts are now live!',
      description:
        "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...",
      cover: '../../../assets/images/image-confetti.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
