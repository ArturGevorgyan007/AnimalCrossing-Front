import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { GetAUsersItemsComponent } from './get-a-users-items/get-a-users-items.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { GetMarketplaceItemsComponent } from './get-marketplace-items/get-marketplace-items.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BuyItemComponent } from './buy-item/buy-item.component';
import { AllItemsComponent } from './all-items/all-items.component';
import { SellItemComponent } from './sell-item/sell-item.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    GetAUsersItemsComponent,
    HomePageComponent,
    NavigationBarComponent,
    GetMarketplaceItemsComponent,
    UserProfileComponent,
    BuyItemComponent,
    AllItemsComponent,
    SellItemComponent,
    LeaderboardComponent
  ],
  exports:[
    NavigationBarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
