import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { LayoutFullScreenComponent } from './fullscreen/fullscreen.component';
import { DEFAULT_COMPONENTS, HEADER_COMPONENTS, ENTRY_COMPONENTS, SHARED_COMPONENTS} from './default';

// passport
import { LayoutPassportComponent } from './passport/passport.component';
const PASSPORT = [
  LayoutPassportComponent
];

@NgModule({
  imports: [SharedModule],
  entryComponents: ENTRY_COMPONENTS,
  declarations: [
    ...DEFAULT_COMPONENTS,
    ...HEADER_COMPONENTS,
    ...PASSPORT
  ],
  exports: [
    ...DEFAULT_COMPONENTS,
    ...PASSPORT
  ]
})
export class LayoutModule { }
