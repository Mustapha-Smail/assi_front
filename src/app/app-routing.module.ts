import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CleUsbComponent } from './cle-usb/cle-usb.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DisqueDurComponent } from './disque-dur/disque-dur.component';
import { HomeComponent } from './home/home.component';
import { PcAccessoiresComponent } from './pc-accessoires/pc-accessoires.component';
import { PcBureauComponent } from './pc-bureau/pc-bureau.component';
import { PcPortableComponent } from './pc-portable/pc-portable.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { StockageAccessoiresComponent } from './stockage-accessoires/stockage-accessoires.component';
import { TelAccessoiresComponent } from './tel-accessoires/tel-accessoires.component';
import { TelFixeComponent } from './tel-fixe/tel-fixe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'PcPortable', component: PcPortableComponent },
  { path: 'PcBureau', component: PcBureauComponent },
  { path: 'PcAccessoires', component: PcAccessoiresComponent },
  { path: 'smartphone', component: SmartphoneComponent },
  { path: 'tel-fixe', component: TelFixeComponent },
  { path: 'tel-accessoires', component: TelAccessoiresComponent },
  { path: 'disque-dur', component: DisqueDurComponent },
  { path: 'cle-usb', component: CleUsbComponent },
  { path: 'stockage-accessoires', component: StockageAccessoiresComponent },
  { path: 'Connexion', component: ConnexionComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
