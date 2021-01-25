config.js的代码：
module.exports = {
    title: 'meng-ui',
    description: 'ui组件',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }], 
    ],
    base: '/',
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav: [{
                text: '使用说明',
                link: '/guide/'
            },
            {
                text: '组件',
                link: '/component/'
            },
            {
                text: 'API',
                link: '/api/'
            },
            {
                text: '更改日志',
                link: '/log/'
            },
        ],
        sidebar: {
            '/guide/': [''],
            '/component/': [
                '',
                'menginput',
                'mengnav',
            ],
            '/api/': [''],
            '/log/': [''],
        },
        sidebarDepth: 2
    },
    
};
