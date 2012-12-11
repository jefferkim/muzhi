		{{#data}}
		{{#result}}
		{{#resultList}}
		<li class="list-item {{#if(status==0)}} hasdel {{/if(status==0)}}" itemid="{{numId}}">
			<a href="{{itemhref}}" class="list-scrolla">
				<div class="p">
					<img class="p-pic lazy" data-original="{{imghref}}" src="http://a.tbcdn.cn/mw/webapp/fav/img/grey.gif" alt="商品图片" />
				</div>
				<div class="d">
					<h5 class="d-title{{#if(status==0)}} silver {{/if(status==0)}}">{{title}}</h5>
					{{#if(status==1)}}
					<p class="d-price">
						{{^isPromot}}
						<em class="h">¥{{price}}</em>
						{{/isPromot}}
						{{#isPromot}}
						<em class="h">¥{{promotionPrice}}</em> <del class="silver">{{price}}</del>
						{{/isPromot}}
					</p>
					{{#isPromot}}<p class="d-sp silver">[限时打折]</p>{{/isPromot}}
					{{/if(status==1)}}
					{{#if(status==0)}} <p>已下架</p> {{/if(status==0)}}
				</div>
			</a>
			<div class="operate{{#if(status==1)}} none {{/if(status==1)}}"><span class="btn-grey-small">删 除</span></div>
		</li>
		{{/resultList}}
		{{/result}}
		{{/data}}
