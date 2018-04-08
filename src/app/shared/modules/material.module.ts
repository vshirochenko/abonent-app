import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    exports: [
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule
    ]
})
export class MaterialModule {

}
