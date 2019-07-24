
** 项目依赖 : npm i

** 项目启动 : npm start


#### ajax请求
默认json格式请求,
如需要换成form格式请求,在接口对象上加ContentType:'form';  
如需换成form-data格式请求,在接口对象上加ContentType:'form-data'  
引入api文件时，统一以ajax引入，方便辨识和标记接口
Eg：import ajax from  '../api/infoApi'
```javascript
ajax.ckeckToken()
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
```shell
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


