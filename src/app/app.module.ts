import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from'@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from './views/home/header/header.component';
import { NavComponent } from './views/home/nav/nav.component';
import { ListComponent } from './views/home/list/list.component';
import { FooterComponent } from './views/home/footer/footer.component';
import { HomeComponent } from './wviews/home/home.component';
import { SistemaComponent } from './wviews/sistema/sistema.component';
import { SistemaCreateComponent } from './views/sistema/sistema-create/sistema-create.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from'@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import { HistoricoPesquisarComponent } from './views/sistema/historico-pesquisar/historico-pesquisar.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    SistemaComponent,
    SistemaCreateComponent,
    HistoricoPesquisarComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
