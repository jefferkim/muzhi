Muzhi.Good = Backbone.Model.extend({
    default: function () {

    },

                     //MZ_BUYNOW(2, "立即购买"),MZ_SOLDOUT(6, "卖光了")，MZ_CHANCE(7, "还有机会")
    stateMap:function(st){
        var map = {
            "-1":"sell-out",        //MZ_FINISHED 已结束
            "3":"obligation",       //MZ_ORDERED 待付款
            "4":"success",          //MZ_ORDER_SUCCESS  已成功抢购
            "5":"close",            //MZ_ORDER_CANCEL 未付款，交易关闭
            "0":"to-begin",         //MZ_WILL_START  即将开始
            "1":"join",             //MZ_WAIT_JOIN  参与斗价
            "2":"buy",              //MZ_BUYNOW    立即购买
            "6":"sell-out",         // MZ_SOLDOUT  卖光了
            "7":"chance"            //MZ_CHANCE   还有机会
        }

        return map[st];


    },

    priceRegion:function(nowPrice){
        var t = parseInt(nowPrice);
        var dValue ＝ parseInt(this.get("mzCorePart").maxPrice - this.get("mzCorePart").minPrice);

        return t;








    },

    getItemInfo: function () {
        var mzBase = this.get("mzBasePart"),
            mzClick = this.get("mzClickPart"),
            mzCorePart = this.get("mzCorePart");
        return {
           title:mzBase.title,
           pic:mzBase.pic,

           desc:mzBase.ruleDesc,

           btnTxt:mzClick.showName,

            maxPrice:mzCorePart.maxPrice,

            minPrice:mzCorePart.minPrice,

            currentPrice:mzCorePart.nowPrice || mzCorePart.maxPrice,

            btnClass:this.stateMap(mzBase.status)



        };
    }

});