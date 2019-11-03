import { LayoutDefaultComponent } from './default.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderSearchComponent } from './header/components/search.component';
import { HeaderNotifyComponent } from './header/components/notify.component';
import { HeaderTaskComponent } from './header/components/task.component';
import { HeaderIconComponent } from './header/components/icon.component';
import { HeaderFullScreenComponent } from './header/components/fullscreen.component';
import { HeaderStorageComponent } from './header/components/storage.component';
import { HeaderUserComponent } from './header/components/user.component';

import { SettingDrawerComponent } from './setting-drawer/setting-drawer.component';
import { SettingDrawerItemComponent } from './setting-drawer/setting-drawer-item.component';


export const ENTRY_COMPONENTS = [
  SettingDrawerComponent, SettingDrawerItemComponent
];

export const SHARED_COMPONENTS = [
];

export const DEFAULT_COMPONENTS = [
  LayoutDefaultComponent,
  HeaderComponent,
  SidebarComponent,
  ...ENTRY_COMPONENTS,
  ...SHARED_COMPONENTS
];

export const HEADER_COMPONENTS = [
  HeaderSearchComponent,
  HeaderNotifyComponent,
  HeaderTaskComponent,
  HeaderIconComponent,
  HeaderFullScreenComponent,
  HeaderStorageComponent,
  HeaderUserComponent
];

