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
							{"eventID":"5","name":"阿爾克納與星之旅途"},
							{"eventID":"6","name":"再續‧超魔導列傳"},
							{"eventID":"7","name":"續.超魔導列傳"},
							{"eventID":"8","name":"超魔導列傳"},
							{"eventID":"9","name":"職‧超魔導列傳"},
							{"eventID":"10","name":"The Iridescence of Soul 靈魂的虹彩"},
							{"eventID":"11","name":"The Luminescence of Soul 靈魂的微光"},
							{"eventID":"12","name":"跨界勇者培訓中"},
							{"eventID":"13","name":"天上岬的調香師"},
							{"eventID":"14","name":"天上岬～永恆的公主～"},
							{"eventID":"15","name":"歡迎光臨天上岬山麓咖啡廳！"},
							{"eventID":"16","name":"雙翼的失落伊甸Ⅲ"},
							{"eventID":"17","name":"雙翼的失落伊甸Ⅱ WWMF"},
							{"eventID":"18","name":"雙翼的失落伊甸"},
							{"eventID":"19","name":"歌頌永恆的克羅諾斯Ⅲ"},
							{"eventID":"20","name":"歌頌永恆的克羅諾斯Ⅱ"},
							{"eventID":"21","name":"歌頌永恆的克羅諾斯"},
							{"eventID":"22","name":"啵！神明大人_～北風精靈與炎之鳥～"},
							{"eventID":"23","name":"SUGARLESS_BAMBINA"},
							{"eventID":"24","name":"SUGARLESS BAMBINA Ⅱ Slaughter Prison"},
							{"eventID":"25","name":"FairyChord Prelude"},
							{"eventID":"26","name":"寄語冬夜的祈願者"},
							{"eventID":"27","name":"寄語冬夜的祈願者Ⅱ_虛妄之地的追尋者"},
							{"eventID":"28","name":"喰牙RIZE3 -Fang-O’-Blazer"},
							{"eventID":"29","name":"喰牙RIZE3-外傳- 冥道死門的極境者"},
							{"eventID":"30","name":"喰牙RIZE2_-Tearing_Eyes"},
							{"eventID":"31","name":"喰牙RIZE"},
							{"eventID":"32","name":"八百萬諸神祕聞4_沉眠京城的悠久之歌"},
							{"eventID":"33","name":"YAOYORO_Z"},
							{"eventID":"34","name":"八百萬諸神祕聞2"},
							{"eventID":"35","name":"八百萬諸神祕聞"},
							{"eventID":"36","name":"豔夏濱海大騷動"},
							{"eventID":"37","name":"Birth Of New Order2 大罪"},
							{"eventID":"38","name":"Birth Of New Order"},
							{"eventID":"39","name":"黑貓維茲 仲夏感謝季2019"},
							{"eventID":"40","name":"黃昏無夢者Ⅳ 黃昏mareless"},
							{"eventID":"41","name":"黃昏無夢者Ⅲ_絡園loreless"},
							{"eventID":"42","name":"黃昏無夢者Ⅱ 殘響dearless"},
							{"eventID":"43","name":"黃昏無夢者"},
							{"eventID":"44","name":"霸眼戰線 終戰之凜煌眼 -前篇"},
							{"eventID":"45","name":"霸眼戰線4 覺醒之王"},
							{"eventID":"46","name":"霸眼戰線3 聖劍與霸眼"},
							{"eventID":"47","name":"霸眼戰線2 起始之眼"},
							{"eventID":"48","name":"霸眼戰線"},
							{"eventID":"49","name":"神都匹卡雷斯克&機械與少女Ⅱ"},
							{"eventID":"50","name":"庫耶斯式拍拖約會"},
							{"eventID":"51","name":"神聖天空之星3"},
							{"eventID":"52","name":"神聖天空之星2"},
							{"eventID":"53","name":"神聖天空之星"},
							{"eventID":"54","name":"惡作劇女神與兔子的故事"},
							{"eventID":"55","name":"天界的雙子 訣別的年代記"},
							{"eventID":"56","name":"響命CrossDerive ACT3"},
							{"eventID":"57","name":"響命CrossDerive ACT2"},
							{"eventID":"58","name":"響命CrossDerive"},
							{"eventID":"59","name":"沉睡的遺跡 Outlander"},
							{"eventID":"60","name":"幻魔特區RELOADEDⅢ Final Assemble"},
							{"eventID":"61","name":"幻魔特區RELOADEDⅡ -RE:unite"},
							{"eventID":"62","name":"幻魔特區RELOADED -GardeniA dist."},
							{"eventID":"63","name":"幻魔特區朱雀Ⅲ 幻夢之光"},
							{"eventID":"64","name":"幻魔特區朱雀Ⅱ 鋼鐵之槍"},
							{"eventID":"65","name":"幻魔特區朱雀"},
							{"eventID":"66","name":"空戰的修瓦爾茲"},
							{"eventID":"67","name":"空戰的德爾基馬斯Ⅲ 飄揚的軍旗"},
							{"eventID":"68","name":"空戰的德爾基馬斯Ⅱ 昏暗英雄"},
							{"eventID":"69","name":"空戰的德爾基馬斯"},
							{"eventID":"70","name":"虛實難辨的假面宴會"},
							{"eventID":"71","name":"《沙灘上的冰果宴》"},
							{"eventID":"72","name":"神祕委託‧寒冰之巔的考驗"},
							{"eventID":"73","name":"偶像ω喵！！"},
							{"eventID":"74","name":"偶像ω喵！前&後篇"},
							{"eventID":"75","name":"淡薄的藍色光芒 最終章 終極聖祈"},
							{"eventID":"76","name":"淡薄的藍色光芒 第二章 虛幻聖域"},
							{"eventID":"77","name":"淡薄的藍色光芒 第一章 皇帝與劍"},
							{"eventID":"78","name":"智慧的意義"},
							{"eventID":"79","name":"片翼天使的轉世約定"},
							{"eventID":"80","name":"炎夏的海灘風情！"},
							{"eventID":"81","name":"七夕夜‧煙花燦爛"},
							{"eventID":"82","name":"《靈界魔女：危險紳士之章》"},
							{"eventID":"83","name":"新說 桃娘傳Ⅱ 機關桃源虹繪卷"},
							{"eventID":"84","name":"新說 桃娘傳 妖爺合戰誓助劍"},
							{"eventID":"85","name":"桃娘傳"},
							{"eventID":"86","name":"AbyssCode07 寂寞的境界"},
							{"eventID":"87","name":"《裝神弄鬼》"},
							{"eventID":"88","name":"給夏日綻放的你"},
							{"eventID":"89","name":"《沉眠之血2》幼龍的鳴嘶"},
							{"eventID":"90","name":"《沉眠之血》—焚焰的國度"},
							{"eventID":"91","name":"冰雪薔薇的黑影"},
							{"eventID":"92","name":"聖惡魔女子學院2"},
							{"eventID":"93","name":"聖惡魔女子學院"},
							{"eventID":"94","name":"拉鍊裡的無盡黑霧"},
							{"eventID":"95","name":"《聖誕情侶決定戰》"},
							{"eventID":"96","name":"魔轟三鐵傑 對 地獄三十六歌仙"},
							{"eventID":"97","name":"黑夜中的甜點大盜"},
							{"eventID":"98","name":"武鬥之巔‧寒冰嶺上的召集令"},
							{"eventID":"99","name":"心龍天翔 Rising Dragon"},
							{"eventID":"100","name":"來自異界的天使"},
							{"eventID":"101","name":"追憶的閃耀光輝"},
							{"eventID":"102","name":"被封印的舞台劇目"},
							{"eventID":"103","name":"AbyssCode06 劫末之獸"},
							{"eventID":"104","name":"巧克力森林"},
							{"eventID":"105","name":"Demon's Blader"},
							{"eventID":"106","name":"Heretic Blader"},
							{"eventID":"107","name":"Tempest Blader"},
							{"eventID":"108","name":"Divine Blader"},
							{"eventID":"109","name":"庫洛姆‧麥格納 零"},
							{"eventID":"110","name":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥"},
							{"eventID":"111","name":"庫洛姆‧麥格納Ⅳ單戀☆狂想曲"},
							{"eventID":"112","name":"庫洛姆‧麥格納Ⅲ臨海學校"},
							{"eventID":"113","name":"庫洛姆‧麥格納Ⅱ學園祭"},
							{"eventID":"114","name":"庫洛姆‧麥格納Ⅰ魔導學園"},
							{"eventID":"115","name":"AbyssCode08 落入星雲的淚珠"},
							{"eventID":"116","name":"AbyssCode05 冥世的天蓋"},
							{"eventID":"117","name":"AbyssCode04 燃燒殆盡的陽光"},
							{"eventID":"118","name":"AbyssCode03 生而墮於虛無"},
							{"eventID":"119","name":"AbyssCode02 盲目的調和"},
							{"eventID":"120","name":"AbyssCode01 黑殼之王"},
							{"eventID":"121","name":"金貓盃繁中人氣王 前半"},
							{"eventID":"122","name":"金貓盃繁中人氣王 後半"},
							{"eventID":"123","name":"神明大人 ～土精靈與黑貓主人～"},
							{"eventID":"124","name":"神都匹卡雷斯克 黑貓的魔術師"},
							{"eventID":"125","name":"年之運行"},
							{"eventID":"126","name":"風暴卡里昂──風暴中心的少女"},
							{"eventID":"127","name":"魔幻金夏趴2020 序曲"}
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
							{"id":"27","eventID":"5","event":"阿爾克納與星之旅途","name":"絕對正義 璐彌‧斯卡燐","gender":"女","element":"火光","wikiNumber":"801577"},
							{"id":"28","eventID":"6","event":"再續‧超魔導列傳","name":"新娘 in 魔導棺材 愛莉葉塔‧多娃","gender":"女","element":"水火","wikiNumber":"9265"},
							{"id":"29","eventID":"6","event":"再續‧超魔導列傳","name":"超惡作劇魔導士 莉露姆‧洛洛特","gender":"女","element":"水水","wikiNumber":"9268"},
							{"id":"30","eventID":"6","event":"再續‧超魔導列傳","name":"本性是小惡魔 伊妮亞‧史托拉瑪","gender":"女","element":"火火","wikiNumber":"9271"},
							{"id":"31","eventID":"6","event":"再續‧超魔導列傳","name":"詛咒繃帶 艾莉絲＝瑪基爾‧夏璐姆","gender":"女","element":"雷雷","wikiNumber":"9277"},
							{"id":"32","eventID":"6","event":"再續‧超魔導列傳","name":"超爆發的看護屍 蕾娜‧依拉普修","gender":"女","element":"火火","wikiNumber":"9280"},
							{"id":"33","eventID":"7","event":"續.超魔導列傳","name":"魔導比海更寬廣 愛莉葉塔‧多娃","gender":"女","element":"雷雷","wikiNumber":"9350"},
							{"id":"34","eventID":"7","event":"續.超魔導列傳","name":"燦杖少女 艾莉絲＝瑪基爾‧夏璐","gender":"女","element":"水雷","wikiNumber":"9351"},
							{"id":"35","eventID":"7","event":"續.超魔導列傳","name":"悠久的大魔導 伊妮亞‧史托拉瑪","gender":"女","element":"水水","wikiNumber":"6541"},
							{"id":"36","eventID":"7","event":"續.超魔導列傳","name":"超絕夏日少女 莉露姆‧洛洛特","gender":"女","element":"水水","wikiNumber":"9353"},
							{"id":"37","eventID":"7","event":"續.超魔導列傳","name":"飛吧☆夏日彗星 蘇菲‧哈涅特","gender":"女","element":"雷水","wikiNumber":"9354"},
							{"id":"38","eventID":"7","event":"續.超魔導列傳","name":"大魔導士的夏之色 蕾娜‧依拉普修","gender":"女","element":"火火","wikiNumber":"9355"},
							{"id":"39","eventID":"7","event":"續.超魔導列傳","name":"在煙火之夜登場！ 大魔導士！","gender":"女","element":"雷水","wikiNumber":"9356"},
							{"id":"40","eventID":"7","event":"續.超魔導列傳","name":"集結！ 超無敵魔導女孩！","gender":"女","element":"火光","wikiNumber":"9357"},
							{"id":"41","eventID":"8","event":"超魔導列傳","name":"超越的大魔導怪獸 愛莉葉塔・多娃","gender":"女","element":"火水","wikiNumber":"11307"},
							{"id":"42","eventID":"8","event":"超魔導列傳","name":"超革命魔導女孩_莉露姆‧洛洛特","gender":"女","element":"水火","wikiNumber":"11308"},
							{"id":"43","eventID":"8","event":"超魔導列傳","name":"描繪夢想的彗星_蘇菲‧哈涅特","gender":"女","element":"雷水","wikiNumber":"11309"},
							{"id":"44","eventID":"8","event":"超魔導列傳","name":"繼承與雷霆的_蕾娜‧依拉普修","gender":"女","element":"雷雷","wikiNumber":"11310"},
							{"id":"45","eventID":"8","event":"超魔導列傳","name":"縛眼的牢籠_艾莉絲＝瑪基爾‧夏璐姆","gender":"女","element":"水雷","wikiNumber":"11311"},
							{"id":"46","eventID":"9","event":"職‧超魔導列傳","name":"超確實中選_愛莉葉塔‧多娃","gender":"女","element":"水水","wikiNumber":"11270"},
							{"id":"47","eventID":"9","event":"職‧超魔導列傳","name":"社會派記者_莉露姆‧洛洛特","gender":"女","element":"火雷","wikiNumber":"11273"},
							{"id":"48","eventID":"9","event":"職‧超魔導列傳","name":"魔導RQ_艾莉絲＝瑪基爾‧夏璐姆","gender":"女","element":"雷雷","wikiNumber":"11276"},
							{"id":"49","eventID":"9","event":"職‧超魔導列傳","name":"菜鳥鑑定士_伊妮亞‧史托拉瑪","gender":"女","element":"水光","wikiNumber":"11279"},
							{"id":"50","eventID":"9","event":"職‧超魔導列傳","name":"燃燒的消防員_蕾娜‧依拉普修","gender":"女","element":"火火","wikiNumber":"11282"},
							{"id":"51","eventID":"9","event":"職‧超魔導列傳","name":"探求魔導科學_蘇菲‧哈涅特","gender":"女","element":"雷光","wikiNumber":"11285"},
							{"id":"52","eventID":"10","event":"The Iridescence of Soul 靈魂的虹彩","name":"蜉生蝣夢_蝴蝶","gender":"女","element":"水光","wikiNumber":"801636"},
							{"id":"53","eventID":"10","event":"The Iridescence of Soul 靈魂的虹彩","name":"星源詠唱者_拉索","gender":"男","element":"雷雷","wikiNumber":"801638"},
							{"id":"54","eventID":"10","event":"The Iridescence of Soul 靈魂的虹彩","name":"光曜虹彩_珂珂","gender":"女","element":"雷闇","wikiNumber":"801640"},
							{"id":"55","eventID":"10","event":"The Iridescence of Soul 靈魂的虹彩","name":"乘風破浪_寶迪","gender":"男","element":"火水","wikiNumber":"801642"},
							{"id":"56","eventID":"10","event":"The Iridescence of Soul 靈魂的虹彩","name":"海岸巡防天使_紬","gender":"女","element":"火光","wikiNumber":"801646"},
							{"id":"57","eventID":"10","event":"The Iridescence of Soul 靈魂的虹彩","name":"神出鬼沒怪盜_格拉娜","gender":"女","element":"雷火","wikiNumber":"801648"},
							{"id":"58","eventID":"11","event":"The Luminescence of Soul 靈魂的微光","name":"引領靈魂的熒燈_歌莉亞","gender":"女","element":"雷光","wikiNumber":"801621"},
							{"id":"59","eventID":"11","event":"The Luminescence of Soul 靈魂的微光","name":"一期一會_蜜多莉","gender":"女","element":"火火","wikiNumber":"801623"},
							{"id":"60","eventID":"11","event":"The Luminescence of Soul 靈魂的微光","name":"桃花流水_露絲娜","gender":"女","element":"水火","wikiNumber":"801625"},
							{"id":"61","eventID":"11","event":"The Luminescence of Soul 靈魂的微光","name":"相倚的莫逆之翼_瞬＆陽","gender":"男","element":"雷水","wikiNumber":"801627"},
							{"id":"62","eventID":"11","event":"The Luminescence of Soul 靈魂的微光","name":"藍色冰果潘趣_帕榭菈","gender":"女","element":"水水","wikiNumber":"801629"},
							{"id":"63","eventID":"11","event":"The Luminescence of Soul 靈魂的微光","name":"經歷過的那些風浪_拉布","gender":"男","element":"火雷","wikiNumber":"801631"},
							{"id":"64","eventID":"12","event":"跨界勇者培訓中","name":"充滿男子氣概的天使_露卡","gender":"女","element":"水光","wikiNumber":"801768"},
							{"id":"65","eventID":"12","event":"跨界勇者培訓中","name":"惡魔之新生_雷因","gender":"男","element":"火闇","wikiNumber":"801770"},
							{"id":"66","eventID":"12","event":"跨界勇者培訓中","name":"第十戰旗〈業火〉_愛夏","gender":"女","element":"火火","wikiNumber":"801772"},
							{"id":"67","eventID":"12","event":"跨界勇者培訓中","name":"第十三戰旗「葬送」_猶大","gender":"男","element":"雷雷","wikiNumber":"801774"},
							{"id":"68","eventID":"12","event":"跨界勇者培訓中","name":"爆塵魔王_卡爾洛斯","gender":"男","element":"水闇","wikiNumber":"801776"},
							{"id":"69","eventID":"12","event":"跨界勇者培訓中","name":"曉闇魔王_奧斯克露","gender":"女","element":"雷闇","wikiNumber":"801778"},
							{"id":"70","eventID":"13","event":"天上岬的調香師","name":"將回憶藏在心中_法姆‧莉莉","gender":"女","element":"水雷","wikiNumber":"10867"},
							{"id":"71","eventID":"13","event":"天上岬的調香師","name":"天上岬工房的屋主_費露琪‧莉莉","gender":"女","element":"火水","wikiNumber":"10868"},
							{"id":"72","eventID":"13","event":"天上岬的調香師","name":"毛絨絨國公主_芽寧朵‧芙莉爾","gender":"女","element":"雷火","wikiNumber":"10869"},
							{"id":"73","eventID":"13","event":"天上岬的調香師","name":"守護森林的魔彈槍_利谷斯‧那哈爾","gender":"男","element":"雷雷","wikiNumber":"10870"},
							{"id":"74","eventID":"13","event":"天上岬的調香師","name":"引以為豪的薰香！_南露娜‧卡絲妲","gender":"女","element":"火水","wikiNumber":"10871"},
							{"id":"75","eventID":"13","event":"天上岬的調香師","name":"記錄調香術的歷史_羅尼爾‧庫姆","gender":"男","element":"水雷","wikiNumber":"10872"},
							{"id":"76","eventID":"14","event":"天上岬～永恆的公主～","name":"天上岬的飛毛腿_卡爾特羅‧雷納德","gender":"男","element":"水水","wikiNumber":"11128"},
							{"id":"77","eventID":"14","event":"天上岬～永恆的公主～","name":"小麥王子_布列得‧克拉夫茲","gender":"男","element":"火火","wikiNumber":"11127"},
							{"id":"78","eventID":"14","event":"天上岬～永恆的公主～","name":"大自然的探究者_貝亞德‧菲薩","gender":"男","element":"火雷","wikiNumber":"11126"},
							{"id":"79","eventID":"14","event":"天上岬～永恆的公主～","name":"夢見鳥的調香師_亞妮蘿‧菲薩","gender":"女","element":"雷雷","wikiNumber":"11125"},
							{"id":"80","eventID":"15","event":"歡迎光臨天上岬山麓咖啡廳！","name":"用味道虜獲人心_法姆‧莉莉","gender":"女","element":"雷水","wikiNumber":"11089"},
							{"id":"81","eventID":"15","event":"歡迎光臨天上岬山麓咖啡廳！","name":"吸引顧客的視線_費露琪‧莉莉","gender":"女","element":"雷雷","wikiNumber":"11092"},
							{"id":"82","eventID":"15","event":"歡迎光臨天上岬山麓咖啡廳！","name":"店家的活招牌_愛特露涅‧波姆","gender":"女","element":"火雷","wikiNumber":"11095"},
							{"id":"83","eventID":"15","event":"歡迎光臨天上岬山麓咖啡廳！","name":"和服裝搭配_莉露‧萊路","gender":"女","element":"水火","wikiNumber":"11098"},
							{"id":"84","eventID":"15","event":"歡迎光臨天上岬山麓咖啡廳！","name":"嶄新的羈絆_利谷斯＆梅貝爾","gender":"男女","element":"火火","wikiNumber":"11101"},
							{"id":"85","eventID":"15","event":"歡迎光臨天上岬山麓咖啡廳！","name":"向森林報恩_毛絨絨＆芽寧朵","gender":"女","element":"水水","wikiNumber":"11104"},
							{"id":"86","eventID":"16","event":"雙翼的失落伊甸Ⅲ","name":"王高呼惡意_艾盧多貝里克‧哥德","gender":"男","element":"雷雷","wikiNumber":"11444"},
							{"id":"87","eventID":"16","event":"雙翼的失落伊甸Ⅲ","name":"記憶深淵輕聲嗤笑_露席菈‧弗歐魯","gender":"女","element":"火光","wikiNumber":"11445"},
							{"id":"88","eventID":"16","event":"雙翼的失落伊甸Ⅲ","name":"雙翼的系譜_琉迪格‧希古拉","gender":"男","element":"水水","wikiNumber":"11446"},
							{"id":"89","eventID":"16","event":"雙翼的失落伊甸Ⅲ","name":"雙翼的寵姬_梨莎‧洛特蘭達","gender":"女","element":"火水","wikiNumber":"11447"},
							{"id":"90","eventID":"16","event":"雙翼的失落伊甸Ⅲ","name":"二魂同心_維雷夫基納＆希蜜拉兒","gender":"男女","element":"雷闇","wikiNumber":"11448"},
							{"id":"91","eventID":"16","event":"雙翼的失落伊甸Ⅲ","name":"鬥毆魔帝_庫伊杜斯‧吉爾瓦","gender":"男","element":"水水","wikiNumber":"11449"},
							{"id":"92","eventID":"17","event":"雙翼的失落伊甸Ⅱ WWMF","name":"華麗魔王_艾盧多貝里克‧哥德","gender":"男","element":"水闇","wikiNumber":"10690"},
							{"id":"93","eventID":"17","event":"雙翼的失落伊甸Ⅱ WWMF","name":"慈愛與自由之花_露席菈‧弗歐魯","gender":"女","element":"水光","wikiNumber":"10691"},
							{"id":"94","eventID":"17","event":"雙翼的失落伊甸Ⅱ WWMF","name":"聖王之神髓_米迦菈‧撒拉弗","gender":"女","element":"雷光","wikiNumber":"10692"},
							{"id":"95","eventID":"17","event":"雙翼的失落伊甸Ⅱ WWMF","name":"征服之魔劍_伊薩克‧撒拉弗","gender":"男","element":"雷闇","wikiNumber":"10693"},
							{"id":"96","eventID":"17","event":"雙翼的失落伊甸Ⅱ WWMF","name":"滅魂之預言者_維雷夫基納‧安曼","gender":"男","element":"火水","wikiNumber":"10694"},
							{"id":"97","eventID":"17","event":"雙翼的失落伊甸Ⅱ WWMF","name":"思考型人造魂魄_希蜜拉兒","gender":"女","element":"火火","wikiNumber":"10695"},
							{"id":"98","eventID":"18","event":"雙翼的失落伊甸","name":"閃耀的永劫之翼_艾盧多貝里克‧哥德","gender":"男","element":"雷光","wikiNumber":"9429"},
							{"id":"99","eventID":"18","event":"雙翼的失落伊甸","name":"跨越永劫_艾盧多貝里克‧哥德","gender":"男","element":"雷闇","wikiNumber":"9430"},
							{"id":"100","eventID":"18","event":"雙翼的失落伊甸","name":"解放無限_露席菈‧弗歐魯","gender":"女","element":"雷光","wikiNumber":"9431"},
							{"id":"101","eventID":"18","event":"雙翼的失落伊甸","name":"無限的黑天使_露席菈‧弗歐魯","gender":"女","element":"雷闇","wikiNumber":"9432"},
							{"id":"102","eventID":"18","event":"雙翼的失落伊甸","name":"協調的神世界_米迦菈‧撒拉弗","gender":"女","element":"火光","wikiNumber":"9433"},
							{"id":"103","eventID":"18","event":"雙翼的失落伊甸","name":"某個魔王_米迦菈‧撒拉弗","gender":"女","element":"火闇","wikiNumber":"9434"},
							{"id":"104","eventID":"18","event":"雙翼的失落伊甸","name":"迴響於黑闇中的大笑_伊薩克‧撒拉弗","gender":"男","element":"火火","wikiNumber":"9435"},
							{"id":"105","eventID":"18","event":"雙翼的失落伊甸","name":"靜靜地祈求_克莉涅雅‧瑪奇雅","gender":"女","element":"水火","wikiNumber":"9436"},
							{"id":"106","eventID":"19","event":"歌頌永恆的克羅諾斯Ⅲ","name":"太陽與夏日_優卡‧恩德","gender":"女","element":"水水","wikiNumber":"11035"},
							{"id":"107","eventID":"19","event":"歌頌永恆的克羅諾斯Ⅲ","name":"與夏日的邂逅_愛麗絲‧史都華","gender":"女","element":"雷雷","wikiNumber":"11036"},
							{"id":"108","eventID":"19","event":"歌頌永恆的克羅諾斯Ⅲ","name":"情感的太陽_卡奴耶‧德‧亞克","gender":"女","element":"火光","wikiNumber":"11037"},
							{"id":"109","eventID":"19","event":"歌頌永恆的克羅諾斯Ⅲ","name":"回想之夏_伊蕾娜‧芙莉愛兒","gender":"女","element":"火火","wikiNumber":"11038"},
							{"id":"110","eventID":"19","event":"歌頌永恆的克羅諾斯Ⅲ","name":"夏日的行蹤_史黛西‧瑪丘里","gender":"女","element":"雷火","wikiNumber":"11039"},
							{"id":"111","eventID":"19","event":"歌頌永恆的克羅諾斯Ⅲ","name":"夏日的片刻_席琳‧伊凡斯","gender":"女","element":"水水","wikiNumber":"11040"},
							{"id":"112","eventID":"19","event":"歌頌永恆的克羅諾斯Ⅲ","name":"守護之時的光輝_塞蒂‧蕾","gender":"女","element":"水火","wikiNumber":"11041"},
							{"id":"113","eventID":"20","event":"歌頌永恆的克羅諾斯Ⅱ","name":"時間的邂逅_愛麗絲‧史都華","gender":"女","element":"雷雷","wikiNumber":"8705"},
							{"id":"114","eventID":"20","event":"歌頌永恆的克羅諾斯Ⅱ","name":"時空的聖鎚_優卡‧恩德","gender":"女","element":"火火","wikiNumber":"8706"},
							{"id":"115","eventID":"20","event":"歌頌永恆的克羅諾斯Ⅱ","name":"呼喚時間_史黛西·瑪丘里","gender":"女","element":"火光","wikiNumber":"8707"},
							{"id":"116","eventID":"20","event":"歌頌永恆的克羅諾斯Ⅱ","name":"慮時司神_伊蕾娜‧芙莉愛兒","gender":"女","element":"水光","wikiNumber":"8708"},
							{"id":"117","eventID":"20","event":"歌頌永恆的克羅諾斯Ⅱ","name":"刻下司神_席琳‧伊凡斯","gender":"女","element":"雷雷","wikiNumber":"8709"},
							{"id":"118","eventID":"21","event":"歌頌永恆的克羅諾斯","name":"前刻蒼神_伊蕾娜‧芙莉愛兒","gender":"女","element":"水水","wikiNumber":"8704"},
							{"id":"119","eventID":"21","event":"歌頌永恆的克羅諾斯","name":"悠之照神_史黛西‧瑪丘里","gender":"女","element":"火火","wikiNumber":"8703"},
							{"id":"120","eventID":"21","event":"歌頌永恆的克羅諾斯","name":"刻下光神_席琳‧伊凡斯","gender":"女","element":"雷光","wikiNumber":"8702"},
							{"id":"121","eventID":"21","event":"歌頌永恆的克羅諾斯","name":"時海冒險者_蒂‧李伏利斯","gender":"女","element":"水火","wikiNumber":"8701"},
							{"id":"122","eventID":"21","event":"歌頌永恆的克羅諾斯","name":"時海航海者_達姆‧李伏利斯","gender":"女","element":"火水","wikiNumber":"8700"},
							{"id":"123","eventID":"21","event":"歌頌永恆的克羅諾斯","name":"星霜的詠人_愛麗絲‧史都華","gender":"女","element":"雷火","wikiNumber":"8699"},
							{"id":"124","eventID":"22","event":"啵！神明大人_～北風精靈與炎之鳥～","name":"冬季天空的光輝_卡奴耶‧德‧亞克","gender":"女","element":"火火","wikiNumber":"11441"},
							{"id":"125","eventID":"22","event":"啵！神明大人_～北風精靈與炎之鳥～","name":"飄洋過海的羽翼_梨莎‧洛特蘭達","gender":"女","element":"水水","wikiNumber":"11442"},
							{"id":"126","eventID":"22","event":"啵！神明大人_～北風精靈與炎之鳥～","name":"尋找不可思議的書_葛蕾絲","gender":"女","element":"雷火","wikiNumber":"11443"},
							{"id":"127","eventID":"23","event":"SUGARLESS_BAMBINA","name":"盛放狂亂少女之心_薇塔‧芭比奈","gender":"女","element":"雷火","wikiNumber":"11080"},
							{"id":"128","eventID":"23","event":"SUGARLESS_BAMBINA","name":"狂亂舞動少女之刀_綺露拉‧科泰勒","gender":"女","element":"水光","wikiNumber":"11081"},
							{"id":"129","eventID":"23","event":"SUGARLESS_BAMBINA","name":"癲狂歌聲_茜茜‧烏拉蕾","gender":"女","element":"火雷","wikiNumber":"11082"},
							{"id":"130","eventID":"23","event":"SUGARLESS_BAMBINA","name":"狂戀的斧少女_瑪琪亞‧傑洛歇","gender":"女","element":"火闇","wikiNumber":"11083"},
							{"id":"131","eventID":"23","event":"SUGARLESS_BAMBINA","name":"最瘋狂的女廚師_帕絲帕茹‧席歐涅","gender":"女","element":"水闇","wikiNumber":"11084"},
							{"id":"132","eventID":"23","event":"SUGARLESS_BAMBINA","name":"狂速爆走少女_勒格茲‧方亭","gender":"女","element":"雷雷","wikiNumber":"11085"},
							{"id":"133","eventID":"24","event":"SUGARLESS BAMBINA Ⅱ Slaughter Prison","name":"吞噬野獸的怪物_薇塔‧芭比奈","gender":"女","element":"雷火","wikiNumber":"11044"},
							{"id":"134","eventID":"24","event":"SUGARLESS BAMBINA Ⅱ Slaughter Prison","name":"獵獸修羅_綺露拉‧科泰勒","gender":"女","element":"雷光","wikiNumber":"11047"},
							{"id":"135","eventID":"24","event":"SUGARLESS BAMBINA Ⅱ Slaughter Prison","name":"凶獄的導覽小姐_茜茜‧烏拉蕾","gender":"女","element":"水水","wikiNumber":"11050"},
							{"id":"136","eventID":"24","event":"SUGARLESS BAMBINA Ⅱ Slaughter Prison","name":"凶愛的純血女孩_瑪琪亞‧傑洛歇","gender":"女","element":"水水","wikiNumber":"11053"},
							{"id":"137","eventID":"24","event":"SUGARLESS BAMBINA Ⅱ Slaughter Prison","name":"狂熱的復仇者_帕絲帕茹‧席歐涅","gender":"女","element":"火火","wikiNumber":"11056"},
							{"id":"138","eventID":"24","event":"SUGARLESS BAMBINA Ⅱ Slaughter Prison","name":"狂爆無法少女_勒格茲‧方亭","gender":"女","element":"火雷","wikiNumber":"11059"},
							{"id":"139","eventID":"25","event":"FairyChord Prelude","name":"星夜中舞動的華劍光_拉米斯費蕾絲","gender":"女","element":"雷火","wikiNumber":"11257"},
							{"id":"140","eventID":"25","event":"FairyChord Prelude","name":"心手彈奏的聲響_鶴音理玲","gender":"女","element":"水雷","wikiNumber":"11258"},
							{"id":"141","eventID":"25","event":"FairyChord Prelude","name":"古血之牙_紅鬼颯夜","gender":"男","element":"火火","wikiNumber":"11259"},
							{"id":"142","eventID":"26","event":"寄語冬夜的祈願者","name":"聖夜六花之沐_莉歐","gender":"女","element":"火光","wikiNumber":"801517"},
							{"id":"143","eventID":"26","event":"寄語冬夜的祈願者","name":"冬夜的紛紛雪花_弗蕾可","gender":"女","element":"水水","wikiNumber":"801521"},
							{"id":"144","eventID":"26","event":"寄語冬夜的祈願者","name":"熱呼呼的聖誕紅酒_黎庫芬","gender":"女","element":"雷雷","wikiNumber":"801523"},
							{"id":"145","eventID":"26","event":"寄語冬夜的祈願者","name":"成為旋風的馴鷹者_加姆","gender":"男","element":"雷雷","wikiNumber":"801525"},
							{"id":"146","eventID":"26","event":"寄語冬夜的祈願者","name":"吸食願望的惡魔_奈迦伊娜","gender":"女","element":"水闇","wikiNumber":"801527"},
							{"id":"147","eventID":"27","event":"寄語冬夜的祈願者Ⅱ_虛妄之地的追尋者","name":"幸運的兔子腳_艾蕾諾","gender":"女","element":"雷水","wikiNumber":"801737"},
							{"id":"148","eventID":"27","event":"寄語冬夜的祈願者Ⅱ_虛妄之地的追尋者","name":"有威嚴的鄉紳_蘭登","gender":"男","element":"雷光","wikiNumber":"801739"},
							{"id":"149","eventID":"27","event":"寄語冬夜的祈願者Ⅱ_虛妄之地的追尋者","name":"借鏡觀形_席安","gender":"女","element":"雷闇","wikiNumber":"801741"},
							{"id":"150","eventID":"27","event":"寄語冬夜的祈願者Ⅱ_虛妄之地的追尋者","name":"皓月白鱗_艾丹","gender":"男","element":"水雷","wikiNumber":"801743"},
							{"id":"151","eventID":"27","event":"寄語冬夜的祈願者Ⅱ_虛妄之地的追尋者","name":"乘風照夜_鈴芽","gender":"女","element":"火火","wikiNumber":"801745"},
							{"id":"152","eventID":"27","event":"寄語冬夜的祈願者Ⅱ_虛妄之地的追尋者","name":"遺落在虛妄之中_莉歐","gender":"女","element":"水闇","wikiNumber":"801747"},
							{"id":"153","eventID":"28","event":"喰牙RIZE3 -Fang-O’-Blazer","name":"紅蓮血牙_雷迪厄斯‧利維斯","gender":"男","element":"火闇","wikiNumber":"10761"},
							{"id":"154","eventID":"28","event":"喰牙RIZE3 -Fang-O’-Blazer","name":"幽玄劍狐_未羽‧和羅","gender":"男","element":"水光","wikiNumber":"10764"},
							{"id":"155","eventID":"28","event":"喰牙RIZE3 -Fang-O’-Blazer","name":"遊星燈華_舒菈‧立哈","gender":"女","element":"水水","wikiNumber":"10767"},
							{"id":"156","eventID":"28","event":"喰牙RIZE3 -Fang-O’-Blazer","name":"幽炎妖葬者_伊露莎‧拉","gender":"女","element":"雷闇","wikiNumber":"10770"},
							{"id":"157","eventID":"28","event":"喰牙RIZE3 -Fang-O’-Blazer","name":"冥搜魔葬者_孚盧克‧拉","gender":"女","element":"火火","wikiNumber":"10773"},
							{"id":"158","eventID":"28","event":"喰牙RIZE3 -Fang-O’-Blazer","name":"驅魔聖言_尤維爾＆艾絲皮納","gender":"男女","element":"雷光","wikiNumber":"10776"},
							{"id":"159","eventID":"29","event":"喰牙RIZE3-外傳- 冥道死門的極境者","name":"亡魂戰神公主_希露蒂‧雷路爾","gender":"女","element":"水雷","wikiNumber":"10803"},
							{"id":"160","eventID":"29","event":"喰牙RIZE3-外傳- 冥道死門的極境者","name":"虛幻與蛇謀的魔神_艾拉‧納爾維","gender":"女","element":"火火","wikiNumber":"10806"},
							{"id":"161","eventID":"29","event":"喰牙RIZE3-外傳- 冥道死門的極境者","name":"冥道死門的極境者_席德‧哈洛克","gender":"男","element":"雷闇","wikiNumber":"10809"},
							{"id":"162","eventID":"30","event":"喰牙RIZE2_-Tearing_Eyes","name":"雙牙剛炎_雷迪厄斯‧利維斯","gender":"男","element":"火火","wikiNumber":"8983"},
							{"id":"163","eventID":"30","event":"喰牙RIZE2_-Tearing_Eyes","name":"不動烈閃_未羽‧和羅","gender":"男","element":"水水","wikiNumber":"8986"},
							{"id":"164","eventID":"30","event":"喰牙RIZE2_-Tearing_Eyes","name":"【噬號者】的祝福_舒菈‧立哈","gender":"女","element":"水雷","wikiNumber":"8989"},
							{"id":"165","eventID":"30","event":"喰牙RIZE2_-Tearing_Eyes","name":"幽境的雙葬者_伊露莎＆孚盧克","gender":"女","element":"雷水","wikiNumber":"8992"},
							{"id":"166","eventID":"30","event":"喰牙RIZE2_-Tearing_Eyes","name":"禁忌的盡頭_尤維爾‧莎克拉里齊","gender":"男","element":"雷雷","wikiNumber":"8995"},
							{"id":"167","eventID":"30","event":"喰牙RIZE2_-Tearing_Eyes","name":"神炎之瞳_艾絲皮納‧庫里烏","gender":"女","element":"火水","wikiNumber":"8998"},
							{"id":"168","eventID":"31","event":"喰牙RIZE","name":"烈火剛劍_雷迪厄斯‧利維斯","gender":"男","element":"火火","wikiNumber":"10792"},
							{"id":"169","eventID":"31","event":"喰牙RIZE","name":"烈刀激閃_未羽‧和羅","gender":"男","element":"水水","wikiNumber":"10793"},
							{"id":"170","eventID":"31","event":"喰牙RIZE","name":"繼承獠牙者_舒菈‧立哈","gender":"女","element":"雷雷","wikiNumber":"10794"},
							{"id":"171","eventID":"31","event":"喰牙RIZE","name":"深切憐憫的喪葬者_伊露莎‧拉","gender":"女","element":"火水","wikiNumber":"10795"},
							{"id":"172","eventID":"31","event":"喰牙RIZE","name":"銘戒堅定的送死葬者_孚盧克‧拉","gender":"女","element":"水火","wikiNumber":"10796"},
							{"id":"173","eventID":"31","event":"喰牙RIZE","name":"Q彈綿軟神柔拳_噗古那‧馬卡","gender":"男","element":"雷火","wikiNumber":"10797"},
							{"id":"174","eventID":"32","event":"八百萬諸神祕聞4_沉眠京城的悠久之歌","name":"祈求平安的悠久之歌_尊音‧歌詠","gender":"女","element":"雷水","wikiNumber":"8472"},
							{"id":"175","eventID":"32","event":"八百萬諸神祕聞4_沉眠京城的悠久之歌","name":"天上照耀的月光_阿緹蜜西亞","gender":"女","element":"雷雷","wikiNumber":"8475"},
							{"id":"176","eventID":"32","event":"八百萬諸神祕聞4_沉眠京城的悠久之歌","name":"水蛇纏繞的白浪龍膽_樁‧龍膽","gender":"女","element":"水光","wikiNumber":"8478"},
							{"id":"177","eventID":"32","event":"八百萬諸神祕聞4_沉眠京城的悠久之歌","name":"呼喚天運的炎獅子_葉月‧夢語","gender":"女","element":"火火","wikiNumber":"8481"},
							{"id":"178","eventID":"32","event":"八百萬諸神祕聞4_沉眠京城的悠久之歌","name":"化鬼亦斬鬼_久馬＆風治","gender":"男","element":"水水","wikiNumber":"8484"},
							{"id":"179","eventID":"32","event":"八百萬諸神祕聞4_沉眠京城的悠久之歌","name":"五星方陣大成祈禱_統真＆桐繪","gender":"男女","element":"火水","wikiNumber":"8487"},
							{"id":"180","eventID":"33","event":"YAOYORO_Z","name":"妝點美夢的和歌之神_尊音‧歌詠","gender":"女","element":"水光","wikiNumber":"8536"},
							{"id":"181","eventID":"33","event":"YAOYORO_Z","name":"回歸原點的不盡之焰_蘇芳‧迦具土","gender":"男","element":"火水","wikiNumber":"8537"},
							{"id":"182","eventID":"33","event":"YAOYORO_Z","name":"沉靜而勇猛的荒海神_靜‧白波","gender":"男","element":"水火","wikiNumber":"8538"},
							{"id":"183","eventID":"33","event":"YAOYORO_Z","name":"突擊糖果神_瑪莉娜‧畢弗羅斯","gender":"女","element":"雷雷","wikiNumber":"8539"},
							{"id":"184","eventID":"33","event":"YAOYORO_Z","name":"其乃異國的指標_傑斯洛‧夸特里","gender":"男","element":"雷火","wikiNumber":"8540"},
							{"id":"185","eventID":"33","event":"YAOYORO_Z","name":"異國風情與艷麗的變化譚","gender":"女","element":"水雷","wikiNumber":"8541"},
							{"id":"186","eventID":"33","event":"YAOYORO_Z","name":"三神駕到_八百萬Z","gender":"男女","element":"火火","wikiNumber":"8542"},
							{"id":"187","eventID":"34","event":"八百萬諸神祕聞2","name":"牡丹打盹的夕月夜_尊音・歌詠","gender":"女","element":"雷水","wikiNumber":"10749"},
							{"id":"188","eventID":"34","event":"八百萬諸神祕聞2","name":"海風緩緩流逝_靜＆蘇芳","gender":"男","element":"水火","wikiNumber":"10750"},
							{"id":"189","eventID":"34","event":"八百萬諸神祕聞2","name":"神獸疾走的痕跡_艾德華＆梅莉艾兒","gender":"女","element":"雷水","wikiNumber":"10751"},
							{"id":"190","eventID":"34","event":"八百萬諸神祕聞2","name":"妝點潮汐的月之音_月詠・音江雛","gender":"女","element":"火水","wikiNumber":"10752"},
							{"id":"191","eventID":"34","event":"八百萬諸神祕聞2","name":"到達尋求的聲音_木葉・依姬","gender":"女","element":"水火","wikiNumber":"10753"},
							{"id":"192","eventID":"35","event":"八百萬諸神祕聞","name":"盛開於春霞中的花之歌_尊音・歌詠","gender":"女","element":"雷火","wikiNumber":"8526"},
							{"id":"193","eventID":"35","event":"八百萬諸神祕聞","name":"猛燒不盡的焰嶺_蘇芳・迦具土","gender":"男","element":"火光","wikiNumber":"8527"},
							{"id":"194","eventID":"35","event":"八百萬諸神祕聞","name":"靜靜迴響的海鳴_靜・白波","gender":"男","element":"水火","wikiNumber":"8528"},
							{"id":"195","eventID":"35","event":"八百萬諸神祕聞","name":"貫穿心的正中央_真都斐・那毘佐古","gender":"女","element":"水水","wikiNumber":"8529"},
							{"id":"196","eventID":"35","event":"八百萬諸神祕聞","name":"光芒閃耀的金鋼金華_登美・言壽","gender":"女","element":"雷雷","wikiNumber":"8530"},
							{"id":"197","eventID":"36","event":"豔夏濱海大騷動","name":"神奇魔法大海豹_爽子","gender":"女","element":"水光","wikiNumber":"801693"},
							{"id":"198","eventID":"36","event":"豔夏濱海大騷動","name":"輸贏企鵝_潘庫茵","gender":"女","element":"火雷","wikiNumber":"801695"},
							{"id":"199","eventID":"36","event":"豔夏濱海大騷動","name":"超音速掠食者_雀尾","gender":"女","element":"水火","wikiNumber":"801697"},
							{"id":"200","eventID":"36","event":"豔夏濱海大騷動","name":"回憶中的擁抱_山吹","gender":"女","element":"火光","wikiNumber":"801699"},
							{"id":"201","eventID":"36","event":"豔夏濱海大騷動","name":"海邊遊樂專家_里維","gender":"男","element":"雷光","wikiNumber":"801701"},
							{"id":"202","eventID":"37","event":"Birth Of New Order2 大罪","name":"響徹天明的真理_流昂‧特拉姆","gender":"男","element":"水水","wikiNumber":"10664"},
							{"id":"203","eventID":"37","event":"Birth Of New Order2 大罪","name":"擊落破曉的赤紅之星_伊絲卡‧尼爾瓦","gender":"女","element":"雷雷","wikiNumber":"10667"},
							{"id":"204","eventID":"37","event":"Birth Of New Order2 大罪","name":"在忘我的盡頭_拉夏‧路茨斯","gender":"女","element":"水水","wikiNumber":"10670"},
							{"id":"205","eventID":"37","event":"Birth Of New Order2 大罪","name":"在光輝之影中行動_西里士‧埃洛奇亞","gender":"男","element":"火光","wikiNumber":"10673"},
							{"id":"206","eventID":"37","event":"Birth Of New Order2 大罪","name":"被邪惡所祝福的少女_梅爾泰‧尼瑟","gender":"女","element":"雷水","wikiNumber":"10676"},
							{"id":"207","eventID":"37","event":"Birth Of New Order2 大罪","name":"無法被饒恕的大罪_克羅什‧特勞","gender":"男","element":"火火","wikiNumber":"10679"},
							{"id":"208","eventID":"38","event":"Birth Of New Order","name":"執行騎士團長_流昂‧特拉姆","gender":"男","element":"水光","wikiNumber":"9976"},
							{"id":"209","eventID":"38","event":"Birth Of New Order","name":"執行騎士監察人_西里士‧埃洛奇亞","gender":"男","element":"火光","wikiNumber":"9979"},
							{"id":"210","eventID":"38","event":"Birth Of New Order","name":"執行騎士副團長_拉夏‧路茨斯","gender":"女","element":"雷光","wikiNumber":"9982"},
							{"id":"211","eventID":"38","event":"Birth Of New Order","name":"新希望_伊絲卡‧尼爾瓦","gender":"女","element":"火闇","wikiNumber":"9985"},
							{"id":"212","eventID":"38","event":"Birth Of New Order","name":"泰塔納斯的鐵鎚_梅爾泰‧尼瑟","gender":"女","element":"水闇","wikiNumber":"9988"},
							{"id":"213","eventID":"38","event":"Birth Of New Order","name":"手握牙大劍的劍士_克羅什‧特勞","gender":"男","element":"雷闇","wikiNumber":"9991"},
							{"id":"214","eventID":"39","event":"黑貓維茲 仲夏感謝季2019","name":"野心奔騰的黑劍 艾盧多貝里克‧哥德","gender":"男","element":"火火","wikiNumber":"10547"},
							{"id":"215","eventID":"39","event":"黑貓維茲 仲夏感謝季2019","name":"審判獸的血之習性 伊絲卡‧尼爾瓦","gender":"女","element":"火闇","wikiNumber":"10550"},
							{"id":"216","eventID":"39","event":"黑貓維茲 仲夏感謝季2019","name":"執行騎士的誕生 流昂‧特拉姆","gender":"男","element":"火光","wikiNumber":"10553"},
							{"id":"217","eventID":"39","event":"黑貓維茲 仲夏感謝季2019","name":"這就是你的回答喵 騙子貓維茲","gender":"男女","element":"水火","wikiNumber":"10556"},
							{"id":"218","eventID":"39","event":"黑貓維茲 仲夏感謝季2019","name":"宇宙反詰 莉露姆‧洛洛特","gender":"女","element":"雷雷","wikiNumber":"10538"},
							{"id":"219","eventID":"39","event":"黑貓維茲 仲夏感謝季2019","name":"將軍 迪特利希‧貝爾克","gender":"男","element":"雷闇","wikiNumber":"10541"},
							{"id":"220","eventID":"39","event":"黑貓維茲 仲夏感謝季2019","name":"星之聖女 克蕾緹雅‧布萊葉","gender":"女","element":"水水","wikiNumber":"10544"},
							{"id":"221","eventID":"40","event":"黃昏無夢者Ⅳ 黃昏mareless","name":"黃昏無夢者_桑榭特‧莉菲爾","gender":"女","element":"雷光","wikiNumber":"10068"},
							{"id":"222","eventID":"40","event":"黃昏無夢者Ⅳ 黃昏mareless","name":"流星飛蝶_甘多納‧瑠璃揚羽","gender":"女","element":"水光","wikiNumber":"10071"},
							{"id":"223","eventID":"40","event":"黃昏無夢者Ⅳ 黃昏mareless","name":"血火咆哮_戴特梅爾‧拉吉特","gender":"男","element":"水闇","wikiNumber":"10074"},
							{"id":"224","eventID":"40","event":"黃昏無夢者Ⅳ 黃昏mareless","name":"激輪雙旋_維爾萊特‧雷吉","gender":"男","element":"火水","wikiNumber":"10077"},
							{"id":"225","eventID":"40","event":"黃昏無夢者Ⅳ 黃昏mareless","name":"劍光無盡_傑拉德＆蔻比修","gender":"男女","element":"雷闇","wikiNumber":"10080"},
							{"id":"226","eventID":"40","event":"黃昏無夢者Ⅳ 黃昏mareless","name":"戰鳥裂帛_沃布林格‧蜜莉","gender":"女","element":"火雷","wikiNumber":"10083"},
							{"id":"227","eventID":"41","event":"黃昏無夢者Ⅲ_絡園loreless","name":"黃昏的旅途_桑榭特‧莉菲爾","gender":"女","element":"雷雷","wikiNumber":"11179"},
							{"id":"228","eventID":"41","event":"黃昏無夢者Ⅲ_絡園loreless","name":"雙蝶之夢_甘多納‧瑠璃揚羽","gender":"女","element":"雷雷","wikiNumber":"11180"},
							{"id":"229","eventID":"41","event":"黃昏無夢者Ⅲ_絡園loreless","name":"飛鳥放吟_沃布林格‧蜜莉","gender":"女","element":"火光","wikiNumber":"11181"},
							{"id":"230","eventID":"41","event":"黃昏無夢者Ⅲ_絡園loreless","name":"心願之刃_緹亞萊薩‧蔻比修","gender":"女","element":"水光","wikiNumber":"11182"},
							{"id":"231","eventID":"41","event":"黃昏無夢者Ⅲ_絡園loreless","name":"暴風之刃_艾吉瓦司‧傑拉德","gender":"男","element":"火闇","wikiNumber":"11183"},
							{"id":"232","eventID":"41","event":"黃昏無夢者Ⅲ_絡園loreless","name":"夢咎人_戴特梅爾‧拉吉特","gender":"男","element":"火雷","wikiNumber":"11184"},
							{"id":"233","eventID":"41","event":"黃昏無夢者Ⅲ_絡園loreless","name":"戰輪疾走_維爾萊特‧雷吉","gender":"男","element":"水水","wikiNumber":"11185"},
							{"id":"234","eventID":"42","event":"黃昏無夢者Ⅱ 殘響dearless","name":"綻放於黃昏之花_桑榭特‧莉菲爾","gender":"女","element":"水雷","wikiNumber":"10524"},
							{"id":"235","eventID":"42","event":"黃昏無夢者Ⅱ 殘響dearless","name":"刀火武雙_甘多納‧瑠璃揚羽","gender":"女","element":"雷雷","wikiNumber":"10525"},
							{"id":"236","eventID":"42","event":"黃昏無夢者Ⅱ 殘響dearless","name":"罪咎之鎖_戴特梅爾‧拉吉特","gender":"男","element":"水水","wikiNumber":"10526"},
							{"id":"237","eventID":"42","event":"黃昏無夢者Ⅱ 殘響dearless","name":"劍之境界_艾吉瓦司‧傑拉德","gender":"男","element":"火火","wikiNumber":"10527"},
							{"id":"238","eventID":"42","event":"黃昏無夢者Ⅱ 殘響dearless","name":"無我玉響_緹亞萊薩‧蔻比修","gender":"女","element":"水火","wikiNumber":"10528"},
							{"id":"239","eventID":"42","event":"黃昏無夢者Ⅱ 殘響dearless","name":"機哭啾啾_沃布林格‧蜜莉","gender":"女","element":"火雷","wikiNumber":"10529"},
							{"id":"240","eventID":"42","event":"黃昏無夢者Ⅱ 殘響dearless","name":"魂之戰火_維爾萊特‧雷吉","gender":"男","element":"雷火","wikiNumber":"10530"},
							{"id":"241","eventID":"43","event":"黃昏無夢者","name":"黃昏魔導_桑榭特‧莉菲爾","gender":"女","element":"雷火","wikiNumber":"11535"},
							{"id":"242","eventID":"43","event":"黃昏無夢者","name":"墜星銃姬_甘多納‧瑠璃揚羽","gender":"女","element":"水水","wikiNumber":"11536"},
							{"id":"243","eventID":"43","event":"黃昏無夢者","name":"虛幻之夢的爪痕_戴特梅爾‧拉吉特","gender":"男","element":"火闇","wikiNumber":"11537"},
							{"id":"244","eventID":"43","event":"黃昏無夢者","name":"戰鬥天賦_沃布林格‧蜜莉","gender":"女","element":"火火","wikiNumber":"11538"},
							{"id":"245","eventID":"43","event":"黃昏無夢者","name":"無窮的劍業_傑拉德&蔻比修","gender":"男女","element":"水火","wikiNumber":"11539"},
							{"id":"246","eventID":"44","event":"霸眼戰線 終戰之凜煌眼 -前篇","name":"凜煌眼‧穿梭的羈絆_麗維塔‧伊蕾","gender":"女","element":"火火","wikiNumber":"11457"},
							{"id":"247","eventID":"44","event":"霸眼戰線 終戰之凜煌眼 -前篇","name":"凜煌眼‧甦醒的覺悟_路德維嘉‧羅亞","gender":"女","element":"水水","wikiNumber":"11460"},
							{"id":"248","eventID":"44","event":"霸眼戰線 終戰之凜煌眼 -前篇","name":"新一代劍聖_阿斯塔‧拉德","gender":"男","element":"雷雷","wikiNumber":"11463"},
							{"id":"249","eventID":"44","event":"霸眼戰線 終戰之凜煌眼 -前篇","name":"冥界女王的聖弓士_歐莉安奴‧路嘉","gender":"女","element":"水雷","wikiNumber":"11466"},
							{"id":"250","eventID":"44","event":"霸眼戰線 終戰之凜煌眼 -前篇","name":"追逐劍聖的蹤跡_阿里歐特斯‧葛","gender":"男","element":"火火","wikiNumber":"11469"},
							{"id":"251","eventID":"44","event":"霸眼戰線 終戰之凜煌眼 -前篇","name":"覺醒的冥界之王_卡農","gender":"女","element":"雷闇","wikiNumber":"11472"},
							{"id":"252","eventID":"45","event":"霸眼戰線4 覺醒之王","name":"將原初照亮之霸眼_阿里歐特斯‧葛","gender":"男","element":"火闇","wikiNumber":"10453"},
							{"id":"253","eventID":"45","event":"霸眼戰線4 覺醒之王","name":"昏眼與惺眼_阿斯塔＆露米雅","gender":"男女","element":"雷光","wikiNumber":"10456"},
							{"id":"254","eventID":"45","event":"霸眼戰線4 覺醒之王","name":"礫滅之處決鐮_哈克亞‧德斯賽斯","gender":"女","element":"水闇","wikiNumber":"10459"},
							{"id":"255","eventID":"45","event":"霸眼戰線4 覺醒之王","name":"新劍聖王_亞瑟‧卡美洛","gender":"男","element":"雷雷","wikiNumber":"10462"},
							{"id":"256","eventID":"45","event":"霸眼戰線4 覺醒之王","name":"宿業之烈眼繼承_歐莉安奴‧路嘉","gender":"女","element":"水水","wikiNumber":"10465"},
							{"id":"257","eventID":"45","event":"霸眼戰線4 覺醒之王","name":"扶持著三隻眼_希瑞爾‧諾特","gender":"女","element":"火光","wikiNumber":"10468"},
							{"id":"258","eventID":"46","event":"霸眼戰線3 聖劍與霸眼","name":"終結戰亂的煌眼_麗維塔‧伊蕾","gender":"女","element":"火光","wikiNumber":"11494"},
							{"id":"259","eventID":"46","event":"霸眼戰線3 聖劍與霸眼","name":"亂世至強的凜眼_路德維嘉‧羅亞","gender":"女","element":"水光","wikiNumber":"11495"},
							{"id":"260","eventID":"46","event":"霸眼戰線3 聖劍與霸眼","name":"追尋惺眼的行蹤_阿斯塔‧拉德","gender":"男","element":"水水","wikiNumber":"11496"},
							{"id":"261","eventID":"46","event":"霸眼戰線3 聖劍與霸眼","name":"阿拉弗特族的女王_希瑞爾‧諾特","gender":"女","element":"雷光","wikiNumber":"11497"},
							{"id":"262","eventID":"46","event":"霸眼戰線3 聖劍與霸眼","name":"貫穿天命的霸吼劍_邁亞‧斯迪爾馬","gender":"女","element":"火火","wikiNumber":"11498"},
							{"id":"263","eventID":"46","event":"霸眼戰線3 聖劍與霸眼","name":"信義與未來的霸眼_阿里歐特斯‧葛","gender":"男","element":"雷闇","wikiNumber":"11499"},
							{"id":"264","eventID":"46","event":"霸眼戰線3 聖劍與霸眼","name":"覺醒的霸眼_麗維塔＆路德維嘉","gender":"女","element":"水火","wikiNumber":"11500"},
							{"id":"265","eventID":"47","event":"霸眼戰線2 起始之眼","name":"煌眼乃勝利指標_麗維塔‧伊蕾","gender":"女","element":"火火","wikiNumber":"10592"},
							{"id":"266","eventID":"47","event":"霸眼戰線2 起始之眼","name":"寄宿於凜眼中的霸道_路德維嘉‧羅亞","gender":"女","element":"水火","wikiNumber":"10593"},
							{"id":"267","eventID":"47","event":"霸眼戰線2 起始之眼","name":"瘋狂與怨恨的魔刃_銀河‧卡農","gender":"女","element":"雷闇","wikiNumber":"10594"},
							{"id":"268","eventID":"47","event":"霸眼戰線2 起始之眼","name":"罪孽隨慘禍而逝_哈克亞‧德斯賽斯","gender":"女","element":"水闇","wikiNumber":"10595"},
							{"id":"269","eventID":"47","event":"霸眼戰線2 起始之眼","name":"兩雙眼眸的守護者_希瑞爾‧諾特","gender":"女","element":"雷火","wikiNumber":"10596"},
							{"id":"270","eventID":"47","event":"霸眼戰線2 起始之眼","name":"守護與定罪的昏眼_阿斯塔‧拉德","gender":"男","element":"火火","wikiNumber":"10597"},
							{"id":"271","eventID":"48","event":"霸眼戰線","name":"協助煌眼的左右手_吉米‧戴維斯","gender":"男","element":"火水","wikiNumber":"10492"},
							{"id":"272","eventID":"48","event":"霸眼戰線","name":"煌流星的砲擊貓_剛多‧基吉萊","gender":"男","element":"水火","wikiNumber":"10493"},
							{"id":"273","eventID":"48","event":"霸眼戰線","name":"煌炎的白銀狐_嘉露蒂海菈‧亞爾巴","gender":"女","element":"火火","wikiNumber":"10494"},
							{"id":"274","eventID":"48","event":"霸眼戰線","name":"迅雷的煌絕劍_雅瑪佳德‧姬石榴","gender":"女","element":"雷水","wikiNumber":"10495"},
							{"id":"275","eventID":"49","event":"神都匹卡雷斯克&機械與少女Ⅱ","name":"白貌之獸 埃雅露姆‧阿多拉","gender":"女","element":"火雷","wikiNumber":"10645"},
							{"id":"276","eventID":"49","event":"神都匹卡雷斯克&機械與少女Ⅱ","name":"悲哀的機巧兵 菲歐爾‧德雷曼","gender":"女","element":"水光","wikiNumber":"10648"},
							{"id":"277","eventID":"49","event":"神都匹卡雷斯克&機械與少女Ⅱ","name":"戰場的夢想家 歐魯特斯‧邦特","gender":"男","element":"雷火","wikiNumber":"10642"},
							{"id":"278","eventID":"49","event":"神都匹卡雷斯克&機械與少女Ⅱ","name":"復仇的女義賊 桃花","gender":"女","element":"火火","wikiNumber":"11662"},
							{"id":"279","eventID":"49","event":"神都匹卡雷斯克&機械與少女Ⅱ","name":"偷竊的美學 迦斯帕‧阿爾尼克","gender":"男","element":"水水","wikiNumber":"11661"},
							{"id":"280","eventID":"49","event":"神都匹卡雷斯克&機械與少女Ⅱ","name":"偷到的人就贏 凱涅斯‧哈瓦","gender":"男","element":"雷雷","wikiNumber":"11660"},
							{"id":"281","eventID":"50","event":"庫耶斯式拍拖約會","name":"簡單的戀愛_奧菲莉亞","gender":"女","element":"水光","wikiNumber":"801650"},
							{"id":"282","eventID":"50","event":"庫耶斯式拍拖約會","name":"明鏡照形_席恩","gender":"男","element":"雷水","wikiNumber":"801652"},
							{"id":"283","eventID":"50","event":"庫耶斯式拍拖約會","name":"拋出蘋果的邀約_格萊恩","gender":"男","element":"火雷","wikiNumber":"801656"},
							{"id":"284","eventID":"50","event":"庫耶斯式拍拖約會","name":"活潑熱鬧柳穿魚_波琳","gender":"女","element":"火火","wikiNumber":"801658"},
							{"id":"285","eventID":"50","event":"庫耶斯式拍拖約會","name":"遊走情場的玫瑰王子_迦瑪","gender":"男","element":"雷光","wikiNumber":"801660"},
							{"id":"286","eventID":"51","event":"神聖天空之星3","name":"妝點天空的許願星_克蕾緹雅‧布萊葉","gender":"女","element":"水水","wikiNumber":"10369"},
							{"id":"287","eventID":"51","event":"神聖天空之星3","name":"夏天的惡作劇_普莉菲卡‧朗克斯塔","gender":"女","element":"雷闇","wikiNumber":"10372"},
							{"id":"288","eventID":"51","event":"神聖天空之星3","name":"和夏天嬉戲的賢神_莉塔‧班尼斯特","gender":"女","element":"雷雷","wikiNumber":"10375"},
							{"id":"289","eventID":"51","event":"神聖天空之星3","name":"閃耀夏日的戀天使_瑪格莉特‧麗兒","gender":"女","element":"火水","wikiNumber":"10378"},
							{"id":"290","eventID":"51","event":"神聖天空之星3","name":"智慧有如大海_諾因‧凱拉","gender":"女","element":"火火","wikiNumber":"10381"},
							{"id":"291","eventID":"51","event":"神聖天空之星3","name":"常夏禁忌果實_伊芙‧佛克羅爾","gender":"女","element":"水光","wikiNumber":"10384"},
							{"id":"292","eventID":"52","event":"神聖天空之星2","name":"為聖夜獻上祝福_克蕾緹雅‧布萊葉","gender":"女","element":"火水","wikiNumber":"9506"},
							{"id":"293","eventID":"52","event":"神聖天空之星2","name":"聖與邪_普莉菲卡‧朗克斯塔","gender":"女","element":"水闇","wikiNumber":"9509"},
							{"id":"294","eventID":"52","event":"神聖天空之星2","name":"慧眼無雙的大賢者_諾因‧凱拉","gender":"女","element":"雷雷","wikiNumber":"9512"},
							{"id":"295","eventID":"52","event":"神聖天空之星2","name":"獻給你_克蕾緹雅＆普莉菲卡","gender":"女","element":"水火","wikiNumber":"9514"},
							{"id":"296","eventID":"52","event":"神聖天空之星2","name":"在聖夜獻上聖女的歌聲_索拉娜＆光","gender":"女","element":"雷光","wikiNumber":"9517"},
							{"id":"297","eventID":"52","event":"神聖天空之星2","name":"武鬥熱血派_瑪格莉特＆莉亞菈","gender":"女","element":"火雷","wikiNumber":"9520"},
							{"id":"298","eventID":"53","event":"神聖天空之星","name":"俯瞰眾星的大賢_諾因‧凱拉","gender":"女","element":"雷雷","wikiNumber":"801488"},
							{"id":"299","eventID":"53","event":"神聖天空之星","name":"橫渡聖夜之空_光‧絲菲亞","gender":"女","element":"雷雷","wikiNumber":"801489"},
							{"id":"300","eventID":"53","event":"神聖天空之星","name":"搖盪星海之光_索拉娜‧卡魯納","gender":"女","element":"火水","wikiNumber":"801490"},
							{"id":"301","eventID":"53","event":"神聖天空之星","name":"絕對☆戀ANGEL_瑪格莉特‧麗兒","gender":"女","element":"火光","wikiNumber":"801491"},
							{"id":"302","eventID":"53","event":"神聖天空之星","name":"秘藏在拳裡的熱情_莉亞菈‧羅姆","gender":"女","element":"水雷","wikiNumber":"801492"},
							{"id":"303","eventID":"53","event":"神聖天空之星","name":"星彩的祝福_克蕾緹雅‧布萊葉","gender":"女","element":"水光","wikiNumber":"801493"},
							{"id":"304","eventID":"54","event":"惡作劇女神與兔子的故事","name":"照耀罪人的虹光_尤絲蒂‧勞","gender":"女","element":"水火","wikiNumber":"10406"},
							{"id":"305","eventID":"54","event":"惡作劇女神與兔子的故事","name":"罰之神炎_彼得拉‧利凱","gender":"女","element":"火光","wikiNumber":"10407"},
							{"id":"306","eventID":"54","event":"惡作劇女神與兔子的故事","name":"絕對的炯眼_里亞涅‧希爾瓦","gender":"女","element":"水火","wikiNumber":"10408"},
							{"id":"307","eventID":"54","event":"惡作劇女神與兔子的故事","name":"神之血、人之心_埃萊妮‧碧茜","gender":"女","element":"火雷","wikiNumber":"10409"},
							{"id":"308","eventID":"55","event":"天界的雙子 訣別的年代記","name":"編織時間的賢者_克諾瓦‧蒙特爾","gender":"男","element":"火火","wikiNumber":"7307"},
							{"id":"309","eventID":"55","event":"天界的雙子 訣別的年代記","name":"神刻的觀察者_伊絲特瓦蕾‧凱特","gender":"女","element":"水火","wikiNumber":"7306"},
							{"id":"310","eventID":"55","event":"天界的雙子 訣別的年代記","name":"時間的守護天使_梅蒂絲‧路坦","gender":"女","element":"火水","wikiNumber":"7305"},
							{"id":"311","eventID":"55","event":"天界的雙子 訣別的年代記","name":"虛幻世界的念想_普流姆‧諾瓦蘭","gender":"女","element":"雷闇","wikiNumber":"7304"},
							{"id":"312","eventID":"55","event":"天界的雙子 訣別的年代記","name":"虛幻世界的念想_普流姆‧諾瓦蘭","gender":"女","element":"雷光","wikiNumber":"7303"},
							{"id":"313","eventID":"55","event":"天界的雙子 訣別的年代記","name":"遊遍歷史的神獸_托托‧獏羅","gender":"男女","element":"雷雷","wikiNumber":"6292"},
							{"id":"314","eventID":"56","event":"響命CrossDerive ACT3","name":"With_Brave_Heart_艾妮","gender":"女","element":"雷雷","wikiNumber":"11314"},
							{"id":"315","eventID":"56","event":"響命CrossDerive ACT3","name":"Beam_Meister_格里特","gender":"男","element":"水雷","wikiNumber":"11317"},
							{"id":"316","eventID":"56","event":"響命CrossDerive ACT3","name":"Shield_of_Spirit_庫蘭","gender":"女","element":"雷雷","wikiNumber":"11320"},
							{"id":"317","eventID":"56","event":"響命CrossDerive ACT3","name":"Nuke-Nin_密絲緹海德","gender":"女","element":"火火","wikiNumber":"11323"},
							{"id":"318","eventID":"56","event":"響命CrossDerive ACT3","name":"Odd_Couple_亞萊娜＆薇潔塔","gender":"女","element":"水水","wikiNumber":"11326"},
							{"id":"319","eventID":"56","event":"響命CrossDerive ACT3","name":"Thrill_Eater_雷利修","gender":"男","element":"火光","wikiNumber":"11329"},
							{"id":"320","eventID":"57","event":"響命CrossDerive ACT2","name":"With_All_My_Heart_艾妮","gender":"女","element":"火火","wikiNumber":"11357"},
							{"id":"321","eventID":"57","event":"響命CrossDerive ACT2","name":"Call_the_Shots_格里特","gender":"男","element":"雷水","wikiNumber":"11358"},
							{"id":"322","eventID":"57","event":"響命CrossDerive ACT2","name":"Ninja_Arts_密絲緹海德","gender":"女","element":"火水","wikiNumber":"11359"},
							{"id":"323","eventID":"57","event":"響命CrossDerive ACT2","name":"Get_a_Kick_亞萊娜＆雷利修","gender":"男女","element":"水水","wikiNumber":"11360"},
							{"id":"324","eventID":"57","event":"響命CrossDerive ACT2","name":"Carry_the_Ball_薇潔塔","gender":"女","element":"水水","wikiNumber":"11361"},
							{"id":"325","eventID":"57","event":"響命CrossDerive ACT2","name":"Never-Say-Die_Spirit_庫蘭","gender":"女","element":"雷火","wikiNumber":"11362"},
							{"id":"326","eventID":"58","event":"響命CrossDerive","name":"With a Will 艾妮","gender":"女","element":"水水","wikiNumber":"10186"},
							{"id":"327","eventID":"58","event":"響命CrossDerive","name":"Cat's Meow 艾妮","gender":"女","element":"水水","wikiNumber":"10187"},
							{"id":"328","eventID":"58","event":"響命CrossDerive","name":"Sparks_Fly_Upward_格里特","gender":"男","element":"火水","wikiNumber":"10188"},
							{"id":"329","eventID":"58","event":"響命CrossDerive","name":"Clear_the_Way_亞萊娜","gender":"女","element":"雷雷","wikiNumber":"10189"},
							{"id":"330","eventID":"58","event":"響命CrossDerive","name":"Shadow_of_Shade_密絲緹海德","gender":"女","element":"火火","wikiNumber":"10190"},
							{"id":"331","eventID":"58","event":"響命CrossDerive","name":"In_the_Fast_Lane_雷利修","gender":"男","element":"水雷","wikiNumber":"10191"},
							{"id":"332","eventID":"58","event":"響命CrossDerive","name":"Right_and_Left_薇潔塔","gender":"女","element":"雷水","wikiNumber":"10192"},
							{"id":"333","eventID":"59","event":"沉睡的遺跡 Outlander","name":"發現祕寶！？_亞露露‧亞蓋爾","gender":"女","element":"火光","wikiNumber":"9818"},
							{"id":"334","eventID":"59","event":"沉睡的遺跡 Outlander","name":"清嵐戰鬥少女_維多利亞‧涅爾德","gender":"女","element":"雷水","wikiNumber":"9821"},
							{"id":"335","eventID":"59","event":"沉睡的遺跡 Outlander","name":"向點心祈禱_埃利安娜‧古洛斯","gender":"女","element":"水水","wikiNumber":"9824"},
							{"id":"336","eventID":"59","event":"沉睡的遺跡 Outlander","name":"法爾內塞的談話_露芙＆菈特","gender":"女","element":"火雷","wikiNumber":"9827"},
							{"id":"337","eventID":"59","event":"沉睡的遺跡 Outlander","name":"愛的守護者_希特拉‧涅普爾","gender":"女","element":"水闇","wikiNumber":"9830"},
							{"id":"338","eventID":"59","event":"沉睡的遺跡 Outlander","name":"深不可測的巫術師_梅貝爾‧泰勒","gender":"女","element":"雷闇","wikiNumber":"9833"},
							{"id":"339","eventID":"60","event":"幻魔特區RELOADEDⅢ Final Assemble","name":"並肩作戰的救世之星_萊葛爾＆極","gender":"男","element":"火水","wikiNumber":"11547"},
							{"id":"340","eventID":"60","event":"幻魔特區RELOADEDⅢ Final Assemble","name":"救世光輝_萊葛爾＆薩爾瓦多","gender":"男","element":"水水","wikiNumber":"11550"},
							{"id":"341","eventID":"60","event":"幻魔特區RELOADEDⅢ Final Assemble","name":"不受挫的心_席菈＆朱蒂提亞","gender":"女","element":"雷雷","wikiNumber":"11553"},
							{"id":"342","eventID":"60","event":"幻魔特區RELOADEDⅢ Final Assemble","name":"協心戮力_法爾薩＆泰西","gender":"男女","element":"火火","wikiNumber":"11556"},
							{"id":"343","eventID":"60","event":"幻魔特區RELOADEDⅢ Final Assemble","name":"再次奮起的心_八千代＆安卡","gender":"女","element":"水雷","wikiNumber":"11559"},
							{"id":"344","eventID":"60","event":"幻魔特區RELOADEDⅢ Final Assemble","name":"懷抱滿溢的愛_匹莉雅‧歐爾皮斯","gender":"女","element":"雷雷","wikiNumber":"11562"},
							{"id":"345","eventID":"61","event":"幻魔特區RELOADEDⅡ -RE:unite","name":"拯救星星之人_萊葛爾＆薩爾瓦多","gender":"男","element":"水水","wikiNumber":"10273"},
							{"id":"346","eventID":"61","event":"幻魔特區RELOADEDⅡ -RE:unite","name":"羈絆的體現_席菈＆朱蒂提亞","gender":"女","element":"水光","wikiNumber":"10276"},
							{"id":"347","eventID":"61","event":"幻魔特區RELOADEDⅡ -RE:unite","name":"為了【王】_瓦雷烏斯‧亞基歐","gender":"男","element":"火雷","wikiNumber":"10279"},
							{"id":"348","eventID":"61","event":"幻魔特區RELOADEDⅡ -RE:unite","name":"意念的成果_匹莉雅‧歐爾皮斯","gender":"女","element":"雷水","wikiNumber":"10282"},
							{"id":"349","eventID":"61","event":"幻魔特區RELOADEDⅡ -RE:unite","name":"鷹斬之翼_泰西＆佛盧帝斯","gender":"男","element":"雷光","wikiNumber":"10285"},
							{"id":"350","eventID":"61","event":"幻魔特區RELOADEDⅡ -RE:unite","name":"激烈的愛情_法爾薩＆立斯思雷尼斯","gender":"女","element":"火火","wikiNumber":"10288"},
							{"id":"351","eventID":"62","event":"幻魔特區RELOADED -GardeniA dist.","name":"救世之星_萊葛爾＆薩爾瓦多","gender":"男","element":"水水","wikiNumber":"11584"},
							{"id":"352","eventID":"62","event":"幻魔特區RELOADED -GardeniA dist.","name":"貫徹的意念_席菈＆朱蒂提亞","gender":"女","element":"雷光","wikiNumber":"11585"},
							{"id":"353","eventID":"62","event":"幻魔特區RELOADED -GardeniA dist.","name":"殺光魔物_法爾薩＆立斯思雷尼斯","gender":"女","element":"水闇","wikiNumber":"11586"},
							{"id":"354","eventID":"62","event":"幻魔特區RELOADED -GardeniA dist.","name":"勇猛精進_泰西＆佛盧帝斯","gender":"男","element":"火火","wikiNumber":"11587"},
							{"id":"355","eventID":"62","event":"幻魔特區RELOADED -GardeniA dist.","name":"鋼鐵的純真_謬爾＆雷貝里歐","gender":"女","element":"火闇","wikiNumber":"11588"},
							{"id":"356","eventID":"62","event":"幻魔特區RELOADED -GardeniA dist.","name":"Ver.GardeniA_淺蔥＆瑟盧烏斯","gender":"女","element":"雷雷","wikiNumber":"11589"},
							{"id":"357","eventID":"63","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"與我共同挑戰_極＆奧迪阿姆斯","gender":"男","element":"火火","wikiNumber":"11248"},
							{"id":"358","eventID":"63","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"生命與心靈綻放之光_極‧蜂須賀","gender":"男","element":"火雷","wikiNumber":"11249"},
							{"id":"359","eventID":"63","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"風雅櫻華_八千代＆茵芙蘿蕾","gender":"女","element":"水水","wikiNumber":"11250"},
							{"id":"360","eventID":"63","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"雷牙機翔_澄生＆艾克斯馬基那","gender":"男","element":"雷火","wikiNumber":"11251"},
							{"id":"361","eventID":"63","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"月白奔蛇_時生＆艾克斯阿爾巴","gender":"男","element":"火水","wikiNumber":"11252"},
							{"id":"362","eventID":"63","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"守護世界的少女_安卡＆蘿卡","gender":"女","element":"雷光","wikiNumber":"11253"},
							{"id":"363","eventID":"63","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"自由的鏑箭_安德亞＆小紅","gender":"男女","element":"水火","wikiNumber":"11254"},
							{"id":"364","eventID":"63","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"古魂鏡身_謬爾＆雷貝里歐","gender":"女","element":"火火","wikiNumber":"11255"},
							{"id":"365","eventID":"63","event":"幻魔特區朱雀Ⅲ 幻夢之光","name":"永遠的守護者_淺蔥＆瑟盧烏斯","gender":"女","element":"雷光","wikiNumber":"11256"},
							{"id":"366","eventID":"64","event":"幻魔特區朱雀Ⅱ 鋼鐵之槍","name":"其為深淵的災害_極＆鋼鐵之獸","gender":"男","element":"火闇","wikiNumber":"10314"},
							{"id":"367","eventID":"64","event":"幻魔特區朱雀Ⅱ 鋼鐵之槍","name":"通往夏天而敞開的門扉_八千代＆安卡","gender":"女","element":"水雷","wikiNumber":"10315"},
							{"id":"368","eventID":"64","event":"幻魔特區朱雀Ⅱ 鋼鐵之槍","name":"遍體鱗傷的扳機_澄生＆時生","gender":"男","element":"雷雷","wikiNumber":"10316"},
							{"id":"369","eventID":"64","event":"幻魔特區朱雀Ⅱ 鋼鐵之槍","name":"摧毀對手的鐵臂_安德亞＆里貝魯塔斯","gender":"男","element":"水雷","wikiNumber":"10317"},
							{"id":"370","eventID":"64","event":"幻魔特區朱雀Ⅱ 鋼鐵之槍","name":"深淵的女王_謬爾＆雷貝里歐","gender":"女","element":"火闇","wikiNumber":"10318"},
							{"id":"371","eventID":"64","event":"幻魔特區朱雀Ⅱ 鋼鐵之槍","name":"歷史的見證人_淺蔥＆瑟盧烏斯","gender":"女","element":"雷光","wikiNumber":"10319"},
							{"id":"372","eventID":"65","event":"幻魔特區朱雀","name":"不滅的主從_極＆奧迪阿姆斯","gender":"男","element":"火火","wikiNumber":"9207"},
							{"id":"373","eventID":"65","event":"幻魔特區朱雀","name":"機神的操控者_澄生＆艾克斯馬基那","gender":"男","element":"雷雷","wikiNumber":"9208"},
							{"id":"374","eventID":"65","event":"幻魔特區朱雀","name":"蛇骨的真王_時生＆艾克斯阿爾巴","gender":"男","element":"火火","wikiNumber":"9209"},
							{"id":"375","eventID":"65","event":"幻魔特區朱雀","name":"就像在照鏡子的我們_安卡＆特伊波亞","gender":"女","element":"雷水","wikiNumber":"9210"},
							{"id":"376","eventID":"65","event":"幻魔特區朱雀","name":"櫻媛與巫女_八千代＆茵芙蘿蕾","gender":"女","element":"水水","wikiNumber":"9211"},
							{"id":"377","eventID":"66","event":"空戰的修瓦爾茲","name":"災難王子_齊格‧庫勒耶","gender":"男","element":"火闇","wikiNumber":"10221"},
							{"id":"378","eventID":"66","event":"空戰的修瓦爾茲","name":"大空賊的驕傲_洛冽緹‧卡那拉","gender":"女","element":"水水","wikiNumber":"10224"},
							{"id":"379","eventID":"66","event":"空戰的修瓦爾茲","name":"碧空無敗_肯妮金‧布倫希爾德","gender":"女","element":"雷光","wikiNumber":"10227"},
							{"id":"380","eventID":"66","event":"空戰的修瓦爾茲","name":"空賊少校的進軍_蘿葳‧弗洛伊賽","gender":"女","element":"雷水","wikiNumber":"10230"},
							{"id":"381","eventID":"66","event":"空戰的修瓦爾茲","name":"傭兵王_菲利庫斯‧榭法","gender":"男","element":"火火","wikiNumber":"10233"},
							{"id":"382","eventID":"66","event":"空戰的修瓦爾茲","name":"龍鳴聲響_利可西斯＆凱娜","gender":"男女","element":"水闇","wikiNumber":"10236"},
							{"id":"383","eventID":"67","event":"空戰的德爾基馬斯Ⅲ 飄揚的軍旗","name":"蒼天中飄揚的軍旗_迪特利希‧貝爾克","gender":"男","element":"火火","wikiNumber":"9072"},
							{"id":"384","eventID":"67","event":"空戰的德爾基馬斯Ⅲ 飄揚的軍旗","name":"黑鴉復仇者_齊格‧庫勒耶","gender":"男","element":"雷雷","wikiNumber":"9075"},
							{"id":"385","eventID":"67","event":"空戰的德爾基馬斯Ⅲ 飄揚的軍旗","name":"殘酷的騎士部隊_蘿葳‧弗洛伊賽","gender":"女","element":"火火","wikiNumber":"9078"},
							{"id":"386","eventID":"67","event":"空戰的德爾基馬斯Ⅲ 飄揚的軍旗","name":"新王誕生_菲利庫斯‧榭法","gender":"男","element":"水火","wikiNumber":"9081"},
							{"id":"387","eventID":"67","event":"空戰的德爾基馬斯Ⅲ 飄揚的軍旗","name":"公爵與隨從？_克拉黎亞＆威拉姆","gender":"男女","element":"雷水","wikiNumber":"9084"},
							{"id":"388","eventID":"67","event":"空戰的德爾基馬斯Ⅲ 飄揚的軍旗","name":"歷戰必勝龍擊兵團_凱娜＆萊薩","gender":"女","element":"火水","wikiNumber":"9087"},
							{"id":"389","eventID":"67","event":"空戰的德爾基馬斯Ⅲ 飄揚的軍旗","name":"天譴到來_普魯米耶＆盧凡爾","gender":"男女","element":"水光","wikiNumber":"9090"},
							{"id":"390","eventID":"68","event":"空戰的德爾基馬斯Ⅱ 昏暗英雄","name":"叛逆大元帥_迪特利希‧貝爾克","gender":"男","element":"雷火","wikiNumber":"9133"},
							{"id":"391","eventID":"68","event":"空戰的德爾基馬斯Ⅱ 昏暗英雄","name":"昏暗英雄的副官_蘿葳‧弗洛伊賽","gender":"女","element":"水水","wikiNumber":"9134"},
							{"id":"392","eventID":"68","event":"空戰的德爾基馬斯Ⅱ 昏暗英雄","name":"果敢的勇將_克拉黎亞‧夏魯利耶","gender":"女","element":"火雷","wikiNumber":"9135"},
							{"id":"393","eventID":"68","event":"空戰的德爾基馬斯Ⅱ 昏暗英雄","name":"回歸戰場的左右手_威拉姆‧奧爾岡","gender":"男","element":"火火","wikiNumber":"9136"},
							{"id":"394","eventID":"68","event":"空戰的德爾基馬斯Ⅱ 昏暗英雄","name":"天意之劍_盧凡爾‧奧路姆","gender":"男","element":"水雷","wikiNumber":"9137"},
							{"id":"395","eventID":"68","event":"空戰的德爾基馬斯Ⅱ 昏暗英雄","name":"穿空傭兵_菲利庫斯‧榭法","gender":"男","element":"雷雷","wikiNumber":"9138"},
							{"id":"396","eventID":"68","event":"空戰的德爾基馬斯Ⅱ 昏暗英雄","name":"無視道德的天才_蕾貝卡‧鄂蘭","gender":"女","element":"雷雷","wikiNumber":"9139"},
							{"id":"397","eventID":"69","event":"空戰的德爾基馬斯","name":"空中的昏暗英雄_迪特利希‧貝爾克","gender":"男","element":"火雷","wikiNumber":"10256"},
							{"id":"398","eventID":"69","event":"空戰的德爾基馬斯","name":"支配空戰的隻翼_蘿葳‧弗洛伊賽","gender":"女","element":"雷雷","wikiNumber":"10257"},
							{"id":"399","eventID":"69","event":"空戰的德爾基馬斯","name":"絕對的勝者_克拉黎亞‧夏魯利耶","gender":"女","element":"雷火","wikiNumber":"10258"},
							{"id":"400","eventID":"69","event":"空戰的德爾基馬斯","name":"永不滅亡的方程式_威拉姆‧奧爾岡","gender":"男","element":"雷雷","wikiNumber":"10259"},
							{"id":"401","eventID":"69","event":"空戰的德爾基馬斯","name":"破邪必滅之刃_盧凡爾‧奧路姆","gender":"男","element":"水水","wikiNumber":"10260"},
							{"id":"402","eventID":"69","event":"空戰的德爾基馬斯","name":"漫舞於空中的羽翼_普魯米耶‧歇爾","gender":"女","element":"水雷","wikiNumber":"10261"},
							{"id":"403","eventID":"69","event":"空戰的德爾基馬斯","name":"龍迅百騎將軍_萊薩‧奈都爾","gender":"女","element":"火水","wikiNumber":"10262"},
							{"id":"404","eventID":"69","event":"空戰的德爾基馬斯","name":"炎龍的進擊者_凱娜·埃爾蓋茲","gender":"女","element":"火火","wikiNumber":"10263"},
							{"id":"405","eventID":"70","event":"虛實難辨的假面宴會","name":"爾虞我詐的心機組合_薩伯爾&朧莉","gender":"男女","element":"火光","wikiNumber":"801812"},
							{"id":"406","eventID":"70","event":"虛實難辨的假面宴會","name":"賞玩慾望的魔翼天使_珂珂","gender":"女","element":"水雷","wikiNumber":"801813"},
							{"id":"407","eventID":"70","event":"虛實難辨的假面宴會","name":"宴會間的花蝴蝶_歌莉亞&格拉娜","gender":"女","element":"水光","wikiNumber":"801814"},
							{"id":"408","eventID":"70","event":"虛實難辨的假面宴會","name":"中華風滿漢料理_蜜多莉","gender":"女","element":"火火","wikiNumber":"801815"},
							{"id":"409","eventID":"70","event":"虛實難辨的假面宴會","name":"善邪不分的烘焙路_帕西娜","gender":"女","element":"雷雷","wikiNumber":"801816"},
							{"id":"410","eventID":"70","event":"虛實難辨的假面宴會","name":"復出的傳說勇者_斯林&莎曼妲","gender":"男女","element":"火雷","wikiNumber":"801817"},
							{"id":"411","eventID":"71","event":"《沙灘上的冰果宴》","name":"酸甜沁涼的特效藥_紬","gender":"女","element":"水水","wikiNumber":"801352"},
							{"id":"412","eventID":"71","event":"《沙灘上的冰果宴》","name":"肌膚與麵包都是健康小麥色_賽特絲","gender":"女","element":"水雷","wikiNumber":"801354"},
							{"id":"413","eventID":"71","event":"《沙灘上的冰果宴》","name":"沙灘上飛舞的精靈_露絲娜","gender":"女","element":"雷雷","wikiNumber":"801356"},
							{"id":"414","eventID":"71","event":"《沙灘上的冰果宴》","name":"用刨冰與水果作曲_蜜多莉","gender":"女","element":"雷光","wikiNumber":"801358"},
							{"id":"415","eventID":"72","event":"神祕委託‧寒冰之巔的考驗","name":"赤豔的混血護林者_曼曼","gender":"女","element":"雷雷","wikiNumber":"800966"},
							{"id":"416","eventID":"72","event":"神祕委託‧寒冰之巔的考驗","name":"綺麗蒼森的守護靈_嘉蘭‧西維婭","gender":"女","element":"水水","wikiNumber":"800967"},
							{"id":"417","eventID":"72","event":"神祕委託‧寒冰之巔的考驗","name":"月見鄉的引路人_十五夜","gender":"女","element":"雷雷","wikiNumber":"800968"},
							{"id":"418","eventID":"72","event":"神祕委託‧寒冰之巔的考驗","name":"傳遞思念的使者_列特‧托托克爾","gender":"男","element":"火火","wikiNumber":"800969"},
							{"id":"419","eventID":"73","event":"偶像ω喵！！","name":"GZ偶像_莉露姆‧洛洛特","gender":"女","element":"火火","wikiNumber":"10032"},
							{"id":"420","eventID":"73","event":"偶像ω喵！！","name":"優雅護士_卡多琳‧G‧U","gender":"女","element":"雷雷","wikiNumber":"10034"},
							{"id":"421","eventID":"73","event":"偶像ω喵！！","name":"純白小貓咪_莉莉＆艾克賽莉亞","gender":"女","element":"水光","wikiNumber":"10036"},
							{"id":"422","eventID":"73","event":"偶像ω喵！！","name":"白線運動風_艾拉＆賽拉妲","gender":"女","element":"火雷","wikiNumber":"10038"},
							{"id":"423","eventID":"73","event":"偶像ω喵！！","name":"嚴守時間偶像_優卡‧恩德","gender":"女","element":"雷火","wikiNumber":"10040"},
							{"id":"424","eventID":"73","event":"偶像ω喵！！","name":"男子氣概偶像_露卡‧福爾提斯","gender":"女","element":"水火","wikiNumber":"10042"},
							{"id":"425","eventID":"74","event":"偶像ω喵！前&後篇","name":"超級偶像魔導少女_莉露姆‧洛洛特","gender":"女","element":"火火","wikiNumber":"10944"},
							{"id":"426","eventID":"74","event":"偶像ω喵！前&後篇","name":"時尚護士_卡多琳‧G‧U","gender":"女","element":"水雷","wikiNumber":"10945"},
							{"id":"427","eventID":"74","event":"偶像ω喵！前&後篇","name":"惡威怒流_賽拉妲‧艾格蘭泰","gender":"女","element":"火闇","wikiNumber":"10946"},
							{"id":"428","eventID":"74","event":"偶像ω喵！前&後篇","name":"鍊金偶像_艾拉‧芙拉思卡","gender":"女","element":"雷闇","wikiNumber":"10947"},
							{"id":"429","eventID":"74","event":"偶像ω喵！前&後篇","name":"哼哼偶像_莉莉‧康乃爾","gender":"女","element":"雷雷","wikiNumber":"10948"},
							{"id":"430","eventID":"74","event":"偶像ω喵！前&後篇","name":"偶像龍騎士_艾克賽莉亞‧庫魯斯","gender":"女","element":"水光","wikiNumber":"10949"},
							{"id":"431","eventID":"74","event":"偶像ω喵！前&後篇","name":"成立！粗枝大派","gender":"女","element":"火水","wikiNumber":"10950"},
							{"id":"432","eventID":"74","event":"偶像ω喵！前&後篇","name":"成立！擦身之緣也是天意","gender":"女","element":"雷光","wikiNumber":"10951"},
							{"id":"433","eventID":"75","event":"淡薄的藍色光芒 最終章 終極聖祈","name":"終極聖祈_莎倫＆西奧多","gender":"男女","element":"水火","wikiNumber":"9594"},
							{"id":"434","eventID":"76","event":"淡薄的藍色光芒 第二章 虛幻聖域","name":"包容皇界的慈愛_莎倫‧耶爾格","gender":"女","element":"水光","wikiNumber":"9588"},
							{"id":"435","eventID":"76","event":"淡薄的藍色光芒 第二章 虛幻聖域","name":"蒼翼破斷皇零劍_西奧多‧薩扎","gender":"男","element":"水水","wikiNumber":"9589"},
							{"id":"436","eventID":"77","event":"淡薄的藍色光芒 第一章 皇帝與劍","name":"現在開花的世界_莎倫‧耶爾格","gender":"女","element":"雷光","wikiNumber":"9587"},
							{"id":"437","eventID":"78","event":"智慧的意義","name":"飛花熒煌綴明鮮_夏孟","gender":"女","element":"火雷","wikiNumber":"801495"},
							{"id":"438","eventID":"78","event":"智慧的意義","name":"埋首莘莘萬卷中_秋辛","gender":"男","element":"雷水","wikiNumber":"801497"},
							{"id":"439","eventID":"78","event":"智慧的意義","name":"狐裘髮鬢覆霜雪_冬禹","gender":"女","element":"水火","wikiNumber":"801499"},
							{"id":"440","eventID":"78","event":"智慧的意義","name":"明月星輝忘返_愛絲翠雅","gender":"女","element":"水水","wikiNumber":"801501"},
							{"id":"441","eventID":"78","event":"智慧的意義","name":"連結星星的恆等式_裘浩斯","gender":"男","element":"雷雷","wikiNumber":"801507"},
							{"id":"442","eventID":"79","event":"片翼天使的轉世約定","name":"誓約兩世不悔的羈絆_瞬&陽","gender":"男","element":"水雷","wikiNumber":"801279"},
							{"id":"443","eventID":"79","event":"片翼天使的轉世約定","name":"月下的命運編織者_珂珂","gender":"女","element":"水闇","wikiNumber":"801280"},
							{"id":"444","eventID":"79","event":"片翼天使的轉世約定","name":"讓人幸福的味道_蜜多莉","gender":"女","element":"雷雷","wikiNumber":"801281"},
							{"id":"445","eventID":"79","event":"片翼天使的轉世約定","name":"南瓜披風下的暗夜怪盜_薩伯爾","gender":"男","element":"雷闇","wikiNumber":"801282"},
							{"id":"446","eventID":"79","event":"片翼天使的轉世約定","name":"軍中的白衣救贖_紬","gender":"女","element":"水火","wikiNumber":"801283"},
							{"id":"447","eventID":"79","event":"片翼天使的轉世約定","name":"操控命運的可愛殺手_真冬&霧子","gender":"男女","element":"水火","wikiNumber":"801284"},
							{"id":"448","eventID":"79","event":"片翼天使的轉世約定","name":"在黑夜捉弄人們的少女_格拉娜","gender":"女","element":"火水","wikiNumber":"801285"},
							{"id":"449","eventID":"79","event":"片翼天使的轉世約定","name":"桌間穿梭的曼妙身姿_歌莉亞","gender":"女","element":"火光","wikiNumber":"801286"},
							{"id":"450","eventID":"79","event":"片翼天使的轉世約定","name":"邪氣洶湧的再世魔族_寶迪","gender":"男","element":"雷光","wikiNumber":"801287"},
							{"id":"451","eventID":"79","event":"片翼天使的轉世約定","name":"指向真實的凜冽曙光_朧莉","gender":"女","element":"水闇","wikiNumber":"801288"},
							{"id":"452","eventID":"80","event":"炎夏的海灘風情！","name":"水族的末日殺手_薩伯爾","gender":"男","element":"雷闇","wikiNumber":"801476"},
							{"id":"453","eventID":"80","event":"炎夏的海灘風情！","name":"回憶中的魔王城堡_寶迪","gender":"男","element":"雷光","wikiNumber":"801477"},
							{"id":"454","eventID":"80","event":"炎夏的海灘風情！","name":"夏日的泳裝少女_朧莉","gender":"女","element":"水闇","wikiNumber":"801478"},
							{"id":"455","eventID":"80","event":"炎夏的海灘風情！","name":"靈界偵探的助手_悠可","gender":"女","element":"火水","wikiNumber":"801479"},
							{"id":"456","eventID":"80","event":"炎夏的海灘風情！","name":"想要喝點什麼嗎？_歌莉亞","gender":"女","element":"火光","wikiNumber":"801480"},
							{"id":"457","eventID":"80","event":"炎夏的海灘風情！","name":"尋找美麗的回憶_霓莎","gender":"女","element":"水水","wikiNumber":"801481"},
							{"id":"458","eventID":"81","event":"七夕夜‧煙花燦爛","name":"在七夕的傳情紙鶴_拉索","gender":"男","element":"水水","wikiNumber":"801482"},
							{"id":"459","eventID":"81","event":"七夕夜‧煙花燦爛","name":"在七夕祈願的女孩_露絲娜","gender":"女","element":"水光","wikiNumber":"801483"},
							{"id":"460","eventID":"81","event":"七夕夜‧煙花燦爛","name":"黑暗彼方的委託_珂珂","gender":"女","element":"水闇","wikiNumber":"801484"},
							{"id":"461","eventID":"81","event":"七夕夜‧煙花燦爛","name":"燦爛的節慶煙花_優依","gender":"女","element":"火雷","wikiNumber":"801485"},
							{"id":"462","eventID":"81","event":"七夕夜‧煙花燦爛","name":"怪盜的迷糊伙伴_格拉娜","gender":"女","element":"火水","wikiNumber":"801486"},
							{"id":"463","eventID":"81","event":"七夕夜‧煙花燦爛","name":"降罪天使_洛琪兒","gender":"女","element":"雷雷","wikiNumber":"801487"},
							{"id":"464","eventID":"82","event":"《靈界魔女：危險紳士之章》","name":"闇夜怪盜紳士_薩伯爾‧哲","gender":"男","element":"火火","wikiNumber":"801438"},
							{"id":"465","eventID":"82","event":"《靈界魔女：危險紳士之章》","name":"斷鍊的魔女傳承_瑪露可‧雪恩","gender":"女","element":"水水","wikiNumber":"801440"},
							{"id":"466","eventID":"82","event":"《靈界魔女：危險紳士之章》","name":"靈界穿越者_莎朵莉‧雪恩","gender":"女","element":"雷光","wikiNumber":"801442"},
							{"id":"467","eventID":"82","event":"《靈界魔女：危險紳士之章》","name":"魔女試煉的裁決者_索恩","gender":"男","element":"雷水","wikiNumber":"801444"},
							{"id":"468","eventID":"82","event":"《靈界魔女：危險紳士之章》","name":"消亡的無名魔女_枯露美","gender":"女","element":"火光","wikiNumber":"801446"},
							{"id":"469","eventID":"83","event":"新說 桃娘傳Ⅱ 機關桃源虹繪卷","name":"四心一體Φ之陣_李太郎‧普露姆","gender":"女","element":"火火","wikiNumber":"9750"},
							{"id":"470","eventID":"83","event":"新說 桃娘傳Ⅱ 機關桃源虹繪卷","name":"人類歐帕茲_初瀨‧之‧島兒","gender":"男","element":"水火","wikiNumber":"9753"},
							{"id":"471","eventID":"83","event":"新說 桃娘傳Ⅱ 機關桃源虹繪卷","name":"真人不露相_八重‧栗柄","gender":"女","element":"雷雷","wikiNumber":"9756"},
							{"id":"472","eventID":"83","event":"新說 桃娘傳Ⅱ 機關桃源虹繪卷","name":"鶴鳴九皋_冰雨‧鶴鳴","gender":"女","element":"水水","wikiNumber":"9759"},
							{"id":"473","eventID":"83","event":"新說 桃娘傳Ⅱ 機關桃源虹繪卷","name":"名揚天地的風雷神_風華＆米蕾","gender":"女","element":"水雷","wikiNumber":"9762"},
							{"id":"474","eventID":"83","event":"新說 桃娘傳Ⅱ 機關桃源虹繪卷","name":"看我大展身手_春彥‧堀川","gender":"男","element":"雷光","wikiNumber":"9765"},
							{"id":"475","eventID":"84","event":"新說 桃娘傳 妖爺合戰誓助劍","name":"神姬武桃_李太郎‧普露姆","gender":"女","element":"火雷","wikiNumber":"9804"},
							{"id":"476","eventID":"84","event":"新說 桃娘傳 妖爺合戰誓助劍","name":"撩亂閃雷_米蕾‧凱拉姆","gender":"女","element":"雷水","wikiNumber":"9805"},
							{"id":"477","eventID":"84","event":"新說 桃娘傳 妖爺合戰誓助劍","name":"驚天颱風_風華‧凱拉姆","gender":"女","element":"水水","wikiNumber":"9806"},
							{"id":"478","eventID":"84","event":"新說 桃娘傳 妖爺合戰誓助劍","name":"舊世界的大賢_初瀨‧之‧島兒","gender":"男","element":"水火","wikiNumber":"9807"},
							{"id":"479","eventID":"84","event":"新說 桃娘傳 妖爺合戰誓助劍","name":"天下不遜的不妙傢伙_八重‧栗柄","gender":"女","element":"火水","wikiNumber":"9808"},
							{"id":"480","eventID":"84","event":"新說 桃娘傳 妖爺合戰誓助劍","name":"遭遇外世界_Y.U.N.A","gender":"女","element":"雷雷","wikiNumber":"9809"},
							{"id":"481","eventID":"84","event":"新說 桃娘傳 妖爺合戰誓助劍","name":"正牌溫泉桃娘傳","gender":"女","element":"水水","wikiNumber":"9810"},
							{"id":"482","eventID":"85","event":"桃娘傳","name":"桃娘傳_李太郎‧普露姆","gender":"女","element":"火火","wikiNumber":"7841"},
							{"id":"483","eventID":"85","event":"桃娘傳","name":"清朗的天雷鬼神_米蕾‧凱拉姆","gender":"女","element":"雷雷","wikiNumber":"7842"},
							{"id":"484","eventID":"85","event":"桃娘傳","name":"勇猛的天風鬼神_風華‧凱拉姆","gender":"女","element":"水水","wikiNumber":"7843"},
							{"id":"485","eventID":"86","event":"AbyssCode07 寂寞的境界","name":"AbCd-Φφ：《閉鎖深淵_史托路》","gender":"男","element":"火闇","wikiNumber":"11841"},
							{"id":"486","eventID":"86","event":"AbyssCode07 寂寞的境界","name":"AbCd-Φφ：《終端的處刑人_托露特》","gender":"女","element":"火火","wikiNumber":"11840"},
							{"id":"487","eventID":"87","event":"《裝神弄鬼》","name":"希臘舞台上的美杜莎_悠可","gender":"女","element":"水光","wikiNumber":"801422"},
							{"id":"488","eventID":"87","event":"《裝神弄鬼》","name":"惡魔系料理師_寶菈","gender":"女","element":"水水","wikiNumber":"801424"},
							{"id":"489","eventID":"87","event":"《裝神弄鬼》","name":"海底世界的美人魚_瑟芬妮","gender":"女","element":"火雷","wikiNumber":"801426"},
							{"id":"490","eventID":"87","event":"《裝神弄鬼》","name":"穿腦的死亡之聲_艾斌","gender":"男","element":"火闇","wikiNumber":"801428"},
							{"id":"491","eventID":"87","event":"《裝神弄鬼》","name":"背後喚人的恐怖傳說_卡菈洋","gender":"女","element":"雷火","wikiNumber":"801430"},
							{"id":"492","eventID":"87","event":"《裝神弄鬼》","name":"自我活體改造_塔寇","gender":"男","element":"雷雷","wikiNumber":"801432"},
							{"id":"493","eventID":"88","event":"給夏日綻放的你","name":"夏日的熱浪與向日葵_早瀨凜","gender":"女","element":"水水","wikiNumber":"8801"},
							{"id":"494","eventID":"89","event":"《沉眠之血2》幼龍的鳴嘶","name":"覺醒的幼龍_裴洛恩‧格利菲斯","gender":"男","element":"雷火","wikiNumber":"801824"},
							{"id":"495","eventID":"89","event":"《沉眠之血2》幼龍的鳴嘶","name":"薩蘭的帶刺薔薇_潔依瓦菈‧夏爾","gender":"女","element":"火水","wikiNumber":"801825"},
							{"id":"496","eventID":"89","event":"《沉眠之血2》幼龍的鳴嘶","name":"戰場上咆哮的獵豹_艾梅爾","gender":"女","element":"雷水","wikiNumber":"801826"},
							{"id":"497","eventID":"89","event":"《沉眠之血2》幼龍的鳴嘶","name":"渲染於紙上的邪繪_賽兒蜜雅","gender":"女","element":"水水","wikiNumber":"801827"},
							{"id":"498","eventID":"89","event":"《沉眠之血2》幼龍的鳴嘶","name":"生殺予奪的斷罪之鞭_可蘿碧","gender":"女","element":"雷雷","wikiNumber":"801828"},
							{"id":"499","eventID":"89","event":"《沉眠之血2》幼龍的鳴嘶","name":"現世的靈動之焰_納迦維埃","gender":"男","element":"火火","wikiNumber":"801829"},
							{"id":"500","eventID":"90","event":"《沉眠之血》—焚焰的國度","name":"半龍王族_裴洛恩‧格利菲斯","gender":"男","element":"火闇","wikiNumber":"801559"},
							{"id":"501","eventID":"90","event":"《沉眠之血》—焚焰的國度","name":"未來的女將軍_潔依瓦菈‧夏爾","gender":"女","element":"水光","wikiNumber":"801560"},
							{"id":"502","eventID":"90","event":"《沉眠之血》—焚焰的國度","name":"熾熱的槍尖_艾梅爾","gender":"女","element":"火火","wikiNumber":"801561"},
							{"id":"503","eventID":"90","event":"《沉眠之血》—焚焰的國度","name":"皇家惡魔獵人_巴夫坦","gender":"男","element":"水水","wikiNumber":"801562"},
							{"id":"504","eventID":"90","event":"《沉眠之血》—焚焰的國度","name":"未來的希望之光_納迦蕾特","gender":"女","element":"雷雷","wikiNumber":"801563"},
							{"id":"505","eventID":"90","event":"《沉眠之血》—焚焰的國度","name":"未來的末日景色_寶迪‧波羅斯","gender":"男","element":"雷光","wikiNumber":"801564"},
							{"id":"506","eventID":"91","event":"冰雪薔薇的黑影","name":"傳承之刃_佛蘭賽爾","gender":"男","element":"水水","wikiNumber":"801818"},
							{"id":"507","eventID":"91","event":"冰雪薔薇的黑影","name":"封護劍士_洛蕾塔","gender":"女","element":"火火","wikiNumber":"801819"},
							{"id":"508","eventID":"91","event":"冰雪薔薇的黑影","name":"太古祕法的守護者_拉索","gender":"男","element":"雷雷","wikiNumber":"801820"},
							{"id":"509","eventID":"91","event":"冰雪薔薇的黑影","name":"閃耀的新生力量_優依","gender":"女","element":"雷光","wikiNumber":"801821"},
							{"id":"510","eventID":"91","event":"冰雪薔薇的黑影","name":"幻境中的冰雪之噬_帕榭菈","gender":"女","element":"火水","wikiNumber":"801822"},
							{"id":"511","eventID":"91","event":"冰雪薔薇的黑影","name":"粉色美夢的編織者_奈婭","gender":"女","element":"水闇","wikiNumber":"801823"},
							{"id":"512","eventID":"92","event":"聖惡魔女子學院2","name":"燦爛！旋花邪神_露露貝爾","gender":"女","element":"水闇","wikiNumber":"8810"},
							{"id":"513","eventID":"92","event":"聖惡魔女子學院2","name":"死靈的BON舞_露露貝爾","gender":"女","element":"火火","wikiNumber":"8812"},
							{"id":"514","eventID":"92","event":"聖惡魔女子學院2","name":"不可觸碰的Bull_蜜亞‧雅卡達","gender":"女","element":"火火","wikiNumber":"8815"},
							{"id":"515","eventID":"92","event":"聖惡魔女子學院2","name":"蘊藏的野心_伊迪絲＆卡娜美","gender":"女","element":"火雷","wikiNumber":"8818"},
							{"id":"516","eventID":"92","event":"聖惡魔女子學院2","name":"向天使惡作劇_烏麗希拉‧法蕾","gender":"女","element":"水水","wikiNumber":"8821"},
							{"id":"517","eventID":"92","event":"聖惡魔女子學院2","name":"其鮮血如火炎_克魯斯‧德拉古","gender":"男","element":"雷雷","wikiNumber":"8824"},
							{"id":"518","eventID":"92","event":"聖惡魔女子學院2","name":"神聖的邪印家譜_伊萊恩‧英尼斯","gender":"女","element":"雷闇","wikiNumber":"8827"},
							{"id":"519","eventID":"93","event":"聖惡魔女子學院","name":"野丫頭邪神少女_露露貝爾","gender":"女","element":"火闇","wikiNumber":"8889"},
							{"id":"520","eventID":"93","event":"聖惡魔女子學院","name":"完全降臨！_邪神_露露貝爾","gender":"女","element":"火闇","wikiNumber":"8890"},
							{"id":"521","eventID":"93","event":"聖惡魔女子學院","name":"終末的純白音色_烏麗希拉‧法蕾","gender":"女","element":"水火","wikiNumber":"8891"},
							{"id":"522","eventID":"93","event":"聖惡魔女子學院","name":"哞～烈超魔牛_蜜亞‧雅卡達","gender":"女","element":"火火","wikiNumber":"8892"},
							{"id":"523","eventID":"93","event":"聖惡魔女子學院","name":"處刑台的美麗花朵_伊迪絲‧吉爾蒂","gender":"女","element":"水闇","wikiNumber":"8893"},
							{"id":"524","eventID":"93","event":"聖惡魔女子學院","name":"深血黃昏_克魯斯‧德拉古","gender":"男","element":"雷雷","wikiNumber":"8894"},
							{"id":"525","eventID":"93","event":"聖惡魔女子學院","name":"虹色的縱橫家_卡娜美‧巴巴羅薩","gender":"女","element":"雷水","wikiNumber":"8895"},
							{"id":"526","eventID":"94","event":"拉鍊裡的無盡黑霧","name":"無雙的西洋棋手_凱蘿","gender":"女","element":"水水","wikiNumber":"801237"},
							{"id":"527","eventID":"94","event":"拉鍊裡的無盡黑霧","name":"祈禱的聖女_露雪","gender":"女","element":"火水","wikiNumber":"801238"},
							{"id":"528","eventID":"94","event":"拉鍊裡的無盡黑霧","name":"擁有最強大雙親的少女_緹娜","gender":"女","element":"水水","wikiNumber":"801239"},
							{"id":"529","eventID":"94","event":"拉鍊裡的無盡黑霧","name":"身穿華服的忍者_洋梨","gender":"女","element":"水闇","wikiNumber":"801240"},
							{"id":"530","eventID":"94","event":"拉鍊裡的無盡黑霧","name":"斬斷一切連結_梅亞","gender":"女","element":"雷闇","wikiNumber":"801241"},
							{"id":"531","eventID":"94","event":"拉鍊裡的無盡黑霧","name":"旅行中的天才演奏者_泰瑞莎","gender":"女","element":"雷雷","wikiNumber":"801242"},
							{"id":"532","eventID":"94","event":"拉鍊裡的無盡黑霧","name":"受到明月照耀的少女_月觀","gender":"女","element":"雷雷","wikiNumber":"801243"},
							{"id":"533","eventID":"94","event":"拉鍊裡的無盡黑霧","name":"從龍之國來的公主_艾克賽莉亞","gender":"女","element":"水光","wikiNumber":"801244"},
							{"id":"534","eventID":"94","event":"拉鍊裡的無盡黑霧","name":"在夏日隨著海浪飄飄_諾亞","gender":"女","element":"水水","wikiNumber":"801246"},
							{"id":"535","eventID":"94","event":"拉鍊裡的無盡黑霧","name":"想要成為傳說_利亞姆","gender":"男","element":"火火","wikiNumber":"801247"},
							{"id":"536","eventID":"94","event":"拉鍊裡的無盡黑霧","name":"就算軍人也有休假日_拉裴德","gender":"男","element":"雷雷","wikiNumber":"801248"},
							{"id":"537","eventID":"94","event":"拉鍊裡的無盡黑霧","name":"絕不停下腳步的副理_沃爾特","gender":"男","element":"雷雷","wikiNumber":"801249"},
							{"id":"538","eventID":"94","event":"拉鍊裡的無盡黑霧","name":"戀愛大師不擅長告白_傑羅奇斯","gender":"男","element":"火火","wikiNumber":"801250"},
							{"id":"539","eventID":"94","event":"拉鍊裡的無盡黑霧","name":"任性妄為的狼魂_猶大","gender":"男","element":"雷闇","wikiNumber":"801251"},
							{"id":"540","eventID":"94","event":"拉鍊裡的無盡黑霧","name":"獲得魔龍認同的情感_約書亞","gender":"男","element":"火闇","wikiNumber":"801252"},
							{"id":"541","eventID":"94","event":"拉鍊裡的無盡黑霧","name":"跟混沌戰鬥的退魔士_毒牙","gender":"男","element":"雷闇","wikiNumber":"801253"},
							{"id":"542","eventID":"94","event":"拉鍊裡的無盡黑霧","name":"冷靜沈著的潛艇艦長_尼莫","gender":"男","element":"雷雷","wikiNumber":"801254"},
							{"id":"543","eventID":"95","event":"《聖誕情侶決定戰》","name":"星和月的輝映_瞬&陽","gender":"男","element":"火水","wikiNumber":"801729"},
							{"id":"544","eventID":"95","event":"《聖誕情侶決定戰》","name":"夜間浪漫約會_艾爾多＆雅西兒","gender":"男女","element":"雷水","wikiNumber":"801730"},
							{"id":"545","eventID":"95","event":"《聖誕情侶決定戰》","name":"醇厚的戀愛口感_寶菈","gender":"女","element":"水水","wikiNumber":"801731"},
							{"id":"546","eventID":"95","event":"《聖誕情侶決定戰》","name":"今天只需小試身手_達坎尼亞","gender":"男","element":"火火","wikiNumber":"801732"},
							{"id":"547","eventID":"95","event":"《聖誕情侶決定戰》","name":"不愛工作的寒冰智賢_冬禹","gender":"女","element":"水闇","wikiNumber":"801734"},
							{"id":"548","eventID":"95","event":"《聖誕情侶決定戰》","name":"打歌專用服裝_蝴蝶","gender":"女","element":"雷雷","wikiNumber":"801735"},
							{"id":"549","eventID":"96","event":"魔轟三鐵傑 對 地獄三十六歌仙","name":"偏激護士_卡多琳‧G‧U","gender":"女","element":"火水","wikiNumber":"10610"},
							{"id":"550","eventID":"96","event":"魔轟三鐵傑 對 地獄三十六歌仙","name":"逆襲的【煉獄華】_里苑‧游","gender":"女","element":"水火","wikiNumber":"10611"},
							{"id":"551","eventID":"96","event":"魔轟三鐵傑 對 地獄三十六歌仙","name":"鬼道大宿_達姆薩‧伊那","gender":"男","element":"雷雷","wikiNumber":"10612"},
							{"id":"552","eventID":"96","event":"魔轟三鐵傑 對 地獄三十六歌仙","name":"浪跡天涯的戰女神_圖菈","gender":"女","element":"雷光","wikiNumber":"10613"},
							{"id":"553","eventID":"96","event":"魔轟三鐵傑 對 地獄三十六歌仙","name":"燒盡廢物的死神_玫芙","gender":"女","element":"火火","wikiNumber":"10614"},
							{"id":"554","eventID":"96","event":"魔轟三鐵傑 對 地獄三十六歌仙","name":"「攻陷城塞」的_路狄歐‧狄爾","gender":"男","element":"水水","wikiNumber":"10615"},
							{"id":"555","eventID":"97","event":"黑夜中的甜點大盜","name":"首屈一指的鬆餅師匠_巧琪","gender":"女","element":"火雷","wikiNumber":"800991"},
							{"id":"556","eventID":"97","event":"黑夜中的甜點大盜","name":"俏皮的甜點界新人_泰隆","gender":"男","element":"水雷","wikiNumber":"800992"},
							{"id":"557","eventID":"97","event":"黑夜中的甜點大盜","name":"追求極致甜點的魔法少女_帕西娜","gender":"女","element":"火闇","wikiNumber":"800993"},
							{"id":"558","eventID":"97","event":"黑夜中的甜點大盜","name":"席捲黑夜而來的騎士_薩伯爾‧哲","gender":"男","element":"雷闇","wikiNumber":"800994"},
							{"id":"559","eventID":"97","event":"黑夜中的甜點大盜","name":"無窮好奇心的東方魔女_賽特絲","gender":"女","element":"雷火","wikiNumber":"800995"},
							{"id":"560","eventID":"97","event":"黑夜中的甜點大盜","name":"穿梭靈界的異能偵探_朧莉","gender":"女","element":"水闇","wikiNumber":"800996"},
							{"id":"561","eventID":"97","event":"黑夜中的甜點大盜","name":"聰慧可愛的神秘男孩_寶迪","gender":"男","element":"雷光","wikiNumber":"800997"},
							{"id":"562","eventID":"97","event":"黑夜中的甜點大盜","name":"最喜歡惡作劇的女孩_格拉娜","gender":"女","element":"火水","wikiNumber":"800998"},
							{"id":"563","eventID":"97","event":"黑夜中的甜點大盜","name":"最適合萬聖節的料理人_艾絲塔","gender":"女","element":"雷水","wikiNumber":"800999"},
							{"id":"564","eventID":"97","event":"黑夜中的甜點大盜","name":"操弄冰火的狐狸兄妹_真冬＆霧子","gender":"男女","element":"水火","wikiNumber":"801000"},
							{"id":"565","eventID":"97","event":"黑夜中的甜點大盜","name":"擄獲人心的豔光_賽特絲","gender":"女","element":"雷火","wikiNumber":"801724"},
							{"id":"566","eventID":"97","event":"黑夜中的甜點大盜","name":"天分優異的甜點師_帕西娜","gender":"女","element":"火闇","wikiNumber":"801725"},
							{"id":"567","eventID":"97","event":"黑夜中的甜點大盜","name":"魔女一族的資格者_雪恩‧莎朵莉","gender":"女","element":"水闇","wikiNumber":"801726"},
							{"id":"568","eventID":"97","event":"黑夜中的甜點大盜","name":"第一名的甜點師傅_泰隆","gender":"男","element":"水雷","wikiNumber":"801727"},
							{"id":"569","eventID":"97","event":"黑夜中的甜點大盜","name":"收集各地故事的旅人_艾斌","gender":"男","element":"雷雷","wikiNumber":"801728"},
							{"id":"570","eventID":"98","event":"武鬥之巔‧寒冰嶺上的召集令","name":"青苑綴丹_琉璃妘","gender":"女","element":"雷雷","wikiNumber":"801550"},
							{"id":"571","eventID":"98","event":"武鬥之巔‧寒冰嶺上的召集令","name":"囚禁之嫁_洛蕾塔","gender":"女","element":"水水","wikiNumber":"801551"},
							{"id":"572","eventID":"98","event":"武鬥之巔‧寒冰嶺上的召集令","name":"教堂之劍_佛蘭塞爾","gender":"男","element":"火火","wikiNumber":"801552"},
							{"id":"573","eventID":"98","event":"武鬥之巔‧寒冰嶺上的召集令","name":"星與月之雙子神_艾希&艾拉","gender":"女","element":"水水","wikiNumber":"801553"},
							{"id":"574","eventID":"98","event":"武鬥之巔‧寒冰嶺上的召集令","name":"自殺教練_瑪嘉雷特","gender":"女","element":"雷水","wikiNumber":"801554"},
							{"id":"575","eventID":"98","event":"武鬥之巔‧寒冰嶺上的召集令","name":"理智的兄長_諾爾兄弟","gender":"男","element":"雷水","wikiNumber":"801556"},
							{"id":"576","eventID":"98","event":"武鬥之巔‧寒冰嶺上的召集令","name":"赤炎魔法使_絲坦妮","gender":"女","element":"火火","wikiNumber":"801557"},
							{"id":"577","eventID":"98","event":"武鬥之巔‧寒冰嶺上的召集令","name":"龍族的薔薇公主_蘿伊娜","gender":"女","element":"火火","wikiNumber":"801558"},
							{"id":"578","eventID":"99","event":"心龍天翔 Rising Dragon","name":"炎之牽絆_阿德萊德‧席拉","gender":"女","element":"火火","wikiNumber":"10649"},
							{"id":"579","eventID":"99","event":"心龍天翔 Rising Dragon","name":"心龍天翔_阿德萊德‧席拉","gender":"女","element":"火火","wikiNumber":"10650"},
							{"id":"580","eventID":"99","event":"心龍天翔 Rising Dragon","name":"繼承龍族驕傲者_蜜涅娃‧克勞德","gender":"女","element":"雷光","wikiNumber":"10651"},
							{"id":"581","eventID":"99","event":"心龍天翔 Rising Dragon","name":"黎明之皇龍魔_蜜涅娃‧克勞德","gender":"女","element":"雷光","wikiNumber":"10652"},
							{"id":"582","eventID":"99","event":"心龍天翔 Rising Dragon","name":"誓約之翼_莉緹卡‧帕絲","gender":"女","element":"水水","wikiNumber":"10653"},
							{"id":"583","eventID":"99","event":"心龍天翔 Rising Dragon","name":"逆擊的屠龍者_伊克爾‧羅特列克","gender":"男","element":"水水","wikiNumber":"10654"},
							{"id":"584","eventID":"99","event":"心龍天翔 Rising Dragon","name":"深謀遠慮之人_阿瑪雅","gender":"女","element":"雷雷","wikiNumber":"10655"},
							{"id":"585","eventID":"100","event":"來自異界的天使","name":"天界的嚮導_羽翼天使‧芙蘭&卡蒂雅","gender":"女","element":"雷光","wikiNumber":"800971"},
							{"id":"586","eventID":"100","event":"來自異界的天使","name":"聖耀流光_神翼天使‧惠","gender":"女","element":"水光","wikiNumber":"800972"},
							{"id":"587","eventID":"100","event":"來自異界的天使","name":"滅神無道_戮翼天使‧菲爾","gender":"男","element":"雷闇","wikiNumber":"800973"},
							{"id":"588","eventID":"100","event":"來自異界的天使","name":"無盡的暴食_煌翼天使‧鵑&洛茵","gender":"女","element":"雷火","wikiNumber":"800974"},
							{"id":"589","eventID":"100","event":"來自異界的天使","name":"奇蹟的鈴裝_熾翼天使‧湊","gender":"女","element":"火雷","wikiNumber":"800975"},
							{"id":"590","eventID":"100","event":"來自異界的天使","name":"禁忌的戀情_殘翼天使‧瞬&陽","gender":"男","element":"水雷","wikiNumber":"800976"},
							{"id":"591","eventID":"100","event":"來自異界的天使","name":"流星的雙壁_煉翼天使‧星娜&星羅","gender":"女","element":"火水","wikiNumber":"800977"},
							{"id":"592","eventID":"100","event":"來自異界的天使","name":"愛的特效藥_白翼天使‧紬","gender":"女","element":"水火","wikiNumber":"800978"},
							{"id":"593","eventID":"100","event":"來自異界的天使","name":"薔薇綻放的花音_虹翼天使‧歌莉亞","gender":"女","element":"火光","wikiNumber":"800979"},
							{"id":"594","eventID":"100","event":"來自異界的天使","name":"狂歡的水舞姬_魔翼天使‧珂珂","gender":"女","element":"水闇","wikiNumber":"800980"},
							{"id":"595","eventID":"101","event":"追憶的閃耀光輝","name":"忘卻之莽撞少年_亞迪‧圖因","gender":"男","element":"雷雷","wikiNumber":"10604"},
							{"id":"596","eventID":"101","event":"追憶的閃耀光輝","name":"追憶與恆久之巫女_梅茉莉亞‧里賽","gender":"女","element":"雷光","wikiNumber":"10605"},
							{"id":"597","eventID":"101","event":"追憶的閃耀光輝","name":"遺忘之占卜魔導士_媞希卡‧普克","gender":"女","element":"火火","wikiNumber":"10606"},
							{"id":"598","eventID":"101","event":"追憶的閃耀光輝","name":"忘卻之肉體魔導士_賽德‧納修","gender":"男","element":"水雷","wikiNumber":"10607"},
							{"id":"599","eventID":"101","event":"追憶的閃耀光輝","name":"越過追憶向前行_愛","gender":"女","element":"火雷","wikiNumber":"10608"},
							{"id":"600","eventID":"101","event":"追憶的閃耀光輝","name":"持續尋找憶中之物_愛","gender":"女","element":"水雷","wikiNumber":"10609"},
							{"id":"601","eventID":"102","event":"被封印的舞台劇目","name":"龍族的弦樂進行曲_卓麗黛爾","gender":"女","element":"火水","wikiNumber":"801372"},
							{"id":"602","eventID":"102","event":"被封印的舞台劇目","name":"引聚生機的天籟之音_緹茵","gender":"女","element":"雷火","wikiNumber":"801373"},
							{"id":"603","eventID":"102","event":"被封印的舞台劇目","name":"珠玉鳴響的諧和音_克蕾雅","gender":"女","element":"水雷","wikiNumber":"801374"},
							{"id":"604","eventID":"102","event":"被封印的舞台劇目","name":"明日的首席主唱_菲莉絲汀","gender":"女","element":"雷光","wikiNumber":"801375"},
							{"id":"605","eventID":"102","event":"被封印的舞台劇目","name":"在舞台上萬眾矚目_隆美爾","gender":"男","element":"火闇","wikiNumber":"801376"},
							{"id":"606","eventID":"102","event":"被封印的舞台劇目","name":"憑欄芳華冠全場_瑟芬妮","gender":"女","element":"雷闇","wikiNumber":"801377"},
							{"id":"607","eventID":"102","event":"被封印的舞台劇目","name":"冰上的芭蕾舞者_艾絲貝拉","gender":"女","element":"水光","wikiNumber":"801378"},
							{"id":"608","eventID":"102","event":"被封印的舞台劇目","name":"火光中跳舞的靈魂_羅姆菲","gender":"女","element":"火水","wikiNumber":"801379"},
							{"id":"609","eventID":"103","event":"AbyssCode06 劫末之獸","name":"AbCd-Ιι：《萌生劫初的英雄》","gender":"女","element":"雷光","wikiNumber":"11199"},
							{"id":"610","eventID":"103","event":"AbyssCode06 劫末之獸","name":"AbCd-Ιι：《蘊藏四劫的英雄》","gender":"女","element":"雷光","wikiNumber":"8164"},
							{"id":"611","eventID":"104","event":"巧克力森林","name":"無盡愛情_露嘉‧華倫泰","gender":"女","element":"火水","wikiNumber":"7923"},
							{"id":"612","eventID":"104","event":"巧克力森林","name":"真實愛情的傳道者_帕妮拉‧愛莫","gender":"女","element":"雷雷","wikiNumber":"7924"},
							{"id":"613","eventID":"104","event":"巧克力森林","name":"滾燙熱情_露嘉‧華倫泰","gender":"女","element":"火火","wikiNumber":"2492"},
							{"id":"614","eventID":"105","event":"Demon's Blader","name":"真理與和平的永劫_奧拉‧阿瑪達","gender":"女","element":"水水","wikiNumber":"11191"},
							{"id":"615","eventID":"105","event":"Demon's Blader","name":"溫柔眾神的冷酷_奧拉‧阿瑪達","gender":"女","element":"水水","wikiNumber":"11187"},
							{"id":"616","eventID":"106","event":"Heretic Blader","name":"淨化陰陽的輪光_久遠‧璃夢生","gender":"女","element":"雷雷","wikiNumber":"11193"},
							{"id":"617","eventID":"106","event":"Heretic Blader","name":"昇天輪迴的真狐_久遠‧璃夢生","gender":"女","element":"雷雷","wikiNumber":"11189"},
							{"id":"618","eventID":"107","event":"Tempest Blader","name":"追查凶惡的蒼穹_亞敏‧史密特","gender":"男","element":"水水","wikiNumber":"11190"},
							{"id":"619","eventID":"107","event":"Tempest Blader","name":"蒼天的奔流_亞敏‧史密特","gender":"男","element":"水水","wikiNumber":"11186"},
							{"id":"620","eventID":"108","event":"Divine Blader","name":"在黑闇中微笑的邪神_露露貝爾","gender":"女","element":"火火","wikiNumber":"11192"},
							{"id":"621","eventID":"108","event":"Divine Blader","name":"邪神惹人憐愛的天真_露露貝爾","gender":"女","element":"火火","wikiNumber":"11188"},
							{"id":"622","eventID":"109","event":"庫洛姆‧麥格納 零","name":"魔導學園創立者_登凱爾‧亞當斯","gender":"男","element":"水水","wikiNumber":"10598"},
							{"id":"623","eventID":"109","event":"庫洛姆‧麥格納 零","name":"優雅美麗的管理者_雅姆貝爾‧凱","gender":"女","element":"火雷","wikiNumber":"10599"},
							{"id":"624","eventID":"109","event":"庫洛姆‧麥格納 零","name":"蒼藍的鬥霸者_響‧麥斯格雷夫","gender":"男","element":"水水","wikiNumber":"10600"},
							{"id":"625","eventID":"109","event":"庫洛姆‧麥格納 零","name":"清冽的焰刀_小百合‧懷亞特","gender":"女","element":"火火","wikiNumber":"10601"},
							{"id":"626","eventID":"109","event":"庫洛姆‧麥格納 零","name":"聖境的敬禱者_雅梅莉‧貝涅特","gender":"女","element":"雷雷","wikiNumber":"10602"},
							{"id":"627","eventID":"109","event":"庫洛姆‧麥格納 零","name":"不可知的密探_艾瑪‧尤因古","gender":"女","element":"雷雷","wikiNumber":"10603"},
							{"id":"628","eventID":"110","event":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","name":"誓約的凜炎_凜華‧懷亞特","gender":"女","element":"火水","wikiNumber":"11616"},
							{"id":"629","eventID":"110","event":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","name":"被強烈的情感染上色彩_愛席亞＆妮可拉","gender":"女","element":"水雷","wikiNumber":"11617"},
							{"id":"630","eventID":"110","event":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","name":"機獸的咆哮_雪莉＆沃爾夫","gender":"男女","element":"雷火","wikiNumber":"11618"},
							{"id":"631","eventID":"110","event":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","name":"雙刃的潛行者_艾瑪‧尤因古","gender":"女","element":"水水","wikiNumber":"11619"},
							{"id":"632","eventID":"110","event":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","name":"超絕夏天比基尼_MIU☆MIU","gender":"女","element":"雷雷","wikiNumber":"11620"},
							{"id":"633","eventID":"110","event":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","name":"總是共鬥戰線_艾密莉亞＆楓","gender":"女","element":"火雷","wikiNumber":"11621"},
							{"id":"634","eventID":"110","event":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","name":"只屬於我的笑容_一樹‧麥斯格雷夫","gender":"男","element":"水水","wikiNumber":"11627"},
							{"id":"635","eventID":"110","event":"庫洛姆‧麥格納Ⅴ 鋼鐵的最終戰鬥","name":"凝視著我的眼眸_愛席亞‧貝涅特","gender":"女","element":"水水","wikiNumber":"11628"},
							{"id":"636","eventID":"111","event":"庫洛姆‧麥格納Ⅳ單戀☆狂想曲","name":"戀愛☆百萬噸_艾密莉亞‧轟","gender":"女","element":"火火","wikiNumber":"6994"},
							{"id":"637","eventID":"111","event":"庫洛姆‧麥格納Ⅳ單戀☆狂想曲","name":"虹色的戀愛_愛席亞‧貝涅特","gender":"女","element":"水火","wikiNumber":"6995"},
							{"id":"638","eventID":"111","event":"庫洛姆‧麥格納Ⅳ單戀☆狂想曲","name":"人稱溫柔野獸_沃爾夫‧羅伊","gender":"男","element":"火雷","wikiNumber":"6996"},
							{"id":"639","eventID":"111","event":"庫洛姆‧麥格納Ⅳ單戀☆狂想曲","name":"愛與甘美的砲火_雪莉‧柯爾特","gender":"女","element":"雷雷","wikiNumber":"6997"},
							{"id":"640","eventID":"111","event":"庫洛姆‧麥格納Ⅳ單戀☆狂想曲","name":"迷走的夢想戀心_妮可拉‧摩根","gender":"女","element":"雷水","wikiNumber":"6998"},
							{"id":"641","eventID":"111","event":"庫洛姆‧麥格納Ⅳ單戀☆狂想曲","name":"焦慮的少女情懷_凜華‧懷亞特","gender":"女","element":"火水","wikiNumber":"6999"},
							{"id":"642","eventID":"112","event":"庫洛姆‧麥格納Ⅲ臨海學校","name":"夏日裡的涼風_凜華‧懷亞特","gender":"女","element":"火火","wikiNumber":"6989"},
							{"id":"643","eventID":"112","event":"庫洛姆‧麥格納Ⅲ臨海學校","name":"盛夏的灼熱視線_妮可拉‧摩根","gender":"女","element":"雷雷","wikiNumber":"6991"},
							{"id":"644","eventID":"112","event":"庫洛姆‧麥格納Ⅲ臨海學校","name":"今天也是大豐收！_雪莉‧柯爾特","gender":"女","element":"雷雷","wikiNumber":"6992"},
							{"id":"645","eventID":"112","event":"庫洛姆‧麥格納Ⅲ臨海學校","name":"與大海之獸嬉戲_沃爾夫‧羅伊","gender":"男","element":"火水","wikiNumber":"6993"},
							{"id":"646","eventID":"113","event":"庫洛姆‧麥格納Ⅱ學園祭","name":"終極「妹妹」_艾密莉亞‧轟","gender":"女","element":"火火","wikiNumber":"10568"},
							{"id":"647","eventID":"113","event":"庫洛姆‧麥格納Ⅱ學園祭","name":"學園偶像傳說_MIU☆MIU","gender":"女","element":"雷雷","wikiNumber":"10569"},
							{"id":"648","eventID":"113","event":"庫洛姆‧麥格納Ⅱ學園祭","name":"可愛盛放_愛席亞‧貝涅特","gender":"女","element":"水水","wikiNumber":"10570"},
							{"id":"649","eventID":"113","event":"庫洛姆‧麥格納Ⅱ學園祭","name":"貨真價實的鐵壁_楓‧神宮寺","gender":"女","element":"雷水","wikiNumber":"10571"},
							{"id":"650","eventID":"114","event":"庫洛姆‧麥格納Ⅰ魔導學園","name":"大義的灼刃_凜華‧懷亞特","gender":"女","element":"火火","wikiNumber":"10564"},
							{"id":"651","eventID":"114","event":"庫洛姆‧麥格納Ⅰ魔導學園","name":"轟雷的機弓_妮可拉‧摩根","gender":"女","element":"雷雷","wikiNumber":"10565"},
							{"id":"652","eventID":"114","event":"庫洛姆‧麥格納Ⅰ魔導學園","name":"猛獸的統領者_沃爾夫‧羅伊","gender":"男","element":"火火","wikiNumber":"10566"},
							{"id":"653","eventID":"114","event":"庫洛姆‧麥格納Ⅰ魔導學園","name":"閃雷的槍擊_雪莉‧柯爾特","gender":"女","element":"雷火","wikiNumber":"10567"},
							{"id":"654","eventID":"115","event":"AbyssCode08 落入星雲的淚珠","name":"AbCd-Ππ：《無止境的旅程_亞絲緹拉》","gender":"女","element":"雷雷","wikiNumber":"11503"},
							{"id":"655","eventID":"116","event":"AbyssCode05 冥世的天蓋","name":"AbCd-Λλ：《甜蜜腐朽殆盡黑闇_妮蕾努》","gender":"女","element":"火闇","wikiNumber":"7132"},
							{"id":"656","eventID":"116","event":"AbyssCode05 冥世的天蓋","name":"AbCd-Λ：《冥默的白鴉_妮蕾努》","gender":"女","element":"火闇","wikiNumber":"11198"},
							{"id":"657","eventID":"117","event":"AbyssCode04 燃燒殆盡的陽光","name":"AbCd-Ψψ：《絢爛的神舞_妮蒂雅》","gender":"女","element":"水光","wikiNumber":"7131"},
							{"id":"658","eventID":"117","event":"AbyssCode04 燃燒殆盡的陽光","name":"AbCd-Ψ：《照亮黑闇的舞蹈_妮蒂雅》","gender":"女","element":"水光","wikiNumber":"11197"},
							{"id":"659","eventID":"118","event":"AbyssCode03 生而墮於虛無","name":"AbCd-Ωω：《消滅自我的存在_該隱》","gender":"男","element":"雷闇","wikiNumber":"7130"},
							{"id":"660","eventID":"118","event":"AbyssCode03 生而墮於虛無","name":"AbCd-Ω：《天上蠢動的憤怒_該隱》","gender":"男","element":"雷闇","wikiNumber":"11196"},
							{"id":"661","eventID":"119","event":"AbyssCode02 盲目的調和","name":"AbCd-Μμ：《拒絕輝煌_特露米德》","gender":"女","element":"火闇","wikiNumber":"7129"},
							{"id":"662","eventID":"119","event":"AbyssCode02 盲目的調和","name":"AbCd-M：《孤獨的囚人_特露米德》","gender":"女","element":"火闇","wikiNumber":"11195"},
							{"id":"663","eventID":"120","event":"AbyssCode01 黑殼之王","name":"AbCd-Ζζ：《從不沸騰的血潮_卡勒姆》","gender":"男","element":"水光","wikiNumber":"7128"},
							{"id":"664","eventID":"120","event":"AbyssCode01 黑殼之王","name":"AbCd-Ζ：《寂靜的天際_卡勒姆》","gender":"男","element":"水光","wikiNumber":"11194"},
							{"id":"665","eventID":"121","event":"金貓盃繁中人氣王 前半","name":"可怕玩具箱 優奈娃","gender":"女","element":"雷闇","wikiNumber":"801881"},
							{"id":"666","eventID":"121","event":"金貓盃繁中人氣王 前半","name":"為了慶祝，乾杯！ 嚎斯泰","gender":"男","element":"雷光","wikiNumber":"801879"},
							{"id":"667","eventID":"121","event":"金貓盃繁中人氣王 前半","name":"此心只許你一人 莎朵莉‧雪恩","gender":"女","element":"水火","wikiNumber":"801877"},
							{"id":"668","eventID":"121","event":"金貓盃繁中人氣王 前半","name":"牧師服也沒違和感 艾斌","gender":"男","element":"火火","wikiNumber":"801875"},
							{"id":"669","eventID":"121","event":"金貓盃繁中人氣王 前半","name":"斜槓甜點師 寶菈","gender":"女","element":"水水","wikiNumber":"801873"},
							{"id":"670","eventID":"121","event":"金貓盃繁中人氣王 前半","name":"想要再次歌唱 蝴蝶","gender":"女","element":"火水","wikiNumber":"801871"},
							{"id":"671","eventID":"122","event":"金貓盃繁中人氣王 後半","name":"過去的森林之主 以諾爾","gender":"男","element":"水闇","wikiNumber":"801895"},
							{"id":"672","eventID":"122","event":"金貓盃繁中人氣王 後半","name":"烏鴉與女神之姿 珂珂","gender":"女","element":"水光","wikiNumber":"801893"},
							{"id":"673","eventID":"122","event":"金貓盃繁中人氣王 後半","name":"吸引麻煩事的體質 奧菲莉亞","gender":"女","element":"火闇","wikiNumber":"801891"},
							{"id":"674","eventID":"122","event":"金貓盃繁中人氣王 後半","name":"墜入凡塵的雙星天使 瞬&陽","gender":"男","element":"火雷","wikiNumber":"801889"},
							{"id":"675","eventID":"122","event":"金貓盃繁中人氣王 後半","name":"夜願與惡意之棘 貝蘿莫蕊","gender":"女","element":"雷闇","wikiNumber":"801887"},
							{"id":"676","eventID":"122","event":"金貓盃繁中人氣王 後半","name":"維多利亞藍色幻想 蜜多莉","gender":"女","element":"雷雷","wikiNumber":"801885"},
							{"id":"677","eventID":"123","event":"神明大人 ～土精靈與黑貓主人～","name":"吃飯神_卡奴耶‧德‧亞克","gender":"女","element":"火火","wikiNumber":"11408"},
							{"id":"678","eventID":"123","event":"神明大人 ～土精靈與黑貓主人～","name":"危險的魔法少女_梨莎‧洛特蘭達","gender":"女","element":"水水","wikiNumber":"11411"},
							{"id":"679","eventID":"123","event":"神明大人 ～土精靈與黑貓主人～","name":"含糊女孩_葛蕾絲","gender":"女","element":"雷雷","wikiNumber":"11414"},
							{"id":"680","eventID":"123","event":"神明大人 ～土精靈與黑貓主人～","name":"魔法與魔劍_琉迪格‧希古拉","gender":"男","element":"水闇","wikiNumber":"11417"},
							{"id":"681","eventID":"123","event":"神明大人 ～土精靈與黑貓主人～","name":"生命少女_希維爾‧洛伊絲","gender":"女","element":"火火","wikiNumber":"11420"},
							{"id":"682","eventID":"123","event":"神明大人 ～土精靈與黑貓主人～","name":"超土級_可露可可‧可露斯斯","gender":"女","element":"雷火","wikiNumber":"11423"},
							{"id":"683","eventID":"124","event":"神都匹卡雷斯克 黑貓的魔術師","name":"撒謊的詐術師_凱涅斯‧哈瓦","gender":"男","element":"雷水","wikiNumber":"11665"},
							{"id":"684","eventID":"124","event":"神都匹卡雷斯克 黑貓的魔術師","name":"盜想白貴族_迦斯帕‧阿爾尼克","gender":"男","element":"水光","wikiNumber":"11668"},
							{"id":"685","eventID":"124","event":"神都匹卡雷斯克 黑貓的魔術師","name":"武俠花義賊_桃花","gender":"女","element":"火火","wikiNumber":"11671"},
							{"id":"686","eventID":"124","event":"神都匹卡雷斯克 黑貓的魔術師","name":"聳立的腦細胞_今久留主好介","gender":"男","element":"火火","wikiNumber":"11674"},
							{"id":"687","eventID":"124","event":"神都匹卡雷斯克 黑貓的魔術師","name":"夜光少女_莉莉亞‧夜洛斯奇","gender":"女","element":"水火","wikiNumber":"11677"},
							{"id":"688","eventID":"124","event":"神都匹卡雷斯克 黑貓的魔術師","name":"三國第一的小偷_根津千優","gender":"女","element":"雷闇","wikiNumber":"11680"},
							{"id":"689","eventID":"125","event":"年之運行","name":"煙花燦爛的一年之始_初日","gender":"女","element":"火闇","wikiNumber":"801857"},
							{"id":"690","eventID":"125","event":"年之運行","name":"燭光搖曳平安夜_伊弗","gender":"男","element":"雷雷","wikiNumber":"801859"},
							{"id":"691","eventID":"125","event":"年之運行","name":"石斛蘭與父親節_艾伯特","gender":"男","element":"水光","wikiNumber":"801861"},
							{"id":"692","eventID":"125","event":"年之運行","name":"降雪的白色聖誕_柯里絲緹","gender":"女","element":"火雷","wikiNumber":"801863"},
							{"id":"693","eventID":"125","event":"年之運行","name":"鬼怪遊行萬聖夜_巴姆布蕾克","gender":"女","element":"雷雷","wikiNumber":"801865"},
							{"id":"694","eventID":"125","event":"年之運行","name":"愛意滿滿情人節_梅莉莎","gender":"女","element":"水闇","wikiNumber":"801867"},
							{"id":"695","eventID":"126","event":"風暴卡里昂──風暴中心的少女","name":"破陣之舞_菲比思","gender":"女","element":"雷闇","wikiNumber":"801901"},
							{"id":"696","eventID":"126","event":"風暴卡里昂──風暴中心的少女","name":"不動如山_布頓","gender":"男","element":"水水","wikiNumber":"801903"},
							{"id":"697","eventID":"126","event":"風暴卡里昂──風暴中心的少女","name":"叫我姐姐_達達米絲","gender":"女","element":"火光","wikiNumber":"801905"},
							{"id":"698","eventID":"126","event":"風暴卡里昂──風暴中心的少女","name":"霜血震懾_布馬托","gender":"男","element":"水闇","wikiNumber":"801907"},
							{"id":"699","eventID":"126","event":"風暴卡里昂──風暴中心的少女","name":"以米拉與法蒂亞之名_結子","gender":"女","element":"水光","wikiNumber":"801909"},
							{"id":"700","eventID":"126","event":"風暴卡里昂──風暴中心的少女","name":"耐心不是美德_妮莉芭安","gender":"女","element":"火光","wikiNumber":"801911"},
							{"id":"701","eventID":"127","event":"魔幻金夏趴2020 序曲","name":"冷酷護士 C卡多琳‧G‧U","gender":"女","element":"火水","wikiNumber":"11788"},
							{"id":"702","eventID":"127","event":"魔幻金夏趴2020 序曲","name":"殺戮印記 艾盧多貝里克‧哥德","gender":"男","element":"火闇","wikiNumber":"11791"},
							{"id":"703","eventID":"127","event":"魔幻金夏趴2020 序曲","name":"劍聖 阿斯塔‧拉德","gender":"男","element":"雷雷","wikiNumber":"11789"},
							{"id":"704","eventID":"127","event":"魔幻金夏趴2020 序曲","name":"星予眸，光予劍 拉米斯費蕾絲","gender":"女","element":"雷火","wikiNumber":"11792"},
							{"id":"705","eventID":"127","event":"魔幻金夏趴2020 序曲","name":"定罪騎士團長 流昂‧特拉姆","gender":"男","element":"水光","wikiNumber":"11793"},
							{"id":"706","eventID":"127","event":"魔幻金夏趴2020 序曲","name":"詠星聖女 克蕾緹雅‧布萊葉","gender":"女","element":"水光","wikiNumber":"11790"}

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
				"memberList":[],
				"urlId":"",	
				// "testCss":["aaa","bbb"],

               },
			computed:{
				eventPicUrl:function(){
					return "img/event/E" + this.eventNumber + ".png";
				},
				
				eventFairy:function(){//顯示特定活動編號的圖鑑精靈
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
				selectFairy:function(){//呈現篩選出的精靈結果
					var name = this.nameSelect;
					var gender = this.genderSelect;
					var element = this.elementSelect;
					
					if(name == "" && gender == "" && element ==""){return;}
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
					// console.log("dragover");
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
							//有重複的圖片 或是 拖曳的是空白資料時
						});
					return index == -1 ?true :false;	
				},
				picDrop:function(e){//有元素拖曳到這張圖片觸發的事件
					e.preventDefault();
					
				    var filelist = e.dataTransfer.files;
				    var data = JSON.parse(e.dataTransfer.getData("data-dataInfo"))
					
					if(this.picRepeated(data.wikiNumber)){
						this.lotteryFairy.push(data);
						this.saveToLocal();
					}
					else{
						// console.log("重複了")
						}
					
					
				    
				},
				openFairyWiki:function(e){//開啟WIKI資料小視窗
					var data = JSON.parse(e.target.getAttribute("data-dataInfo"));
					var url = "https://nekowiztw.github.io/cardFinder/#/card/" 
								+ data.wikiNumber;
					window.open(url, "nekoWizWebsite", 
					"toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=500,width=400,height=500");
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
						this.saveToLocal();
						
						return;
				},
				eventPicUrlList:function(number){
					return "img/event/E" + number + ".png";
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
					if(this.selectFairy == undefined){
						console.log("沒東西");
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
					this.lotteryFairy = this.lotteryFairy.concat(arr);
					this.saveToLocal();
				},
				saveData:function(){//儲存至雲端
					if(this.urlId == ""){//網址沒有ID時新增
                        fireRoot.child("memberData").push(this.lotteryFairy);
                        fireRoot.child("memberData").limitToLast(1).once("child_added",function(s){
                            // console.log("新增的這筆資料",",",s.key);
                            key = s.key;
                        })
                        .then(function(){
                            // console.log("AAA")
                            fireRoot.child("memberList").push(key).then(function(){
                            window.location.href = "index.html?id=" + key;//重新轉址或重載此頁面
                        })
                            // console.log("BBB")
                            
                        })
                        
                        

                    }else{//否則更新資料
                        var obj = {};
                        obj[this.urlId] = this.lotteryFairy;
                        // console.log(obj);
                        fireRoot.child("memberData")
                                .update(obj)
                                .then(function(){
                                    window.location.href = "index.html?id=" + indexData.urlId;//重新轉址或重載此頁面
                                });
                    }
				},
				saveToLocal:function(){//存到用戶端資料
				    // console.log(this.lotteryFairy);
					var data = JSON.stringify(this.lotteryFairy)
					localStorage.setItem("lotteryFairy",data);
					
				},
				deleteLocal:function(){//清空用戶端資料
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
					if(indexData.memberList.indexOf(urlId) == -1 || urlId == "null"){//如果是無效ID或沒有ID
						
						if(localStorage.getItem("lotteryFairy")){//如果有客戶端資料  就寫入
							var jsonParseData = JSON.parse(localStorage.getItem("lotteryFairy"));
							// console.log("客戶端",jsonParseData);
							indexData.$set(indexData,"lotteryFairy", jsonParseData);
						}
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