import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { WhySectionComponent } from './components/why-section/why-section.component';
import { ArticlesSectionComponent } from './components/articles-section/articles-section.component';
import { ButtonComponent } from './components/button/button.component';
import { ArticleCardComponent } from './components/articles-section/article-card/article-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeSectionComponent,
    WhySectionComponent,
    ArticlesSectionComponent,
    ButtonComponent,
    ArticleCardComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
