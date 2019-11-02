import { MockRequest } from '@delon/mock';

const list: any[] = [];
const total = 50;
const initialId = 'bac02483-ce49-4895-a634-3b1fad80df';

function padNumber(num, fill) {
  //改自：http://blog.csdn.net/aimingoo/article/details/4492592
  var len = ('' + num).length;
  return (Array(
    fill > len ? fill - len + 1 || 0 : 0
  ).join('0') + num);
}

for (let i = 0; i < total; i += 1) {
  var ii = padNumber(i, 2);
  const id = initialId + ii;
  list.push({
    id: id,
    avatar_url: "/asset/img/avatar/admin.png",
    can_delete: false,
    can_update: true,
    comment: "",
    created_by: "",
    date_expired: "2089-10-10 22:53:39 +0800",
    date_password_last_updated: "2019-10-28 22:53:40 +0800",
    email: "admin@mycomany.com",
    groups: ["4a17d31e-eada-4866-b686-33fe9cb28246"],
    groups_display: "Default",
    is_active: true,
    is_expired: false,
    is_first_login: false,
    is_valid: true,
    name: "Administrator",
    otp_level: 0,
    phone: null,
    role: ["Admin", "User"][i%2],
    role_display: ["管理员", "用户"][i%2],
    source: "local",
    source_display: "Local",
    username: "admin",
    wechat: ""
  });
}

function genData(params: any) {
  let ret = [...list];
  const pi = +params.pi;
  const ps = +params.ps;
  const start = (pi - 1) * ps;

  if (params.no) {
    ret = ret.filter(data => data.no.indexOf(params.no) > -1);
  }

  return { total: ret.length, list: ret.slice(start, ps * pi) };
}

function saveData(id: number, value: any) {
  const item = list.find(w => w.id === id);
  if (!item) return { msg: '无效用户信息' };
  Object.assign(item, value);
  return { msg: 'ok' };
}

export const USERS = {
  '/api/v1/users/users/': (req: MockRequest) => genData(req.queryString),
  '/user/:id': (req: MockRequest) => list.find(w => w.id === +req.params.id),
  'POST /user/:id': (req: MockRequest) => saveData(+req.params.id, req.body),
  '/user/current': {
    name: 'Cipchk',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    email: 'cipchk@qq.com',
    signature: '海纳百川，有容乃大',
    title: '交互专家',
    group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
    tags: [
      {
        key: '0',
        label: '很有想法的',
      },
      {
        key: '1',
        label: '专注撩妹',
      },
      {
        key: '2',
        label: '帅~',
      },
      {
        key: '3',
        label: '通吃',
      },
      {
        key: '4',
        label: '专职后端',
      },
      {
        key: '5',
        label: '海纳百川',
      },
    ],
    notifyCount: 12,
    country: 'China',
    geographic: {
      province: {
        label: '上海',
        key: '330000',
      },
      city: {
        label: '市辖区',
        key: '330100',
      },
    },
    address: 'XX区XXX路 XX 号',
    phone: '你猜-你猜你猜猜猜',
  },
  'POST /user/avatar': 'ok',
  'POST /login/account': (req: MockRequest) => {
    const data = req.body;
    if (!(data.userName === 'admin' || data.userName === 'user') || data.password !== 'ng-alain.com') {
      return { msg: `Invalid username or password（admin/ng-alain.com）` };
    }
    return {
      msg: 'ok',
      user: {
        token: '123456789',
        name: data.userName,
        email: `${data.userName}@qq.com`,
        id: 10000,
        time: +new Date(),
      },
    };
  },
  'POST /register': {
    msg: 'ok',
  },
};
