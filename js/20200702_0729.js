var indexData = new Vue({
            el: '#outerDiv',
            data: {
                "screenHeight":"",
                "screenWidth":"",
				"event":[//活動事件
							{"name":"FairyChord Prelude","eventID":"24","picName":"E25"},
							{"name":"SUGARLESS BAMBINA Ⅱ Slaughter Prison","eventID":"23","picName":"E24"},
							{"name":"啵！神明大人_～北風精靈與炎之鳥～","eventID":"21","picName":"E22"},
							{"name":"歡迎光臨天上岬山麓咖啡廳！","eventID":"14","picName":"E15"},
							{"name":"職‧超魔導列傳","eventID":"9","picName":"E9"},
							{"name":"恭賀新禧2020","eventID":"129","picName":"E130"},
							{"name":"5th Anniversary","eventID":"130","picName":"E131"},
							{"name":"FairyChord 妖精的和弦","eventID":"131","picName":"E132"},
							{"name":"響命CrossDerive ACT3","eventID":"55","picName":"E56"},
							{"name":"神明大人 ～土精靈與黑貓主人～","eventID":"122","picName":"E123"},
							{"name":"霸眼戰線 終戰之凜煌眼 -前篇","eventID":"43","picName":"E44"},
							{"name":"感謝祭2020","eventID":"132","picName":"E133"},
							{"name":"Christmas2019","eventID":"133","picName":"E134"},
							{"name":"暑假即將到來","eventID":"134","picName":"E135"},
							{"name":"太陽與月亮之國 喀姆吉納","eventID":"135","picName":"E136"},
							{"name":"喰牙RIZE3 -Fang-O’-Blazer","eventID":"27","picName":"E28"},
							{"name":"八百八町妖怪捕物帳","eventID":"2","picName":"E2"},
							{"name":"Birth Of New Order2 大罪","eventID":"36","picName":"E37"},
							{"name":"黑貓維茲 仲夏感謝季2019","eventID":"38","picName":"E39"},
							{"name":"MARELESSⅡ 夢境與現實的夾縫","eventID":"3","picName":"E3"},
							{"name":"霸眼戰線4 覺醒之王","eventID":"44","picName":"E45"},
							{"name":"神聖天空之星3","eventID":"50","picName":"E51"},
							{"name":"惡作劇女神與兔子的故事","eventID":"53","picName":"E54"},
							{"name":"幻魔特區RELOADEDⅡ -RE:unite","eventID":"60","picName":"E61"},
							{"name":"空戰的修瓦爾茲","eventID":"65","picName":"E66"},
							{"name":"感謝祭2019","eventID":"136","picName":"E137"},
							{"name":"黃昏無夢者Ⅳ 黃昏mareless","eventID":"39","picName":"E40"},
							{"name":"Birth Of New Order","eventID":"37","picName":"E38"},
							{"name":"4th anniversary","eventID":"137","picName":"E138"},
							{"name":"沉睡的遺跡 Outlander","eventID":"58","picName":"E59"},
							{"name":"恭賀新禧2019","eventID":"138","picName":"E139"},
							{"name":"給夏日綻放的你","eventID":"87","picName":"E88"},
							{"name":"偶像ω喵！！","eventID":"72","picName":"E73"},
							{"name":"淡薄的藍色光芒 最終章 終極聖祈","eventID":"74","picName":"E75"},
							{"name":"神聖天空之星2","eventID":"51","picName":"E52"},
							{"name":"SUGARLESS_BAMBINA","eventID":"22","picName":"E23"},
							{"name":"秋末迎冬感謝祭","eventID":"139","picName":"E140"},
							{"name":"再續‧超魔導列傳","eventID":"6","picName":"E6"},
							{"name":"新說 桃娘傳Ⅱ 機關桃源虹繪卷","eventID":"82","picName":"E83"},
							{"name":"雙翼的失落伊甸Ⅲ","eventID":"15","picName":"E16"},
							{"name":"AbyssCode07 寂寞的境界","eventID":"85","picName":"E86"},
							{"name":"幻魔特區RELOADED -GardeniA dist.","eventID":"61","picName":"E62"},
							{"name":"空戰的德爾基馬斯Ⅲ 飄揚的軍旗","eventID":"66","picName":"E67"},
							{"name":"喰牙RIZE2_-Tearing_Eyes","eventID":"29","picName":"E30"},
							{"name":"仲夏感謝季2018","eventID":"140","picName":"E141"},
							{"name":"聖惡魔女子學院2","eventID":"91","picName":"E92"},
							{"name":"響命CrossDerive ACT2","eventID":"56","picName":"E57"},
							{"name":"歌頌永恆的克羅諾斯Ⅲ","eventID":"18","picName":"E19"},
							{"name":"黃昏無夢者Ⅲ_絡園loreless","eventID":"40","picName":"E41"},
							{"name":"八百萬諸神祕聞4_沉眠京城的悠久之歌","eventID":"31","picName":"E32"},
							{"name":"偶像ω喵！前&後篇","eventID":"73","picName":"E74"},
							{"name":"喰牙RIZE","eventID":"30","picName":"E31"},
							{"name":"響命CrossDerive","eventID":"57","picName":"E58"},
							{"name":"丁酉年末感謝季2018","eventID":"141","picName":"E142"},
							{"name":"新說 桃娘傳 妖爺合戰誓助劍","eventID":"83","picName":"E84"},
							{"name":"魔轟三鐵傑 對 地獄三十六歌仙","eventID":"95","picName":"E96"},
							{"name":"霸眼戰線3 聖劍與霸眼","eventID":"45","picName":"E46"},
							{"name":"霸眼戰線2 起始之眼","eventID":"46","picName":"E47"},
							{"name":"霸眼戰線","eventID":"47","picName":"E48"},
							{"name":"黃昏無夢者Ⅱ 殘響dearless","eventID":"41","picName":"E42"},
							{"name":"黃昏無夢者","eventID":"42","picName":"E43"},
							{"name":"雙翼的失落伊甸Ⅱ WWMF","eventID":"16","picName":"E17"},
							{"name":"雙翼的失落伊甸","eventID":"17","picName":"E18"},
							{"name":"YAOYORO_Z","eventID":"32","picName":"E33"},
							{"name":"八百萬諸神祕聞2","eventID":"33","picName":"E34"},
							{"name":"八百萬諸神祕聞","eventID":"34","picName":"E35"},
							{"name":"續.超魔導列傳","eventID":"7","picName":"E7"},
							{"name":"超魔導列傳","eventID":"8","picName":"E8"},
							{"name":"空戰的德爾基馬斯Ⅱ 昏暗英雄","eventID":"67","picName":"E68"},
							{"name":"空戰的德爾基馬斯","eventID":"68","picName":"E69"},
							{"name":"神聖天空之星","eventID":"52","picName":"E53"},
							{"name":"心龍天翔 Rising Dragon","eventID":"98","picName":"E99"},
							{"name":"神龍降臨Ⅱ","eventID":"142","picName":"E143"},
							{"name":"追憶的閃耀光輝","eventID":"100","picName":"E101"},
							{"name":"聖惡魔女子學院","eventID":"92","picName":"E93"},
							{"name":"庫洛姆‧麥格納 零","eventID":"108","picName":"E109"},
							{"name":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","eventID":"109","picName":"E110"},
							{"name":"庫洛姆‧麥格納Ⅳ單戀☆狂想曲","eventID":"110","picName":"E111"},
							{"name":"庫洛姆‧麥格納Ⅲ臨海學校","eventID":"111","picName":"E112"},
							{"name":"幻魔特區朱雀Ⅲ 幻夢之光","eventID":"62","picName":"E63"},
							{"name":"幻魔特區朱雀Ⅱ 鋼鐵之槍","eventID":"63","picName":"E64"},
							{"name":"幻魔特區朱雀","eventID":"64","picName":"E65"},
							{"name":"歌頌永恆的克羅諾斯Ⅱ","eventID":"19","picName":"E20"},
							{"name":"天上岬的調香師","eventID":"12","picName":"E13"},
							{"name":"天上岬～永恆的公主～","eventID":"13","picName":"E14"},
							{"name":"天界的雙子 訣別的年代記","eventID":"54","picName":"E55"},
							{"name":"古代森林的千年櫻花","eventID":"143","picName":"E144"},
							{"name":"AbyssCode06 劫末之獸","eventID":"102","picName":"E103"},
							{"name":"AbyssCode05 冥世的天蓋","eventID":"115","picName":"E116"},
							{"name":"AbyssCode04 燃燒殆盡的陽光","eventID":"116","picName":"E117"},
							{"name":"AbyssCode03 生而墮於虛無","eventID":"117","picName":"E118"},
							{"name":"AbyssCode02 盲目的調和","eventID":"118","picName":"E119"},
							{"name":"AbyssCode01 黑殼之王","eventID":"119","picName":"E120"},
							{"name":"Tempest Blader","eventID":"106","picName":"E107"},
							{"name":"Heretic Blader","eventID":"105","picName":"E106"},
							{"name":"Divine Blader","eventID":"107","picName":"E108"},
							{"name":"Demons Blader","eventID":"104","picName":"E105"},
							{"name":"鬼月限定2017","eventID":"144","picName":"E145"},
							{"name":"情人紀念2017","eventID":"145","picName":"E146"},
							{"name":"來自異界的天使","eventID":"99","picName":"E100"},
							{"name":"黑夜中的甜點大盜","eventID":"96","picName":"E97"},
							{"name":"跑錯地方的聖誕驚喜","eventID":"146","picName":"E147"},
							{"name":"初夏的魔法使慶典","eventID":"147","picName":"E148"},
							{"name":"被封印的舞台劇目","eventID":"101","picName":"E102"},
							{"name":"神祕委託‧寒冰之巔的考驗","eventID":"71","picName":"E72"},
							{"name":"武鬥之巔‧寒冰嶺上的召集令","eventID":"97","picName":"E98"},
							{"name":"七夕夜‧煙花燦爛","eventID":"80","picName":"E81"},
							{"name":"炎夏的海灘風情！","eventID":"79","picName":"E80"},
							{"name":"雞茲限定  感謝祭2017","eventID":"148","picName":"E149"},
							{"name":"Holloween night2017","eventID":"149","picName":"E150"},
							{"name":"片翼天使的轉世約定","eventID":"78","picName":"E79"},
							{"name":"《聖誕情侶決定戰》","eventID":"94","picName":"E95"},
							{"name":"虛實難辨的假面宴會","eventID":"69","picName":"E70"},
							{"name":"冰雪薔薇的黑影","eventID":"90","picName":"E91"},
							{"name":"《沉眠之血2》幼龍的鳴嘶","eventID":"88","picName":"E89"},
							{"name":"《沉眠之血》—焚焰的國度","eventID":"89","picName":"E90"},
							{"name":"《沙灘上的冰果宴》","eventID":"70","picName":"E71"},
							{"name":"《裝神弄鬼》","eventID":"86","picName":"E87"},
							{"name":"《靈界魔女：危險紳士之章》","eventID":"81","picName":"E82"},
							{"name":"寄語冬夜的祈願者","eventID":"25","picName":"E26"},
							{"name":"阿爾克納與星之旅途","eventID":"5","picName":"E5"},
							{"name":"The Luminescence of Soul 靈魂的微光","eventID":"11","picName":"E11"},
							{"name":"The Iridescence of Soul 靈魂的虹彩","eventID":"10","picName":"E10"},
							{"name":"庫耶斯式拍拖約會","eventID":"49","picName":"E50"},
							{"name":"豔夏濱海大騷動","eventID":"35","picName":"E36"},
							{"name":"寄語冬夜的祈願者Ⅱ_虛妄之地的追尋者","eventID":"26","picName":"E27"},
							{"name":"阿爾克納與星之旅途Ⅱ 永戰之地","eventID":"1","picName":"E1"},
							{"name":"年之運行","eventID":"124","picName":"E125"}			
						],
				"fairy":[//角色資料
							{"id":"1","eventID":"1","event":"阿爾克納與星之旅途Ⅱ 永戰之地","name":"守護與循環的世界 夜風嵐","gender":"男","element":"雷光","elementSecond":"光","special":"特殊變換問題類型【連鎖數增加＆技能充填】","specialSecond":"特殊變換問題類型【連鎖數增加＆技能充填】","wikiNumber":"801802","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"2","eventID":"1","event":"阿爾克納與星之旅途Ⅱ 永戰之地","name":"沉溺慾望的惡魔 戴爾波","gender":"男","element":"火光","elementSecond":"光","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"801792","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"3","eventID":"1","event":"阿爾克納與星之旅途Ⅱ 永戰之地","name":"創造與可能的魔術師 枍葙","gender":"男","element":"雷光","elementSecond":"光","special":"複屬性回復","specialSecond":"複屬性回復","wikiNumber":"801794","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"4","eventID":"1","event":"阿爾克納與星之旅途Ⅱ 永戰之地","name":"戒律與秩序的皇帝 托戈勒特．帕爾","gender":"男","element":"火光","elementSecond":"光","special":"融合強化","specialSecond":"融合強化","wikiNumber":"801796","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"5","eventID":"1","event":"阿爾克納與星之旅途Ⅱ 永戰之地","name":"豐碩之愛的皇后 伊莎貝拉","gender":"女","element":"水火","elementSecond":"火","special":"毒","specialSecond":"毒","wikiNumber":"801798","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"6","eventID":"1","event":"阿爾克納與星之旅途Ⅱ 永戰之地","name":"生命祝福的星星 忻羽","gender":"女","element":"雷水","elementSecond":"水","special":"Boost提升(全體)","specialSecond":"Boost提升(全體)","wikiNumber":"801800","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"7","eventID":"2","event":"八百八町妖怪捕物帳","name":"無法冷卻的正義沸水 薩克特‧大神","gender":"男","element":"水火","elementSecond":"火","special":"起死回生","specialSecond":"起死回生","wikiNumber":"10728","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"8","eventID":"2","event":"八百八町妖怪捕物帳","name":"守護八百八町 文繼‧葦原","gender":"男","element":"水","elementSecond":"水","special":"蓄積解放大魔術‧破(全體)","specialSecond":"蓄積解放大魔術‧破(全體)","wikiNumber":"10713","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"9","eventID":"2","event":"八百八町妖怪捕物帳","name":"鬼道之花綻放 美緒‧葛折","gender":"女","element":"火水","elementSecond":"水","special":"解除效果(全體)【防禦＆阻隔傷害】","specialSecond":"解除效果大魔術(全體)【防禦＆阻隔傷害】","wikiNumber":"10716","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"10","eventID":"2","event":"八百八町妖怪捕物帳","name":"正向思考 木葉‧依姬","gender":"女","element":"火","elementSecond":"火","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"10719","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"11","eventID":"2","event":"八百八町妖怪捕物帳","name":"營利和人情的互補 登美‧言壽","gender":"女","element":"雷","elementSecond":"雷","special":"賦予雙重技能(全體)","specialSecond":"賦予雙重技能(全體)","wikiNumber":"10722","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"12","eventID":"2","event":"八百八町妖怪捕物帳","name":"錦上添花的美豔女郎 夕霧‧雨野","gender":"女","element":"雷","elementSecond":"雷","special":"變換問題類型","specialSecond":"純屬性變換問題類型【技能充填】","wikiNumber":"10725","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"13","eventID":"3","event":"MARELESSⅡ 夢境與現實的夾縫","name":"超越道理的射手 蘿莎莉亞‧哈特","gender":"女","element":"雷光","elementSecond":"光","special":"蓄積解放大魔術‧聖(單體)","specialSecond":"蓄積解放大魔術‧聖(單體)","wikiNumber":"10499","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"14","eventID":"3","event":"MARELESSⅡ 夢境與現實的夾縫","name":"所繼承夢想的推力 愛琳‧葉茨","gender":"女","element":"水光","elementSecond":"光","special":"特殊變換問題類型【強化傷害】","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"10502","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"15","eventID":"3","event":"MARELESSⅡ 夢境與現實的夾縫","name":"散發魔之常闇 諾庫斯‧瓦尼塔斯","gender":"男","element":"火闇","elementSecond":"闇","special":"蓄積解放大魔術‧邪(單體)","specialSecond":"蓄積解放大魔術‧邪(單體)","wikiNumber":"10505","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"16","eventID":"3","event":"MARELESSⅡ 夢境與現實的夾縫","name":"無數的思念 拉提歐‧星辰","gender":"男","element":"雷","elementSecond":"雷","special":"捕食大魔術(全體)","specialSecond":"捕食大魔術(全體)","wikiNumber":"10511","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"17","eventID":"3","event":"MARELESSⅡ 夢境與現實的夾縫","name":"求夢妖精的化身 阿浮利德","gender":"男","element":"水闇","elementSecond":"闇","special":"產生連結問題類型","specialSecond":"強化傷害(自身)","wikiNumber":"10508","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"18","eventID":"3","event":"MARELESSⅡ 夢境與現實的夾縫","name":"為了主人的夢想 露西尼雅‧雷梅蒂","gender":"女","element":"火","elementSecond":"火","special":"問題類型爆破大魔術","specialSecond":"問題類型爆破大魔術","wikiNumber":"10514","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"22","eventID":"5","event":"阿爾克納與星之旅途","name":"以柔克剛的力量 絲炟爾·瓊","gender":"女","element":"雷闇","elementSecond":"闇","special":"異常狀態失效","specialSecond":"異常狀態失效","wikiNumber":"801573","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"23","eventID":"5","event":"阿爾克納與星之旅途","name":"玄不改命運之輪 水清","gender":"女","element":"火水","elementSecond":"水","special":"阻隔傷害","specialSecond":"阻隔傷害","wikiNumber":"801571","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"24","eventID":"5","event":"阿爾克納與星之旅途","name":"單戀的女祭司 迪雅絲‧泰拉","gender":"女","element":"水","elementSecond":"水","special":"強化擊破","specialSecond":"強化擊破","wikiNumber":"801569","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"25","eventID":"5","event":"阿爾克納與星之旅途","name":"點綴希望的星星 忻羽","gender":"女","element":"水雷","elementSecond":"雷","special":"多重魔術(單體)","specialSecond":"統一大魔術","wikiNumber":"801567","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"26","eventID":"5","event":"阿爾克納與星之旅途","name":"一往無前的戰車 夜明．泰倫","gender":"男","element":"雷水","elementSecond":"水","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"801575","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"27","eventID":"5","event":"阿爾克納與星之旅途","name":"絕對正義 璐彌‧斯卡燐","gender":"女","element":"火光","elementSecond":"光","special":"炸裂大魔術","specialSecond":"炸裂大魔術","wikiNumber":"801577","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"28","eventID":"6","event":"再續‧超魔導列傳","name":"新娘 in 魔導棺材 愛莉葉塔‧多娃","gender":"女","element":"水火","elementSecond":"火","special":"產生連結問題類型","specialSecond":"產生連結問題類型","wikiNumber":"9265","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"29","eventID":"6","event":"再續‧超魔導列傳","name":"超惡作劇魔導士 莉露姆‧洛洛特","gender":"女","element":"水水","elementSecond":"水","special":"一閃斬擊大魔術","specialSecond":"一閃斬擊大魔術","wikiNumber":"9268","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"30","eventID":"6","event":"再續‧超魔導列傳","name":"本性是小惡魔 伊妮亞‧史托拉瑪","gender":"女","element":"火火","elementSecond":"火","special":"炸裂大魔術","specialSecond":"炸裂大魔術","wikiNumber":"9271","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"31","eventID":"6","event":"再續‧超魔導列傳","name":"詛咒繃帶 艾莉絲＝瑪基爾‧夏璐姆","gender":"女","element":"雷雷","elementSecond":"雷","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"9277","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"32","eventID":"6","event":"再續‧超魔導列傳","name":"超爆發的看護屍 蕾娜‧依拉普修","gender":"女","element":"火火","elementSecond":"火","special":"大魔術(單體)","specialSecond":"大魔術(單體)","wikiNumber":"9280","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"33","eventID":"7","event":"續.超魔導列傳","name":"魔導比海更寬廣 愛莉葉塔‧多娃","gender":"女","element":"雷雷","elementSecond":"雷","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"9350","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"34","eventID":"7","event":"續.超魔導列傳","name":"燦杖少女 艾莉絲＝瑪基爾‧夏璐","gender":"女","element":"水雷","elementSecond":"雷","special":"異常狀態失效","specialSecond":"持續回復","wikiNumber":"9351","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"35","eventID":"7","event":"續.超魔導列傳","name":"悠久的大魔導 伊妮亞‧史托拉瑪","gender":"女","element":"水水","elementSecond":"水","special":"強化傷害(指定屬性)","specialSecond":"回復異常狀態","wikiNumber":"6541","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"36","eventID":"7","event":"續.超魔導列傳","name":"超絕夏日少女 莉露姆‧洛洛特","gender":"女","element":"水水","elementSecond":"水","special":"弱化大魔術(單體)","specialSecond":"弱化大魔術(單體)","wikiNumber":"9353","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"37","eventID":"7","event":"續.超魔導列傳","name":"飛吧☆夏日彗星 蘇菲‧哈涅特","gender":"女","element":"雷水","elementSecond":"水","special":"延遲(全體)","specialSecond":"技能充填＆延遲(全體)","wikiNumber":"9354","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"38","eventID":"7","event":"續.超魔導列傳","name":"大魔導士的夏之色 蕾娜‧依拉普修","gender":"女","element":"火火","elementSecond":"火","special":"提昇(全體)","specialSecond":"提昇(全體)","wikiNumber":"9355","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"39","eventID":"7","event":"續.超魔導列傳","name":"在煙火之夜登場！ 大魔導士！","gender":"女","element":"雷水","elementSecond":"水","special":"物理反擊","specialSecond":"物理反擊","wikiNumber":"9356","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"40","eventID":"7","event":"續.超魔導列傳","name":"集結！ 超無敵魔導女孩！","gender":"女","element":"火光","elementSecond":"光","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"9357","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"41","eventID":"8","event":"超魔導列傳","name":"超越的大魔導怪獸 愛莉葉塔・多娃","gender":"女","element":"火水","elementSecond":"水","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"11307","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"42","eventID":"8","event":"超魔導列傳","name":"超革命魔導女孩_莉露姆‧洛洛特","gender":"女","element":"水火","elementSecond":"火","special":"犧牲魔術(全體)","specialSecond":"犧牲魔術(全體)","wikiNumber":"11308","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"43","eventID":"8","event":"超魔導列傳","name":"描繪夢想的彗星_蘇菲‧哈涅特","gender":"女","element":"雷水","elementSecond":"水","special":"技能複製","specialSecond":"技能複製","wikiNumber":"11309","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"44","eventID":"8","event":"超魔導列傳","name":"繼承與雷霆的_蕾娜‧依拉普修","gender":"女","element":"雷雷","elementSecond":"雷","special":"特殊變換問題類型【連鎖數增加】","specialSecond":"特殊變換問題類型【連鎖數增加】","wikiNumber":"11310","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"45","eventID":"8","event":"超魔導列傳","name":"縛眼的牢籠_艾莉絲＝瑪基爾‧夏璐姆","gender":"女","element":"水雷","elementSecond":"雷","special":"強化複屬性傷害","specialSecond":"強化複屬性傷害","wikiNumber":"11311","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"46","eventID":"9","event":"職‧超魔導列傳","name":"超確實中選_愛莉葉塔‧多娃","gender":"女","element":"水水","elementSecond":"水","special":"蓄積解放大魔術‧印(全體)","specialSecond":"蓄積解放大魔術‧印(全體)","wikiNumber":"11270","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"47","eventID":"9","event":"職‧超魔導列傳","name":"社會派記者_莉露姆‧洛洛特","gender":"女","element":"火雷","elementSecond":"雷","special":"L次數大魔術","specialSecond":"L次數大魔術","wikiNumber":"11273","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"48","eventID":"9","event":"職‧超魔導列傳","name":"魔導RQ_艾莉絲＝瑪基爾‧夏璐姆","gender":"女","element":"雷雷","elementSecond":"雷","special":"無屬性變化","specialSecond":"無屬性變化","wikiNumber":"11276","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"49","eventID":"9","event":"職‧超魔導列傳","name":"菜鳥鑑定士_伊妮亞‧史托拉瑪","gender":"女","element":"水光","elementSecond":"光","special":"保留問題類型【連鎖數增加】","specialSecond":"保留問題類型【連鎖數增加】","wikiNumber":"11279","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"50","eventID":"9","event":"職‧超魔導列傳","name":"燃燒的消防員_蕾娜‧依拉普修","gender":"女","element":"火火","elementSecond":"火","special":"問題類型爆破大魔術","specialSecond":"問題類型爆破大魔術","wikiNumber":"11282","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"51","eventID":"9","event":"職‧超魔導列傳","name":"探求魔導科學_蘇菲‧哈涅特","gender":"女","element":"雷光","elementSecond":"光","special":"弱化大魔術(單體)","specialSecond":"弱化大魔術(單體)","wikiNumber":"11285","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"52","eventID":"10","event":"The Iridescence of Soul 靈魂的虹彩","name":"蜉生蝣夢_蝴蝶","gender":"女","element":"水光","elementSecond":"光","special":"激化大魔術","specialSecond":"激化大魔術","wikiNumber":"801636","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"53","eventID":"10","event":"The Iridescence of Soul 靈魂的虹彩","name":"星源詠唱者_拉索","gender":"男","element":"雷雷","elementSecond":"雷","special":"毒","specialSecond":"毒","wikiNumber":"801638","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"54","eventID":"10","event":"The Iridescence of Soul 靈魂的虹彩","name":"光曜虹彩_珂珂","gender":"女","element":"雷闇","elementSecond":"闇","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"801640","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"55","eventID":"10","event":"The Iridescence of Soul 靈魂的虹彩","name":"乘風破浪_寶迪","gender":"男","element":"火水","elementSecond":"水","special":"特殊變換問題類型【隨機】","specialSecond":"特殊變換問題類型【隨機】","wikiNumber":"801642","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"56","eventID":"10","event":"The Iridescence of Soul 靈魂的虹彩","name":"海岸巡防天使_紬","gender":"女","element":"火光","elementSecond":"光","special":"統一大魔術","specialSecond":"統一大魔術","wikiNumber":"801646","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"57","eventID":"10","event":"The Iridescence of Soul 靈魂的虹彩","name":"神出鬼沒怪盜_格拉娜","gender":"女","element":"雷火","elementSecond":"火","special":"強化精靈【持續回復＆強化傷害】","specialSecond":"強化精靈【持續回復＆強化傷害＆異常狀態失效】","wikiNumber":"801648","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"58","eventID":"11","event":"The Luminescence of Soul 靈魂的微光","name":"引領靈魂的熒燈_歌莉亞","gender":"女","element":"雷光","elementSecond":"光","special":"刪去回答","specialSecond":"刪去回答","wikiNumber":"801621","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"59","eventID":"11","event":"The Luminescence of Soul 靈魂的微光","name":"一期一會_蜜多莉","gender":"女","element":"火火","elementSecond":"火","special":"詠唱大魔術","specialSecond":"詠唱大魔術","wikiNumber":"801623","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"60","eventID":"11","event":"The Luminescence of Soul 靈魂的微光","name":"桃花流水_露絲娜","gender":"女","element":"水火","elementSecond":"火","special":"強化複屬性傷害","specialSecond":"強化複屬性傷害","wikiNumber":"801625","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"61","eventID":"11","event":"The Luminescence of Soul 靈魂的微光","name":"相倚的莫逆之翼_瞬＆陽","gender":"男","element":"雷水","elementSecond":"水","special":"一閃斬擊大魔術","specialSecond":"一閃斬擊大魔術","wikiNumber":"801627","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"62","eventID":"11","event":"The Luminescence of Soul 靈魂的微光","name":"藍色冰果潘趣_帕榭菈","gender":"女","element":"水水","elementSecond":"水","special":"特效大魔術(單體)","specialSecond":"強化傷害(自身)","wikiNumber":"801629","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"63","eventID":"11","event":"The Luminescence of Soul 靈魂的微光","name":"經歷過的那些風浪_拉布","gender":"男","element":"火雷","elementSecond":"雷","special":"強化擊破","specialSecond":"強化擊破","wikiNumber":"801631","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"64","eventID":"12","event":"天上岬的調香師","name":"將回憶藏在心中_法姆‧莉莉","gender":"女","element":"水雷","elementSecond":"雷","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"10867","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"65","eventID":"12","event":"天上岬的調香師","name":"天上岬工房的屋主_費露琪‧莉莉","gender":"女","element":"火水","elementSecond":"水","special":"防禦連鎖","specialSecond":"AS特殊變化","wikiNumber":"10868","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"66","eventID":"12","event":"天上岬的調香師","name":"毛絨絨國公主_芽寧朵‧芙莉爾","gender":"女","element":"雷火","elementSecond":"火","special":"刪去回答","specialSecond":"刪去回答","wikiNumber":"10869","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"67","eventID":"12","event":"天上岬的調香師","name":"守護森林的魔彈槍_利谷斯‧那哈爾","gender":"男","element":"雷雷","elementSecond":"雷","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"10870","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"68","eventID":"12","event":"天上岬的調香師","name":"引以為豪的薰香！_南露娜‧卡絲妲","gender":"女","element":"火水","elementSecond":"水","special":"持續回復","specialSecond":"持續回復","wikiNumber":"10871","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"69","eventID":"12","event":"天上岬的調香師","name":"記錄調香術的歷史_羅尼爾‧庫姆","gender":"男","element":"水雷","elementSecond":"雷","special":"變換問題類型","specialSecond":"特殊變換問題類型【隨機】","wikiNumber":"10872","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"70","eventID":"13","event":"天上岬～永恆的公主～","name":"天上岬的飛毛腿_卡爾特羅‧雷納德","gender":"男","element":"水水","elementSecond":"水","special":"延遲(全體)","specialSecond":"延遲大魔術(全體)","wikiNumber":"11128","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"71","eventID":"13","event":"天上岬～永恆的公主～","name":"小麥王子_布列得‧克拉夫茲","gender":"男","element":"火火","elementSecond":"火","special":"持續回復","specialSecond":"強化精靈【持續回復＆強化傷害】","wikiNumber":"11127","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"72","eventID":"13","event":"天上岬～永恆的公主～","name":"大自然的探究者_貝亞德‧菲薩","gender":"男","element":"火雷","elementSecond":"雷","special":"刪去回答","specialSecond":"刪去回答","wikiNumber":"11126","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"73","eventID":"13","event":"天上岬～永恆的公主～","name":"夢見鳥的調香師_亞妮蘿‧菲薩","gender":"女","element":"雷雷","elementSecond":"雷","special":"回復異常狀態","specialSecond":"回復異常狀態＆復活","wikiNumber":"11125","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"74","eventID":"14","event":"歡迎光臨天上岬山麓咖啡廳！","name":"用味道虜獲人心_法姆‧莉莉","gender":"女","element":"雷水","elementSecond":"水","special":"蓄積解放大魔術‧破(全體)","specialSecond":"蓄積解放大魔術‧破(全體)","wikiNumber":"11089","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"75","eventID":"14","event":"歡迎光臨天上岬山麓咖啡廳！","name":"吸引顧客的視線_費露琪‧莉莉","gender":"女","element":"雷雷","elementSecond":"雷","special":"物理反擊（充填）","specialSecond":"物理反擊（充填）","wikiNumber":"11092","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"76","eventID":"14","event":"歡迎光臨天上岬山麓咖啡廳！","name":"店家的活招牌_愛特露涅‧波姆","gender":"女","element":"火雷","elementSecond":"雷","special":"犧牲連鎖強化","specialSecond":"犧牲連鎖強化","wikiNumber":"11095","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"77","eventID":"14","event":"歡迎光臨天上岬山麓咖啡廳！","name":"和服裝搭配_莉露‧萊路","gender":"女","element":"水火","elementSecond":"火","special":"捕食大魔術(全體)","specialSecond":"捕食大魔術(全體)","wikiNumber":"11098","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"78","eventID":"14","event":"歡迎光臨天上岬山麓咖啡廳！","name":"嶄新的羈絆_利谷斯＆梅貝爾","gender":"男女","element":"火火","elementSecond":"火","special":"時限大魔術","specialSecond":"時限大魔術","wikiNumber":"11101","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"79","eventID":"14","event":"歡迎光臨天上岬山麓咖啡廳！","name":"向森林報恩_毛絨絨＆芽寧朵","gender":"女","element":"水水","elementSecond":"水","special":"強化精靈【持續回復＆減輕傷害＆強化傷害】","specialSecond":"強化精靈【持續回復＆減輕傷害＆強化傷害】","wikiNumber":"11104","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"80","eventID":"15","event":"雙翼的失落伊甸Ⅲ","name":"王高呼惡意_艾盧多貝里克‧哥德","gender":"男","element":"雷雷","elementSecond":"雷","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"11444","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"81","eventID":"15","event":"雙翼的失落伊甸Ⅲ","name":"記憶深淵輕聲嗤笑_露席菈‧弗歐魯","gender":"女","element":"火光","elementSecond":"光","special":"強化擊破","specialSecond":"強化擊破","wikiNumber":"11445","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"82","eventID":"15","event":"雙翼的失落伊甸Ⅲ","name":"雙翼的系譜_琉迪格‧希古拉","gender":"男","element":"水水","elementSecond":"水","special":"連鎖解放大魔術","specialSecond":"連鎖解放大魔術","wikiNumber":"11446","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"83","eventID":"15","event":"雙翼的失落伊甸Ⅲ","name":"雙翼的寵姬_梨莎‧洛特蘭達","gender":"女","element":"火水","elementSecond":"水","special":"特殊變換問題類型【連鎖數增加＆技能充填】","specialSecond":"特殊變換問題類型【連鎖數增加＆技能充填】","wikiNumber":"11447","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"84","eventID":"15","event":"雙翼的失落伊甸Ⅲ","name":"二魂同心_維雷夫基納＆希蜜拉兒","gender":"男女","element":"雷闇","elementSecond":"闇","special":"提昇(自身)","specialSecond":"提昇(自身)","wikiNumber":"11448","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"85","eventID":"15","event":"雙翼的失落伊甸Ⅲ","name":"鬥毆魔帝_庫伊杜斯‧吉爾瓦","gender":"男","element":"水水","elementSecond":"水","special":"反動大魔術‧蝕(全體)","specialSecond":"反動大魔術‧蝕(全體)","wikiNumber":"11449","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"86","eventID":"16","event":"雙翼的失落伊甸Ⅱ WWMF","name":"華麗魔王_艾盧多貝里克‧哥德","gender":"男","element":"水闇","elementSecond":"闇","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"10690","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"87","eventID":"16","event":"雙翼的失落伊甸Ⅱ WWMF","name":"慈愛與自由之花_露席菈‧弗歐魯","gender":"女","element":"水光","elementSecond":"光","special":"特殊變換問題類型【強化傷害】","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"10691","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"88","eventID":"16","event":"雙翼的失落伊甸Ⅱ WWMF","name":"聖王之神髓_米迦菈‧撒拉弗","gender":"女","element":"雷光","elementSecond":"光","special":"斬擊大魔術","specialSecond":"多重魔術(單體)","wikiNumber":"10692","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"89","eventID":"16","event":"雙翼的失落伊甸Ⅱ WWMF","name":"征服之魔劍_伊薩克‧撒拉弗","gender":"男","element":"雷闇","elementSecond":"闇","special":"技能充填(全體)","specialSecond":"技能充填(全體)","wikiNumber":"10693","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"90","eventID":"16","event":"雙翼的失落伊甸Ⅱ WWMF","name":"滅魂之預言者_維雷夫基納‧安曼","gender":"男","element":"火水","elementSecond":"水","special":"提升能力數值(全體)","specialSecond":"提昇(全體)","wikiNumber":"10694","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"91","eventID":"16","event":"雙翼的失落伊甸Ⅱ WWMF","name":"思考型人造魂魄_希蜜拉兒","gender":"女","element":"火火","elementSecond":"火","special":"鐵壁‧極","specialSecond":"鐵壁‧極","wikiNumber":"10695","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"92","eventID":"17","event":"雙翼的失落伊甸","name":"閃耀的永劫之翼_艾盧多貝里克‧哥德","gender":"男","element":"雷光","elementSecond":"光","special":"技能充填＆延遲(單體)","specialSecond":"技能充填＆延遲(單體)","wikiNumber":"9429","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"93","eventID":"17","event":"雙翼的失落伊甸","name":"跨越永劫_艾盧多貝里克‧哥德","gender":"男","element":"雷闇","elementSecond":"闇","special":"強化傷害(全體)","specialSecond":"強化傷害(全體)","wikiNumber":"9430","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"94","eventID":"17","event":"雙翼的失落伊甸","name":"解放無限_露席菈‧弗歐魯","gender":"女","element":"雷光","elementSecond":"光","special":"防禦連鎖","specialSecond":"防禦連鎖","wikiNumber":"9431","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"95","eventID":"17","event":"雙翼的失落伊甸","name":"無限的黑天使_露席菈‧弗歐魯","gender":"女","element":"雷闇","elementSecond":"闇","special":"變換問題類型","specialSecond":"特殊變換問題類型【減輕傷害】","wikiNumber":"9432","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"96","eventID":"17","event":"雙翼的失落伊甸","name":"協調的神世界_米迦菈‧撒拉弗","gender":"女","element":"火光","elementSecond":"光","special":"回復異常狀態","specialSecond":"回復異常狀態＆復活","wikiNumber":"9433","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"97","eventID":"17","event":"雙翼的失落伊甸","name":"某個魔王_米迦菈‧撒拉弗","gender":"女","element":"火闇","elementSecond":"闇","special":"解除效果(全體)【物理反擊】","specialSecond":"解除效果大魔術(全體)【物理反擊＆技能反擊】","wikiNumber":"9434","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"98","eventID":"17","event":"雙翼的失落伊甸","name":"迴響於黑闇中的大笑_伊薩克‧撒拉弗","gender":"男","element":"火火","elementSecond":"火","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"9435","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"99","eventID":"17","event":"雙翼的失落伊甸","name":"靜靜地祈求_克莉涅雅‧瑪奇雅","gender":"女","element":"水火","elementSecond":"火","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"9436","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"100","eventID":"18","event":"歌頌永恆的克羅諾斯Ⅲ","name":"太陽與夏日_優卡‧恩德","gender":"女","element":"水水","elementSecond":"水","special":"炸裂大魔術","specialSecond":"炸裂大魔術","wikiNumber":"11035","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"101","eventID":"18","event":"歌頌永恆的克羅諾斯Ⅲ","name":"與夏日的邂逅_愛麗絲‧史都華","gender":"女","element":"雷雷","elementSecond":"雷","special":"純屬性強化","specialSecond":"純屬性強化","wikiNumber":"11036","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"102","eventID":"18","event":"歌頌永恆的克羅諾斯Ⅲ","name":"情感的太陽_卡奴耶‧德‧亞克","gender":"女","element":"火光","elementSecond":"光","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"11037","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"103","eventID":"18","event":"歌頌永恆的克羅諾斯Ⅲ","name":"回想之夏_伊蕾娜‧芙莉愛兒","gender":"女","element":"火火","elementSecond":"火","special":"強化精靈【持續回復＆異常狀態失效】","specialSecond":"強化精靈【持續回復＆異常狀態失效】","wikiNumber":"11038","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"104","eventID":"18","event":"歌頌永恆的克羅諾斯Ⅲ","name":"夏日的行蹤_史黛西‧瑪丘里","gender":"女","element":"雷火","elementSecond":"火","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"11039","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"105","eventID":"18","event":"歌頌永恆的克羅諾斯Ⅲ","name":"夏日的片刻_席琳‧伊凡斯","gender":"女","element":"水水","elementSecond":"水","special":"技能複製","specialSecond":"技能複製","wikiNumber":"11040","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"106","eventID":"18","event":"歌頌永恆的克羅諾斯Ⅲ","name":"守護之時的光輝_塞蒂‧蕾","gender":"女","element":"水火","elementSecond":"火","special":"賦予雙重技能(全體)","specialSecond":"賦予雙重技能(全體)","wikiNumber":"11041","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"107","eventID":"19","event":"歌頌永恆的克羅諾斯Ⅱ","name":"時間的邂逅_愛麗絲‧史都華","gender":"女","element":"雷雷","elementSecond":"雷","special":"回復異常狀態","specialSecond":"回復異常狀態","wikiNumber":"8705","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"108","eventID":"19","event":"歌頌永恆的克羅諾斯Ⅱ","name":"時空的聖鎚_優卡‧恩德","gender":"女","element":"火火","elementSecond":"火","special":"延遲(全體)","specialSecond":"延遲(全體)","wikiNumber":"8706","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"109","eventID":"19","event":"歌頌永恆的克羅諾斯Ⅱ","name":"呼喚時間_史黛西·瑪丘里","gender":"女","element":"火光","elementSecond":"光","special":"變換問題類型","specialSecond":"特殊變換問題類型【連鎖數增加】","wikiNumber":"8707","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"110","eventID":"19","event":"歌頌永恆的克羅諾斯Ⅱ","name":"慮時司神_伊蕾娜‧芙莉愛兒","gender":"女","element":"水光","elementSecond":"光","special":"變換問題類型","specialSecond":"特殊變換問題類型【回復】","wikiNumber":"8708","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"111","eventID":"19","event":"歌頌永恆的克羅諾斯Ⅱ","name":"刻下司神_席琳‧伊凡斯","gender":"女","element":"雷雷","elementSecond":"雷","special":"防禦","specialSecond":"防禦","wikiNumber":"8709","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"118","eventID":"21","event":"啵！神明大人_～北風精靈與炎之鳥～","name":"冬季天空的光輝_卡奴耶‧德‧亞克","gender":"女","element":"火火","elementSecond":"火","special":"物理反擊（充填）","specialSecond":"物理反擊（充填）","wikiNumber":"11441","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"119","eventID":"21","event":"啵！神明大人_～北風精靈與炎之鳥～","name":"飄洋過海的羽翼_梨莎‧洛特蘭達","gender":"女","element":"水水","elementSecond":"水","special":"AS特殊變化","specialSecond":"AS特殊變化","wikiNumber":"11442","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"120","eventID":"21","event":"啵！神明大人_～北風精靈與炎之鳥～","name":"尋找不可思議的書_葛蕾絲","gender":"女","element":"雷火","elementSecond":"火","special":"變換問題類型","specialSecond":"統一變換問題類型【強化傷害】","wikiNumber":"11443","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"121","eventID":"22","event":"SUGARLESS_BAMBINA","name":"盛放狂亂少女之心_薇塔‧芭比奈","gender":"女","element":"雷火","elementSecond":"火","special":"融合強化","specialSecond":"融合強化","wikiNumber":"11080","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"122","eventID":"22","event":"SUGARLESS_BAMBINA","name":"狂亂舞動少女之刀_綺露拉‧科泰勒","gender":"女","element":"水光","elementSecond":"光","special":"行動感應","specialSecond":"行動感應","wikiNumber":"11081","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"123","eventID":"22","event":"SUGARLESS_BAMBINA","name":"癲狂歌聲_茜茜‧烏拉蕾","gender":"女","element":"火雷","elementSecond":"雷","special":"強化精靈【持續回復＆減輕傷害＆強化傷害】","specialSecond":"強化精靈【持續回復＆減輕傷害＆強化傷害】","wikiNumber":"11082","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"124","eventID":"22","event":"SUGARLESS_BAMBINA","name":"狂戀的斧少女_瑪琪亞‧傑洛歇","gender":"女","element":"火闇","elementSecond":"闇","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"11083","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"125","eventID":"22","event":"SUGARLESS_BAMBINA","name":"最瘋狂的女廚師_帕絲帕茹‧席歐涅","gender":"女","element":"水闇","elementSecond":"闇","special":"提昇(相鄰)","specialSecond":"提昇(相鄰)","wikiNumber":"11084","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"126","eventID":"22","event":"SUGARLESS_BAMBINA","name":"狂速爆走少女_勒格茲‧方亭","gender":"女","element":"雷雷","elementSecond":"雷","special":"連鎖解放大魔術","specialSecond":"連鎖解放大魔術","wikiNumber":"11085","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"127","eventID":"23","event":"SUGARLESS BAMBINA Ⅱ Slaughter Prison","name":"吞噬野獸的怪物_薇塔‧芭比奈","gender":"女","element":"雷火","elementSecond":"火","special":"犧牲連鎖強化","specialSecond":"犧牲連鎖強化","wikiNumber":"11044","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"128","eventID":"23","event":"SUGARLESS BAMBINA Ⅱ Slaughter Prison","name":"獵獸修羅_綺露拉‧科泰勒","gender":"女","element":"雷光","elementSecond":"光","special":"提升能力數值(自身)","specialSecond":"問題類型爆破大魔術","wikiNumber":"11047","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"129","eventID":"23","event":"SUGARLESS BAMBINA Ⅱ Slaughter Prison","name":"凶獄的導覽小姐_茜茜‧烏拉蕾","gender":"女","element":"水水","elementSecond":"水","special":"物理反擊（充填）","specialSecond":"物理反擊（充填）","wikiNumber":"11050","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"130","eventID":"23","event":"SUGARLESS BAMBINA Ⅱ Slaughter Prison","name":"凶愛的純血女孩_瑪琪亞‧傑洛歇","gender":"女","element":"水水","elementSecond":"水","special":"提昇(自身)","specialSecond":"提昇(自身)","wikiNumber":"11053","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"131","eventID":"23","event":"SUGARLESS BAMBINA Ⅱ Slaughter Prison","name":"狂熱的復仇者_帕絲帕茹‧席歐涅","gender":"女","element":"火火","elementSecond":"火","special":"AS特殊變化","specialSecond":"AS特殊變化","wikiNumber":"11056","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"132","eventID":"23","event":"SUGARLESS BAMBINA Ⅱ Slaughter Prison","name":"狂爆無法少女_勒格茲‧方亭","gender":"女","element":"火雷","elementSecond":"雷","special":"變換問題類型","specialSecond":"統一變換問題類型【強化傷害】","wikiNumber":"11059","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"133","eventID":"24","event":"FairyChord Prelude","name":"星夜中舞動的華劍光_拉米斯費蕾絲","gender":"女","element":"雷火","elementSecond":"火","special":"賦予雙重AS","specialSecond":"賦予雙重AS","wikiNumber":"11257","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"134","eventID":"24","event":"FairyChord Prelude","name":"心手彈奏的聲響_鶴音理玲","gender":"女","element":"水雷","elementSecond":"雷","special":"犧牲連鎖強化","specialSecond":"犧牲連鎖強化","wikiNumber":"11258","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"135","eventID":"24","event":"FairyChord Prelude","name":"古血之牙_紅鬼颯夜","gender":"男","element":"火火","elementSecond":"火","special":"提昇(自身)","specialSecond":"提昇(自身)","wikiNumber":"11259","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"136","eventID":"25","event":"寄語冬夜的祈願者","name":"聖夜六花之沐_莉歐","gender":"女","element":"火光","elementSecond":"光","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"801517","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"137","eventID":"25","event":"寄語冬夜的祈願者","name":"冬夜的紛紛雪花_弗蕾可","gender":"女","element":"水水","elementSecond":"水","special":"技能充填＆延遲(單體)","specialSecond":"技能充填＆延遲(單體)","wikiNumber":"801521","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"138","eventID":"25","event":"寄語冬夜的祈願者","name":"熱呼呼的聖誕紅酒_黎庫芬","gender":"女","element":"雷雷","elementSecond":"雷","special":"反動大魔術‧蝕(全體)","specialSecond":"反動大魔術‧蝕(全體)","wikiNumber":"801523","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"139","eventID":"25","event":"寄語冬夜的祈願者","name":"成為旋風的馴鷹者_加姆","gender":"男","element":"雷雷","elementSecond":"雷","special":"狂暴化","specialSecond":"自我犧牲魔術(單體)","wikiNumber":"801525","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"140","eventID":"25","event":"寄語冬夜的祈願者","name":"吸食願望的惡魔_奈迦伊娜","gender":"女","element":"水闇","elementSecond":"闇","special":"解除效果大魔術(全體)【屬性吸收＆多層防護＆阻隔傷害】","specialSecond":"解除效果大魔術(全體)【屬性吸收＆多層防護＆阻隔傷害】","wikiNumber":"801527","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"141","eventID":"26","event":"寄語冬夜的祈願者Ⅱ_虛妄之地的追尋者","name":"幸運的兔子腳_艾蕾諾","gender":"女","element":"雷水","elementSecond":"水","special":"防禦連鎖","specialSecond":"特殊變換問題類型【連鎖數增加】","wikiNumber":"801737","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"142","eventID":"26","event":"寄語冬夜的祈願者Ⅱ_虛妄之地的追尋者","name":"有威嚴的鄉紳_蘭登","gender":"男","element":"雷光","elementSecond":"光","special":"連鎖解放大魔術","specialSecond":"連鎖解放大魔術","wikiNumber":"801739","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"143","eventID":"26","event":"寄語冬夜的祈願者Ⅱ_虛妄之地的追尋者","name":"借鏡觀形_席安","gender":"女","element":"雷闇","elementSecond":"闇","special":"問題類型爆破大魔術","specialSecond":"問題類型爆破大魔術","wikiNumber":"801741","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"144","eventID":"26","event":"寄語冬夜的祈願者Ⅱ_虛妄之地的追尋者","name":"皓月白鱗_艾丹","gender":"男","element":"水雷","elementSecond":"雷","special":"決鬥","specialSecond":"決鬥","wikiNumber":"801743","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"145","eventID":"26","event":"寄語冬夜的祈願者Ⅱ_虛妄之地的追尋者","name":"乘風照夜_鈴芽","gender":"女","element":"火火","elementSecond":"火","special":"強化擊破","specialSecond":"強化擊破","wikiNumber":"801745","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"146","eventID":"26","event":"寄語冬夜的祈願者Ⅱ_虛妄之地的追尋者","name":"遺落在虛妄之中_莉歐","gender":"女","element":"水闇","elementSecond":"闇","special":"AS特殊變化","specialSecond":"AS特殊變化","wikiNumber":"801747","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"147","eventID":"27","event":"喰牙RIZE3 -Fang-O’-Blazer","name":"紅蓮血牙_雷迪厄斯‧利維斯","gender":"男","element":"火闇","elementSecond":"闇","special":"決鬥","specialSecond":"決鬥","wikiNumber":"10761","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"148","eventID":"27","event":"喰牙RIZE3 -Fang-O’-Blazer","name":"幽玄劍狐_未羽‧和羅","gender":"男","element":"水光","elementSecond":"光","special":"大魔術(單體)","specialSecond":"大魔術(單體)","wikiNumber":"10764","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"149","eventID":"27","event":"喰牙RIZE3 -Fang-O’-Blazer","name":"遊星燈華_舒菈‧立哈","gender":"女","element":"水水","elementSecond":"水","special":"捕食大魔術(單體)","specialSecond":"捕食大魔術(單體)","wikiNumber":"10767","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"150","eventID":"27","event":"喰牙RIZE3 -Fang-O’-Blazer","name":"幽炎妖葬者_伊露莎‧拉","gender":"女","element":"雷闇","elementSecond":"闇","special":"回答時間停止","specialSecond":"回答時間停止","wikiNumber":"10770","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"151","eventID":"27","event":"喰牙RIZE3 -Fang-O’-Blazer","name":"冥搜魔葬者_孚盧克‧拉","gender":"女","element":"火火","elementSecond":"火","special":"蓄積解放大魔術‧破(全體)","specialSecond":"蓄積解放大魔術‧破(全體)","wikiNumber":"10773","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"152","eventID":"27","event":"喰牙RIZE3 -Fang-O’-Blazer","name":"驅魔聖言_尤維爾＆艾絲皮納","gender":"男女","element":"雷光","elementSecond":"光","special":"AS特殊變化","specialSecond":"AS特殊變化","wikiNumber":"10776","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"156","eventID":"29","event":"喰牙RIZE2_-Tearing_Eyes","name":"雙牙剛炎_雷迪厄斯‧利維斯","gender":"男","element":"火火","elementSecond":"火","special":"一閃斬擊大魔術","specialSecond":"一閃斬擊大魔術","wikiNumber":"8983","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"157","eventID":"29","event":"喰牙RIZE2_-Tearing_Eyes","name":"不動烈閃_未羽‧和羅","gender":"男","element":"水水","elementSecond":"水","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"8986","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"158","eventID":"29","event":"喰牙RIZE2_-Tearing_Eyes","name":"【噬號者】的祝福_舒菈‧立哈","gender":"女","element":"水雷","elementSecond":"雷","special":"回復異常狀態","specialSecond":"回復異常狀態","wikiNumber":"8989","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"159","eventID":"29","event":"喰牙RIZE2_-Tearing_Eyes","name":"幽境的雙葬者_伊露莎＆孚盧克","gender":"女","element":"雷水","elementSecond":"水","special":"特殊變換問題類型【技能充填】","specialSecond":"特殊變換問題類型【技能充填】","wikiNumber":"8992","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"160","eventID":"29","event":"喰牙RIZE2_-Tearing_Eyes","name":"禁忌的盡頭_尤維爾‧莎克拉里齊","gender":"男","element":"雷雷","elementSecond":"雷","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"8995","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"161","eventID":"29","event":"喰牙RIZE2_-Tearing_Eyes","name":"神炎之瞳_艾絲皮納‧庫里烏","gender":"女","element":"火水","elementSecond":"水","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"8998","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"162","eventID":"30","event":"喰牙RIZE","name":"烈火剛劍_雷迪厄斯‧利維斯","gender":"男","element":"火火","elementSecond":"火","special":"詠唱大魔術","specialSecond":"詠唱大魔術","wikiNumber":"10792","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"163","eventID":"30","event":"喰牙RIZE","name":"烈刀激閃_未羽‧和羅","gender":"男","element":"水水","elementSecond":"水","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"10793","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"164","eventID":"30","event":"喰牙RIZE","name":"繼承獠牙者_舒菈‧立哈","gender":"女","element":"雷雷","elementSecond":"雷","special":"弱化大魔術(單體)","specialSecond":"弱化大魔術(單體)","wikiNumber":"10794","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"165","eventID":"30","event":"喰牙RIZE","name":"深切憐憫的喪葬者_伊露莎‧拉","gender":"女","element":"火水","elementSecond":"水","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"10795","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"166","eventID":"30","event":"喰牙RIZE","name":"銘戒堅定的送死葬者_孚盧克‧拉","gender":"女","element":"水火","elementSecond":"火","special":"強化傷害(指定屬性)","specialSecond":"強化傷害(指定屬性)","wikiNumber":"10796","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"167","eventID":"30","event":"喰牙RIZE","name":"Q彈綿軟神柔拳_噗古那‧馬卡","gender":"男","element":"雷火","elementSecond":"火","special":"強化精靈【強化傷害】","specialSecond":"強化精靈【強化傷害】","wikiNumber":"10797","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"168","eventID":"31","event":"八百萬諸神祕聞4_沉眠京城的悠久之歌","name":"祈求平安的悠久之歌_尊音‧歌詠","gender":"女","element":"雷水","elementSecond":"水","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"8472","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"169","eventID":"31","event":"八百萬諸神祕聞4_沉眠京城的悠久之歌","name":"天上照耀的月光_阿緹蜜西亞","gender":"女","element":"雷雷","elementSecond":"雷","special":"提昇(全體)","specialSecond":"提昇(全體)","wikiNumber":"8475","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"170","eventID":"31","event":"八百萬諸神祕聞4_沉眠京城的悠久之歌","name":"水蛇纏繞的白浪龍膽_樁‧龍膽","gender":"女","element":"水光","elementSecond":"光","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"8478","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"171","eventID":"31","event":"八百萬諸神祕聞4_沉眠京城的悠久之歌","name":"呼喚天運的炎獅子_葉月‧夢語","gender":"女","element":"火火","elementSecond":"火","special":"純屬性強化","specialSecond":"純屬性強化","wikiNumber":"8481","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"172","eventID":"31","event":"八百萬諸神祕聞4_沉眠京城的悠久之歌","name":"化鬼亦斬鬼_久馬＆風治","gender":"男","element":"水水","elementSecond":"水","special":"多重魔術(全體)","specialSecond":"多重魔術(全體)","wikiNumber":"8484","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"173","eventID":"31","event":"八百萬諸神祕聞4_沉眠京城的悠久之歌","name":"五星方陣大成祈禱_統真＆桐繪","gender":"男女","element":"火水","elementSecond":"水","special":"強化精靈【強化傷害】","specialSecond":"強化精靈【強化傷害】","wikiNumber":"8487","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"174","eventID":"32","event":"YAOYORO_Z","name":"妝點美夢的和歌之神_尊音‧歌詠","gender":"女","element":"水光","elementSecond":"光","special":"弱化大魔術(全體)","specialSecond":"弱化大魔術(全體)","wikiNumber":"8536","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"175","eventID":"32","event":"YAOYORO_Z","name":"回歸原點的不盡之焰_蘇芳‧迦具土","gender":"男","element":"火水","elementSecond":"水","special":"變換問題類型","specialSecond":"刪去回答","wikiNumber":"8537","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"176","eventID":"32","event":"YAOYORO_Z","name":"沉靜而勇猛的荒海神_靜‧白波","gender":"男","element":"水火","elementSecond":"火","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"8538","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"177","eventID":"32","event":"YAOYORO_Z","name":"突擊糖果神_瑪莉娜‧畢弗羅斯","gender":"女","element":"雷雷","elementSecond":"雷","special":"防禦","specialSecond":"提升能力數值(全體)","wikiNumber":"8539","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"178","eventID":"32","event":"YAOYORO_Z","name":"其乃異國的指標_傑斯洛‧夸特里","gender":"男","element":"雷火","elementSecond":"火","special":"提昇(全體)","specialSecond":"提昇(全體)","wikiNumber":"8540","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"179","eventID":"32","event":"YAOYORO_Z","name":"異國風情與艷麗的變化譚","gender":"女","element":"水雷","elementSecond":"雷","special":"物理反擊(多段式反擊)","specialSecond":"物理反擊(多段式反擊)","wikiNumber":"8541","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"180","eventID":"32","event":"YAOYORO_Z","name":"三神駕到_八百萬Z","gender":"男女","element":"火火","elementSecond":"火","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"8542","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"181","eventID":"33","event":"八百萬諸神祕聞2","name":"牡丹打盹的夕月夜_尊音・歌詠","gender":"女","element":"雷水","elementSecond":"水","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"10749","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"182","eventID":"33","event":"八百萬諸神祕聞2","name":"海風緩緩流逝_靜＆蘇芳","gender":"男","element":"水火","elementSecond":"火","special":"犧牲魔術(單體)","specialSecond":"犧牲魔術(單體)","wikiNumber":"10750","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"183","eventID":"33","event":"八百萬諸神祕聞2","name":"神獸疾走的痕跡_艾德華＆梅莉艾兒","gender":"女","element":"雷水","elementSecond":"水","special":"變換問題類型","specialSecond":"特殊變換問題類型【減輕傷害】","wikiNumber":"10751","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"184","eventID":"33","event":"八百萬諸神祕聞2","name":"妝點潮汐的月之音_月詠・音江雛","gender":"女","element":"火水","elementSecond":"水","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"10752","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"185","eventID":"33","event":"八百萬諸神祕聞2","name":"到達尋求的聲音_木葉・依姬","gender":"女","element":"水火","elementSecond":"火","special":"特殊變換問題類型【連鎖數增加＆技能充填】","specialSecond":"特殊變換問題類型【連鎖數增加＆技能充填】","wikiNumber":"10753","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"186","eventID":"34","event":"八百萬諸神祕聞","name":"盛開於春霞中的花之歌_尊音・歌詠","gender":"女","element":"雷火","elementSecond":"火","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"8526","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"187","eventID":"34","event":"八百萬諸神祕聞","name":"猛燒不盡的焰嶺_蘇芳・迦具土","gender":"男","element":"火光","elementSecond":"光","special":"阻隔傷害","specialSecond":"阻隔傷害","wikiNumber":"8527","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"188","eventID":"34","event":"八百萬諸神祕聞","name":"靜靜迴響的海鳴_靜・白波","gender":"男","element":"水火","elementSecond":"火","special":"技能充填＆延遲(單體)","specialSecond":"延遲(單體)","wikiNumber":"8528","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"189","eventID":"34","event":"八百萬諸神祕聞","name":"貫穿心的正中央_真都斐・那毘佐古","gender":"女","element":"水水","elementSecond":"水","special":"特殊變換問題類型【連鎖數增加】","specialSecond":"特殊變換問題類型【連鎖數增加】","wikiNumber":"8529","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"190","eventID":"34","event":"八百萬諸神祕聞","name":"光芒閃耀的金鋼金華_登美・言壽","gender":"女","element":"雷雷","elementSecond":"雷","special":"起死回生","specialSecond":"起死回生","wikiNumber":"8530","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"191","eventID":"35","event":"豔夏濱海大騷動","name":"神奇魔法大海豹_爽子","gender":"女","element":"水光","elementSecond":"光","special":"融合強化","specialSecond":"融合強化","wikiNumber":"801693","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"192","eventID":"35","event":"豔夏濱海大騷動","name":"輸贏企鵝_潘庫茵","gender":"女","element":"火雷","elementSecond":"雷","special":"毒","specialSecond":"毒","wikiNumber":"801695","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"193","eventID":"35","event":"豔夏濱海大騷動","name":"超音速掠食者_雀尾","gender":"女","element":"水火","elementSecond":"火","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"801697","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"194","eventID":"35","event":"豔夏濱海大騷動","name":"回憶中的擁抱_山吹","gender":"女","element":"火光","elementSecond":"光","special":"激化大魔術","specialSecond":"激化大魔術","wikiNumber":"801699","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"195","eventID":"35","event":"豔夏濱海大騷動","name":"海邊遊樂專家_里維","gender":"男","element":"雷光","elementSecond":"光","special":"提昇(相鄰)","specialSecond":"提昇(相鄰)","wikiNumber":"801701","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"196","eventID":"36","event":"Birth Of New Order2 大罪","name":"響徹天明的真理_流昂‧特拉姆","gender":"男","element":"水水","elementSecond":"水","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"10664","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"197","eventID":"36","event":"Birth Of New Order2 大罪","name":"擊落破曉的赤紅之星_伊絲卡‧尼爾瓦","gender":"女","element":"雷雷","elementSecond":"雷","special":"蓄積解放大魔術‧破(全體)","specialSecond":"蓄積解放大魔術‧破(全體)","wikiNumber":"10667","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"198","eventID":"36","event":"Birth Of New Order2 大罪","name":"在忘我的盡頭_拉夏‧路茨斯","gender":"女","element":"水水","elementSecond":"水","special":"變換問題類型","specialSecond":"純屬性變換問題類型【技能充填】","wikiNumber":"10670","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"199","eventID":"36","event":"Birth Of New Order2 大罪","name":"在光輝之影中行動_西里士‧埃洛奇亞","gender":"男","element":"火光","elementSecond":"光","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"10673","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"200","eventID":"36","event":"Birth Of New Order2 大罪","name":"被邪惡所祝福的少女_梅爾泰‧尼瑟","gender":"女","element":"雷水","elementSecond":"水","special":"詠唱大魔術","specialSecond":"詠唱大魔術","wikiNumber":"10676","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"201","eventID":"36","event":"Birth Of New Order2 大罪","name":"無法被饒恕的大罪_克羅什‧特勞","gender":"男","element":"火火","elementSecond":"火","special":"賦予雙重技能(全體)","specialSecond":"賦予雙重技能(全體)","wikiNumber":"10679","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"202","eventID":"37","event":"Birth Of New Order","name":"執行騎士團長_流昂‧特拉姆","gender":"男","element":"水光","elementSecond":"光","special":"蓄積解放大魔術‧聖(全體)","specialSecond":"蓄積解放大魔術‧聖(全體)","wikiNumber":"9976","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"203","eventID":"37","event":"Birth Of New Order","name":"執行騎士監察人_西里士‧埃洛奇亞","gender":"男","element":"火光","elementSecond":"光","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"9979","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"204","eventID":"37","event":"Birth Of New Order","name":"執行騎士副團長_拉夏‧路茨斯","gender":"女","element":"雷光","elementSecond":"光","special":"強化擊破","specialSecond":"強化擊破","wikiNumber":"9982","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"205","eventID":"37","event":"Birth Of New Order","name":"新希望_伊絲卡‧尼爾瓦","gender":"女","element":"火闇","elementSecond":"闇","special":"蓄積解放大魔術‧邪(全體)","specialSecond":"蓄積解放大魔術‧邪(全體)","wikiNumber":"9985","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"206","eventID":"37","event":"Birth Of New Order","name":"泰塔納斯的鐵鎚_梅爾泰‧尼瑟","gender":"女","element":"水闇","elementSecond":"闇","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"9988","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"207","eventID":"37","event":"Birth Of New Order","name":"手握牙大劍的劍士_克羅什‧特勞","gender":"男","element":"雷闇","elementSecond":"闇","special":"技能充填(單體)","specialSecond":"技能充填(單體)","wikiNumber":"9991","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"208","eventID":"38","event":"黑貓維茲 仲夏感謝季2019","name":"野心奔騰的黑劍 艾盧多貝里克‧哥德","gender":"男","element":"火火","elementSecond":"火","special":"弱化大魔術(單體)","specialSecond":"弱化大魔術(單體)","wikiNumber":"10547","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"209","eventID":"38","event":"黑貓維茲 仲夏感謝季2019","name":"審判獸的血之習性 伊絲卡‧尼爾瓦","gender":"女","element":"火闇","elementSecond":"闇","special":"AS特殊變化","specialSecond":"AS特殊變化","wikiNumber":"10550","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"210","eventID":"38","event":"黑貓維茲 仲夏感謝季2019","name":"執行騎士的誕生 流昂‧特拉姆","gender":"男","element":"火光","elementSecond":"光","special":"回答時間停止","specialSecond":"回答時間停止","wikiNumber":"10553","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"211","eventID":"38","event":"黑貓維茲 仲夏感謝季2019","name":"這就是你的回答喵 騙子貓維茲","gender":"男女","element":"水火","elementSecond":"火","special":"變換問題類型","specialSecond":"融合變換問題類型【技能充填】","wikiNumber":"10556","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"212","eventID":"38","event":"黑貓維茲 仲夏感謝季2019","name":"宇宙反詰 莉露姆‧洛洛特","gender":"女","element":"雷雷","elementSecond":"雷","special":"問題類型爆破大魔術","specialSecond":"問題類型爆破大魔術","wikiNumber":"10538","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"213","eventID":"38","event":"黑貓維茲 仲夏感謝季2019","name":"將軍 迪特利希‧貝爾克","gender":"男","element":"雷闇","elementSecond":"闇","special":"蓄積解放大魔術‧邪(單體)","specialSecond":"蓄積解放大魔術‧邪(單體)","wikiNumber":"10541","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"214","eventID":"38","event":"黑貓維茲 仲夏感謝季2019","name":"星之聖女 克蕾緹雅‧布萊葉","gender":"女","element":"水光","elementSecond":"光","special":"蓄積解放大魔術‧聖(單體)","specialSecond":"蓄積解放大魔術‧聖(單體)","wikiNumber":"10544","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"215","eventID":"39","event":"黃昏無夢者Ⅳ 黃昏mareless","name":"黃昏無夢者_桑榭特‧莉菲爾","gender":"女","element":"雷光","elementSecond":"光","special":"蓄積解放大魔術‧聖(全體)","specialSecond":"蓄積解放大魔術‧聖(全體)","wikiNumber":"10068","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"216","eventID":"39","event":"黃昏無夢者Ⅳ 黃昏mareless","name":"流星飛蝶_甘多納‧瑠璃揚羽","gender":"女","element":"水光","elementSecond":"光","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"10071","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"217","eventID":"39","event":"黃昏無夢者Ⅳ 黃昏mareless","name":"血火咆哮_戴特梅爾‧拉吉特","gender":"男","element":"水闇","elementSecond":"闇","special":"蓄積解放大魔術‧邪(全體)","specialSecond":"蓄積解放大魔術‧邪(全體)","wikiNumber":"10074","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"218","eventID":"39","event":"黃昏無夢者Ⅳ 黃昏mareless","name":"激輪雙旋_維爾萊特‧雷吉","gender":"男","element":"火水","elementSecond":"水","special":"變換問題類型","specialSecond":"統一變換問題類型【強化傷害】","wikiNumber":"10077","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"219","eventID":"39","event":"黃昏無夢者Ⅳ 黃昏mareless","name":"劍光無盡_傑拉德＆蔻比修","gender":"男女","element":"雷闇","elementSecond":"闇","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"10080","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"220","eventID":"39","event":"黃昏無夢者Ⅳ 黃昏mareless","name":"戰鳥裂帛_沃布林格‧蜜莉","gender":"女","element":"火雷","elementSecond":"雷","special":"多重魔術(單體)","specialSecond":"激化大魔術","wikiNumber":"10083","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"221","eventID":"40","event":"黃昏無夢者Ⅲ_絡園loreless","name":"黃昏的旅途_桑榭特‧莉菲爾","gender":"女","element":"雷雷","elementSecond":"雷","special":"炸裂大魔術","specialSecond":"炸裂大魔術","wikiNumber":"11179","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"222","eventID":"40","event":"黃昏無夢者Ⅲ_絡園loreless","name":"雙蝶之夢_甘多納‧瑠璃揚羽","gender":"女","element":"雷雷","elementSecond":"雷","special":"純屬性大魔術(全體)","specialSecond":"純屬性大魔術(全體)","wikiNumber":"11180","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"223","eventID":"40","event":"黃昏無夢者Ⅲ_絡園loreless","name":"飛鳥放吟_沃布林格‧蜜莉","gender":"女","element":"火光","elementSecond":"光","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"11181","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"224","eventID":"40","event":"黃昏無夢者Ⅲ_絡園loreless","name":"心願之刃_緹亞萊薩‧蔻比修","gender":"女","element":"水光","elementSecond":"光","special":"強化精靈【持續回復＆異常狀態失效】","specialSecond":"強化精靈【持續回復＆強化傷害＆異常狀態失效】","wikiNumber":"11182","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"225","eventID":"40","event":"黃昏無夢者Ⅲ_絡園loreless","name":"暴風之刃_艾吉瓦司‧傑拉德","gender":"男","element":"火闇","elementSecond":"闇","special":"技能充填(單體)","specialSecond":"技能充填(單體)","wikiNumber":"11183","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"226","eventID":"40","event":"黃昏無夢者Ⅲ_絡園loreless","name":"夢咎人_戴特梅爾‧拉吉特","gender":"男","element":"火雷","elementSecond":"雷","special":"狂暴化","specialSecond":"多重魔術(單體)","wikiNumber":"11184","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"227","eventID":"40","event":"黃昏無夢者Ⅲ_絡園loreless","name":"戰輪疾走_維爾萊特‧雷吉","gender":"男","element":"水水","elementSecond":"水","special":"純屬性強化","specialSecond":"純屬性強化","wikiNumber":"11185","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"228","eventID":"41","event":"黃昏無夢者Ⅱ 殘響dearless","name":"綻放於黃昏之花_桑榭特‧莉菲爾","gender":"女","element":"水雷","elementSecond":"雷","special":"提升能力數值(全體)","specialSecond":"提昇(全體)","wikiNumber":"10524","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"229","eventID":"41","event":"黃昏無夢者Ⅱ 殘響dearless","name":"刀火武雙_甘多納‧瑠璃揚羽","gender":"女","element":"雷雷","elementSecond":"雷","special":"弱化大魔術(全體)","specialSecond":"弱化大魔術(全體)","wikiNumber":"10525","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"230","eventID":"41","event":"黃昏無夢者Ⅱ 殘響dearless","name":"罪咎之鎖_戴特梅爾‧拉吉特","gender":"男","element":"水水","elementSecond":"水","special":"時限大魔術","specialSecond":"時限大魔術","wikiNumber":"10526","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"231","eventID":"41","event":"黃昏無夢者Ⅱ 殘響dearless","name":"劍之境界_艾吉瓦司‧傑拉德","gender":"男","element":"火火","elementSecond":"火","special":"反動大魔術‧蝕(單體)","specialSecond":"反動大魔術‧蝕(單體)","wikiNumber":"10527","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"232","eventID":"41","event":"黃昏無夢者Ⅱ 殘響dearless","name":"無我玉響_緹亞萊薩‧蔻比修","gender":"女","element":"水火","elementSecond":"火","special":"技能充填(全體)","specialSecond":"技能充填(全體)","wikiNumber":"10528","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"233","eventID":"41","event":"黃昏無夢者Ⅱ 殘響dearless","name":"機哭啾啾_沃布林格‧蜜莉","gender":"女","element":"火雷","elementSecond":"雷","special":"斬擊大魔術","specialSecond":"多重魔術(單體)","wikiNumber":"10529","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"234","eventID":"41","event":"黃昏無夢者Ⅱ 殘響dearless","name":"魂之戰火_維爾萊特‧雷吉","gender":"男","element":"雷火","elementSecond":"火","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"10530","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"235","eventID":"42","event":"黃昏無夢者","name":"黃昏魔導_桑榭特‧莉菲爾","gender":"女","element":"雷火","elementSecond":"火","special":"特殊變換問題類型【技能充填】","specialSecond":"特殊變換問題類型【技能充填】","wikiNumber":"11535","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"236","eventID":"42","event":"黃昏無夢者","name":"墜星銃姬_甘多納‧瑠璃揚羽","gender":"女","element":"水水","elementSecond":"水","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"11536","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"237","eventID":"42","event":"黃昏無夢者","name":"虛幻之夢的爪痕_戴特梅爾‧拉吉特","gender":"男","element":"火闇","elementSecond":"闇","special":"技能充填＆延遲(單體)","specialSecond":"技能充填＆延遲(單體)","wikiNumber":"11537","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"238","eventID":"42","event":"黃昏無夢者","name":"戰鬥天賦_沃布林格‧蜜莉","gender":"女","element":"火火","elementSecond":"火","special":"反動大魔術(全體)","specialSecond":"反動大魔術(全體)","wikiNumber":"11538","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"239","eventID":"42","event":"黃昏無夢者","name":"無窮的劍業_傑拉德&蔻比修","gender":"男女","element":"水火","elementSecond":"火","special":"變換問題類型","specialSecond":"特殊變換問題類型【隨機】","wikiNumber":"11539","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"240","eventID":"43","event":"霸眼戰線 終戰之凜煌眼 -前篇","name":"凜煌眼‧穿梭的羈絆_麗維塔‧伊蕾","gender":"女","element":"火火","elementSecond":"火","special":"保留問題類型【連鎖數增加】","specialSecond":"保留問題類型【連鎖數增加】","wikiNumber":"11457","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"241","eventID":"43","event":"霸眼戰線 終戰之凜煌眼 -前篇","name":"凜煌眼‧甦醒的覺悟_路德維嘉‧羅亞","gender":"女","element":"水水","elementSecond":"水","special":"強化精靈【持續回復＆減輕傷害＆提升能力數值】","specialSecond":"強化精靈【持續回復＆減輕傷害＆提升能力數值】","wikiNumber":"11460","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"242","eventID":"43","event":"霸眼戰線 終戰之凜煌眼 -前篇","name":"新一代劍聖_阿斯塔‧拉德","gender":"男","element":"雷雷","elementSecond":"雷","special":"蓄積解放大魔術‧聖(全體)","specialSecond":"蓄積解放大魔術‧聖(全體)","wikiNumber":"11463","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"243","eventID":"43","event":"霸眼戰線 終戰之凜煌眼 -前篇","name":"冥界女王的聖弓士_歐莉安奴‧路嘉","gender":"女","element":"水雷","elementSecond":"雷","special":"鐵壁‧極","specialSecond":"鐵壁‧極","wikiNumber":"11466","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"244","eventID":"43","event":"霸眼戰線 終戰之凜煌眼 -前篇","name":"追逐劍聖的蹤跡_阿里歐特斯‧葛","gender":"男","element":"火火","elementSecond":"火","special":"特殊變換問題類型【連鎖數增加＆技能充填】","specialSecond":"特殊變換問題類型【連鎖數增加＆技能充填】","wikiNumber":"11469","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"245","eventID":"43","event":"霸眼戰線 終戰之凜煌眼 -前篇","name":"覺醒的冥界之王_卡農","gender":"女","element":"雷闇","elementSecond":"闇","special":"蓄積解放大魔術‧印(全體)","specialSecond":"蓄積解放大魔術‧印(全體)","wikiNumber":"11472","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"246","eventID":"44","event":"霸眼戰線4 覺醒之王","name":"將原初照亮之霸眼_阿里歐特斯‧葛","gender":"男","element":"火闇","elementSecond":"闇","special":"融合大魔術(單體)","specialSecond":"融合大魔術(單體)","wikiNumber":"10453","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"247","eventID":"44","event":"霸眼戰線4 覺醒之王","name":"昏眼與惺眼_阿斯塔＆露米雅","gender":"男女","element":"雷光","elementSecond":"光","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"10456","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"248","eventID":"44","event":"霸眼戰線4 覺醒之王","name":"礫滅之處決鐮_哈克亞‧德斯賽斯","gender":"女","element":"水闇","elementSecond":"闇","special":"蓄積解放大魔術‧邪(單體)","specialSecond":"蓄積解放大魔術‧邪(單體)","wikiNumber":"10459","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"249","eventID":"44","event":"霸眼戰線4 覺醒之王","name":"新劍聖王_亞瑟‧卡美洛","gender":"男","element":"雷雷","elementSecond":"雷","special":"弱化大魔術(單體)","specialSecond":"弱化大魔術(單體)","wikiNumber":"10462","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"250","eventID":"44","event":"霸眼戰線4 覺醒之王","name":"宿業之烈眼繼承_歐莉安奴‧路嘉","gender":"女","element":"水水","elementSecond":"水","special":"問題類型爆破大魔術","specialSecond":"問題類型爆破大魔術","wikiNumber":"10465","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"251","eventID":"44","event":"霸眼戰線4 覺醒之王","name":"扶持著三隻眼_希瑞爾‧諾特","gender":"女","element":"火光","elementSecond":"光","special":"特殊變換問題類型【強化傷害】","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"10468","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"252","eventID":"45","event":"霸眼戰線3 聖劍與霸眼","name":"終結戰亂的煌眼_麗維塔‧伊蕾","gender":"女","element":"火光","elementSecond":"光","special":"強化複屬性傷害","specialSecond":"強化複屬性傷害","wikiNumber":"11494","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"253","eventID":"45","event":"霸眼戰線3 聖劍與霸眼","name":"亂世至強的凜眼_路德維嘉‧羅亞","gender":"女","element":"水光","elementSecond":"光","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"11495","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"254","eventID":"45","event":"霸眼戰線3 聖劍與霸眼","name":"追尋惺眼的行蹤_阿斯塔‧拉德","gender":"男","element":"水水","elementSecond":"水","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"11496","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"255","eventID":"45","event":"霸眼戰線3 聖劍與霸眼","name":"阿拉弗特族的女王_希瑞爾‧諾特","gender":"女","element":"雷光","elementSecond":"光","special":"強化精靈【持續回復＆減輕傷害＆強化傷害】","specialSecond":"強化精靈【持續回復＆減輕傷害＆強化傷害】","wikiNumber":"11497","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"256","eventID":"45","event":"霸眼戰線3 聖劍與霸眼","name":"貫穿天命的霸吼劍_邁亞‧斯迪爾馬","gender":"女","element":"火火","elementSecond":"火","special":"特殊變換問題類型【減輕傷害＆回復】","specialSecond":"特殊變換問題類型【減輕傷害＆回復】","wikiNumber":"11498","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"257","eventID":"45","event":"霸眼戰線3 聖劍與霸眼","name":"信義與未來的霸眼_阿里歐特斯‧葛","gender":"男","element":"雷闇","elementSecond":"闇","special":"物理反擊","specialSecond":"物理反擊","wikiNumber":"11499","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"258","eventID":"45","event":"霸眼戰線3 聖劍與霸眼","name":"覺醒的霸眼_麗維塔＆路德維嘉","gender":"女","element":"水火","elementSecond":"火","special":"提昇(自身)","specialSecond":"提升能力數值(自身)","wikiNumber":"11500","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"259","eventID":"46","event":"霸眼戰線2 起始之眼","name":"煌眼乃勝利指標_麗維塔‧伊蕾","gender":"女","element":"火火","elementSecond":"火","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"10592","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"260","eventID":"46","event":"霸眼戰線2 起始之眼","name":"寄宿於凜眼中的霸道_路德維嘉‧羅亞","gender":"女","element":"水火","elementSecond":"火","special":"技能充填＆延遲(單體)","specialSecond":"技能充填＆延遲(單體)","wikiNumber":"10593","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"261","eventID":"46","event":"霸眼戰線2 起始之眼","name":"瘋狂與怨恨的魔刃_銀河‧卡農","gender":"女","element":"雷闇","elementSecond":"闇","special":"提昇(全體)","specialSecond":"提昇(全體)","wikiNumber":"10594","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"262","eventID":"46","event":"霸眼戰線2 起始之眼","name":"罪孽隨慘禍而逝_哈克亞‧德斯賽斯","gender":"女","element":"水闇","elementSecond":"闇","special":"比例削減(單體)","specialSecond":"比例削減(單體)","wikiNumber":"10595","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"263","eventID":"46","event":"霸眼戰線2 起始之眼","name":"兩雙眼眸的守護者_希瑞爾‧諾特","gender":"女","element":"雷火","elementSecond":"火","special":"持續回復","specialSecond":"回復異常狀態＆復活","wikiNumber":"10596","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"264","eventID":"46","event":"霸眼戰線2 起始之眼","name":"守護與定罪的昏眼_阿斯塔‧拉德","gender":"男","element":"火火","elementSecond":"火","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"10597","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"265","eventID":"47","event":"霸眼戰線","name":"協助煌眼的左右手_吉米‧戴維斯","gender":"男","element":"火水","elementSecond":"水","special":"延長AS時間限制","specialSecond":"技能充填(全體)","wikiNumber":"10492","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"266","eventID":"47","event":"霸眼戰線","name":"煌流星的砲擊貓_剛多‧基吉萊","gender":"男","element":"水火","elementSecond":"火","special":"刪去回答","specialSecond":"刪去回答","wikiNumber":"10493","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"267","eventID":"47","event":"霸眼戰線","name":"煌炎的白銀狐_嘉露蒂海菈‧亞爾巴","gender":"女","element":"火火","elementSecond":"火","special":"持續回復","specialSecond":"強化傷害(自身)","wikiNumber":"10494","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"268","eventID":"47","event":"霸眼戰線","name":"迅雷的煌絕劍_雅瑪佳德‧姬石榴","gender":"女","element":"雷水","elementSecond":"水","special":"回復","specialSecond":"回復異常狀態","wikiNumber":"10495","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"275","eventID":"49","event":"庫耶斯式拍拖約會","name":"簡單的戀愛_奧菲莉亞","gender":"女","element":"水光","elementSecond":"光","special":"變換問題類型","specialSecond":"統一變換問題類型【強化傷害】","wikiNumber":"801650","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"276","eventID":"49","event":"庫耶斯式拍拖約會","name":"明鏡照形_席恩","gender":"男","element":"雷水","elementSecond":"水","special":"激化大魔術","specialSecond":"激化大魔術","wikiNumber":"801652","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"277","eventID":"49","event":"庫耶斯式拍拖約會","name":"拋出蘋果的邀約_格萊恩","gender":"男","element":"火雷","elementSecond":"雷","special":"防禦連鎖","specialSecond":"防禦連鎖","wikiNumber":"801656","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"278","eventID":"49","event":"庫耶斯式拍拖約會","name":"活潑熱鬧柳穿魚_波琳","gender":"女","element":"火火","elementSecond":"火","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"801658","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"279","eventID":"49","event":"庫耶斯式拍拖約會","name":"遊走情場的玫瑰王子_迦瑪","gender":"男","element":"雷光","elementSecond":"光","special":"回復異常狀態","specialSecond":"回復異常狀態＆復活","wikiNumber":"801660","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"280","eventID":"50","event":"神聖天空之星3","name":"妝點天空的許願星_克蕾緹雅‧布萊葉","gender":"女","element":"水水","elementSecond":"水","special":"弱化大魔術(單體)","specialSecond":"弱化大魔術(單體)","wikiNumber":"10369","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"281","eventID":"50","event":"神聖天空之星3","name":"夏天的惡作劇_普莉菲卡‧朗克斯塔","gender":"女","element":"雷闇","elementSecond":"闇","special":"特殊變換問題類型【強化傷害】","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"10372","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"282","eventID":"50","event":"神聖天空之星3","name":"和夏天嬉戲的賢神_莉塔‧班尼斯特","gender":"女","element":"雷雷","elementSecond":"雷","special":"純屬性強化","specialSecond":"純屬性強化","wikiNumber":"10375","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"283","eventID":"50","event":"神聖天空之星3","name":"閃耀夏日的戀天使_瑪格莉特‧麗兒","gender":"女","element":"火水","elementSecond":"水","special":"變換問題類型","specialSecond":"融合變換問題類型【技能充填】","wikiNumber":"10378","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"284","eventID":"50","event":"神聖天空之星3","name":"智慧有如大海_諾因‧凱拉","gender":"女","element":"火火","elementSecond":"火","special":"捕食大魔術(全體)","specialSecond":"捕食大魔術(全體)","wikiNumber":"10381","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"285","eventID":"50","event":"神聖天空之星3","name":"常夏禁忌果實_伊芙‧佛克羅爾","gender":"女","element":"水光","elementSecond":"光","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"10384","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"286","eventID":"51","event":"神聖天空之星2","name":"為聖夜獻上祝福_克蕾緹雅‧布萊葉","gender":"女","element":"火水","elementSecond":"水","special":"融合強化","specialSecond":"融合強化","wikiNumber":"9506","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"287","eventID":"51","event":"神聖天空之星2","name":"聖與邪_普莉菲卡‧朗克斯塔","gender":"女","element":"水闇","elementSecond":"闇","special":"強化擊破","specialSecond":"強化擊破","wikiNumber":"9509","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"288","eventID":"51","event":"神聖天空之星2","name":"慧眼無雙的大賢者_諾因‧凱拉","gender":"女","element":"雷雷","elementSecond":"雷","special":"大魔術(單體)","specialSecond":"大魔術(單體)","wikiNumber":"9512","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"289","eventID":"51","event":"神聖天空之星2","name":"獻給你_克蕾緹雅＆普莉菲卡","gender":"女","element":"水火","elementSecond":"火","special":"融合大魔術(全體)","specialSecond":"融合大魔術(全體)","wikiNumber":"9514","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"290","eventID":"51","event":"神聖天空之星2","name":"在聖夜獻上聖女的歌聲_索拉娜＆光","gender":"女","element":"雷光","elementSecond":"光","special":"行動感應","specialSecond":"行動感應","wikiNumber":"9517","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"291","eventID":"51","event":"神聖天空之星2","name":"武鬥熱血派_瑪格莉特＆莉亞菈","gender":"女","element":"火雷","elementSecond":"雷","special":"詠唱多重大魔術","specialSecond":"詠唱多重大魔術","wikiNumber":"9520","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"292","eventID":"52","event":"神聖天空之星","name":"俯瞰眾星的大賢_諾因‧凱拉","gender":"女","element":"雷雷","elementSecond":"雷","special":"時限大魔術","specialSecond":"時限大魔術","wikiNumber":"801488","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"293","eventID":"52","event":"神聖天空之星","name":"橫渡聖夜之空_光‧絲菲亞","gender":"女","element":"雷雷","elementSecond":"雷","special":"持續回復","specialSecond":"持續回復","wikiNumber":"801489","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"294","eventID":"52","event":"神聖天空之星","name":"搖盪星海之光_索拉娜‧卡魯納","gender":"女","element":"火水","elementSecond":"水","special":"特殊變換問題類型【強化傷害】","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"801490","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"295","eventID":"52","event":"神聖天空之星","name":"絕對☆戀ANGEL_瑪格莉特‧麗兒","gender":"女","element":"火光","elementSecond":"光","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"801491","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"296","eventID":"52","event":"神聖天空之星","name":"秘藏在拳裡的熱情_莉亞菈‧羅姆","gender":"女","element":"水雷","elementSecond":"雷","special":"提升能力數值(全體)","specialSecond":"防禦","wikiNumber":"801492","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"297","eventID":"52","event":"神聖天空之星","name":"星彩的祝福_克蕾緹雅‧布萊葉","gender":"女","element":"水光","elementSecond":"光","special":"回復","specialSecond":"強化精靈【持續回復＆減輕傷害＆強化傷害】","wikiNumber":"801493","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"298","eventID":"53","event":"惡作劇女神與兔子的故事","name":"照耀罪人的虹光_尤絲蒂‧勞","gender":"女","element":"水火","elementSecond":"火","special":"變換問題類型","specialSecond":"統一變換問題類型【減輕傷害＆回復】","wikiNumber":"10406","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"299","eventID":"53","event":"惡作劇女神與兔子的故事","name":"罰之神炎_彼得拉‧利凱","gender":"女","element":"火光","elementSecond":"光","special":"產生連結問題類型","specialSecond":"延遲(全體)","wikiNumber":"10407","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"300","eventID":"53","event":"惡作劇女神與兔子的故事","name":"絕對的炯眼_里亞涅‧希爾瓦","gender":"女","element":"水火","elementSecond":"火","special":"回復","specialSecond":"回復異常狀態","wikiNumber":"10408","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"301","eventID":"53","event":"惡作劇女神與兔子的故事","name":"神之血、人之心_埃萊妮‧碧茜","gender":"女","element":"火雷","elementSecond":"雷","special":"防禦","specialSecond":"防禦","wikiNumber":"10409","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"302","eventID":"54","event":"天界的雙子 訣別的年代記","name":"編織時間的賢者_克諾瓦‧蒙特爾","gender":"男","element":"火火","elementSecond":"火","special":"延遲(單體)","specialSecond":"延遲(單體)","wikiNumber":"7307","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"303","eventID":"54","event":"天界的雙子 訣別的年代記","name":"神刻的觀察者_伊絲特瓦蕾‧凱特","gender":"女","element":"水火","elementSecond":"火","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"7306","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"304","eventID":"54","event":"天界的雙子 訣別的年代記","name":"時間的守護天使_梅蒂絲‧路坦","gender":"女","element":"火水","elementSecond":"水","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"7305","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"305","eventID":"54","event":"天界的雙子 訣別的年代記","name":"虛幻世界的念想_普流姆‧諾瓦蘭","gender":"女","element":"雷闇","elementSecond":"闇","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"7304","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"306","eventID":"54","event":"天界的雙子 訣別的年代記","name":"虛幻世界的念想_普流姆‧諾瓦蘭","gender":"女","element":"雷光","elementSecond":"光","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"7303","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"307","eventID":"54","event":"天界的雙子 訣別的年代記","name":"遊遍歷史的神獸_托托‧獏羅","gender":"男女","element":"雷雷","elementSecond":"雷","special":"刪去回答","specialSecond":"刪去回答","wikiNumber":"6292","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"308","eventID":"55","event":"響命CrossDerive ACT3","name":"With_Brave_Heart_艾妮","gender":"女","element":"雷雷","elementSecond":"雷","special":"蓄積解放大魔術‧印(全體)","specialSecond":"蓄積解放大魔術‧印(全體)","wikiNumber":"11314","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"309","eventID":"55","event":"響命CrossDerive ACT3","name":"Beam_Meister_格里特","gender":"男","element":"水雷","elementSecond":"雷","special":"L次數大魔術","specialSecond":"L次數大魔術","wikiNumber":"11317","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"310","eventID":"55","event":"響命CrossDerive ACT3","name":"Shield_of_Spirit_庫蘭","gender":"女","element":"雷雷","elementSecond":"雷","special":"強化精靈【持續回復＆減輕傷害＆提升能力數值】","specialSecond":"強化精靈【持續回復＆減輕傷害＆提升能力數值】","wikiNumber":"11320","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"311","eventID":"55","event":"響命CrossDerive ACT3","name":"Nuke-Nin_密絲緹海德","gender":"女","element":"火火","elementSecond":"火","special":"提昇(全體)","specialSecond":"提昇(全體)","wikiNumber":"11323","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"312","eventID":"55","event":"響命CrossDerive ACT3","name":"Odd_Couple_亞萊娜＆薇潔塔","gender":"女","element":"水水","elementSecond":"水","special":"問題類型爆破大魔術","specialSecond":"問題類型爆破大魔術","wikiNumber":"11326","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"313","eventID":"55","event":"響命CrossDerive ACT3","name":"Thrill_Eater_雷利修","gender":"男","element":"火光","elementSecond":"光","special":"弱化大魔術(單體)","specialSecond":"弱化大魔術(單體)","wikiNumber":"11329","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"314","eventID":"56","event":"響命CrossDerive ACT2","name":"With_All_My_Heart_艾妮","gender":"女","element":"火火","elementSecond":"火","special":"炸裂大魔術","specialSecond":"炸裂大魔術","wikiNumber":"11357","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"315","eventID":"56","event":"響命CrossDerive ACT2","name":"Call_the_Shots_格里特","gender":"男","element":"雷水","elementSecond":"水","special":"狂暴化","specialSecond":"多重魔術(單體)","wikiNumber":"11358","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"316","eventID":"56","event":"響命CrossDerive ACT2","name":"Ninja_Arts_密絲緹海德","gender":"女","element":"火水","elementSecond":"水","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"11359","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"317","eventID":"56","event":"響命CrossDerive ACT2","name":"Get_a_Kick_亞萊娜＆雷利修","gender":"男女","element":"水水","elementSecond":"水","special":"特殊變換問題類型【減輕傷害＆回復】","specialSecond":"特殊變換問題類型【減輕傷害＆回復】","wikiNumber":"11360","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"318","eventID":"56","event":"響命CrossDerive ACT2","name":"Carry_the_Ball_薇潔塔","gender":"女","element":"水水","elementSecond":"水","special":"技能充填(單體)","specialSecond":"技能充填(單體)","wikiNumber":"11361","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"319","eventID":"56","event":"響命CrossDerive ACT2","name":"Never-Say-Die_Spirit_庫蘭","gender":"女","element":"雷火","elementSecond":"火","special":"賦予雙重技能(全體)","specialSecond":"賦予雙重技能(全體)","wikiNumber":"11362","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"320","eventID":"57","event":"響命CrossDerive","name":"With a Will 艾妮","gender":"女","element":"水水","elementSecond":"水","special":"詠唱大魔術","specialSecond":"詠唱大魔術","wikiNumber":"10186","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"321","eventID":"57","event":"響命CrossDerive","name":"Cat's Meow 艾妮","gender":"女","element":"水水","elementSecond":"水","special":"詠唱大魔術","specialSecond":"詠唱大魔術","wikiNumber":"10187","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"322","eventID":"57","event":"響命CrossDerive","name":"Sparks_Fly_Upward_格里特","gender":"男","element":"火水","elementSecond":"水","special":"物理反擊","specialSecond":"物理反擊","wikiNumber":"10188","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"323","eventID":"57","event":"響命CrossDerive","name":"Clear_the_Way_亞萊娜","gender":"女","element":"雷雷","elementSecond":"雷","special":"多重魔術(全體)","specialSecond":"多重魔術(全體)","wikiNumber":"10189","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"324","eventID":"57","event":"響命CrossDerive","name":"Shadow_of_Shade_密絲緹海德","gender":"女","element":"火火","elementSecond":"火","special":"弱化大魔術(單體)","specialSecond":"弱化大魔術(單體)","wikiNumber":"10190","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"325","eventID":"57","event":"響命CrossDerive","name":"In_the_Fast_Lane_雷利修","gender":"男","element":"水雷","elementSecond":"雷","special":"強化精靈【強化傷害】","specialSecond":"強化精靈【強化傷害】","wikiNumber":"10191","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"326","eventID":"57","event":"響命CrossDerive","name":"Right_and_Left_薇潔塔","gender":"女","element":"雷水","elementSecond":"水","special":"提升能力數值(全體)","specialSecond":"回復異常狀態","wikiNumber":"10192","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"327","eventID":"58","event":"沉睡的遺跡 Outlander","name":"發現祕寶！？_亞露露‧亞蓋爾","gender":"女","element":"火光","elementSecond":"光","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"9818","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"328","eventID":"58","event":"沉睡的遺跡 Outlander","name":"清嵐戰鬥少女_維多利亞‧涅爾德","gender":"女","element":"雷水","elementSecond":"水","special":"AS倍率強化","specialSecond":"AS倍率強化","wikiNumber":"9821","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"329","eventID":"58","event":"沉睡的遺跡 Outlander","name":"向點心祈禱_埃利安娜‧古洛斯","gender":"女","element":"水水","elementSecond":"水","special":"純屬性大魔術(單體)","specialSecond":"純屬性大魔術(單體)","wikiNumber":"9824","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"330","eventID":"58","event":"沉睡的遺跡 Outlander","name":"法爾內塞的談話_露芙＆菈特","gender":"女","element":"火雷","elementSecond":"雷","special":"融合大魔術(全體)","specialSecond":"融合大魔術(全體)","wikiNumber":"9827","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"331","eventID":"58","event":"沉睡的遺跡 Outlander","name":"愛的守護者_希特拉‧涅普爾","gender":"女","element":"水闇","elementSecond":"闇","special":"技能充填(單體)","specialSecond":"技能充填(單體)","wikiNumber":"9830","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"332","eventID":"58","event":"沉睡的遺跡 Outlander","name":"深不可測的巫術師_梅貝爾‧泰勒","gender":"女","element":"雷闇","elementSecond":"闇","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"9833","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"339","eventID":"60","event":"幻魔特區RELOADEDⅡ -RE:unite","name":"拯救星星之人_萊葛爾＆薩爾瓦多","gender":"男","element":"水水","elementSecond":"水","special":"提昇(全體)","specialSecond":"提昇(全體)","wikiNumber":"10273","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"340","eventID":"60","event":"幻魔特區RELOADEDⅡ -RE:unite","name":"羈絆的體現_席菈＆朱蒂提亞","gender":"女","element":"水光","elementSecond":"光","special":"融合大魔術(單體)","specialSecond":"融合大魔術(單體)","wikiNumber":"10276","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"341","eventID":"60","event":"幻魔特區RELOADEDⅡ -RE:unite","name":"為了【王】_瓦雷烏斯‧亞基歐","gender":"男","element":"火雷","elementSecond":"雷","special":"防禦連鎖","specialSecond":"持續回復","wikiNumber":"10279","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"342","eventID":"60","event":"幻魔特區RELOADEDⅡ -RE:unite","name":"意念的成果_匹莉雅‧歐爾皮斯","gender":"女","element":"雷水","elementSecond":"水","special":"變換問題類型","specialSecond":"融合變換問題類型【技能充填】","wikiNumber":"10282","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"343","eventID":"60","event":"幻魔特區RELOADEDⅡ -RE:unite","name":"鷹斬之翼_泰西＆佛盧帝斯","gender":"男","element":"雷光","elementSecond":"光","special":"一閃斬擊大魔術","specialSecond":"一閃斬擊大魔術","wikiNumber":"10285","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"344","eventID":"60","event":"幻魔特區RELOADEDⅡ -RE:unite","name":"激烈的愛情_法爾薩＆立斯思雷尼斯","gender":"女","element":"火火","elementSecond":"火","special":"純屬性強化","specialSecond":"純屬性強化","wikiNumber":"10288","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"345","eventID":"61","event":"幻魔特區RELOADED -GardeniA dist.","name":"救世之星_萊葛爾＆薩爾瓦多","gender":"男","element":"水水","elementSecond":"水","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"11584","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"346","eventID":"61","event":"幻魔特區RELOADED -GardeniA dist.","name":"貫徹的意念_席菈＆朱蒂提亞","gender":"女","element":"雷光","elementSecond":"光","special":"詠唱多重大魔術","specialSecond":"詠唱多重大魔術","wikiNumber":"11585","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"347","eventID":"61","event":"幻魔特區RELOADED -GardeniA dist.","name":"殺光魔物_法爾薩＆立斯思雷尼斯","gender":"女","element":"水闇","elementSecond":"闇","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"11586","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"348","eventID":"61","event":"幻魔特區RELOADED -GardeniA dist.","name":"勇猛精進_泰西＆佛盧帝斯","gender":"男","element":"火火","elementSecond":"火","special":"反動大魔術‧蝕(全體)","specialSecond":"反動大魔術‧蝕(全體)","wikiNumber":"11587","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"349","eventID":"61","event":"幻魔特區RELOADED -GardeniA dist.","name":"鋼鐵的純真_謬爾＆雷貝里歐","gender":"女","element":"火闇","elementSecond":"闇","special":"提昇(全體)","specialSecond":"弱化大魔術(全體)","wikiNumber":"11588","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"350","eventID":"61","event":"幻魔特區RELOADED -GardeniA dist.","name":"Ver.GardeniA_淺蔥＆瑟盧烏斯","gender":"女","element":"雷雷","elementSecond":"雷","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"11589","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"351","eventID":"62","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"與我共同挑戰_極＆奧迪阿姆斯","gender":"男","element":"火火","elementSecond":"火","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"11248","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"352","eventID":"62","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"生命與心靈綻放之光_極‧蜂須賀","gender":"男","element":"火雷","elementSecond":"雷","special":"物理反擊","specialSecond":"物理反擊","wikiNumber":"11249","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"353","eventID":"62","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"風雅櫻華_八千代＆茵芙蘿蕾","gender":"女","element":"水水","elementSecond":"水","special":"防禦","specialSecond":"提升能力數值(全體)","wikiNumber":"11250","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"354","eventID":"62","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"雷牙機翔_澄生＆艾克斯馬基那","gender":"男","element":"雷火","elementSecond":"火","special":"反動大魔術(全體)","specialSecond":"反動大魔術(全體)","wikiNumber":"11251","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"355","eventID":"62","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"月白奔蛇_時生＆艾克斯阿爾巴","gender":"男","element":"火水","elementSecond":"水","special":"特殊變換問題類型【技能充填】","specialSecond":"特殊變換問題類型【技能充填】","wikiNumber":"11252","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"356","eventID":"62","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"守護世界的少女_安卡＆蘿卡","gender":"女","element":"雷光","elementSecond":"光","special":"變換問題類型","specialSecond":"特殊變換問題類型【減輕傷害】","wikiNumber":"11253","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"357","eventID":"62","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"自由的鏑箭_安德亞＆小紅","gender":"男女","element":"水火","elementSecond":"火","special":"變換問題類型","specialSecond":"持續回復","wikiNumber":"11254","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"358","eventID":"62","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"古魂鏡身_謬爾＆雷貝里歐","gender":"女","element":"火火","elementSecond":"火","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"11255","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"359","eventID":"62","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"永遠的守護者_淺蔥＆瑟盧烏斯","gender":"女","element":"雷光","elementSecond":"光","special":"提昇(全體)","specialSecond":"提昇(全體)","wikiNumber":"11256","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"360","eventID":"63","event":"幻魔特區朱雀Ⅱ 鋼鐵之槍","name":"其為深淵的災害_極＆鋼鐵之獸","gender":"男","element":"火闇","elementSecond":"闇","special":"比例削減(全體)","specialSecond":"比例削減(全體)","wikiNumber":"10314","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"361","eventID":"63","event":"幻魔特區朱雀Ⅱ 鋼鐵之槍","name":"通往夏天而敞開的門扉_八千代＆安卡","gender":"女","element":"水雷","elementSecond":"雷","special":"特殊變換問題類型【連鎖數增加＆技能充填】","specialSecond":"延遲(全體)","wikiNumber":"10315","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"362","eventID":"63","event":"幻魔特區朱雀Ⅱ 鋼鐵之槍","name":"遍體鱗傷的扳機_澄生＆時生","gender":"男","element":"雷雷","elementSecond":"雷","special":"技能充填(全體)","specialSecond":"技能充填(全體)","wikiNumber":"10316","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"363","eventID":"63","event":"幻魔特區朱雀Ⅱ 鋼鐵之槍","name":"摧毀對手的鐵臂_安德亞＆里貝魯塔斯","gender":"男","element":"水雷","elementSecond":"雷","special":"融合變換問題類型【減輕傷害】","specialSecond":"融合變換問題類型【減輕傷害】","wikiNumber":"10317","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"364","eventID":"63","event":"幻魔特區朱雀Ⅱ 鋼鐵之槍","name":"深淵的女王_謬爾＆雷貝里歐","gender":"女","element":"火闇","elementSecond":"闇","special":"技能複製","specialSecond":"技能複製","wikiNumber":"10318","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"365","eventID":"63","event":"幻魔特區朱雀Ⅱ 鋼鐵之槍","name":"歷史的見證人_淺蔥＆瑟盧烏斯","gender":"女","element":"雷光","elementSecond":"光","special":"回復異常狀態","specialSecond":"回復異常狀態","wikiNumber":"10319","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"366","eventID":"64","event":"幻魔特區朱雀","name":"不滅的主從_極＆奧迪阿姆斯","gender":"男","element":"火火","elementSecond":"火","special":"自我犧牲魔術(全體)","specialSecond":"自我犧牲魔術(全體)","wikiNumber":"9207","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"367","eventID":"64","event":"幻魔特區朱雀","name":"機神的操控者_澄生＆艾克斯馬基那","gender":"男","element":"雷雷","elementSecond":"雷","special":"技能充填(全體)","specialSecond":"技能充填(全體)","wikiNumber":"9208","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"368","eventID":"64","event":"幻魔特區朱雀","name":"蛇骨的真王_時生＆艾克斯阿爾巴","gender":"男","element":"火火","elementSecond":"火","special":"解除效果(全體)【防禦＆阻隔傷害】","specialSecond":"解除效果(全體)【防禦＆阻隔傷害】","wikiNumber":"9209","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"369","eventID":"64","event":"幻魔特區朱雀","name":"就像在照鏡子的我們_安卡＆特伊波亞","gender":"女","element":"雷水","elementSecond":"水","special":"變換問題類型","specialSecond":"特殊變換問題類型【連鎖數增加＆強化傷害】","wikiNumber":"9210","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"370","eventID":"64","event":"幻魔特區朱雀","name":"櫻媛與巫女_八千代＆茵芙蘿蕾","gender":"女","element":"水水","elementSecond":"水","special":"延遲(全體)","specialSecond":"延遲(全體)","wikiNumber":"9211","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"371","eventID":"65","event":"空戰的修瓦爾茲","name":"災難王子_齊格‧庫勒耶","gender":"男","element":"火闇","elementSecond":"闇","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"10221","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"372","eventID":"65","event":"空戰的修瓦爾茲","name":"大空賊的驕傲_洛冽緹‧卡那拉","gender":"女","element":"水水","elementSecond":"水","special":"捕食大魔術(全體)","specialSecond":"捕食大魔術(全體)","wikiNumber":"10224","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"373","eventID":"65","event":"空戰的修瓦爾茲","name":"碧空無敗_肯妮金‧布倫希爾德","gender":"女","element":"雷光","elementSecond":"光","special":"統一大魔術","specialSecond":"統一大魔術","wikiNumber":"10227","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"374","eventID":"65","event":"空戰的修瓦爾茲","name":"空賊少校的進軍_蘿葳‧弗洛伊賽","gender":"女","element":"雷水","elementSecond":"水","special":"變換問題類型","specialSecond":"統一變換問題類型【強化傷害】","wikiNumber":"10230","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"375","eventID":"65","event":"空戰的修瓦爾茲","name":"傭兵王_菲利庫斯‧榭法","gender":"男","element":"火火","elementSecond":"火","special":"特殊變換問題類型【技能充填】","specialSecond":"特殊變換問題類型【技能充填】","wikiNumber":"10233","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"376","eventID":"65","event":"空戰的修瓦爾茲","name":"龍鳴聲響_利可西斯＆凱娜","gender":"男女","element":"水闇","elementSecond":"闇","special":"一閃斬擊大魔術","specialSecond":"一閃斬擊大魔術","wikiNumber":"10236","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"377","eventID":"66","event":"空戰的德爾基馬斯Ⅲ 飄揚的軍旗","name":"蒼天中飄揚的軍旗_迪特利希‧貝爾克","gender":"男","element":"火火","elementSecond":"火","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"9072","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"378","eventID":"66","event":"空戰的德爾基馬斯Ⅲ 飄揚的軍旗","name":"黑鴉復仇者_齊格‧庫勒耶","gender":"男","element":"雷雷","elementSecond":"雷","special":"激化大魔術","specialSecond":"激化大魔術","wikiNumber":"9075","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"379","eventID":"66","event":"空戰的德爾基馬斯Ⅲ 飄揚的軍旗","name":"殘酷的騎士部隊_蘿葳‧弗洛伊賽","gender":"女","element":"火火","elementSecond":"火","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"9078","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"380","eventID":"66","event":"空戰的德爾基馬斯Ⅲ 飄揚的軍旗","name":"新王誕生_菲利庫斯‧榭法","gender":"男","element":"水火","elementSecond":"火","special":"提昇(全體)","specialSecond":"提昇(全體)","wikiNumber":"9081","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"381","eventID":"66","event":"空戰的德爾基馬斯Ⅲ 飄揚的軍旗","name":"公爵與隨從？_克拉黎亞＆威拉姆","gender":"男女","element":"雷水","elementSecond":"水","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"9084","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"382","eventID":"66","event":"空戰的德爾基馬斯Ⅲ 飄揚的軍旗","name":"歷戰必勝龍擊兵團_凱娜＆萊薩","gender":"女","element":"火水","elementSecond":"水","special":"提昇(自身)","specialSecond":"提昇(自身)","wikiNumber":"9087","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"383","eventID":"66","event":"空戰的德爾基馬斯Ⅲ 飄揚的軍旗","name":"天譴到來_普魯米耶＆盧凡爾","gender":"男女","element":"水光","elementSecond":"光","special":"複屬性回復","specialSecond":"複屬性回復","wikiNumber":"9090","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"384","eventID":"67","event":"空戰的德爾基馬斯Ⅱ 昏暗英雄","name":"叛逆大元帥_迪特利希‧貝爾克","gender":"男","element":"雷火","elementSecond":"火","special":"提升能力數值(全體)","specialSecond":"提昇(全體)","wikiNumber":"9133","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"385","eventID":"67","event":"空戰的德爾基馬斯Ⅱ 昏暗英雄","name":"昏暗英雄的副官_蘿葳‧弗洛伊賽","gender":"女","element":"水水","elementSecond":"水","special":"反動大魔術‧蝕(單體)","specialSecond":"反動大魔術‧蝕(單體)","wikiNumber":"9134","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"386","eventID":"67","event":"空戰的德爾基馬斯Ⅱ 昏暗英雄","name":"果敢的勇將_克拉黎亞‧夏魯利耶","gender":"女","element":"火雷","elementSecond":"雷","special":"強化傷害(全體)","specialSecond":"強化傷害(全體)","wikiNumber":"9135","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"387","eventID":"67","event":"空戰的德爾基馬斯Ⅱ 昏暗英雄","name":"回歸戰場的左右手_威拉姆‧奧爾岡","gender":"男","element":"火火","elementSecond":"火","special":"弱化大魔術(全體)","specialSecond":"弱化大魔術(全體)","wikiNumber":"9136","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"388","eventID":"67","event":"空戰的德爾基馬斯Ⅱ 昏暗英雄","name":"天意之劍_盧凡爾‧奧路姆","gender":"男","element":"水雷","elementSecond":"雷","special":"防禦連鎖","specialSecond":"防禦連鎖","wikiNumber":"9137","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"389","eventID":"67","event":"空戰的德爾基馬斯Ⅱ 昏暗英雄","name":"穿空傭兵_菲利庫斯‧榭法","gender":"男","element":"雷雷","elementSecond":"雷","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"9138","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"390","eventID":"67","event":"空戰的德爾基馬斯Ⅱ 昏暗英雄","name":"無視道德的天才_蕾貝卡‧鄂蘭","gender":"女","element":"雷雷","elementSecond":"雷","special":"鐵壁‧極","specialSecond":"鐵壁‧極","wikiNumber":"9139","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"391","eventID":"68","event":"空戰的德爾基馬斯","name":"空中的昏暗英雄_迪特利希‧貝爾克","gender":"男","element":"火雷","elementSecond":"雷","special":"特殊變換問題類型【連鎖數增加＆技能充填】","specialSecond":"特殊變換問題類型【連鎖數增加＆技能充填】","wikiNumber":"10256","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"392","eventID":"68","event":"空戰的德爾基馬斯","name":"支配空戰的隻翼_蘿葳‧弗洛伊賽","gender":"女","element":"雷雷","elementSecond":"雷","special":"技能充填＆延遲(全體)","specialSecond":"技能充填＆延遲(全體)","wikiNumber":"10257","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"393","eventID":"68","event":"空戰的德爾基馬斯","name":"絕對的勝者_克拉黎亞‧夏魯利耶","gender":"女","element":"雷火","elementSecond":"火","special":"強化傷害(指定屬性)","specialSecond":"強化傷害(指定屬性)","wikiNumber":"10258","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"394","eventID":"68","event":"空戰的德爾基馬斯","name":"永不滅亡的方程式_威拉姆‧奧爾岡","gender":"男","element":"雷雷","elementSecond":"雷","special":"延遲(單體)","specialSecond":"延遲大魔術(單體)","wikiNumber":"10259","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"395","eventID":"68","event":"空戰的德爾基馬斯","name":"破邪必滅之刃_盧凡爾‧奧路姆","gender":"男","element":"水水","elementSecond":"水","special":"持續回復","specialSecond":"強化精靈【持續回復＆強化傷害】","wikiNumber":"10260","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"396","eventID":"68","event":"空戰的德爾基馬斯","name":"漫舞於空中的羽翼_普魯米耶‧歇爾","gender":"女","element":"水雷","elementSecond":"雷","special":"變換問題類型","specialSecond":"特殊變換問題類型【連鎖數增加】","wikiNumber":"10261","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"397","eventID":"68","event":"空戰的德爾基馬斯","name":"龍迅百騎將軍_萊薩‧奈都爾","gender":"女","element":"火水","elementSecond":"水","special":"毒","specialSecond":"毒","wikiNumber":"10262","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"398","eventID":"68","event":"空戰的德爾基馬斯","name":"炎龍的進擊者_凱娜·埃爾蓋茲","gender":"女","element":"火火","elementSecond":"火","special":"犧牲魔術(全體)","specialSecond":"犧牲魔術(全體)","wikiNumber":"10263","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"399","eventID":"69","event":"虛實難辨的假面宴會","name":"爾虞我詐的心機組合_薩伯爾&朧莉","gender":"男女","element":"火光","elementSecond":"光","special":"產生連結問題類型","specialSecond":"產生連結問題類型","wikiNumber":"801812","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"400","eventID":"69","event":"虛實難辨的假面宴會","name":"賞玩慾望的魔翼天使_珂珂","gender":"女","element":"水雷","elementSecond":"雷","special":"強化精靈【持續回復＆異常狀態失效】","specialSecond":"強化精靈【持續回復＆異常狀態失效】","wikiNumber":"801813","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"401","eventID":"69","event":"虛實難辨的假面宴會","name":"宴會間的花蝴蝶_歌莉亞&格拉娜","gender":"女","element":"水光","elementSecond":"光","special":"變換問題類型","specialSecond":"大魔術(全體)","wikiNumber":"801814","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"402","eventID":"69","event":"虛實難辨的假面宴會","name":"中華風滿漢料理_蜜多莉","gender":"女","element":"火火","elementSecond":"火","special":"純屬性強化","specialSecond":"純屬性強化","wikiNumber":"801815","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"403","eventID":"69","event":"虛實難辨的假面宴會","name":"善邪不分的烘焙路_帕西娜","gender":"女","element":"雷雷","elementSecond":"雷","special":"炸裂大魔術","specialSecond":"炸裂大魔術","wikiNumber":"801816","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"404","eventID":"69","event":"虛實難辨的假面宴會","name":"復出的傳說勇者_斯林&莎曼妲","gender":"男女","element":"火雷","elementSecond":"雷","special":"多重魔術(單體)","specialSecond":"強化傷害(自身)","wikiNumber":"801817","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"405","eventID":"70","event":"《沙灘上的冰果宴》","name":"酸甜沁涼的特效藥_紬","gender":"女","element":"水水","elementSecond":"水","special":"純屬性大魔術(全體)","specialSecond":"純屬性大魔術(全體)","wikiNumber":"801352","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"406","eventID":"70","event":"《沙灘上的冰果宴》","name":"肌膚與麵包都是健康小麥色_賽特絲","gender":"女","element":"水雷","elementSecond":"雷","special":"回復異常狀態","specialSecond":"異常狀態失效","wikiNumber":"801354","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"407","eventID":"70","event":"《沙灘上的冰果宴》","name":"沙灘上飛舞的精靈_露絲娜","gender":"女","element":"雷雷","elementSecond":"雷","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"801356","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"408","eventID":"70","event":"《沙灘上的冰果宴》","name":"用刨冰與水果作曲_蜜多莉","gender":"女","element":"雷光","elementSecond":"光","special":"解除效果(單體)【屬性吸收】","specialSecond":"強化複屬性傷害","wikiNumber":"801358","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"409","eventID":"71","event":"神祕委託‧寒冰之巔的考驗","name":"赤豔的混血護林者_曼曼","gender":"女","element":"雷雷","elementSecond":"雷","special":"特殊變換問題類型【回復】","specialSecond":"特殊變換問題類型【回復】","wikiNumber":"800966","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"410","eventID":"71","event":"神祕委託‧寒冰之巔的考驗","name":"綺麗蒼森的守護靈_嘉蘭‧西維婭","gender":"女","element":"水水","elementSecond":"水","special":"復活","specialSecond":"復活","wikiNumber":"800967","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"411","eventID":"71","event":"神祕委託‧寒冰之巔的考驗","name":"月見鄉的引路人_十五夜","gender":"女","element":"雷雷","elementSecond":"雷","special":"阻隔傷害","specialSecond":"阻隔傷害","wikiNumber":"800968","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"412","eventID":"71","event":"神祕委託‧寒冰之巔的考驗","name":"傳遞思念的使者_列特‧托托克爾","gender":"男","element":"火火","elementSecond":"火","special":"自我犧牲魔術(全體)","specialSecond":"自我犧牲魔術(全體)","wikiNumber":"800969","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"413","eventID":"72","event":"偶像ω喵！！","name":"GZ偶像_莉露姆‧洛洛特","gender":"女","element":"火火","elementSecond":"火","special":"技能充填(單體)","specialSecond":"技能充填(單體)","wikiNumber":"10032","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"414","eventID":"72","event":"偶像ω喵！！","name":"優雅護士_卡多琳‧G‧U","gender":"女","element":"雷雷","elementSecond":"雷","special":"純屬性大魔術(單體)","specialSecond":"純屬性大魔術(單體)","wikiNumber":"10034","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"415","eventID":"72","event":"偶像ω喵！！","name":"純白小貓咪_莉莉＆艾克賽莉亞","gender":"女","element":"水光","elementSecond":"光","special":"炸裂大魔術","specialSecond":"炸裂大魔術","wikiNumber":"10036","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"416","eventID":"72","event":"偶像ω喵！！","name":"白線運動風_艾拉＆賽拉妲","gender":"女","element":"火雷","elementSecond":"雷","special":"阻隔傷害","specialSecond":"阻隔傷害","wikiNumber":"10038","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"417","eventID":"72","event":"偶像ω喵！！","name":"嚴守時間偶像_優卡‧恩德","gender":"女","element":"雷火","elementSecond":"火","special":"賦予雙重技能(單體)","specialSecond":"賦予雙重技能(單體)","wikiNumber":"10040","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"418","eventID":"72","event":"偶像ω喵！！","name":"男子氣概偶像_露卡‧福爾提斯","gender":"女","element":"水火","elementSecond":"火","special":"AS倍率強化","specialSecond":"AS倍率強化","wikiNumber":"10042","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"419","eventID":"73","event":"偶像ω喵！前&後篇","name":"超級偶像魔導少女_莉露姆‧洛洛特","gender":"女","element":"火火","elementSecond":"火","special":"純屬性大魔術(全體)","specialSecond":"純屬性大魔術(全體)","wikiNumber":"10944","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"420","eventID":"73","event":"偶像ω喵！前&後篇","name":"時尚護士_卡多琳‧G‧U","gender":"女","element":"水雷","elementSecond":"雷","special":"狂暴化","specialSecond":"多重魔術(單體)","wikiNumber":"10945","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"421","eventID":"73","event":"偶像ω喵！前&後篇","name":"惡威怒流_賽拉妲‧艾格蘭泰","gender":"女","element":"火闇","elementSecond":"闇","special":"強化複屬性傷害","specialSecond":"強化複屬性傷害","wikiNumber":"10946","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"422","eventID":"73","event":"偶像ω喵！前&後篇","name":"鍊金偶像_艾拉‧芙拉思卡","gender":"女","element":"雷闇","elementSecond":"闇","special":"技能充填(全體)","specialSecond":"技能充填(全體)","wikiNumber":"10947","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"423","eventID":"73","event":"偶像ω喵！前&後篇","name":"哼哼偶像_莉莉‧康乃爾","gender":"女","element":"雷雷","elementSecond":"雷","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"10948","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"424","eventID":"73","event":"偶像ω喵！前&後篇","name":"偶像龍騎士_艾克賽莉亞‧庫魯斯","gender":"女","element":"水光","elementSecond":"光","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"10949","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"425","eventID":"73","event":"偶像ω喵！前&後篇","name":"成立！粗枝大派","gender":"女","element":"火水","elementSecond":"水","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"10950","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"426","eventID":"73","event":"偶像ω喵！前&後篇","name":"成立！擦身之緣也是天意","gender":"女","element":"雷光","elementSecond":"光","special":"強化精靈【持續回復＆提升能力數值】","specialSecond":"強化精靈【持續回復＆減輕傷害＆提升能力數值】","wikiNumber":"10951","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"427","eventID":"74","event":"淡薄的藍色光芒 最終章 終極聖祈","name":"終極聖祈_莎倫＆西奧多","gender":"男女","element":"水火","elementSecond":"火","special":"大魔術(全體)","specialSecond":"強化複屬性傷害","wikiNumber":"9594","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"436","eventID":"78","event":"片翼天使的轉世約定","name":"誓約兩世不悔的羈絆_瞬&陽","gender":"男","element":"水雷","elementSecond":"雷","special":"異常狀態失效","specialSecond":"異常狀態失效","wikiNumber":"801279","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"437","eventID":"78","event":"片翼天使的轉世約定","name":"月下的命運編織者_珂珂","gender":"女","element":"水闇","elementSecond":"闇","special":"反動大魔術(全體)","specialSecond":"反動大魔術(全體)","wikiNumber":"801280","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"438","eventID":"78","event":"片翼天使的轉世約定","name":"讓人幸福的味道_蜜多莉","gender":"女","element":"雷雷","elementSecond":"雷","special":"阻隔傷害","specialSecond":"阻隔傷害","wikiNumber":"801281","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"439","eventID":"78","event":"片翼天使的轉世約定","name":"南瓜披風下的暗夜怪盜_薩伯爾","gender":"男","element":"雷闇","elementSecond":"闇","special":"自我犧牲魔術(全體)","specialSecond":"自我犧牲魔術(全體)","wikiNumber":"801282","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"440","eventID":"78","event":"片翼天使的轉世約定","name":"軍中的白衣救贖_紬","gender":"女","element":"水火","elementSecond":"火","special":"強化精靈【強化傷害＆減輕傷害】","specialSecond":"強化精靈【強化傷害＆減輕傷害】","wikiNumber":"801283","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"441","eventID":"78","event":"片翼天使的轉世約定","name":"操控命運的可愛殺手_真冬&霧子","gender":"男女","element":"水火","elementSecond":"火","special":"強化傷害(自身)","specialSecond":"強化傷害(自身)","wikiNumber":"801284","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"442","eventID":"78","event":"片翼天使的轉世約定","name":"在黑夜捉弄人們的少女_格拉娜","gender":"女","element":"火水","elementSecond":"水","special":"特殊變換問題類型【連鎖數增加】","specialSecond":"強化傷害(指定屬性)","wikiNumber":"801285","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"443","eventID":"78","event":"片翼天使的轉世約定","name":"桌間穿梭的曼妙身姿_歌莉亞","gender":"女","element":"火光","elementSecond":"光","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"801286","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"444","eventID":"78","event":"片翼天使的轉世約定","name":"邪氣洶湧的再世魔族_寶迪","gender":"男","element":"雷光","elementSecond":"光","special":"回復異常狀態","specialSecond":"回復異常狀態","wikiNumber":"801287","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"445","eventID":"78","event":"片翼天使的轉世約定","name":"指向真實的凜冽曙光_朧莉","gender":"女","element":"水闇","elementSecond":"闇","special":"解除效果大魔術(全體)【物理反擊＆技能反擊】","specialSecond":"解除效果大魔術(全體)【物理反擊＆技能反擊】","wikiNumber":"801288","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"446","eventID":"79","event":"炎夏的海灘風情！","name":"水族的末日殺手_薩伯爾","gender":"男","element":"雷闇","elementSecond":"闇","special":"提昇(自身)","specialSecond":"提昇(自身)","wikiNumber":"801476","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"447","eventID":"79","event":"炎夏的海灘風情！","name":"回憶中的魔王城堡_寶迪","gender":"男","element":"雷光","elementSecond":"光","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"801477","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"448","eventID":"79","event":"炎夏的海灘風情！","name":"夏日的泳裝少女_朧莉","gender":"女","element":"水闇","elementSecond":"闇","special":"虛無之瞳","specialSecond":"虛無之瞳","wikiNumber":"801478","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"449","eventID":"79","event":"炎夏的海灘風情！","name":"靈界偵探的助手_悠可","gender":"女","element":"火水","elementSecond":"水","special":"技能充填(全體)","specialSecond":"技能充填(全體)","wikiNumber":"801479","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"450","eventID":"79","event":"炎夏的海灘風情！","name":"想要喝點什麼嗎？_歌莉亞","gender":"女","element":"火光","elementSecond":"光","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"801480","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"451","eventID":"79","event":"炎夏的海灘風情！","name":"尋找美麗的回憶_霓莎","gender":"女","element":"水水","elementSecond":"水","special":"防禦連鎖","specialSecond":"鐵壁‧極","wikiNumber":"801481","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"452","eventID":"80","event":"七夕夜‧煙花燦爛","name":"在七夕的傳情紙鶴_拉索","gender":"男","element":"水水","elementSecond":"水","special":"弱化大魔術(全體)","specialSecond":"弱化大魔術(全體)","wikiNumber":"801482","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"453","eventID":"80","event":"七夕夜‧煙花燦爛","name":"在七夕祈願的女孩_露絲娜","gender":"女","element":"水光","elementSecond":"光","special":"時限大魔術","specialSecond":"時限大魔術","wikiNumber":"801483","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"454","eventID":"80","event":"七夕夜‧煙花燦爛","name":"黑暗彼方的委託_珂珂","gender":"女","element":"水闇","elementSecond":"闇","special":"異常狀態失效","specialSecond":"異常狀態失效","wikiNumber":"801484","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"455","eventID":"80","event":"七夕夜‧煙花燦爛","name":"燦爛的節慶煙花_優依","gender":"女","element":"火雷","elementSecond":"雷","special":"特殊變換問題類型【連鎖數增加】","specialSecond":"大魔術(全體)","wikiNumber":"801485","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"456","eventID":"80","event":"七夕夜‧煙花燦爛","name":"怪盜的迷糊伙伴_格拉娜","gender":"女","element":"火水","elementSecond":"水","special":"延長AS時間限制","specialSecond":"刪去回答","wikiNumber":"801486","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"457","eventID":"80","event":"七夕夜‧煙花燦爛","name":"降罪天使_洛琪兒","gender":"女","element":"雷雷","elementSecond":"雷","special":"防禦","specialSecond":"延遲(單體)","wikiNumber":"801487","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"458","eventID":"81","event":"《靈界魔女：危險紳士之章》","name":"闇夜怪盜紳士_薩伯爾‧哲","gender":"男","element":"火火","elementSecond":"火","special":"純屬性大魔術(單體)","specialSecond":"純屬性大魔術(單體)","wikiNumber":"801438","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"459","eventID":"81","event":"《靈界魔女：危險紳士之章》","name":"斷鍊的魔女傳承_瑪露可‧雪恩","gender":"女","element":"水水","elementSecond":"水","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"801440","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"460","eventID":"81","event":"《靈界魔女：危險紳士之章》","name":"靈界穿越者_莎朵莉‧雪恩","gender":"女","element":"雷光","elementSecond":"光","special":"虛無之瞳","specialSecond":"解除效果大魔術(全體)【物理反擊＆技能反擊】","wikiNumber":"801442","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"461","eventID":"81","event":"《靈界魔女：危險紳士之章》","name":"魔女試煉的裁決者_索恩","gender":"男","element":"雷水","elementSecond":"水","special":"挑釁","specialSecond":"復活","wikiNumber":"801444","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"462","eventID":"81","event":"《靈界魔女：危險紳士之章》","name":"消亡的無名魔女_枯露美","gender":"女","element":"火光","elementSecond":"光","special":"刪去回答","specialSecond":"弱化大魔術(單體)","wikiNumber":"801446","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"463","eventID":"82","event":"新說 桃娘傳Ⅱ 機關桃源虹繪卷","name":"四心一體Φ之陣_李太郎‧普露姆","gender":"女","element":"火火","elementSecond":"火","special":"純屬性大魔術(單體)","specialSecond":"純屬性大魔術(單體)","wikiNumber":"9750","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"464","eventID":"82","event":"新說 桃娘傳Ⅱ 機關桃源虹繪卷","name":"人類歐帕茲_初瀨‧之‧島兒","gender":"男","element":"水火","elementSecond":"火","special":"阻隔傷害","specialSecond":"阻隔傷害","wikiNumber":"9753","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"465","eventID":"82","event":"新說 桃娘傳Ⅱ 機關桃源虹繪卷","name":"真人不露相_八重‧栗柄","gender":"女","element":"雷雷","elementSecond":"雷","special":"炸裂大魔術","specialSecond":"炸裂大魔術","wikiNumber":"9756","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"466","eventID":"82","event":"新說 桃娘傳Ⅱ 機關桃源虹繪卷","name":"鶴鳴九皋_冰雨‧鶴鳴","gender":"女","element":"水水","elementSecond":"水","special":"技能充填(相鄰)","specialSecond":"技能充填(相鄰)","wikiNumber":"9759","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"467","eventID":"82","event":"新說 桃娘傳Ⅱ 機關桃源虹繪卷","name":"名揚天地的風雷神_風華＆米蕾","gender":"女","element":"水雷","elementSecond":"雷","special":"融合大魔術(全體)","specialSecond":"融合大魔術(全體)","wikiNumber":"9762","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"468","eventID":"82","event":"新說 桃娘傳Ⅱ 機關桃源虹繪卷","name":"看我大展身手_春彥‧堀川","gender":"男","element":"雷光","elementSecond":"光","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"9765","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"469","eventID":"83","event":"新說 桃娘傳 妖爺合戰誓助劍","name":"神姬武桃_李太郎‧普露姆","gender":"女","element":"火雷","elementSecond":"雷","special":"激化大魔術","specialSecond":"激化大魔術","wikiNumber":"9804","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"470","eventID":"83","event":"新說 桃娘傳 妖爺合戰誓助劍","name":"撩亂閃雷_米蕾‧凱拉姆","gender":"女","element":"雷水","elementSecond":"水","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"9805","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"471","eventID":"83","event":"新說 桃娘傳 妖爺合戰誓助劍","name":"驚天颱風_風華‧凱拉姆","gender":"女","element":"水水","elementSecond":"水","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"9806","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"472","eventID":"83","event":"新說 桃娘傳 妖爺合戰誓助劍","name":"舊世界的大賢_初瀨‧之‧島兒","gender":"男","element":"水火","elementSecond":"火","special":"物理反擊","specialSecond":"物理反擊","wikiNumber":"9807","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"473","eventID":"83","event":"新說 桃娘傳 妖爺合戰誓助劍","name":"天下不遜的不妙傢伙_八重‧栗柄","gender":"女","element":"火水","elementSecond":"水","special":"提昇(全體)","specialSecond":"提昇(全體)","wikiNumber":"9808","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"474","eventID":"83","event":"新說 桃娘傳 妖爺合戰誓助劍","name":"遭遇外世界_Y.U.N.A","gender":"女","element":"雷雷","elementSecond":"雷","special":"自我犧牲魔術(單體)","specialSecond":"自我犧牲魔術(單體)","wikiNumber":"9809","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"475","eventID":"83","event":"新說 桃娘傳 妖爺合戰誓助劍","name":"正牌溫泉桃娘傳","gender":"女","element":"水水","elementSecond":"水","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"9810","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"479","eventID":"85","event":"AbyssCode07 寂寞的境界","name":"AbCd-Φφ：《閉鎖深淵_史托路》","gender":"男","element":"火闇","elementSecond":"闇","special":"行動感應","specialSecond":"行動感應","wikiNumber":"11841","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"480","eventID":"85","event":"AbyssCode07 寂寞的境界","name":"AbCd-Φφ：《終端的處刑人_托露特》","gender":"女","element":"火火","elementSecond":"火","special":"炸裂大魔術","specialSecond":"炸裂大魔術","wikiNumber":"11840","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"481","eventID":"86","event":"《裝神弄鬼》","name":"希臘舞台上的美杜莎_悠可","gender":"女","element":"水光","elementSecond":"光","special":"防禦","specialSecond":"大魔術(全體)","wikiNumber":"801422","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"482","eventID":"86","event":"《裝神弄鬼》","name":"惡魔系料理師_寶菈","gender":"女","element":"水水","elementSecond":"水","special":"毒","specialSecond":"毒","wikiNumber":"801424","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"483","eventID":"86","event":"《裝神弄鬼》","name":"海底世界的美人魚_瑟芬妮","gender":"女","element":"火雷","elementSecond":"雷","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"801426","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"484","eventID":"86","event":"《裝神弄鬼》","name":"穿腦的死亡之聲_艾斌","gender":"男","element":"火闇","elementSecond":"闇","special":"技能充填＆延遲(單體)","specialSecond":"技能充填＆延遲(單體)","wikiNumber":"801428","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"485","eventID":"86","event":"《裝神弄鬼》","name":"背後喚人的恐怖傳說_卡菈洋","gender":"女","element":"雷火","elementSecond":"火","special":"提升能力數值(自身)","specialSecond":"狂暴化","wikiNumber":"801430","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"486","eventID":"86","event":"《裝神弄鬼》","name":"自我活體改造_塔寇","gender":"男","element":"雷雷","elementSecond":"雷","special":"提昇(全體)","specialSecond":"提昇(全體)","wikiNumber":"801432","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"487","eventID":"87","event":"給夏日綻放的你","name":"夏日的熱浪與向日葵_早瀨凜","gender":"女","element":"水水","elementSecond":"水","special":"犧牲連鎖強化","specialSecond":"犧牲連鎖強化","wikiNumber":"8801","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"488","eventID":"88","event":"《沉眠之血2》幼龍的鳴嘶","name":"覺醒的幼龍_裴洛恩‧格利菲斯","gender":"男","element":"雷火","elementSecond":"火","special":"時限大魔術","specialSecond":"時限大魔術","wikiNumber":"801824","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"489","eventID":"88","event":"《沉眠之血2》幼龍的鳴嘶","name":"薩蘭的帶刺薔薇_潔依瓦菈‧夏爾","gender":"女","element":"火水","elementSecond":"水","special":"提升能力數值(自身)","specialSecond":"大魔術(全體)","wikiNumber":"801825","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"490","eventID":"88","event":"《沉眠之血2》幼龍的鳴嘶","name":"戰場上咆哮的獵豹_艾梅爾","gender":"女","element":"雷水","elementSecond":"水","special":"弱化大魔術(全體)","specialSecond":"弱化大魔術(全體)","wikiNumber":"801826","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"491","eventID":"88","event":"《沉眠之血2》幼龍的鳴嘶","name":"渲染於紙上的邪繪_賽兒蜜雅","gender":"女","element":"水水","elementSecond":"水","special":"特殊變換問題類型【連鎖數增加】","specialSecond":"提昇(全體)","wikiNumber":"801827","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"492","eventID":"88","event":"《沉眠之血2》幼龍的鳴嘶","name":"生殺予奪的斷罪之鞭_可蘿碧","gender":"女","element":"雷雷","elementSecond":"雷","special":"強化精靈【持續回復＆減輕傷害＆強化傷害】","specialSecond":"起死回生","wikiNumber":"801828","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"493","eventID":"88","event":"《沉眠之血2》幼龍的鳴嘶","name":"現世的靈動之焰_納迦維埃","gender":"男","element":"火火","elementSecond":"火","special":"炸裂大魔術","specialSecond":"炸裂大魔術","wikiNumber":"801829","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"494","eventID":"89","event":"《沉眠之血》—焚焰的國度","name":"半龍王族_裴洛恩‧格利菲斯","gender":"男","element":"火闇","elementSecond":"闇","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"801559","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"495","eventID":"89","event":"《沉眠之血》—焚焰的國度","name":"未來的女將軍_潔依瓦菈‧夏爾","gender":"女","element":"水光","elementSecond":"光","special":"斬擊大魔術","specialSecond":"強化傷害(指定屬性)","wikiNumber":"801560","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"496","eventID":"89","event":"《沉眠之血》—焚焰的國度","name":"熾熱的槍尖_艾梅爾","gender":"女","element":"火火","elementSecond":"火","special":"詠唱大魔術","specialSecond":"詠唱大魔術","wikiNumber":"801561","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"497","eventID":"89","event":"《沉眠之血》—焚焰的國度","name":"皇家惡魔獵人_巴夫坦","gender":"男","element":"水水","elementSecond":"水","special":"防禦","specialSecond":"回復異常狀態","wikiNumber":"801562","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"498","eventID":"89","event":"《沉眠之血》—焚焰的國度","name":"未來的希望之光_納迦蕾特","gender":"女","element":"雷雷","elementSecond":"雷","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"801563","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"499","eventID":"89","event":"《沉眠之血》—焚焰的國度","name":"未來的末日景色_寶迪‧波羅斯","gender":"男","element":"雷光","elementSecond":"光","special":"技能充填(全體)","specialSecond":"技能充填(全體)","wikiNumber":"801564","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"500","eventID":"90","event":"冰雪薔薇的黑影","name":"傳承之刃_佛蘭賽爾","gender":"男","element":"水水","elementSecond":"水","special":"純屬性大魔術(全體)","specialSecond":"純屬性大魔術(全體)","wikiNumber":"801818","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"501","eventID":"90","event":"冰雪薔薇的黑影","name":"封護劍士_洛蕾塔","gender":"女","element":"火火","elementSecond":"火","special":"一閃斬擊大魔術","specialSecond":"一閃斬擊大魔術","wikiNumber":"801819","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"502","eventID":"90","event":"冰雪薔薇的黑影","name":"太古祕法的守護者_拉索","gender":"男","element":"雷雷","elementSecond":"雷","special":"強化傷害(自身)","specialSecond":"強化傷害(自身)","wikiNumber":"801820","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"503","eventID":"90","event":"冰雪薔薇的黑影","name":"閃耀的新生力量_優依","gender":"女","element":"雷光","elementSecond":"光","special":"特殊變換問題類型【連鎖數增加】","specialSecond":"犧牲連鎖強化","wikiNumber":"801821","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"504","eventID":"90","event":"冰雪薔薇的黑影","name":"幻境中的冰雪之噬_帕榭菈","gender":"女","element":"火水","elementSecond":"水","special":"提升能力數值(自身)","specialSecond":"多重魔術(單體)","wikiNumber":"801822","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"505","eventID":"90","event":"冰雪薔薇的黑影","name":"粉色美夢的編織者_奈婭","gender":"女","element":"水闇","elementSecond":"闇","special":"特效大魔術(全體)","specialSecond":"解除效果大魔術(全體)【物理反擊＆技能反擊】","wikiNumber":"801823","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"506","eventID":"91","event":"聖惡魔女子學院2","name":"燦爛！旋花邪神_露露貝爾","gender":"女","element":"水闇","elementSecond":"闇","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"8810","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"507","eventID":"91","event":"聖惡魔女子學院2","name":"死靈的BON舞_露露貝爾","gender":"女","element":"火火","elementSecond":"火","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"8812","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"508","eventID":"91","event":"聖惡魔女子學院2","name":"不可觸碰的Bull_蜜亞‧雅卡達","gender":"女","element":"火火","elementSecond":"火","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"8815","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"509","eventID":"91","event":"聖惡魔女子學院2","name":"蘊藏的野心_伊迪絲＆卡娜美","gender":"女","element":"火雷","elementSecond":"雷","special":"賦予雙重技能(全體)","specialSecond":"賦予雙重技能(全體)","wikiNumber":"8818","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"510","eventID":"91","event":"聖惡魔女子學院2","name":"向天使惡作劇_烏麗希拉‧法蕾","gender":"女","element":"水水","elementSecond":"水","special":"強化精靈【持續回復＆減輕傷害＆強化傷害】","specialSecond":"強化精靈【持續回復＆減輕傷害＆強化傷害】","wikiNumber":"8821","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"511","eventID":"91","event":"聖惡魔女子學院2","name":"其鮮血如火炎_克魯斯‧德拉古","gender":"男","element":"雷雷","elementSecond":"雷","special":"反動大魔術‧蝕(全體)","specialSecond":"反動大魔術‧蝕(全體)","wikiNumber":"8824","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"512","eventID":"91","event":"聖惡魔女子學院2","name":"神聖的邪印家譜_伊萊恩‧英尼斯","gender":"女","element":"雷闇","elementSecond":"闇","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"8827","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"513","eventID":"92","event":"聖惡魔女子學院","name":"野丫頭邪神少女_露露貝爾","gender":"女","element":"火闇","elementSecond":"闇","special":"阻隔傷害","specialSecond":"阻隔傷害","wikiNumber":"8889","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"514","eventID":"92","event":"聖惡魔女子學院","name":"完全降臨！_邪神_露露貝爾","gender":"女","element":"火闇","elementSecond":"闇","special":"提昇(自身)","specialSecond":"提昇(自身)","wikiNumber":"8890","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"515","eventID":"92","event":"聖惡魔女子學院","name":"終末的純白音色_烏麗希拉‧法蕾","gender":"女","element":"水火","elementSecond":"火","special":"強化精靈【持續回復＆減輕傷害】","specialSecond":"強化精靈【持續回復＆減輕傷害＆強化傷害】","wikiNumber":"8891","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"516","eventID":"92","event":"聖惡魔女子學院","name":"哞～烈超魔牛_蜜亞‧雅卡達","gender":"女","element":"火火","elementSecond":"火","special":"特殊變換問題類型【連鎖數增加】","specialSecond":"特殊變換問題類型【連鎖數增加】","wikiNumber":"8892","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"517","eventID":"92","event":"聖惡魔女子學院","name":"處刑台的美麗花朵_伊迪絲‧吉爾蒂","gender":"女","element":"水闇","elementSecond":"闇","special":"虛無之瞳","specialSecond":"虛無之瞳","wikiNumber":"8893","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"518","eventID":"92","event":"聖惡魔女子學院","name":"深血黃昏_克魯斯‧德拉古","gender":"男","element":"雷雷","elementSecond":"雷","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"8894","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"519","eventID":"92","event":"聖惡魔女子學院","name":"虹色的縱橫家_卡娜美‧巴巴羅薩","gender":"女","element":"雷水","elementSecond":"水","special":"防禦連鎖","specialSecond":"延長AS時間限制","wikiNumber":"8895","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"537","eventID":"94","event":"《聖誕情侶決定戰》","name":"星和月的輝映_瞬&陽","gender":"男","element":"火水","elementSecond":"水","special":"提升能力數值(自身)","specialSecond":"提昇(自身)","wikiNumber":"801729","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"538","eventID":"94","event":"《聖誕情侶決定戰》","name":"夜間浪漫約會_艾爾多＆雅西兒","gender":"男女","element":"雷水","elementSecond":"水","special":"防禦連鎖","specialSecond":"多重魔術(單體)","wikiNumber":"801730","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"539","eventID":"94","event":"《聖誕情侶決定戰》","name":"醇厚的戀愛口感_寶菈","gender":"女","element":"水水","elementSecond":"水","special":"回復異常狀態","specialSecond":"回復異常狀態＆復活","wikiNumber":"801731","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"540","eventID":"94","event":"《聖誕情侶決定戰》","name":"今天只需小試身手_達坎尼亞","gender":"男","element":"火火","elementSecond":"火","special":"解除效果(全體)【防禦＆阻隔傷害】","specialSecond":"大魔術(單體)","wikiNumber":"801732","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"541","eventID":"94","event":"《聖誕情侶決定戰》","name":"不愛工作的寒冰智賢_冬禹","gender":"女","element":"水闇","elementSecond":"闇","special":"回復","specialSecond":"技能充填(全體)","wikiNumber":"801734","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"542","eventID":"94","event":"《聖誕情侶決定戰》","name":"打歌專用服裝_蝴蝶","gender":"女","element":"雷雷","elementSecond":"雷","special":"強化精靈【持續回復＆提升能力數值】","specialSecond":"強化精靈【持續回復＆提升能力數值】","wikiNumber":"801735","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"543","eventID":"95","event":"魔轟三鐵傑 對 地獄三十六歌仙","name":"偏激護士_卡多琳‧G‧U","gender":"女","element":"火水","elementSecond":"水","special":"強化複屬性傷害","specialSecond":"強化複屬性傷害","wikiNumber":"10610","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"544","eventID":"95","event":"魔轟三鐵傑 對 地獄三十六歌仙","name":"逆襲的【煉獄華】_里苑‧游","gender":"女","element":"水火","elementSecond":"火","special":"提升能力數值(自身)","specialSecond":"提升能力數值(自身)","wikiNumber":"10611","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"545","eventID":"95","event":"魔轟三鐵傑 對 地獄三十六歌仙","name":"鬼道大宿_達姆薩‧伊那","gender":"男","element":"雷雷","elementSecond":"雷","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"10612","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"546","eventID":"95","event":"魔轟三鐵傑 對 地獄三十六歌仙","name":"浪跡天涯的戰女神_圖菈","gender":"女","element":"雷光","elementSecond":"光","special":"防禦","specialSecond":"防禦","wikiNumber":"10613","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"547","eventID":"95","event":"魔轟三鐵傑 對 地獄三十六歌仙","name":"燒盡廢物的死神_玫芙","gender":"女","element":"火火","elementSecond":"火","special":"技能複製","specialSecond":"技能複製","wikiNumber":"10614","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"548","eventID":"95","event":"魔轟三鐵傑 對 地獄三十六歌仙","name":"「攻陷城塞」的_路狄歐‧狄爾","gender":"男","element":"水水","elementSecond":"水","special":"自我犧牲魔術(單體)","specialSecond":"自我犧牲魔術(單體)","wikiNumber":"10615","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"549","eventID":"96","event":"黑夜中的甜點大盜","name":"首屈一指的鬆餅師匠_巧琪","gender":"女","element":"火雷","elementSecond":"雷","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"800991","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"550","eventID":"96","event":"黑夜中的甜點大盜","name":"俏皮的甜點界新人_泰隆","gender":"男","element":"水雷","elementSecond":"雷","special":"強化傷害(指定屬性)","specialSecond":"強化傷害(指定屬性)","wikiNumber":"800992","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"551","eventID":"96","event":"黑夜中的甜點大盜","name":"追求極致甜點的魔法少女_帕西娜","gender":"女","element":"火闇","elementSecond":"闇","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"800993","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"552","eventID":"96","event":"黑夜中的甜點大盜","name":"席捲黑夜而來的騎士_薩伯爾‧哲","gender":"男","element":"雷闇","elementSecond":"闇","special":"強化傷害(指定屬性)","specialSecond":"強化傷害(指定屬性)","wikiNumber":"800994","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"553","eventID":"96","event":"黑夜中的甜點大盜","name":"無窮好奇心的東方魔女_賽特絲","gender":"女","element":"雷火","elementSecond":"火","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"800995","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"554","eventID":"96","event":"黑夜中的甜點大盜","name":"穿梭靈界的異能偵探_朧莉","gender":"女","element":"水闇","elementSecond":"闇","special":"異常狀態失效","specialSecond":"異常狀態失效","wikiNumber":"800996","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"555","eventID":"96","event":"黑夜中的甜點大盜","name":"聰慧可愛的神秘男孩_寶迪","gender":"男","element":"雷光","elementSecond":"光","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"800997","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"556","eventID":"96","event":"黑夜中的甜點大盜","name":"最喜歡惡作劇的女孩_格拉娜","gender":"女","element":"火水","elementSecond":"水","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"800998","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"557","eventID":"96","event":"黑夜中的甜點大盜","name":"最適合萬聖節的料理人_艾絲塔","gender":"女","element":"雷水","elementSecond":"水","special":"反動大魔術(全體)","specialSecond":"反動大魔術(全體)","wikiNumber":"800999","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"558","eventID":"96","event":"黑夜中的甜點大盜","name":"操弄冰火的狐狸兄妹_真冬＆霧子","gender":"男女","element":"水火","elementSecond":"火","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"801000","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"559","eventID":"97","event":"武鬥之巔‧寒冰嶺上的召集令","name":"青苑綴丹_琉璃妘","gender":"女","element":"雷雷","elementSecond":"雷","special":"純屬性大魔術(全體)","specialSecond":"純屬性大魔術(全體)","wikiNumber":"801550","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"560","eventID":"97","event":"武鬥之巔‧寒冰嶺上的召集令","name":"囚禁之嫁_洛蕾塔","gender":"女","element":"水水","elementSecond":"水","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"801551","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"561","eventID":"97","event":"武鬥之巔‧寒冰嶺上的召集令","name":"教堂之劍_佛蘭塞爾","gender":"男","element":"火火","elementSecond":"火","special":"提升能力數值(自身)","specialSecond":"斬擊大魔術","wikiNumber":"801552","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"562","eventID":"97","event":"武鬥之巔‧寒冰嶺上的召集令","name":"星與月之雙子神_艾希&艾拉","gender":"女","element":"水水","elementSecond":"水","special":"特殊變換問題類型【技能充填】","specialSecond":"特殊變換問題類型【減輕傷害＆技能充填】","wikiNumber":"801553","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"563","eventID":"97","event":"武鬥之巔‧寒冰嶺上的召集令","name":"自殺教練_瑪嘉雷特","gender":"女","element":"雷水","elementSecond":"水","special":"強化複屬性傷害","specialSecond":"強化複屬性傷害","wikiNumber":"801554","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"564","eventID":"97","event":"武鬥之巔‧寒冰嶺上的召集令","name":"理智的兄長_諾爾兄弟","gender":"男","element":"雷水","elementSecond":"水","special":"回復異常狀態","specialSecond":"回復異常狀態＆復活","wikiNumber":"801556","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"565","eventID":"97","event":"武鬥之巔‧寒冰嶺上的召集令","name":"赤炎魔法使_絲坦妮","gender":"女","element":"火火","elementSecond":"火","special":"時限大魔術","specialSecond":"時限大魔術","wikiNumber":"801557","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"566","eventID":"97","event":"武鬥之巔‧寒冰嶺上的召集令","name":"龍族的薔薇公主_蘿伊娜","gender":"女","element":"火火","elementSecond":"火","special":"阻隔傷害","specialSecond":"阻隔傷害","wikiNumber":"801558","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"567","eventID":"98","event":"心龍天翔 Rising Dragon","name":"炎之牽絆_阿德萊德‧席拉","gender":"女","element":"火火","elementSecond":"火","special":"時限大魔術","specialSecond":"時限大魔術","wikiNumber":"10649","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"568","eventID":"98","event":"心龍天翔 Rising Dragon","name":"心龍天翔_阿德萊德‧席拉","gender":"女","element":"火火","elementSecond":"火","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"10650","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"569","eventID":"98","event":"心龍天翔 Rising Dragon","name":"繼承龍族驕傲者_蜜涅娃‧克勞德","gender":"女","element":"雷光","elementSecond":"光","special":"特殊變換問題類型【強化傷害】","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"10651","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"570","eventID":"98","event":"心龍天翔 Rising Dragon","name":"黎明之皇龍魔_蜜涅娃‧克勞德","gender":"女","element":"雷光","elementSecond":"光","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"10652","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"571","eventID":"98","event":"心龍天翔 Rising Dragon","name":"誓約之翼_莉緹卡‧帕絲","gender":"女","element":"水水","elementSecond":"水","special":"特殊變換問題類型【技能充填】","specialSecond":"特殊變換問題類型【減輕傷害＆技能充填】","wikiNumber":"10653","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"572","eventID":"98","event":"心龍天翔 Rising Dragon","name":"逆擊的屠龍者_伊克爾‧羅特列克","gender":"男","element":"水水","elementSecond":"水","special":"挑釁","specialSecond":"鐵壁‧極","wikiNumber":"10654","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"573","eventID":"98","event":"心龍天翔 Rising Dragon","name":"深謀遠慮之人_阿瑪雅","gender":"女","element":"雷雷","elementSecond":"雷","special":"解除效果(全體)【屬性吸收】","specialSecond":"解除效果大魔術(全體)【屬性吸收】","wikiNumber":"10655","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"574","eventID":"99","event":"來自異界的天使","name":"天界的嚮導_羽翼天使‧芙蘭&卡蒂雅","gender":"女","element":"雷光","elementSecond":"光","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"800971","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"575","eventID":"99","event":"來自異界的天使","name":"聖耀流光_神翼天使‧惠","gender":"女","element":"水光","elementSecond":"光","special":"異常狀態失效","specialSecond":"異常狀態失效","wikiNumber":"800972","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"576","eventID":"99","event":"來自異界的天使","name":"滅神無道_戮翼天使‧菲爾","gender":"男","element":"雷闇","elementSecond":"闇","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"800973","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"577","eventID":"99","event":"來自異界的天使","name":"無盡的暴食_煌翼天使‧鵑&洛茵","gender":"女","element":"雷火","elementSecond":"火","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"800974","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"578","eventID":"99","event":"來自異界的天使","name":"奇蹟的鈴裝_熾翼天使‧湊","gender":"女","element":"火雷","elementSecond":"雷","special":"變換問題類型","specialSecond":"特殊變換問題類型【隨機】","wikiNumber":"800975","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"579","eventID":"99","event":"來自異界的天使","name":"禁忌的戀情_殘翼天使‧瞬&陽","gender":"男","element":"水雷","elementSecond":"雷","special":"阻隔傷害","specialSecond":"阻隔傷害","wikiNumber":"800976","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"580","eventID":"99","event":"來自異界的天使","name":"流星的雙壁_煉翼天使‧星娜&星羅","gender":"女","element":"火水","elementSecond":"水","special":"延遲(全體)","specialSecond":"延遲(全體)","wikiNumber":"800977","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"581","eventID":"99","event":"來自異界的天使","name":"愛的特效藥_白翼天使‧紬","gender":"女","element":"水火","elementSecond":"火","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"800978","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"582","eventID":"99","event":"來自異界的天使","name":"薔薇綻放的花音_虹翼天使‧歌莉亞","gender":"女","element":"火光","elementSecond":"光","special":"異常狀態失效","specialSecond":"異常狀態失效","wikiNumber":"800979","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"583","eventID":"99","event":"來自異界的天使","name":"狂歡的水舞姬_魔翼天使‧珂珂","gender":"女","element":"水闇","elementSecond":"闇","special":"物理反擊","specialSecond":"物理反擊","wikiNumber":"800980","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"584","eventID":"100","event":"追憶的閃耀光輝","name":"忘卻之莽撞少年_亞迪‧圖因","gender":"男","element":"雷雷","elementSecond":"雷","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"10604","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"585","eventID":"100","event":"追憶的閃耀光輝","name":"追憶與恆久之巫女_梅茉莉亞‧里賽","gender":"女","element":"雷光","elementSecond":"光","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"10605","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"586","eventID":"100","event":"追憶的閃耀光輝","name":"遺忘之占卜魔導士_媞希卡‧普克","gender":"女","element":"火火","elementSecond":"火","special":"反動大魔術‧蝕(單體)","specialSecond":"反動大魔術‧蝕(單體)","wikiNumber":"10606","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"587","eventID":"100","event":"追憶的閃耀光輝","name":"忘卻之肉體魔導士_賽德‧納修","gender":"男","element":"水雷","elementSecond":"雷","special":"提昇(自身)","specialSecond":"提昇(自身)","wikiNumber":"10607","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"588","eventID":"100","event":"追憶的閃耀光輝","name":"越過追憶向前行_愛","gender":"女","element":"火雷","elementSecond":"雷","special":"變換問題類型","specialSecond":"特殊變換問題類型【減輕傷害＆技能充填】","wikiNumber":"10608","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"589","eventID":"100","event":"追憶的閃耀光輝","name":"持續尋找憶中之物_愛","gender":"女","element":"水雷","elementSecond":"雷","special":"斬擊大魔術","specialSecond":"多重魔術(單體)","wikiNumber":"10609","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"590","eventID":"101","event":"被封印的舞台劇目","name":"龍族的弦樂進行曲_卓麗黛爾","gender":"女","element":"火水","elementSecond":"水","special":"特殊變換問題類型【連鎖數增加】","specialSecond":"延遲大魔術(單體)","wikiNumber":"801372","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"591","eventID":"101","event":"被封印的舞台劇目","name":"引聚生機的天籟之音_緹茵","gender":"女","element":"雷火","elementSecond":"火","special":"技能充填(全體)","specialSecond":"技能充填(全體)","wikiNumber":"801373","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"592","eventID":"101","event":"被封印的舞台劇目","name":"珠玉鳴響的諧和音_克蕾雅","gender":"女","element":"水雷","elementSecond":"雷","special":"強化傷害(自身)","specialSecond":"強化傷害(自身)","wikiNumber":"801374","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"593","eventID":"101","event":"被封印的舞台劇目","name":"明日的首席主唱_菲莉絲汀","gender":"女","element":"雷光","elementSecond":"光","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"801375","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"594","eventID":"101","event":"被封印的舞台劇目","name":"在舞台上萬眾矚目_隆美爾","gender":"男","element":"火闇","elementSecond":"闇","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"801376","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"595","eventID":"101","event":"被封印的舞台劇目","name":"憑欄芳華冠全場_瑟芬妮","gender":"女","element":"雷闇","elementSecond":"闇","special":"防禦連鎖","specialSecond":"異常狀態失效","wikiNumber":"801377","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"596","eventID":"101","event":"被封印的舞台劇目","name":"冰上的芭蕾舞者_艾絲貝拉","gender":"女","element":"水光","elementSecond":"光","special":"強化傷害(指定屬性)","specialSecond":"解除效果大魔術(單體)【物理反擊】","wikiNumber":"801378","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"597","eventID":"101","event":"被封印的舞台劇目","name":"火光中跳舞的靈魂_羅姆菲","gender":"女","element":"火水","elementSecond":"水","special":"提升能力數值(全體)","specialSecond":"反動大魔術(全體)","wikiNumber":"801379","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"598","eventID":"102","event":"AbyssCode06 劫末之獸","name":"AbCd-Ιι：《萌生劫初的英雄》","gender":"女","element":"雷光","elementSecond":"光","special":"物理反擊(多段式反擊)","specialSecond":"物理反擊(多段式反擊)","wikiNumber":"11199","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"599","eventID":"102","event":"AbyssCode06 劫末之獸","name":"AbCd-Ιι：《蘊藏四劫的英雄》","gender":"女","element":"雷光","elementSecond":"光","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"8164","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"603","eventID":"104","event":"Demons Blader","name":"真理與和平的永劫_奧拉‧阿瑪達","gender":"女","element":"水水","elementSecond":"水","special":"異常狀態失效","specialSecond":"強化精靈【持續回復＆減輕傷害＆異常狀態失效】","wikiNumber":"11191","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"604","eventID":"104","event":"Demons Blader","name":"溫柔眾神的冷酷_奧拉‧阿瑪達","gender":"女","element":"水水","elementSecond":"水","special":"防禦","specialSecond":"防禦","wikiNumber":"11187","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"605","eventID":"105","event":"Heretic Blader","name":"淨化陰陽的輪光_久遠‧璃夢生","gender":"女","element":"雷雷","elementSecond":"雷","special":"阻隔傷害","specialSecond":"阻隔傷害","wikiNumber":"11193","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"606","eventID":"105","event":"Heretic Blader","name":"昇天輪迴的真狐_久遠‧璃夢生","gender":"女","element":"雷雷","elementSecond":"雷","special":"防禦","specialSecond":"防禦","wikiNumber":"11189","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"607","eventID":"106","event":"Tempest Blader","name":"追查凶惡的蒼穹_亞敏‧史密特","gender":"男","element":"水水","elementSecond":"水","special":"解除效果(單體)【物理反擊】","specialSecond":"解除效果大魔術(單體)【物理反擊＆多層防護】","wikiNumber":"11190","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"608","eventID":"106","event":"Tempest Blader","name":"蒼天的奔流_亞敏‧史密特","gender":"男","element":"水水","elementSecond":"水","special":"強化傷害(自身)","specialSecond":"強化傷害(自身)","wikiNumber":"11186","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"609","eventID":"107","event":"Divine Blader","name":"在黑闇中微笑的邪神_露露貝爾","gender":"女","element":"火火","elementSecond":"火","special":"延遲(單體)","specialSecond":"延遲(單體)","wikiNumber":"11192","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"610","eventID":"107","event":"Divine Blader","name":"邪神惹人憐愛的天真_露露貝爾","gender":"女","element":"火火","elementSecond":"火","special":"防禦","specialSecond":"防禦","wikiNumber":"11188","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"611","eventID":"108","event":"庫洛姆‧麥格納 零","name":"魔導學園創立者_登凱爾‧亞當斯","gender":"男","element":"水水","elementSecond":"水","special":"自我犧牲魔術(全體)","specialSecond":"自我犧牲魔術(全體)","wikiNumber":"10598","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"612","eventID":"108","event":"庫洛姆‧麥格納 零","name":"優雅美麗的管理者_雅姆貝爾‧凱","gender":"女","element":"火雷","elementSecond":"雷","special":"提升能力數值(全體)","specialSecond":"防禦","wikiNumber":"10599","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"613","eventID":"108","event":"庫洛姆‧麥格納 零","name":"蒼藍的鬥霸者_響‧麥斯格雷夫","gender":"男","element":"水水","elementSecond":"水","special":"提升能力數值(全體)","specialSecond":"特殊變換問題類型【連鎖數增加＆技能充填】","wikiNumber":"10600","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"614","eventID":"108","event":"庫洛姆‧麥格納 零","name":"清冽的焰刀_小百合‧懷亞特","gender":"女","element":"火火","elementSecond":"火","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"10601","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"615","eventID":"108","event":"庫洛姆‧麥格納 零","name":"聖境的敬禱者_雅梅莉‧貝涅特","gender":"女","element":"雷雷","elementSecond":"雷","special":"強化傷害(指定屬性)","specialSecond":"特殊變換問題類型【減輕傷害】","wikiNumber":"10602","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"616","eventID":"108","event":"庫洛姆‧麥格納 零","name":"不可知的密探_艾瑪‧尤因古","gender":"女","element":"雷雷","elementSecond":"雷","special":"反動大魔術‧蝕(單體)","specialSecond":"反動大魔術‧蝕(單體)","wikiNumber":"10603","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"617","eventID":"109","event":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","name":"誓約的凜炎_凜華‧懷亞特","gender":"女","element":"火水","elementSecond":"水","special":"特殊變換問題類型【連鎖數增加＆強化傷害】","specialSecond":"保留問題類型【連鎖數增加】","wikiNumber":"11616","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"618","eventID":"109","event":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","name":"被強烈的情感染上色彩_愛席亞＆妮可拉","gender":"女","element":"水雷","elementSecond":"雷","special":"技能充填＆延遲(全體)","specialSecond":"技能充填＆延遲(全體)","wikiNumber":"11617","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"619","eventID":"109","event":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","name":"機獸的咆哮_雪莉＆沃爾夫","gender":"男女","element":"雷火","elementSecond":"火","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"11618","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"620","eventID":"109","event":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","name":"雙刃的潛行者_艾瑪‧尤因古","gender":"女","element":"水水","elementSecond":"水","special":"毒","specialSecond":"毒","wikiNumber":"11619","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"621","eventID":"109","event":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","name":"超絕夏天比基尼_MIU☆MIU","gender":"女","element":"雷雷","elementSecond":"雷","special":"異常狀態失效","specialSecond":"強化精靈【持續回復＆減輕傷害＆異常狀態失效】","wikiNumber":"11620","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"622","eventID":"109","event":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","name":"總是共鬥戰線_艾密莉亞＆楓","gender":"女","element":"火雷","elementSecond":"雷","special":"特殊變換問題類型【減輕傷害】","specialSecond":"特殊變換問題類型【減輕傷害】","wikiNumber":"11621","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"623","eventID":"109","event":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","name":"只屬於我的笑容_一樹‧麥斯格雷夫","gender":"男","element":"水水","elementSecond":"水","special":"回復異常狀態","specialSecond":"回復異常狀態","wikiNumber":"11627","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"624","eventID":"109","event":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","name":"凝視著我的眼眸_愛席亞‧貝涅特","gender":"女","element":"水水","elementSecond":"水","special":"延遲(單體)","specialSecond":"延遲(單體)","wikiNumber":"11628","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"625","eventID":"110","event":"庫洛姆‧麥格納Ⅳ單戀☆狂想曲","name":"戀愛☆百萬噸_艾密莉亞‧轟","gender":"女","element":"火火","elementSecond":"火","special":"防禦","specialSecond":"防禦","wikiNumber":"6994","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"626","eventID":"110","event":"庫洛姆‧麥格納Ⅳ單戀☆狂想曲","name":"虹色的戀愛_愛席亞‧貝涅特","gender":"女","element":"水火","elementSecond":"火","special":"延長AS時間限制","specialSecond":"刪去回答","wikiNumber":"6995","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"627","eventID":"110","event":"庫洛姆‧麥格納Ⅳ單戀☆狂想曲","name":"人稱溫柔野獸_沃爾夫‧羅伊","gender":"男","element":"火雷","elementSecond":"雷","special":"自我犧牲魔術(全體)","specialSecond":"自我犧牲魔術(全體)","wikiNumber":"6996","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"628","eventID":"110","event":"庫洛姆‧麥格納Ⅳ單戀☆狂想曲","name":"愛與甘美的砲火_雪莉‧柯爾特","gender":"女","element":"雷雷","elementSecond":"雷","special":"延長AS時間限制","specialSecond":"延長AS時間限制","wikiNumber":"6997","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"629","eventID":"110","event":"庫洛姆‧麥格納Ⅳ單戀☆狂想曲","name":"迷走的夢想戀心_妮可拉‧摩根","gender":"女","element":"雷水","elementSecond":"水","special":"技能充填(全體)","specialSecond":"技能充填(全體)","wikiNumber":"6998","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"630","eventID":"110","event":"庫洛姆‧麥格納Ⅳ單戀☆狂想曲","name":"焦慮的少女情懷_凜華‧懷亞特","gender":"女","element":"火水","elementSecond":"水","special":"強化傷害(自身)","specialSecond":"強化傷害(自身)","wikiNumber":"6999","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"631","eventID":"111","event":"庫洛姆‧麥格納Ⅲ臨海學校","name":"夏日裡的涼風_凜華‧懷亞特","gender":"女","element":"火火","elementSecond":"火","special":"變換問題類型","specialSecond":"特殊變換問題類型【連鎖數增加】","wikiNumber":"6989","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"632","eventID":"111","event":"庫洛姆‧麥格納Ⅲ臨海學校","name":"盛夏的灼熱視線_妮可拉‧摩根","gender":"女","element":"雷雷","elementSecond":"雷","special":"延遲(單體)","specialSecond":"延遲大魔術(單體)","wikiNumber":"6991","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"633","eventID":"111","event":"庫洛姆‧麥格納Ⅲ臨海學校","name":"今天也是大豐收！_雪莉‧柯爾特","gender":"女","element":"雷雷","elementSecond":"雷","special":"變換問題類型","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"6992","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"634","eventID":"111","event":"庫洛姆‧麥格納Ⅲ臨海學校","name":"與大海之獸嬉戲_沃爾夫‧羅伊","gender":"男","element":"火水","elementSecond":"水","special":"變換問題類型","specialSecond":"特殊變換問題類型【減輕傷害】","wikiNumber":"6993","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"644","eventID":"115","event":"AbyssCode05 冥世的天蓋","name":"AbCd-Λλ：《甜蜜腐朽殆盡黑闇_妮蕾努》","gender":"女","element":"火闇","elementSecond":"闇","special":"防禦","specialSecond":"防禦","wikiNumber":"7132","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"645","eventID":"115","event":"AbyssCode05 冥世的天蓋","name":"AbCd-Λ：《冥默的白鴉_妮蕾努》","gender":"女","element":"火闇","elementSecond":"闇","special":"延遲(單體)","specialSecond":"延遲(單體)","wikiNumber":"11198","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"646","eventID":"116","event":"AbyssCode04 燃燒殆盡的陽光","name":"AbCd-Ψψ：《絢爛的神舞_妮蒂雅》","gender":"女","element":"水光","elementSecond":"光","special":"技能充填＆延遲(單體)","specialSecond":"技能充填＆延遲(單體)","wikiNumber":"7131","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"647","eventID":"116","event":"AbyssCode04 燃燒殆盡的陽光","name":"AbCd-Ψ：《照亮黑闇的舞蹈_妮蒂雅》","gender":"女","element":"水光","elementSecond":"光","special":"解除效果(全體)【防禦＆阻隔傷害】","specialSecond":"解除效果大魔術(全體)【防禦＆阻隔傷害】","wikiNumber":"11197","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"648","eventID":"117","event":"AbyssCode03 生而墮於虛無","name":"AbCd-Ωω：《消滅自我的存在_該隱》","gender":"男","element":"雷闇","elementSecond":"闇","special":"解除效果(全體)【物理反擊】","specialSecond":"解除效果大魔術(全體)【物理反擊＆技能反擊】","wikiNumber":"7130","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"649","eventID":"117","event":"AbyssCode03 生而墮於虛無","name":"AbCd-Ω：《天上蠢動的憤怒_該隱》","gender":"男","element":"雷闇","elementSecond":"闇","special":"解除效果(全體)【防禦＆阻隔傷害】","specialSecond":"解除效果大魔術(全體)【防禦＆阻隔傷害】","wikiNumber":"11196","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"650","eventID":"118","event":"AbyssCode02 盲目的調和","name":"AbCd-Μμ：《拒絕輝煌_特露米德》","gender":"女","element":"火闇","elementSecond":"闇","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"7129","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"651","eventID":"118","event":"AbyssCode02 盲目的調和","name":"AbCd-M：《孤獨的囚人_特露米德》","gender":"女","element":"火闇","elementSecond":"闇","special":"技能充填(全體)","specialSecond":"技能充填(全體)","wikiNumber":"11195","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"652","eventID":"119","event":"AbyssCode01 黑殼之王","name":"AbCd-Ζζ：《從不沸騰的血潮_卡勒姆》","gender":"男","element":"水光","elementSecond":"光","special":"變換問題類型","specialSecond":"特殊變換問題類型【減輕傷害】","wikiNumber":"7128","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"653","eventID":"119","event":"AbyssCode01 黑殼之王","name":"AbCd-Ζ：《寂靜的天際_卡勒姆》","gender":"男","element":"水光","elementSecond":"光","special":"延遲(單體)","specialSecond":"延遲(單體)","wikiNumber":"11194","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"666","eventID":"122","event":"神明大人 ～土精靈與黑貓主人～","name":"吃飯神_卡奴耶‧德‧亞克","gender":"女","element":"火火","elementSecond":"火","special":"蓄積解放大魔術‧聖(全體)","specialSecond":"蓄積解放大魔術‧聖(全體)","wikiNumber":"11408","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"667","eventID":"122","event":"神明大人 ～土精靈與黑貓主人～","name":"危險的魔法少女_梨莎‧洛特蘭達","gender":"女","element":"水水","elementSecond":"水","special":"保留問題類型【連鎖數增加】","specialSecond":"保留問題類型【連鎖數增加】","wikiNumber":"11411","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"668","eventID":"122","event":"神明大人 ～土精靈與黑貓主人～","name":"含糊女孩_葛蕾絲","gender":"女","element":"雷雷","elementSecond":"雷","special":"特殊變換問題類型【連鎖數增加＆技能充填】","specialSecond":"特殊變換問題類型【連鎖數增加＆技能充填】","wikiNumber":"11414","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"669","eventID":"122","event":"神明大人 ～土精靈與黑貓主人～","name":"魔法與魔劍_琉迪格‧希古拉","gender":"男","element":"水闇","elementSecond":"闇","special":"蓄積解放大魔術‧印(全體)","specialSecond":"蓄積解放大魔術‧印(全體)","wikiNumber":"11417","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"670","eventID":"122","event":"神明大人 ～土精靈與黑貓主人～","name":"生命少女_希維爾‧洛伊絲","gender":"女","element":"火火","elementSecond":"火","special":"強化精靈【持續回復＆減輕傷害＆強化傷害】","specialSecond":"強化精靈【持續回復＆減輕傷害＆強化傷害】","wikiNumber":"11420","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"671","eventID":"122","event":"神明大人 ～土精靈與黑貓主人～","name":"超土級_可露可可‧可露斯斯","gender":"女","element":"雷火","elementSecond":"火","special":"鐵壁‧極","specialSecond":"鐵壁‧極","wikiNumber":"11423","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"678","eventID":"124","event":"年之運行","name":"煙花燦爛的一年之始_初日","gender":"女","element":"火闇","elementSecond":"闇","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"801857","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"679","eventID":"124","event":"年之運行","name":"燭光搖曳平安夜_伊弗","gender":"男","element":"雷雷","elementSecond":"雷","special":"蓄積解放大魔術‧邪(全體)","specialSecond":"蓄積解放大魔術‧邪(全體)","wikiNumber":"801859","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"680","eventID":"124","event":"年之運行","name":"石斛蘭與父親節_艾伯特","gender":"男","element":"水光","elementSecond":"光","special":"解除效果(單體)【防禦＆阻隔傷害】","specialSecond":"解除效果大魔術(單體)【防禦＆阻隔傷害＆多層防護】","wikiNumber":"801861","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"681","eventID":"124","event":"年之運行","name":"降雪的白色聖誕_柯里絲緹","gender":"女","element":"火雷","elementSecond":"雷","special":"變換問題類型","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"801863","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"682","eventID":"124","event":"年之運行","name":"鬼怪遊行萬聖夜_巴姆布蕾克","gender":"女","element":"雷雷","elementSecond":"雷","special":"蓄積解放大魔術‧破(單體)","specialSecond":"蓄積解放大魔術‧破(單體)","wikiNumber":"801865","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"683","eventID":"124","event":"年之運行","name":"愛意滿滿情人節_梅莉莎","gender":"女","element":"水闇","elementSecond":"闇","special":"起死回生","specialSecond":"防禦","wikiNumber":"801867","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"705","eventID":"129","event":"恭賀新禧2020","name":"新春開花！ 艾尼格瑪伽利","gender":"女","element":"火水","elementSecond":"水","special":"捕食大魔術(全體)","specialSecond":"捕食大魔術(全體)","wikiNumber":"10977","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"706","eventID":"129","event":"恭賀新禧2020","name":"夢中的未來 蘿莎莉亞＆諾庫斯","gender":"男女","element":"火雷","elementSecond":"雷","special":"賦予雙重AS","specialSecond":"賦予雙重AS","wikiNumber":"10971","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"707","eventID":"129","event":"恭賀新禧2020","name":"可喜可賀的正月 文繼‧葦原","gender":"男","element":"水雷","elementSecond":"雷","special":"變換問題類型","specialSecond":"統一變換問題類型【強化傷害】","wikiNumber":"10975","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"708","eventID":"129","event":"恭賀新禧2020","name":"佐巴新年 卡多琳＆小滅","gender":"女","element":"水光","elementSecond":"光","special":"提升能力數值(自身)","specialSecond":"問題類型爆破大魔術","wikiNumber":"10973","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"709","eventID":"129","event":"恭賀新禧2020","name":"屍國的黎明 維雷夫基納‧安曼","gender":"男","element":"雷雷","elementSecond":"雷","special":"回答時間停止","specialSecond":"回答時間停止","wikiNumber":"10981","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"710","eventID":"129","event":"恭賀新禧2020","name":"與家人乾杯 薇塔‧芭比奈","gender":"女","element":"雷雷","elementSecond":"雷","special":"保留問題類型","specialSecond":"保留問題類型","wikiNumber":"10979","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"711","eventID":"130","event":"5th Anniversary","name":"與你並肩作戰 極＆八千代","gender":"男女","element":"火火","elementSecond":"火","special":"無屬性變化","specialSecond":"無屬性變化","wikiNumber":"11206","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"712","eventID":"130","event":"5th Anniversary","name":"讓棉花糖融化的幻夜 尊音・歌詠","gender":"女","element":"雷雷","elementSecond":"雷","special":"強化精靈【持續回復＆減輕傷害＆強化傷害】","specialSecond":"強化精靈【持續回復＆減輕傷害＆強化傷害】","wikiNumber":"11208","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"713","eventID":"130","event":"5th Anniversary","name":"培育大魔導士 伊妮亞＆愛莉葉塔","gender":"女","element":"水火","elementSecond":"火","special":"蓄積解放大魔術‧破(全體)","specialSecond":"蓄積解放大魔術‧破(全體)","wikiNumber":"11207","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"714","eventID":"130","event":"5th Anniversary","name":"魔王盛宴 艾盧多貝里克＆露席菈","gender":"男女","element":"火雷","elementSecond":"雷","special":"技能充填(相鄰)","specialSecond":"技能充填(相鄰)","wikiNumber":"11210","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"715","eventID":"130","event":"5th Anniversary","name":"不空想之人 桑榭特‧莉菲爾","gender":"女","element":"雷光","elementSecond":"光","special":"保留問題類型【連鎖數增加】","specialSecond":"保留問題類型【連鎖數增加】","wikiNumber":"11205","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"716","eventID":"130","event":"5th Anniversary","name":"清純LIVE 卡多琳＆莉露姆","gender":"女","element":"水水","elementSecond":"水","special":"時限大魔術","specialSecond":"時限大魔術","wikiNumber":"11209","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"717","eventID":"131","event":"FairyChord 妖精的和弦","name":"劍星華_拉米斯費蕾絲","gender":"女","element":"雷火","elementSecond":"火","special":"L次數大魔術","specialSecond":"L次數大魔術","wikiNumber":"11224","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"718","eventID":"131","event":"FairyChord 妖精的和弦","name":"弦星歌_鶴音理玲","gender":"女","element":"水光","elementSecond":"光","special":"弱化大魔術(單體)","specialSecond":"弱化大魔術(單體)","wikiNumber":"11227","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"719","eventID":"131","event":"FairyChord 妖精的和弦","name":"麗血之眸_紅鬼颯夜","gender":"男","element":"火闇","elementSecond":"闇","special":"保留問題類型【連鎖數增加】","specialSecond":"保留問題類型【連鎖數增加】","wikiNumber":"11230","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"720","eventID":"131","event":"FairyChord 妖精的和弦","name":"交疊的心跳聲_織機美幌","gender":"女","element":"雷雷","elementSecond":"雷","special":"時限大魔術","specialSecond":"時限大魔術","wikiNumber":"11233","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"721","eventID":"131","event":"FairyChord 妖精的和弦","name":"天之咆哮的統治者_早苗立真","gender":"男","element":"水水","elementSecond":"水","special":"無屬性變化","specialSecond":"無屬性變化","wikiNumber":"11236","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"722","eventID":"131","event":"FairyChord 妖精的和弦","name":"胡纏亂攪惡魔_蒂姬","gender":"女","element":"火水","elementSecond":"水","special":"蓄積解放大魔術‧破(全體)","specialSecond":"蓄積解放大魔術‧破(全體)","wikiNumber":"11239","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"723","eventID":"132","event":"感謝祭2020","name":"握星與流星 莉亞菈＆克蕾緹雅","gender":"女","element":"水水","elementSecond":"水","special":"蓄積解放大魔術‧聖(全體)","specialSecond":"蓄積解放大魔術‧聖(全體)","wikiNumber":"11376","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"724","eventID":"132","event":"感謝祭2020","name":"黃金盜賊 凱涅斯＆迦斯帕","gender":"男","element":"雷雷","elementSecond":"雷","special":"提昇(自身)","specialSecond":"提昇(自身)","wikiNumber":"11378","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"725","eventID":"132","event":"感謝祭2020","name":"雙火武盡 瑠璃揚羽＆莉菲爾","gender":"女","element":"雷雷","elementSecond":"雷","special":"問題類型爆破大魔術","specialSecond":"問題類型爆破大魔術","wikiNumber":"11380","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"726","eventID":"132","event":"感謝祭2020","name":"司令官的副官 洛冽緹‧卡那拉","gender":"女","element":"火火","elementSecond":"火","special":"強化精靈【持續回復＆減輕傷害＆提升能力數值】","specialSecond":"強化精靈【持續回復＆減輕傷害＆提升能力數值】","wikiNumber":"11382","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"727","eventID":"132","event":"感謝祭2020","name":"八百八町燈火通明 燈‧夜帷","gender":"女","element":"火火","elementSecond":"火","special":"蓄積解放大魔術‧印(全體)","specialSecond":"蓄積解放大魔術‧印(全體)","wikiNumber":"11384","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"728","eventID":"132","event":"感謝祭2020","name":"玻璃鞋公主 麗可拉‧拉雷特","gender":"女","element":"水水","elementSecond":"水","special":"特殊變換問題類型【連鎖數增加＆技能充填】","specialSecond":"特殊變換問題類型【連鎖數增加＆技能充填】","wikiNumber":"11386","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"729","eventID":"133","event":"Christmas2019","name":"聖夜夢中的少女 伊絲卡‧尼爾瓦","gender":"女","element":"火火","elementSecond":"火","special":"AS特殊變化","specialSecond":"AS特殊變化","wikiNumber":"10913","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"730","eventID":"133","event":"Christmas2019","name":"聖夜之王 米迦菈‧撒拉弗","gender":"女","element":"火火","elementSecond":"火","special":"保留問題類型","specialSecond":"保留問題類型","wikiNumber":"10909","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"731","eventID":"133","event":"Christmas2019","name":"超魔導聖夜 愛莉葉塔＆艾莉絲","gender":"女","element":"水雷","elementSecond":"雷","special":"賦予雙重AS","specialSecond":"賦予雙重AS","wikiNumber":"10907","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"732","eventID":"133","event":"Christmas2019","name":"聖誕老人不辛苦 史特莉＆哈克亞","gender":"女","element":"水水","elementSecond":"水","special":"回答時間停止","specialSecond":"回答時間停止","wikiNumber":"10917","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"733","eventID":"133","event":"Christmas2019","name":"聖夜魔王 伊薩克‧撒拉弗","gender":"男","element":"雷闇","elementSecond":"闇","special":"決鬥","specialSecond":"決鬥","wikiNumber":"10911","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"734","eventID":"133","event":"Christmas2019","name":"回禮的手製料理 梅爾泰‧尼瑟","gender":"女","element":"雷雷","elementSecond":"雷","special":"提昇(單體)","specialSecond":"提昇(單體)","wikiNumber":"10915","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"735","eventID":"134","event":"暑假即將到來","name":"紅淚的破壞千金烏露‧梅菲格爾","gender":"女","element":"火火","elementSecond":"火","special":"回復異常狀態","specialSecond":"強化精靈【持續回復＆強化傷害＆異常狀態失效】","wikiNumber":"10698","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"736","eventID":"135","event":"太陽與月亮之國 喀姆吉納","name":"暗殺舞蹈 吉札兒‧卡爾維基","gender":"女","element":"火火","elementSecond":"火","special":"回答時間停止","specialSecond":"回答時間停止","wikiNumber":"10831","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"737","eventID":"135","event":"太陽與月亮之國 喀姆吉納","name":"偉大的家譜 愛里愛里‧薩巴爾","gender":"女","element":"水水","elementSecond":"水","special":"AS特殊變化","specialSecond":"AS特殊變化","wikiNumber":"10828","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"738","eventID":"135","event":"太陽與月亮之國 喀姆吉納","name":"四聖賢 雷瑪‧薩巴爾","gender":"男","element":"雷雷","elementSecond":"雷","special":"特殊變換問題類型【技能充填】","specialSecond":"特殊變換問題類型【技能充填】","wikiNumber":"10825","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"739","eventID":"136","event":"感謝祭2019","name":"My FavoriteTriangles 艾妮","gender":"女","element":"火光","elementSecond":"光","special":"蓄積解放大魔術‧聖(全體)","specialSecond":"蓄積解放大魔術‧聖(全體)","wikiNumber":"10152","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"740","eventID":"136","event":"感謝祭2019","name":"Lone Roar雷迪厄斯‧利維斯","gender":"男","element":"火闇","elementSecond":"闇","special":"一閃斬擊大魔術","specialSecond":"一閃斬擊大魔術","wikiNumber":"10154","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"741","eventID":"136","event":"感謝祭2019","name":"☆點心時間女☆琪夏菈‧歐羅爾","gender":"女","element":"水火","elementSecond":"火","special":"變換問題類型","specialSecond":"統一變換問題類型【強化傷害】","wikiNumber":"10160","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"742","eventID":"136","event":"感謝祭2019","name":"熱水滴不停的戰神 薩克特‧大神","gender":"男","element":"水水","elementSecond":"水","special":"純屬性強化","specialSecond":"純屬性強化","wikiNumber":"10158","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"743","eventID":"136","event":"感謝祭2019","name":"這就是富含文化的生活夏娃‧貝茨","gender":"女","element":"雷闇","elementSecond":"闇","special":"蓄積解放大魔術‧邪(全體)","specialSecond":"蓄積解放大魔術‧邪(全體)","wikiNumber":"10156","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"744","eventID":"136","event":"感謝祭2019","name":"應該閱讀的神獸托托‧獏羅","gender":"男女","element":"雷火","elementSecond":"火","special":"多重魔術(單體)","specialSecond":"激化大魔術","wikiNumber":"10162","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"745","eventID":"137","event":"4th anniversary","name":"晚宴的計策 迪特利希＆蘿葳","gender":"男女","element":"火水","elementSecond":"水","special":"AS倍率強化","specialSecond":"AS倍率強化","wikiNumber":"9952","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"746","eventID":"137","event":"4th anniversary","name":"心連心 和國三神駕到！","gender":"男女","element":"火雷","elementSecond":"雷","special":"賦予雙重技能(單體)","specialSecond":"賦予雙重技能(單體)","wikiNumber":"9950","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"747","eventID":"137","event":"4th anniversary","name":"羽翼之舞 艾盧多貝里克＆露席菈","gender":"男女","element":"水光","elementSecond":"光","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"9954","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"748","eventID":"137","event":"4th anniversary","name":"抵抗原罪的凜煌眼","gender":"女","element":"水闇","elementSecond":"闇","special":"詠唱多重大魔術","specialSecond":"詠唱多重大魔術","wikiNumber":"9956","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"749","eventID":"137","event":"4th anniversary","name":"祕密隱於玫瑰下 一樹＆凜華篇","gender":"男女","element":"雷光","elementSecond":"光","special":"融合大魔術(全體)","specialSecond":"融合大魔術(全體)","wikiNumber":"9948","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"750","eventID":"137","event":"4th anniversary","name":"緊緊連繫的姊妹羈絆 法姆＆費露琪","gender":"女","element":"雷火","elementSecond":"火","special":"特殊變換問題類型【連鎖數增加＆技能充填】","specialSecond":"特殊變換問題類型【連鎖數增加＆技能充填】","wikiNumber":"9958","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"751","eventID":"138","event":"恭賀新禧2019","name":"全新的救世與正義 萊葛爾＆席菈","gender":"男女","element":"火雷","elementSecond":"雷","special":"產生連結問題類型","specialSecond":"產生連結問題類型","wikiNumber":"11011","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"752","eventID":"138","event":"恭賀新禧2019","name":"拂曉空賊記 齊格‧庫勒耶","gender":"男","element":"火闇","elementSecond":"闇","special":"提昇(相鄰)","specialSecond":"提昇(相鄰)","wikiNumber":"11008","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"753","eventID":"138","event":"恭賀新禧2019","name":"初春太陽燦爛 卡奴耶‧德‧亞克","gender":"女","element":"水光","elementSecond":"光","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"11010","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"754","eventID":"138","event":"恭賀新禧2019","name":"搖響新春之鈴 史特莉‧席絲特","gender":"女","element":"水雷","elementSecond":"雷","special":"融合強化","specialSecond":"融合強化","wikiNumber":"11007","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"755","eventID":"138","event":"恭賀新禧2019","name":"黎明的雙星 愛＆愛","gender":"女","element":"雷雷","elementSecond":"雷","special":"技能充填(相鄰)","specialSecond":"技能充填(相鄰)","wikiNumber":"11009","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"756","eventID":"138","event":"恭賀新禧2019","name":"恭賀新禧‧雙劍羽 樁＆葉月","gender":"女","element":"雷水","elementSecond":"水","special":"融合大魔術(全體)","specialSecond":"融合大魔術(全體)","wikiNumber":"11012","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"757","eventID":"139","event":"秋末迎冬感謝祭","name":"雙龍天翔 阿德萊德＆蜜涅娃","gender":"女","element":"火光","elementSecond":"光","special":"融合大魔術(全體)","specialSecond":"融合大魔術(全體)","wikiNumber":"11718","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"758","eventID":"139","event":"秋末迎冬感謝祭","name":"誘惑的幻想顯界 謝爾菈＆普拉米亞","gender":"女","element":"火光","elementSecond":"光","special":"複屬性回復","specialSecond":"複屬性回復","wikiNumber":"11721","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"759","eventID":"139","event":"秋末迎冬感謝祭","name":"Like Sisters 艾妮＆庫蘭","gender":"女","element":"水水","elementSecond":"水","special":"炸裂大魔術","specialSecond":"炸裂大魔術","wikiNumber":"11717","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"760","eventID":"139","event":"秋末迎冬感謝祭","name":"情比天高 八重＆冰雨","gender":"女","element":"水光","elementSecond":"光","special":"提昇(全體)","specialSecond":"弱化大魔術(全體)","wikiNumber":"11722","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"761","eventID":"139","event":"秋末迎冬感謝祭","name":"突擊勝利！ 亞露露＆維多利亞","gender":"女","element":"雷火","elementSecond":"火","special":"產生連結問題類型","specialSecond":"產生連結問題類型","wikiNumber":"11719","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"762","eventID":"139","event":"秋末迎冬感謝祭","name":"年少的聖劍王與霸眼王 《邂逅》","gender":"男","element":"雷雷","elementSecond":"雷","special":"一閃斬擊大魔術","specialSecond":"一閃斬擊大魔術","wikiNumber":"11720","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"763","eventID":"140","event":"仲夏感謝季2018","name":"人類總護士 卡多琳‧G‧U","gender":"女","element":"火水","elementSecond":"水","special":"大魔術(全體)","specialSecond":"強化複屬性傷害","wikiNumber":"11174","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"764","eventID":"140","event":"仲夏感謝季2018","name":"星之聖女候補 克蕾緹雅‧布萊葉","gender":"女","element":"水水","elementSecond":"水","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"11175","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"765","eventID":"140","event":"仲夏感謝季2018","name":"歌中交織著夢幻 尊音‧歌詠","gender":"女","element":"雷雷","elementSecond":"雷","special":"強化精靈【持續回復＆異常狀態失效】","specialSecond":"強化精靈【持續回復＆強化傷害＆異常狀態失效】","wikiNumber":"11177","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"766","eventID":"140","event":"仲夏感謝季2018","name":"不死身的戰神 迪特利希‧貝爾克","gender":"男","element":"水水","elementSecond":"水","special":"大魔術(單體)","specialSecond":"大魔術(單體)","wikiNumber":"11172","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"767","eventID":"140","event":"仲夏感謝季2018","name":"黃昏繼承者 桑榭特‧莉菲爾","gender":"女","element":"雷雷","elementSecond":"雷","special":"技能充填(單體)","specialSecond":"技能充填(單體)","wikiNumber":"11178","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"768","eventID":"140","event":"仲夏感謝季2018","name":"玩樂即是魔導 聖莉露姆‧洛洛特","gender":"女","element":"火火","elementSecond":"火","special":"連鎖解放大魔術","specialSecond":"連鎖解放大魔術","wikiNumber":"11176","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"769","eventID":"140","event":"仲夏感謝季2018","name":"黑之頂點 艾盧多貝里克‧哥德","gender":"男","element":"水火","elementSecond":"火","special":"多重魔術(單體)","specialSecond":"激化大魔術","wikiNumber":"11171","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"770","eventID":"140","event":"仲夏感謝季2018","name":"靦腆破顏一笑戰線 阿斯塔‧拉德","gender":"男女","element":"雷光","elementSecond":"光","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"11173","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"771","eventID":"141","event":"丁酉年末感謝季2018","name":"假日主從 茲洛瓦＆露露貝爾","gender":"女","element":"火闇","elementSecond":"闇","special":"強化精靈【持續回復＆提升能力數值】","specialSecond":"強化精靈【持續回復＆減輕傷害＆提升能力數值】","wikiNumber":"11405","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"772","eventID":"141","event":"丁酉年末感謝季2018","name":"傭兵仁義 菲利庫斯‧榭法","gender":"男","element":"水水","elementSecond":"水","special":"技能充填(全體)","specialSecond":"技能充填(全體)","wikiNumber":"11404","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"773","eventID":"141","event":"丁酉年末感謝季2018","name":"甜蜜BOMB 維多利亞‧涅爾德","gender":"女","element":"雷光","elementSecond":"光","special":"提升能力數值(自身)","specialSecond":"提昇(自身)","wikiNumber":"11400","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"774","eventID":"141","event":"丁酉年末感謝季2018","name":"豪華絢爛武刀 葉月‧夢語","gender":"女","element":"火水","elementSecond":"水","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"11401","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"775","eventID":"141","event":"丁酉年末感謝季2018","name":"耀眼奪目的黃金 愛莉葉塔‧多娃","gender":"女","element":"水水","elementSecond":"水","special":"純屬性大魔術(全體)","specialSecond":"純屬性大魔術(全體)","wikiNumber":"11403","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"776","eventID":"141","event":"丁酉年末感謝季2018","name":"唯一的幸福 愛麗絲＆艾莉卡","gender":"女","element":"雷火","elementSecond":"火","special":"強化複屬性傷害","specialSecond":"強化複屬性傷害","wikiNumber":"11402","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"777","eventID":"142","event":"神龍降臨Ⅱ","name":"秘妖的朧月騎士_婕莉‧婕莉","gender":"女","element":"水火","elementSecond":"火","special":"特殊變換問題類型【強化傷害】","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"7437","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"778","eventID":"142","event":"神龍降臨Ⅱ","name":"焦天龍武尊_王‧香韻","gender":"女","element":"火雷","elementSecond":"雷","special":"變換問題類型","specialSecond":"特殊變換問題類型【隨機】","wikiNumber":"7438","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"779","eventID":"142","event":"神龍降臨Ⅱ","name":"黑魔龍師_渥爾巴‧佐納","gender":"男","element":"火火","elementSecond":"火","special":"比例削減(全體)","specialSecond":"比例削減(全體)","wikiNumber":"7439","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"780","eventID":"142","event":"神龍降臨Ⅱ","name":"儘滅的鬼紅龍_薩諾卡拉佐","gender":"男","element":"火雷","elementSecond":"雷","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"7440","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"781","eventID":"142","event":"神龍降臨Ⅱ","name":"烈龍武俠_巴斯‧拉修爾","gender":"男","element":"火火","elementSecond":"火","special":"強化傷害(指定屬性)","specialSecond":"強化傷害(指定屬性)","wikiNumber":"7441","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"782","eventID":"142","event":"神龍降臨Ⅱ","name":"晴眼的龍賢者_克洛伊‧麥肯濟","gender":"男","element":"水水","elementSecond":"水","special":"毒","specialSecond":"毒","wikiNumber":"7442","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"783","eventID":"142","event":"神龍降臨Ⅱ","name":"激龍淒腕_思嘉‧詠","gender":"女","element":"水雷","elementSecond":"雷","special":"變換問題類型","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"7443","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"784","eventID":"142","event":"神龍降臨Ⅱ","name":"凜龍穿牙_帕美拉‧霍克","gender":"女","element":"雷雷","elementSecond":"雷","special":"回復異常狀態＆復活","specialSecond":"回復異常狀態＆復活","wikiNumber":"7444","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"785","eventID":"142","event":"神龍降臨Ⅱ","name":"虛實彼方的魔神龍_卜修托納薩","gender":"男","element":"雷雷","elementSecond":"雷","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"7445","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"786","eventID":"143","event":"古代森林的千年櫻花","name":"春風之麗櫻姬_菲奧娜‧卡莉娜","gender":"女","element":"水水","elementSecond":"水","special":"延遲(全體)","specialSecond":"延遲(全體)","wikiNumber":"7106","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"787","eventID":"143","event":"古代森林的千年櫻花","name":"花瓣般的美夢_杜鵑‧神木","gender":"女","element":"火光","elementSecond":"光","special":"回復異常狀態","specialSecond":"回復異常狀態","wikiNumber":"7107","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"788","eventID":"143","event":"古代森林的千年櫻花","name":"滿開櫻長者_茉莉‧相模屋","gender":"女","element":"雷雷","elementSecond":"雷","special":"持續回復","specialSecond":"持續回復","wikiNumber":"7108","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"789","eventID":"143","event":"古代森林的千年櫻花","name":"落櫻之千年舞_八彌子‧御神樂","gender":"女","element":"火火","elementSecond":"火","special":"變換問題類型","specialSecond":"特殊變換問題類型【減輕傷害】","wikiNumber":"7109","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"790","eventID":"144","event":"鬼月限定2017","name":"九條命的邪魅怪貓‧貓又 野里","gender":"女","element":"水闇","elementSecond":"闇","special":"阻隔傷害","specialSecond":"阻隔傷害","wikiNumber":"800811","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"791","eventID":"144","event":"鬼月限定2017","name":"用冤魂沐浴的男爵‧鬼王 北島","gender":"男","element":"雷雷","elementSecond":"雷","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"800812","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"792","eventID":"144","event":"鬼月限定2017","name":"藏在背後的血盆大口‧二口女 雪乃","gender":"女","element":"水水","elementSecond":"水","special":"技能充填(全體)","specialSecond":"技能充填(全體)","wikiNumber":"800813","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"793","eventID":"144","event":"鬼月限定2017","name":"不被期待的悲哀嬰靈‧座敷童子 千鶴","gender":"女","element":"火火","elementSecond":"火","special":"起死回生","specialSecond":"起死回生","wikiNumber":"800814","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"794","eventID":"144","event":"鬼月限定2017","name":"吸食男子首級的妖魔‧絡新婦 麗子","gender":"女","element":"雷雷","elementSecond":"雷","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"800815","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"795","eventID":"145","event":"情人紀念2017","name":"跨越鵲橋的戀人 牛郎&織女","gender":"男女","element":"水光","elementSecond":"光","special":"技能複製","specialSecond":"技能複製","wikiNumber":"800714","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"796","eventID":"145","event":"情人紀念2017","name":"珍惜彼此的幸福 斯林&莎曼妲","gender":"男女","element":"火闇","elementSecond":"闇","special":"大魔術(單體)","specialSecond":"大魔術(單體)","wikiNumber":"800715","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"797","eventID":"145","event":"情人紀念2017","name":"難以坦率的戀情 艾爾多&雅西兒","gender":"男女","element":"水雷","elementSecond":"雷","special":"回復異常狀態","specialSecond":"回復異常狀態＆復活","wikiNumber":"800716","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"798","eventID":"145","event":"情人紀念2017","name":"魔界的貴族愛侶 路克&瑪姬","gender":"男女","element":"雷火","elementSecond":"火","special":"延遲(單體)","specialSecond":"延遲(單體)","wikiNumber":"800717","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"799","eventID":"145","event":"情人紀念2017","name":"盜賊與公主的奇戀 凱&琪琪","gender":"男女","element":"雷水","elementSecond":"水","special":"犧牲魔術(全體)","specialSecond":"犧牲魔術(全體)","wikiNumber":"800718","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"800","eventID":"145","event":"情人紀念2017","name":"紫羅蘭的浪漫情意 迦瑪","gender":"男","element":"水水","elementSecond":"水","special":"物理反擊","specialSecond":"物理反擊","wikiNumber":"800719","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"801","eventID":"145","event":"情人紀念2017","name":"告白專用的巧克力師傅 寶菈","gender":"女","element":"雷雷","elementSecond":"雷","special":"特殊變換問題類型【連鎖數增加】","specialSecond":"特殊變換問題類型【連鎖數增加】","wikiNumber":"800816","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"802","eventID":"145","event":"情人紀念2017","name":"牽起紅線的祝福精靈 悠悠","gender":"女","element":"火火","elementSecond":"火","special":"解除效果(全體)【防禦＆阻隔傷害】","specialSecond":"解除效果大魔術(全體)【防禦＆阻隔傷害＆技能反擊】","wikiNumber":"800817","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"803","eventID":"145","event":"情人紀念2017","name":"融化愛意的蜂蜜鬆餅 蜜多莉","gender":"女","element":"雷雷","elementSecond":"雷","special":"技能複製","specialSecond":"技能複製","wikiNumber":"800818","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"804","eventID":"146","event":"跑錯地方的聖誕驚喜","name":"神樹下王子的祝福_瑟爾&提利爾","gender":"男","element":"水光","elementSecond":"光","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"801093","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"805","eventID":"146","event":"跑錯地方的聖誕驚喜","name":"在聖誕夜溫暖你的心_可蘿涅","gender":"女","element":"雷火","elementSecond":"火","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"801094","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"806","eventID":"146","event":"跑錯地方的聖誕驚喜","name":"沾染了節慶歡樂的魔法靈_漫梭","gender":"男","element":"火雷","elementSecond":"雷","special":"回復","specialSecond":"回復","wikiNumber":"801095","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"807","eventID":"146","event":"跑錯地方的聖誕驚喜","name":"冰雪世界裡的寂寞心靈_帕榭菈","gender":"女","element":"水火","elementSecond":"火","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"801096","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"808","eventID":"146","event":"跑錯地方的聖誕驚喜","name":"聖誕晚會上的派對女孩_悠可","gender":"女","element":"火水","elementSecond":"水","special":"技能充填＆延遲(單體)","specialSecond":"技能充填＆延遲(單體)","wikiNumber":"801097","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"809","eventID":"146","event":"跑錯地方的聖誕驚喜","name":"首都餐館的新任主廚_汀娜","gender":"女","element":"雷闇","elementSecond":"闇","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"801098","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"810","eventID":"146","event":"跑錯地方的聖誕驚喜","name":"乘著風雪飛躍的身影_冰絢","gender":"女","element":"火水","elementSecond":"水","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"801099","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"811","eventID":"146","event":"跑錯地方的聖誕驚喜","name":"雪地上最棒的紀念品_娜娜莉","gender":"女","element":"雷光","elementSecond":"光","special":"變換問題類型","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"801100","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"812","eventID":"146","event":"跑錯地方的聖誕驚喜","name":"傳遞祝福的潔白天使_莉莎","gender":"女","element":"水雷","elementSecond":"雷","special":"回復異常狀態","specialSecond":"回復異常狀態","wikiNumber":"801101","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"813","eventID":"147","event":"初夏的魔法使慶典","name":"詠唱傳說的流浪詩人_艾斌","gender":"男","element":"雷闇","elementSecond":"闇","special":"特殊變換問題類型【減輕傷害】","specialSecond":"強化精靈【持續回復＆減輕傷害＆強化傷害】","wikiNumber":"801370","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"814","eventID":"147","event":"初夏的魔法使慶典","name":"覺醒的爆焰智賢_夏孟","gender":"女","element":"火光","elementSecond":"光","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"801369","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"815","eventID":"147","event":"初夏的魔法使慶典","name":"雷電交織的龍戰士_珍妮","gender":"女","element":"雷光","elementSecond":"光","special":"防禦","specialSecond":"防禦","wikiNumber":"801368","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"816","eventID":"147","event":"初夏的魔法使慶典","name":"禁咒下的藝術品_魅璃","gender":"女","element":"雷水","elementSecond":"水","special":"強化傷害(自身)","specialSecond":"強化傷害(自身)","wikiNumber":"801367","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"817","eventID":"147","event":"初夏的魔法使慶典","name":"翻弄洪水的魔導士_瓦泰依娜","gender":"女","element":"水闇","elementSecond":"闇","special":"反動大魔術‧蝕(單體)","specialSecond":"反動大魔術‧蝕(單體)","wikiNumber":"801366","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"818","eventID":"147","event":"初夏的魔法使慶典","name":"劍光中的身影_妲妮雅","gender":"女","element":"水雷","elementSecond":"雷","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"801365","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"819","eventID":"148","event":"雞茲限定  感謝祭2017","name":"袖裡揮出萬千變化 洋棠","gender":"女","element":"雷火","elementSecond":"火","special":"回復異常狀態","specialSecond":"回復異常狀態","wikiNumber":"801324","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"820","eventID":"148","event":"雞茲限定  感謝祭2017","name":"掌控歡樂的戲法少女 娜爾希","gender":"女","element":"火光","elementSecond":"光","special":"特殊變換問題類型【連鎖數增加】","specialSecond":"特殊變換問題類型【連鎖數增加】","wikiNumber":"801325","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"821","eventID":"148","event":"雞茲限定  感謝祭2017","name":"陪我做個甜美的夢 奈婭","gender":"女","element":"火水","elementSecond":"水","special":"延遲大魔術(單體)","specialSecond":"延遲大魔術(單體)","wikiNumber":"801326","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"822","eventID":"148","event":"雞茲限定  感謝祭2017","name":"連性別也一併偽裝 里德洛可","gender":"男","element":"水闇","elementSecond":"闇","special":"防禦連鎖","specialSecond":"防禦連鎖","wikiNumber":"801327","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"823","eventID":"148","event":"雞茲限定  感謝祭2017","name":"馬戲團的馴虎女王 蕾莉雅","gender":"女","element":"水光","elementSecond":"光","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"801328","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"824","eventID":"149","event":"Holloween night2017","name":"擄獲人心的豔光 賽特絲","gender":"女","element":"雷火","elementSecond":"火","special":"特殊變換問題類型【連鎖數增加】","specialSecond":"多重魔術(單體)","wikiNumber":"801724","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"825","eventID":"149","event":"Holloween night2017","name":"天分優異的甜點師 帕西娜","gender":"女","element":"火闇","elementSecond":"闇","special":"變換問題類型","specialSecond":"特殊變換問題類型【強化傷害＆回復】","wikiNumber":"801725","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"826","eventID":"149","event":"Holloween night2017","name":"魔女一族的資格者 雪恩‧莎朵莉","gender":"女","element":"水闇","elementSecond":"闇","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"801726","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"827","eventID":"149","event":"Holloween night2017","name":"第一名的甜點師傅 泰隆","gender":"男","element":"水雷","elementSecond":"雷","special":"提昇(自身)","specialSecond":"提昇(自身)","wikiNumber":"801727","style":"{\"border\":\"3px solid blue\"}"},
							{"id":"828","eventID":"149","event":"Holloween night2017","name":"收集各地故事的旅人 艾斌","gender":"男","element":"雷雷","elementSecond":"雷","special":"強化精靈【強化傷害＆減輕傷害】","specialSecond":"強化精靈【強化傷害＆減輕傷害】","wikiNumber":"801728","style":"{\"border\":\"3px solid blue\"}"}

						],
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
				"baseurl":"20200702_0729.html",//相對路徑
				// "testCss":["aaa","bbb"],

               },
			computed:{
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
					
					if(this.picRepeated(data.wikiNumber)){//如果圖片沒重複就儲存
						this.lotteryFairy.push(data);
						this.lotteryFairy = this.orderLottery(this.lotteryFairy);
						console.log("排序~~");
						this.saveToLocal();
					}
					else{
						// console.log("重複了")
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
							console.log("移除動作取消");
							return;
						}
						
						var data = JSON.parse(e.target.getAttribute("data-dataInfo"));
						var index = this.lotteryFairy.findIndex(function(x){
							return x.wikiNumber == data.wikiNumber;
						});
						this.lotteryFairy.splice(index,1);
						this.lotteryFairy = this.orderLottery(this.lotteryFairy);
						this.saveToLocal();
						
						return;
				},
				goHome:function(){
					if(!confirm("將跳往首頁,確定繼續嗎?")){
							//按下取消 不執行
							console.log("動作取消");
							return;
						}
					else{
						window.location.href = this.baseurl;
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
				
				
					if(this.selectFairy.length == 0 || !confirm("確認匯入嗎?")){
						//篩選區裡頭沒資料 或者按下取消 都不執行
						console.log("匯入動作取消");
						return;
					}
				
					var data = this.selectFairy;
					var arr = [];
					for(var i=0;i<data.length;i++){
						// console.log("進行到",i);
						if(this.picRepeated(data[i].wikiNumber)){
							arr.push(data[i]);
						}
						else{console.log("重複了")}
					}
					
					//合併成新的Lottery陣列
					this.lotteryFairy = this.orderLottery(this.lotteryFairy.concat(arr));
					this.saveToLocal();
				},
				saveData:function(){//儲存至雲端
					
					if(this.lotteryFairy.length==0 || !confirm("確認儲存嗎?")){
						//Lottery裡頭沒資料 或者按下取消 都不執行
						console.log("儲存動作取消");
						return;
					}
					else{
						if(!confirm("儲存後.將無法做更改.確定繼續嗎?")){
							console.log("儲存動作取消");
							return;
						}
					}
				
				
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
						console.log("清除動作取消");
						return;
					}
				
					localStorage.removeItem("lotteryFairy");
					this.lotteryFairy = [];
				},
				
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