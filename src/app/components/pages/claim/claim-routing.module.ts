import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClaimComponent } from './claim.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ClaimComponent},
    ])],
    exports: [RouterModule]
})
export class ClaimRoutingModule { }
