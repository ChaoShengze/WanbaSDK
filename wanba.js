var wanba = {
    login: function (loginInfo, callback) {
        window.getOpenKey(function (d) {
            loginInfo.openid = d.data.openid;
            loginInfo.openkey = d.data.openkey;
            loginInfo.pf = window.OPEN_DATA.pf;
            callback(loginInfo);
        });
    },
    addDeskIcon: function (callback, that) {
        mqq.ui.addShortcut({
            action: 'web',
            icon: window.OPEN_DATA.appicon,
            url: window.OPEN_DATA.jumpurl,
            callback: function (ret) {
                alert.log("ret :", ret);
                callback.bind(that);
            }
        });
    },
    setShareHandle: function (title, desc, imgUrl, callback) {
        mqq.invoke('ui', 'setOnShareHandler', function (type) {
            mqq.invoke('ui', 'shareMessage', {
                title: title,
                desc: desc,
                share_type: type,
                share_url: window.OPEN_DATA.shareurl,
                image_url: imgUrl,
                back: true
            }, function (result) {
                callback(result);
            });
        });
    },
    share: function (title, desc, imgUrl, callback) {
        mqq.ui.showShareMenu({
            title: title,
            desc: desc,
            share_url: window.OPEN_DATA.shareurl,
            image_url: imgUrl,
        }, function (result) {
            callback(result);
        });
    },
    setPaySuccessCallback: function (success) {
        window.__paySuccess = success;
    },
    setPayErrorCallback: function (error) {
        window.__payError = error;
    },
    setPayCloseCallback: function (close) {
        window.__payClose = close;
    },
    pay: function (appid, price) {
        window.popPayTips({
            version: 'v2',
            defaultScore: price,
            appid: appid
        });
    }
};