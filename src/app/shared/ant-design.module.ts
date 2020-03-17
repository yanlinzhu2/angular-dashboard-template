import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [NgZorroAntdModule],
    providers: [{ provide: NZ_I18N, useValue: en_US }],
})

export class SharedAntDesignModule {}