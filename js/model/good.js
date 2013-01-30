Muzhi.Good = Backbone.Model.extend({
    defaults:{
        "lazyRender":false //TODO:后期尝试局部刷新
    },

    //true,可点击
    stateMap: function (st) {
        var map = {
            "-1": ["sell-out",true],        //MZ_FINISHED 已结束
            "3": ["obligation",true],       //MZ_ORDERED 待付款
            "4": ["success",true],          //MZ_ORDER_SUCCESS  已成功抢购
            "5": ["close",false],            //MZ_ORDER_CANCEL 未付款，交易关闭
            "0": ["to-begin",false],         //MZ_WILL_START  即将开始
            "1": ["J-join",true],             //MZ_WAIT_JOIN  参与斗价
            "2": ["buy",true],              //MZ_BUYNOW    立即购买
            "6": ["sell-out",false],         // MZ_SOLDOUT  卖光了
            "7": ["chance",false]            //MZ_CHANCE   还有机会
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


    calculateTop:function(){


        var mzCorePart = this.get("mzCorePart"),
            nowPrice = mzCorePart.nowPrice || mzCorePart.maxPrice,  //即将开始时不提供当前值
            maxPrice = mzCorePart.maxPrice,
            minPrice = mzCorePart.minPrice,
            indicatorOffset,infoboxOffset;

        if (minPrice == nowPrice) {
            indicatorOffset = 105;
            infoboxOffset = 82;
        }
        else if(maxPrice == nowPrice){
            indicatorOffset = 0;
            infoboxOffset = 0;
        } else {
            indicatorOffset = Math.min(82, 17+65*(maxPrice-nowPrice)/(maxPrice-minPrice));
            infoboxOffset = Math.min(66, 18+48*(maxPrice-nowPrice)/(maxPrice-minPrice));
        }
        return [indicatorOffset,infoboxOffset];
    },


    
    getDetailUrl:function(itemId){
    	var sys=Muzhi.uriSysType;
    	return "http://a."+sys+".taobao.com/i"+itemId+".htm?"+ $("#J_moreParams").val();
    },

    getItemInfo: function () {
        var mzBase = this.get("mzBasePart"),
            mzClick = this.get("mzClickPart"),
            mzCorePart = this.get("mzCorePart"),
            mzInfoPart = this.get("mzInfoPart");

        var inRegion = this.calculateTop();


        return {
            title: mzBase.title,
            pic: mzBase.pic+'_220x220.jpg',
            link: this.getDetailUrl(mzBase.itemId),
            desc: mzInfoPart.desc,
            btnTxt: mzClick.showName, //按钮显示文案
            maxPrice: mzCorePart.maxPrice,
            minPrice: mzCorePart.minPrice,
            currentPrice: mzCorePart.nowPrice || mzCorePart.maxPrice,
            numOfJoiners: mzCorePart.numOfJoiners ? mzCorePart.numOfJoiners : false,
            btnClass: this.stateMap(mzBase.status),
            startTime: mzInfoPart.startTime ? mzInfoPart.startTime : false,  //即将开始的时候存在startTime字段
            region: inRegion,
            detailUrl: mzBase.status == 2 ? "http://a.m.taobao.com/i"+mzBase.itemId+".htm" : (mzBase.status==3?"http://tm.m.taobao.com/list.htm?statusId=0":"#"), //立刻购买是跳转地址
            allowRefresh: ([3, 4, 1, 2].indexOf(parseInt(mzBase.status)) != -1 && mzCorePart.nowPrice != mzCorePart.minPrice) || parseInt(mzBase.status) ==7   //TODO:已经斗至最低的
        };
    }

});