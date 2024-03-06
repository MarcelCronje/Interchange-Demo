import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SplashScreenPageComponent } from './splash-screen-page/splash-screen-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NewsfeedPageComponent } from './newsfeed-page/newsfeed-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { MapViewPageComponent } from './map-view-page/map-view-page.component';
import { MapListViewPageComponent } from './map-list-view-page/map-list-view-page.component';
import { InterChancePageComponent } from './inter-chance-page/inter-chance-page.component';
import { OrderCurrenciesOnlinePageComponent } from './order-currencies-online-page/order-currencies-online-page.component';
import { RefererPageComponent } from './referer-page/referer-page.component';
import { WesternUnionPageComponent } from './western-union-page/western-union-page.component';
import { CurrencyBuybackPageComponent } from './currency-buyback-page/currency-buyback-page.component';
import { OrangeHolidayEuropePageComponent } from './orange-holiday-europe-page/orange-holiday-europe-page.component';
import { ThemaAficainPageComponent } from './thema-aficain-page/thema-aficain-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent }, // Define the home route
  { path: 'services', component: ServicesPageComponent },
  { path: 'orderCurrencies', component: OrderCurrenciesOnlinePageComponent },
  { path: 'currencyBuyback', component: CurrencyBuybackPageComponent },
  { path: 'orangeHolidayEurope', component: OrangeHolidayEuropePageComponent },
  { path: 'themaAficain', component: ThemaAficainPageComponent },
  { path: 'westernUnion', component: WesternUnionPageComponent },
  { path: 'referer', component: RefererPageComponent },
  { path: 'interChance', component: InterChancePageComponent },
  { path: 'mapListView', component: MapListViewPageComponent },
  { path: 'mapView', component: MapViewPageComponent },
  { path: 'newsfeed', component: NewsfeedPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'splashScreen', component: SplashScreenPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
