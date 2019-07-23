
** 项目依赖 : npm i

** 项目启动 : npm start java=端口名 (不写java默认连接test)


#### ajax请求
默认json格式请求,
如需要换成form格式请求,在接口对象上加ContentType:'form';
如需换成form-data格式请求,在接口对象上加ContentType:'form-data'
```javascript
ajax.getTypeList()
    .then(rs => {
        this.$tip(rs.message)
    })
    .catch(err => {
        this.$tip(err.message)
    })
```

---

#### 通用管道(公用)
dateFormat => 时间戳转年月日(默认值为YYYY-MM-DD,可传入参数更改)

## 目录结构
.
├── README.md
├── node_modules
├── package-lock.json
├── package.json
└── src
    ├── common
    │   ├── nav.js
    │   └── styles
    │       └── reset.scss
    ├── index.css
    ├── index.js
    ├── mock
    │   └── inforApi
    │       ├── mock.js
    │       └── test.json
    ├── pages
    │   ├── App.jsx
    │   ├── Informations
    │   │   ├── index
    │   │   │   ├── index.jsx
    │   │   │   └── index.scss
    │   │   └── list
    │   └── components
    │       ├── header
    │       │   ├── header.jsx
    │       │   └── header.scss
    │       └── toast
    ├── router
    │   └── router.jsx
    ├── serviceWorker.js
    └── utils
        └── asyncComponent.jsx


