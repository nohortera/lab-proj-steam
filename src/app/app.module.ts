import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { GamesComponent } from './components/games/games.component';
import { LibraryComponent } from './components/library/library.component';
import { FriendsComponent } from './components/friends/friends.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GameCardComponent } from './shared/components/game-card/game-card.component';
import { FormComponent } from './shared/components/form/form.component';
import { LabelComponent } from './shared/components/label/label.component';
import { FieldTextComponent } from './shared/components/field-text/field-text.component';
import { FieldTextLabeledComponent } from './shared/components/field-text-labeled/field-text-labeled.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { SearchFormComponent } from './shared/components/search-form/search-form.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GamesComponent,
    LibraryComponent,
    FriendsComponent,
    ProfileComponent,
    GameCardComponent,
    FormComponent,
    LabelComponent,
    FieldTextComponent,
    FieldTextLabeledComponent,
    ButtonComponent,
    SearchFormComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
