interface GroupItem {
    title: string;
    icon: string;
    color: string;
    desc: string;
    date: string;
    group: string;
  }
  
  interface NavItem {
    title: string;
    icon: any;
    color: string;
  }
  
  interface DynamicInfoItem {
    avatar: string;
    name: string;
    date: string;
    desc: string;
  }
  
  import * as Icons from "@ant-design/icons-vue"
  export const navItems: NavItem[] = [
    {
      title: '首页',
      icon: Icons["HomeOutlined"],
      color: '#1fdaca',
    },
    {
      title: '仪表盘',
      icon: Icons["AppstoreOutlined"],
      color: '#bf0c2c',
    },
    {
      title: '组件',
      icon: Icons['BuildOutlined'],
      color: '#e18525',
    },
    {
      title: '系统管理',
      icon: Icons["SettingOutlined"],
      color: '#3fb27f',
    },
    {
      title: '权限管理',
      icon: Icons["ToolOutlined"],
      color: '#4daf1bc9',
    },
    {
      title: '图表',
      icon: Icons['BarChartOutlined'],
      color: '#00d8ff',
    },
  ];
  
  export const dynamicInfoItems: DynamicInfoItem[] = [
    {
      avatar: 'dynamic-avatar-1|svg',
      name: '威廉',
      date: '刚刚',
      desc: `在 <a>开源组</a> 创建了项目 <a>Vue</a>`,
    },
    {
      avatar: 'dynamic-avatar-2|svg',
      name: '艾文',
      date: '1个小时前',
      desc: `关注了 <a>威廉</a> `,
    },
    {
      avatar: 'dynamic-avatar-3|svg',
      name: '克里斯',
      date: '1天前',
      desc: `发布了 <a>个人动态</a> `,
    },
    {
      avatar: 'dynamic-avatar-4|svg',
      name: 'Vben',
      date: '2天前',
      desc: `发表文章 <a>如何编写一个Vite插件</a> `,
    },
    {
      avatar: 'dynamic-avatar-5|svg',
      name: '皮特',
      date: '3天前',
      desc: `回复了 <a>杰克</a> 的问题 <a>如何进行项目优化？</a>`,
    },
    {
      avatar: 'dynamic-avatar-6|svg',
      name: '杰克',
      date: '1周前',
      desc: `关闭了问题 <a>如何运行项目</a> `,
    },
    {
      avatar: 'dynamic-avatar-1|svg',
      name: '威廉',
      date: '1周前',
      desc: `发布了 <a>个人动态</a> `,
    },
    {
      avatar: 'dynamic-avatar-1|svg',
      name: '威廉',
      date: '2021-04-01 20:00',
      desc: `推送了代码到 <a>Github</a>`,
    },
  ];
  
  export const groupItems: GroupItem[] = [
    {
      title: 'Github',
      icon: 'carbon:logo-github',
      color: '',
      desc: '不要等待机会，而要创造机会。',
      group: '开源组',
      date: '2021-04-01',
    },
    {
      title: 'Vue',
      icon: 'ion:logo-vue',
      color: '#3fb27f',
      desc: '现在的你决定将来的你。',
      group: '算法组',
      date: '2021-04-01',
    },
    {
      title: 'Html5',
      icon: 'ion:logo-html5',
      color: '#e18525',
      desc: '没有什么才能比努力更重要。',
      group: '上班摸鱼',
      date: '2021-04-01',
    },
    {
      title: 'Angular',
      icon: 'ion:logo-angular',
      color: '#bf0c2c',
      desc: '热情和欲望可以突破一切难关。',
      group: 'UI',
      date: '2021-04-01',
    },
    {
      title: 'React',
      icon: 'bx:bxl-react',
      color: '#00d8ff',
      desc: '健康的身体是实现目标的基石。',
      group: '技术牛',
      date: '2021-04-01',
    },
    {
      title: 'Js',
      icon: 'ion:logo-javascript',
      color: '#EBD94E',
      desc: '路是走出来的，而不是空想出来的。',
      group: '架构组',
      date: '2021-04-01',
    },
  ];

  export const radar = {
    legend: {
      bottom: 0,
      data: ['Visits', 'Sales'],
    },
    tooltip: {},
    radar: {
      radius: '60%',
      splitNumber: 8,
      indicator: [
        {
          name: '2017',
        },
        {
          name: '2017',
        },
        {
          name: '2018',
        },
        {
          name: '2019',
        },
        {
          name: '2020',
        },
        {
          name: '2021',
        },
      ],
    },
    series: [
      {
        type: 'radar',
        symbolSize: 0,
        areaStyle: {
          shadowBlur: 0,
          shadowColor: 'rgba(0,0,0,.2)',
          shadowOffsetX: 0,
          shadowOffsetY: 10,
          opacity: 1,
        },
        data: [
          {
            value: [90, 50, 86, 40, 50, 20],
            name: 'Visits',
            itemStyle: {
              color: '#b6a2de',
            },
          },
          {
            value: [70, 75, 70, 76, 20, 85],
            name: 'Sales',
            itemStyle: {
              color: '#67e0e3',
            },
          },
        ],
      },
    ],
  }
  