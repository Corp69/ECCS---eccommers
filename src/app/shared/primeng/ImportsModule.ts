import { TooltipModule } from 'primeng/tooltip';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { FluidModule } from 'primeng/fluid';
import { SelectModule } from 'primeng/select';
import { BlockUIModule } from 'primeng/blockui';
import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { MessageModule } from 'primeng/message';
import { CardModule } from 'primeng/card';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { ChartModule } from 'primeng/chart';
import { PasswordModule } from 'primeng/password';
import { DatePickerModule } from 'primeng/datepicker';
import { MenubarModule } from 'primeng/menubar';
import { ProgressBarModule } from 'primeng/progressbar';
import { SidebarModule } from 'primeng/sidebar';
import { DrawerModule } from 'primeng/drawer';
import { PickListModule } from 'primeng/picklist';
import { CalendarModule } from 'primeng/calendar';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  imports: [
     //prime ng
     TabViewModule,
     CheckboxModule,
     ToggleButtonModule,
     ToggleSwitchModule,
     IconFieldModule, 
     InputIconModule ,
     TagModule,
     PickListModule,
     SidebarModule ,
     DrawerModule ,
      BlockUIModule,
      FluidModule,
      TooltipModule,
      DividerModule,
      ButtonModule,
      SelectModule,
      InputTextModule,
      InputNumberModule,
      ProgressSpinnerModule,
      ToastModule,
      AvatarModule,
      AvatarGroupModule,
      DialogModule,
      ConfirmDialogModule,
      TableModule,
      MessageModule,
      CardModule,
      OrganizationChartModule,
      AccordionModule,
      PanelModule,
      ChartModule,
      PasswordModule,
      DatePickerModule,
      MenubarModule,
      ProgressBarModule,
      CalendarModule,
      KeyFilterModule

  ],
  exports: [
    TabViewModule,
    CheckboxModule,
    ToggleButtonModule,
    ToggleSwitchModule,
    IconFieldModule, 
     InputIconModule ,
    //prime ng
    TagModule,
    KeyFilterModule ,
    PickListModule,
    SidebarModule ,
    DrawerModule ,
    BlockUIModule,
    FluidModule,
    TooltipModule,
    DividerModule,
    ButtonModule,
    SelectModule,
    InputTextModule,
    InputNumberModule,
    ProgressSpinnerModule,
    ToastModule,
    AvatarModule,
    AvatarGroupModule,
    ConfirmDialogModule,
    DialogModule,
    TableModule,
    MessageModule,
    CardModule,
    OrganizationChartModule,
    AccordionModule,
    PanelModule,
    ChartModule,
    PasswordModule,
    DatePickerModule,
    MenubarModule,
    ProgressBarModule,
    CalendarModule,
  ],
  providers: [  ]
})
export default class ImportsModule {}
