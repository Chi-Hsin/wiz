var indexData = new Vue({
            el: '#outerDiv',
            data: {
                "screenHeight":"",
                "screenWidth":"",
				"event":[//活動事件
							{"eventID":"1","name":"阿爾克納與星之旅途Ⅱ 永戰之地"},
							{"eventID":"2","name":"八百八町妖怪捕物帳"},
							{"eventID":"3","name":"MARELESSⅡ 夢境與現實的夾縫"},
							{"eventID":"4","name":"MARELESS 夢境之蝶"},
							{"eventID":"5","name":"阿爾克納與星之旅途"}
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
				"eventFairyInitial":
						[
							{"id":"","eventID":"","event":"","name":"","gender":"","element":"","wikiNumber":"empty"},
							{"id":"","eventID":"","event":"","name":"","gender":"","element":"","wikiNumber":"empty"},
							{"id":"","eventID":"","event":"","name":"","gender":"","element":"","wikiNumber":"empty"},
							{"id":"","eventID":"","event":"","name":"","gender":"","element":"","wikiNumber":"empty"},
							{"id":"","eventID":"","event":"","name":"","gender":"","element":"","wikiNumber":"empty"},
							{"id":"","eventID":"","event":"","name":"","gender":"","element":"","wikiNumber":"empty"}
						],
				"lotteryFairy":[],		

               },
			computed:{
				eventPicUrl:function(){
					return "img/event/E" + this.eventNumber + ".png";
				},
				
				eventFairy:function(){
					var number = this.eventNumber;
					var obj = this.fairy.filter(function(v){
						return v.eventID == number;
					})
					
					var newobj =  this.eventFairyInitial.map(x => x);
					for(var i=0;i<obj.length;i++){
						newobj[i] = obj[i];
					}
					return newobj;
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
				picMouseDown:function(e){//圖片滑鼠按下不放開
					e.target.setAttribute("draggable",true);
				},
				picDragOver:function(e){//圖片滑鼠經過
					console.log("dragover");
					e.preventDefault();
				},
				picDragStart:function(e){//圖片開始拖曳時
				    // console.log("!")
					var data = e.target.getAttribute("data-dataInfo");
					e.dataTransfer.setData("data-dataInfo",data);
					
				},
				picRepeated:function(obj){//拖曳圖片判斷
				
					var index = this.lotteryFairy.findIndex(function(x){
							return  obj == x.wikiNumber || obj == 'empty';
						});
					return index==-1 ?true :false;	
				},
				picDrop:function(e){//有元素拖曳到這張圖片觸發的事件
					e.preventDefault();
					
				    var filelist = e.dataTransfer.files;
				    var data = JSON.parse(e.dataTransfer.getData("data-dataInfo"))
					
					if(this.picRepeated(data.wikiNumber)){
						this.lotteryFairy.push(data)
					}
					else{console.log("重複了")}
				    
				},
				openFairyWiki:function(e){//開啟WIKI資料小視窗
					var data = JSON.parse(e.target.getAttribute("data-dataInfo"));
					var url = "https://nekowiz.fandom.com/zh/wiki/%E5%8D%A1%E7%89%87%E8%B3%87%E6%96%99/" 
								+ data.wikiNumber;
					window.open(url, "_blank", 
					"toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
				},
				goToPicEvent:function(e){ //跳往該活動位置
					var data = JSON.parse(e.target.getAttribute("data-dataInfo"));
					this.eventNumber = Number(data.eventID);
				},
				goToPicEventTable:function(e){ //跳往該活動位置(行列表的)
				
					var myTarget;
					if(e.target.parentElement.tagName == "TR"){//判斷碰到的是圖片還是裏頭的文字、td標籤
						myTarget = e.target.parentElement;
					}
					else{
						myTarget = e.target.parentElement.parentElement;
					}
					var data = JSON.parse(myTarget.getAttribute("data-dataInfo"));
					this.eventNumber = Number(data.eventID);
					
					
				},
				picCancell:function(e){ //右鍵取消選取該精靈
						e.preventDefault(); //關閉右鍵選單 預設動作
						
						var data = JSON.parse(e.target.getAttribute("data-dataInfo"));
						var index = this.lotteryFairy.findIndex(function(x){
							return x.wikiNumber == data.wikiNumber;
						});
						this.lotteryFairy.splice(index,1);
				},
				eventPicUrlList:function(number){
					return "img/event/E" + number + ".png";
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