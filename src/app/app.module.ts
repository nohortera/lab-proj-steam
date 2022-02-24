import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
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
import { FilterBlockComponent } from './shared/components/filter-block/filter-block.component';
import { FieldRangeComponent } from './shared/components/field-range/field-range.component';
import { FieldRangeLabeledComponent } from './shared/components/field-range-labeled/field-range-labeled.component';
import { FieldCheckboxComponent } from './shared/components/field-checkbox/field-checkbox.component';


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
    FilterComponent,
    FilterBlockComponent,
    FieldRangeComponent,
    FieldRangeLabeledComponent,
    FieldCheckboxComponent
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
