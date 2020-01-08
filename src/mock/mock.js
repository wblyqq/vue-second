import Mock from 'mockjs'
Mock.mock('http://localhost:8080/user',{
  'name':'@name',
  'email':'@email',
  'age|1-10':5
});
Mock.mock('http://localhost:8080/menu',{
  'id':'@increment',
  'name':'menu',
  'order|10-20':12
});
Mock.mock('http://localhost:8080/login',
  'post',
  {
         'msg': 'success',
          'code': 0,
           'data': {
               'token': '4344323121398'
                 // 其他数据
         }
  }
);

Mock.mock('http://localhost:8080/user/save',
  'post',
  {
      "code": 200,
      "msg": null,
      "data": 1
  }
);
Mock.mock('http://localhost:8080/user/delete',
  'post',
  {
      "code": 200,
      "msg": null,
      "data": 1
  }
);
Mock.mock('http://localhost:8080/user/findPage',
  'post',
  {
      "code": 200,
      "msg": null,
      "data": {}
  }
);

Mock.mock('http://localhost:8080/menu/findMenuTree',
  'get',
  {
    "code": 200,
    "msg": null,
    "data": [{
      "id": 1,
      "createBy": null,
      "createTime": null,
      "lastUpdateBy": null,
      "lastUpdateTime": null,
      "parentId": 0,
      "name": "系统管理",
      "url": null,
      "perms": null,
      "type": 0,
      "icon": "el-icon-setting",
      "orderNum": 0,
      "delFlag": 0,
      "parentName": null,
      "level": 0,
      "children": [{
        "id": 2,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 1,
        "name": "用户管理",
        "url": "/Sys/user",
        "perms": null,
        "type": 1,
        "icon": "el-icon-service",
        "orderNum": 1,
        "delFlag": 0,
        "parentName": "系统管理",
        "level": 1,
        "children": []
      }, {
        "id": 3,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 1,
        "name": "机构管理",
        "url": "/Sys/dept",
        "perms": null,
        "type": 1,
        "icon": "el-icon-news",
        "orderNum": 2,
        "delFlag": 0,
        "parentName": "系统管理",
        "level": 1,
        "children": []
      }, {
        "id": 4,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 1,
        "name": "角色管理",
        "url": "/Sys/role",
        "perms": null,
        "type": 1,
        "icon": "el-icon-view",
        "orderNum": 4,
        "delFlag": 0,
        "parentName": "系统管理",
        "level": 1,
        "children": []
      }, {
        "id": 5,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 1,
        "name": "菜单管理",
        "url": "/Sys/menu",
        "perms": null,
        "type": 1,
        "icon": "el-icon-menu",
        "orderNum": 5,
        "delFlag": 0,
        "parentName": "系统管理",
        "level": 1,
        "children": []
      }, {
        "id": 7,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 1,
        "name": "字典管理",
        "url": "/Sys/dict",
        "perms": null,
        "type": 1,
        "icon": "el-icon-edit-outline",
        "orderNum": 7,
        "delFlag": 0,
        "parentName": "系统管理",
        "level": 1,
        "children": []
      }, {
        "id": 8,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": "admin",
        "lastUpdateTime": "2018-09-23T11:32:28.000+0000",
        "parentId": 1,
        "name": "系统日志",
        "url": "/Sys/log",
        "perms": "Sys:log:view",
        "type": 1,
        "icon": "el-icon-info",
        "orderNum": 8,
        "delFlag": 0,
        "parentName": "系统管理",
        "level": 1,
        "children": []
      }]
    }, {
      "id": 42,
      "createBy": "admin",
      "createTime": "2018-11-15T06:39:30.000+0000",
      "lastUpdateBy": "admin",
      "lastUpdateTime": "2018-11-15T06:56:18.000+0000",
      "parentId": 0,
      "name": "代码生成",
      "url": "/generator/generator",
      "perms": "",
      "type": 1,
      "icon": "el-icon-star-on",
      "orderNum": 5,
      "delFlag": 0,
      "parentName": null,
      "level": 0,
      "children": []
    }, {
      "id": 28,
      "createBy": null,
      "createTime": null,
      "lastUpdateBy": "admin",
      "lastUpdateTime": "2018-11-15T06:39:43.000+0000",
      "parentId": 0,
      "name": "使用案例",
      "url": null,
      "perms": null,
      "type": 0,
      "icon": "el-icon-picture-outline",
      "orderNum": 6,
      "delFlag": 0,
      "parentName": null,
      "level": 0,
      "children": [{
        "id": 29,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 28,
        "name": "国际化",
        "url": "/demo/i18n",
        "perms": null,
        "type": 1,
        "icon": "el-icon-edit",
        "orderNum": 1,
        "delFlag": 0,
        "parentName": "使用案例",
        "level": 1,
        "children": []
      }, {
        "id": 30,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 28,
        "name": "换皮肤",
        "url": "/demo/theme",
        "perms": null,
        "type": 1,
        "icon": "el-icon-picture",
        "orderNum": 2,
        "delFlag": 0,
        "parentName": "使用案例",
        "level": 1,
        "children": []
      }]
    }]
  })
