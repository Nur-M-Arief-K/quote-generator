import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [MatButtonModule, MatIconModule, MatSnackBarModule, MatFormFieldModule, MatInputModule],
    exports: [MatButtonModule, MatIconModule, MatSnackBarModule, MatFormFieldModule, MatInputModule]
})
export class MaterialModule {}