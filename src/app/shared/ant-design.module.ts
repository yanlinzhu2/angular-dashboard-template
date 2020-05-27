import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NZ_I18N, en_US } from 'ng-zorro-antd';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [
      NzLayoutModule,
      NzMenuModule,
      NzButtonModule,
      NzIconModule,
      NzFormModule,
      NzInputModule,
      NzAvatarModule,
      NzMessageModule,
      NzCheckboxModule,
      NzCardModule
    ],
    providers: [{ provide: NZ_I18N, useValue: en_US }],
})

export class SharedAntDesignModule {}
