var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto lantern", {
    "+auto lantern": "+__ruleListOf_auto lantern",
    "+__ruleListOf_auto lantern": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)baidu\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)vdianying\.cc$/.test(host)) return "DIRECT";
        if (/(?:^|\.)dangdang\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)hdslb\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)bilibili\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)3\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)360buyimg\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)huxiu\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)ths123\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)ctfile\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)126\.net$/.test(host)) return "DIRECT";
        if (/(?:^|\.)163\.com$/.test(host)) return "DIRECT";
        if (/^120\.192\.95\.10$/.test(host)) return "DIRECT";
        if (/(?:^|\.)douban\.com$/.test(host)) return "DIRECT";
        if (/^127\.0\.0\.1$/.test(host)) return "DIRECT";
        if (/(?:^|\.)alicdn\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)alibaba\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)maoyun\.tv$/.test(host)) return "DIRECT";
        if (/(?:^|\.)ctsywy\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)xianliao\.me$/.test(host)) return "DIRECT";
        if (/(?:^|\.)kejet\.net$/.test(host)) return "DIRECT";
        if (/(?:^|\.)sinaimg\.cn$/.test(host)) return "DIRECT";
        if (/^117\.143\.109\.169$/.test(host)) return "DIRECT";
        if (/(?:^|\.)miaopai\.com$/.test(host)) return "DIRECT";
        if (/^122\.228\.251\.46$/.test(host)) return "DIRECT";
        if (/^183\.131\.60\.54$/.test(host)) return "DIRECT";
        if (/^111\.13\.3\.49$/.test(host)) return "DIRECT";
        if (/^111\.13\.3\.47$/.test(host)) return "DIRECT";
        if (/^175\.6\.26\.176$/.test(host)) return "DIRECT";
        if (/(?:^|\.)gtimg\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)msstatic\.com$/.test(host)) return "DIRECT";
        if (/^120\.221\.31\.53$/.test(host)) return "DIRECT";
        if (/(?:^|\.)yystatic\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)huanjuyun\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)yy\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)panda\.tv$/.test(host)) return "DIRECT";
        if (/(?:^|\.)famulei\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)duoku\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)fengkongcloud\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)pdim\.gs$/.test(host)) return "DIRECT";
        if (/(?:^|\.)18183\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)dwstatic\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)sogoucdn\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)te5\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)cnzz\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)sogou\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)tmtpost\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)jandan\.net$/.test(host)) return "DIRECT";
        if (/(?:^|\.)chinanews\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)acgvideo\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)news\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)weibo\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)ifeng\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)ifengimg\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)sinajs\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)trustutn\.org$/.test(host)) return "DIRECT";
        if (/(?:^|\.)anquan\.org$/.test(host)) return "DIRECT";
        if (/(?:^|\.)bootcss\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)lkme\.cc$/.test(host)) return "DIRECT";
        if (/(?:^|\.)pearvideo\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)krcom\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)jd\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)enrz\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)lanjingtmt\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)njust\.edu\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)c-ctrip\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)ctrip\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)mydrivers\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)maoqiuapp\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)100offer\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)qdaily\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)95516\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)95598\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)douyucdn\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)qq\.com$/.test(host)) return "DIRECT";
        if (/^112\.17\.2\.230$/.test(host)) return "DIRECT";
        if (/(?:^|\.)huya\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)duowan\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)hiido\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)w5b454\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)qtmojo\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)ipinyou\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)qtmojo\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)suning\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)360\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)ztcadx\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)qhimg\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)mediav\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)uuzuonline\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)qhimgs0\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)tanx\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)jiemian\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)people\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)ycwb\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)mmstat\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)ykimg\.com$/.test(host)) return "DIRECT";
        if (/^120\.221\.32\.194$/.test(host)) return "DIRECT";
        if (/(?:^|\.)soku\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)runoob\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)optimix\.asia$/.test(host)) return "DIRECT";
        if (/(?:^|\.)sina\.com\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)zhihu\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)douyu\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)taobao\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)alipay\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)opennic\.org$/.test(host)) return "+lantern";
        if (/(?:^|\.)youku\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)gtags\.net$/.test(host)) return "DIRECT";
        if (/(?:^|\.)douyutv\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)so\.com$/.test(host)) return "DIRECT";
        if (/^223\.111\./.test(host)) return "DIRECT";
        if (/(?:^|\.)ourdvsss\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)geetest\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)quanmin\.tv$/.test(host)) return "DIRECT";
        if (/(?:^|\.)zhanqi\.tv$/.test(host)) return "DIRECT";
        if (/(?:^|\.)longzhu\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)hdlsb\.net$/.test(host)) return "DIRECT";
        if (/(?:^|\.)hdlsb\.com$/.test(host)) return "DIRECT";
        if (/^182\.254\./.test(host)) return "DIRECT";
        if (/^192\.168\./.test(host)) return "DIRECT";
        if (/(?:^|\.)cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)zybus\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)qiyipic\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)71\.am$/.test(host)) return "DIRECT";
        if (/(?:^|\.)readfree\.net$/.test(host)) return "DIRECT";
        if (/(?:^|\.)iqiyi\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)tanx\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)mmstat\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)infzm\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)ichunqiu\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)400gb\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)dbank\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)xunlei\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)sootoo\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)huajiao\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)nytimes\.com$/.test(host)) return "+lantern";
        if (/(?:^|\.)vultr\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)huanqiu\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)rfi\.fr$/.test(host)) return "+lantern";
        if (/(?:^|\.)wandoujia\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)netease\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)163\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)126\.net$/.test(host)) return "DIRECT";
        if (/(?:^|\.)cnki\.net$/.test(host)) return "DIRECT";
        if (/(?:^|\.)gtimg\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)alipay\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)githuber\.cn$/.test(host)) return "+lantern";
        if (/(?:^|\.)dudulu\.cf$/.test(host)) return "DIRECT";
        if (/(?:^|\.)sohu\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)0536qz\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)mipay\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)mi\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)acfun\.tv$/.test(host)) return "DIRECT";
        if (/(?:^|\.)baydn\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)shanbay\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)hujiang\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)tiandaoedu\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)xinhuanet\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)dji\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)wegene\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)wsj\.com$/.test(host)) return "+lantern";
        if (/(?:^|\.)myqcloud\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)guokr\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)caixin\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)oschina\.net$/.test(host)) return "DIRECT";
        if (/(?:^|\.)taobao\.net$/.test(host)) return "DIRECT";
        if (/(?:^|\.)xiami\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)bible\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)bing\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)hjenglish\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)eudic\.net$/.test(host)) return "DIRECT";
        if (/(?:^|\.)passwordsgenerator\.net$/.test(host)) return "+lantern";
        if (/(?:^|\.)hxgs\.net$/.test(host)) return "DIRECT";
        if (/(?:^|\.)mop\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)wallstreetcn\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)ydstatic\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)youdao\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)pearvideo\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)tmall\.com$/.test(host)) return "DIRECT";
        if (/^210\.44\.16\.87$/.test(host)) return "DIRECT";
        if (/^210\.44\.16\.22$/.test(host)) return "DIRECT";
        if (/(?:^|\.)jianshu\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)rfi\.fr$/.test(host)) return "+lantern";
        if (/(?:^|\.)nytimes\.com$/.test(host)) return "+lantern";
        if (/(?:^|\.)swchina\.org$/.test(host)) return "DIRECT";
        if (/(?:^|\.)huxiucdn\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)geekpark\.net$/.test(host)) return "DIRECT";
        if (/(?:^|\.)zmzjstu\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)wang502\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)zimuzu\.tv$/.test(host)) return "DIRECT";
        if (/(?:^|\.)bdstatic\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)bdimg\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)doubanio\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)liaoxuefeng\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)lolesports\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)csdn\.net \+direct$/.test(host)) return "DIRECT";
        if (/(?:^|\.)xitongcheng\.com \+direct$/.test(host)) return "DIRECT";
        if (/(?:^|\.)deepinghost\.com \+direct$/.test(host)) return "DIRECT";
        if (/(?:^|\.)456xt\.com \+direct$/.test(host)) return "DIRECT";
        if (/(?:^|\.)taptap\.com \+direct$/.test(host)) return "DIRECT";
        if (/(?:^|\.)xd\.com \+direct$/.test(host)) return "DIRECT";
        if (/(?:^|\.)osdn\.net \+direct$/.test(host)) return "DIRECT";
        if (/(?:^|\.)miui\.com \+direct$/.test(host)) return "DIRECT";
        if (/(?:^|\.)xiaomi\.com \+direct$/.test(host)) return "DIRECT";
        if (/(?:^|\.)weiyun\.com \+direct$/.test(host)) return "DIRECT";
        if (/(?:^|\.)fugetech\.com \+direct$/.test(host)) return "DIRECT";
        if (/(?:^|\.)microsoft\.com \+direct$/.test(host)) return "DIRECT";
        if (/(?:^|\.)bing\.net \+direct$/.test(host)) return "DIRECT";
        if (/(?:^|\.)lolesports\.com \+direct$/.test(host)) return "DIRECT";
        if (/^cn\.nytimes\.com \+lantern$/.test(host)) return "DIRECT";
        return "+lantern";
    },
    "+lantern": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host) || /^192\.168\.0\.0$/.test(host)) return "DIRECT";
        return "PROXY 127.0.0.1:49270";
    }
});