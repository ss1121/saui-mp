export function config(params) {
  return defaultAsset(params)
}

function defaultAsset(params) {
  return {
    show: false,
    selected: 0,
    color: "#000",
    selectedColor: "#fff",
    borderStyle: "black",
    backgroundColor: "#ffffff",
    itemClass: '', // 补充tab-bar的额外class
    list: [
      {
        // pagePath: "/pages/admire/index",
        // iconPath: "/images/icon_component.png",
        // selectedIconPath: "/images/icon_component_HL.png",
        text: "赞赏",
        reddot: '0',
        show: true
      },
      {
        // pagePath: "/pages/message/index",
        // iconPath: "/images/icon_API.png",
        // selectedIconPath: "/images/icon_API_HL.png",
        text: "留言",
        reddot: '0',
        show: true
      },
      {
        // pagePath: "/pages/empty/index",
        // iconPath: "/images/icon_API.png",
        // selectedIconPath: "/images/icon_API_HL.png",
        text: "风格",
        reddot: '0',
        show: true
      },
      {
        // pagePath: "/pages/contact/index",
        // iconPath: "/images/icon_API.png",
        // selectedIconPath: "/images/icon_API_HL.png",
        text: "联系",
        reddot: '0',
        show: true
      },
    ]
  }
}
// "tabBar": {"custom": true, "list": [{ "pagePath": "pages/admire/index"}, { "pagePath": "pages/message/index"}, { "pagePath": "pages/index/index"}, { "pagePath": "pages/contact/index"}] },
