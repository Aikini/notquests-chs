// book.js
module.exports = {
    title: 'NotQuests 中文WIKI',
    author: 'Aikini',
    lang: 'zh-cn',
    description: 'NotQuests 中文WIKI项目',

    links:{
        "gitbook": true,
        "sharing": {
            "google": false,
            "facebook": false,
            "twitter": false,
            "all": false
        }
    },

    plugins: [
        "theme-hqbook",
        "-lunr",
        "-search",
        "lightbox",
        "hide-element",
        "code",
        "code-pro",
        "search-pro-fixed",
        "-highlight",
        "chapter-fold",
        "expandable-chapters",
        "tbfed-pagefooter",
        "flexible-alerts",
        "back-to-top-button",
        "auto-scroll-table",
        "prism",
        "livereload",
        "copy-code-button"
    ],

    pluginsConfig:{
             "theme-hqbook":{
               "favicon": "/pic/favicon.ico",
               "logo":"/pic/favicon.ico",
               "search-placeholder":"输入关键字搜索",
               "copyButtons": true,
                "copyLines": true,
               "dragSplitter": true,
                "hide-elements": [
                    ".summary .gitbook-link"
          ],
            "flexible-linkcard": {
                "title": "flexible-linkcard",
                "hrefUrl": "https://github.com/HaoqiangChen/gitbook-plugin-flexible-linkcard",
                "target": "_blank",
                "imgSrc": "./book/logo.png",
                "imgClass": "rect"
            },
        
            "flexible-alerts": {
                "style": "flat",
                 "note": {
                    "label": {
                  "de": "Hinweis",
                  "en": "Note"
                    }
                  },
                  "tip": {
                    "label": {
                      "de": "Tipp",
                     "en": "Tip"
                    }
                  },
                 "warning": {
                    "label": {
                     "de": "Warnung",
                     "en": "Warning"
                   }
                  },
                 "danger": {
                    "label": {
                      "de": "Achtung",
                      "en": "Attention"
                   }
                 }
        }
      }, 
      "favicon": "pic/favicon.ico"
      }
  
  
  };