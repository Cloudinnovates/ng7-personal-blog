import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatButtonModule, MatIconModule, MatChipsModule  } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperienceSearchPipe } from './experience-search.pipe';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    MenuBarComponent,
    MenuItemComponent,
    PortfolioComponent,
    ExperienceSearchPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    FlexLayoutModule,
    NgCircleProgressModule.forRoot({
      radius: 88,
      space: -5,
      toFixed: 0,
      unitsColor: '#000000',
      outerStrokeWidth: 5,
      outerStrokeColor: '#292a2b',
      outerStrokeLinecap: 'round',
      innerStrokeColor: '#339fff',
      innerStrokeWidth: 5,
      title: '3.88 GPA',
      titleColor: '#292a2b',
      titleFontSize: '35',
      animateTitle: false,
      animationDuration: 1000,
      showSubtitle: false,
      showUnits: false
    }),
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
