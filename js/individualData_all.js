var individualData = new Vue({
            el: '#dataEventFairy',
			data: {
				"event":[//活動事件
							{"eventID":"1","name":"阿爾克納與星之旅途Ⅱ 永戰之地","picName":"E1"}
							,
							{"eventID":"2","name":"八百八町妖怪捕物帳","picName":"E2"}
							,
							{"eventID":"3","name":"MARELESSⅡ 夢境與現實的夾縫","picName":"E3"}
							,
							{"eventID":"4","name":"MARELESS 夢境之蝶","picName":"E4"}
							,
							{"eventID":"5","name":"阿爾克納與星之旅途","picName":"E5"}
							,
							{"eventID":"6","name":"再續‧超魔導列傳","picName":"E6"}
							,
							{"eventID":"7","name":"續.超魔導列傳","picName":"E7"}
							,
							{"eventID":"8","name":"超魔導列傳","picName":"E8"}
							,
							{"eventID":"9","name":"職‧超魔導列傳","picName":"E9"}
							,
							{"eventID":"10","name":"The Iridescence of Soul 靈魂的虹彩","picName":"E10"}
							,
							{"eventID":"11","name":"The Luminescence of Soul 靈魂的微光","picName":"E11"}
							,
							{"eventID":"12","name":"天上岬的調香師","picName":"E13"}
							,
							{"eventID":"13","name":"天上岬～永恆的公主～","picName":"E14"}
							,
							{"eventID":"14","name":"歡迎光臨天上岬山麓咖啡廳！","picName":"E15"}
							,
							{"eventID":"15","name":"雙翼的失落伊甸Ⅲ","picName":"E16"}
							,
							{"eventID":"16","name":"雙翼的失落伊甸Ⅱ WWMF","picName":"E17"}
							,
							{"eventID":"17","name":"雙翼的失落伊甸","picName":"E18"}
							,
							{"eventID":"18","name":"歌頌永恆的克羅諾斯Ⅲ","picName":"E19"}
							,
							{"eventID":"19","name":"歌頌永恆的克羅諾斯Ⅱ","picName":"E20"}
							,
							{"eventID":"20","name":"歌頌永恆的克羅諾斯","picName":"E21"}
							,
							{"eventID":"21","name":"啵！神明大人_～北風精靈與炎之鳥～","picName":"E22"}
							,
							{"eventID":"22","name":"SUGARLESS_BAMBINA","picName":"E23"},
							{"eventID":"23","name":"SUGARLESS BAMBINA Ⅱ Slaughter Prison","picName":"E24"}
							,
							{"eventID":"24","name":"FairyChord Prelude","picName":"E25"},
							{"eventID":"25","name":"寄語冬夜的祈願者","picName":"E26"}
							,
							{"eventID":"26","name":"寄語冬夜的祈願者Ⅱ_虛妄之地的追尋者","picName":"E27"}
							,
							{"eventID":"27","name":"喰牙RIZE3 -Fang-O’-Blazer","picName":"E28"}
							,
							{"eventID":"28","name":"喰牙RIZE3-外傳- 冥道死門的極境者","picName":"E29"}
							,
							{"eventID":"29","name":"喰牙RIZE2_-Tearing_Eyes","picName":"E30"}
							,
							{"eventID":"30","name":"喰牙RIZE","picName":"E31"}
							,
							{"eventID":"31","name":"八百萬諸神祕聞4_沉眠京城的悠久之歌","picName":"E32"}
							,
							{"eventID":"32","name":"YAOYORO_Z","picName":"E33"},
							{"eventID":"33","name":"八百萬諸神祕聞2","picName":"E34"}
							,
							{"eventID":"34","name":"八百萬諸神祕聞","picName":"E35"}
							,
							{"eventID":"35","name":"豔夏濱海大騷動","picName":"E36"}
							,
							{"eventID":"36","name":"Birth Of New Order2 大罪","picName":"E37"}
							,
							{"eventID":"37","name":"Birth Of New Order","picName":"E38"},
							{"eventID":"38","name":"黑貓維茲 仲夏感謝季2019","picName":"E39"}
							,
							{"eventID":"39","name":"黃昏無夢者Ⅳ 黃昏mareless","picName":"E40"}
							,
							{"eventID":"40","name":"黃昏無夢者Ⅲ_絡園loreless","picName":"E41"}
							,
							{"eventID":"41","name":"黃昏無夢者Ⅱ 殘響dearless","picName":"E42"}
							,
							{"eventID":"42","name":"黃昏無夢者","picName":"E43"}
							,
							{"eventID":"43","name":"霸眼戰線 終戰之凜煌眼 -前篇","picName":"E44"}
							,
							{"eventID":"44","name":"霸眼戰線4 覺醒之王","picName":"E45"}
							,
							{"eventID":"45","name":"霸眼戰線3 聖劍與霸眼","picName":"E46"}
							,
							{"eventID":"46","name":"霸眼戰線2 起始之眼","picName":"E47"}
							,
							{"eventID":"47","name":"霸眼戰線","picName":"E48"}
							,
							{"eventID":"48","name":"神都匹卡雷斯克&機械與少女Ⅱ","picName":"E49"}
							,
							{"eventID":"49","name":"庫耶斯式拍拖約會","picName":"E50"}
							,
							{"eventID":"50","name":"神聖天空之星3","picName":"E51"}
							,
							{"eventID":"51","name":"神聖天空之星2","picName":"E52"}
							,
							{"eventID":"52","name":"神聖天空之星","picName":"E53"}
							,
							{"eventID":"53","name":"惡作劇女神與兔子的故事","picName":"E54"}
							,
							{"eventID":"54","name":"天界的雙子 訣別的年代記","picName":"E55"}
							,
							{"eventID":"55","name":"響命CrossDerive ACT3","picName":"E56"}
							,
							{"eventID":"56","name":"響命CrossDerive ACT2","picName":"E57"}
							,
							{"eventID":"57","name":"響命CrossDerive","picName":"E58"}
							,
							{"eventID":"58","name":"沉睡的遺跡 Outlander","picName":"E59"}
							,
							{"eventID":"59","name":"幻魔特區RELOADEDⅢ Final Assemble","picName":"E60"}
							,
							{"eventID":"60","name":"幻魔特區RELOADEDⅡ -RE:unite","picName":"E61"}
							,
							{"eventID":"61","name":"幻魔特區RELOADED -GardeniA dist.","picName":"E62"}
							,
							{"eventID":"62","name":"幻魔特區朱雀Ⅲ 幻夢之光","picName":"E63"}
							,
							{"eventID":"63","name":"幻魔特區朱雀Ⅱ 鋼鐵之槍","picName":"E64"}
							,
							{"eventID":"64","name":"幻魔特區朱雀","picName":"E65"}
							,
							{"eventID":"65","name":"空戰的修瓦爾茲","picName":"E66"}
							,
							{"eventID":"66","name":"空戰的德爾基馬斯Ⅲ 飄揚的軍旗","picName":"E67"}
							,
							{"eventID":"67","name":"空戰的德爾基馬斯Ⅱ 昏暗英雄","picName":"E68"}
							,
							{"eventID":"68","name":"空戰的德爾基馬斯","picName":"E69"}
							,
							{"eventID":"69","name":"虛實難辨的假面宴會","picName":"E70"}
							,
							{"eventID":"70","name":"《沙灘上的冰果宴》","picName":"E71"}
							,
							{"eventID":"71","name":"神祕委託‧寒冰之巔的考驗","picName":"E72"}
							,
							{"eventID":"72","name":"偶像ω喵！！","picName":"E73"}
							,
							{"eventID":"73","name":"偶像ω喵！前&後篇","picName":"E74"}
							,
							{"eventID":"74","name":"淡薄的藍色光芒 最終章 終極聖祈","picName":"E75"}
							,
							{"eventID":"75","name":"淡薄的藍色光芒 第二章 虛幻聖域","picName":"E76"}
							,
							{"eventID":"76","name":"淡薄的藍色光芒 第一章 皇帝與劍","picName":"E77"}
							,
							{"eventID":"77","name":"智慧的意義","picName":"E78"}
							,
							{"eventID":"78","name":"片翼天使的轉世約定","picName":"E79"}
							,
							{"eventID":"79","name":"炎夏的海灘風情！","picName":"E80"}
							,
							{"eventID":"80","name":"七夕夜‧煙花燦爛","picName":"E81"}
							,
							{"eventID":"81","name":"《靈界魔女：危險紳士之章》","picName":"E82"}
							,
							{"eventID":"82","name":"新說 桃娘傳Ⅱ 機關桃源虹繪卷","picName":"E83"}
							,
							{"eventID":"83","name":"新說 桃娘傳 妖爺合戰誓助劍","picName":"E84"}
							,
							{"eventID":"84","name":"桃娘傳","picName":"E85"}
							,
							{"eventID":"85","name":"AbyssCode07 寂寞的境界","picName":"E86"}
							,
							{"eventID":"86","name":"《裝神弄鬼》","picName":"E87"}
							,
							{"eventID":"87","name":"給夏日綻放的你","picName":"E88"}
							,
							{"eventID":"88","name":"《沉眠之血2》幼龍的鳴嘶","picName":"E89"}
							,
							{"eventID":"89","name":"《沉眠之血》—焚焰的國度","picName":"E90"}
							,
							{"eventID":"90","name":"冰雪薔薇的黑影","picName":"E91"}
							,
							{"eventID":"91","name":"聖惡魔女子學院2","picName":"E92"}
							,
							{"eventID":"92","name":"聖惡魔女子學院","picName":"E93"}
							,
							{"eventID":"93","name":"拉鍊裡的無盡黑霧","picName":"E94"}
							,
							{"eventID":"94","name":"《聖誕情侶決定戰》","picName":"E95"}
							,
							{"eventID":"95","name":"魔轟三鐵傑 對 地獄三十六歌仙","picName":"E96"}
							,
							{"eventID":"96","name":"黑夜中的甜點大盜","picName":"E97"}
							,
							{"eventID":"97","name":"武鬥之巔‧寒冰嶺上的召集令","picName":"E98"}
							,
							{"eventID":"98","name":"心龍天翔 Rising Dragon","picName":"E99"}
							,
							{"eventID":"99","name":"來自異界的天使","picName":"E100"}
							,
							{"eventID":"100","name":"追憶的閃耀光輝","picName":"E101"}
							,
							{"eventID":"101","name":"被封印的舞台劇目","picName":"E102"}
							,
							{"eventID":"102","name":"AbyssCode06 劫末之獸","picName":"E103"}
							,
							{"eventID":"103","name":"巧克力森林","picName":"E104"}
							,
							{"eventID":"104","name":"Demons Blader","picName":"E105"},
							{"eventID":"105","name":"Heretic Blader","picName":"E106"},
							{"eventID":"106","name":"Tempest Blader","picName":"E107"},
							{"eventID":"107","name":"Divine Blader","picName":"E108"},
							{"eventID":"108","name":"庫洛姆‧麥格納 零","picName":"E109"}
							,
							{"eventID":"109","name":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","picName":"E110"}
							,
							{"eventID":"110","name":"庫洛姆‧麥格納Ⅳ單戀☆狂想曲","picName":"E111"}
							,
							{"eventID":"111","name":"庫洛姆‧麥格納Ⅲ臨海學校","picName":"E112"}
							,
							{"eventID":"112","name":"庫洛姆‧麥格納Ⅱ學園祭","picName":"E113"}
							,
							{"eventID":"113","name":"庫洛姆‧麥格納Ⅰ魔導學園","picName":"E114"}
							,
							{"eventID":"114","name":"AbyssCode08 落入星雲的淚珠","picName":"E115"}
							,
							{"eventID":"115","name":"AbyssCode05 冥世的天蓋","picName":"E116"}
							,
							{"eventID":"116","name":"AbyssCode04 燃燒殆盡的陽光","picName":"E117"}
							,
							{"eventID":"117","name":"AbyssCode03 生而墮於虛無","picName":"E118"}
							,
							{"eventID":"118","name":"AbyssCode02 盲目的調和","picName":"E119"}
							,
							{"eventID":"119","name":"AbyssCode01 黑殼之王","picName":"E120"}
							,
							{"eventID":"120","name":"金貓盃繁中人氣王 前半","picName":"E121"}
							,
							{"eventID":"121","name":"金貓盃繁中人氣王 後半","picName":"E122"}
							,
							{"eventID":"122","name":"神明大人 ～土精靈與黑貓主人～","picName":"E123"}
							,
							{"eventID":"123","name":"神都匹卡雷斯克 黑貓的魔術師","picName":"E124"}
							,
							{"eventID":"124","name":"年之運行","picName":"E125"}
							,
							{"eventID":"125","name":"風暴卡里昂──風暴中心的少女","picName":"E126"}
							,
							{"eventID":"126","name":"魔幻金夏趴2020 序曲","picName":"E127"}
							,
							{"eventID":"127","name":"Under Night Tale 童話戰爭","picName":"E128"}
							,
							{"eventID":"128","name":"ARES THE VANGUARD","picName":"E129"},
							{"eventID":"129","name":"恭賀新禧2020","picName":"E130"}
							,
							{"eventID":"130","name":"5th Anniversary","picName":"E131"},
							{"eventID":"131","name":"FairyChord 妖精的和弦","picName":"E132"}
							,
							{"eventID":"132","name":"感謝祭2020","picName":"E133"}
							,
							{"eventID":"133","name":"Christmas2019","picName":"E134"},
							{"eventID":"134","name":"暑假即將到來","picName":"E135"}
							,
							{"eventID":"135","name":"太陽與月亮之國 喀姆吉納","picName":"E136"}
							,
							{"eventID":"136","name":"感謝祭2019","picName":"E137"}
							,
							{"eventID":"137","name":"4th anniversary","picName":"E138"},
							{"eventID":"138","name":"恭賀新禧2019","picName":"E139"}
							,
							{"eventID":"139","name":"秋末迎冬感謝祭","picName":"E140"}
							,
							{"eventID":"140","name":"仲夏感謝季2018","picName":"E141"}
							,
							{"eventID":"141","name":"丁酉年末感謝季2018","picName":"E142"}
							,
							{"eventID":"142","name":"神龍降臨Ⅱ","picName":"E143"}
							,
							{"eventID":"143","name":"古代森林的千年櫻花","picName":"E144"}
							,
							{"eventID":"144","name":"鬼月限定2017","picName":"E145"}
							,
							{"eventID":"145","name":"情人紀念2017","picName":"E146"}
							,
							{"eventID":"146","name":"跑錯地方的聖誕驚喜","picName":"E147"}
							,
							{"eventID":"147","name":"初夏的魔法使慶典","picName":"E148"}
							,
							{"eventID":"148","name":"雞茲限定  感謝祭2017","picName":"E149"}
							,
							{"eventID":"149","name":"Holloween night2017","picName":"E150"},
							{"eventID":"150","name":"黑貓維茲魔幻金夏趴2020 安可曲","picName":"E151"}
							,
							{"eventID":"151","name":"MARELESSⅢ 夢境訣別","picName":"E152"}
							,
							{"eventID":"152","name":"迷幻泛神祭","picName":"E153"}
							,
							{"eventID":"153","name":"女神的惡作劇之戰！ 光明與黑暗的亂七八糟萬聖節","picName":"E154"}
							,
							{"eventID":"154","name":"艾尼格瑪之花","picName":"E155"}
							,
							{"eventID":"155","name":"2020年感謝下載紀念","picName":"E156"}
						],
				"fairy":[//角色資料
							{"id":"1","eventID":"1","event":"阿爾克納與星之旅途Ⅱ 永戰之地","name":"守護與循環的世界 夜風嵐","gender":"男","element":"雷光","elementSecond":"光","special":"特殊變換問題類型【連鎖數增加＆技能充填】","specialSecond":"特殊變換問題類型【連鎖數增加＆技能充填】","wikiNumber":"801802"}
							,
							{"id":"2","eventID":"1","event":"阿爾克納與星之旅途Ⅱ 永戰之地","name":"沉溺慾望的惡魔 戴爾波","gender":"男","element":"火光","elementSecond":"光","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"801792"}
							,
							{"id":"3","eventID":"1","event":"阿爾克納與星之旅途Ⅱ 永戰之地","name":"創造與可能的魔術師 枍葙","gender":"男","element":"雷光","elementSecond":"光","special":"複屬性回復","specialSecond":"複屬性回復","wikiNumber":"801794"}
							,
							{"id":"4","eventID":"1","event":"阿爾克納與星之旅途Ⅱ 永戰之地","name":"戒律與秩序的皇帝 托戈勒特．帕爾","gender":"男","element":"火光","elementSecond":"光","special":"融合強化","specialSecond":"融合強化","wikiNumber":"801796"}
							,
							{"id":"5","eventID":"1","event":"阿爾克納與星之旅途Ⅱ 永戰之地","name":"豐碩之愛的皇后 伊莎貝拉","gender":"女","element":"水火","elementSecond":"火","special":"毒","specialSecond":"毒","wikiNumber":"801798"}
							,
							{"id":"6","eventID":"1","event":"阿爾克納與星之旅途Ⅱ 永戰之地","name":"生命祝福的星星 忻羽","gender":"女","element":"雷水","elementSecond":"水","special":"Boost提升(全體)","specialSecond":"Boost提升(全體)","wikiNumber":"801800"}
							,
							{"id":"7","eventID":"2","event":"八百八町妖怪捕物帳","name":"無法冷卻的正義沸水 薩克特‧大神","gender":"男","element":"水火","elementSecond":"火","special":"起死回生","specialSecond":"起死回生","wikiNumber":"10728"}
							,
							{"id":"8","eventID":"2","event":"八百八町妖怪捕物帳","name":"守護八百八町 文繼‧葦原","gender":"男","element":"水","elementSecond":"水","special":"蓄積解放大魔術‧破(全體)","specialSecond":"蓄積解放大魔術‧破(全體)","wikiNumber":"10713"}
							,
							{"id":"9","eventID":"2","event":"八百八町妖怪捕物帳","name":"鬼道之花綻放 美緒‧葛折","gender":"女","element":"火水","elementSecond":"水","special":"解除效果(全體)【防禦＆阻隔傷害】","specialSecond":"解除效果大魔術(全體)【防禦＆阻隔傷害】","wikiNumber":"10716"}
							,
							{"id":"10","eventID":"2","event":"八百八町妖怪捕物帳","name":"正向思考 木葉‧依姬","gender":"女","element":"火","elementSecond":"火","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"10719"}
							,
							{"id":"11","eventID":"2","event":"八百八町妖怪捕物帳","name":"營利和人情的互補 登美‧言壽","gender":"女","element":"雷","elementSecond":"雷","special":"賦予雙重技能(全體)","specialSecond":"賦予雙重技能(全體)","wikiNumber":"10722"}
							,
							{"id":"12","eventID":"2","event":"八百八町妖怪捕物帳","name":"錦上添花的美豔女郎 夕霧‧雨野","gender":"女","element":"雷","elementSecond":"雷","special":"變換問題類型","specialSecond":"純屬性變換問題類型【技能充填】","wikiNumber":"10725"}
							,
							{"id":"13","eventID":"3","event":"MARELESSⅡ 夢境與現實的夾縫","name":"超越道理的射手 蘿莎莉亞‧哈特","gender":"女","element":"雷光","elementSecond":"光","special":"蓄積解放大魔術‧聖(單體)","specialSecond":"蓄積解放大魔術‧聖(單體)","wikiNumber":"10499"}
							,
							{"id":"14","eventID":"3","event":"MARELESSⅡ 夢境與現實的夾縫","name":"所繼承夢想的推力 愛琳‧葉茨","gender":"女","element":"水光","elementSecond":"光","special":"特殊變換問題類型【強化傷害】","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"10502"}
							,
							{"id":"15","eventID":"3","event":"MARELESSⅡ 夢境與現實的夾縫","name":"散發魔之常闇 諾庫斯‧瓦尼塔斯","gender":"男","element":"火闇","elementSecond":"闇","special":"蓄積解放大魔術‧邪(單體)","specialSecond":"蓄積解放大魔術‧邪(單體)","wikiNumber":"10505"}
							,
							{"id":"16","eventID":"3","event":"MARELESSⅡ 夢境與現實的夾縫","name":"無數的思念 拉提歐‧星辰","gender":"男","element":"雷","elementSecond":"雷","special":"捕食大魔術(全體)","specialSecond":"捕食大魔術(全體)","wikiNumber":"10511"}
							,
							{"id":"17","eventID":"3","event":"MARELESSⅡ 夢境與現實的夾縫","name":"求夢妖精的化身 阿浮利德","gender":"男","element":"水闇","elementSecond":"闇","special":"產生連結問題類型","specialSecond":"強化傷害(自身)","wikiNumber":"10508"}
							,
							{"id":"18","eventID":"3","event":"MARELESSⅡ 夢境與現實的夾縫","name":"為了主人的夢想 露西尼雅‧雷梅蒂","gender":"女","element":"火","elementSecond":"火","special":"問題類型爆破大魔術","specialSecond":"問題類型爆破大魔術","wikiNumber":"10514"}
							,
							{"id":"19","eventID":"4","event":"MARELESS 夢境之蝶","name":"飲魔之闇 諾庫斯‧瓦尼塔斯","gender":"男","element":"雷闇","elementSecond":"闇","special":"融合大魔術(單體)","specialSecond":"融合大魔術(單體)","wikiNumber":"10118"}
							,
							{"id":"20","eventID":"4","event":"MARELESS 夢境之蝶","name":"繼承遺志的魔匠師 愛琳‧葉茨","gender":"女","element":"水光","elementSecond":"光","special":"強化精靈【持續回復＆減輕傷害＆強化傷害】","specialSecond":"強化精靈【持續回復＆減輕傷害＆強化傷害】","wikiNumber":"10115"}
							,
							{"id":"21","eventID":"4","event":"MARELESS 夢境之蝶","name":"消除惡夢者 蘿莎莉亞‧哈特","gender":"女","element":"火","elementSecond":"火","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"10112"}
							,
							{"id":"22","eventID":"5","event":"阿爾克納與星之旅途","name":"以柔克剛的力量 絲炟爾·瓊","gender":"女","element":"雷闇","elementSecond":"闇","special":"異常狀態失效","specialSecond":"異常狀態失效","wikiNumber":"801573"}
							,
							{"id":"23","eventID":"5","event":"阿爾克納與星之旅途","name":"玄不改命運之輪 水清","gender":"女","element":"火水","elementSecond":"水","special":"阻隔傷害","specialSecond":"阻隔傷害","wikiNumber":"801571"}
							,
							{"id":"24","eventID":"5","event":"阿爾克納與星之旅途","name":"單戀的女祭司 迪雅絲‧泰拉","gender":"女","element":"水","elementSecond":"水","special":"強化擊破","specialSecond":"強化擊破","wikiNumber":"801569"}
							,
							{"id":"25","eventID":"5","event":"阿爾克納與星之旅途","name":"點綴希望的星星 忻羽","gender":"女","element":"水雷","elementSecond":"雷","special":"多重魔術(單體)","specialSecond":"統一大魔術","wikiNumber":"801567"}
							,
							{"id":"26","eventID":"5","event":"阿爾克納與星之旅途","name":"一往無前的戰車 夜明．泰倫","gender":"男","element":"雷水","elementSecond":"水","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"801575"}
							,
							{"id":"27","eventID":"5","event":"阿爾克納與星之旅途","name":"絕對正義 璐彌‧斯卡燐","gender":"女","element":"火光","elementSecond":"光","special":"炸裂大魔術","specialSecond":"炸裂大魔術","wikiNumber":"801577"}
							,
							{"id":"28","eventID":"6","event":"再續‧超魔導列傳","name":"新娘 in 魔導棺材 愛莉葉塔‧多娃","gender":"女","element":"水火","elementSecond":"火","special":"產生連結問題類型","specialSecond":"產生連結問題類型","wikiNumber":"9265"}
							,
							{"id":"29","eventID":"6","event":"再續‧超魔導列傳","name":"超惡作劇魔導士 莉露姆‧洛洛特","gender":"女","element":"水水","elementSecond":"水","special":"一閃斬擊大魔術","specialSecond":"一閃斬擊大魔術","wikiNumber":"9268"}
							,
							{"id":"30","eventID":"6","event":"再續‧超魔導列傳","name":"本性是小惡魔 伊妮亞‧史托拉瑪","gender":"女","element":"火火","elementSecond":"火","special":"炸裂大魔術","specialSecond":"炸裂大魔術","wikiNumber":"9271"}
							,
							{"id":"31","eventID":"6","event":"再續‧超魔導列傳","name":"詛咒繃帶 艾莉絲＝瑪基爾‧夏璐姆","gender":"女","element":"雷雷","elementSecond":"雷","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"9277"}
							,
							{"id":"32","eventID":"6","event":"再續‧超魔導列傳","name":"超爆發的看護屍 蕾娜‧依拉普修","gender":"女","element":"火火","elementSecond":"火","special":"大魔術(單體)","specialSecond":"大魔術(單體)","wikiNumber":"9280"}
							,
							{"id":"33","eventID":"7","event":"續.超魔導列傳","name":"魔導比海更寬廣 愛莉葉塔‧多娃","gender":"女","element":"雷雷","elementSecond":"雷","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"9350"}
							,
							{"id":"34","eventID":"7","event":"續.超魔導列傳","name":"燦杖少女 艾莉絲＝瑪基爾‧夏璐","gender":"女","element":"水雷","elementSecond":"雷","special":"異常狀態失效","specialSecond":"持續回復","wikiNumber":"9351"}
							,
							{"id":"35","eventID":"7","event":"續.超魔導列傳","name":"悠久的大魔導 伊妮亞‧史托拉瑪","gender":"女","element":"水水","elementSecond":"水","special":"強化傷害(指定屬性)","specialSecond":"回復異常狀態","wikiNumber":"6541"}
							,
							{"id":"36","eventID":"7","event":"續.超魔導列傳","name":"超絕夏日少女 莉露姆‧洛洛特","gender":"女","element":"水水","elementSecond":"水","special":"弱化大魔術(單體)","specialSecond":"弱化大魔術(單體)","wikiNumber":"9353"}
							,
							{"id":"37","eventID":"7","event":"續.超魔導列傳","name":"飛吧☆夏日彗星 蘇菲‧哈涅特","gender":"女","element":"雷水","elementSecond":"水","special":"延遲(全體)","specialSecond":"技能充填＆延遲(全體)","wikiNumber":"9354"}
							,
							{"id":"38","eventID":"7","event":"續.超魔導列傳","name":"大魔導士的夏之色 蕾娜‧依拉普修","gender":"女","element":"火火","elementSecond":"火","special":"提昇(全體)","specialSecond":"提昇(全體)","wikiNumber":"9355"}
							,
							{"id":"39","eventID":"7","event":"續.超魔導列傳","name":"在煙火之夜登場！ 大魔導士！","gender":"女","element":"雷水","elementSecond":"水","special":"物理反擊","specialSecond":"物理反擊","wikiNumber":"9356"}
							,
							{"id":"40","eventID":"7","event":"續.超魔導列傳","name":"集結！ 超無敵魔導女孩！","gender":"女","element":"火光","elementSecond":"光","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"9357"}
							,
							{"id":"41","eventID":"8","event":"超魔導列傳","name":"超越的大魔導怪獸 愛莉葉塔・多娃","gender":"女","element":"火水","elementSecond":"水","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"11307"}
							,
							{"id":"42","eventID":"8","event":"超魔導列傳","name":"超革命魔導女孩_莉露姆‧洛洛特","gender":"女","element":"水火","elementSecond":"火","special":"犧牲魔術(全體)","specialSecond":"犧牲魔術(全體)","wikiNumber":"11308"}
							,
							{"id":"43","eventID":"8","event":"超魔導列傳","name":"描繪夢想的彗星_蘇菲‧哈涅特","gender":"女","element":"雷水","elementSecond":"水","special":"技能複製","specialSecond":"技能複製","wikiNumber":"11309"}
							,
							{"id":"44","eventID":"8","event":"超魔導列傳","name":"繼承與雷霆的_蕾娜‧依拉普修","gender":"女","element":"雷雷","elementSecond":"雷","special":"特殊變換問題類型【連鎖數增加】","specialSecond":"特殊變換問題類型【連鎖數增加】","wikiNumber":"11310"}
							,
							{"id":"45","eventID":"8","event":"超魔導列傳","name":"縛眼的牢籠_艾莉絲＝瑪基爾‧夏璐姆","gender":"女","element":"水雷","elementSecond":"雷","special":"強化複屬性傷害","specialSecond":"強化複屬性傷害","wikiNumber":"11311"}
							,
							{"id":"46","eventID":"9","event":"職‧超魔導列傳","name":"超確實中選_愛莉葉塔‧多娃","gender":"女","element":"水水","elementSecond":"水","special":"蓄積解放大魔術‧印(全體)","specialSecond":"蓄積解放大魔術‧印(全體)","wikiNumber":"11270"}
							,
							{"id":"47","eventID":"9","event":"職‧超魔導列傳","name":"社會派記者_莉露姆‧洛洛特","gender":"女","element":"火雷","elementSecond":"雷","special":"L次數大魔術","specialSecond":"L次數大魔術","wikiNumber":"11273"}
							,
							{"id":"48","eventID":"9","event":"職‧超魔導列傳","name":"魔導RQ_艾莉絲＝瑪基爾‧夏璐姆","gender":"女","element":"雷雷","elementSecond":"雷","special":"無屬性變化","specialSecond":"無屬性變化","wikiNumber":"11276"}
							,
							{"id":"49","eventID":"9","event":"職‧超魔導列傳","name":"菜鳥鑑定士_伊妮亞‧史托拉瑪","gender":"女","element":"水光","elementSecond":"光","special":"保留問題類型【連鎖數增加】","specialSecond":"保留問題類型【連鎖數增加】","wikiNumber":"11279"}
							,
							{"id":"50","eventID":"9","event":"職‧超魔導列傳","name":"燃燒的消防員_蕾娜‧依拉普修","gender":"女","element":"火火","elementSecond":"火","special":"問題類型爆破大魔術","specialSecond":"問題類型爆破大魔術","wikiNumber":"11282"}
							,
							{"id":"51","eventID":"9","event":"職‧超魔導列傳","name":"探求魔導科學_蘇菲‧哈涅特","gender":"女","element":"雷光","elementSecond":"光","special":"弱化大魔術(單體)","specialSecond":"弱化大魔術(單體)","wikiNumber":"11285"}
							,
							{"id":"52","eventID":"10","event":"The Iridescence of Soul 靈魂的虹彩","name":"蜉生蝣夢_蝴蝶","gender":"女","element":"水光","elementSecond":"光","special":"激化大魔術","specialSecond":"激化大魔術","wikiNumber":"801636"}
							,
							{"id":"53","eventID":"10","event":"The Iridescence of Soul 靈魂的虹彩","name":"星源詠唱者_拉索","gender":"男","element":"雷雷","elementSecond":"雷","special":"毒","specialSecond":"毒","wikiNumber":"801638"}
							,
							{"id":"54","eventID":"10","event":"The Iridescence of Soul 靈魂的虹彩","name":"光曜虹彩_珂珂","gender":"女","element":"雷闇","elementSecond":"闇","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"801640"}
							,
							{"id":"55","eventID":"10","event":"The Iridescence of Soul 靈魂的虹彩","name":"乘風破浪_寶迪","gender":"男","element":"火水","elementSecond":"水","special":"特殊變換問題類型【隨機】","specialSecond":"特殊變換問題類型【隨機】","wikiNumber":"801642"}
							,
							{"id":"56","eventID":"10","event":"The Iridescence of Soul 靈魂的虹彩","name":"海岸巡防天使_紬","gender":"女","element":"火光","elementSecond":"光","special":"統一大魔術","specialSecond":"統一大魔術","wikiNumber":"801646"}
							,
							{"id":"57","eventID":"10","event":"The Iridescence of Soul 靈魂的虹彩","name":"神出鬼沒怪盜_格拉娜","gender":"女","element":"雷火","elementSecond":"火","special":"強化精靈【持續回復＆強化傷害】","specialSecond":"強化精靈【持續回復＆強化傷害＆異常狀態失效】","wikiNumber":"801648"}
							,
							{"id":"58","eventID":"11","event":"The Luminescence of Soul 靈魂的微光","name":"引領靈魂的熒燈_歌莉亞","gender":"女","element":"雷光","elementSecond":"光","special":"刪去回答","specialSecond":"刪去回答","wikiNumber":"801621"}
							,
							{"id":"59","eventID":"11","event":"The Luminescence of Soul 靈魂的微光","name":"一期一會_蜜多莉","gender":"女","element":"火火","elementSecond":"火","special":"詠唱大魔術","specialSecond":"詠唱大魔術","wikiNumber":"801623"}
							,
							{"id":"60","eventID":"11","event":"The Luminescence of Soul 靈魂的微光","name":"桃花流水_露絲娜","gender":"女","element":"水火","elementSecond":"火","special":"強化複屬性傷害","specialSecond":"強化複屬性傷害","wikiNumber":"801625"}
							,
							{"id":"61","eventID":"11","event":"The Luminescence of Soul 靈魂的微光","name":"相倚的莫逆之翼_瞬＆陽","gender":"男","element":"雷水","elementSecond":"水","special":"一閃斬擊大魔術","specialSecond":"一閃斬擊大魔術","wikiNumber":"801627"}
							,
							{"id":"62","eventID":"11","event":"The Luminescence of Soul 靈魂的微光","name":"藍色冰果潘趣_帕榭菈","gender":"女","element":"水水","elementSecond":"水","special":"特效大魔術(單體)","specialSecond":"強化傷害(自身)","wikiNumber":"801629"}
							,
							{"id":"63","eventID":"11","event":"The Luminescence of Soul 靈魂的微光","name":"經歷過的那些風浪_拉布","gender":"男","element":"火雷","elementSecond":"雷","special":"強化擊破","specialSecond":"強化擊破","wikiNumber":"801631"}
							,
							{"id":"64","eventID":"12","event":"天上岬的調香師","name":"將回憶藏在心中_法姆‧莉莉","gender":"女","element":"水雷","elementSecond":"雷","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"10867"}
							,
							{"id":"65","eventID":"12","event":"天上岬的調香師","name":"天上岬工房的屋主_費露琪‧莉莉","gender":"女","element":"火水","elementSecond":"水","special":"防禦連鎖","specialSecond":"AS特殊變化","wikiNumber":"10868"}
							,
							{"id":"66","eventID":"12","event":"天上岬的調香師","name":"毛絨絨國公主_芽寧朵‧芙莉爾","gender":"女","element":"雷火","elementSecond":"火","special":"刪去回答","specialSecond":"刪去回答","wikiNumber":"10869"}
							,
							{"id":"67","eventID":"12","event":"天上岬的調香師","name":"守護森林的魔彈槍_利谷斯‧那哈爾","gender":"男","element":"雷雷","elementSecond":"雷","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"10870"}
							,
							{"id":"68","eventID":"12","event":"天上岬的調香師","name":"引以為豪的薰香！_南露娜‧卡絲妲","gender":"女","element":"火水","elementSecond":"水","special":"持續回復","specialSecond":"持續回復","wikiNumber":"10871"}
							,
							{"id":"69","eventID":"12","event":"天上岬的調香師","name":"記錄調香術的歷史_羅尼爾‧庫姆","gender":"男","element":"水雷","elementSecond":"雷","special":"變換問題類型","specialSecond":"特殊變換問題類型【隨機】","wikiNumber":"10872"}
							,
							{"id":"70","eventID":"13","event":"天上岬～永恆的公主～","name":"天上岬的飛毛腿_卡爾特羅‧雷納德","gender":"男","element":"水水","elementSecond":"水","special":"延遲(全體)","specialSecond":"延遲大魔術(全體)","wikiNumber":"11128"}
							,
							{"id":"71","eventID":"13","event":"天上岬～永恆的公主～","name":"小麥王子_布列得‧克拉夫茲","gender":"男","element":"火火","elementSecond":"火","special":"持續回復","specialSecond":"強化精靈【持續回復＆強化傷害】","wikiNumber":"11127"}
							,
							{"id":"72","eventID":"13","event":"天上岬～永恆的公主～","name":"大自然的探究者_貝亞德‧菲薩","gender":"男","element":"火雷","elementSecond":"雷","special":"刪去回答","specialSecond":"刪去回答","wikiNumber":"11126"}
							,
							{"id":"73","eventID":"13","event":"天上岬～永恆的公主～","name":"夢見鳥的調香師_亞妮蘿‧菲薩","gender":"女","element":"雷雷","elementSecond":"雷","special":"回復異常狀態","specialSecond":"回復異常狀態＆復活","wikiNumber":"11125"}
							,
							{"id":"74","eventID":"14","event":"歡迎光臨天上岬山麓咖啡廳！","name":"用味道虜獲人心_法姆‧莉莉","gender":"女","element":"雷水","elementSecond":"水","special":"蓄積解放大魔術‧破(全體)","specialSecond":"蓄積解放大魔術‧破(全體)","wikiNumber":"11089"}
							,
							{"id":"75","eventID":"14","event":"歡迎光臨天上岬山麓咖啡廳！","name":"吸引顧客的視線_費露琪‧莉莉","gender":"女","element":"雷雷","elementSecond":"雷","special":"物理反擊（充填）","specialSecond":"物理反擊（充填）","wikiNumber":"11092"}
							,
							{"id":"76","eventID":"14","event":"歡迎光臨天上岬山麓咖啡廳！","name":"店家的活招牌_愛特露涅‧波姆","gender":"女","element":"火雷","elementSecond":"雷","special":"犧牲連鎖強化","specialSecond":"犧牲連鎖強化","wikiNumber":"11095"}
							,
							{"id":"77","eventID":"14","event":"歡迎光臨天上岬山麓咖啡廳！","name":"和服裝搭配_莉露‧萊路","gender":"女","element":"水火","elementSecond":"火","special":"捕食大魔術(全體)","specialSecond":"捕食大魔術(全體)","wikiNumber":"11098"}
							,
							{"id":"78","eventID":"14","event":"歡迎光臨天上岬山麓咖啡廳！","name":"嶄新的羈絆_利谷斯＆梅貝爾","gender":"男女","element":"火火","elementSecond":"火","special":"時限大魔術","specialSecond":"時限大魔術","wikiNumber":"11101"}
							,
							{"id":"79","eventID":"14","event":"歡迎光臨天上岬山麓咖啡廳！","name":"向森林報恩_毛絨絨＆芽寧朵","gender":"女","element":"水水","elementSecond":"水","special":"強化精靈【持續回復＆減輕傷害＆強化傷害】","specialSecond":"強化精靈【持續回復＆減輕傷害＆強化傷害】","wikiNumber":"11104"}
							,
							{"id":"80","eventID":"15","event":"雙翼的失落伊甸Ⅲ","name":"王高呼惡意_艾盧多貝里克‧哥德","gender":"男","element":"雷雷","elementSecond":"雷","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"11444"}
							,
							{"id":"81","eventID":"15","event":"雙翼的失落伊甸Ⅲ","name":"記憶深淵輕聲嗤笑_露席菈‧弗歐魯","gender":"女","element":"火光","elementSecond":"光","special":"強化擊破","specialSecond":"強化擊破","wikiNumber":"11445"}
							,
							{"id":"82","eventID":"15","event":"雙翼的失落伊甸Ⅲ","name":"雙翼的系譜_琉迪格‧希古拉","gender":"男","element":"水水","elementSecond":"水","special":"連鎖解放大魔術","specialSecond":"連鎖解放大魔術","wikiNumber":"11446"}
							,
							{"id":"83","eventID":"15","event":"雙翼的失落伊甸Ⅲ","name":"雙翼的寵姬_梨莎‧洛特蘭達","gender":"女","element":"火水","elementSecond":"水","special":"特殊變換問題類型【連鎖數增加＆技能充填】","specialSecond":"特殊變換問題類型【連鎖數增加＆技能充填】","wikiNumber":"11447"}
							,
							{"id":"84","eventID":"15","event":"雙翼的失落伊甸Ⅲ","name":"二魂同心_維雷夫基納＆希蜜拉兒","gender":"男女","element":"雷闇","elementSecond":"闇","special":"提昇(自身)","specialSecond":"提昇(自身)","wikiNumber":"11448"}
							,
							{"id":"85","eventID":"15","event":"雙翼的失落伊甸Ⅲ","name":"鬥毆魔帝_庫伊杜斯‧吉爾瓦","gender":"男","element":"水水","elementSecond":"水","special":"反動大魔術‧蝕(全體)","specialSecond":"反動大魔術‧蝕(全體)","wikiNumber":"11449"}
							,
							{"id":"86","eventID":"16","event":"雙翼的失落伊甸Ⅱ WWMF","name":"華麗魔王_艾盧多貝里克‧哥德","gender":"男","element":"水闇","elementSecond":"闇","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"10690"}
							,
							{"id":"87","eventID":"16","event":"雙翼的失落伊甸Ⅱ WWMF","name":"慈愛與自由之花_露席菈‧弗歐魯","gender":"女","element":"水光","elementSecond":"光","special":"特殊變換問題類型【強化傷害】","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"10691"}
							,
							{"id":"88","eventID":"16","event":"雙翼的失落伊甸Ⅱ WWMF","name":"聖王之神髓_米迦菈‧撒拉弗","gender":"女","element":"雷光","elementSecond":"光","special":"斬擊大魔術","specialSecond":"多重魔術(單體)","wikiNumber":"10692"}
							,
							{"id":"89","eventID":"16","event":"雙翼的失落伊甸Ⅱ WWMF","name":"征服之魔劍_伊薩克‧撒拉弗","gender":"男","element":"雷闇","elementSecond":"闇","special":"技能充填(全體)","specialSecond":"技能充填(全體)","wikiNumber":"10693"}
							,
							{"id":"90","eventID":"16","event":"雙翼的失落伊甸Ⅱ WWMF","name":"滅魂之預言者_維雷夫基納‧安曼","gender":"男","element":"火水","elementSecond":"水","special":"提升能力數值(全體)","specialSecond":"提昇(全體)","wikiNumber":"10694"}
							,
							{"id":"91","eventID":"16","event":"雙翼的失落伊甸Ⅱ WWMF","name":"思考型人造魂魄_希蜜拉兒","gender":"女","element":"火火","elementSecond":"火","special":"鐵壁‧極","specialSecond":"鐵壁‧極","wikiNumber":"10695"}
							,
							{"id":"92","eventID":"17","event":"雙翼的失落伊甸","name":"閃耀的永劫之翼_艾盧多貝里克‧哥德","gender":"男","element":"雷光","elementSecond":"光","special":"技能充填＆延遲(單體)","specialSecond":"技能充填＆延遲(單體)","wikiNumber":"9429"}
							,
							{"id":"93","eventID":"17","event":"雙翼的失落伊甸","name":"跨越永劫_艾盧多貝里克‧哥德","gender":"男","element":"雷闇","elementSecond":"闇","special":"強化傷害(全體)","specialSecond":"強化傷害(全體)","wikiNumber":"9430"}
							,
							{"id":"94","eventID":"17","event":"雙翼的失落伊甸","name":"解放無限_露席菈‧弗歐魯","gender":"女","element":"雷光","elementSecond":"光","special":"防禦連鎖","specialSecond":"防禦連鎖","wikiNumber":"9431"}
							,
							{"id":"95","eventID":"17","event":"雙翼的失落伊甸","name":"無限的黑天使_露席菈‧弗歐魯","gender":"女","element":"雷闇","elementSecond":"闇","special":"變換問題類型","specialSecond":"特殊變換問題類型【減輕傷害】","wikiNumber":"9432"}
							,
							{"id":"96","eventID":"17","event":"雙翼的失落伊甸","name":"協調的神世界_米迦菈‧撒拉弗","gender":"女","element":"火光","elementSecond":"光","special":"回復異常狀態","specialSecond":"回復異常狀態＆復活","wikiNumber":"9433"}
							,
							{"id":"97","eventID":"17","event":"雙翼的失落伊甸","name":"某個魔王_米迦菈‧撒拉弗","gender":"女","element":"火闇","elementSecond":"闇","special":"解除效果(全體)【物理反擊】","specialSecond":"解除效果大魔術(全體)【物理反擊＆技能反擊】","wikiNumber":"9434"}
							,
							{"id":"98","eventID":"17","event":"雙翼的失落伊甸","name":"迴響於黑闇中的大笑_伊薩克‧撒拉弗","gender":"男","element":"火火","elementSecond":"火","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"9435"}
							,
							{"id":"99","eventID":"17","event":"雙翼的失落伊甸","name":"靜靜地祈求_克莉涅雅‧瑪奇雅","gender":"女","element":"水火","elementSecond":"火","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"9436"}
							,
							{"id":"100","eventID":"18","event":"歌頌永恆的克羅諾斯Ⅲ","name":"太陽與夏日_優卡‧恩德","gender":"女","element":"水水","elementSecond":"水","special":"炸裂大魔術","specialSecond":"炸裂大魔術","wikiNumber":"11035"}
							,
							{"id":"101","eventID":"18","event":"歌頌永恆的克羅諾斯Ⅲ","name":"與夏日的邂逅_愛麗絲‧史都華","gender":"女","element":"雷雷","elementSecond":"雷","special":"純屬性強化","specialSecond":"純屬性強化","wikiNumber":"11036"}
							,
							{"id":"102","eventID":"18","event":"歌頌永恆的克羅諾斯Ⅲ","name":"情感的太陽_卡奴耶‧德‧亞克","gender":"女","element":"火光","elementSecond":"光","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"11037"}
							,
							{"id":"103","eventID":"18","event":"歌頌永恆的克羅諾斯Ⅲ","name":"回想之夏_伊蕾娜‧芙莉愛兒","gender":"女","element":"火火","elementSecond":"火","special":"強化精靈【持續回復＆異常狀態失效】","specialSecond":"強化精靈【持續回復＆異常狀態失效】","wikiNumber":"11038"}
							,
							{"id":"104","eventID":"18","event":"歌頌永恆的克羅諾斯Ⅲ","name":"夏日的行蹤_史黛西‧瑪丘里","gender":"女","element":"雷火","elementSecond":"火","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"11039"}
							,
							{"id":"105","eventID":"18","event":"歌頌永恆的克羅諾斯Ⅲ","name":"夏日的片刻_席琳‧伊凡斯","gender":"女","element":"水水","elementSecond":"水","special":"技能複製","specialSecond":"技能複製","wikiNumber":"11040"}
							,
							{"id":"106","eventID":"18","event":"歌頌永恆的克羅諾斯Ⅲ","name":"守護之時的光輝_塞蒂‧蕾","gender":"女","element":"水火","elementSecond":"火","special":"賦予雙重技能(全體)","specialSecond":"賦予雙重技能(全體)","wikiNumber":"11041"}
							,
							{"id":"107","eventID":"19","event":"歌頌永恆的克羅諾斯Ⅱ","name":"時間的邂逅_愛麗絲‧史都華","gender":"女","element":"雷雷","elementSecond":"雷","special":"回復異常狀態","specialSecond":"回復異常狀態","wikiNumber":"8705"}
							,
							{"id":"108","eventID":"19","event":"歌頌永恆的克羅諾斯Ⅱ","name":"時空的聖鎚_優卡‧恩德","gender":"女","element":"火火","elementSecond":"火","special":"延遲(全體)","specialSecond":"延遲(全體)","wikiNumber":"8706"}
							,
							{"id":"109","eventID":"19","event":"歌頌永恆的克羅諾斯Ⅱ","name":"呼喚時間_史黛西·瑪丘里","gender":"女","element":"火光","elementSecond":"光","special":"變換問題類型","specialSecond":"特殊變換問題類型【連鎖數增加】","wikiNumber":"8707"}
							,
							{"id":"110","eventID":"19","event":"歌頌永恆的克羅諾斯Ⅱ","name":"慮時司神_伊蕾娜‧芙莉愛兒","gender":"女","element":"水光","elementSecond":"光","special":"變換問題類型","specialSecond":"特殊變換問題類型【回復】","wikiNumber":"8708"}
							,
							{"id":"111","eventID":"19","event":"歌頌永恆的克羅諾斯Ⅱ","name":"刻下司神_席琳‧伊凡斯","gender":"女","element":"雷雷","elementSecond":"雷","special":"防禦","specialSecond":"防禦","wikiNumber":"8709"}
							,
							{"id":"112","eventID":"20","event":"歌頌永恆的克羅諾斯","name":"前刻蒼神_伊蕾娜‧芙莉愛兒","gender":"女","element":"水水","elementSecond":"水","special":"延遲(全體)","specialSecond":"延遲(全體)","wikiNumber":"8704"}
							,
							{"id":"113","eventID":"20","event":"歌頌永恆的克羅諾斯","name":"悠之照神_史黛西‧瑪丘里","gender":"女","element":"火火","elementSecond":"火","special":"變換問題類型","specialSecond":"特殊變換問題類型【連鎖數增加＆強化傷害】","wikiNumber":"8703"}
							,
							{"id":"114","eventID":"20","event":"歌頌永恆的克羅諾斯","name":"刻下光神_席琳‧伊凡斯","gender":"女","element":"雷光","elementSecond":"光","special":"變換問題類型","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"8702"}
							,
							{"id":"115","eventID":"20","event":"歌頌永恆的克羅諾斯","name":"時海冒險者_蒂‧李伏利斯","gender":"女","element":"水火","elementSecond":"火","special":"防禦","specialSecond":"防禦","wikiNumber":"8701"}
							,
							{"id":"116","eventID":"20","event":"歌頌永恆的克羅諾斯","name":"時海航海者_達姆‧李伏利斯","gender":"女","element":"火水","elementSecond":"水","special":"變換問題類型","specialSecond":"變換問題類型","wikiNumber":"8700"}
							,
							{"id":"117","eventID":"20","event":"歌頌永恆的克羅諾斯","name":"星霜的詠人_愛麗絲‧史都華","gender":"女","element":"雷火","elementSecond":"火","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"8699"}
							,
							{"id":"118","eventID":"21","event":"啵！神明大人_～北風精靈與炎之鳥～","name":"冬季天空的光輝_卡奴耶‧德‧亞克","gender":"女","element":"火火","elementSecond":"火","special":"物理反擊（充填）","specialSecond":"物理反擊（充填）","wikiNumber":"11441"}
							,
							{"id":"119","eventID":"21","event":"啵！神明大人_～北風精靈與炎之鳥～","name":"飄洋過海的羽翼_梨莎‧洛特蘭達","gender":"女","element":"水水","elementSecond":"水","special":"AS特殊變化","specialSecond":"AS特殊變化","wikiNumber":"11442"}
							,
							{"id":"120","eventID":"21","event":"啵！神明大人_～北風精靈與炎之鳥～","name":"尋找不可思議的書_葛蕾絲","gender":"女","element":"雷火","elementSecond":"火","special":"變換問題類型","specialSecond":"統一變換問題類型【強化傷害】","wikiNumber":"11443"}
							,
							{"id":"121","eventID":"22","event":"SUGARLESS_BAMBINA","name":"盛放狂亂少女之心_薇塔‧芭比奈","gender":"女","element":"雷火","elementSecond":"火","special":"融合強化","specialSecond":"融合強化","wikiNumber":"11080"}
							,
							{"id":"122","eventID":"22","event":"SUGARLESS_BAMBINA","name":"狂亂舞動少女之刀_綺露拉‧科泰勒","gender":"女","element":"水光","elementSecond":"光","special":"行動感應","specialSecond":"行動感應","wikiNumber":"11081"}
							,
							{"id":"123","eventID":"22","event":"SUGARLESS_BAMBINA","name":"癲狂歌聲_茜茜‧烏拉蕾","gender":"女","element":"火雷","elementSecond":"雷","special":"強化精靈【持續回復＆減輕傷害＆強化傷害】","specialSecond":"強化精靈【持續回復＆減輕傷害＆強化傷害】","wikiNumber":"11082"}
							,
							{"id":"124","eventID":"22","event":"SUGARLESS_BAMBINA","name":"狂戀的斧少女_瑪琪亞‧傑洛歇","gender":"女","element":"火闇","elementSecond":"闇","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"11083"}
							,
							{"id":"125","eventID":"22","event":"SUGARLESS_BAMBINA","name":"最瘋狂的女廚師_帕絲帕茹‧席歐涅","gender":"女","element":"水闇","elementSecond":"闇","special":"提昇(相鄰)","specialSecond":"提昇(相鄰)","wikiNumber":"11084"}
							,
							{"id":"126","eventID":"22","event":"SUGARLESS_BAMBINA","name":"狂速爆走少女_勒格茲‧方亭","gender":"女","element":"雷雷","elementSecond":"雷","special":"連鎖解放大魔術","specialSecond":"連鎖解放大魔術","wikiNumber":"11085"}
							,
							{"id":"127","eventID":"23","event":"SUGARLESS BAMBINA Ⅱ Slaughter Prison","name":"吞噬野獸的怪物_薇塔‧芭比奈","gender":"女","element":"雷火","elementSecond":"火","special":"犧牲連鎖強化","specialSecond":"犧牲連鎖強化","wikiNumber":"11044"}
							,
							{"id":"128","eventID":"23","event":"SUGARLESS BAMBINA Ⅱ Slaughter Prison","name":"獵獸修羅_綺露拉‧科泰勒","gender":"女","element":"雷光","elementSecond":"光","special":"提升能力數值(自身)","specialSecond":"問題類型爆破大魔術","wikiNumber":"11047"}
							,
							{"id":"129","eventID":"23","event":"SUGARLESS BAMBINA Ⅱ Slaughter Prison","name":"凶獄的導覽小姐_茜茜‧烏拉蕾","gender":"女","element":"水水","elementSecond":"水","special":"物理反擊（充填）","specialSecond":"物理反擊（充填）","wikiNumber":"11050"}
							,
							{"id":"130","eventID":"23","event":"SUGARLESS BAMBINA Ⅱ Slaughter Prison","name":"凶愛的純血女孩_瑪琪亞‧傑洛歇","gender":"女","element":"水水","elementSecond":"水","special":"提昇(自身)","specialSecond":"提昇(自身)","wikiNumber":"11053"}
							,
							{"id":"131","eventID":"23","event":"SUGARLESS BAMBINA Ⅱ Slaughter Prison","name":"狂熱的復仇者_帕絲帕茹‧席歐涅","gender":"女","element":"火火","elementSecond":"火","special":"AS特殊變化","specialSecond":"AS特殊變化","wikiNumber":"11056"}
							,
							{"id":"132","eventID":"23","event":"SUGARLESS BAMBINA Ⅱ Slaughter Prison","name":"狂爆無法少女_勒格茲‧方亭","gender":"女","element":"火雷","elementSecond":"雷","special":"變換問題類型","specialSecond":"統一變換問題類型【強化傷害】","wikiNumber":"11059"}
							,
							{"id":"133","eventID":"24","event":"FairyChord Prelude","name":"星夜中舞動的華劍光_拉米斯費蕾絲","gender":"女","element":"雷火","elementSecond":"火","special":"賦予雙重AS","specialSecond":"賦予雙重AS","wikiNumber":"11257"}
							,
							{"id":"134","eventID":"24","event":"FairyChord Prelude","name":"心手彈奏的聲響_鶴音理玲","gender":"女","element":"水雷","elementSecond":"雷","special":"犧牲連鎖強化","specialSecond":"犧牲連鎖強化","wikiNumber":"11258"}
							,
							{"id":"135","eventID":"24","event":"FairyChord Prelude","name":"古血之牙_紅鬼颯夜","gender":"男","element":"火火","elementSecond":"火","special":"提昇(自身)","specialSecond":"提昇(自身)","wikiNumber":"11259"}
							,
							{"id":"136","eventID":"25","event":"寄語冬夜的祈願者","name":"聖夜六花之沐_莉歐","gender":"女","element":"火光","elementSecond":"光","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"801517"}
							,
							{"id":"137","eventID":"25","event":"寄語冬夜的祈願者","name":"冬夜的紛紛雪花_弗蕾可","gender":"女","element":"水水","elementSecond":"水","special":"技能充填＆延遲(單體)","specialSecond":"技能充填＆延遲(單體)","wikiNumber":"801521"}
							,
							{"id":"138","eventID":"25","event":"寄語冬夜的祈願者","name":"熱呼呼的聖誕紅酒_黎庫芬","gender":"女","element":"雷雷","elementSecond":"雷","special":"反動大魔術‧蝕(全體)","specialSecond":"反動大魔術‧蝕(全體)","wikiNumber":"801523"}
							,
							{"id":"139","eventID":"25","event":"寄語冬夜的祈願者","name":"成為旋風的馴鷹者_加姆","gender":"男","element":"雷雷","elementSecond":"雷","special":"狂暴化","specialSecond":"自我犧牲魔術(單體)","wikiNumber":"801525"}
							,
							{"id":"140","eventID":"25","event":"寄語冬夜的祈願者","name":"吸食願望的惡魔_奈迦伊娜","gender":"女","element":"水闇","elementSecond":"闇","special":"解除效果大魔術(全體)【屬性吸收＆多層防護＆阻隔傷害】","specialSecond":"解除效果大魔術(全體)【屬性吸收＆多層防護＆阻隔傷害】","wikiNumber":"801527"}
							,
							{"id":"141","eventID":"26","event":"寄語冬夜的祈願者Ⅱ_虛妄之地的追尋者","name":"幸運的兔子腳_艾蕾諾","gender":"女","element":"雷水","elementSecond":"水","special":"防禦連鎖","specialSecond":"特殊變換問題類型【連鎖數增加】","wikiNumber":"801737"}
							,
							{"id":"142","eventID":"26","event":"寄語冬夜的祈願者Ⅱ_虛妄之地的追尋者","name":"有威嚴的鄉紳_蘭登","gender":"男","element":"雷光","elementSecond":"光","special":"連鎖解放大魔術","specialSecond":"連鎖解放大魔術","wikiNumber":"801739"}
							,
							{"id":"143","eventID":"26","event":"寄語冬夜的祈願者Ⅱ_虛妄之地的追尋者","name":"借鏡觀形_席安","gender":"女","element":"雷闇","elementSecond":"闇","special":"問題類型爆破大魔術","specialSecond":"問題類型爆破大魔術","wikiNumber":"801741"}
							,
							{"id":"144","eventID":"26","event":"寄語冬夜的祈願者Ⅱ_虛妄之地的追尋者","name":"皓月白鱗_艾丹","gender":"男","element":"水雷","elementSecond":"雷","special":"決鬥","specialSecond":"決鬥","wikiNumber":"801743"}
							,
							{"id":"145","eventID":"26","event":"寄語冬夜的祈願者Ⅱ_虛妄之地的追尋者","name":"乘風照夜_鈴芽","gender":"女","element":"火火","elementSecond":"火","special":"強化擊破","specialSecond":"強化擊破","wikiNumber":"801745"}
							,
							{"id":"146","eventID":"26","event":"寄語冬夜的祈願者Ⅱ_虛妄之地的追尋者","name":"遺落在虛妄之中_莉歐","gender":"女","element":"水闇","elementSecond":"闇","special":"AS特殊變化","specialSecond":"AS特殊變化","wikiNumber":"801747"}
							,
							{"id":"147","eventID":"27","event":"喰牙RIZE3 -Fang-O’-Blazer","name":"紅蓮血牙_雷迪厄斯‧利維斯","gender":"男","element":"火闇","elementSecond":"闇","special":"決鬥","specialSecond":"決鬥","wikiNumber":"10761"}
							,
							{"id":"148","eventID":"27","event":"喰牙RIZE3 -Fang-O’-Blazer","name":"幽玄劍狐_未羽‧和羅","gender":"男","element":"水光","elementSecond":"光","special":"大魔術(單體)","specialSecond":"大魔術(單體)","wikiNumber":"10764"}
							,
							{"id":"149","eventID":"27","event":"喰牙RIZE3 -Fang-O’-Blazer","name":"遊星燈華_舒菈‧立哈","gender":"女","element":"水水","elementSecond":"水","special":"捕食大魔術(單體)","specialSecond":"捕食大魔術(單體)","wikiNumber":"10767"}
							,
							{"id":"150","eventID":"27","event":"喰牙RIZE3 -Fang-O’-Blazer","name":"幽炎妖葬者_伊露莎‧拉","gender":"女","element":"雷闇","elementSecond":"闇","special":"回答時間停止","specialSecond":"回答時間停止","wikiNumber":"10770"}
							,
							{"id":"151","eventID":"27","event":"喰牙RIZE3 -Fang-O’-Blazer","name":"冥搜魔葬者_孚盧克‧拉","gender":"女","element":"火火","elementSecond":"火","special":"蓄積解放大魔術‧破(全體)","specialSecond":"蓄積解放大魔術‧破(全體)","wikiNumber":"10773"}
							,
							{"id":"152","eventID":"27","event":"喰牙RIZE3 -Fang-O’-Blazer","name":"驅魔聖言_尤維爾＆艾絲皮納","gender":"男女","element":"雷光","elementSecond":"光","special":"AS特殊變化","specialSecond":"AS特殊變化","wikiNumber":"10776"}
							,
							{"id":"153","eventID":"28","event":"喰牙RIZE3-外傳- 冥道死門的極境者","name":"亡魂戰神公主_希露蒂‧雷路爾","gender":"女","element":"水雷","elementSecond":"雷","special":"技能充填(相鄰)","specialSecond":"技能充填(相鄰)","wikiNumber":"10803"}
							,
							{"id":"154","eventID":"28","event":"喰牙RIZE3-外傳- 冥道死門的極境者","name":"虛幻與蛇謀的魔神_艾拉‧納爾維","gender":"女","element":"火火","elementSecond":"火","special":"捕食大魔術(單體)","specialSecond":"捕食大魔術(單體)","wikiNumber":"10806"}
							,
							{"id":"155","eventID":"28","event":"喰牙RIZE3-外傳- 冥道死門的極境者","name":"冥道死門的極境者_席德‧哈洛克","gender":"男","element":"雷闇","elementSecond":"闇","special":"大魔術(單體)","specialSecond":"大魔術(單體)","wikiNumber":"10809"}
							,
							{"id":"156","eventID":"29","event":"喰牙RIZE2_-Tearing_Eyes","name":"雙牙剛炎_雷迪厄斯‧利維斯","gender":"男","element":"火火","elementSecond":"火","special":"一閃斬擊大魔術","specialSecond":"一閃斬擊大魔術","wikiNumber":"8983"}
							,
							{"id":"157","eventID":"29","event":"喰牙RIZE2_-Tearing_Eyes","name":"不動烈閃_未羽‧和羅","gender":"男","element":"水水","elementSecond":"水","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"8986"}
							,
							{"id":"158","eventID":"29","event":"喰牙RIZE2_-Tearing_Eyes","name":"【噬號者】的祝福_舒菈‧立哈","gender":"女","element":"水雷","elementSecond":"雷","special":"回復異常狀態","specialSecond":"回復異常狀態","wikiNumber":"8989"}
							,
							{"id":"159","eventID":"29","event":"喰牙RIZE2_-Tearing_Eyes","name":"幽境的雙葬者_伊露莎＆孚盧克","gender":"女","element":"雷水","elementSecond":"水","special":"特殊變換問題類型【技能充填】","specialSecond":"特殊變換問題類型【技能充填】","wikiNumber":"8992"}
							,
							{"id":"160","eventID":"29","event":"喰牙RIZE2_-Tearing_Eyes","name":"禁忌的盡頭_尤維爾‧莎克拉里齊","gender":"男","element":"雷雷","elementSecond":"雷","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"8995"}
							,
							{"id":"161","eventID":"29","event":"喰牙RIZE2_-Tearing_Eyes","name":"神炎之瞳_艾絲皮納‧庫里烏","gender":"女","element":"火水","elementSecond":"水","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"8998"}
							,
							{"id":"162","eventID":"30","event":"喰牙RIZE","name":"烈火剛劍_雷迪厄斯‧利維斯","gender":"男","element":"火火","elementSecond":"火","special":"詠唱大魔術","specialSecond":"詠唱大魔術","wikiNumber":"10792"}
							,
							{"id":"163","eventID":"30","event":"喰牙RIZE","name":"烈刀激閃_未羽‧和羅","gender":"男","element":"水水","elementSecond":"水","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"10793"}
							,
							{"id":"164","eventID":"30","event":"喰牙RIZE","name":"繼承獠牙者_舒菈‧立哈","gender":"女","element":"雷雷","elementSecond":"雷","special":"弱化大魔術(單體)","specialSecond":"弱化大魔術(單體)","wikiNumber":"10794"}
							,
							{"id":"165","eventID":"30","event":"喰牙RIZE","name":"深切憐憫的喪葬者_伊露莎‧拉","gender":"女","element":"火水","elementSecond":"水","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"10795"}
							,
							{"id":"166","eventID":"30","event":"喰牙RIZE","name":"銘戒堅定的送死葬者_孚盧克‧拉","gender":"女","element":"水火","elementSecond":"火","special":"強化傷害(指定屬性)","specialSecond":"強化傷害(指定屬性)","wikiNumber":"10796"}
							,
							{"id":"167","eventID":"30","event":"喰牙RIZE","name":"Q彈綿軟神柔拳_噗古那‧馬卡","gender":"男","element":"雷火","elementSecond":"火","special":"強化精靈【強化傷害】","specialSecond":"強化精靈【強化傷害】","wikiNumber":"10797"}
							,
							{"id":"168","eventID":"31","event":"八百萬諸神祕聞4_沉眠京城的悠久之歌","name":"祈求平安的悠久之歌_尊音‧歌詠","gender":"女","element":"雷水","elementSecond":"水","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"8472"}
							,
							{"id":"169","eventID":"31","event":"八百萬諸神祕聞4_沉眠京城的悠久之歌","name":"天上照耀的月光_阿緹蜜西亞","gender":"女","element":"雷雷","elementSecond":"雷","special":"提昇(全體)","specialSecond":"提昇(全體)","wikiNumber":"8475"}
							,
							{"id":"170","eventID":"31","event":"八百萬諸神祕聞4_沉眠京城的悠久之歌","name":"水蛇纏繞的白浪龍膽_樁‧龍膽","gender":"女","element":"水光","elementSecond":"光","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"8478"}
							,
							{"id":"171","eventID":"31","event":"八百萬諸神祕聞4_沉眠京城的悠久之歌","name":"呼喚天運的炎獅子_葉月‧夢語","gender":"女","element":"火火","elementSecond":"火","special":"純屬性強化","specialSecond":"純屬性強化","wikiNumber":"8481"}
							,
							{"id":"172","eventID":"31","event":"八百萬諸神祕聞4_沉眠京城的悠久之歌","name":"化鬼亦斬鬼_久馬＆風治","gender":"男","element":"水水","elementSecond":"水","special":"多重魔術(全體)","specialSecond":"多重魔術(全體)","wikiNumber":"8484"}
							,
							{"id":"173","eventID":"31","event":"八百萬諸神祕聞4_沉眠京城的悠久之歌","name":"五星方陣大成祈禱_統真＆桐繪","gender":"男女","element":"火水","elementSecond":"水","special":"強化精靈【強化傷害】","specialSecond":"強化精靈【強化傷害】","wikiNumber":"8487"}
							,
							{"id":"174","eventID":"32","event":"YAOYORO_Z","name":"妝點美夢的和歌之神_尊音‧歌詠","gender":"女","element":"水光","elementSecond":"光","special":"弱化大魔術(全體)","specialSecond":"弱化大魔術(全體)","wikiNumber":"8536"}
							,
							{"id":"175","eventID":"32","event":"YAOYORO_Z","name":"回歸原點的不盡之焰_蘇芳‧迦具土","gender":"男","element":"火水","elementSecond":"水","special":"變換問題類型","specialSecond":"刪去回答","wikiNumber":"8537"}
							,
							{"id":"176","eventID":"32","event":"YAOYORO_Z","name":"沉靜而勇猛的荒海神_靜‧白波","gender":"男","element":"水火","elementSecond":"火","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"8538"}
							,
							{"id":"177","eventID":"32","event":"YAOYORO_Z","name":"突擊糖果神_瑪莉娜‧畢弗羅斯","gender":"女","element":"雷雷","elementSecond":"雷","special":"防禦","specialSecond":"提升能力數值(全體)","wikiNumber":"8539"}
							,
							{"id":"178","eventID":"32","event":"YAOYORO_Z","name":"其乃異國的指標_傑斯洛‧夸特里","gender":"男","element":"雷火","elementSecond":"火","special":"提昇(全體)","specialSecond":"提昇(全體)","wikiNumber":"8540"}
							,
							{"id":"179","eventID":"32","event":"YAOYORO_Z","name":"異國風情與艷麗的變化譚","gender":"女","element":"水雷","elementSecond":"雷","special":"物理反擊(多段式反擊)","specialSecond":"物理反擊(多段式反擊)","wikiNumber":"8541"}
							,
							{"id":"180","eventID":"32","event":"YAOYORO_Z","name":"三神駕到_八百萬Z","gender":"男女","element":"火火","elementSecond":"火","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"8542"}
							,
							{"id":"181","eventID":"33","event":"八百萬諸神祕聞2","name":"牡丹打盹的夕月夜_尊音・歌詠","gender":"女","element":"雷水","elementSecond":"水","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"10749"}
							,
							{"id":"182","eventID":"33","event":"八百萬諸神祕聞2","name":"海風緩緩流逝_靜＆蘇芳","gender":"男","element":"水火","elementSecond":"火","special":"犧牲魔術(單體)","specialSecond":"犧牲魔術(單體)","wikiNumber":"10750"}
							,
							{"id":"183","eventID":"33","event":"八百萬諸神祕聞2","name":"神獸疾走的痕跡_艾德華＆梅莉艾兒","gender":"女","element":"雷水","elementSecond":"水","special":"變換問題類型","specialSecond":"特殊變換問題類型【減輕傷害】","wikiNumber":"10751"}
							,
							{"id":"184","eventID":"33","event":"八百萬諸神祕聞2","name":"妝點潮汐的月之音_月詠・音江雛","gender":"女","element":"火水","elementSecond":"水","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"10752"}
							,
							{"id":"185","eventID":"33","event":"八百萬諸神祕聞2","name":"到達尋求的聲音_木葉・依姬","gender":"女","element":"水火","elementSecond":"火","special":"特殊變換問題類型【連鎖數增加＆技能充填】","specialSecond":"特殊變換問題類型【連鎖數增加＆技能充填】","wikiNumber":"10753"}
							,
							{"id":"186","eventID":"34","event":"八百萬諸神祕聞","name":"盛開於春霞中的花之歌_尊音・歌詠","gender":"女","element":"雷火","elementSecond":"火","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"8526"}
							,
							{"id":"187","eventID":"34","event":"八百萬諸神祕聞","name":"猛燒不盡的焰嶺_蘇芳・迦具土","gender":"男","element":"火光","elementSecond":"光","special":"阻隔傷害","specialSecond":"阻隔傷害","wikiNumber":"8527"}
							,
							{"id":"188","eventID":"34","event":"八百萬諸神祕聞","name":"靜靜迴響的海鳴_靜・白波","gender":"男","element":"水火","elementSecond":"火","special":"技能充填＆延遲(單體)","specialSecond":"延遲(單體)","wikiNumber":"8528"}
							,
							{"id":"189","eventID":"34","event":"八百萬諸神祕聞","name":"貫穿心的正中央_真都斐・那毘佐古","gender":"女","element":"水水","elementSecond":"水","special":"特殊變換問題類型【連鎖數增加】","specialSecond":"特殊變換問題類型【連鎖數增加】","wikiNumber":"8529"}
							,
							{"id":"190","eventID":"34","event":"八百萬諸神祕聞","name":"光芒閃耀的金鋼金華_登美・言壽","gender":"女","element":"雷雷","elementSecond":"雷","special":"起死回生","specialSecond":"起死回生","wikiNumber":"8530"}
							,
							{"id":"191","eventID":"35","event":"豔夏濱海大騷動","name":"神奇魔法大海豹_爽子","gender":"女","element":"水光","elementSecond":"光","special":"融合強化","specialSecond":"融合強化","wikiNumber":"801693"}
							,
							{"id":"192","eventID":"35","event":"豔夏濱海大騷動","name":"輸贏企鵝_潘庫茵","gender":"女","element":"火雷","elementSecond":"雷","special":"毒","specialSecond":"毒","wikiNumber":"801695"}
							,
							{"id":"193","eventID":"35","event":"豔夏濱海大騷動","name":"超音速掠食者_雀尾","gender":"女","element":"水火","elementSecond":"火","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"801697"}
							,
							{"id":"194","eventID":"35","event":"豔夏濱海大騷動","name":"回憶中的擁抱_山吹","gender":"女","element":"火光","elementSecond":"光","special":"激化大魔術","specialSecond":"激化大魔術","wikiNumber":"801699"}
							,
							{"id":"195","eventID":"35","event":"豔夏濱海大騷動","name":"海邊遊樂專家_里維","gender":"男","element":"雷光","elementSecond":"光","special":"提昇(相鄰)","specialSecond":"提昇(相鄰)","wikiNumber":"801701"}
							,
							{"id":"196","eventID":"36","event":"Birth Of New Order2 大罪","name":"響徹天明的真理_流昂‧特拉姆","gender":"男","element":"水水","elementSecond":"水","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"10664"}
							,
							{"id":"197","eventID":"36","event":"Birth Of New Order2 大罪","name":"擊落破曉的赤紅之星_伊絲卡‧尼爾瓦","gender":"女","element":"雷雷","elementSecond":"雷","special":"蓄積解放大魔術‧破(全體)","specialSecond":"蓄積解放大魔術‧破(全體)","wikiNumber":"10667"}
							,
							{"id":"198","eventID":"36","event":"Birth Of New Order2 大罪","name":"在忘我的盡頭_拉夏‧路茨斯","gender":"女","element":"水水","elementSecond":"水","special":"變換問題類型","specialSecond":"純屬性變換問題類型【技能充填】","wikiNumber":"10670"}
							,
							{"id":"199","eventID":"36","event":"Birth Of New Order2 大罪","name":"在光輝之影中行動_西里士‧埃洛奇亞","gender":"男","element":"火光","elementSecond":"光","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"10673"}
							,
							{"id":"200","eventID":"36","event":"Birth Of New Order2 大罪","name":"被邪惡所祝福的少女_梅爾泰‧尼瑟","gender":"女","element":"雷水","elementSecond":"水","special":"詠唱大魔術","specialSecond":"詠唱大魔術","wikiNumber":"10676"}
							,
							{"id":"201","eventID":"36","event":"Birth Of New Order2 大罪","name":"無法被饒恕的大罪_克羅什‧特勞","gender":"男","element":"火火","elementSecond":"火","special":"賦予雙重技能(全體)","specialSecond":"賦予雙重技能(全體)","wikiNumber":"10679"}
							,
							{"id":"202","eventID":"37","event":"Birth Of New Order","name":"執行騎士團長_流昂‧特拉姆","gender":"男","element":"水光","elementSecond":"光","special":"蓄積解放大魔術‧聖(全體)","specialSecond":"蓄積解放大魔術‧聖(全體)","wikiNumber":"9976"}
							,
							{"id":"203","eventID":"37","event":"Birth Of New Order","name":"執行騎士監察人_西里士‧埃洛奇亞","gender":"男","element":"火光","elementSecond":"光","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"9979"}
							,
							{"id":"204","eventID":"37","event":"Birth Of New Order","name":"執行騎士副團長_拉夏‧路茨斯","gender":"女","element":"雷光","elementSecond":"光","special":"強化擊破","specialSecond":"強化擊破","wikiNumber":"9982"}
							,
							{"id":"205","eventID":"37","event":"Birth Of New Order","name":"新希望_伊絲卡‧尼爾瓦","gender":"女","element":"火闇","elementSecond":"闇","special":"蓄積解放大魔術‧邪(全體)","specialSecond":"蓄積解放大魔術‧邪(全體)","wikiNumber":"9985"}
							,
							{"id":"206","eventID":"37","event":"Birth Of New Order","name":"泰塔納斯的鐵鎚_梅爾泰‧尼瑟","gender":"女","element":"水闇","elementSecond":"闇","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"9988"}
							,
							{"id":"207","eventID":"37","event":"Birth Of New Order","name":"手握牙大劍的劍士_克羅什‧特勞","gender":"男","element":"雷闇","elementSecond":"闇","special":"技能充填(單體)","specialSecond":"技能充填(單體)","wikiNumber":"9991"}
							,
							{"id":"208","eventID":"38","event":"黑貓維茲 仲夏感謝季2019","name":"野心奔騰的黑劍 艾盧多貝里克‧哥德","gender":"男","element":"火火","elementSecond":"火","special":"弱化大魔術(單體)","specialSecond":"弱化大魔術(單體)","wikiNumber":"10547"}
							,
							{"id":"209","eventID":"38","event":"黑貓維茲 仲夏感謝季2019","name":"審判獸的血之習性 伊絲卡‧尼爾瓦","gender":"女","element":"火闇","elementSecond":"闇","special":"AS特殊變化","specialSecond":"AS特殊變化","wikiNumber":"10550"}
							,
							{"id":"210","eventID":"38","event":"黑貓維茲 仲夏感謝季2019","name":"執行騎士的誕生 流昂‧特拉姆","gender":"男","element":"火光","elementSecond":"光","special":"回答時間停止","specialSecond":"回答時間停止","wikiNumber":"10553"}
							,
							{"id":"211","eventID":"38","event":"黑貓維茲 仲夏感謝季2019","name":"這就是你的回答喵 騙子貓維茲","gender":"男女","element":"水火","elementSecond":"火","special":"變換問題類型","specialSecond":"融合變換問題類型【技能充填】","wikiNumber":"10556"}
							,
							{"id":"212","eventID":"38","event":"黑貓維茲 仲夏感謝季2019","name":"宇宙反詰 莉露姆‧洛洛特","gender":"女","element":"雷雷","elementSecond":"雷","special":"問題類型爆破大魔術","specialSecond":"問題類型爆破大魔術","wikiNumber":"10538"}
							,
							{"id":"213","eventID":"38","event":"黑貓維茲 仲夏感謝季2019","name":"將軍 迪特利希‧貝爾克","gender":"男","element":"雷闇","elementSecond":"闇","special":"蓄積解放大魔術‧邪(單體)","specialSecond":"蓄積解放大魔術‧邪(單體)","wikiNumber":"10541"}
							,
							{"id":"214","eventID":"38","event":"黑貓維茲 仲夏感謝季2019","name":"星之聖女 克蕾緹雅‧布萊葉","gender":"女","element":"水光","elementSecond":"光","special":"蓄積解放大魔術‧聖(單體)","specialSecond":"蓄積解放大魔術‧聖(單體)","wikiNumber":"10544"}
							,
							{"id":"215","eventID":"39","event":"黃昏無夢者Ⅳ 黃昏mareless","name":"黃昏無夢者_桑榭特‧莉菲爾","gender":"女","element":"雷光","elementSecond":"光","special":"蓄積解放大魔術‧聖(全體)","specialSecond":"蓄積解放大魔術‧聖(全體)","wikiNumber":"10068"}
							,
							{"id":"216","eventID":"39","event":"黃昏無夢者Ⅳ 黃昏mareless","name":"流星飛蝶_甘多納‧瑠璃揚羽","gender":"女","element":"水光","elementSecond":"光","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"10071"}
							,
							{"id":"217","eventID":"39","event":"黃昏無夢者Ⅳ 黃昏mareless","name":"血火咆哮_戴特梅爾‧拉吉特","gender":"男","element":"水闇","elementSecond":"闇","special":"蓄積解放大魔術‧邪(全體)","specialSecond":"蓄積解放大魔術‧邪(全體)","wikiNumber":"10074"}
							,
							{"id":"218","eventID":"39","event":"黃昏無夢者Ⅳ 黃昏mareless","name":"激輪雙旋_維爾萊特‧雷吉","gender":"男","element":"火水","elementSecond":"水","special":"變換問題類型","specialSecond":"統一變換問題類型【強化傷害】","wikiNumber":"10077"}
							,
							{"id":"219","eventID":"39","event":"黃昏無夢者Ⅳ 黃昏mareless","name":"劍光無盡_傑拉德＆蔻比修","gender":"男女","element":"雷闇","elementSecond":"闇","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"10080"}
							,
							{"id":"220","eventID":"39","event":"黃昏無夢者Ⅳ 黃昏mareless","name":"戰鳥裂帛_沃布林格‧蜜莉","gender":"女","element":"火雷","elementSecond":"雷","special":"多重魔術(單體)","specialSecond":"激化大魔術","wikiNumber":"10083"}
							,
							{"id":"221","eventID":"40","event":"黃昏無夢者Ⅲ_絡園loreless","name":"黃昏的旅途_桑榭特‧莉菲爾","gender":"女","element":"雷雷","elementSecond":"雷","special":"炸裂大魔術","specialSecond":"炸裂大魔術","wikiNumber":"11179"}
							,
							{"id":"222","eventID":"40","event":"黃昏無夢者Ⅲ_絡園loreless","name":"雙蝶之夢_甘多納‧瑠璃揚羽","gender":"女","element":"雷雷","elementSecond":"雷","special":"純屬性大魔術(全體)","specialSecond":"純屬性大魔術(全體)","wikiNumber":"11180"}
							,
							{"id":"223","eventID":"40","event":"黃昏無夢者Ⅲ_絡園loreless","name":"飛鳥放吟_沃布林格‧蜜莉","gender":"女","element":"火光","elementSecond":"光","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"11181"}
							,
							{"id":"224","eventID":"40","event":"黃昏無夢者Ⅲ_絡園loreless","name":"心願之刃_緹亞萊薩‧蔻比修","gender":"女","element":"水光","elementSecond":"光","special":"強化精靈【持續回復＆異常狀態失效】","specialSecond":"強化精靈【持續回復＆強化傷害＆異常狀態失效】","wikiNumber":"11182"}
							,
							{"id":"225","eventID":"40","event":"黃昏無夢者Ⅲ_絡園loreless","name":"暴風之刃_艾吉瓦司‧傑拉德","gender":"男","element":"火闇","elementSecond":"闇","special":"技能充填(單體)","specialSecond":"技能充填(單體)","wikiNumber":"11183"}
							,
							{"id":"226","eventID":"40","event":"黃昏無夢者Ⅲ_絡園loreless","name":"夢咎人_戴特梅爾‧拉吉特","gender":"男","element":"火雷","elementSecond":"雷","special":"狂暴化","specialSecond":"多重魔術(單體)","wikiNumber":"11184"}
							,
							{"id":"227","eventID":"40","event":"黃昏無夢者Ⅲ_絡園loreless","name":"戰輪疾走_維爾萊特‧雷吉","gender":"男","element":"水水","elementSecond":"水","special":"純屬性強化","specialSecond":"純屬性強化","wikiNumber":"11185"}
							,
							{"id":"228","eventID":"41","event":"黃昏無夢者Ⅱ 殘響dearless","name":"綻放於黃昏之花_桑榭特‧莉菲爾","gender":"女","element":"水雷","elementSecond":"雷","special":"提升能力數值(全體)","specialSecond":"提昇(全體)","wikiNumber":"10524"}
							,
							{"id":"229","eventID":"41","event":"黃昏無夢者Ⅱ 殘響dearless","name":"刀火武雙_甘多納‧瑠璃揚羽","gender":"女","element":"雷雷","elementSecond":"雷","special":"弱化大魔術(全體)","specialSecond":"弱化大魔術(全體)","wikiNumber":"10525"}
							,
							{"id":"230","eventID":"41","event":"黃昏無夢者Ⅱ 殘響dearless","name":"罪咎之鎖_戴特梅爾‧拉吉特","gender":"男","element":"水水","elementSecond":"水","special":"時限大魔術","specialSecond":"時限大魔術","wikiNumber":"10526"}
							,
							{"id":"231","eventID":"41","event":"黃昏無夢者Ⅱ 殘響dearless","name":"劍之境界_艾吉瓦司‧傑拉德","gender":"男","element":"火火","elementSecond":"火","special":"反動大魔術‧蝕(單體)","specialSecond":"反動大魔術‧蝕(單體)","wikiNumber":"10527"}
							,
							{"id":"232","eventID":"41","event":"黃昏無夢者Ⅱ 殘響dearless","name":"無我玉響_緹亞萊薩‧蔻比修","gender":"女","element":"水火","elementSecond":"火","special":"技能充填(全體)","specialSecond":"技能充填(全體)","wikiNumber":"10528"}
							,
							{"id":"233","eventID":"41","event":"黃昏無夢者Ⅱ 殘響dearless","name":"機哭啾啾_沃布林格‧蜜莉","gender":"女","element":"火雷","elementSecond":"雷","special":"斬擊大魔術","specialSecond":"多重魔術(單體)","wikiNumber":"10529"}
							,
							{"id":"234","eventID":"41","event":"黃昏無夢者Ⅱ 殘響dearless","name":"魂之戰火_維爾萊特‧雷吉","gender":"男","element":"雷火","elementSecond":"火","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"10530"}
							,
							{"id":"235","eventID":"42","event":"黃昏無夢者","name":"黃昏魔導_桑榭特‧莉菲爾","gender":"女","element":"雷火","elementSecond":"火","special":"特殊變換問題類型【技能充填】","specialSecond":"特殊變換問題類型【技能充填】","wikiNumber":"11535"}
							,
							{"id":"236","eventID":"42","event":"黃昏無夢者","name":"墜星銃姬_甘多納‧瑠璃揚羽","gender":"女","element":"水水","elementSecond":"水","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"11536"}
							,
							{"id":"237","eventID":"42","event":"黃昏無夢者","name":"虛幻之夢的爪痕_戴特梅爾‧拉吉特","gender":"男","element":"火闇","elementSecond":"闇","special":"技能充填＆延遲(單體)","specialSecond":"技能充填＆延遲(單體)","wikiNumber":"11537"}
							,
							{"id":"238","eventID":"42","event":"黃昏無夢者","name":"戰鬥天賦_沃布林格‧蜜莉","gender":"女","element":"火火","elementSecond":"火","special":"反動大魔術(全體)","specialSecond":"反動大魔術(全體)","wikiNumber":"11538"}
							,
							{"id":"239","eventID":"42","event":"黃昏無夢者","name":"無窮的劍業_傑拉德&蔻比修","gender":"男女","element":"水火","elementSecond":"火","special":"變換問題類型","specialSecond":"特殊變換問題類型【隨機】","wikiNumber":"11539"}
							,
							{"id":"240","eventID":"43","event":"霸眼戰線 終戰之凜煌眼 -前篇","name":"凜煌眼‧穿梭的羈絆_麗維塔‧伊蕾","gender":"女","element":"火火","elementSecond":"火","special":"保留問題類型【連鎖數增加】","specialSecond":"保留問題類型【連鎖數增加】","wikiNumber":"11457"}
							,
							{"id":"241","eventID":"43","event":"霸眼戰線 終戰之凜煌眼 -前篇","name":"凜煌眼‧甦醒的覺悟_路德維嘉‧羅亞","gender":"女","element":"水水","elementSecond":"水","special":"強化精靈【持續回復＆減輕傷害＆提升能力數值】","specialSecond":"強化精靈【持續回復＆減輕傷害＆提升能力數值】","wikiNumber":"11460"}
							,
							{"id":"242","eventID":"43","event":"霸眼戰線 終戰之凜煌眼 -前篇","name":"新一代劍聖_阿斯塔‧拉德","gender":"男","element":"雷雷","elementSecond":"雷","special":"蓄積解放大魔術‧聖(全體)","specialSecond":"蓄積解放大魔術‧聖(全體)","wikiNumber":"11463"}
							,
							{"id":"243","eventID":"43","event":"霸眼戰線 終戰之凜煌眼 -前篇","name":"冥界女王的聖弓士_歐莉安奴‧路嘉","gender":"女","element":"水雷","elementSecond":"雷","special":"鐵壁‧極","specialSecond":"鐵壁‧極","wikiNumber":"11466"}
							,
							{"id":"244","eventID":"43","event":"霸眼戰線 終戰之凜煌眼 -前篇","name":"追逐劍聖的蹤跡_阿里歐特斯‧葛","gender":"男","element":"火火","elementSecond":"火","special":"特殊變換問題類型【連鎖數增加＆技能充填】","specialSecond":"特殊變換問題類型【連鎖數增加＆技能充填】","wikiNumber":"11469"}
							,
							{"id":"245","eventID":"43","event":"霸眼戰線 終戰之凜煌眼 -前篇","name":"覺醒的冥界之王_卡農","gender":"女","element":"雷闇","elementSecond":"闇","special":"蓄積解放大魔術‧印(全體)","specialSecond":"蓄積解放大魔術‧印(全體)","wikiNumber":"11472"}
							,
							{"id":"246","eventID":"44","event":"霸眼戰線4 覺醒之王","name":"將原初照亮之霸眼_阿里歐特斯‧葛","gender":"男","element":"火闇","elementSecond":"闇","special":"融合大魔術(單體)","specialSecond":"融合大魔術(單體)","wikiNumber":"10453"}
							,
							{"id":"247","eventID":"44","event":"霸眼戰線4 覺醒之王","name":"昏眼與惺眼_阿斯塔＆露米雅","gender":"男女","element":"雷光","elementSecond":"光","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"10456"}
							,
							{"id":"248","eventID":"44","event":"霸眼戰線4 覺醒之王","name":"礫滅之處決鐮_哈克亞‧德斯賽斯","gender":"女","element":"水闇","elementSecond":"闇","special":"蓄積解放大魔術‧邪(單體)","specialSecond":"蓄積解放大魔術‧邪(單體)","wikiNumber":"10459"}
							,
							{"id":"249","eventID":"44","event":"霸眼戰線4 覺醒之王","name":"新劍聖王_亞瑟‧卡美洛","gender":"男","element":"雷雷","elementSecond":"雷","special":"弱化大魔術(單體)","specialSecond":"弱化大魔術(單體)","wikiNumber":"10462"}
							,
							{"id":"250","eventID":"44","event":"霸眼戰線4 覺醒之王","name":"宿業之烈眼繼承_歐莉安奴‧路嘉","gender":"女","element":"水水","elementSecond":"水","special":"問題類型爆破大魔術","specialSecond":"問題類型爆破大魔術","wikiNumber":"10465"}
							,
							{"id":"251","eventID":"44","event":"霸眼戰線4 覺醒之王","name":"扶持著三隻眼_希瑞爾‧諾特","gender":"女","element":"火光","elementSecond":"光","special":"特殊變換問題類型【強化傷害】","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"10468"}
							,
							{"id":"252","eventID":"45","event":"霸眼戰線3 聖劍與霸眼","name":"終結戰亂的煌眼_麗維塔‧伊蕾","gender":"女","element":"火光","elementSecond":"光","special":"強化複屬性傷害","specialSecond":"強化複屬性傷害","wikiNumber":"11494"}
							,
							{"id":"253","eventID":"45","event":"霸眼戰線3 聖劍與霸眼","name":"亂世至強的凜眼_路德維嘉‧羅亞","gender":"女","element":"水光","elementSecond":"光","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"11495"}
							,
							{"id":"254","eventID":"45","event":"霸眼戰線3 聖劍與霸眼","name":"追尋惺眼的行蹤_阿斯塔‧拉德","gender":"男","element":"水水","elementSecond":"水","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"11496"}
							,
							{"id":"255","eventID":"45","event":"霸眼戰線3 聖劍與霸眼","name":"阿拉弗特族的女王_希瑞爾‧諾特","gender":"女","element":"雷光","elementSecond":"光","special":"強化精靈【持續回復＆減輕傷害＆強化傷害】","specialSecond":"強化精靈【持續回復＆減輕傷害＆強化傷害】","wikiNumber":"11497"}
							,
							{"id":"256","eventID":"45","event":"霸眼戰線3 聖劍與霸眼","name":"貫穿天命的霸吼劍_邁亞‧斯迪爾馬","gender":"女","element":"火火","elementSecond":"火","special":"特殊變換問題類型【減輕傷害＆回復】","specialSecond":"特殊變換問題類型【減輕傷害＆回復】","wikiNumber":"11498"}
							,
							{"id":"257","eventID":"45","event":"霸眼戰線3 聖劍與霸眼","name":"信義與未來的霸眼_阿里歐特斯‧葛","gender":"男","element":"雷闇","elementSecond":"闇","special":"物理反擊","specialSecond":"物理反擊","wikiNumber":"11499"}
							,
							{"id":"258","eventID":"45","event":"霸眼戰線3 聖劍與霸眼","name":"覺醒的霸眼_麗維塔＆路德維嘉","gender":"女","element":"水火","elementSecond":"火","special":"提昇(自身)","specialSecond":"提升能力數值(自身)","wikiNumber":"11500"}
							,
							{"id":"259","eventID":"46","event":"霸眼戰線2 起始之眼","name":"煌眼乃勝利指標_麗維塔‧伊蕾","gender":"女","element":"火火","elementSecond":"火","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"10592"}
							,
							{"id":"260","eventID":"46","event":"霸眼戰線2 起始之眼","name":"寄宿於凜眼中的霸道_路德維嘉‧羅亞","gender":"女","element":"水火","elementSecond":"火","special":"技能充填＆延遲(單體)","specialSecond":"技能充填＆延遲(單體)","wikiNumber":"10593"}
							,
							{"id":"261","eventID":"46","event":"霸眼戰線2 起始之眼","name":"瘋狂與怨恨的魔刃_銀河‧卡農","gender":"女","element":"雷闇","elementSecond":"闇","special":"提昇(全體)","specialSecond":"提昇(全體)","wikiNumber":"10594"}
							,
							{"id":"262","eventID":"46","event":"霸眼戰線2 起始之眼","name":"罪孽隨慘禍而逝_哈克亞‧德斯賽斯","gender":"女","element":"水闇","elementSecond":"闇","special":"比例削減(單體)","specialSecond":"比例削減(單體)","wikiNumber":"10595"}
							,
							{"id":"263","eventID":"46","event":"霸眼戰線2 起始之眼","name":"兩雙眼眸的守護者_希瑞爾‧諾特","gender":"女","element":"雷火","elementSecond":"火","special":"持續回復","specialSecond":"回復異常狀態＆復活","wikiNumber":"10596"}
							,
							{"id":"264","eventID":"46","event":"霸眼戰線2 起始之眼","name":"守護與定罪的昏眼_阿斯塔‧拉德","gender":"男","element":"火火","elementSecond":"火","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"10597"}
							,
							{"id":"265","eventID":"47","event":"霸眼戰線","name":"協助煌眼的左右手_吉米‧戴維斯","gender":"男","element":"火水","elementSecond":"水","special":"延長AS時間限制","specialSecond":"技能充填(全體)","wikiNumber":"10492"}
							,
							{"id":"266","eventID":"47","event":"霸眼戰線","name":"煌流星的砲擊貓_剛多‧基吉萊","gender":"男","element":"水火","elementSecond":"火","special":"刪去回答","specialSecond":"刪去回答","wikiNumber":"10493"}
							,
							{"id":"267","eventID":"47","event":"霸眼戰線","name":"煌炎的白銀狐_嘉露蒂海菈‧亞爾巴","gender":"女","element":"火火","elementSecond":"火","special":"持續回復","specialSecond":"強化傷害(自身)","wikiNumber":"10494"}
							,
							{"id":"268","eventID":"47","event":"霸眼戰線","name":"迅雷的煌絕劍_雅瑪佳德‧姬石榴","gender":"女","element":"雷水","elementSecond":"水","special":"回復","specialSecond":"回復異常狀態","wikiNumber":"10495"}
							,
							{"id":"269","eventID":"48","event":"神都匹卡雷斯克&機械與少女Ⅱ","name":"白貌之獸 埃雅露姆‧阿多拉","gender":"女","element":"火雷","elementSecond":"雷","special":"詠唱大魔術","specialSecond":"詠唱大魔術","wikiNumber":"10645"}
							,
							{"id":"270","eventID":"48","event":"神都匹卡雷斯克&機械與少女Ⅱ","name":"悲哀的機巧兵 菲歐爾‧德雷曼","gender":"女","element":"水光","elementSecond":"光","special":"AS特殊變化","specialSecond":"AS特殊變化","wikiNumber":"10648"}
							,
							{"id":"271","eventID":"48","event":"神都匹卡雷斯克&機械與少女Ⅱ","name":"戰場的夢想家 歐魯特斯‧邦特","gender":"男","element":"雷火","elementSecond":"火","special":"強化複屬性傷害","specialSecond":"提昇(全體)","wikiNumber":"10642"}
							,
							{"id":"272","eventID":"48","event":"神都匹卡雷斯克&機械與少女Ⅱ","name":"復仇的女義賊 桃花","gender":"女","element":"火火","elementSecond":"火","special":"變換問題類型","specialSecond":"純屬性變換問題類型【技能充填】","wikiNumber":"11662"}
							,
							{"id":"273","eventID":"48","event":"神都匹卡雷斯克&機械與少女Ⅱ","name":"偷竊的美學 迦斯帕‧阿爾尼克","gender":"男","element":"水水","elementSecond":"水","special":"賦予雙重技能(全體)","specialSecond":"賦予雙重技能(全體)","wikiNumber":"11661"}
							,
							{"id":"274","eventID":"48","event":"神都匹卡雷斯克&機械與少女Ⅱ","name":"偷到的人就贏 凱涅斯‧哈瓦","gender":"男","element":"雷雷","elementSecond":"雷","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"11660"}
							,
							{"id":"275","eventID":"49","event":"庫耶斯式拍拖約會","name":"簡單的戀愛_奧菲莉亞","gender":"女","element":"水光","elementSecond":"光","special":"變換問題類型","specialSecond":"統一變換問題類型【強化傷害】","wikiNumber":"801650"}
							,
							{"id":"276","eventID":"49","event":"庫耶斯式拍拖約會","name":"明鏡照形_席恩","gender":"男","element":"雷水","elementSecond":"水","special":"激化大魔術","specialSecond":"激化大魔術","wikiNumber":"801652"}
							,
							{"id":"277","eventID":"49","event":"庫耶斯式拍拖約會","name":"拋出蘋果的邀約_格萊恩","gender":"男","element":"火雷","elementSecond":"雷","special":"防禦連鎖","specialSecond":"防禦連鎖","wikiNumber":"801656"}
							,
							{"id":"278","eventID":"49","event":"庫耶斯式拍拖約會","name":"活潑熱鬧柳穿魚_波琳","gender":"女","element":"火火","elementSecond":"火","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"801658"}
							,
							{"id":"279","eventID":"49","event":"庫耶斯式拍拖約會","name":"遊走情場的玫瑰王子_迦瑪","gender":"男","element":"雷光","elementSecond":"光","special":"回復異常狀態","specialSecond":"回復異常狀態＆復活","wikiNumber":"801660"}
							,
							{"id":"280","eventID":"50","event":"神聖天空之星3","name":"妝點天空的許願星_克蕾緹雅‧布萊葉","gender":"女","element":"水水","elementSecond":"水","special":"弱化大魔術(單體)","specialSecond":"弱化大魔術(單體)","wikiNumber":"10369"}
							,
							{"id":"281","eventID":"50","event":"神聖天空之星3","name":"夏天的惡作劇_普莉菲卡‧朗克斯塔","gender":"女","element":"雷闇","elementSecond":"闇","special":"特殊變換問題類型【強化傷害】","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"10372"}
							,
							{"id":"282","eventID":"50","event":"神聖天空之星3","name":"和夏天嬉戲的賢神_莉塔‧班尼斯特","gender":"女","element":"雷雷","elementSecond":"雷","special":"純屬性強化","specialSecond":"純屬性強化","wikiNumber":"10375"}
							,
							{"id":"283","eventID":"50","event":"神聖天空之星3","name":"閃耀夏日的戀天使_瑪格莉特‧麗兒","gender":"女","element":"火水","elementSecond":"水","special":"變換問題類型","specialSecond":"融合變換問題類型【技能充填】","wikiNumber":"10378"}
							,
							{"id":"284","eventID":"50","event":"神聖天空之星3","name":"智慧有如大海_諾因‧凱拉","gender":"女","element":"火火","elementSecond":"火","special":"捕食大魔術(全體)","specialSecond":"捕食大魔術(全體)","wikiNumber":"10381"}
							,
							{"id":"285","eventID":"50","event":"神聖天空之星3","name":"常夏禁忌果實_伊芙‧佛克羅爾","gender":"女","element":"水光","elementSecond":"光","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"10384"}
							,
							{"id":"286","eventID":"51","event":"神聖天空之星2","name":"為聖夜獻上祝福_克蕾緹雅‧布萊葉","gender":"女","element":"火水","elementSecond":"水","special":"融合強化","specialSecond":"融合強化","wikiNumber":"9506"}
							,
							{"id":"287","eventID":"51","event":"神聖天空之星2","name":"聖與邪_普莉菲卡‧朗克斯塔","gender":"女","element":"水闇","elementSecond":"闇","special":"強化擊破","specialSecond":"強化擊破","wikiNumber":"9509"}
							,
							{"id":"288","eventID":"51","event":"神聖天空之星2","name":"慧眼無雙的大賢者_諾因‧凱拉","gender":"女","element":"雷雷","elementSecond":"雷","special":"大魔術(單體)","specialSecond":"大魔術(單體)","wikiNumber":"9512"}
							,
							{"id":"289","eventID":"51","event":"神聖天空之星2","name":"獻給你_克蕾緹雅＆普莉菲卡","gender":"女","element":"水火","elementSecond":"火","special":"融合大魔術(全體)","specialSecond":"融合大魔術(全體)","wikiNumber":"9514"}
							,
							{"id":"290","eventID":"51","event":"神聖天空之星2","name":"在聖夜獻上聖女的歌聲_索拉娜＆光","gender":"女","element":"雷光","elementSecond":"光","special":"行動感應","specialSecond":"行動感應","wikiNumber":"9517"}
							,
							{"id":"291","eventID":"51","event":"神聖天空之星2","name":"武鬥熱血派_瑪格莉特＆莉亞菈","gender":"女","element":"火雷","elementSecond":"雷","special":"詠唱多重大魔術","specialSecond":"詠唱多重大魔術","wikiNumber":"9520"}
							,
							{"id":"292","eventID":"52","event":"神聖天空之星","name":"俯瞰眾星的大賢_諾因‧凱拉","gender":"女","element":"雷雷","elementSecond":"雷","special":"時限大魔術","specialSecond":"時限大魔術","wikiNumber":"801488"}
							,
							{"id":"293","eventID":"52","event":"神聖天空之星","name":"橫渡聖夜之空_光‧絲菲亞","gender":"女","element":"雷雷","elementSecond":"雷","special":"持續回復","specialSecond":"持續回復","wikiNumber":"801489"}
							,
							{"id":"294","eventID":"52","event":"神聖天空之星","name":"搖盪星海之光_索拉娜‧卡魯納","gender":"女","element":"火水","elementSecond":"水","special":"特殊變換問題類型【強化傷害】","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"801490"}
							,
							{"id":"295","eventID":"52","event":"神聖天空之星","name":"絕對☆戀ANGEL_瑪格莉特‧麗兒","gender":"女","element":"火光","elementSecond":"光","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"801491"}
							,
							{"id":"296","eventID":"52","event":"神聖天空之星","name":"秘藏在拳裡的熱情_莉亞菈‧羅姆","gender":"女","element":"水雷","elementSecond":"雷","special":"提升能力數值(全體)","specialSecond":"防禦","wikiNumber":"801492"}
							,
							{"id":"297","eventID":"52","event":"神聖天空之星","name":"星彩的祝福_克蕾緹雅‧布萊葉","gender":"女","element":"水光","elementSecond":"光","special":"回復","specialSecond":"強化精靈【持續回復＆減輕傷害＆強化傷害】","wikiNumber":"801493"}
							,
							{"id":"298","eventID":"53","event":"惡作劇女神與兔子的故事","name":"照耀罪人的虹光_尤絲蒂‧勞","gender":"女","element":"水火","elementSecond":"火","special":"變換問題類型","specialSecond":"統一變換問題類型【減輕傷害＆回復】","wikiNumber":"10406"}
							,
							{"id":"299","eventID":"53","event":"惡作劇女神與兔子的故事","name":"罰之神炎_彼得拉‧利凱","gender":"女","element":"火光","elementSecond":"光","special":"產生連結問題類型","specialSecond":"延遲(全體)","wikiNumber":"10407"}
							,
							{"id":"300","eventID":"53","event":"惡作劇女神與兔子的故事","name":"絕對的炯眼_里亞涅‧希爾瓦","gender":"女","element":"水火","elementSecond":"火","special":"回復","specialSecond":"回復異常狀態","wikiNumber":"10408"}
							,
							{"id":"301","eventID":"53","event":"惡作劇女神與兔子的故事","name":"神之血、人之心_埃萊妮‧碧茜","gender":"女","element":"火雷","elementSecond":"雷","special":"防禦","specialSecond":"防禦","wikiNumber":"10409"}
							,
							{"id":"302","eventID":"54","event":"天界的雙子 訣別的年代記","name":"編織時間的賢者_克諾瓦‧蒙特爾","gender":"男","element":"火火","elementSecond":"火","special":"延遲(單體)","specialSecond":"延遲(單體)","wikiNumber":"7307"}
							,
							{"id":"303","eventID":"54","event":"天界的雙子 訣別的年代記","name":"神刻的觀察者_伊絲特瓦蕾‧凱特","gender":"女","element":"水火","elementSecond":"火","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"7306"}
							,
							{"id":"304","eventID":"54","event":"天界的雙子 訣別的年代記","name":"時間的守護天使_梅蒂絲‧路坦","gender":"女","element":"火水","elementSecond":"水","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"7305"}
							,
							{"id":"305","eventID":"54","event":"天界的雙子 訣別的年代記","name":"虛幻世界的念想_普流姆‧諾瓦蘭","gender":"女","element":"雷闇","elementSecond":"闇","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"7304"}
							,
							{"id":"306","eventID":"54","event":"天界的雙子 訣別的年代記","name":"虛幻世界的念想_普流姆‧諾瓦蘭","gender":"女","element":"雷光","elementSecond":"光","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"7303"}
							,
							{"id":"307","eventID":"54","event":"天界的雙子 訣別的年代記","name":"遊遍歷史的神獸_托托‧獏羅","gender":"男女","element":"雷雷","elementSecond":"雷","special":"刪去回答","specialSecond":"刪去回答","wikiNumber":"6292"}
							,
							{"id":"308","eventID":"55","event":"響命CrossDerive ACT3","name":"With_Brave_Heart_艾妮","gender":"女","element":"雷雷","elementSecond":"雷","special":"蓄積解放大魔術‧印(全體)","specialSecond":"蓄積解放大魔術‧印(全體)","wikiNumber":"11314"}
							,
							{"id":"309","eventID":"55","event":"響命CrossDerive ACT3","name":"Beam_Meister_格里特","gender":"男","element":"水雷","elementSecond":"雷","special":"L次數大魔術","specialSecond":"L次數大魔術","wikiNumber":"11317"}
							,
							{"id":"310","eventID":"55","event":"響命CrossDerive ACT3","name":"Shield_of_Spirit_庫蘭","gender":"女","element":"雷雷","elementSecond":"雷","special":"強化精靈【持續回復＆減輕傷害＆提升能力數值】","specialSecond":"強化精靈【持續回復＆減輕傷害＆提升能力數值】","wikiNumber":"11320"}
							,
							{"id":"311","eventID":"55","event":"響命CrossDerive ACT3","name":"Nuke-Nin_密絲緹海德","gender":"女","element":"火火","elementSecond":"火","special":"提昇(全體)","specialSecond":"提昇(全體)","wikiNumber":"11323"}
							,
							{"id":"312","eventID":"55","event":"響命CrossDerive ACT3","name":"Odd_Couple_亞萊娜＆薇潔塔","gender":"女","element":"水水","elementSecond":"水","special":"問題類型爆破大魔術","specialSecond":"問題類型爆破大魔術","wikiNumber":"11326"}
							,
							{"id":"313","eventID":"55","event":"響命CrossDerive ACT3","name":"Thrill_Eater_雷利修","gender":"男","element":"火光","elementSecond":"光","special":"弱化大魔術(單體)","specialSecond":"弱化大魔術(單體)","wikiNumber":"11329"}
							,
							{"id":"314","eventID":"56","event":"響命CrossDerive ACT2","name":"With_All_My_Heart_艾妮","gender":"女","element":"火火","elementSecond":"火","special":"炸裂大魔術","specialSecond":"炸裂大魔術","wikiNumber":"11357"}
							,
							{"id":"315","eventID":"56","event":"響命CrossDerive ACT2","name":"Call_the_Shots_格里特","gender":"男","element":"雷水","elementSecond":"水","special":"狂暴化","specialSecond":"多重魔術(單體)","wikiNumber":"11358"}
							,
							{"id":"316","eventID":"56","event":"響命CrossDerive ACT2","name":"Ninja_Arts_密絲緹海德","gender":"女","element":"火水","elementSecond":"水","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"11359"}
							,
							{"id":"317","eventID":"56","event":"響命CrossDerive ACT2","name":"Get_a_Kick_亞萊娜＆雷利修","gender":"男女","element":"水水","elementSecond":"水","special":"特殊變換問題類型【減輕傷害＆回復】","specialSecond":"特殊變換問題類型【減輕傷害＆回復】","wikiNumber":"11360"}
							,
							{"id":"318","eventID":"56","event":"響命CrossDerive ACT2","name":"Carry_the_Ball_薇潔塔","gender":"女","element":"水水","elementSecond":"水","special":"技能充填(單體)","specialSecond":"技能充填(單體)","wikiNumber":"11361"}
							,
							{"id":"319","eventID":"56","event":"響命CrossDerive ACT2","name":"Never-Say-Die_Spirit_庫蘭","gender":"女","element":"雷火","elementSecond":"火","special":"賦予雙重技能(全體)","specialSecond":"賦予雙重技能(全體)","wikiNumber":"11362"}
							,
							{"id":"320","eventID":"57","event":"響命CrossDerive","name":"With a Will 艾妮","gender":"女","element":"水水","elementSecond":"水","special":"詠唱大魔術","specialSecond":"詠唱大魔術","wikiNumber":"10186"}
							,
							{"id":"321","eventID":"57","event":"響命CrossDerive","name":"Cat's Meow 艾妮","gender":"女","element":"水水","elementSecond":"水","special":"詠唱大魔術","specialSecond":"詠唱大魔術","wikiNumber":"10187"}
							,
							{"id":"322","eventID":"57","event":"響命CrossDerive","name":"Sparks_Fly_Upward_格里特","gender":"男","element":"火水","elementSecond":"水","special":"物理反擊","specialSecond":"物理反擊","wikiNumber":"10188"}
							,
							{"id":"323","eventID":"57","event":"響命CrossDerive","name":"Clear_the_Way_亞萊娜","gender":"女","element":"雷雷","elementSecond":"雷","special":"多重魔術(全體)","specialSecond":"多重魔術(全體)","wikiNumber":"10189"}
							,
							{"id":"324","eventID":"57","event":"響命CrossDerive","name":"Shadow_of_Shade_密絲緹海德","gender":"女","element":"火火","elementSecond":"火","special":"弱化大魔術(單體)","specialSecond":"弱化大魔術(單體)","wikiNumber":"10190"}
							,
							{"id":"325","eventID":"57","event":"響命CrossDerive","name":"In_the_Fast_Lane_雷利修","gender":"男","element":"水雷","elementSecond":"雷","special":"強化精靈【強化傷害】","specialSecond":"強化精靈【強化傷害】","wikiNumber":"10191"}
							,
							{"id":"326","eventID":"57","event":"響命CrossDerive","name":"Right_and_Left_薇潔塔","gender":"女","element":"雷水","elementSecond":"水","special":"提升能力數值(全體)","specialSecond":"回復異常狀態","wikiNumber":"10192"}
							,
							{"id":"327","eventID":"58","event":"沉睡的遺跡 Outlander","name":"發現祕寶！？_亞露露‧亞蓋爾","gender":"女","element":"火光","elementSecond":"光","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"9818"}
							,
							{"id":"328","eventID":"58","event":"沉睡的遺跡 Outlander","name":"清嵐戰鬥少女_維多利亞‧涅爾德","gender":"女","element":"雷水","elementSecond":"水","special":"AS倍率強化","specialSecond":"AS倍率強化","wikiNumber":"9821"}
							,
							{"id":"329","eventID":"58","event":"沉睡的遺跡 Outlander","name":"向點心祈禱_埃利安娜‧古洛斯","gender":"女","element":"水水","elementSecond":"水","special":"純屬性大魔術(單體)","specialSecond":"純屬性大魔術(單體)","wikiNumber":"9824"}
							,
							{"id":"330","eventID":"58","event":"沉睡的遺跡 Outlander","name":"法爾內塞的談話_露芙＆菈特","gender":"女","element":"火雷","elementSecond":"雷","special":"融合大魔術(全體)","specialSecond":"融合大魔術(全體)","wikiNumber":"9827"}
							,
							{"id":"331","eventID":"58","event":"沉睡的遺跡 Outlander","name":"愛的守護者_希特拉‧涅普爾","gender":"女","element":"水闇","elementSecond":"闇","special":"技能充填(單體)","specialSecond":"技能充填(單體)","wikiNumber":"9830"}
							,
							{"id":"332","eventID":"58","event":"沉睡的遺跡 Outlander","name":"深不可測的巫術師_梅貝爾‧泰勒","gender":"女","element":"雷闇","elementSecond":"闇","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"9833"}
							,
							{"id":"333","eventID":"59","event":"幻魔特區RELOADEDⅢ Final Assemble","name":"並肩作戰的救世之星_萊葛爾＆極","gender":"男","element":"火水","elementSecond":"水","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"11547"}
							,
							{"id":"334","eventID":"59","event":"幻魔特區RELOADEDⅢ Final Assemble","name":"救世光輝_萊葛爾＆薩爾瓦多","gender":"男","element":"水水","elementSecond":"水","special":"蓄積解放大魔術‧破(單體)","specialSecond":"蓄積解放大魔術‧破(單體)","wikiNumber":"11550"}
							,
							{"id":"335","eventID":"59","event":"幻魔特區RELOADEDⅢ Final Assemble","name":"不受挫的心_席菈＆朱蒂提亞","gender":"女","element":"雷雷","elementSecond":"雷","special":"技能複製","specialSecond":"技能複製","wikiNumber":"11553"}
							,
							{"id":"336","eventID":"59","event":"幻魔特區RELOADEDⅢ Final Assemble","name":"協心戮力_法爾薩＆泰西","gender":"男女","element":"火火","elementSecond":"火","special":"犧牲連鎖強化","specialSecond":"犧牲連鎖強化","wikiNumber":"11556"}
							,
							{"id":"337","eventID":"59","event":"幻魔特區RELOADEDⅢ Final Assemble","name":"再次奮起的心_八千代＆安卡","gender":"女","element":"水雷","elementSecond":"雷","special":"變換問題類型","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"11559"}
							,
							{"id":"338","eventID":"59","event":"幻魔特區RELOADEDⅢ Final Assemble","name":"懷抱滿溢的愛_匹莉雅‧歐爾皮斯","gender":"女","element":"雷雷","elementSecond":"雷","special":"弱化大魔術(全體)","specialSecond":"弱化大魔術(全體)","wikiNumber":"11562"}
							,
							{"id":"339","eventID":"60","event":"幻魔特區RELOADEDⅡ -RE:unite","name":"拯救星星之人_萊葛爾＆薩爾瓦多","gender":"男","element":"水水","elementSecond":"水","special":"提昇(全體)","specialSecond":"提昇(全體)","wikiNumber":"10273"}
							,
							{"id":"340","eventID":"60","event":"幻魔特區RELOADEDⅡ -RE:unite","name":"羈絆的體現_席菈＆朱蒂提亞","gender":"女","element":"水光","elementSecond":"光","special":"融合大魔術(單體)","specialSecond":"融合大魔術(單體)","wikiNumber":"10276"}
							,
							{"id":"341","eventID":"60","event":"幻魔特區RELOADEDⅡ -RE:unite","name":"為了【王】_瓦雷烏斯‧亞基歐","gender":"男","element":"火雷","elementSecond":"雷","special":"防禦連鎖","specialSecond":"持續回復","wikiNumber":"10279"}
							,
							{"id":"342","eventID":"60","event":"幻魔特區RELOADEDⅡ -RE:unite","name":"意念的成果_匹莉雅‧歐爾皮斯","gender":"女","element":"雷水","elementSecond":"水","special":"變換問題類型","specialSecond":"融合變換問題類型【技能充填】","wikiNumber":"10282"}
							,
							{"id":"343","eventID":"60","event":"幻魔特區RELOADEDⅡ -RE:unite","name":"鷹斬之翼_泰西＆佛盧帝斯","gender":"男","element":"雷光","elementSecond":"光","special":"一閃斬擊大魔術","specialSecond":"一閃斬擊大魔術","wikiNumber":"10285"}
							,
							{"id":"344","eventID":"60","event":"幻魔特區RELOADEDⅡ -RE:unite","name":"激烈的愛情_法爾薩＆立斯思雷尼斯","gender":"女","element":"火火","elementSecond":"火","special":"純屬性強化","specialSecond":"純屬性強化","wikiNumber":"10288"}
							,
							{"id":"345","eventID":"61","event":"幻魔特區RELOADED -GardeniA dist.","name":"救世之星_萊葛爾＆薩爾瓦多","gender":"男","element":"水水","elementSecond":"水","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"11584"}
							,
							{"id":"346","eventID":"61","event":"幻魔特區RELOADED -GardeniA dist.","name":"貫徹的意念_席菈＆朱蒂提亞","gender":"女","element":"雷光","elementSecond":"光","special":"詠唱多重大魔術","specialSecond":"詠唱多重大魔術","wikiNumber":"11585"}
							,
							{"id":"347","eventID":"61","event":"幻魔特區RELOADED -GardeniA dist.","name":"殺光魔物_法爾薩＆立斯思雷尼斯","gender":"女","element":"水闇","elementSecond":"闇","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"11586"}
							,
							{"id":"348","eventID":"61","event":"幻魔特區RELOADED -GardeniA dist.","name":"勇猛精進_泰西＆佛盧帝斯","gender":"男","element":"火火","elementSecond":"火","special":"反動大魔術‧蝕(全體)","specialSecond":"反動大魔術‧蝕(全體)","wikiNumber":"11587"}
							,
							{"id":"349","eventID":"61","event":"幻魔特區RELOADED -GardeniA dist.","name":"鋼鐵的純真_謬爾＆雷貝里歐","gender":"女","element":"火闇","elementSecond":"闇","special":"提昇(全體)","specialSecond":"弱化大魔術(全體)","wikiNumber":"11588"}
							,
							{"id":"350","eventID":"61","event":"幻魔特區RELOADED -GardeniA dist.","name":"Ver.GardeniA_淺蔥＆瑟盧烏斯","gender":"女","element":"雷雷","elementSecond":"雷","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"11589"}
							,
							{"id":"351","eventID":"62","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"與我共同挑戰_極＆奧迪阿姆斯","gender":"男","element":"火火","elementSecond":"火","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"11248"}
							,
							{"id":"352","eventID":"62","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"生命與心靈綻放之光_極‧蜂須賀","gender":"男","element":"火雷","elementSecond":"雷","special":"物理反擊","specialSecond":"物理反擊","wikiNumber":"11249"}
							,
							{"id":"353","eventID":"62","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"風雅櫻華_八千代＆茵芙蘿蕾","gender":"女","element":"水水","elementSecond":"水","special":"防禦","specialSecond":"提升能力數值(全體)","wikiNumber":"11250"}
							,
							{"id":"354","eventID":"62","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"雷牙機翔_澄生＆艾克斯馬基那","gender":"男","element":"雷火","elementSecond":"火","special":"反動大魔術(全體)","specialSecond":"反動大魔術(全體)","wikiNumber":"11251"}
							,
							{"id":"355","eventID":"62","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"月白奔蛇_時生＆艾克斯阿爾巴","gender":"男","element":"火水","elementSecond":"水","special":"特殊變換問題類型【技能充填】","specialSecond":"特殊變換問題類型【技能充填】","wikiNumber":"11252"}
							,
							{"id":"356","eventID":"62","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"守護世界的少女_安卡＆蘿卡","gender":"女","element":"雷光","elementSecond":"光","special":"變換問題類型","specialSecond":"特殊變換問題類型【減輕傷害】","wikiNumber":"11253"}
							,
							{"id":"357","eventID":"62","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"自由的鏑箭_安德亞＆小紅","gender":"男女","element":"水火","elementSecond":"火","special":"變換問題類型","specialSecond":"持續回復","wikiNumber":"11254"}
							,
							{"id":"358","eventID":"62","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"古魂鏡身_謬爾＆雷貝里歐","gender":"女","element":"火火","elementSecond":"火","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"11255"}
							,
							{"id":"359","eventID":"62","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"永遠的守護者_淺蔥＆瑟盧烏斯","gender":"女","element":"雷光","elementSecond":"光","special":"提昇(全體)","specialSecond":"提昇(全體)","wikiNumber":"11256"}
							,
							{"id":"360","eventID":"63","event":"幻魔特區朱雀Ⅱ 鋼鐵之槍","name":"其為深淵的災害_極＆鋼鐵之獸","gender":"男","element":"火闇","elementSecond":"闇","special":"比例削減(全體)","specialSecond":"比例削減(全體)","wikiNumber":"10314"}
							,
							{"id":"361","eventID":"63","event":"幻魔特區朱雀Ⅱ 鋼鐵之槍","name":"通往夏天而敞開的門扉_八千代＆安卡","gender":"女","element":"水雷","elementSecond":"雷","special":"特殊變換問題類型【連鎖數增加＆技能充填】","specialSecond":"延遲(全體)","wikiNumber":"10315"}
							,
							{"id":"362","eventID":"63","event":"幻魔特區朱雀Ⅱ 鋼鐵之槍","name":"遍體鱗傷的扳機_澄生＆時生","gender":"男","element":"雷雷","elementSecond":"雷","special":"技能充填(全體)","specialSecond":"技能充填(全體)","wikiNumber":"10316"}
							,
							{"id":"363","eventID":"63","event":"幻魔特區朱雀Ⅱ 鋼鐵之槍","name":"摧毀對手的鐵臂_安德亞＆里貝魯塔斯","gender":"男","element":"水雷","elementSecond":"雷","special":"融合變換問題類型【減輕傷害】","specialSecond":"融合變換問題類型【減輕傷害】","wikiNumber":"10317"}
							,
							{"id":"364","eventID":"63","event":"幻魔特區朱雀Ⅱ 鋼鐵之槍","name":"深淵的女王_謬爾＆雷貝里歐","gender":"女","element":"火闇","elementSecond":"闇","special":"技能複製","specialSecond":"技能複製","wikiNumber":"10318"}
							,
							{"id":"365","eventID":"63","event":"幻魔特區朱雀Ⅱ 鋼鐵之槍","name":"歷史的見證人_淺蔥＆瑟盧烏斯","gender":"女","element":"雷光","elementSecond":"光","special":"回復異常狀態","specialSecond":"回復異常狀態","wikiNumber":"10319"}
							,
							{"id":"366","eventID":"64","event":"幻魔特區朱雀","name":"不滅的主從_極＆奧迪阿姆斯","gender":"男","element":"火火","elementSecond":"火","special":"自我犧牲魔術(全體)","specialSecond":"自我犧牲魔術(全體)","wikiNumber":"9207"}
							,
							{"id":"367","eventID":"64","event":"幻魔特區朱雀","name":"機神的操控者_澄生＆艾克斯馬基那","gender":"男","element":"雷雷","elementSecond":"雷","special":"技能充填(全體)","specialSecond":"技能充填(全體)","wikiNumber":"9208"}
							,
							{"id":"368","eventID":"64","event":"幻魔特區朱雀","name":"蛇骨的真王_時生＆艾克斯阿爾巴","gender":"男","element":"火火","elementSecond":"火","special":"解除效果(全體)【防禦＆阻隔傷害】","specialSecond":"解除效果(全體)【防禦＆阻隔傷害】","wikiNumber":"9209"}
							,
							{"id":"369","eventID":"64","event":"幻魔特區朱雀","name":"就像在照鏡子的我們_安卡＆特伊波亞","gender":"女","element":"雷水","elementSecond":"水","special":"變換問題類型","specialSecond":"特殊變換問題類型【連鎖數增加＆強化傷害】","wikiNumber":"9210"}
							,
							{"id":"370","eventID":"64","event":"幻魔特區朱雀","name":"櫻媛與巫女_八千代＆茵芙蘿蕾","gender":"女","element":"水水","elementSecond":"水","special":"延遲(全體)","specialSecond":"延遲(全體)","wikiNumber":"9211"}
							,
							{"id":"371","eventID":"65","event":"空戰的修瓦爾茲","name":"災難王子_齊格‧庫勒耶","gender":"男","element":"火闇","elementSecond":"闇","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"10221"}
							,
							{"id":"372","eventID":"65","event":"空戰的修瓦爾茲","name":"大空賊的驕傲_洛冽緹‧卡那拉","gender":"女","element":"水水","elementSecond":"水","special":"捕食大魔術(全體)","specialSecond":"捕食大魔術(全體)","wikiNumber":"10224"}
							,
							{"id":"373","eventID":"65","event":"空戰的修瓦爾茲","name":"碧空無敗_肯妮金‧布倫希爾德","gender":"女","element":"雷光","elementSecond":"光","special":"統一大魔術","specialSecond":"統一大魔術","wikiNumber":"10227"}
							,
							{"id":"374","eventID":"65","event":"空戰的修瓦爾茲","name":"空賊少校的進軍_蘿葳‧弗洛伊賽","gender":"女","element":"雷水","elementSecond":"水","special":"變換問題類型","specialSecond":"統一變換問題類型【強化傷害】","wikiNumber":"10230"}
							,
							{"id":"375","eventID":"65","event":"空戰的修瓦爾茲","name":"傭兵王_菲利庫斯‧榭法","gender":"男","element":"火火","elementSecond":"火","special":"特殊變換問題類型【技能充填】","specialSecond":"特殊變換問題類型【技能充填】","wikiNumber":"10233"}
							,
							{"id":"376","eventID":"65","event":"空戰的修瓦爾茲","name":"龍鳴聲響_利可西斯＆凱娜","gender":"男女","element":"水闇","elementSecond":"闇","special":"一閃斬擊大魔術","specialSecond":"一閃斬擊大魔術","wikiNumber":"10236"}
							,
							{"id":"377","eventID":"66","event":"空戰的德爾基馬斯Ⅲ 飄揚的軍旗","name":"蒼天中飄揚的軍旗_迪特利希‧貝爾克","gender":"男","element":"火火","elementSecond":"火","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"9072"}
							,
							{"id":"378","eventID":"66","event":"空戰的德爾基馬斯Ⅲ 飄揚的軍旗","name":"黑鴉復仇者_齊格‧庫勒耶","gender":"男","element":"雷雷","elementSecond":"雷","special":"激化大魔術","specialSecond":"激化大魔術","wikiNumber":"9075"}
							,
							{"id":"379","eventID":"66","event":"空戰的德爾基馬斯Ⅲ 飄揚的軍旗","name":"殘酷的騎士部隊_蘿葳‧弗洛伊賽","gender":"女","element":"火火","elementSecond":"火","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"9078"}
							,
							{"id":"380","eventID":"66","event":"空戰的德爾基馬斯Ⅲ 飄揚的軍旗","name":"新王誕生_菲利庫斯‧榭法","gender":"男","element":"水火","elementSecond":"火","special":"提昇(全體)","specialSecond":"提昇(全體)","wikiNumber":"9081"}
							,
							{"id":"381","eventID":"66","event":"空戰的德爾基馬斯Ⅲ 飄揚的軍旗","name":"公爵與隨從？_克拉黎亞＆威拉姆","gender":"男女","element":"雷水","elementSecond":"水","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"9084"}
							,
							{"id":"382","eventID":"66","event":"空戰的德爾基馬斯Ⅲ 飄揚的軍旗","name":"歷戰必勝龍擊兵團_凱娜＆萊薩","gender":"女","element":"火水","elementSecond":"水","special":"提昇(自身)","specialSecond":"提昇(自身)","wikiNumber":"9087"}
							,
							{"id":"383","eventID":"66","event":"空戰的德爾基馬斯Ⅲ 飄揚的軍旗","name":"天譴到來_普魯米耶＆盧凡爾","gender":"男女","element":"水光","elementSecond":"光","special":"複屬性回復","specialSecond":"複屬性回復","wikiNumber":"9090"}
							,
							{"id":"384","eventID":"67","event":"空戰的德爾基馬斯Ⅱ 昏暗英雄","name":"叛逆大元帥_迪特利希‧貝爾克","gender":"男","element":"雷火","elementSecond":"火","special":"提升能力數值(全體)","specialSecond":"提昇(全體)","wikiNumber":"9133"}
							,
							{"id":"385","eventID":"67","event":"空戰的德爾基馬斯Ⅱ 昏暗英雄","name":"昏暗英雄的副官_蘿葳‧弗洛伊賽","gender":"女","element":"水水","elementSecond":"水","special":"反動大魔術‧蝕(單體)","specialSecond":"反動大魔術‧蝕(單體)","wikiNumber":"9134"}
							,
							{"id":"386","eventID":"67","event":"空戰的德爾基馬斯Ⅱ 昏暗英雄","name":"果敢的勇將_克拉黎亞‧夏魯利耶","gender":"女","element":"火雷","elementSecond":"雷","special":"強化傷害(全體)","specialSecond":"強化傷害(全體)","wikiNumber":"9135"}
							,
							{"id":"387","eventID":"67","event":"空戰的德爾基馬斯Ⅱ 昏暗英雄","name":"回歸戰場的左右手_威拉姆‧奧爾岡","gender":"男","element":"火火","elementSecond":"火","special":"弱化大魔術(全體)","specialSecond":"弱化大魔術(全體)","wikiNumber":"9136"}
							,
							{"id":"388","eventID":"67","event":"空戰的德爾基馬斯Ⅱ 昏暗英雄","name":"天意之劍_盧凡爾‧奧路姆","gender":"男","element":"水雷","elementSecond":"雷","special":"防禦連鎖","specialSecond":"防禦連鎖","wikiNumber":"9137"}
							,
							{"id":"389","eventID":"67","event":"空戰的德爾基馬斯Ⅱ 昏暗英雄","name":"穿空傭兵_菲利庫斯‧榭法","gender":"男","element":"雷雷","elementSecond":"雷","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"9138"}
							,
							{"id":"390","eventID":"67","event":"空戰的德爾基馬斯Ⅱ 昏暗英雄","name":"無視道德的天才_蕾貝卡‧鄂蘭","gender":"女","element":"雷雷","elementSecond":"雷","special":"鐵壁‧極","specialSecond":"鐵壁‧極","wikiNumber":"9139"}
							,
							{"id":"391","eventID":"68","event":"空戰的德爾基馬斯","name":"空中的昏暗英雄_迪特利希‧貝爾克","gender":"男","element":"火雷","elementSecond":"雷","special":"特殊變換問題類型【連鎖數增加＆技能充填】","specialSecond":"特殊變換問題類型【連鎖數增加＆技能充填】","wikiNumber":"10256"}
							,
							{"id":"392","eventID":"68","event":"空戰的德爾基馬斯","name":"支配空戰的隻翼_蘿葳‧弗洛伊賽","gender":"女","element":"雷雷","elementSecond":"雷","special":"技能充填＆延遲(全體)","specialSecond":"技能充填＆延遲(全體)","wikiNumber":"10257"}
							,
							{"id":"393","eventID":"68","event":"空戰的德爾基馬斯","name":"絕對的勝者_克拉黎亞‧夏魯利耶","gender":"女","element":"雷火","elementSecond":"火","special":"強化傷害(指定屬性)","specialSecond":"強化傷害(指定屬性)","wikiNumber":"10258"}
							,
							{"id":"394","eventID":"68","event":"空戰的德爾基馬斯","name":"永不滅亡的方程式_威拉姆‧奧爾岡","gender":"男","element":"雷雷","elementSecond":"雷","special":"延遲(單體)","specialSecond":"延遲大魔術(單體)","wikiNumber":"10259"}
							,
							{"id":"395","eventID":"68","event":"空戰的德爾基馬斯","name":"破邪必滅之刃_盧凡爾‧奧路姆","gender":"男","element":"水水","elementSecond":"水","special":"持續回復","specialSecond":"強化精靈【持續回復＆強化傷害】","wikiNumber":"10260"}
							,
							{"id":"396","eventID":"68","event":"空戰的德爾基馬斯","name":"漫舞於空中的羽翼_普魯米耶‧歇爾","gender":"女","element":"水雷","elementSecond":"雷","special":"變換問題類型","specialSecond":"特殊變換問題類型【連鎖數增加】","wikiNumber":"10261"}
							,
							{"id":"397","eventID":"68","event":"空戰的德爾基馬斯","name":"龍迅百騎將軍_萊薩‧奈都爾","gender":"女","element":"火水","elementSecond":"水","special":"毒","specialSecond":"毒","wikiNumber":"10262"}
							,
							{"id":"398","eventID":"68","event":"空戰的德爾基馬斯","name":"炎龍的進擊者_凱娜·埃爾蓋茲","gender":"女","element":"火火","elementSecond":"火","special":"犧牲魔術(全體)","specialSecond":"犧牲魔術(全體)","wikiNumber":"10263"}
							,
							{"id":"399","eventID":"69","event":"虛實難辨的假面宴會","name":"爾虞我詐的心機組合_薩伯爾&朧莉","gender":"男女","element":"火光","elementSecond":"光","special":"產生連結問題類型","specialSecond":"產生連結問題類型","wikiNumber":"801812"}
							,
							{"id":"400","eventID":"69","event":"虛實難辨的假面宴會","name":"賞玩慾望的魔翼天使_珂珂","gender":"女","element":"水雷","elementSecond":"雷","special":"強化精靈【持續回復＆異常狀態失效】","specialSecond":"強化精靈【持續回復＆異常狀態失效】","wikiNumber":"801813"}
							,
							{"id":"401","eventID":"69","event":"虛實難辨的假面宴會","name":"宴會間的花蝴蝶_歌莉亞&格拉娜","gender":"女","element":"水光","elementSecond":"光","special":"變換問題類型","specialSecond":"大魔術(全體)","wikiNumber":"801814"}
							,
							{"id":"402","eventID":"69","event":"虛實難辨的假面宴會","name":"中華風滿漢料理_蜜多莉","gender":"女","element":"火火","elementSecond":"火","special":"純屬性強化","specialSecond":"純屬性強化","wikiNumber":"801815"}
							,
							{"id":"403","eventID":"69","event":"虛實難辨的假面宴會","name":"善邪不分的烘焙路_帕西娜","gender":"女","element":"雷雷","elementSecond":"雷","special":"炸裂大魔術","specialSecond":"炸裂大魔術","wikiNumber":"801816"}
							,
							{"id":"404","eventID":"69","event":"虛實難辨的假面宴會","name":"復出的傳說勇者_斯林&莎曼妲","gender":"男女","element":"火雷","elementSecond":"雷","special":"多重魔術(單體)","specialSecond":"強化傷害(自身)","wikiNumber":"801817"}
							,
							{"id":"405","eventID":"70","event":"《沙灘上的冰果宴》","name":"酸甜沁涼的特效藥_紬","gender":"女","element":"水水","elementSecond":"水","special":"純屬性大魔術(全體)","specialSecond":"純屬性大魔術(全體)","wikiNumber":"801352"}
							,
							{"id":"406","eventID":"70","event":"《沙灘上的冰果宴》","name":"肌膚與麵包都是健康小麥色_賽特絲","gender":"女","element":"水雷","elementSecond":"雷","special":"回復異常狀態","specialSecond":"異常狀態失效","wikiNumber":"801354"}
							,
							{"id":"407","eventID":"70","event":"《沙灘上的冰果宴》","name":"沙灘上飛舞的精靈_露絲娜","gender":"女","element":"雷雷","elementSecond":"雷","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"801356"}
							,
							{"id":"408","eventID":"70","event":"《沙灘上的冰果宴》","name":"用刨冰與水果作曲_蜜多莉","gender":"女","element":"雷光","elementSecond":"光","special":"解除效果(單體)【屬性吸收】","specialSecond":"強化複屬性傷害","wikiNumber":"801358"}
							,
							{"id":"409","eventID":"71","event":"神祕委託‧寒冰之巔的考驗","name":"赤豔的混血護林者_曼曼","gender":"女","element":"雷雷","elementSecond":"雷","special":"特殊變換問題類型【回復】","specialSecond":"特殊變換問題類型【回復】","wikiNumber":"800966"}
							,
							{"id":"410","eventID":"71","event":"神祕委託‧寒冰之巔的考驗","name":"綺麗蒼森的守護靈_嘉蘭‧西維婭","gender":"女","element":"水水","elementSecond":"水","special":"復活","specialSecond":"復活","wikiNumber":"800967"}
							,
							{"id":"411","eventID":"71","event":"神祕委託‧寒冰之巔的考驗","name":"月見鄉的引路人_十五夜","gender":"女","element":"雷雷","elementSecond":"雷","special":"阻隔傷害","specialSecond":"阻隔傷害","wikiNumber":"800968"}
							,
							{"id":"412","eventID":"71","event":"神祕委託‧寒冰之巔的考驗","name":"傳遞思念的使者_列特‧托托克爾","gender":"男","element":"火火","elementSecond":"火","special":"自我犧牲魔術(全體)","specialSecond":"自我犧牲魔術(全體)","wikiNumber":"800969"}
							,
							{"id":"413","eventID":"72","event":"偶像ω喵！！","name":"GZ偶像_莉露姆‧洛洛特","gender":"女","element":"火火","elementSecond":"火","special":"技能充填(單體)","specialSecond":"技能充填(單體)","wikiNumber":"10032"}
							,
							{"id":"414","eventID":"72","event":"偶像ω喵！！","name":"優雅護士_卡多琳‧G‧U","gender":"女","element":"雷雷","elementSecond":"雷","special":"純屬性大魔術(單體)","specialSecond":"純屬性大魔術(單體)","wikiNumber":"10034"}
							,
							{"id":"415","eventID":"72","event":"偶像ω喵！！","name":"純白小貓咪_莉莉＆艾克賽莉亞","gender":"女","element":"水光","elementSecond":"光","special":"炸裂大魔術","specialSecond":"炸裂大魔術","wikiNumber":"10036"}
							,
							{"id":"416","eventID":"72","event":"偶像ω喵！！","name":"白線運動風_艾拉＆賽拉妲","gender":"女","element":"火雷","elementSecond":"雷","special":"阻隔傷害","specialSecond":"阻隔傷害","wikiNumber":"10038"}
							,
							{"id":"417","eventID":"72","event":"偶像ω喵！！","name":"嚴守時間偶像_優卡‧恩德","gender":"女","element":"雷火","elementSecond":"火","special":"賦予雙重技能(單體)","specialSecond":"賦予雙重技能(單體)","wikiNumber":"10040"}
							,
							{"id":"418","eventID":"72","event":"偶像ω喵！！","name":"男子氣概偶像_露卡‧福爾提斯","gender":"女","element":"水火","elementSecond":"火","special":"AS倍率強化","specialSecond":"AS倍率強化","wikiNumber":"10042"}
							,
							{"id":"419","eventID":"73","event":"偶像ω喵！前&後篇","name":"超級偶像魔導少女_莉露姆‧洛洛特","gender":"女","element":"火火","elementSecond":"火","special":"純屬性大魔術(全體)","specialSecond":"純屬性大魔術(全體)","wikiNumber":"10944"}
							,
							{"id":"420","eventID":"73","event":"偶像ω喵！前&後篇","name":"時尚護士_卡多琳‧G‧U","gender":"女","element":"水雷","elementSecond":"雷","special":"狂暴化","specialSecond":"多重魔術(單體)","wikiNumber":"10945"}
							,
							{"id":"421","eventID":"73","event":"偶像ω喵！前&後篇","name":"惡威怒流_賽拉妲‧艾格蘭泰","gender":"女","element":"火闇","elementSecond":"闇","special":"強化複屬性傷害","specialSecond":"強化複屬性傷害","wikiNumber":"10946"}
							,
							{"id":"422","eventID":"73","event":"偶像ω喵！前&後篇","name":"鍊金偶像_艾拉‧芙拉思卡","gender":"女","element":"雷闇","elementSecond":"闇","special":"技能充填(全體)","specialSecond":"技能充填(全體)","wikiNumber":"10947"}
							,
							{"id":"423","eventID":"73","event":"偶像ω喵！前&後篇","name":"哼哼偶像_莉莉‧康乃爾","gender":"女","element":"雷雷","elementSecond":"雷","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"10948"}
							,
							{"id":"424","eventID":"73","event":"偶像ω喵！前&後篇","name":"偶像龍騎士_艾克賽莉亞‧庫魯斯","gender":"女","element":"水光","elementSecond":"光","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"10949"}
							,
							{"id":"425","eventID":"73","event":"偶像ω喵！前&後篇","name":"成立！粗枝大派","gender":"女","element":"火水","elementSecond":"水","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"10950"}
							,
							{"id":"426","eventID":"73","event":"偶像ω喵！前&後篇","name":"成立！擦身之緣也是天意","gender":"女","element":"雷光","elementSecond":"光","special":"強化精靈【持續回復＆提升能力數值】","specialSecond":"強化精靈【持續回復＆減輕傷害＆提升能力數值】","wikiNumber":"10951"}
							,
							{"id":"427","eventID":"74","event":"淡薄的藍色光芒 最終章 終極聖祈","name":"終極聖祈_莎倫＆西奧多","gender":"男女","element":"水火","elementSecond":"火","special":"大魔術(全體)","specialSecond":"強化複屬性傷害","wikiNumber":"9594"}
							,
							{"id":"428","eventID":"75","event":"淡薄的藍色光芒 第二章 虛幻聖域","name":"包容皇界的慈愛_莎倫‧耶爾格","gender":"女","element":"水光","elementSecond":"光","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"9588"}
							,
							{"id":"429","eventID":"75","event":"淡薄的藍色光芒 第二章 虛幻聖域","name":"蒼翼破斷皇零劍_西奧多‧薩扎","gender":"男","element":"水水","elementSecond":"水","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"9589"}
							,
							{"id":"430","eventID":"76","event":"淡薄的藍色光芒 第一章 皇帝與劍","name":"現在開花的世界_莎倫‧耶爾格","gender":"女","element":"雷光","elementSecond":"光","special":"物理反擊","specialSecond":"物理反擊","wikiNumber":"9587"}
							,
							{"id":"431","eventID":"77","event":"智慧的意義","name":"飛花熒煌綴明鮮_夏孟","gender":"女","element":"火雷","elementSecond":"雷","special":"AS倍率強化","specialSecond":"AS倍率強化","wikiNumber":"801495"}
							,
							{"id":"432","eventID":"77","event":"智慧的意義","name":"埋首莘莘萬卷中_秋辛","gender":"男","element":"雷水","elementSecond":"水","special":"強化精靈【持續回復＆減輕傷害＆強化傷害】","specialSecond":"強化精靈【持續回復＆減輕傷害＆強化傷害】","wikiNumber":"801497"}
							,
							{"id":"433","eventID":"77","event":"智慧的意義","name":"狐裘髮鬢覆霜雪_冬禹","gender":"女","element":"水火","elementSecond":"火","special":"時限大魔術","specialSecond":"時限大魔術","wikiNumber":"801499"}
							,
							{"id":"434","eventID":"77","event":"智慧的意義","name":"明月星輝忘返_愛絲翠雅","gender":"女","element":"水水","elementSecond":"水","special":"防禦連鎖","specialSecond":"防禦連鎖","wikiNumber":"801501"}
							,
							{"id":"435","eventID":"77","event":"智慧的意義","name":"連結星星的恆等式_裘浩斯","gender":"男","element":"雷雷","elementSecond":"雷","special":"特殊變換問題類型【強化傷害】","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"801507"}
							,
							{"id":"436","eventID":"78","event":"片翼天使的轉世約定","name":"誓約兩世不悔的羈絆_瞬&陽","gender":"男","element":"水雷","elementSecond":"雷","special":"異常狀態失效","specialSecond":"異常狀態失效","wikiNumber":"801279"}
							,
							{"id":"437","eventID":"78","event":"片翼天使的轉世約定","name":"月下的命運編織者_珂珂","gender":"女","element":"水闇","elementSecond":"闇","special":"反動大魔術(全體)","specialSecond":"反動大魔術(全體)","wikiNumber":"801280"}
							,
							{"id":"438","eventID":"78","event":"片翼天使的轉世約定","name":"讓人幸福的味道_蜜多莉","gender":"女","element":"雷雷","elementSecond":"雷","special":"阻隔傷害","specialSecond":"阻隔傷害","wikiNumber":"801281"}
							,
							{"id":"439","eventID":"78","event":"片翼天使的轉世約定","name":"南瓜披風下的暗夜怪盜_薩伯爾","gender":"男","element":"雷闇","elementSecond":"闇","special":"自我犧牲魔術(全體)","specialSecond":"自我犧牲魔術(全體)","wikiNumber":"801282"}
							,
							{"id":"440","eventID":"78","event":"片翼天使的轉世約定","name":"軍中的白衣救贖_紬","gender":"女","element":"水火","elementSecond":"火","special":"強化精靈【強化傷害＆減輕傷害】","specialSecond":"強化精靈【強化傷害＆減輕傷害】","wikiNumber":"801283"}
							,
							{"id":"441","eventID":"78","event":"片翼天使的轉世約定","name":"操控命運的可愛殺手_真冬&霧子","gender":"男女","element":"水火","elementSecond":"火","special":"強化傷害(自身)","specialSecond":"強化傷害(自身)","wikiNumber":"801284"}
							,
							{"id":"442","eventID":"78","event":"片翼天使的轉世約定","name":"在黑夜捉弄人們的少女_格拉娜","gender":"女","element":"火水","elementSecond":"水","special":"特殊變換問題類型【連鎖數增加】","specialSecond":"強化傷害(指定屬性)","wikiNumber":"801285"}
							,
							{"id":"443","eventID":"78","event":"片翼天使的轉世約定","name":"桌間穿梭的曼妙身姿_歌莉亞","gender":"女","element":"火光","elementSecond":"光","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"801286"}
							,
							{"id":"444","eventID":"78","event":"片翼天使的轉世約定","name":"邪氣洶湧的再世魔族_寶迪","gender":"男","element":"雷光","elementSecond":"光","special":"回復異常狀態","specialSecond":"回復異常狀態","wikiNumber":"801287"}
							,
							{"id":"445","eventID":"78","event":"片翼天使的轉世約定","name":"指向真實的凜冽曙光_朧莉","gender":"女","element":"水闇","elementSecond":"闇","special":"解除效果大魔術(全體)【物理反擊＆技能反擊】","specialSecond":"解除效果大魔術(全體)【物理反擊＆技能反擊】","wikiNumber":"801288"}
							,
							{"id":"446","eventID":"79","event":"炎夏的海灘風情！","name":"水族的末日殺手_薩伯爾","gender":"男","element":"雷闇","elementSecond":"闇","special":"提昇(自身)","specialSecond":"提昇(自身)","wikiNumber":"801476"}
							,
							{"id":"447","eventID":"79","event":"炎夏的海灘風情！","name":"回憶中的魔王城堡_寶迪","gender":"男","element":"雷光","elementSecond":"光","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"801477"}
							,
							{"id":"448","eventID":"79","event":"炎夏的海灘風情！","name":"夏日的泳裝少女_朧莉","gender":"女","element":"水闇","elementSecond":"闇","special":"虛無之瞳","specialSecond":"虛無之瞳","wikiNumber":"801478"}
							,
							{"id":"449","eventID":"79","event":"炎夏的海灘風情！","name":"靈界偵探的助手_悠可","gender":"女","element":"火水","elementSecond":"水","special":"技能充填(全體)","specialSecond":"技能充填(全體)","wikiNumber":"801479"}
							,
							{"id":"450","eventID":"79","event":"炎夏的海灘風情！","name":"想要喝點什麼嗎？_歌莉亞","gender":"女","element":"火光","elementSecond":"光","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"801480"}
							,
							{"id":"451","eventID":"79","event":"炎夏的海灘風情！","name":"尋找美麗的回憶_霓莎","gender":"女","element":"水水","elementSecond":"水","special":"防禦連鎖","specialSecond":"鐵壁‧極","wikiNumber":"801481"}
							,
							{"id":"452","eventID":"80","event":"七夕夜‧煙花燦爛","name":"在七夕的傳情紙鶴_拉索","gender":"男","element":"水水","elementSecond":"水","special":"弱化大魔術(全體)","specialSecond":"弱化大魔術(全體)","wikiNumber":"801482"}
							,
							{"id":"453","eventID":"80","event":"七夕夜‧煙花燦爛","name":"在七夕祈願的女孩_露絲娜","gender":"女","element":"水光","elementSecond":"光","special":"時限大魔術","specialSecond":"時限大魔術","wikiNumber":"801483"}
							,
							{"id":"454","eventID":"80","event":"七夕夜‧煙花燦爛","name":"黑暗彼方的委託_珂珂","gender":"女","element":"水闇","elementSecond":"闇","special":"異常狀態失效","specialSecond":"異常狀態失效","wikiNumber":"801484"}
							,
							{"id":"455","eventID":"80","event":"七夕夜‧煙花燦爛","name":"燦爛的節慶煙花_優依","gender":"女","element":"火雷","elementSecond":"雷","special":"特殊變換問題類型【連鎖數增加】","specialSecond":"大魔術(全體)","wikiNumber":"801485"}
							,
							{"id":"456","eventID":"80","event":"七夕夜‧煙花燦爛","name":"怪盜的迷糊伙伴_格拉娜","gender":"女","element":"火水","elementSecond":"水","special":"延長AS時間限制","specialSecond":"刪去回答","wikiNumber":"801486"}
							,
							{"id":"457","eventID":"80","event":"七夕夜‧煙花燦爛","name":"降罪天使_洛琪兒","gender":"女","element":"雷雷","elementSecond":"雷","special":"防禦","specialSecond":"延遲(單體)","wikiNumber":"801487"}
							,
							{"id":"458","eventID":"81","event":"《靈界魔女：危險紳士之章》","name":"闇夜怪盜紳士_薩伯爾‧哲","gender":"男","element":"火火","elementSecond":"火","special":"純屬性大魔術(單體)","specialSecond":"純屬性大魔術(單體)","wikiNumber":"801438"}
							,
							{"id":"459","eventID":"81","event":"《靈界魔女：危險紳士之章》","name":"斷鍊的魔女傳承_瑪露可‧雪恩","gender":"女","element":"水水","elementSecond":"水","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"801440"}
							,
							{"id":"460","eventID":"81","event":"《靈界魔女：危險紳士之章》","name":"靈界穿越者_莎朵莉‧雪恩","gender":"女","element":"雷光","elementSecond":"光","special":"虛無之瞳","specialSecond":"解除效果大魔術(全體)【物理反擊＆技能反擊】","wikiNumber":"801442"}
							,
							{"id":"461","eventID":"81","event":"《靈界魔女：危險紳士之章》","name":"魔女試煉的裁決者_索恩","gender":"男","element":"雷水","elementSecond":"水","special":"挑釁","specialSecond":"復活","wikiNumber":"801444"}
							,
							{"id":"462","eventID":"81","event":"《靈界魔女：危險紳士之章》","name":"消亡的無名魔女_枯露美","gender":"女","element":"火光","elementSecond":"光","special":"刪去回答","specialSecond":"弱化大魔術(單體)","wikiNumber":"801446"}
							,
							{"id":"463","eventID":"82","event":"新說 桃娘傳Ⅱ 機關桃源虹繪卷","name":"四心一體Φ之陣_李太郎‧普露姆","gender":"女","element":"火火","elementSecond":"火","special":"純屬性大魔術(單體)","specialSecond":"純屬性大魔術(單體)","wikiNumber":"9750"}
							,
							{"id":"464","eventID":"82","event":"新說 桃娘傳Ⅱ 機關桃源虹繪卷","name":"人類歐帕茲_初瀨‧之‧島兒","gender":"男","element":"水火","elementSecond":"火","special":"阻隔傷害","specialSecond":"阻隔傷害","wikiNumber":"9753"}
							,
							{"id":"465","eventID":"82","event":"新說 桃娘傳Ⅱ 機關桃源虹繪卷","name":"真人不露相_八重‧栗柄","gender":"女","element":"雷雷","elementSecond":"雷","special":"炸裂大魔術","specialSecond":"炸裂大魔術","wikiNumber":"9756"}
							,
							{"id":"466","eventID":"82","event":"新說 桃娘傳Ⅱ 機關桃源虹繪卷","name":"鶴鳴九皋_冰雨‧鶴鳴","gender":"女","element":"水水","elementSecond":"水","special":"技能充填(相鄰)","specialSecond":"技能充填(相鄰)","wikiNumber":"9759"}
							,
							{"id":"467","eventID":"82","event":"新說 桃娘傳Ⅱ 機關桃源虹繪卷","name":"名揚天地的風雷神_風華＆米蕾","gender":"女","element":"水雷","elementSecond":"雷","special":"融合大魔術(全體)","specialSecond":"融合大魔術(全體)","wikiNumber":"9762"}
							,
							{"id":"468","eventID":"82","event":"新說 桃娘傳Ⅱ 機關桃源虹繪卷","name":"看我大展身手_春彥‧堀川","gender":"男","element":"雷光","elementSecond":"光","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"9765"}
							,
							{"id":"469","eventID":"83","event":"新說 桃娘傳 妖爺合戰誓助劍","name":"神姬武桃_李太郎‧普露姆","gender":"女","element":"火雷","elementSecond":"雷","special":"激化大魔術","specialSecond":"激化大魔術","wikiNumber":"9804"}
							,
							{"id":"470","eventID":"83","event":"新說 桃娘傳 妖爺合戰誓助劍","name":"撩亂閃雷_米蕾‧凱拉姆","gender":"女","element":"雷水","elementSecond":"水","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"9805"}
							,
							{"id":"471","eventID":"83","event":"新說 桃娘傳 妖爺合戰誓助劍","name":"驚天颱風_風華‧凱拉姆","gender":"女","element":"水水","elementSecond":"水","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"9806"}
							,
							{"id":"472","eventID":"83","event":"新說 桃娘傳 妖爺合戰誓助劍","name":"舊世界的大賢_初瀨‧之‧島兒","gender":"男","element":"水火","elementSecond":"火","special":"物理反擊","specialSecond":"物理反擊","wikiNumber":"9807"}
							,
							{"id":"473","eventID":"83","event":"新說 桃娘傳 妖爺合戰誓助劍","name":"天下不遜的不妙傢伙_八重‧栗柄","gender":"女","element":"火水","elementSecond":"水","special":"提昇(全體)","specialSecond":"提昇(全體)","wikiNumber":"9808"}
							,
							{"id":"474","eventID":"83","event":"新說 桃娘傳 妖爺合戰誓助劍","name":"遭遇外世界_Y.U.N.A","gender":"女","element":"雷雷","elementSecond":"雷","special":"自我犧牲魔術(單體)","specialSecond":"自我犧牲魔術(單體)","wikiNumber":"9809"}
							,
							{"id":"475","eventID":"83","event":"新說 桃娘傳 妖爺合戰誓助劍","name":"正牌溫泉桃娘傳","gender":"女","element":"水水","elementSecond":"水","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"9810"}
							,
							{"id":"476","eventID":"84","event":"桃娘傳","name":"桃娘傳_李太郎‧普露姆","gender":"女","element":"火火","elementSecond":"火","special":"比例削減(單體)","specialSecond":"比例削減(單體)","wikiNumber":"7841"}
							,
							{"id":"477","eventID":"84","event":"桃娘傳","name":"清朗的天雷鬼神_米蕾‧凱拉姆","gender":"女","element":"雷雷","elementSecond":"雷","special":"延遲(全體)","specialSecond":"延遲大魔術(全體)","wikiNumber":"7842"}
							,
							{"id":"478","eventID":"84","event":"桃娘傳","name":"勇猛的天風鬼神_風華‧凱拉姆","gender":"女","element":"水水","elementSecond":"水","special":"延遲(全體)","specialSecond":"延遲(全體)","wikiNumber":"7843"}
							,
							{"id":"479","eventID":"85","event":"AbyssCode07 寂寞的境界","name":"AbCd-Φφ：《閉鎖深淵_史托路》","gender":"男","element":"火闇","elementSecond":"闇","special":"行動感應","specialSecond":"行動感應","wikiNumber":"11841"}
							,
							{"id":"480","eventID":"85","event":"AbyssCode07 寂寞的境界","name":"AbCd-Φφ：《終端的處刑人_托露特》","gender":"女","element":"火火","elementSecond":"火","special":"炸裂大魔術","specialSecond":"炸裂大魔術","wikiNumber":"11840"}
							,
							{"id":"481","eventID":"86","event":"《裝神弄鬼》","name":"希臘舞台上的美杜莎_悠可","gender":"女","element":"水光","elementSecond":"光","special":"防禦","specialSecond":"大魔術(全體)","wikiNumber":"801422"}
							,
							{"id":"482","eventID":"86","event":"《裝神弄鬼》","name":"惡魔系料理師_寶菈","gender":"女","element":"水水","elementSecond":"水","special":"毒","specialSecond":"毒","wikiNumber":"801424"}
							,
							{"id":"483","eventID":"86","event":"《裝神弄鬼》","name":"海底世界的美人魚_瑟芬妮","gender":"女","element":"火雷","elementSecond":"雷","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"801426"}
							,
							{"id":"484","eventID":"86","event":"《裝神弄鬼》","name":"穿腦的死亡之聲_艾斌","gender":"男","element":"火闇","elementSecond":"闇","special":"技能充填＆延遲(單體)","specialSecond":"技能充填＆延遲(單體)","wikiNumber":"801428"}
							,
							{"id":"485","eventID":"86","event":"《裝神弄鬼》","name":"背後喚人的恐怖傳說_卡菈洋","gender":"女","element":"雷火","elementSecond":"火","special":"提升能力數值(自身)","specialSecond":"狂暴化","wikiNumber":"801430"}
							,
							{"id":"486","eventID":"86","event":"《裝神弄鬼》","name":"自我活體改造_塔寇","gender":"男","element":"雷雷","elementSecond":"雷","special":"提昇(全體)","specialSecond":"提昇(全體)","wikiNumber":"801432"}
							,
							{"id":"487","eventID":"87","event":"給夏日綻放的你","name":"夏日的熱浪與向日葵_早瀨凜","gender":"女","element":"水水","elementSecond":"水","special":"犧牲連鎖強化","specialSecond":"犧牲連鎖強化","wikiNumber":"8801"}
							,
							{"id":"488","eventID":"88","event":"《沉眠之血2》幼龍的鳴嘶","name":"覺醒的幼龍_裴洛恩‧格利菲斯","gender":"男","element":"雷火","elementSecond":"火","special":"時限大魔術","specialSecond":"時限大魔術","wikiNumber":"801824"}
							,
							{"id":"489","eventID":"88","event":"《沉眠之血2》幼龍的鳴嘶","name":"薩蘭的帶刺薔薇_潔依瓦菈‧夏爾","gender":"女","element":"火水","elementSecond":"水","special":"提升能力數值(自身)","specialSecond":"大魔術(全體)","wikiNumber":"801825"}
							,
							{"id":"490","eventID":"88","event":"《沉眠之血2》幼龍的鳴嘶","name":"戰場上咆哮的獵豹_艾梅爾","gender":"女","element":"雷水","elementSecond":"水","special":"弱化大魔術(全體)","specialSecond":"弱化大魔術(全體)","wikiNumber":"801826"}
							,
							{"id":"491","eventID":"88","event":"《沉眠之血2》幼龍的鳴嘶","name":"渲染於紙上的邪繪_賽兒蜜雅","gender":"女","element":"水水","elementSecond":"水","special":"特殊變換問題類型【連鎖數增加】","specialSecond":"提昇(全體)","wikiNumber":"801827"}
							,
							{"id":"492","eventID":"88","event":"《沉眠之血2》幼龍的鳴嘶","name":"生殺予奪的斷罪之鞭_可蘿碧","gender":"女","element":"雷雷","elementSecond":"雷","special":"強化精靈【持續回復＆減輕傷害＆強化傷害】","specialSecond":"起死回生","wikiNumber":"801828"}
							,
							{"id":"493","eventID":"88","event":"《沉眠之血2》幼龍的鳴嘶","name":"現世的靈動之焰_納迦維埃","gender":"男","element":"火火","elementSecond":"火","special":"炸裂大魔術","specialSecond":"炸裂大魔術","wikiNumber":"801829"}
							,
							{"id":"494","eventID":"89","event":"《沉眠之血》—焚焰的國度","name":"半龍王族_裴洛恩‧格利菲斯","gender":"男","element":"火闇","elementSecond":"闇","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"801559"}
							,
							{"id":"495","eventID":"89","event":"《沉眠之血》—焚焰的國度","name":"未來的女將軍_潔依瓦菈‧夏爾","gender":"女","element":"水光","elementSecond":"光","special":"斬擊大魔術","specialSecond":"強化傷害(指定屬性)","wikiNumber":"801560"}
							,
							{"id":"496","eventID":"89","event":"《沉眠之血》—焚焰的國度","name":"熾熱的槍尖_艾梅爾","gender":"女","element":"火火","elementSecond":"火","special":"詠唱大魔術","specialSecond":"詠唱大魔術","wikiNumber":"801561"}
							,
							{"id":"497","eventID":"89","event":"《沉眠之血》—焚焰的國度","name":"皇家惡魔獵人_巴夫坦","gender":"男","element":"水水","elementSecond":"水","special":"防禦","specialSecond":"回復異常狀態","wikiNumber":"801562"}
							,
							{"id":"498","eventID":"89","event":"《沉眠之血》—焚焰的國度","name":"未來的希望之光_納迦蕾特","gender":"女","element":"雷雷","elementSecond":"雷","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"801563"}
							,
							{"id":"499","eventID":"89","event":"《沉眠之血》—焚焰的國度","name":"未來的末日景色_寶迪‧波羅斯","gender":"男","element":"雷光","elementSecond":"光","special":"技能充填(全體)","specialSecond":"技能充填(全體)","wikiNumber":"801564"}
							,
							{"id":"500","eventID":"90","event":"冰雪薔薇的黑影","name":"傳承之刃_佛蘭賽爾","gender":"男","element":"水水","elementSecond":"水","special":"純屬性大魔術(全體)","specialSecond":"純屬性大魔術(全體)","wikiNumber":"801818"}
							,
							{"id":"501","eventID":"90","event":"冰雪薔薇的黑影","name":"封護劍士_洛蕾塔","gender":"女","element":"火火","elementSecond":"火","special":"一閃斬擊大魔術","specialSecond":"一閃斬擊大魔術","wikiNumber":"801819"}
							,
							{"id":"502","eventID":"90","event":"冰雪薔薇的黑影","name":"太古祕法的守護者_拉索","gender":"男","element":"雷雷","elementSecond":"雷","special":"強化傷害(自身)","specialSecond":"強化傷害(自身)","wikiNumber":"801820"}
							,
							{"id":"503","eventID":"90","event":"冰雪薔薇的黑影","name":"閃耀的新生力量_優依","gender":"女","element":"雷光","elementSecond":"光","special":"特殊變換問題類型【連鎖數增加】","specialSecond":"犧牲連鎖強化","wikiNumber":"801821"}
							,
							{"id":"504","eventID":"90","event":"冰雪薔薇的黑影","name":"幻境中的冰雪之噬_帕榭菈","gender":"女","element":"火水","elementSecond":"水","special":"提升能力數值(自身)","specialSecond":"多重魔術(單體)","wikiNumber":"801822"}
							,
							{"id":"505","eventID":"90","event":"冰雪薔薇的黑影","name":"粉色美夢的編織者_奈婭","gender":"女","element":"水闇","elementSecond":"闇","special":"特效大魔術(全體)","specialSecond":"解除效果大魔術(全體)【物理反擊＆技能反擊】","wikiNumber":"801823"}
							,
							{"id":"506","eventID":"91","event":"聖惡魔女子學院2","name":"燦爛！旋花邪神_露露貝爾","gender":"女","element":"水闇","elementSecond":"闇","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"8810"}
							,
							{"id":"507","eventID":"91","event":"聖惡魔女子學院2","name":"死靈的BON舞_露露貝爾","gender":"女","element":"火火","elementSecond":"火","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"8812"}
							,
							{"id":"508","eventID":"91","event":"聖惡魔女子學院2","name":"不可觸碰的Bull_蜜亞‧雅卡達","gender":"女","element":"火火","elementSecond":"火","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"8815"}
							,
							{"id":"509","eventID":"91","event":"聖惡魔女子學院2","name":"蘊藏的野心_伊迪絲＆卡娜美","gender":"女","element":"火雷","elementSecond":"雷","special":"賦予雙重技能(全體)","specialSecond":"賦予雙重技能(全體)","wikiNumber":"8818"}
							,
							{"id":"510","eventID":"91","event":"聖惡魔女子學院2","name":"向天使惡作劇_烏麗希拉‧法蕾","gender":"女","element":"水水","elementSecond":"水","special":"強化精靈【持續回復＆減輕傷害＆強化傷害】","specialSecond":"強化精靈【持續回復＆減輕傷害＆強化傷害】","wikiNumber":"8821"}
							,
							{"id":"511","eventID":"91","event":"聖惡魔女子學院2","name":"其鮮血如火炎_克魯斯‧德拉古","gender":"男","element":"雷雷","elementSecond":"雷","special":"反動大魔術‧蝕(全體)","specialSecond":"反動大魔術‧蝕(全體)","wikiNumber":"8824"}
							,
							{"id":"512","eventID":"91","event":"聖惡魔女子學院2","name":"神聖的邪印家譜_伊萊恩‧英尼斯","gender":"女","element":"雷闇","elementSecond":"闇","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"8827"}
							,
							{"id":"513","eventID":"92","event":"聖惡魔女子學院","name":"野丫頭邪神少女_露露貝爾","gender":"女","element":"火闇","elementSecond":"闇","special":"阻隔傷害","specialSecond":"阻隔傷害","wikiNumber":"8889"}
							,
							{"id":"514","eventID":"92","event":"聖惡魔女子學院","name":"完全降臨！_邪神_露露貝爾","gender":"女","element":"火闇","elementSecond":"闇","special":"提昇(自身)","specialSecond":"提昇(自身)","wikiNumber":"8890"}
							,
							{"id":"515","eventID":"92","event":"聖惡魔女子學院","name":"終末的純白音色_烏麗希拉‧法蕾","gender":"女","element":"水火","elementSecond":"火","special":"強化精靈【持續回復＆減輕傷害】","specialSecond":"強化精靈【持續回復＆減輕傷害＆強化傷害】","wikiNumber":"8891"}
							,
							{"id":"516","eventID":"92","event":"聖惡魔女子學院","name":"哞～烈超魔牛_蜜亞‧雅卡達","gender":"女","element":"火火","elementSecond":"火","special":"特殊變換問題類型【連鎖數增加】","specialSecond":"特殊變換問題類型【連鎖數增加】","wikiNumber":"8892"}
							,
							{"id":"517","eventID":"92","event":"聖惡魔女子學院","name":"處刑台的美麗花朵_伊迪絲‧吉爾蒂","gender":"女","element":"水闇","elementSecond":"闇","special":"虛無之瞳","specialSecond":"虛無之瞳","wikiNumber":"8893"}
							,
							{"id":"518","eventID":"92","event":"聖惡魔女子學院","name":"深血黃昏_克魯斯‧德拉古","gender":"男","element":"雷雷","elementSecond":"雷","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"8894"}
							,
							{"id":"519","eventID":"92","event":"聖惡魔女子學院","name":"虹色的縱橫家_卡娜美‧巴巴羅薩","gender":"女","element":"雷水","elementSecond":"水","special":"防禦連鎖","specialSecond":"延長AS時間限制","wikiNumber":"8895"}
							,
							{"id":"520","eventID":"93","event":"拉鍊裡的無盡黑霧","name":"無雙的西洋棋手_凱蘿","gender":"女","element":"水水","elementSecond":"水","special":"延遲(全體)","specialSecond":"延遲(全體)","wikiNumber":"801237"}
							,
							{"id":"521","eventID":"93","event":"拉鍊裡的無盡黑霧","name":"祈禱的聖女_露雪","gender":"女","element":"火水","elementSecond":"水","special":"回復異常狀態","specialSecond":"回復異常狀態","wikiNumber":"801238"}
							,
							{"id":"522","eventID":"93","event":"拉鍊裡的無盡黑霧","name":"擁有最強大雙親的少女_緹娜","gender":"女","element":"水水","elementSecond":"水","special":"特殊變換問題類型【連鎖數增加】","specialSecond":"特殊變換問題類型【連鎖數增加】","wikiNumber":"801239"}
							,
							{"id":"523","eventID":"93","event":"拉鍊裡的無盡黑霧","name":"身穿華服的忍者_洋梨","gender":"女","element":"水闇","elementSecond":"闇","special":"特殊變換問題類型【強化傷害】","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"801240"}
							,
							{"id":"524","eventID":"93","event":"拉鍊裡的無盡黑霧","name":"斬斷一切連結_梅亞","gender":"女","element":"雷闇","elementSecond":"闇","special":"弱化大魔術(單體)","specialSecond":"弱化大魔術(單體)","wikiNumber":"801241"}
							,
							{"id":"525","eventID":"93","event":"拉鍊裡的無盡黑霧","name":"旅行中的天才演奏者_泰瑞莎","gender":"女","element":"雷雷","elementSecond":"雷","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"801242"}
							,
							{"id":"526","eventID":"93","event":"拉鍊裡的無盡黑霧","name":"受到明月照耀的少女_月觀","gender":"女","element":"雷雷","elementSecond":"雷","special":"提昇(全體)","specialSecond":"提昇(全體)","wikiNumber":"801243"}
							,
							{"id":"527","eventID":"93","event":"拉鍊裡的無盡黑霧","name":"從龍之國來的公主_艾克賽莉亞","gender":"女","element":"水光","elementSecond":"光","special":"強化傷害(自身)","specialSecond":"強化傷害(自身)","wikiNumber":"801244"}
							,
							{"id":"528","eventID":"93","event":"拉鍊裡的無盡黑霧","name":"在夏日隨著海浪飄飄_諾亞","gender":"女","element":"水水","elementSecond":"水","special":"技能充填＆延遲(單體)","specialSecond":"技能充填＆延遲(單體)","wikiNumber":"801246"}
							,
							{"id":"529","eventID":"93","event":"拉鍊裡的無盡黑霧","name":"想要成為傳說_利亞姆","gender":"男","element":"火火","elementSecond":"火","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"801247"}
							,
							{"id":"530","eventID":"93","event":"拉鍊裡的無盡黑霧","name":"就算軍人也有休假日_拉裴德","gender":"男","element":"雷雷","elementSecond":"雷","special":"強化傷害(指定屬性)","specialSecond":"強化傷害(指定屬性)","wikiNumber":"801248"}
							,
							{"id":"531","eventID":"93","event":"拉鍊裡的無盡黑霧","name":"絕不停下腳步的副理_沃爾特","gender":"男","element":"雷雷","elementSecond":"雷","special":"反動大魔術(全體)","specialSecond":"反動大魔術(全體)","wikiNumber":"801249"}
							,
							{"id":"532","eventID":"93","event":"拉鍊裡的無盡黑霧","name":"戀愛大師不擅長告白_傑羅奇斯","gender":"男","element":"火火","elementSecond":"火","special":"延遲(單體)","specialSecond":"延遲(單體)","wikiNumber":"801250"}
							,
							{"id":"533","eventID":"93","event":"拉鍊裡的無盡黑霧","name":"任性妄為的狼魂_猶大","gender":"男","element":"雷闇","elementSecond":"闇","special":"毒","specialSecond":"毒","wikiNumber":"801251"}
							,
							{"id":"534","eventID":"93","event":"拉鍊裡的無盡黑霧","name":"獲得魔龍認同的情感_約書亞","gender":"男","element":"火闇","elementSecond":"闇","special":"自我犧牲魔術(全體)","specialSecond":"自我犧牲魔術(全體)","wikiNumber":"801252"}
							,
							{"id":"535","eventID":"93","event":"拉鍊裡的無盡黑霧","name":"跟混沌戰鬥的退魔士_毒牙","gender":"男","element":"雷闇","elementSecond":"闇","special":"阻隔傷害","specialSecond":"阻隔傷害","wikiNumber":"801253"}
							,
							{"id":"536","eventID":"93","event":"拉鍊裡的無盡黑霧","name":"冷靜沈著的潛艇艦長_尼莫","gender":"男","element":"雷雷","elementSecond":"雷","special":"異常狀態失效","specialSecond":"異常狀態失效","wikiNumber":"801254"}
							,
							{"id":"537","eventID":"94","event":"《聖誕情侶決定戰》","name":"星和月的輝映_瞬&陽","gender":"男","element":"火水","elementSecond":"水","special":"提升能力數值(自身)","specialSecond":"提昇(自身)","wikiNumber":"801729"}
							,
							{"id":"538","eventID":"94","event":"《聖誕情侶決定戰》","name":"夜間浪漫約會_艾爾多＆雅西兒","gender":"男女","element":"雷水","elementSecond":"水","special":"防禦連鎖","specialSecond":"多重魔術(單體)","wikiNumber":"801730"}
							,
							{"id":"539","eventID":"94","event":"《聖誕情侶決定戰》","name":"醇厚的戀愛口感_寶菈","gender":"女","element":"水水","elementSecond":"水","special":"回復異常狀態","specialSecond":"回復異常狀態＆復活","wikiNumber":"801731"}
							,
							{"id":"540","eventID":"94","event":"《聖誕情侶決定戰》","name":"今天只需小試身手_達坎尼亞","gender":"男","element":"火火","elementSecond":"火","special":"解除效果(全體)【防禦＆阻隔傷害】","specialSecond":"大魔術(單體)","wikiNumber":"801732"}
							,
							{"id":"541","eventID":"94","event":"《聖誕情侶決定戰》","name":"不愛工作的寒冰智賢_冬禹","gender":"女","element":"水闇","elementSecond":"闇","special":"回復","specialSecond":"技能充填(全體)","wikiNumber":"801734"}
							,
							{"id":"542","eventID":"94","event":"《聖誕情侶決定戰》","name":"打歌專用服裝_蝴蝶","gender":"女","element":"雷雷","elementSecond":"雷","special":"強化精靈【持續回復＆提升能力數值】","specialSecond":"強化精靈【持續回復＆提升能力數值】","wikiNumber":"801735"}
							,
							{"id":"543","eventID":"95","event":"魔轟三鐵傑 對 地獄三十六歌仙","name":"偏激護士_卡多琳‧G‧U","gender":"女","element":"火水","elementSecond":"水","special":"強化複屬性傷害","specialSecond":"強化複屬性傷害","wikiNumber":"10610"}
							,
							{"id":"544","eventID":"95","event":"魔轟三鐵傑 對 地獄三十六歌仙","name":"逆襲的【煉獄華】_里苑‧游","gender":"女","element":"水火","elementSecond":"火","special":"提升能力數值(自身)","specialSecond":"提升能力數值(自身)","wikiNumber":"10611"}
							,
							{"id":"545","eventID":"95","event":"魔轟三鐵傑 對 地獄三十六歌仙","name":"鬼道大宿_達姆薩‧伊那","gender":"男","element":"雷雷","elementSecond":"雷","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"10612"}
							,
							{"id":"546","eventID":"95","event":"魔轟三鐵傑 對 地獄三十六歌仙","name":"浪跡天涯的戰女神_圖菈","gender":"女","element":"雷光","elementSecond":"光","special":"防禦","specialSecond":"防禦","wikiNumber":"10613"}
							,
							{"id":"547","eventID":"95","event":"魔轟三鐵傑 對 地獄三十六歌仙","name":"燒盡廢物的死神_玫芙","gender":"女","element":"火火","elementSecond":"火","special":"技能複製","specialSecond":"技能複製","wikiNumber":"10614"}
							,
							{"id":"548","eventID":"95","event":"魔轟三鐵傑 對 地獄三十六歌仙","name":"「攻陷城塞」的_路狄歐‧狄爾","gender":"男","element":"水水","elementSecond":"水","special":"自我犧牲魔術(單體)","specialSecond":"自我犧牲魔術(單體)","wikiNumber":"10615"}
							,
							{"id":"549","eventID":"96","event":"黑夜中的甜點大盜","name":"首屈一指的鬆餅師匠_巧琪","gender":"女","element":"火雷","elementSecond":"雷","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"800991"}
							,
							{"id":"550","eventID":"96","event":"黑夜中的甜點大盜","name":"俏皮的甜點界新人_泰隆","gender":"男","element":"水雷","elementSecond":"雷","special":"強化傷害(指定屬性)","specialSecond":"強化傷害(指定屬性)","wikiNumber":"800992"}
							,
							{"id":"551","eventID":"96","event":"黑夜中的甜點大盜","name":"追求極致甜點的魔法少女_帕西娜","gender":"女","element":"火闇","elementSecond":"闇","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"800993"}
							,
							{"id":"552","eventID":"96","event":"黑夜中的甜點大盜","name":"席捲黑夜而來的騎士_薩伯爾‧哲","gender":"男","element":"雷闇","elementSecond":"闇","special":"強化傷害(指定屬性)","specialSecond":"強化傷害(指定屬性)","wikiNumber":"800994"}
							,
							{"id":"553","eventID":"96","event":"黑夜中的甜點大盜","name":"無窮好奇心的東方魔女_賽特絲","gender":"女","element":"雷火","elementSecond":"火","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"800995"}
							,
							{"id":"554","eventID":"96","event":"黑夜中的甜點大盜","name":"穿梭靈界的異能偵探_朧莉","gender":"女","element":"水闇","elementSecond":"闇","special":"異常狀態失效","specialSecond":"異常狀態失效","wikiNumber":"800996"}
							,
							{"id":"555","eventID":"96","event":"黑夜中的甜點大盜","name":"聰慧可愛的神秘男孩_寶迪","gender":"男","element":"雷光","elementSecond":"光","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"800997"}
							,
							{"id":"556","eventID":"96","event":"黑夜中的甜點大盜","name":"最喜歡惡作劇的女孩_格拉娜","gender":"女","element":"火水","elementSecond":"水","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"800998"}
							,
							{"id":"557","eventID":"96","event":"黑夜中的甜點大盜","name":"最適合萬聖節的料理人_艾絲塔","gender":"女","element":"雷水","elementSecond":"水","special":"反動大魔術(全體)","specialSecond":"反動大魔術(全體)","wikiNumber":"800999"}
							,
							{"id":"558","eventID":"96","event":"黑夜中的甜點大盜","name":"操弄冰火的狐狸兄妹_真冬＆霧子","gender":"男女","element":"水火","elementSecond":"火","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"801000"}
							,
							{"id":"559","eventID":"97","event":"武鬥之巔‧寒冰嶺上的召集令","name":"青苑綴丹_琉璃妘","gender":"女","element":"雷雷","elementSecond":"雷","special":"純屬性大魔術(全體)","specialSecond":"純屬性大魔術(全體)","wikiNumber":"801550"}
							,
							{"id":"560","eventID":"97","event":"武鬥之巔‧寒冰嶺上的召集令","name":"囚禁之嫁_洛蕾塔","gender":"女","element":"水水","elementSecond":"水","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"801551"}
							,
							{"id":"561","eventID":"97","event":"武鬥之巔‧寒冰嶺上的召集令","name":"教堂之劍_佛蘭塞爾","gender":"男","element":"火火","elementSecond":"火","special":"提升能力數值(自身)","specialSecond":"斬擊大魔術","wikiNumber":"801552"}
							,
							{"id":"562","eventID":"97","event":"武鬥之巔‧寒冰嶺上的召集令","name":"星與月之雙子神_艾希&艾拉","gender":"女","element":"水水","elementSecond":"水","special":"特殊變換問題類型【技能充填】","specialSecond":"特殊變換問題類型【減輕傷害＆技能充填】","wikiNumber":"801553"}
							,
							{"id":"563","eventID":"97","event":"武鬥之巔‧寒冰嶺上的召集令","name":"自殺教練_瑪嘉雷特","gender":"女","element":"雷水","elementSecond":"水","special":"強化複屬性傷害","specialSecond":"強化複屬性傷害","wikiNumber":"801554"}
							,
							{"id":"564","eventID":"97","event":"武鬥之巔‧寒冰嶺上的召集令","name":"理智的兄長_諾爾兄弟","gender":"男","element":"雷水","elementSecond":"水","special":"回復異常狀態","specialSecond":"回復異常狀態＆復活","wikiNumber":"801556"}
							,
							{"id":"565","eventID":"97","event":"武鬥之巔‧寒冰嶺上的召集令","name":"赤炎魔法使_絲坦妮","gender":"女","element":"火火","elementSecond":"火","special":"時限大魔術","specialSecond":"時限大魔術","wikiNumber":"801557"}
							,
							{"id":"566","eventID":"97","event":"武鬥之巔‧寒冰嶺上的召集令","name":"龍族的薔薇公主_蘿伊娜","gender":"女","element":"火火","elementSecond":"火","special":"阻隔傷害","specialSecond":"阻隔傷害","wikiNumber":"801558"}
							,
							{"id":"567","eventID":"98","event":"心龍天翔 Rising Dragon","name":"炎之牽絆_阿德萊德‧席拉","gender":"女","element":"火火","elementSecond":"火","special":"時限大魔術","specialSecond":"時限大魔術","wikiNumber":"10649"}
							,
							{"id":"568","eventID":"98","event":"心龍天翔 Rising Dragon","name":"心龍天翔_阿德萊德‧席拉","gender":"女","element":"火火","elementSecond":"火","special":"殘滅大魔術","specialSecond":"殘滅大魔術","wikiNumber":"10650"}
							,
							{"id":"569","eventID":"98","event":"心龍天翔 Rising Dragon","name":"繼承龍族驕傲者_蜜涅娃‧克勞德","gender":"女","element":"雷光","elementSecond":"光","special":"特殊變換問題類型【強化傷害】","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"10651"}
							,
							{"id":"570","eventID":"98","event":"心龍天翔 Rising Dragon","name":"黎明之皇龍魔_蜜涅娃‧克勞德","gender":"女","element":"雷光","elementSecond":"光","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"10652"}
							,
							{"id":"571","eventID":"98","event":"心龍天翔 Rising Dragon","name":"誓約之翼_莉緹卡‧帕絲","gender":"女","element":"水水","elementSecond":"水","special":"特殊變換問題類型【技能充填】","specialSecond":"特殊變換問題類型【減輕傷害＆技能充填】","wikiNumber":"10653"}
							,
							{"id":"572","eventID":"98","event":"心龍天翔 Rising Dragon","name":"逆擊的屠龍者_伊克爾‧羅特列克","gender":"男","element":"水水","elementSecond":"水","special":"挑釁","specialSecond":"鐵壁‧極","wikiNumber":"10654"}
							,
							{"id":"573","eventID":"98","event":"心龍天翔 Rising Dragon","name":"深謀遠慮之人_阿瑪雅","gender":"女","element":"雷雷","elementSecond":"雷","special":"解除效果(全體)【屬性吸收】","specialSecond":"解除效果大魔術(全體)【屬性吸收】","wikiNumber":"10655"}
							,
							{"id":"574","eventID":"99","event":"來自異界的天使","name":"天界的嚮導_羽翼天使‧芙蘭&卡蒂雅","gender":"女","element":"雷光","elementSecond":"光","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"800971"}
							,
							{"id":"575","eventID":"99","event":"來自異界的天使","name":"聖耀流光_神翼天使‧惠","gender":"女","element":"水光","elementSecond":"光","special":"異常狀態失效","specialSecond":"異常狀態失效","wikiNumber":"800972"}
							,
							{"id":"576","eventID":"99","event":"來自異界的天使","name":"滅神無道_戮翼天使‧菲爾","gender":"男","element":"雷闇","elementSecond":"闇","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"800973"}
							,
							{"id":"577","eventID":"99","event":"來自異界的天使","name":"無盡的暴食_煌翼天使‧鵑&洛茵","gender":"女","element":"雷火","elementSecond":"火","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"800974"}
							,
							{"id":"578","eventID":"99","event":"來自異界的天使","name":"奇蹟的鈴裝_熾翼天使‧湊","gender":"女","element":"火雷","elementSecond":"雷","special":"變換問題類型","specialSecond":"特殊變換問題類型【隨機】","wikiNumber":"800975"}
							,
							{"id":"579","eventID":"99","event":"來自異界的天使","name":"禁忌的戀情_殘翼天使‧瞬&陽","gender":"男","element":"水雷","elementSecond":"雷","special":"阻隔傷害","specialSecond":"阻隔傷害","wikiNumber":"800976"}
							,
							{"id":"580","eventID":"99","event":"來自異界的天使","name":"流星的雙壁_煉翼天使‧星娜&星羅","gender":"女","element":"火水","elementSecond":"水","special":"延遲(全體)","specialSecond":"延遲(全體)","wikiNumber":"800977"}
							,
							{"id":"581","eventID":"99","event":"來自異界的天使","name":"愛的特效藥_白翼天使‧紬","gender":"女","element":"水火","elementSecond":"火","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"800978"}
							,
							{"id":"582","eventID":"99","event":"來自異界的天使","name":"薔薇綻放的花音_虹翼天使‧歌莉亞","gender":"女","element":"火光","elementSecond":"光","special":"異常狀態失效","specialSecond":"異常狀態失效","wikiNumber":"800979"}
							,
							{"id":"583","eventID":"99","event":"來自異界的天使","name":"狂歡的水舞姬_魔翼天使‧珂珂","gender":"女","element":"水闇","elementSecond":"闇","special":"物理反擊","specialSecond":"物理反擊","wikiNumber":"800980"}
							,
							{"id":"584","eventID":"100","event":"追憶的閃耀光輝","name":"忘卻之莽撞少年_亞迪‧圖因","gender":"男","element":"雷雷","elementSecond":"雷","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"10604"}
							,
							{"id":"585","eventID":"100","event":"追憶的閃耀光輝","name":"追憶與恆久之巫女_梅茉莉亞‧里賽","gender":"女","element":"雷光","elementSecond":"光","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"10605"}
							,
							{"id":"586","eventID":"100","event":"追憶的閃耀光輝","name":"遺忘之占卜魔導士_媞希卡‧普克","gender":"女","element":"火火","elementSecond":"火","special":"反動大魔術‧蝕(單體)","specialSecond":"反動大魔術‧蝕(單體)","wikiNumber":"10606"}
							,
							{"id":"587","eventID":"100","event":"追憶的閃耀光輝","name":"忘卻之肉體魔導士_賽德‧納修","gender":"男","element":"水雷","elementSecond":"雷","special":"提昇(自身)","specialSecond":"提昇(自身)","wikiNumber":"10607"}
							,
							{"id":"588","eventID":"100","event":"追憶的閃耀光輝","name":"越過追憶向前行_愛","gender":"女","element":"火雷","elementSecond":"雷","special":"變換問題類型","specialSecond":"特殊變換問題類型【減輕傷害＆技能充填】","wikiNumber":"10608"}
							,
							{"id":"589","eventID":"100","event":"追憶的閃耀光輝","name":"持續尋找憶中之物_愛","gender":"女","element":"水雷","elementSecond":"雷","special":"斬擊大魔術","specialSecond":"多重魔術(單體)","wikiNumber":"10609"}
							,
							{"id":"590","eventID":"101","event":"被封印的舞台劇目","name":"龍族的弦樂進行曲_卓麗黛爾","gender":"女","element":"火水","elementSecond":"水","special":"特殊變換問題類型【連鎖數增加】","specialSecond":"延遲大魔術(單體)","wikiNumber":"801372"}
							,
							{"id":"591","eventID":"101","event":"被封印的舞台劇目","name":"引聚生機的天籟之音_緹茵","gender":"女","element":"雷火","elementSecond":"火","special":"技能充填(全體)","specialSecond":"技能充填(全體)","wikiNumber":"801373"}
							,
							{"id":"592","eventID":"101","event":"被封印的舞台劇目","name":"珠玉鳴響的諧和音_克蕾雅","gender":"女","element":"水雷","elementSecond":"雷","special":"強化傷害(自身)","specialSecond":"強化傷害(自身)","wikiNumber":"801374"}
							,
							{"id":"593","eventID":"101","event":"被封印的舞台劇目","name":"明日的首席主唱_菲莉絲汀","gender":"女","element":"雷光","elementSecond":"光","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"801375"}
							,
							{"id":"594","eventID":"101","event":"被封印的舞台劇目","name":"在舞台上萬眾矚目_隆美爾","gender":"男","element":"火闇","elementSecond":"闇","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"801376"}
							,
							{"id":"595","eventID":"101","event":"被封印的舞台劇目","name":"憑欄芳華冠全場_瑟芬妮","gender":"女","element":"雷闇","elementSecond":"闇","special":"防禦連鎖","specialSecond":"異常狀態失效","wikiNumber":"801377"}
							,
							{"id":"596","eventID":"101","event":"被封印的舞台劇目","name":"冰上的芭蕾舞者_艾絲貝拉","gender":"女","element":"水光","elementSecond":"光","special":"強化傷害(指定屬性)","specialSecond":"解除效果大魔術(單體)【物理反擊】","wikiNumber":"801378"}
							,
							{"id":"597","eventID":"101","event":"被封印的舞台劇目","name":"火光中跳舞的靈魂_羅姆菲","gender":"女","element":"火水","elementSecond":"水","special":"提升能力數值(全體)","specialSecond":"反動大魔術(全體)","wikiNumber":"801379"}
							,
							{"id":"598","eventID":"102","event":"AbyssCode06 劫末之獸","name":"AbCd-Ιι：《萌生劫初的英雄》","gender":"女","element":"雷光","elementSecond":"光","special":"物理反擊(多段式反擊)","specialSecond":"物理反擊(多段式反擊)","wikiNumber":"11199"}
							,
							{"id":"599","eventID":"102","event":"AbyssCode06 劫末之獸","name":"AbCd-Ιι：《蘊藏四劫的英雄》","gender":"女","element":"雷光","elementSecond":"光","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"8164"}
							,
							{"id":"600","eventID":"103","event":"巧克力森林","name":"無盡愛情_露嘉‧華倫泰","gender":"女","element":"火水","elementSecond":"水","special":"延遲(全體)","specialSecond":"延遲(全體)","wikiNumber":"7923"}
							,
							{"id":"601","eventID":"103","event":"巧克力森林","name":"真實愛情的傳道者_帕妮拉‧愛莫","gender":"女","element":"雷雷","elementSecond":"雷","special":"回復","specialSecond":"回復異常狀態","wikiNumber":"7924"}
							,
							{"id":"602","eventID":"103","event":"巧克力森林","name":"滾燙熱情_露嘉‧華倫泰","gender":"女","element":"火火","elementSecond":"火","special":"延遲(全體)","specialSecond":"延遲(全體)","wikiNumber":"2492"}
							,
							{"id":"603","eventID":"104","event":"Demons Blader","name":"真理與和平的永劫_奧拉‧阿瑪達","gender":"女","element":"水水","elementSecond":"水","special":"異常狀態失效","specialSecond":"強化精靈【持續回復＆減輕傷害＆異常狀態失效】","wikiNumber":"11191"}
							,
							{"id":"604","eventID":"104","event":"Demons Blader","name":"溫柔眾神的冷酷_奧拉‧阿瑪達","gender":"女","element":"水水","elementSecond":"水","special":"防禦","specialSecond":"防禦","wikiNumber":"11187"}
							,
							{"id":"605","eventID":"105","event":"Heretic Blader","name":"淨化陰陽的輪光_久遠‧璃夢生","gender":"女","element":"雷雷","elementSecond":"雷","special":"阻隔傷害","specialSecond":"阻隔傷害","wikiNumber":"11193"}
							,
							{"id":"606","eventID":"105","event":"Heretic Blader","name":"昇天輪迴的真狐_久遠‧璃夢生","gender":"女","element":"雷雷","elementSecond":"雷","special":"防禦","specialSecond":"防禦","wikiNumber":"11189"}
							,
							{"id":"607","eventID":"106","event":"Tempest Blader","name":"追查凶惡的蒼穹_亞敏‧史密特","gender":"男","element":"水水","elementSecond":"水","special":"解除效果(單體)【物理反擊】","specialSecond":"解除效果大魔術(單體)【物理反擊＆多層防護】","wikiNumber":"11190"}
							,
							{"id":"608","eventID":"106","event":"Tempest Blader","name":"蒼天的奔流_亞敏‧史密特","gender":"男","element":"水水","elementSecond":"水","special":"強化傷害(自身)","specialSecond":"強化傷害(自身)","wikiNumber":"11186"}
							,
							{"id":"609","eventID":"107","event":"Divine Blader","name":"在黑闇中微笑的邪神_露露貝爾","gender":"女","element":"火火","elementSecond":"火","special":"延遲(單體)","specialSecond":"延遲(單體)","wikiNumber":"11192"}
							,
							{"id":"610","eventID":"107","event":"Divine Blader","name":"邪神惹人憐愛的天真_露露貝爾","gender":"女","element":"火火","elementSecond":"火","special":"防禦","specialSecond":"防禦","wikiNumber":"11188"}
							,
							{"id":"611","eventID":"108","event":"庫洛姆‧麥格納 零","name":"魔導學園創立者_登凱爾‧亞當斯","gender":"男","element":"水水","elementSecond":"水","special":"自我犧牲魔術(全體)","specialSecond":"自我犧牲魔術(全體)","wikiNumber":"10598"}
							,
							{"id":"612","eventID":"108","event":"庫洛姆‧麥格納 零","name":"優雅美麗的管理者_雅姆貝爾‧凱","gender":"女","element":"火雷","elementSecond":"雷","special":"提升能力數值(全體)","specialSecond":"防禦","wikiNumber":"10599"}
							,
							{"id":"613","eventID":"108","event":"庫洛姆‧麥格納 零","name":"蒼藍的鬥霸者_響‧麥斯格雷夫","gender":"男","element":"水水","elementSecond":"水","special":"提升能力數值(全體)","specialSecond":"特殊變換問題類型【連鎖數增加＆技能充填】","wikiNumber":"10600"}
							,
							{"id":"614","eventID":"108","event":"庫洛姆‧麥格納 零","name":"清冽的焰刀_小百合‧懷亞特","gender":"女","element":"火火","elementSecond":"火","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"10601"}
							,
							{"id":"615","eventID":"108","event":"庫洛姆‧麥格納 零","name":"聖境的敬禱者_雅梅莉‧貝涅特","gender":"女","element":"雷雷","elementSecond":"雷","special":"強化傷害(指定屬性)","specialSecond":"特殊變換問題類型【減輕傷害】","wikiNumber":"10602"}
							,
							{"id":"616","eventID":"108","event":"庫洛姆‧麥格納 零","name":"不可知的密探_艾瑪‧尤因古","gender":"女","element":"雷雷","elementSecond":"雷","special":"反動大魔術‧蝕(單體)","specialSecond":"反動大魔術‧蝕(單體)","wikiNumber":"10603"}
							,
							{"id":"617","eventID":"109","event":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","name":"誓約的凜炎_凜華‧懷亞特","gender":"女","element":"火水","elementSecond":"水","special":"特殊變換問題類型【連鎖數增加＆強化傷害】","specialSecond":"保留問題類型【連鎖數增加】","wikiNumber":"11616"}
							,
							{"id":"618","eventID":"109","event":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","name":"被強烈的情感染上色彩_愛席亞＆妮可拉","gender":"女","element":"水雷","elementSecond":"雷","special":"技能充填＆延遲(全體)","specialSecond":"技能充填＆延遲(全體)","wikiNumber":"11617"}
							,
							{"id":"619","eventID":"109","event":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","name":"機獸的咆哮_雪莉＆沃爾夫","gender":"男女","element":"雷火","elementSecond":"火","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"11618"}
							,
							{"id":"620","eventID":"109","event":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","name":"雙刃的潛行者_艾瑪‧尤因古","gender":"女","element":"水水","elementSecond":"水","special":"毒","specialSecond":"毒","wikiNumber":"11619"}
							,
							{"id":"621","eventID":"109","event":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","name":"超絕夏天比基尼_MIU☆MIU","gender":"女","element":"雷雷","elementSecond":"雷","special":"異常狀態失效","specialSecond":"強化精靈【持續回復＆減輕傷害＆異常狀態失效】","wikiNumber":"11620"}
							,
							{"id":"622","eventID":"109","event":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","name":"總是共鬥戰線_艾密莉亞＆楓","gender":"女","element":"火雷","elementSecond":"雷","special":"特殊變換問題類型【減輕傷害】","specialSecond":"特殊變換問題類型【減輕傷害】","wikiNumber":"11621"}
							,
							{"id":"623","eventID":"109","event":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","name":"只屬於我的笑容_一樹‧麥斯格雷夫","gender":"男","element":"水水","elementSecond":"水","special":"回復異常狀態","specialSecond":"回復異常狀態","wikiNumber":"11627"}
							,
							{"id":"624","eventID":"109","event":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","name":"凝視著我的眼眸_愛席亞‧貝涅特","gender":"女","element":"水水","elementSecond":"水","special":"延遲(單體)","specialSecond":"延遲(單體)","wikiNumber":"11628"}
							,
							{"id":"625","eventID":"110","event":"庫洛姆‧麥格納Ⅳ單戀☆狂想曲","name":"戀愛☆百萬噸_艾密莉亞‧轟","gender":"女","element":"火火","elementSecond":"火","special":"防禦","specialSecond":"防禦","wikiNumber":"6994"}
							,
							{"id":"626","eventID":"110","event":"庫洛姆‧麥格納Ⅳ單戀☆狂想曲","name":"虹色的戀愛_愛席亞‧貝涅特","gender":"女","element":"水火","elementSecond":"火","special":"延長AS時間限制","specialSecond":"刪去回答","wikiNumber":"6995"}
							,
							{"id":"627","eventID":"110","event":"庫洛姆‧麥格納Ⅳ單戀☆狂想曲","name":"人稱溫柔野獸_沃爾夫‧羅伊","gender":"男","element":"火雷","elementSecond":"雷","special":"自我犧牲魔術(全體)","specialSecond":"自我犧牲魔術(全體)","wikiNumber":"6996"}
							,
							{"id":"628","eventID":"110","event":"庫洛姆‧麥格納Ⅳ單戀☆狂想曲","name":"愛與甘美的砲火_雪莉‧柯爾特","gender":"女","element":"雷雷","elementSecond":"雷","special":"延長AS時間限制","specialSecond":"延長AS時間限制","wikiNumber":"6997"}
							,
							{"id":"629","eventID":"110","event":"庫洛姆‧麥格納Ⅳ單戀☆狂想曲","name":"迷走的夢想戀心_妮可拉‧摩根","gender":"女","element":"雷水","elementSecond":"水","special":"技能充填(全體)","specialSecond":"技能充填(全體)","wikiNumber":"6998"}
							,
							{"id":"630","eventID":"110","event":"庫洛姆‧麥格納Ⅳ單戀☆狂想曲","name":"焦慮的少女情懷_凜華‧懷亞特","gender":"女","element":"火水","elementSecond":"水","special":"強化傷害(自身)","specialSecond":"強化傷害(自身)","wikiNumber":"6999"}
							,
							{"id":"631","eventID":"111","event":"庫洛姆‧麥格納Ⅲ臨海學校","name":"夏日裡的涼風_凜華‧懷亞特","gender":"女","element":"火火","elementSecond":"火","special":"變換問題類型","specialSecond":"特殊變換問題類型【連鎖數增加】","wikiNumber":"6989"}
							,
							{"id":"632","eventID":"111","event":"庫洛姆‧麥格納Ⅲ臨海學校","name":"盛夏的灼熱視線_妮可拉‧摩根","gender":"女","element":"雷雷","elementSecond":"雷","special":"延遲(單體)","specialSecond":"延遲大魔術(單體)","wikiNumber":"6991"}
							,
							{"id":"633","eventID":"111","event":"庫洛姆‧麥格納Ⅲ臨海學校","name":"今天也是大豐收！_雪莉‧柯爾特","gender":"女","element":"雷雷","elementSecond":"雷","special":"變換問題類型","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"6992"}
							,
							{"id":"634","eventID":"111","event":"庫洛姆‧麥格納Ⅲ臨海學校","name":"與大海之獸嬉戲_沃爾夫‧羅伊","gender":"男","element":"火水","elementSecond":"水","special":"變換問題類型","specialSecond":"特殊變換問題類型【減輕傷害】","wikiNumber":"6993"}
							,
							{"id":"635","eventID":"112","event":"庫洛姆‧麥格納Ⅱ學園祭","name":"終極「妹妹」_艾密莉亞‧轟","gender":"女","element":"火火","elementSecond":"火","special":"比例削減(全體)","specialSecond":"比例削減(全體)","wikiNumber":"10568"}
							,
							{"id":"636","eventID":"112","event":"庫洛姆‧麥格納Ⅱ學園祭","name":"學園偶像傳說_MIU☆MIU","gender":"女","element":"雷雷","elementSecond":"雷","special":"回復","specialSecond":"提昇(全體)","wikiNumber":"10569"}
							,
							{"id":"637","eventID":"112","event":"庫洛姆‧麥格納Ⅱ學園祭","name":"可愛盛放_愛席亞‧貝涅特","gender":"女","element":"水水","elementSecond":"水","special":"特殊變換問題類型【減輕傷害】","specialSecond":"特殊變換問題類型【減輕傷害】","wikiNumber":"10570"}
							,
							{"id":"638","eventID":"112","event":"庫洛姆‧麥格納Ⅱ學園祭","name":"貨真價實的鐵壁_楓‧神宮寺","gender":"女","element":"雷水","elementSecond":"水","special":"防禦","specialSecond":"防禦","wikiNumber":"10571"}
							,
							{"id":"639","eventID":"113","event":"庫洛姆‧麥格納Ⅰ魔導學園","name":"大義的灼刃_凜華‧懷亞特","gender":"女","element":"火火","elementSecond":"火","special":"特效大魔術(單體)","specialSecond":"特效大魔術(單體)","wikiNumber":"10564"}
							,
							{"id":"640","eventID":"113","event":"庫洛姆‧麥格納Ⅰ魔導學園","name":"轟雷的機弓_妮可拉‧摩根","gender":"女","element":"雷雷","elementSecond":"雷","special":"延遲(全體)","specialSecond":"延遲大魔術(全體)","wikiNumber":"10565"}
							,
							{"id":"641","eventID":"113","event":"庫洛姆‧麥格納Ⅰ魔導學園","name":"猛獸的統領者_沃爾夫‧羅伊","gender":"男","element":"火火","elementSecond":"火","special":"持續回復","specialSecond":"強化傷害(自身)","wikiNumber":"10566"}
							,
							{"id":"642","eventID":"113","event":"庫洛姆‧麥格納Ⅰ魔導學園","name":"閃雷的槍擊_雪莉‧柯爾特","gender":"女","element":"雷火","elementSecond":"火","special":"多重魔術(單體)","specialSecond":"融合大魔術(全體)","wikiNumber":"10567"}
							,
							{"id":"643","eventID":"114","event":"AbyssCode08 落入星雲的淚珠","name":"AbCd-Ππ：《無止境的旅程_亞絲緹拉》","gender":"女","element":"雷雷","elementSecond":"雷","special":"犧牲連鎖強化","specialSecond":"犧牲連鎖強化","wikiNumber":"11503"}
							,
							{"id":"644","eventID":"115","event":"AbyssCode05 冥世的天蓋","name":"AbCd-Λλ：《甜蜜腐朽殆盡黑闇_妮蕾努》","gender":"女","element":"火闇","elementSecond":"闇","special":"防禦","specialSecond":"防禦","wikiNumber":"7132"}
							,
							{"id":"645","eventID":"115","event":"AbyssCode05 冥世的天蓋","name":"AbCd-Λ：《冥默的白鴉_妮蕾努》","gender":"女","element":"火闇","elementSecond":"闇","special":"延遲(單體)","specialSecond":"延遲(單體)","wikiNumber":"11198"}
							,
							{"id":"646","eventID":"116","event":"AbyssCode04 燃燒殆盡的陽光","name":"AbCd-Ψψ：《絢爛的神舞_妮蒂雅》","gender":"女","element":"水光","elementSecond":"光","special":"技能充填＆延遲(單體)","specialSecond":"技能充填＆延遲(單體)","wikiNumber":"7131"}
							,
							{"id":"647","eventID":"116","event":"AbyssCode04 燃燒殆盡的陽光","name":"AbCd-Ψ：《照亮黑闇的舞蹈_妮蒂雅》","gender":"女","element":"水光","elementSecond":"光","special":"解除效果(全體)【防禦＆阻隔傷害】","specialSecond":"解除效果大魔術(全體)【防禦＆阻隔傷害】","wikiNumber":"11197"}
							,
							{"id":"648","eventID":"117","event":"AbyssCode03 生而墮於虛無","name":"AbCd-Ωω：《消滅自我的存在_該隱》","gender":"男","element":"雷闇","elementSecond":"闇","special":"解除效果(全體)【物理反擊】","specialSecond":"解除效果大魔術(全體)【物理反擊＆技能反擊】","wikiNumber":"7130"}
							,
							{"id":"649","eventID":"117","event":"AbyssCode03 生而墮於虛無","name":"AbCd-Ω：《天上蠢動的憤怒_該隱》","gender":"男","element":"雷闇","elementSecond":"闇","special":"解除效果(全體)【防禦＆阻隔傷害】","specialSecond":"解除效果大魔術(全體)【防禦＆阻隔傷害】","wikiNumber":"11196"}
							,
							{"id":"650","eventID":"118","event":"AbyssCode02 盲目的調和","name":"AbCd-Μμ：《拒絕輝煌_特露米德》","gender":"女","element":"火闇","elementSecond":"闇","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"7129"}
							,
							{"id":"651","eventID":"118","event":"AbyssCode02 盲目的調和","name":"AbCd-M：《孤獨的囚人_特露米德》","gender":"女","element":"火闇","elementSecond":"闇","special":"技能充填(全體)","specialSecond":"技能充填(全體)","wikiNumber":"11195"}
							,
							{"id":"652","eventID":"119","event":"AbyssCode01 黑殼之王","name":"AbCd-Ζζ：《從不沸騰的血潮_卡勒姆》","gender":"男","element":"水光","elementSecond":"光","special":"變換問題類型","specialSecond":"特殊變換問題類型【減輕傷害】","wikiNumber":"7128"}
							,
							{"id":"653","eventID":"119","event":"AbyssCode01 黑殼之王","name":"AbCd-Ζ：《寂靜的天際_卡勒姆》","gender":"男","element":"水光","elementSecond":"光","special":"延遲(單體)","specialSecond":"延遲(單體)","wikiNumber":"11194"}
							,
							{"id":"654","eventID":"120","event":"金貓盃繁中人氣王 前半","name":"可怕玩具箱 優奈娃","gender":"女","element":"雷闇","elementSecond":"闇","special":"犧牲連鎖強化","specialSecond":"犧牲連鎖強化","wikiNumber":"801881"}
							,
							{"id":"655","eventID":"120","event":"金貓盃繁中人氣王 前半","name":"為了慶祝，乾杯！ 嚎斯泰","gender":"男","element":"雷光","elementSecond":"光","special":"變換問題類型","specialSecond":"統一變換問題類型【強化傷害】","wikiNumber":"801879"}
							,
							{"id":"656","eventID":"120","event":"金貓盃繁中人氣王 前半","name":"此心只許你一人 莎朵莉‧雪恩","gender":"女","element":"水火","elementSecond":"火","special":"無屬性變化","specialSecond":"無屬性變化","wikiNumber":"801877"}
							,
							{"id":"657","eventID":"120","event":"金貓盃繁中人氣王 前半","name":"牧師服也沒違和感 艾斌","gender":"男","element":"火火","elementSecond":"火","special":"激化大魔術","specialSecond":"激化大魔術","wikiNumber":"801875"}
							,
							{"id":"658","eventID":"120","event":"金貓盃繁中人氣王 前半","name":"斜槓甜點師 寶菈","gender":"女","element":"水水","elementSecond":"水","special":"蓄積解放大魔術‧連(全體)","specialSecond":"蓄積解放大魔術‧連(全體)","wikiNumber":"801873"}
							,
							{"id":"659","eventID":"120","event":"金貓盃繁中人氣王 前半","name":"想要再次歌唱 蝴蝶","gender":"女","element":"火水","elementSecond":"水","special":"L次數大魔術","specialSecond":"L次數大魔術","wikiNumber":"801871"}
							,
							{"id":"660","eventID":"121","event":"金貓盃繁中人氣王 後半","name":"過去的森林之主 以諾爾","gender":"男","element":"水闇","elementSecond":"闇","special":"賦予雙重AS","specialSecond":"賦予雙重AS","wikiNumber":"801895"}
							,
							{"id":"661","eventID":"121","event":"金貓盃繁中人氣王 後半","name":"烏鴉與女神之姿 珂珂","gender":"女","element":"水光","elementSecond":"光","special":"AS倍率強化","specialSecond":"AS倍率強化","wikiNumber":"801893"}
							,
							{"id":"662","eventID":"121","event":"金貓盃繁中人氣王 後半","name":"吸引麻煩事的體質 奧菲莉亞","gender":"女","element":"火闇","elementSecond":"闇","special":"變換問題類型","specialSecond":"融合變換問題類型【技能充填】","wikiNumber":"801891"}
							,
							{"id":"663","eventID":"121","event":"金貓盃繁中人氣王 後半","name":"墜入凡塵的雙星天使 瞬&陽","gender":"男","element":"火雷","elementSecond":"雷","special":"捕食大魔術(全體)","specialSecond":"捕食大魔術(全體)","wikiNumber":"801889"}
							,
							{"id":"664","eventID":"121","event":"金貓盃繁中人氣王 後半","name":"夜願與惡意之棘 貝蘿莫蕊","gender":"女","element":"雷闇","elementSecond":"闇","special":"保留問題類型【連鎖數增加】","specialSecond":"保留問題類型【連鎖數增加】","wikiNumber":"801887"}
							,
							{"id":"665","eventID":"121","event":"金貓盃繁中人氣王 後半","name":"維多利亞藍色幻想 蜜多莉","gender":"女","element":"雷雷","elementSecond":"雷","special":"蓄積解放大魔術‧連(全體)","specialSecond":"蓄積解放大魔術‧連(全體)","wikiNumber":"801885"}
							,
							{"id":"666","eventID":"122","event":"神明大人 ～土精靈與黑貓主人～","name":"吃飯神_卡奴耶‧德‧亞克","gender":"女","element":"火火","elementSecond":"火","special":"蓄積解放大魔術‧聖(全體)","specialSecond":"蓄積解放大魔術‧聖(全體)","wikiNumber":"11408"}
							,
							{"id":"667","eventID":"122","event":"神明大人 ～土精靈與黑貓主人～","name":"危險的魔法少女_梨莎‧洛特蘭達","gender":"女","element":"水水","elementSecond":"水","special":"保留問題類型【連鎖數增加】","specialSecond":"保留問題類型【連鎖數增加】","wikiNumber":"11411"}
							,
							{"id":"668","eventID":"122","event":"神明大人 ～土精靈與黑貓主人～","name":"含糊女孩_葛蕾絲","gender":"女","element":"雷雷","elementSecond":"雷","special":"特殊變換問題類型【連鎖數增加＆技能充填】","specialSecond":"特殊變換問題類型【連鎖數增加＆技能充填】","wikiNumber":"11414"}
							,
							{"id":"669","eventID":"122","event":"神明大人 ～土精靈與黑貓主人～","name":"魔法與魔劍_琉迪格‧希古拉","gender":"男","element":"水闇","elementSecond":"闇","special":"蓄積解放大魔術‧印(全體)","specialSecond":"蓄積解放大魔術‧印(全體)","wikiNumber":"11417"}
							,
							{"id":"670","eventID":"122","event":"神明大人 ～土精靈與黑貓主人～","name":"生命少女_希維爾‧洛伊絲","gender":"女","element":"火火","elementSecond":"火","special":"強化精靈【持續回復＆減輕傷害＆強化傷害】","specialSecond":"強化精靈【持續回復＆減輕傷害＆強化傷害】","wikiNumber":"11420"}
							,
							{"id":"671","eventID":"122","event":"神明大人 ～土精靈與黑貓主人～","name":"超土級_可露可可‧可露斯斯","gender":"女","element":"雷火","elementSecond":"火","special":"鐵壁‧極","specialSecond":"鐵壁‧極","wikiNumber":"11423"}
							,
							{"id":"672","eventID":"123","event":"神都匹卡雷斯克 黑貓的魔術師","name":"撒謊的詐術師_凱涅斯‧哈瓦","gender":"男","element":"雷水","elementSecond":"水","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"11665"}
							,
							{"id":"673","eventID":"123","event":"神都匹卡雷斯克 黑貓的魔術師","name":"盜想白貴族_迦斯帕‧阿爾尼克","gender":"男","element":"水光","elementSecond":"光","special":"強化蓄積解放・聖","specialSecond":"強化蓄積解放・聖","wikiNumber":"11668"}
							,
							{"id":"674","eventID":"123","event":"神都匹卡雷斯克 黑貓的魔術師","name":"武俠花義賊_桃花","gender":"女","element":"火火","elementSecond":"火","special":"純屬性大魔術(全體)","specialSecond":"純屬性大魔術(全體)","wikiNumber":"11671"}
							,
							{"id":"675","eventID":"123","event":"神都匹卡雷斯克 黑貓的魔術師","name":"聳立的腦細胞_今久留主好介","gender":"男","element":"火火","elementSecond":"火","special":"決鬥","specialSecond":"決鬥","wikiNumber":"11674"}
							,
							{"id":"676","eventID":"123","event":"神都匹卡雷斯克 黑貓的魔術師","name":"夜光少女_莉莉亞‧夜洛斯奇","gender":"女","element":"水火","elementSecond":"火","special":"AS倍率強化","specialSecond":"AS倍率強化","wikiNumber":"11677"}
							,
							{"id":"677","eventID":"123","event":"神都匹卡雷斯克 黑貓的魔術師","name":"三國第一的小偷_根津千優","gender":"女","element":"雷闇","elementSecond":"闇","special":"反動大魔術‧蝕(全體)","specialSecond":"反動大魔術‧蝕(全體)","wikiNumber":"11680"}
							,
							{"id":"678","eventID":"124","event":"年之運行","name":"煙花燦爛的一年之始_初日","gender":"女","element":"火闇","elementSecond":"闇","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"801857"}
							,
							{"id":"679","eventID":"124","event":"年之運行","name":"燭光搖曳平安夜_伊弗","gender":"男","element":"雷雷","elementSecond":"雷","special":"蓄積解放大魔術‧邪(全體)","specialSecond":"蓄積解放大魔術‧邪(全體)","wikiNumber":"801859"}
							,
							{"id":"680","eventID":"124","event":"年之運行","name":"石斛蘭與父親節_艾伯特","gender":"男","element":"水光","elementSecond":"光","special":"解除效果(單體)【防禦＆阻隔傷害】","specialSecond":"解除效果大魔術(單體)【防禦＆阻隔傷害＆多層防護】","wikiNumber":"801861"}
							,
							{"id":"681","eventID":"124","event":"年之運行","name":"降雪的白色聖誕_柯里絲緹","gender":"女","element":"火雷","elementSecond":"雷","special":"變換問題類型","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"801863"}
							,
							{"id":"682","eventID":"124","event":"年之運行","name":"鬼怪遊行萬聖夜_巴姆布蕾克","gender":"女","element":"雷雷","elementSecond":"雷","special":"蓄積解放大魔術‧破(單體)","specialSecond":"蓄積解放大魔術‧破(單體)","wikiNumber":"801865"}
							,
							{"id":"683","eventID":"124","event":"年之運行","name":"愛意滿滿情人節_梅莉莎","gender":"女","element":"水闇","elementSecond":"闇","special":"起死回生","specialSecond":"防禦","wikiNumber":"801867"}
							,
							{"id":"684","eventID":"125","event":"風暴卡里昂──風暴中心的少女","name":"破陣之舞_菲比思","gender":"女","element":"雷闇","elementSecond":"闇","special":"提昇(自身)","specialSecond":"提昇(自身)","wikiNumber":"801901"}
							,
							{"id":"685","eventID":"125","event":"風暴卡里昂──風暴中心的少女","name":"不動如山_布頓","gender":"男","element":"水水","elementSecond":"水","special":"鐵壁‧極","specialSecond":"防禦","wikiNumber":"801903"}
							,
							{"id":"686","eventID":"125","event":"風暴卡里昂──風暴中心的少女","name":"叫我姐姐_達達米絲","gender":"女","element":"火光","elementSecond":"光","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"801905"}
							,
							{"id":"687","eventID":"125","event":"風暴卡里昂──風暴中心的少女","name":"霜血震懾_布馬托","gender":"男","element":"水闇","elementSecond":"闇","special":"一閃斬擊大魔術","specialSecond":"特效大魔術(單體)","wikiNumber":"801907"}
							,
							{"id":"688","eventID":"125","event":"風暴卡里昂──風暴中心的少女","name":"以米拉與法蒂亞之名_結子","gender":"女","element":"水光","elementSecond":"光","special":"強化傷害(全體)","specialSecond":"強化傷害(全體)","wikiNumber":"801909"}
							,
							{"id":"689","eventID":"125","event":"風暴卡里昂──風暴中心的少女","name":"耐心不是美德_妮莉芭安","gender":"女","element":"火光","elementSecond":"光","special":"時限大魔術","specialSecond":"時限大魔術","wikiNumber":"801911"}
							,
							{"id":"690","eventID":"126","event":"魔幻金夏趴2020 序曲","name":"冷酷護士 C卡多琳‧G‧U","gender":"女","element":"火水","elementSecond":"水","special":"AS倍率強化","specialSecond":"AS倍率強化","wikiNumber":"11788"}
							,
							{"id":"691","eventID":"126","event":"魔幻金夏趴2020 序曲","name":"殺戮印記 艾盧多貝里克‧哥德","gender":"男","element":"火闇","elementSecond":"闇","special":"反動大魔術‧蝕(全體)","specialSecond":"反動大魔術‧蝕(全體)","wikiNumber":"11791"}
							,
							{"id":"692","eventID":"126","event":"魔幻金夏趴2020 序曲","name":"劍聖 阿斯塔‧拉德","gender":"男","element":"雷雷","elementSecond":"雷","special":"純屬性大魔術(全體)","specialSecond":"純屬性大魔術(全體)","wikiNumber":"11789"}
							,
							{"id":"693","eventID":"126","event":"魔幻金夏趴2020 序曲","name":"星予眸，光予劍 拉米斯費蕾絲","gender":"女","element":"雷火","elementSecond":"火","special":"蓄積解放大魔術‧連(全體)","specialSecond":"蓄積解放大魔術‧連(全體)","wikiNumber":"11792"}
							,
							{"id":"694","eventID":"126","event":"魔幻金夏趴2020 序曲","name":"定罪騎士團長 流昂‧特拉姆","gender":"男","element":"水光","elementSecond":"光","special":"蓄積解放大魔術‧印(全體)","specialSecond":"蓄積解放大魔術‧印(全體)","wikiNumber":"11793"}
							,
							{"id":"695","eventID":"126","event":"魔幻金夏趴2020 序曲","name":"詠星聖女 克蕾緹雅‧布萊葉","gender":"女","element":"水光","elementSecond":"光","special":"提升能力數值(指定屬性)","specialSecond":"提升能力數值(指定屬性)","wikiNumber":"11790"}
							,
							{"id":"696","eventID":"127","event":"Under Night Tale 童話戰爭","name":"哥哥無法違抗妹妹_托露特＆史托路","gender":"男女","element":"火光","elementSecond":"光","special":"提升能力數值(指定屬性)","specialSecond":"提升能力數值(指定屬性)","wikiNumber":"11823"}
							,
							{"id":"697","eventID":"127","event":"Under Night Tale 童話戰爭","name":"超級血紅帽_莓莓莉‧波普","gender":"女","element":"雷光","elementSecond":"光","special":"問題類型屬性次數大魔術","specialSecond":"問題類型屬性次數大魔術","wikiNumber":"11821"}
							,
							{"id":"698","eventID":"127","event":"Under Night Tale 童話戰爭","name":"狼總是反派_麗可拉‧拉雷特","gender":"女","element":"水雷","elementSecond":"雷","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"11819"}
							,
							{"id":"699","eventID":"127","event":"Under Night Tale 童話戰爭","name":"尋找珍貴之物_柯特＆皮諾丘","gender":"女","element":"雷光","elementSecond":"光","special":"蓄積解放大魔術‧印(全體)","specialSecond":"蓄積解放大魔術‧印(全體)","wikiNumber":"11817"}
							,
							{"id":"700","eventID":"127","event":"Under Night Tale 童話戰爭","name":"白雪王國的姬王子_斯諾‧白雪","gender":"男","element":"火雷","elementSecond":"雷","special":"蓄積解放大魔術‧連(全體)","specialSecond":"蓄積解放大魔術‧連(全體)","wikiNumber":"11815"}
							,
							{"id":"701","eventID":"127","event":"Under Night Tale 童話戰爭","name":"希望演員_艾希‧仙杜瑞拉","gender":"女","element":"水光","elementSecond":"光","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"11813"}
							,
							{"id":"702","eventID":"128","event":"ARES THE VANGUARD","name":"最強的墮落者_迪歐尼索斯Ⅻ","gender":"男","element":"雷雷","elementSecond":"雷","special":"L次數大魔術","specialSecond":"L次數大魔術","wikiNumber":"11850"}
							,
							{"id":"703","eventID":"128","event":"ARES THE VANGUARD","name":"法規守護者_哈迪斯D962","gender":"女","element":"水闇","elementSecond":"闇","special":"弱化大魔術(單體)","specialSecond":"弱化大魔術(單體)","wikiNumber":"11847"}
							,
							{"id":"704","eventID":"128","event":"ARES THE VANGUARD","name":"常識破壞者_艾瑞斯","gender":"女","element":"火雷","elementSecond":"雷","special":"斬擊大魔術,L次數大魔術","specialSecond":"斬擊大魔術,L次數大魔術","wikiNumber":"11844"}
							,
							{"id":"705","eventID":"129","event":"恭賀新禧2020","name":"新春開花！ 艾尼格瑪伽利","gender":"女","element":"火水","elementSecond":"水","special":"捕食大魔術(全體)","specialSecond":"捕食大魔術(全體)","wikiNumber":"10977"}
							,
							{"id":"706","eventID":"129","event":"恭賀新禧2020","name":"夢中的未來 蘿莎莉亞＆諾庫斯","gender":"男女","element":"火雷","elementSecond":"雷","special":"賦予雙重AS","specialSecond":"賦予雙重AS","wikiNumber":"10971"}
							,
							{"id":"707","eventID":"129","event":"恭賀新禧2020","name":"可喜可賀的正月 文繼‧葦原","gender":"男","element":"水雷","elementSecond":"雷","special":"變換問題類型","specialSecond":"統一變換問題類型【強化傷害】","wikiNumber":"10975"}
							,
							{"id":"708","eventID":"129","event":"恭賀新禧2020","name":"佐巴新年 卡多琳＆小滅","gender":"女","element":"水光","elementSecond":"光","special":"提升能力數值(自身)","specialSecond":"問題類型爆破大魔術","wikiNumber":"10973"}
							,
							{"id":"709","eventID":"129","event":"恭賀新禧2020","name":"屍國的黎明 維雷夫基納‧安曼","gender":"男","element":"雷雷","elementSecond":"雷","special":"回答時間停止","specialSecond":"回答時間停止","wikiNumber":"10981"}
							,
							{"id":"710","eventID":"129","event":"恭賀新禧2020","name":"與家人乾杯 薇塔‧芭比奈","gender":"女","element":"雷雷","elementSecond":"雷","special":"保留問題類型","specialSecond":"保留問題類型","wikiNumber":"10979"}
							,
							{"id":"711","eventID":"130","event":"5th Anniversary","name":"與你並肩作戰 極＆八千代","gender":"男女","element":"火火","elementSecond":"火","special":"無屬性變化","specialSecond":"無屬性變化","wikiNumber":"11206"}
							,
							{"id":"712","eventID":"130","event":"5th Anniversary","name":"讓棉花糖融化的幻夜 尊音・歌詠","gender":"女","element":"雷雷","elementSecond":"雷","special":"強化精靈【持續回復＆減輕傷害＆強化傷害】","specialSecond":"強化精靈【持續回復＆減輕傷害＆強化傷害】","wikiNumber":"11208"}
							,
							{"id":"713","eventID":"130","event":"5th Anniversary","name":"培育大魔導士 伊妮亞＆愛莉葉塔","gender":"女","element":"水火","elementSecond":"火","special":"蓄積解放大魔術‧破(全體)","specialSecond":"蓄積解放大魔術‧破(全體)","wikiNumber":"11207"}
							,
							{"id":"714","eventID":"130","event":"5th Anniversary","name":"魔王盛宴 艾盧多貝里克＆露席菈","gender":"男女","element":"火雷","elementSecond":"雷","special":"技能充填(相鄰)","specialSecond":"技能充填(相鄰)","wikiNumber":"11210"}
							,
							{"id":"715","eventID":"130","event":"5th Anniversary","name":"不空想之人 桑榭特‧莉菲爾","gender":"女","element":"雷光","elementSecond":"光","special":"保留問題類型【連鎖數增加】","specialSecond":"保留問題類型【連鎖數增加】","wikiNumber":"11205"}
							,
							{"id":"716","eventID":"130","event":"5th Anniversary","name":"清純LIVE 卡多琳＆莉露姆","gender":"女","element":"水水","elementSecond":"水","special":"時限大魔術","specialSecond":"時限大魔術","wikiNumber":"11209"}
							,
							{"id":"717","eventID":"131","event":"FairyChord 妖精的和弦","name":"劍星華_拉米斯費蕾絲","gender":"女","element":"雷火","elementSecond":"火","special":"L次數大魔術","specialSecond":"L次數大魔術","wikiNumber":"11224"}
							,
							{"id":"718","eventID":"131","event":"FairyChord 妖精的和弦","name":"弦星歌_鶴音理玲","gender":"女","element":"水光","elementSecond":"光","special":"弱化大魔術(單體)","specialSecond":"弱化大魔術(單體)","wikiNumber":"11227"}
							,
							{"id":"719","eventID":"131","event":"FairyChord 妖精的和弦","name":"麗血之眸_紅鬼颯夜","gender":"男","element":"火闇","elementSecond":"闇","special":"保留問題類型【連鎖數增加】","specialSecond":"保留問題類型【連鎖數增加】","wikiNumber":"11230"}
							,
							{"id":"720","eventID":"131","event":"FairyChord 妖精的和弦","name":"交疊的心跳聲_織機美幌","gender":"女","element":"雷雷","elementSecond":"雷","special":"時限大魔術","specialSecond":"時限大魔術","wikiNumber":"11233"}
							,
							{"id":"721","eventID":"131","event":"FairyChord 妖精的和弦","name":"天之咆哮的統治者_早苗立真","gender":"男","element":"水水","elementSecond":"水","special":"無屬性變化","specialSecond":"無屬性變化","wikiNumber":"11236"}
							,
							{"id":"722","eventID":"131","event":"FairyChord 妖精的和弦","name":"胡纏亂攪惡魔_蒂姬","gender":"女","element":"火水","elementSecond":"水","special":"蓄積解放大魔術‧破(全體)","specialSecond":"蓄積解放大魔術‧破(全體)","wikiNumber":"11239"}
							,
							{"id":"723","eventID":"132","event":"感謝祭2020","name":"握星與流星 莉亞菈＆克蕾緹雅","gender":"女","element":"水水","elementSecond":"水","special":"蓄積解放大魔術‧聖(全體)","specialSecond":"蓄積解放大魔術‧聖(全體)","wikiNumber":"11376"}
							,
							{"id":"724","eventID":"132","event":"感謝祭2020","name":"黃金盜賊 凱涅斯＆迦斯帕","gender":"男","element":"雷雷","elementSecond":"雷","special":"提昇(自身)","specialSecond":"提昇(自身)","wikiNumber":"11378"}
							,
							{"id":"725","eventID":"132","event":"感謝祭2020","name":"雙火武盡 瑠璃揚羽＆莉菲爾","gender":"女","element":"雷雷","elementSecond":"雷","special":"問題類型爆破大魔術","specialSecond":"問題類型爆破大魔術","wikiNumber":"11380"}
							,
							{"id":"726","eventID":"132","event":"感謝祭2020","name":"司令官的副官 洛冽緹‧卡那拉","gender":"女","element":"火火","elementSecond":"火","special":"強化精靈【持續回復＆減輕傷害＆提升能力數值】","specialSecond":"強化精靈【持續回復＆減輕傷害＆提升能力數值】","wikiNumber":"11382"}
							,
							{"id":"727","eventID":"132","event":"感謝祭2020","name":"八百八町燈火通明 燈‧夜帷","gender":"女","element":"火火","elementSecond":"火","special":"蓄積解放大魔術‧印(全體)","specialSecond":"蓄積解放大魔術‧印(全體)","wikiNumber":"11384"}
							,
							{"id":"728","eventID":"132","event":"感謝祭2020","name":"玻璃鞋公主 麗可拉‧拉雷特","gender":"女","element":"水水","elementSecond":"水","special":"特殊變換問題類型【連鎖數增加＆技能充填】","specialSecond":"特殊變換問題類型【連鎖數增加＆技能充填】","wikiNumber":"11386"}
							,
							{"id":"729","eventID":"133","event":"Christmas2019","name":"聖夜夢中的少女 伊絲卡‧尼爾瓦","gender":"女","element":"火火","elementSecond":"火","special":"AS特殊變化","specialSecond":"AS特殊變化","wikiNumber":"10913"}
							,
							{"id":"730","eventID":"133","event":"Christmas2019","name":"聖夜之王 米迦菈‧撒拉弗","gender":"女","element":"火火","elementSecond":"火","special":"保留問題類型","specialSecond":"保留問題類型","wikiNumber":"10909"}
							,
							{"id":"731","eventID":"133","event":"Christmas2019","name":"超魔導聖夜 愛莉葉塔＆艾莉絲","gender":"女","element":"水雷","elementSecond":"雷","special":"賦予雙重AS","specialSecond":"賦予雙重AS","wikiNumber":"10907"}
							,
							{"id":"732","eventID":"133","event":"Christmas2019","name":"聖誕老人不辛苦 史特莉＆哈克亞","gender":"女","element":"水水","elementSecond":"水","special":"回答時間停止","specialSecond":"回答時間停止","wikiNumber":"10917"}
							,
							{"id":"733","eventID":"133","event":"Christmas2019","name":"聖夜魔王 伊薩克‧撒拉弗","gender":"男","element":"雷闇","elementSecond":"闇","special":"決鬥","specialSecond":"決鬥","wikiNumber":"10911"}
							,
							{"id":"734","eventID":"133","event":"Christmas2019","name":"回禮的手製料理 梅爾泰‧尼瑟","gender":"女","element":"雷雷","elementSecond":"雷","special":"提昇(單體)","specialSecond":"提昇(單體)","wikiNumber":"10915"}
							,
							{"id":"735","eventID":"134","event":"暑假即將到來","name":"紅淚的破壞千金烏露‧梅菲格爾","gender":"女","element":"火火","elementSecond":"火","special":"回復異常狀態","specialSecond":"強化精靈【持續回復＆強化傷害＆異常狀態失效】","wikiNumber":"10698"}
							,
							{"id":"736","eventID":"135","event":"太陽與月亮之國 喀姆吉納","name":"暗殺舞蹈 吉札兒‧卡爾維基","gender":"女","element":"火火","elementSecond":"火","special":"回答時間停止","specialSecond":"回答時間停止","wikiNumber":"10831"}
							,
							{"id":"737","eventID":"135","event":"太陽與月亮之國 喀姆吉納","name":"偉大的家譜 愛里愛里‧薩巴爾","gender":"女","element":"水水","elementSecond":"水","special":"AS特殊變化","specialSecond":"AS特殊變化","wikiNumber":"10828"}
							,
							{"id":"738","eventID":"135","event":"太陽與月亮之國 喀姆吉納","name":"四聖賢 雷瑪‧薩巴爾","gender":"男","element":"雷雷","elementSecond":"雷","special":"特殊變換問題類型【技能充填】","specialSecond":"特殊變換問題類型【技能充填】","wikiNumber":"10825"}
							,
							{"id":"739","eventID":"136","event":"感謝祭2019","name":"My FavoriteTriangles 艾妮","gender":"女","element":"火光","elementSecond":"光","special":"蓄積解放大魔術‧聖(全體)","specialSecond":"蓄積解放大魔術‧聖(全體)","wikiNumber":"10152"}
							,
							{"id":"740","eventID":"136","event":"感謝祭2019","name":"Lone Roar雷迪厄斯‧利維斯","gender":"男","element":"火闇","elementSecond":"闇","special":"一閃斬擊大魔術","specialSecond":"一閃斬擊大魔術","wikiNumber":"10154"}
							,
							{"id":"741","eventID":"136","event":"感謝祭2019","name":"☆點心時間女☆琪夏菈‧歐羅爾","gender":"女","element":"水火","elementSecond":"火","special":"變換問題類型","specialSecond":"統一變換問題類型【強化傷害】","wikiNumber":"10160"}
							,
							{"id":"742","eventID":"136","event":"感謝祭2019","name":"熱水滴不停的戰神 薩克特‧大神","gender":"男","element":"水水","elementSecond":"水","special":"純屬性強化","specialSecond":"純屬性強化","wikiNumber":"10158"}
							,
							{"id":"743","eventID":"136","event":"感謝祭2019","name":"這就是富含文化的生活夏娃‧貝茨","gender":"女","element":"雷闇","elementSecond":"闇","special":"蓄積解放大魔術‧邪(全體)","specialSecond":"蓄積解放大魔術‧邪(全體)","wikiNumber":"10156"}
							,
							{"id":"744","eventID":"136","event":"感謝祭2019","name":"應該閱讀的神獸托托‧獏羅","gender":"男女","element":"雷火","elementSecond":"火","special":"多重魔術(單體)","specialSecond":"激化大魔術","wikiNumber":"10162"}
							,
							{"id":"745","eventID":"137","event":"4th anniversary","name":"晚宴的計策 迪特利希＆蘿葳","gender":"男女","element":"火水","elementSecond":"水","special":"AS倍率強化","specialSecond":"AS倍率強化","wikiNumber":"9952"}
							,
							{"id":"746","eventID":"137","event":"4th anniversary","name":"心連心 和國三神駕到！","gender":"男女","element":"火雷","elementSecond":"雷","special":"賦予雙重技能(單體)","specialSecond":"賦予雙重技能(單體)","wikiNumber":"9950"}
							,
							{"id":"747","eventID":"137","event":"4th anniversary","name":"羽翼之舞 艾盧多貝里克＆露席菈","gender":"男女","element":"水光","elementSecond":"光","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"9954"}
							,
							{"id":"748","eventID":"137","event":"4th anniversary","name":"抵抗原罪的凜煌眼","gender":"女","element":"水闇","elementSecond":"闇","special":"詠唱多重大魔術","specialSecond":"詠唱多重大魔術","wikiNumber":"9956"}
							,
							{"id":"749","eventID":"137","event":"4th anniversary","name":"祕密隱於玫瑰下 一樹＆凜華篇","gender":"男女","element":"雷光","elementSecond":"光","special":"融合大魔術(全體)","specialSecond":"融合大魔術(全體)","wikiNumber":"9948"}
							,
							{"id":"750","eventID":"137","event":"4th anniversary","name":"緊緊連繫的姊妹羈絆 法姆＆費露琪","gender":"女","element":"雷火","elementSecond":"火","special":"特殊變換問題類型【連鎖數增加＆技能充填】","specialSecond":"特殊變換問題類型【連鎖數增加＆技能充填】","wikiNumber":"9958"}
							,
							{"id":"751","eventID":"138","event":"恭賀新禧2019","name":"全新的救世與正義 萊葛爾＆席菈","gender":"男女","element":"火雷","elementSecond":"雷","special":"產生連結問題類型","specialSecond":"產生連結問題類型","wikiNumber":"11011"}
							,
							{"id":"752","eventID":"138","event":"恭賀新禧2019","name":"拂曉空賊記 齊格‧庫勒耶","gender":"男","element":"火闇","elementSecond":"闇","special":"提昇(相鄰)","specialSecond":"提昇(相鄰)","wikiNumber":"11008"}
							,
							{"id":"753","eventID":"138","event":"恭賀新禧2019","name":"初春太陽燦爛 卡奴耶‧德‧亞克","gender":"女","element":"水光","elementSecond":"光","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"11010"}
							,
							{"id":"754","eventID":"138","event":"恭賀新禧2019","name":"搖響新春之鈴 史特莉‧席絲特","gender":"女","element":"水雷","elementSecond":"雷","special":"融合強化","specialSecond":"融合強化","wikiNumber":"11007"}
							,
							{"id":"755","eventID":"138","event":"恭賀新禧2019","name":"黎明的雙星 愛＆愛","gender":"女","element":"雷雷","elementSecond":"雷","special":"技能充填(相鄰)","specialSecond":"技能充填(相鄰)","wikiNumber":"11009"}
							,
							{"id":"756","eventID":"138","event":"恭賀新禧2019","name":"恭賀新禧‧雙劍羽 樁＆葉月","gender":"女","element":"雷水","elementSecond":"水","special":"融合大魔術(全體)","specialSecond":"融合大魔術(全體)","wikiNumber":"11012"}
							,
							{"id":"757","eventID":"139","event":"秋末迎冬感謝祭","name":"雙龍天翔 阿德萊德＆蜜涅娃","gender":"女","element":"火光","elementSecond":"光","special":"融合大魔術(全體)","specialSecond":"融合大魔術(全體)","wikiNumber":"11718"}
							,
							{"id":"758","eventID":"139","event":"秋末迎冬感謝祭","name":"誘惑的幻想顯界 謝爾菈＆普拉米亞","gender":"女","element":"火光","elementSecond":"光","special":"複屬性回復","specialSecond":"複屬性回復","wikiNumber":"11721"}
							,
							{"id":"759","eventID":"139","event":"秋末迎冬感謝祭","name":"Like Sisters 艾妮＆庫蘭","gender":"女","element":"水水","elementSecond":"水","special":"炸裂大魔術","specialSecond":"炸裂大魔術","wikiNumber":"11717"}
							,
							{"id":"760","eventID":"139","event":"秋末迎冬感謝祭","name":"情比天高 八重＆冰雨","gender":"女","element":"水光","elementSecond":"光","special":"提昇(全體)","specialSecond":"弱化大魔術(全體)","wikiNumber":"11722"}
							,
							{"id":"761","eventID":"139","event":"秋末迎冬感謝祭","name":"突擊勝利！ 亞露露＆維多利亞","gender":"女","element":"雷火","elementSecond":"火","special":"產生連結問題類型","specialSecond":"產生連結問題類型","wikiNumber":"11719"}
							,
							{"id":"762","eventID":"139","event":"秋末迎冬感謝祭","name":"年少的聖劍王與霸眼王 《邂逅》","gender":"男","element":"雷雷","elementSecond":"雷","special":"一閃斬擊大魔術","specialSecond":"一閃斬擊大魔術","wikiNumber":"11720"}
							,
							{"id":"763","eventID":"140","event":"仲夏感謝季2018","name":"人類總護士 卡多琳‧G‧U","gender":"女","element":"火水","elementSecond":"水","special":"大魔術(全體)","specialSecond":"強化複屬性傷害","wikiNumber":"11174"}
							,
							{"id":"764","eventID":"140","event":"仲夏感謝季2018","name":"星之聖女候補 克蕾緹雅‧布萊葉","gender":"女","element":"水水","elementSecond":"水","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"11175"}
							,
							{"id":"765","eventID":"140","event":"仲夏感謝季2018","name":"歌中交織著夢幻 尊音‧歌詠","gender":"女","element":"雷雷","elementSecond":"雷","special":"強化精靈【持續回復＆異常狀態失效】","specialSecond":"強化精靈【持續回復＆強化傷害＆異常狀態失效】","wikiNumber":"11177"}
							,
							{"id":"766","eventID":"140","event":"仲夏感謝季2018","name":"不死身的戰神 迪特利希‧貝爾克","gender":"男","element":"水水","elementSecond":"水","special":"大魔術(單體)","specialSecond":"大魔術(單體)","wikiNumber":"11172"}
							,
							{"id":"767","eventID":"140","event":"仲夏感謝季2018","name":"黃昏繼承者 桑榭特‧莉菲爾","gender":"女","element":"雷雷","elementSecond":"雷","special":"技能充填(單體)","specialSecond":"技能充填(單體)","wikiNumber":"11178"}
							,
							{"id":"768","eventID":"140","event":"仲夏感謝季2018","name":"玩樂即是魔導 聖莉露姆‧洛洛特","gender":"女","element":"火火","elementSecond":"火","special":"連鎖解放大魔術","specialSecond":"連鎖解放大魔術","wikiNumber":"11176"}
							,
							{"id":"769","eventID":"140","event":"仲夏感謝季2018","name":"黑之頂點 艾盧多貝里克‧哥德","gender":"男","element":"水火","elementSecond":"火","special":"多重魔術(單體)","specialSecond":"激化大魔術","wikiNumber":"11171"}
							,
							{"id":"770","eventID":"140","event":"仲夏感謝季2018","name":"靦腆破顏一笑戰線 阿斯塔‧拉德","gender":"男女","element":"雷光","elementSecond":"光","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"11173"}
							,
							{"id":"771","eventID":"141","event":"丁酉年末感謝季2018","name":"假日主從 茲洛瓦＆露露貝爾","gender":"女","element":"火闇","elementSecond":"闇","special":"強化精靈【持續回復＆提升能力數值】","specialSecond":"強化精靈【持續回復＆減輕傷害＆提升能力數值】","wikiNumber":"11405"}
							,
							{"id":"772","eventID":"141","event":"丁酉年末感謝季2018","name":"傭兵仁義 菲利庫斯‧榭法","gender":"男","element":"水水","elementSecond":"水","special":"技能充填(全體)","specialSecond":"技能充填(全體)","wikiNumber":"11404"}
							,
							{"id":"773","eventID":"141","event":"丁酉年末感謝季2018","name":"甜蜜BOMB 維多利亞‧涅爾德","gender":"女","element":"雷光","elementSecond":"光","special":"提升能力數值(自身)","specialSecond":"提昇(自身)","wikiNumber":"11400"}
							,
							{"id":"774","eventID":"141","event":"丁酉年末感謝季2018","name":"豪華絢爛武刀 葉月‧夢語","gender":"女","element":"火水","elementSecond":"水","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"11401"}
							,
							{"id":"775","eventID":"141","event":"丁酉年末感謝季2018","name":"耀眼奪目的黃金 愛莉葉塔‧多娃","gender":"女","element":"水水","elementSecond":"水","special":"純屬性大魔術(全體)","specialSecond":"純屬性大魔術(全體)","wikiNumber":"11403"}
							,
							{"id":"776","eventID":"141","event":"丁酉年末感謝季2018","name":"唯一的幸福 愛麗絲＆艾莉卡","gender":"女","element":"雷火","elementSecond":"火","special":"強化複屬性傷害","specialSecond":"強化複屬性傷害","wikiNumber":"11402"}
							,
							{"id":"777","eventID":"142","event":"神龍降臨Ⅱ","name":"秘妖的朧月騎士_婕莉‧婕莉","gender":"女","element":"水火","elementSecond":"火","special":"特殊變換問題類型【強化傷害】","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"7437"}
							,
							{"id":"778","eventID":"142","event":"神龍降臨Ⅱ","name":"焦天龍武尊_王‧香韻","gender":"女","element":"火雷","elementSecond":"雷","special":"變換問題類型","specialSecond":"特殊變換問題類型【隨機】","wikiNumber":"7438"}
							,
							{"id":"779","eventID":"142","event":"神龍降臨Ⅱ","name":"黑魔龍師_渥爾巴‧佐納","gender":"男","element":"火火","elementSecond":"火","special":"比例削減(全體)","specialSecond":"比例削減(全體)","wikiNumber":"7439"}
							,
							{"id":"780","eventID":"142","event":"神龍降臨Ⅱ","name":"儘滅的鬼紅龍_薩諾卡拉佐","gender":"男","element":"火雷","elementSecond":"雷","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"7440"}
							,
							{"id":"781","eventID":"142","event":"神龍降臨Ⅱ","name":"烈龍武俠_巴斯‧拉修爾","gender":"男","element":"火火","elementSecond":"火","special":"強化傷害(指定屬性)","specialSecond":"強化傷害(指定屬性)","wikiNumber":"7441"}
							,
							{"id":"782","eventID":"142","event":"神龍降臨Ⅱ","name":"晴眼的龍賢者_克洛伊‧麥肯濟","gender":"男","element":"水水","elementSecond":"水","special":"毒","specialSecond":"毒","wikiNumber":"7442"}
							,
							{"id":"783","eventID":"142","event":"神龍降臨Ⅱ","name":"激龍淒腕_思嘉‧詠","gender":"女","element":"水雷","elementSecond":"雷","special":"變換問題類型","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"7443"}
							,
							{"id":"784","eventID":"142","event":"神龍降臨Ⅱ","name":"凜龍穿牙_帕美拉‧霍克","gender":"女","element":"雷雷","elementSecond":"雷","special":"回復異常狀態＆復活","specialSecond":"回復異常狀態＆復活","wikiNumber":"7444"}
							,
							{"id":"785","eventID":"142","event":"神龍降臨Ⅱ","name":"虛實彼方的魔神龍_卜修托納薩","gender":"男","element":"雷雷","elementSecond":"雷","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"7445"}
							,
							{"id":"786","eventID":"143","event":"古代森林的千年櫻花","name":"春風之麗櫻姬_菲奧娜‧卡莉娜","gender":"女","element":"水水","elementSecond":"水","special":"延遲(全體)","specialSecond":"延遲(全體)","wikiNumber":"7106"}
							,
							{"id":"787","eventID":"143","event":"古代森林的千年櫻花","name":"花瓣般的美夢_杜鵑‧神木","gender":"女","element":"火光","elementSecond":"光","special":"回復異常狀態","specialSecond":"回復異常狀態","wikiNumber":"7107"}
							,
							{"id":"788","eventID":"143","event":"古代森林的千年櫻花","name":"滿開櫻長者_茉莉‧相模屋","gender":"女","element":"雷雷","elementSecond":"雷","special":"持續回復","specialSecond":"持續回復","wikiNumber":"7108"}
							,
							{"id":"789","eventID":"143","event":"古代森林的千年櫻花","name":"落櫻之千年舞_八彌子‧御神樂","gender":"女","element":"火火","elementSecond":"火","special":"變換問題類型","specialSecond":"特殊變換問題類型【減輕傷害】","wikiNumber":"7109"}
							,
							{"id":"790","eventID":"144","event":"鬼月限定2017","name":"九條命的邪魅怪貓‧貓又 野里","gender":"女","element":"水闇","elementSecond":"闇","special":"阻隔傷害","specialSecond":"阻隔傷害","wikiNumber":"800811"}
							,
							{"id":"791","eventID":"144","event":"鬼月限定2017","name":"用冤魂沐浴的男爵‧鬼王 北島","gender":"男","element":"雷雷","elementSecond":"雷","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"800812"}
							,
							{"id":"792","eventID":"144","event":"鬼月限定2017","name":"藏在背後的血盆大口‧二口女 雪乃","gender":"女","element":"水水","elementSecond":"水","special":"技能充填(全體)","specialSecond":"技能充填(全體)","wikiNumber":"800813"}
							,
							{"id":"793","eventID":"144","event":"鬼月限定2017","name":"不被期待的悲哀嬰靈‧座敷童子 千鶴","gender":"女","element":"火火","elementSecond":"火","special":"起死回生","specialSecond":"起死回生","wikiNumber":"800814"}
							,
							{"id":"794","eventID":"144","event":"鬼月限定2017","name":"吸食男子首級的妖魔‧絡新婦 麗子","gender":"女","element":"雷雷","elementSecond":"雷","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"800815"}
							,
							{"id":"795","eventID":"145","event":"情人紀念2017","name":"跨越鵲橋的戀人 牛郎&織女","gender":"男女","element":"水光","elementSecond":"光","special":"技能複製","specialSecond":"技能複製","wikiNumber":"800714"}
							,
							{"id":"796","eventID":"145","event":"情人紀念2017","name":"珍惜彼此的幸福 斯林&莎曼妲","gender":"男女","element":"火闇","elementSecond":"闇","special":"大魔術(單體)","specialSecond":"大魔術(單體)","wikiNumber":"800715"}
							,
							{"id":"797","eventID":"145","event":"情人紀念2017","name":"難以坦率的戀情 艾爾多&雅西兒","gender":"男女","element":"水雷","elementSecond":"雷","special":"回復異常狀態","specialSecond":"回復異常狀態＆復活","wikiNumber":"800716"}
							,
							{"id":"798","eventID":"145","event":"情人紀念2017","name":"魔界的貴族愛侶 路克&瑪姬","gender":"男女","element":"雷火","elementSecond":"火","special":"延遲(單體)","specialSecond":"延遲(單體)","wikiNumber":"800717"}
							,
							{"id":"799","eventID":"145","event":"情人紀念2017","name":"盜賊與公主的奇戀 凱&琪琪","gender":"男女","element":"雷水","elementSecond":"水","special":"犧牲魔術(全體)","specialSecond":"犧牲魔術(全體)","wikiNumber":"800718"}
							,
							{"id":"800","eventID":"145","event":"情人紀念2017","name":"紫羅蘭的浪漫情意 迦瑪","gender":"男","element":"水水","elementSecond":"水","special":"物理反擊","specialSecond":"物理反擊","wikiNumber":"800719"}
							,
							{"id":"801","eventID":"145","event":"情人紀念2017","name":"告白專用的巧克力師傅 寶菈","gender":"女","element":"雷雷","elementSecond":"雷","special":"特殊變換問題類型【連鎖數增加】","specialSecond":"特殊變換問題類型【連鎖數增加】","wikiNumber":"800816"}
							,
							{"id":"802","eventID":"145","event":"情人紀念2017","name":"牽起紅線的祝福精靈 悠悠","gender":"女","element":"火火","elementSecond":"火","special":"解除效果(全體)【防禦＆阻隔傷害】","specialSecond":"解除效果大魔術(全體)【防禦＆阻隔傷害＆技能反擊】","wikiNumber":"800817"}
							,
							{"id":"803","eventID":"145","event":"情人紀念2017","name":"融化愛意的蜂蜜鬆餅 蜜多莉","gender":"女","element":"雷雷","elementSecond":"雷","special":"技能複製","specialSecond":"技能複製","wikiNumber":"800818"}
							,
							{"id":"804","eventID":"146","event":"跑錯地方的聖誕驚喜","name":"神樹下王子的祝福_瑟爾&提利爾","gender":"男","element":"水光","elementSecond":"光","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"801093"}
							,
							{"id":"805","eventID":"146","event":"跑錯地方的聖誕驚喜","name":"在聖誕夜溫暖你的心_可蘿涅","gender":"女","element":"雷火","elementSecond":"火","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"801094"}
							,
							{"id":"806","eventID":"146","event":"跑錯地方的聖誕驚喜","name":"沾染了節慶歡樂的魔法靈_漫梭","gender":"男","element":"火雷","elementSecond":"雷","special":"回復","specialSecond":"回復","wikiNumber":"801095"}
							,
							{"id":"807","eventID":"146","event":"跑錯地方的聖誕驚喜","name":"冰雪世界裡的寂寞心靈_帕榭菈","gender":"女","element":"水火","elementSecond":"火","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"801096"}
							,
							{"id":"808","eventID":"146","event":"跑錯地方的聖誕驚喜","name":"聖誕晚會上的派對女孩_悠可","gender":"女","element":"火水","elementSecond":"水","special":"技能充填＆延遲(單體)","specialSecond":"技能充填＆延遲(單體)","wikiNumber":"801097"}
							,
							{"id":"809","eventID":"146","event":"跑錯地方的聖誕驚喜","name":"首都餐館的新任主廚_汀娜","gender":"女","element":"雷闇","elementSecond":"闇","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"801098"}
							,
							{"id":"810","eventID":"146","event":"跑錯地方的聖誕驚喜","name":"乘著風雪飛躍的身影_冰絢","gender":"女","element":"火水","elementSecond":"水","special":"特效大魔術(全體)","specialSecond":"特效大魔術(全體)","wikiNumber":"801099"}
							,
							{"id":"811","eventID":"146","event":"跑錯地方的聖誕驚喜","name":"雪地上最棒的紀念品_娜娜莉","gender":"女","element":"雷光","elementSecond":"光","special":"變換問題類型","specialSecond":"特殊變換問題類型【強化傷害】","wikiNumber":"801100"}
							,
							{"id":"812","eventID":"146","event":"跑錯地方的聖誕驚喜","name":"傳遞祝福的潔白天使_莉莎","gender":"女","element":"水雷","elementSecond":"雷","special":"回復異常狀態","specialSecond":"回復異常狀態","wikiNumber":"801101"}
							,
							{"id":"813","eventID":"147","event":"初夏的魔法使慶典","name":"詠唱傳說的流浪詩人_艾斌","gender":"男","element":"雷闇","elementSecond":"闇","special":"特殊變換問題類型【減輕傷害】","specialSecond":"強化精靈【持續回復＆減輕傷害＆強化傷害】","wikiNumber":"801370"}
							,
							{"id":"814","eventID":"147","event":"初夏的魔法使慶典","name":"覺醒的爆焰智賢_夏孟","gender":"女","element":"火光","elementSecond":"光","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"801369"}
							,
							{"id":"815","eventID":"147","event":"初夏的魔法使慶典","name":"雷電交織的龍戰士_珍妮","gender":"女","element":"雷光","elementSecond":"光","special":"防禦","specialSecond":"防禦","wikiNumber":"801368"}
							,
							{"id":"816","eventID":"147","event":"初夏的魔法使慶典","name":"禁咒下的藝術品_魅璃","gender":"女","element":"雷水","elementSecond":"水","special":"強化傷害(自身)","specialSecond":"強化傷害(自身)","wikiNumber":"801367"}
							,
							{"id":"817","eventID":"147","event":"初夏的魔法使慶典","name":"翻弄洪水的魔導士_瓦泰依娜","gender":"女","element":"水闇","elementSecond":"闇","special":"反動大魔術‧蝕(單體)","specialSecond":"反動大魔術‧蝕(單體)","wikiNumber":"801366"}
							,
							{"id":"818","eventID":"147","event":"初夏的魔法使慶典","name":"劍光中的身影_妲妮雅","gender":"女","element":"水雷","elementSecond":"雷","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"801365"}
							,
							{"id":"819","eventID":"148","event":"雞茲限定  感謝祭2017","name":"袖裡揮出萬千變化 洋棠","gender":"女","element":"雷火","elementSecond":"火","special":"回復異常狀態","specialSecond":"回復異常狀態","wikiNumber":"801324"}
							,
							{"id":"820","eventID":"148","event":"雞茲限定  感謝祭2017","name":"掌控歡樂的戲法少女 娜爾希","gender":"女","element":"火光","elementSecond":"光","special":"特殊變換問題類型【連鎖數增加】","specialSecond":"特殊變換問題類型【連鎖數增加】","wikiNumber":"801325"}
							,
							{"id":"821","eventID":"148","event":"雞茲限定  感謝祭2017","name":"陪我做個甜美的夢 奈婭","gender":"女","element":"火水","elementSecond":"水","special":"延遲大魔術(單體)","specialSecond":"延遲大魔術(單體)","wikiNumber":"801326"}
							,
							{"id":"822","eventID":"148","event":"雞茲限定  感謝祭2017","name":"連性別也一併偽裝 里德洛可","gender":"男","element":"水闇","elementSecond":"闇","special":"防禦連鎖","specialSecond":"防禦連鎖","wikiNumber":"801327"}
							,
							{"id":"823","eventID":"148","event":"雞茲限定  感謝祭2017","name":"馬戲團的馴虎女王 蕾莉雅","gender":"女","element":"水光","elementSecond":"光","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"801328"}
							,
							{"id":"824","eventID":"149","event":"Holloween night2017","name":"擄獲人心的豔光 賽特絲","gender":"女","element":"雷火","elementSecond":"火","special":"特殊變換問題類型【連鎖數增加】","specialSecond":"多重魔術(單體)","wikiNumber":"801724"}
							,
							{"id":"825","eventID":"149","event":"Holloween night2017","name":"天分優異的甜點師 帕西娜","gender":"女","element":"火闇","elementSecond":"闇","special":"變換問題類型","specialSecond":"特殊變換問題類型【強化傷害＆回復】","wikiNumber":"801725"}
							,
							{"id":"826","eventID":"149","event":"Holloween night2017","name":"魔女一族的資格者 雪恩‧莎朵莉","gender":"女","element":"水闇","elementSecond":"闇","special":"提升能力數值(全體)","specialSecond":"提升能力數值(全體)","wikiNumber":"801726"}
							,
							{"id":"827","eventID":"149","event":"Holloween night2017","name":"第一名的甜點師傅 泰隆","gender":"男","element":"水雷","elementSecond":"雷","special":"提昇(自身)","specialSecond":"提昇(自身)","wikiNumber":"801727"}
							,
							{"id":"828","eventID":"149","event":"Holloween night2017","name":"收集各地故事的旅人 艾斌","gender":"男","element":"雷雷","elementSecond":"雷","special":"強化精靈【強化傷害＆減輕傷害】","specialSecond":"強化精靈【強化傷害＆減輕傷害】","wikiNumber":"801728"}
							,
							{"id":"829","eventID":"150","event":"黑貓維茲魔幻金夏趴2020 安可曲","name":"蒸汽火車與魔導士 桑榭特‧莉菲爾","gender":"女","element":"雷光","elementSecond":"光","special":"提升能力數值(指定屬性)","specialSecond":"提升能力數值(指定屬性)","wikiNumber":"11802"}
							,
							{"id":"830","eventID":"150","event":"黑貓維茲魔幻金夏趴2020 安可曲","name":"卡拉OK生日派對！ 鶴音理玲","gender":"女","element":"水光","elementSecond":"光","special":"問題類型屬性次數大魔術","specialSecond":"問題類型屬性次數大魔術","wikiNumber":"11805"}
							,
							{"id":"831","eventID":"150","event":"黑貓維茲魔幻金夏趴2020 安可曲","name":"怪獸的老家美食 愛莉葉塔‧多娃","gender":"女","element":"火光","elementSecond":"光","special":"蓄積解放大魔術‧印(全體)","specialSecond":"蓄積解放大魔術‧印(全體)","wikiNumber":"11803"}
							,
							{"id":"832","eventID":"150","event":"黑貓維茲魔幻金夏趴2020 安可曲","name":"享樂的邀約 迪特利希‧貝爾克","gender":"男","element":"水雷","elementSecond":"雷","special":"蓄積解放大魔術‧連(全體)","specialSecond":"蓄積解放大魔術‧連(全體)","wikiNumber":"11804"}
							,
							{"id":"833","eventID":"150","event":"黑貓維茲魔幻金夏趴2020 安可曲","name":"睏到不行的朝陽 卡奴耶‧德‧亞克","gender":"女","element":"火光","elementSecond":"光","special":"強化蓄積解放・聖","specialSecond":"強化蓄積解放・聖","wikiNumber":"11800"}
							,
							{"id":"834","eventID":"150","event":"黑貓維茲魔幻金夏趴2020 安可曲","name":"詐騙人生 凱涅斯‧哈瓦","gender":"男","element":"雷火","elementSecond":"火","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"11801"}
							,
							{"id":"835","eventID":"151","event":"MARELESSⅢ 夢境訣別","name":"訣別 蘿莎莉亞‧哈特","gender":"女","element":"火光","elementSecond":"光","special":"問題類型屬性次數大魔術","specialSecond":"問題類型屬性次數大魔術","wikiNumber":"11892"}
							,
							{"id":"836","eventID":"151","event":"MARELESSⅢ 夢境訣別","name":"甘美的衡量得失 阿浮利德","gender":"男","element":"水闇","elementSecond":"闇","special":"時限大魔術","specialSecond":"時限大魔術","wikiNumber":"11907"}
							,
							{"id":"837","eventID":"151","event":"MARELESSⅢ 夢境訣別","name":"新的誓言 拉提歐‧星辰","gender":"男","element":"雷光","elementSecond":"光","special":"蓄積解放大魔術‧連(全體)","specialSecond":"蓄積解放大魔術‧連(全體)","wikiNumber":"11901"}
							,
							{"id":"838","eventID":"151","event":"MARELESSⅢ 夢境訣別","name":"徹夜未眠 愛琳‧葉茨","gender":"女","element":"水光","elementSecond":"光","special":"防禦","specialSecond":"防禦","wikiNumber":"11898"}
							,
							{"id":"839","eventID":"151","event":"MARELESSⅢ 夢境訣別","name":"溫暖光輝 露西尼雅‧雷梅蒂","gender":"女","element":"火火","elementSecond":"火","special":"L次數大魔術","specialSecond":"L次數大魔術","wikiNumber":"11904"}
							,
							{"id":"840","eventID":"151","event":"MARELESSⅢ 夢境訣別","name":"擊碎夢想的惡夢 諾庫斯‧瓦尼塔斯","gender":"男","element":"雷闇","elementSecond":"闇","special":"弱化大魔術(單體)","specialSecond":"弱化大魔術(單體)","wikiNumber":"11895"}
							,
							{"id":"841","eventID":"152","event":"迷幻泛神祭","name":"勇不畏懼 賽梵緹","gender":"女","element":"雷闇","elementSecond":"闇","special":"鐵壁‧極","specialSecond":"異常狀態失效","wikiNumber":"801968"}
							,
							{"id":"842","eventID":"152","event":"迷幻泛神祭","name":"永遠不嫌多 貝那‧斐合","gender":"女","element":"水水","elementSecond":"水","special":"時限大魔術","specialSecond":"時限大魔術","wikiNumber":"801970"}
							,
							{"id":"843","eventID":"152","event":"迷幻泛神祭","name":"受到祝福的護法 阿瓦德‧斐合","gender":"男","element":"火光","elementSecond":"光","special":"技能複製","specialSecond":"技能複製","wikiNumber":"801972"}
							,
							{"id":"844","eventID":"152","event":"迷幻泛神祭","name":"致命吸引的舞女 蓓琳子","gender":"女","element":"火火","elementSecond":"火","special":"毒","specialSecond":"毒","wikiNumber":"801974"}
							,
							{"id":"845","eventID":"152","event":"迷幻泛神祭","name":"勝利組的煩惱 柢鐵傅","gender":"男","element":"水火","elementSecond":"火","special":"炸裂大魔術","specialSecond":"炸裂大魔術","wikiNumber":"801976"}
							,
							{"id":"846","eventID":"152","event":"迷幻泛神祭","name":"不可理喻的女神 月亮‧芙萊絲","gender":"女","element":"水光","elementSecond":"光","special":"技能充填＆延遲(全體)","specialSecond":"技能充填＆延遲(全體)","wikiNumber":"801978"}
							,
							{"id":"847","eventID":"152","event":"迷幻泛神祭","name":"貪杯醉酒的魔獸 神獸‧俊南","gender":"男","element":"水闇","elementSecond":"闇","special":"斬擊大魔術","specialSecond":"斬擊大魔術","wikiNumber":"801980"}
							,
							{"id":"848","eventID":"153","event":"女神的惡作劇之戰！ 光明與黑暗的亂七八糟萬聖節","name":"黑貓女神 普莉菲卡‧朗克斯塔","gender":"女","element":"火闇","elementSecond":"闇","special":"時限大魔術","specialSecond":"時限大魔術","wikiNumber":"11870"}
							,
							{"id":"849","eventID":"153","event":"女神的惡作劇之戰！ 光明與黑暗的亂七八糟萬聖節","name":"角色扮演女神 莉塔‧班尼斯特","gender":"女","element":"水水","elementSecond":"水","special":"L次數大魔術","specialSecond":"L次數大魔術","wikiNumber":"11873"}
							,
							{"id":"850","eventID":"153","event":"女神的惡作劇之戰！ 光明與黑暗的亂七八糟萬聖節","name":"規則之女神見習生 琳婕‧布勞","gender":"女","element":"雷光","elementSecond":"光","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"11876"}
							,
							{"id":"851","eventID":"154","event":"艾尼格瑪之花","name":"超艾尼格瑪 艾尼格瑪伽利","gender":"女","element":"火光","elementSecond":"光","special":"蓄積解放大魔術‧連(全體)","specialSecond":"蓄積解放大魔術‧連(全體)","wikiNumber":"11948"}
							,
							{"id":"852","eventID":"154","event":"艾尼格瑪之花","name":"實錄！ 艾尼格瑪太陽花","gender":"女","element":"雷闇","elementSecond":"闇","special":"時限大魔術","specialSecond":"時限大魔術","wikiNumber":"11951"}
							,
							{"id":"853","eventID":"154","event":"艾尼格瑪之花","name":"壯麗 艾尼格瑪晨輝","gender":"女","element":"水水","elementSecond":"水","special":"蓄積解放大魔術‧印(單體)","specialSecond":"蓄積解放大魔術‧印(單體)","wikiNumber":"11954"}
							,
							{"id":"854","eventID":"154","event":"艾尼格瑪之花","name":"額！ 艾尼格瑪幸運草","gender":"女","element":"水光","elementSecond":"光","special":"多重魔術(單體)","specialSecond":"多重魔術(單體)","wikiNumber":"11957"}
							,
							{"id":"855","eventID":"154","event":"艾尼格瑪之花","name":"超of可愛 艾尼格瑪鬱金香","gender":"女","element":"雷光","elementSecond":"光","special":"防禦","specialSecond":"防禦","wikiNumber":"11960"}
							,
							{"id":"856","eventID":"154","event":"艾尼格瑪之花","name":"轉職組 艾尼格瑪黑百合","gender":"女","element":"火闇","elementSecond":"闇","special":"弱化大魔術(單體)","specialSecond":"弱化大魔術(單體)","wikiNumber":"11963"}
							,
							{"id":"857","eventID":"155","event":"2020年感謝下載紀念","name":"大冒險中毒 珍妮佛‧亞波特","gender":"女","element":"火光","elementSecond":"光","special":"大魔術(全體)","specialSecond":"大魔術(全體)","wikiNumber":"11936"}

						],
				"baseurl":"index.html",//相對路徑
				"limitNumber":20,//限制儲存數量			
			}
})