var indexData = new Vue({
            el: '#outerDiv',
            data: {
                "screenHeight":"",
                "screenWidth":"",
				"event":[//活動事件
							{"id":"1","name":"阿爾克納與星之旅途Ⅱ 永戰之地"},
							{"id":"2","name":"八百八町妖怪捕物帳"},
							{"id":"3","name":"MARELESSⅡ 夢境與現實的夾縫"},
							{"id":"4","name":"MARELESS 夢境之蝶"},
							{"id":"5","name":"阿爾克納與星之旅途"}
						],
				"fairy":[//角色資料
							{"id":"1","eventID":"1","event":"阿爾克納與星之旅途Ⅱ 永戰之地","name":"守護與循環的世界 夜風嵐","gender":"男","element":"雷光","wikiNumber":"801802"},
							{"id":"2","eventID":"1","event":"阿爾克納與星之旅途Ⅱ 永戰之地","name":"沉溺慾望的惡魔 戴爾波","gender":"男","element":"火光","wikiNumber":"801792"},
							{"id":"3","eventID":"1","event":"阿爾克納與星之旅途Ⅱ 永戰之地","name":"創造與可能的魔術師 枍葙","gender":"男","element":"雷光","wikiNumber":"801794"},
							{"id":"4","eventID":"1","event":"阿爾克納與星之旅途Ⅱ 永戰之地","name":"戒律與秩序的皇帝 托戈勒特．帕爾","gender":"男","element":"火光","wikiNumber":"801796"},
							{"id":"5","eventID":"1","event":"阿爾克納與星之旅途Ⅱ 永戰之地","name":"豐碩之愛的皇后 伊莎貝拉","gender":"女","element":"水火","wikiNumber":"801798"},
							{"id":"6","eventID":"1","event":"阿爾克納與星之旅途Ⅱ 永戰之地","name":"生命祝福的星星 忻羽","gender":"女","element":"雷水","wikiNumber":"801800"},
							{"id":"7","eventID":"2","event":"八百八町妖怪捕物帳","name":"無法冷卻的正義沸水 薩克特‧大神","gender":"男","element":"水火","wikiNumber":"10728"},
							{"id":"8","eventID":"2","event":"八百八町妖怪捕物帳","name":"守護八百八町 文繼‧葦原","gender":"男","element":"水","wikiNumber":"10713"},
							{"id":"9","eventID":"2","event":"八百八町妖怪捕物帳","name":"鬼道之花綻放 美緒‧葛折","gender":"女","element":"火水","wikiNumber":"10716"},
							{"id":"10","eventID":"2","event":"八百八町妖怪捕物帳","name":"正向思考 木葉‧依姬","gender":"女","element":"火","wikiNumber":"10719"},
							{"id":"11","eventID":"2","event":"八百八町妖怪捕物帳","name":"營利和人情的互補 登美‧言壽","gender":"女","element":"雷","wikiNumber":"10722"},
							{"id":"12","eventID":"2","event":"八百八町妖怪捕物帳","name":"錦上添花的美豔女郎 夕霧‧雨野","gender":"女","element":"雷","wikiNumber":"10725"},
							{"id":"13","eventID":"3","event":"MARELESSⅡ 夢境與現實的夾縫","name":"超越道理的射手 蘿莎莉亞‧哈特","gender":"女","element":"雷光","wikiNumber":"10499"},
							{"id":"14","eventID":"3","event":"MARELESSⅡ 夢境與現實的夾縫","name":"所繼承夢想的推力 愛琳‧葉茨","gender":"女","element":"水光","wikiNumber":"10502"},
							{"id":"15","eventID":"3","event":"MARELESSⅡ 夢境與現實的夾縫","name":"散發魔之常闇 諾庫斯‧瓦尼塔斯","gender":"男","element":"火闇","wikiNumber":"10505"},
							{"id":"16","eventID":"3","event":"MARELESSⅡ 夢境與現實的夾縫","name":"無數的思念 拉提歐‧星辰","gender":"男","element":"雷","wikiNumber":"10511"},
							{"id":"17","eventID":"3","event":"MARELESSⅡ 夢境與現實的夾縫","name":"求夢妖精的化身 阿浮利德","gender":"男","element":"水闇","wikiNumber":"10508"},
							{"id":"18","eventID":"3","event":"MARELESSⅡ 夢境與現實的夾縫","name":"為了主人的夢想 露西尼雅‧雷梅蒂","gender":"女","element":"火","wikiNumber":"10514"},
							{"id":"19","eventID":"4","event":"MARELESS 夢境之蝶","name":"飲魔之闇 諾庫斯‧瓦尼塔斯","gender":"男","element":"雷闇","wikiNumber":"10118"},
							{"id":"20","eventID":"4","event":"MARELESS 夢境之蝶","name":"繼承遺志的魔匠師 愛琳‧葉茨","gender":"女","element":"水光","wikiNumber":"10115"},
							{"id":"21","eventID":"4","event":"MARELESS 夢境之蝶","name":"消除惡夢者 蘿莎莉亞‧哈特","gender":"女","element":"火","wikiNumber":"10112"},
							{"id":"22","eventID":"5","event":"阿爾克納與星之旅途","name":"以柔克剛的力量 絲炟爾·瓊","gender":"女","element":"雷闇","wikiNumber":"801573"},
							{"id":"23","eventID":"5","event":"阿爾克納與星之旅途","name":"玄不改命運之輪 水清","gender":"女","element":"火水","wikiNumber":"801571"},
							{"id":"24","eventID":"5","event":"阿爾克納與星之旅途","name":"單戀的女祭司 迪雅絲‧泰拉","gender":"女","element":"水","wikiNumber":"801569"},
							{"id":"25","eventID":"5","event":"阿爾克納與星之旅途","name":"點綴希望的星星 忻羽","gender":"女","element":"水雷","wikiNumber":"801567"},
							{"id":"26","eventID":"5","event":"阿爾克納與星之旅途","name":"一往無前的戰車 夜明．泰倫","gender":"男","element":"雷水","wikiNumber":"801575"},
							{"id":"27","eventID":"5","event":"阿爾克納與星之旅途","name":"絕對正義 璐彌‧斯卡燐","gender":"女","element":"火光","wikiNumber":"801577"}
						],
				"eventNumber":1,
                "arrowNext":1,
                "arrowLeft":999,        

               },
			computed:{
				eventPicUrl:function(){
					return "img/event/E" + this.eventNumber + ".png";
				},
				eventFairy:function(){
					var number = this.eventNumber;
					return this.fairy.filter(function(v){
						return v.eventID == number;
					})
				},
				
			},   
            methods:{
				turnNextEvent:function(){
					if(this.eventNumber == this.event.length){
						this.eventNumber = 1;//回到第一個活動
						return;
					}
					this.eventNumber += 1;
				},
				turnLastEvent:function(){
					if(this.eventNumber == 1){
						this.eventNumber = this.event.length;//回到最後一個活動
						return;
					}
					this.eventNumber -= 1;
				},
				
				
            },
            created() { //模板渲染前
                this.screenWidth = window.innerWidth;
                this.screenHeight = window.innerHeight;
            },
            mounted(){
                
                //顯示目前長寬  測試用
                window.addEventListener('resize',function(){
                    indexData.screenWidth = window.innerWidth;
                    indexData.screenHeight = window.innerHeight;
                });
            },   
           })