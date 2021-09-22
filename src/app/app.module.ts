import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login/login.component';
import { HomeComponent } from './Components/home/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './Components/loginForm/login-form/login-form.component';
import { SignUpFormComponent } from './Components/SignUpFrom/sign-up-form/sign-up-form.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './Components/footer/footer.component';
import { DisplayBooksComponent } from './Components/display-books/display-books.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BookSearchPipe } from './Pipes/book-search.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { BookContentComponent } from './Components/book-content/book-content.component';
import { MatMenuModule } from '@angular/material/menu';
import { InterceptorService } from './Services/interceptor/interceptor.service';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { FormsModule } from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LoginFormComponent,
    SignUpFormComponent,
    NavBarComponent,
    FooterComponent,
    DisplayBooksComponent,
    BookSearchPipe,
    BookContentComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDialogModule,
    MatMenuModule,
    NgxPaginationModule,
    FormsModule,
    MatBadgeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
