Muzhi.Good = Backbone.Model.extend({
    defaults:{
        "lazyRender":false //TODO:后期尝试局部刷新
    },

    //true,可点击
    stateMap: function (st) {
        var map = {
            "-1": ["sell-out",true],        //MZ_FINISHED 已结束
            "3": ["obligation",false],       //MZ_ORDERED 待付款
            "4": ["success",true],          //MZ_ORDER_SUCCESS  已成功抢购
            "5": ["close",false],            //MZ_ORDER_CANCEL 未付款，交易关闭
            "0": ["to-begin",false],         //MZ_WILL_START  即将开始
            "1": ["J-join",true],             //MZ_WAIT_JOIN  参与斗价
            "2": ["buy",true],              //MZ_BUYNOW    立即购买
            "6": ["sell-out",false],         // MZ_SOLDOUT  卖光了
            "7": ["chance",true]            //MZ_CHANCE   还有机会
        };
        return map[st];
    },


    toFixed: function (num, precision) {
        var power = Math.pow(10, precision || 0);
        var n = String(Math.round(num * power) / power);
        var nf = n.split('.')[1];
        var suffixLen = 0;
        if (nf) {
            suffixLen = nf.length;
        }
        else if (precision != suffixLen) {
            n = n + '.';
        }
        for (var i = 0; i < precision - suffixLen; i++) {
            n = n + '0';
        }
        return n;
    },

    tipsRegion: function (regionIndex) {
        var tipsTop = 0,
            arrowTop = 0;
        if (regionIndex == 0) {
            tipsTop = 100;
            arrowTop = 90;
        }
        if (regionIndex == 5) {
            tipsTop = 0;
            arrowTop = 10;
        }
        return [tipsTop, arrowTop];
    },

    priceRegion: function () {
        var mzCorePart = this.get("mzCorePart"),
            nowPrice = parseInt(mzCorePart.nowPrice),
            maxPrice = parseInt(mzCorePart.maxPrice),
            minPrice = parseInt(mzCorePart.minPrice),
            region = this.toFixed((maxPrice - minPrice) / 5, 2),
            inRegion = 0;
        for (var i = 0; i < 6; i++) {
            if (nowPrice >= (minPrice + region * i) && nowPrice <= (minPrice + region * (i + 1))) {
                inRegion = i;
            }
        }
        return inRegion;
    },

    getItemInfo: function () {
        var mzBase = this.get("mzBasePart"),
            mzClick = this.get("mzClickPart"),
            mzCorePart = this.get("mzCorePart"),
            mzInfoPart = this.get("mzInfoPart");

        var inRegion = this.priceRegion();

        var tipsRegion = this.tipsRegion(inRegion);

        return {
            title: mzBase.title,
            pic: mzBase.pic,
            desc: mzInfoPart.desc,
            btnTxt: mzClick.showName, //按钮显示文案
            maxPrice: mzCorePart.maxPrice,
            minPrice: mzCorePart.minPrice,
            currentPrice: mzCorePart.nowPrice || mzCorePart.maxPrice,
            numOfJoiners: mzCorePart.numOfJoiners ? mzCorePart.numOfJoiners : false,
            btnClass: this.stateMap(mzBase.status),
            startTime: mzInfoPart.startTime ? mzInfoPart.startTime : false,  //即将开始的时候存在startTime字段
            region: inRegion,
            tipsRegion: tipsRegion,
            allowRefresh: [3, 4, 1, 2, 7].indexOf(parseInt(mzBase.status)) != -1,
            detailUrl: mzBase.status == 2 ? "http://a.m.taobao.com/i"+mzBase.itemId+".htm" : "#" //立刻购买是跳转地址
        };
    }

});