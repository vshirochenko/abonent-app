import { MaterialModule } from './material.module';
import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
    imports: [MaterialModule],
    exports: [MaterialModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}
