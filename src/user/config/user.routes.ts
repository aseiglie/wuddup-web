import { ViewComponent } from './../view/view.component';
import { EditComponent } from './../edit/edit.component';
import { UserComponent } from './../user.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '', component: UserComponent,
        children: [
            { path: '', redirectTo: 'edit', pathMatch: 'full' },
            { path: 'edit', component: EditComponent },
            { path: 'view', component: ViewComponent }
        ]
    }
];

export const UserRoutes = RouterModule.forChild(routes);
