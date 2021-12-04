module.exports = {
  title: "小龙学习笔记📒",
  description: "Live and Study.",
  base: "/",
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    displayAllHeaders: false,
    nav: [
      { text: "首页", link: "/" },
      { text: "前端", link: "/web/" },
      { text: "后端", link: "/backend/" },
      { text: "计算机网络", link: "/computerNetwork/" },
      { text: "区块链", link: "/blockChain/" },
      { text: "运维", link: "/operations/" },
      { text: "github", link: "https://github.com/19-xiaogao/Note" },
    ],
    sidebar: {
      "/web/": [
        {
          title: "js基础",
          sidebarDepth: 0,
          children: ["/web/baseJs/baseJs"],
        },
      ],
      "/blockChain/": [
        {
          title: "以太坊",
          sidebarDepth: 2,
          children: [
            "/blockChain/ethereum/ethereum",
            "/blockChain/ethereum/wallet",
            {
              title: "solidity",
              sidebarDepth: 2,
              children: [
                "/blockChain/ethereum/solidity/solidity",
                "/blockChain/ethereum/solidity/layoutSourceFile",
                "/blockChain/ethereum/solidity/StructureContract",
              ],
            },
          ],
        },
      ],
      "/backend/": [
        {
          title: "GoLang",
          children: [
            {
              title: "基础",
              children: [
                "/backend/golang/base/base",
                "/backend/golang/base/基本数据类型",
              ],
            },
          ],
        },
      ],
      "/computerNetwork/": [
        {
          title: "libP2P",
          children: ["/computerNetwork/libp2p/libp2p"],
        },
      ],
      "/cryptography/": [
        {
          title: "密码学",
          sidebarDepth: 0,
        },
      ],
    },
  },
};
