import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MemoriesParentComponent } from './pages/memories-parent/memories-parent.component';
import { MemoriesChildComponent } from './pages/memories-parent/memories-child/memories-child.component';


@NgModule({
    declarations: [
        MemoriesParentComponent,
        MemoriesChildComponent
    ],
    imports: [
        FormsModule
    ],
    exports: []
})
export class MemoriesModule { }
