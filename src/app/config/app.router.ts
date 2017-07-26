import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: 'user', loadChildren: 'user/config/user.module#UserModule' }
];

export const AppRoutes = RouterModule.forRoot(routes);

