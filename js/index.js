var indexData = new Vue({
            el: '#outerDiv',
            data: {
                "screenHeight":"",
                "screenWidth":"",
				"eventNumber":0,
				"eventFairyInitial":
						[
							{"id":"","eventID":"","event":"","name":"","gender":"","element":"","wikiNumber":"empty"},
							{"id":"","eventID":"","event":"","name":"","gender":"","element":"","wikiNumber":"empty"},
							{"id":"","eventID":"","event":"","name":"","gender":"","element":"","wikiNumber":"empty"},
							{"id":"","eventID":"","event":"","name":"","gender":"","element":"","wikiNumber":"empty"},
							{"id":"","eventID":"","event":"","name":"","gender":"","element":"","wikiNumber":"empty"},
							{"id":"","eventID":"","event":"","name":"","gender":"","element":"","wikiNumber":"empty"},
							{"id":"","eventID":"","event":"","name":"","gender":"","element":"","wikiNumber":"empty"},
							{"id":"","eventID":"","event":"","name":"","gender":"","element":"","wikiNumber":"empty"},
							{"id":"","eventID":"","event":"","name":"","gender":"","element":"","wikiNumber":"empty"}
						],
				"lotteryFairy":[],
				"nameSelect":"",
				"genderSelect":"",
				"genderStyle":[
					{"style":{"active":false},"text":"♂","name":"男"},
					{"style":{"active":false},"text":"♀","name":"女"},
					{"style":{"active":true},"text":"不限","name":""}
				],
				"elementSelect":"",
				"elementStyle":{
					"fire":[
						{"name":"火火","type":"img/element/fire.jpg","style":{"border":true,"border-primary":false,"borderAdded":true}},
						{"name":"火水","type":"img/element/fireWater.jpg","style":{"border":true,"border-primary":false,"borderAdded":true}},
						{"name":"火雷","type":"img/element/fireThunder.jpg","style":{"border":true,"border-primary":false,"borderAdded":true}},
						{"name":"火光","type":"img/element/fireLight.jpg","style":{"border":true,"border-primary":false,"borderAdded":true}},
						{"name":"火闇","type":"img/element/fireDark.jpg","style":{"border":true,"border-primary":false,"borderAdded":true}}
					],
					"water":[
						{"name":"水水","type":"img/element/water.jpg","style":{"border":true,"border-primary":false,"borderAdded":true}},
						{"name":"水火","type":"img/element/waterFire.jpg","style":{"border":true,"border-primary":false,"borderAdded":true}},
						{"name":"水雷","type":"img/element/waterThunder.jpg","style":{"border":true,"border-primary":false,"borderAdded":true}},
						{"name":"水光","type":"img/element/waterLight.jpg","style":{"border":true,"border-primary":false,"borderAdded":true}},
						{"name":"水闇","type":"img/element/waterDark.jpg","style":{"border":true,"border-primary":false,"borderAdded":true}}
					],
					"thunder":[
						{"name":"雷雷","type":"img/element/thunder.jpg","style":{"border":true,"border-primary":false,"borderAdded":true}},
						{"name":"雷水","type":"img/element/thunderWater.jpg","style":{"border":true,"border-primary":false,"borderAdded":true}},
						{"name":"雷火","type":"img/element/thunderFire.jpg","style":{"border":true,"border-primary":false,"borderAdded":true}},
						{"name":"雷光","type":"img/element/thunderLight.jpg","style":{"border":true,"border-primary":false,"borderAdded":true}},
						{"name":"雷闇","type":"img/element/thunderDark.jpg","style":{"border":true,"border-primary":false,"borderAdded":true}}
					]
					 
				},
				// 鎖定的樣式
				"buttonStyle":{"disabled":true,"d-none":true},
				"memberList":[],
				"urlId":"",
				"warningMessage":"",//提示訊息
				"setTimer":"",//定時器  放在公用變數  用來識別/取消用
				// "testCss":["aaa","bbb"],

               },
			computed:{
				event:function(){
					return individualData.event;
				},
				fairy:function(){
					return individualData.fairy;
				},
				baseurl:function(){
					return individualData.baseurl;
				},
				limitNumber:function(){
					return individualData.limitNumber;
				},
				eventPicUrl:function(){
					//找事件對應圖片名稱
					var number = Number(this.eventNumber);
					var eventNumber = this.event[number].picName;
					return "img/event/" + eventNumber + ".png";
				},
				
				eventFairy:function(){//顯示特定活動編號的圖鑑精靈
					var number = Number(this.eventNumber);
					var eventNumber = this.event[number].eventID;
					var obj = this.fairy.filter(function(v){
						return v.eventID == eventNumber;
					})
					
					var newobj =  this.eventFairyInitial.map(x => x);
					for(var i=0;i<obj.length;i++){
						newobj[i] = obj[i];
					}
					return newobj;
				},
				selectFairy:function(){//呈現篩選出的精靈結果
					var name = this.nameSelect;
					var gender = this.genderSelect;
					var element = this.elementSelect;
					
					if(name == "" && gender == "" && element ==""){return [];}
					return this.fairy.filter(function(v){
						var condition = gender != "" ?  v.gender ==  gender : true;//性別篩選
						var condition2 = v.name.includes(name);//姓名篩選
						var condition3 = element != "" ?  v.element ==  element : true;//元素篩選
						return  condition && condition2 && condition3 ;
					})
				},
				
			},   
            methods:{
				
				turnNextEvent:function(){
					if(this.eventNumber + 1 == this.event.length){
						this.eventNumber = 0;//回到第一個活動
						return;
					}
					this.eventNumber += 1;
				},
				turnLastEvent:function(){
					if(this.eventNumber == 0){
						this.eventNumber = this.event.length -1;//回到最後一個活動
						return;
					}
					this.eventNumber -= 1;
				},
				picMouseDown:function(e){//圖片滑鼠按下不放開
					
					e.target.setAttribute("draggable",true);
				},
				picDragOver:function(e){//圖片滑鼠經過
					// console.log("dragover");
					e.preventDefault();
				},
				picDragStart:function(e){//圖片開始拖曳時
				    
					if(this.urlId != ""){return;}
					var data = e.target.getAttribute("data-dataInfo");
					e.dataTransfer.setData("data-dataInfo",data);
					
				},
				picRepeated:function(obj){//拖曳圖片判斷
				
					var index = this.lotteryFairy.findIndex(function(x){
							return  obj == x.wikiNumber || obj == 'empty';
							//有重複的圖片 或是 拖曳的是空白資料時
						});
					return index == -1 ?true :false;	
				},
				saveTest:function(){//測試使用
					var aaa = [{"id":"208","eventID":"38","event":"黑貓維茲 仲夏感謝季2019","name":"野心奔騰的黑劍 艾盧多貝里克‧哥德","gender":"男","element":"火火","elementSecond":"火","special":"弱化大魔術(單體)","specialSecond":"弱化大魔術(單體)","wikiNumber":"10547","style":"{\"border\":\"3px solid blue\"}"},{"id":"280","eventID":"50","event":"神聖天空之星3","name":"妝點天空的許願星_克蕾緹雅‧布萊葉","gender":"女","element":"水水","elementSecond":"水","special":"弱化大魔術(單體)","specialSecond":"弱化大魔術(單體)","wikiNumber":"10369","style":"{\"border\":\"3px solid blue\"}"},{"id":"249","eventID":"44","event":"霸眼戰線4 覺醒之王","name":"新劍聖王_亞瑟‧卡美洛","gender":"男","element":"雷雷","elementSecond":"雷","special":"弱化大魔術(單體)","specialSecond":"弱化大魔術(單體)","wikiNumber":"10462","style":"{\"border\":\"3px solid blue\"}"},{"id":"484","eventID":"86","event":"《裝神弄鬼》","name":"穿腦的死亡之聲_艾斌","gender":"男","element":"火闇","elementSecond":"闇","special":"技能充填＆延遲(單體)","specialSecond":"技能充填＆延遲(單體)","wikiNumber":"801428","style":"{\"border\":\"3px solid blue\"}"},{"id":"755","eventID":"137","event":"4th anniversary","name":"緊緊連繫的姊妹羈絆 法姆＆費露琪","gender":"女","element":"雷火","elementSecond":"火","special":"特殊變換問題類型【連鎖數增加＆技能充填】","specialSecond":"特殊變換問題類型【連鎖數增加＆技能充填】","wikiNumber":"9958","style":"{\"border\":\"3px solid blue\"}"},{"id":"83","eventID":"15","event":"雙翼的失落伊甸Ⅲ","name":"雙翼的寵姬_梨莎‧洛特蘭達","gender":"女","element":"火水","elementSecond":"水","special":"特殊變換問題類型【連鎖數增加＆技能充填】","specialSecond":"特殊變換問題類型【連鎖數增加＆技能充填】","wikiNumber":"11447","style":"{\"border\":\"3px solid blue\"}"},{"id":"210","eventID":"38","event":"黑貓維茲 仲夏感謝季2019","name":"執行騎士的誕生 流昂‧特拉姆","gender":"男","element":"火光","elementSecond":"光","special":"回答時間停止","specialSecond":"回答時間停止","wikiNumber":"10553","style":"{\"border\":\"3px solid blue\"}"},{"id":"776","eventID":"141","event":"丁酉年末感謝季2018","name":"假日主從 茲洛瓦＆露露貝爾","gender":"女","element":"火闇","elementSecond":"闇","special":"強化精靈【持續回復＆提升能力數值】","specialSecond":"強化精靈【持續回復＆減輕傷害＆提升能力數值】","wikiNumber":"11405","style":"{\"border\":\"3px solid blue\"}"},{"id":"820","eventID":"147","event":"初夏的魔法使慶典","name":"雷電交織的龍戰士_珍妮","gender":"女","element":"雷光","elementSecond":"光","special":"防禦","specialSecond":"防禦","wikiNumber":"801368","style":"{\"border\":\"3px solid blue\"}"},{"id":"191","eventID":"35","event":"豔夏濱海大騷動","name":"神奇魔法大海豹_爽子","gender":"女","element":"水光","elementSecond":"光","special":"融合強化","specialSecond":"融合強化","wikiNumber":"801693","style":"{\"border\":\"3px solid blue\"}"},{"id":"488","eventID":"88","event":"《沉眠之血2》幼龍的鳴嘶","name":"覺醒的幼龍_裴洛恩‧格利菲斯","gender":"男","element":"雷火","elementSecond":"火","special":"時限大魔術","specialSecond":"時限大魔術","wikiNumber":"801824","style":"{\"border\":\"3px solid blue\"}"},{"id":"400","eventID":"69","event":"虛實難辨的假面宴會","name":"賞玩慾望的魔翼天使_珂珂","gender":"女","element":"水雷","elementSecond":"雷","special":"強化精靈【持續回復＆異常狀態失效】","specialSecond":"強化精靈【持續回復＆異常狀態失效】","wikiNumber":"801813","style":"{\"border\":\"3px solid blue\"}"},{"id":"49","eventID":"9","event":"職‧超魔導列傳","name":"菜鳥鑑定士_伊妮亞‧史托拉瑪","gender":"女","element":"水光","elementSecond":"光","special":"保留問題類型【連鎖數增加】","specialSecond":"保留問題類型【連鎖數增加】","wikiNumber":"11279","style":"{\"border\":\"3px solid blue\"}"},{"id":"720","eventID":"130","event":"5th Anniversary","name":"不空想之人 桑榭特‧莉菲爾","gender":"女","element":"雷光","elementSecond":"光","special":"保留問題類型【連鎖數增加】","specialSecond":"保留問題類型【連鎖數增加】","wikiNumber":"11205","style":"{\"border\":\"3px solid blue\"}"},{"id":"214","eventID":"38","event":"黑貓維茲 仲夏感謝季2019","name":"星之聖女 克蕾緹雅‧布萊葉","gender":"女","element":"水水","elementSecond":"水","special":"蓄積解放大魔術‧聖(單體)","specialSecond":"蓄積解放大魔術‧聖(單體)","wikiNumber":"10544","style":"{\"border\":\"3px solid blue\"}"},{"id":"282","eventID":"50","event":"神聖天空之星3","name":"和夏天嬉戲的賢神_莉塔‧班尼斯特","gender":"女","element":"雷雷","elementSecond":"雷","special":"純屬性強化","specialSecond":"純屬性強化","wikiNumber":"10375","style":"{\"border\":\"3px solid blue\"}"},{"id":"207","eventID":"37","event":"Birth Of New Order","name":"手握牙大劍的劍士_克羅什‧特勞","gender":"男","element":"雷闇","elementSecond":"闇","special":"技能充填(單體)","specialSecond":"技能充填(單體)","wikiNumber":"9991","style":"{\"border\":\"3px solid blue\"}"},{"id":"770","eventID":"140","event":"仲夏感謝季2018","name":"歌中交織著夢幻 尊音‧歌詠","gender":"女","element":"雷雷","elementSecond":"雷","special":"強化精靈【持續回復＆異常狀態失效】","specialSecond":"強化精靈【持續回復＆強化傷害＆異常狀態失效】","wikiNumber":"11177","style":"{\"border\":\"3px solid blue\"}"},{"id":"472","eventID":"83","event":"新說 桃娘傳 妖爺合戰誓助劍","name":"舊世界的大賢_初瀨‧之‧島兒","gender":"男","element":"水火","elementSecond":"火","special":"物理反擊","specialSecond":"物理反擊","wikiNumber":"9807","style":"{\"border\":\"3px solid blue\"}"},{"id":"179","eventID":"32","event":"YAOYORO_Z","name":"異國風情與艷麗的變化譚","gender":"女","element":"水雷","elementSecond":"雷","special":"物理反擊(多段式反擊)","specialSecond":"物理反擊(多段式反擊)","wikiNumber":"8541","style":"{\"border\":\"3px solid blue\"}"}];
					this.lotteryFairy = aaa;
					var bbb = JSON.stringify(aaa);
					localStorage.setItem("lotteryFairy",bbb);
					
				},
				orderLottery:function(obj){//幸運圖鑑角色排序
					var event = this.event;
					return obj.sort(function(a,b){
							var aaa = event.findIndex(function(v){
								return v.eventID == a.eventID; 
							});
							var bbb = event.findIndex(function(v){
								return v.eventID == b.eventID; 
							});
							return aaa > bbb ? 1 : -1;
					})
				},
				picDrop:function(e){//有元素拖曳到這張圖片觸發的事件
					e.preventDefault();
					
				    var filelist = e.dataTransfer.files;
				    var data = JSON.parse(e.dataTransfer.getData("data-dataInfo"))
					if(data.wikiNumber == "empty"){return;}
					if(this.picRepeated(data.wikiNumber)){//如果圖片沒重複就儲存
						this.lotteryFairy.push(data);
						this.lotteryFairy = this.orderLottery(this.lotteryFairy);
						console.log("排序~~");
						this.saveToLocal();
						this.warningMessage = "已匯入" + data.name;
					}
					else{
						// console.log("重複了")
						this.warningMessage = "欲匯入的精靈已經重複了";
					}
					
					
				    
				},
				openFairyWiki:function(e){//開啟WIKI資料小視窗
					var data = JSON.parse(e.target.getAttribute("data-dataInfo"));
					if(data.wikiNumber == "empty"){return;}//空白的圖鑑沒有資料
					
					var url = "https://nekowiztw.github.io/cardFinder/#/card/" 
								+ data.wikiNumber;
					window.open(url, "nekoWizWebsite", 
					"toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=500,width=400,height=500");
				},
				goToPicEvent:function(e){ //跳往該活動位置
					var data = JSON.parse(e.target.getAttribute("data-dataInfo"));
					
					var eventNumber = this.event.findIndex(function(v){
						return v.eventID == data.eventID;
					});
					
					this.eventNumber = Number(eventNumber);
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
					
					var eventNumber = this.event.findIndex(function(v){
						return v.eventID == data.eventID;
					});
					this.eventNumber = Number(eventNumber);
					
					
				},
				picCancell:function(e){ //右鍵取消選取該精靈
				
						e.preventDefault(); //關閉右鍵選單 預設動作
						if(this.urlId != ""){return;}
						if(!confirm("確認移除嗎?")){
							//按下取消 不執行
							this.warningMessage = "移除動作取消";
							return;
						}
						
						var data = JSON.parse(e.target.getAttribute("data-dataInfo"));
						var index = this.lotteryFairy.findIndex(function(x){
							return x.wikiNumber == data.wikiNumber;
						});
						this.lotteryFairy.splice(index,1);
						this.lotteryFairy = this.orderLottery(this.lotteryFairy);
						this.saveToLocal();
						this.warningMessage = "移除" + data.name + "成功";
						return;
				},
				goHome:function(){
					if(!confirm("將跳往首頁,確定繼續嗎?")){
							//按下取消 不執行
							this.warningMessage = "動作取消";
							return;
						}
					else{
						this.warningMessage = "將引導至首頁  請稍後";
						setTimeout(function(){
							window.location.href = indexData.baseurl;
						},1000)
						
					}	
				},
				eventPicUrlList:function(number){
					return "img/event/" + number + ".png";
				},
				genderSelectEvent:function(e){//性別篩選 修改按鈕樣式
					var data = e.target.getAttribute("data-dataInfo");
					
					//變化樣式
					for(var i=0;i<this.genderStyle.length;i++){
						this.genderStyle[i].style.active = false;
					}
					this.genderStyle[data].style.active = true;
					
					//變更性別篩選
					this.genderSelect = this.genderStyle[data].name;
				},
				elementSelectEvent:function(e){//元素篩選 修改按鈕樣式
					var element = e.target.getAttribute("data-dataElement");
					var index = e.target.getAttribute("data-dataIndex");
					//console.log(element,index);
					var keys = Object.keys(this.elementStyle);
					
					//變化樣式
					
					var cancell = this.elementStyle[element][index].style["border-primary"];
					//因為元素按鈕按一下可取消  紀錄此變數
					
					for(var i=0;i<keys.length;i++){
						for(j=0;j<5;j++){
							var a = keys[i];
							this.elementStyle[a][j].style["border-primary"] = false;
						}
					}
					this.elementStyle[element][index].style["border-primary"] = ! cancell;
					
					//變更元素篩選
					//如果按鈕被取消選取了   就把資料重置
					 this.elementSelect = cancell == true ? "" : this.elementStyle[element][index].name;
					
				},
				allInToLottery:function(){//將所有資料匯至左方lottery裡
					if(this.urlId != ""){return;}//有ID的情況下不匯入
				
					var condition1 = this.selectFairy.length == 0;
					if(!confirm("確認匯入嗎?")){
						//篩選區裡頭沒資料 或者按下取消 都不執行
						this.warningMessage = "匯入動作取消";
						return;
					}
					else if(condition1){
						this.warningMessage = "沒有可匯入的精靈";
						return;
					}
				
					var data = this.selectFairy;
					var arr = [];
					for(var i=0;i<data.length;i++){
						// console.log("進行到",i);
						if(this.picRepeated(data[i].wikiNumber)){
							arr.push(data[i]);
						}
					}
					
					//合併成新的Lottery陣列
					this.lotteryFairy = this.orderLottery(this.lotteryFairy.concat(arr));
					this.saveToLocal();
					this.warningMessage = "匯入成功";
				},
				saveData:function(){//儲存至雲端
					var condition1 = this.lotteryFairy.length == 0;
					var condition2 = this.lotteryFairy.length > this.limitNumber;
					if(condition1){
						this.warningMessage = "目前沒有匯入的精靈";
						return;
					}
					else if(condition2){
						this.warningMessage = "超過最大數量:" + this.limitNumber;
						return;
					}
					else if(!confirm("確認儲存嗎?")){
						this.warningMessage = "儲存動作取消";
						return;
					}
					else if(!confirm("儲存後.將無法做更改.確定繼續嗎?")){
						this.warningMessage = "儲存動作取消";
						return;
					}
					//通過上述步驟檢測  即可繼續執行判斷
				
				
					if(this.urlId == ""){//網址沒有ID時新增
						var baseUrl = this.baseurl;
                        fireRoot.child("memberData").push(this.lotteryFairy);
                        fireRoot.child("memberData").limitToLast(1).once("child_added",function(s){
                            // console.log("新增的這筆資料",",",s.key);
                            key = s.key;
                        })
                        .then(function(){
                            // console.log("AAA")
                            fireRoot.child("memberList").push(key).then(function(){
                            window.location.href = baseUrl + "?id=" + key;//重新轉址或重載此頁面
                        })
                            // console.log("BBB")
                            
                        })
                        
                        

                    }else{//否則更新資料
                        var obj = {};
						var baseurl = this.baseurl;
                        obj[this.urlId] = this.lotteryFairy;
                        // console.log(obj);
                        fireRoot.child("memberData")
                                .update(obj)
                                .then(function(){
                                    window.location.href = baseurl + "?id=" + indexData.urlId;//重新轉址或重載此頁面
                                });
                    }
				},
				saveToLocal:function(){//存到用戶端資料
				    // console.log(this.lotteryFairy);
					var data = JSON.stringify(this.lotteryFairy)
					localStorage.setItem("lotteryFairy",data);
					
				},
				deleteLocal:function(){//清空用戶端資料
					if(this.lotteryFairy.length==0 || !confirm("確認清除嗎?")){
						//Lottery裡頭沒資料 或者按下取消 都不執行
						this.warningMessage = "清除動作取消";
						return;
					}
				
					localStorage.removeItem("lotteryFairy");
					this.lotteryFairy = [];
					this.warningMessage = "選盤精靈已清空";
				},
				
            },
			watch:{
				//偵測值是否有變動
				warningMessage:function(val,oldVal){//如果有提示訊息  一定時間後清除
					// if(this.warningMessage == ""){return;}
					console.log("有變動");
					clearTimeout(this.setTimer);
					this.setTimer = setTimeout(function(){
						indexData.warningMessage = "";
						console.log("提示訊息已清空");
					},2000);
					
				}
			},
            created() { //模板渲染前
                this.screenWidth = window.innerWidth;
                this.screenHeight = window.innerHeight;
				
				// this.siteStyle.display = "none";
            },
            mounted(){
                //顯示目前長寬  測試用
                // window.addEventListener('resize',function(){
                    // indexData.screenWidth = window.innerWidth;
                    // indexData.screenHeight = window.innerHeight;
                // });
				
				
				var config = {
                  apiKey: "tULDVDSrNIiSQcVGgIoc2JCpWigqZnUnXsm084ca",
                  authDomain: "relaycontrol-fc8da.firebaseapp.com",
                  databaseURL: "https://luckywiz-b266b.firebaseio.com/",
                  projectId: "luckyWiz",
                  storageBucket: "",
                  messagingSenderId: "690750323149"
                };
                
                firebase.initializeApp(config);// Initialize Firebase
                fireRoot = firebase.database().ref("/player");
                fireRoot.child("memberList").once("value",function(s){
                    indexData.memberList = Object.values(s.val());//取得已有之名單資料
                    // console.log(indexData.memberList)

                }).then(function(){
					// console.log("載入完成!");

                    //網址參數判定
                    var url = new URL(location.href);
                    var urlId = url.searchParams.get("id");
					
					if(urlId == null){//如果沒有ID
						console.log("沒有ID");
						if(localStorage.getItem("lotteryFairy")){//如果有客戶端資料  就寫入
							var jsonParseData = JSON.parse(localStorage.getItem("lotteryFairy"));
							// console.log("客戶端",jsonParseData);
							indexData.$set(indexData,"lotteryFairy", jsonParseData);
						}
					}
					else if(indexData.memberList.indexOf(urlId) == -1){
						console.log("無效ID");
						window.location.href = indexData.baseurl;
					}
					else{//載入資料庫資料
						indexData.urlId = urlId;
                        fireRoot.child("memberData/" + urlId).once("value",function(s){
                           indexData.lotteryFairy = s.val();//讀取資料庫資料
						   if(indexData.lotteryFairy == null){indexData.lotteryFairy = [];}
                        })
					}
					
				});
				// console.log("測試",this.lotteryFairy);
				
            },
           })