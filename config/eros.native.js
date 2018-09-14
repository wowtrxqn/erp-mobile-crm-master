module.exports = {
    'appName': 'eros-app',
    'appBoard': '/config/index.js',
    // android 监听全局事件homeBack 如果为true 安卓端需要自行调用router.finish方法来关闭应用
    'androidIsListenHomeBack': 'true',
    //'customBundleUpdate':'true',
    'version': {
        'android': '1.0.0',
        'iOS': '1.0.0'
    },
    'page': {
        'homePage': '/pages/App.js',
        'mediatorPage': '/mediator/index.js',
        'navBarColor': '#1DA1F2',
        'navItemColor': '#ffffff'
    },
    'url': {
        'image': 'https://lev-inf.benmu-health.com/test/xxx',
        'bundleUpdate': 'http://localhost:3000/app/check'
    },
    'zipFolder': {
        'iOS': '/ios/WeexEros/WeexEros',
        'android': '/android/WeexFrameworkWrapper/app/src/main/assets'
    },
    'getui': {
        'enabled': 'false',
        'appId': '',
        'appKey': '',
        'appSecret': ''
    },
    tabBar: {
        color: '#777777',
        selectedColor: '#00b4cb',
        backgroundColor: '#fafafa',
        borderColor: '#dfe1eb',
        list: [{
                pagePath: '/pages/tabbr/leftItem.js',
                text: '消息',
                icon: 'bmlocal://assets/TabBar_left@2x.png',
                selectedIcon: 'bmlocal://assets/TabBar_left_Selected@2x.png',
                navShow: 'true',
                navTitle: "消息"
            },
            {
                pagePath: '/pages/tabbr/middleItem.js',
                text: '工作',
                icon: 'bmlocal://assets/TabBar_middle@2x.png',
                selectedIcon: 'bmlocal://assets/TabBar_middle_Selected@2x.png',
                navShow: 'true',
                navTitle: '工作'
            },
            {
                pagePath: '/pages/tabbr/rightItem.js',
                text: '个人中心',
                icon: 'bmlocal://assets/TabBar_right@2x.png',
                selectedIcon: 'bmlocal://assets/TabBar_right@2x_Selected@2x.png',
                navShow: 'true',
                navTitle: '我的'
            }
        ]
    }
}
