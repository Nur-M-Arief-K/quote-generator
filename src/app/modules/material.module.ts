import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
    imports: [MatButtonModule, MatIconModule, MatSnackBarModule],
    exports: [MatButtonModule, MatIconModule, MatSnackBarModule]
})
export class MaterialModule {}