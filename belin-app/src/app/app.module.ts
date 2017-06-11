import { BrowserModule           } from '@angular/platform-browser';
import { NgModule                } from '@angular/core';
import { FormsModule             } from '@angular/forms';
import { HttpModule              } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import { AppRoutingModule     } from './app-routing/app-routing.module';
import { AppComponent         } from './app.component';
import { HeaderComponent      } from './header/header.component';
import { FooterComponent      } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ChangeLogComponent   } from './change-log/change-log.component';
import { PageComponent        } from './page/page.component';
import { AboutComponent       } from './about/about.component';
import { CreditsComponent     } from './credits/credits.component';
import { SectionComponent     } from './section/section.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    ChangeLogComponent,
    PageComponent,
    AboutComponent,
    CreditsComponent,
    SectionComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
