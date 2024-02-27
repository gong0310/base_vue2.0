<!DOCTYPE html>
<html lang="en" class="notranslate" translate="no">
<head>
    <meta name="google" content="notranslate"/>
    <meta http-equiv="pragram" content="no-cache"/>
    <meta http-equiv="cache-control" content="no-cache, must-revalidate"/>
    <meta http-equiv="expires" content="0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=10"/>
    <meta name=viewport content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
    <base href="/"/>
    <link rel="shortcut icon" href="./assets/public/images/favicon.svg?v=2024">
    <link rel="stylesheet" type="text/css" href="./assets/public/styles/common.css?v=%25!s%28%3cnil%3e%29">
    <link rel="stylesheet" type="text/css" href="./assets/public/styles/RIO_style.css?v=%25!s%28%3cnil%3e%29">
    <link rel="stylesheet" type="text/css" href="./assets/public/styles/login.2016.css?v=%25!s%28%3cnil%3e%29">
    <link rel="stylesheet" type="text/css" href="./assets/public/styles/tfa.css?v=%25!s%28%3cnil%3e%29">
    
    <title data-locales>登录失败</title>

    <script type="text/javascript" src="./assets/public/js/vue.min.js"></script>
    <script type="text/javascript" src="./assets/public/js/vue-i18n.min.js"></script>
    <script type="text/javascript" src="./assets/public/js/locales.js?v=%25!s%28%3cnil%3e%29"></script>
    <script type="text/javascript">function IEVersion() {
        var userAgent = navigator.userAgent; 
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; 
        var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; 
        var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
        if(isIE) {
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            if(fIEVersion == 7) {
                return 7;
            } else if(fIEVersion == 8) {
                return 8;
            } else if(fIEVersion == 9) {
                return 9;
            } else if(fIEVersion == 10) {
                return 10;
            } else {
                return 6;
            }
        } else if(isEdge) {
            return 'edge';
        } else if(isIE11) {
            return 11; 
        }else{
            return -1;
        }
      }
      var ie = IEVersion();
      if (ie>0 && ie < 10) {
        alert('系统检测到您的浏览器版本过低，影响使用体验，推荐使用IE11以上、Chrome、QQ浏览器以获得最佳体验')
      }

      function wrapStorage(storageName) {
            var store = {};
            ['getItem', 'setItem', 'removeItem', 'clear'].forEach(function (key) {
                store[key] = function () {
                    try {
                        return window[storageName][key].apply(window[storageName], arguments);
                    } catch (err) {
                        console.log(storageName + '.' + key + ' failed:', err);
                    }
                    return undefined;
                }
            })
            return store;
        }
        var Storage = {
            sessionStorage: wrapStorage('sessionStorage'),
            localStorage: wrapStorage('localStorage'),
        };
        Vue.filter('xss', function(input){
           return input
                
                .replace(/<(?!\/?a).*?>/g, '')
                
                .replace(/\son\w+=[^\s>]+/g, '')
        })
    </script>
</head>
<body>
<noscript><strong>很抱歉，网站不能正常加载，请启用JavaScript后继续。</strong></noscript>
<div id="app">
    <div class="layout">
        
        
        
        
        
        <div class="banner_wrap" v-cloak  v-if="window.pageCfg.deviceType != 'DevicePhone' && !isInternetLogin">
            
                <div class="rtx_top">
                    <div class="rtx_top_banner">
                        <a><img src="./assets/public/images/top_banner.jpg" alt=""/></a>
                    </div>
                </div>
            
        </div>

        
    <div style="font-size: 16px; margin: 180px 15px 0; color: #424242;">
        <img style="width: 160px; margin-bottom: 30px;" src="./assets/public/images/denied.svg" alt="denied" />
        <p style="font-weight: bold; margin-bottom: 10px;" data-locales>请您申请权限后再访问此站点</p>
        <p>cdn-go.woa.com</p>
        
        <p style="margin-top: 20px;">
            <a style="color: #3A80F7;" href="https://office.woa.com/applyfill.aspx?flowid=153" target="_self" data-locales>点击申请权限</a>
        </p>
        
    </div>


        <div class="fonterWrap" v-cloak>
            <div class="infoFooter">
                <img alt="" style="height: 18px; width: 18px" src="./assets/public/images/it-logo.svg" />
                <span style="font-size:12px;color:#474747;vertical-align: middle;font-weight: bold">[[$t('太湖-TOF提供技术服务')]] </span>
             </div>
        </div>
    </div>
</div>

<script type="text/javascript" src="./assets/public/js/jquery-3.3.1.slim.min.js"
    onload="if (typeof module === 'object' && typeof module.exports === 'function') { window.$ = window.jQuery = module.exports; }">
</script>
<script type="text/javascript" src="./assets/public/js/nacl-util.min.js"></script>
<script type="text/javascript" src="./assets/public/js/nacl-fast.min.js"></script>
<script type="text/javascript" src="./assets/public/js/sealedbox.min.js"></script>
<script type="text/javascript" src="./assets/public/js/security.min.js"></script>
<script type="text/javascript" src="./assets/public/js/base64.min.js"></script>
<script type="text/javascript" src="./assets/public/js/qrcode.js?v=%25!s%28%3cnil%3e%29"></script>

    <script type="text/javascript" src="./assets/public/js/banner.js?v=%25!s%28%3cnil%3e%29"></script>


<script type="text/javascript">
    var locales = {
        en: {
            '登录失败': 'Denied',
            '请您申请权限后再访问此站点': 'Apply for permission to access this site',
            '点击申请权限': 'Click to apply for permission',
        }
    };
    var langMatches = window.location.search.match(/lang=(\w+)/);
    var lang = langMatches && langMatches[1] || Storage.localStorage.getItem('lang') || ((navigator.language || navigator.userLanguage || 'zh').indexOf('zh') >= 0 ? 'zh' : 'en');
    function t(text) {
        return locales[lang] && locales[lang][text] || text;
    }

    document.querySelectorAll('[data-locales]').forEach(function(el){
        el.innerText = t(el.innerText);
    });
</script>

</body>
</html>
