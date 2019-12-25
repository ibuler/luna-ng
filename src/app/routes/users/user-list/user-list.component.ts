import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-users-user-list',
  templateUrl: './user-list.component.html',
})
export class UsersUserListComponent implements OnInit {
  url = `/api/v1/users/users/`;
  filterNZSpan = 6;
  filterNZOffset = 12;
  filterCondition = [
    {title: '姓名: 广宏伟', keyTitle: '姓名', key: 'name', valueTitle: "广宏伟", value: "广宏伟", type: "string"},
    {title: '角色: 管理员', keyTitle: '姓名', key: 'name', valueTitle: "广宏伟", value: "广宏伟", type: "string"},
  ];

  @ViewChild('st', { static: false }) st: STComponent;
  columns: STColumn[] = [
    { title: '', type: "checkbox" },
    { title: '名称', index: 'name' },
    { title: '用户名', index: 'username' },
    { title: '角色', index: 'role_display',
      filter: {
        menus: [{ text: '管理员', value: 'Admin' }, { text: '用户', value: 'User' }],
        fn: (filter: any, record: any) => {
          return record.role === filter.value;
        },
        multiple: false,
        key: 'role',
      },
    },
    { title: '用户组', index: 'groups' },
    { title: { text: '用户来源', optional: '（单位：元）', optionalHelp: '计算公式=订单金额 * 0.6%' }, index: 'source', },
    { title: '有效', index: 'is_valid' },
    {
      title: '动作',
      buttons: [
        { text: '查看', click: (item: any) => `/form/${item.id}` },
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper) { }

  ngOnInit() { }

  add() {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }

  removeCondition(i) {
    this.filterCondition.splice(i, 1)
  }

}
