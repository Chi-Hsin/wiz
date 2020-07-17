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
				"iconMessage":"",
				"footerIcon":[
					{name:"Youtube",url:"<a target='_new' href='https://www.youtube.com/channel/UCj_Fw1XAe33A--xQRbQwsHA'>歡迎光臨我的頻道.主要是拍黑貓攻略影片(´・ω・`)<a>"},
					{name:"Github",url:"<a target='_new' href='https://github.com/Chi-Hsin'>Github專區.我做過的幾個網站_(:3 」∠ )<a>"},
					{name:"Facebook",url:"<a target='_new' href='https://www.facebook.com/hsinhsin.hung/'>Facebook交個朋友吧.或是找我聊天都歡迎哦⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄<a>"},
					{name:"Gmail",url:"<a href='mailto:jack1234552000@gmail.com'>聯絡信箱.使用上的問題或建議歡迎寄信給我ヽ(ﾟ∀。)ノ<a>"},
				],

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
					var name = this.nameSelect.trim();
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
				orderLotteryFairy:function(){//自動排序輪盤上的資料
						if(this.lotteryFairy.length != 0){//如果初始加載(lotteryFairy是空集合) 就不儲存
							// console.log("儲存過前,",this.lotteryFairy,"客戶端有",JSON.parse(localStorage.getItem("lotteryFairy")).length,"個");
							this.saveToLocal();//每次變動都會自動儲存
							// console.log("儲存過後,",this.lotteryFairy,"客戶端有",JSON.parse(localStorage.getItem("lotteryFairy")).length,"個");
							// console.log("自動儲存完畢")
						}
						
						return this.orderLottery(this.lotteryFairy);
						
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
				    
					if(this.urlId != ""){
						this.warningMessage = "此輪盤僅供查看.如要編輯請點擊【回首頁】按鈕";
						return;
					}
					var data = e.target.getAttribute("data-dataInfo");
					e.dataTransfer.setData("data-dataInfo",data);
					
				},
				picRepeated:function(obj){//拖曳圖片判斷
				
					var index = this.lotteryFairy.findIndex(function(x){
							return  obj == x.wikiNumber;
							//有重複的圖片 或是 拖曳的是空白資料時
						});
					return index == -1 ?true :false;	
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
						console.log("排序~~");
						this.warningMessage = "已匯入<span class='warningMsgStyleImport'>" + data.name + "</span>";
					}
					else{
						// console.log("重複了")
						this.warningMessage = "欲匯入的精靈已經重複囉";
					}
					
					
				    
				},
				screenTest:function(){
					alert(3*document.body.offsetWidth/2 - innerWidth)
				},
				openFairyWiki:function(e){//開啟WIKI資料小視窗
					var data = JSON.parse(e.target.getAttribute("data-dataInfo"));
					if(data.wikiNumber == "empty"){return;}//空白的圖鑑沒有資料
					
					var url = "https://nekowiztw.github.io/cardFinder/#/card/" 
								+ data.wikiNumber;
					var settingToolBar = 	"toolbar=yes";
					var settingScrollBar = 	"scrollbars=yes";
					var settingResize = 	"resizable=yes";
					var settingPositionTop = 	"top=" + (outerHeight - innerHeight);
					var settingPositionLeft = 	"left=" + (3*document.body.offsetWidth/2 - innerWidth);
					var settingWidth = 	"width=700";
					var settingHeight = 	"height=" + innerHeight;
					var settingArr = [settingScrollBar,settingResize,settingPositionTop,
									settingPositionLeft,settingWidth,settingHeight];
					var setting = settingArr.join(",");				
					console.log(setting);											
					window.open(url, "nekoWizWebsite",setting);
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
						this.warningMessage = "移除<span class='warningMsgStyleCancel'>" + data.name + "</span>成功";
						return;
				},
				randomSelect:function(){//隨機挑選功能
					if(this.lotteryFairy.length != 0){
						if(!confirm("盤面上已有資料.確定覆蓋嗎?")){
							this.warningMessage = "執行動作取消";
							return;
						}
					}
					
					var arr = Array.from({length:this.fairy.length}, (v, i) => i);
					this.lotteryFairy = [];
					// console.log(arr)
					for(var i=0;i<this.limitNumber;i++){
						var aaa = Math.floor(Math.random() * arr.length);
						var deleted = arr.splice(aaa,1);
						var data = deleted[0];
						// console.log("篩選到的為編號",data);
						this.lotteryFairy.push(this.fairy[data]);
						
					}
					this.warningMessage = "已自動選擇" + this.limitNumber + "隻精靈";
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
					
					if(condition1){
						this.warningMessage = "沒有可匯入的精靈";
						return;
					}
					else if(!confirm("確認匯入嗎?")){
						//篩選區裡頭沒資料 或者按下取消 都不執行
						this.warningMessage = "匯入動作取消";
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
					this.lotteryFairy = this.lotteryFairy.concat(arr);
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
				showIconMessage:function(e){
					var data = e.target.getAttribute("data-dataInfo");
					this.iconMessage = data;
				},
            },
			watch:{
				//偵測值是否有變動
				warningMessage:function(val,oldVal){//如果有提示訊息  一定時間後清除
					if(this.warningMessage != ""){
						console.log("有變動");
						clearTimeout(this.setTimer);
						this.setTimer = setTimeout(function(){
							indexData.warningMessage = "";
							console.log("提示訊息已清空");
						},3000);
					}
					
					
				},
				// lotteryFairy:function(val,oldVal){
					// if(this.lotteryFairy !=[]){
						// console.log("儲存過前,",this.lotteryFairy,"客戶端有",JSON.parse(localStorage.getItem("lotteryFairy")).length,"個");
						// this.saveToLocal();
						// console.log("儲存過後,",this.lotteryFairy,"客戶端有",JSON.parse(localStorage.getItem("lotteryFairy")).length,"個");
						// console.log("自動儲存完畢")
					// }
					
				// },
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
		   
