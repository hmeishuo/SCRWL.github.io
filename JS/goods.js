let infoIndex = 0;
const infoTexts = document.querySelectorAll('.info-text');

function rotateInfo() {
    // 移除當前 active
    infoTexts[infoIndex].classList.remove('active');
    
    // 計算下一組索引
    infoIndex = (infoIndex + 1) % infoTexts.length;
    
    // 加上新 active
    infoTexts[infoIndex].classList.add('active');
}

// 每 3 秒執行一次切換
setInterval(rotateInfo, 3000);


// 1. 商品資料庫 (這就像你的 Excel 表格)
const database = {
    "n01": {
        name: "Thrasher Checkered Oval - White T恤",
        price: 1000,
        desc:"Thrasher Magazine - 被譽為滑板聖經，創立於1981年美國舊金山，為全球滑板文化的權威媒體， 報導內容涵蓋了滑板趨勢、選手專訪、精彩攝影作品，以及與滑板文化息息相關的獨立音樂與街頭元素等，Thrasher 不僅在滑板界擁有深遠影響力，其品牌也成功橫跨時尚圈及流行產業。",
        images:["image/new/1.jpg"] ,
    },
    "n02": {
        name: "Hydroponic x 史努比 Peanuts House Green 8.125\" 整組",
        price: 3500,
        desc:"來自於巴塞隆納-Hydroponic (海力龐克)，帶有強烈人文藝術氣息和 南歐熱情的迷人魅力。",
        images: ["image/new/2.jpg"],
    },
    "n03": {
        name: "Hydroponic x 史努比 Peanuts Skate Yellow 8.0\" 整組",
        price: 3500,
        desc:"來自於巴塞隆納-Hydroponic (海力龐克)，帶有強烈人文藝術氣息和 南歐熱情的迷人魅力。",
        images: ["image/new/3.jpg"],
    },
    "n04": {
        name: "Hydroponic x 海綿寶寶 Sponge Bob Mates 8.0\" 整組",
        price: 3500,
        desc:"來自於巴塞隆納-Hydroponic (海力龐克)，帶有強烈人文藝術氣息和 南歐熱情的迷人魅力。",
        images: ["image/new/4.jpg"],
    },
    "n05": {
        name: "Hydroponic x 海綿寶寶 Sponge Bob Patrick Star 8.125\" 整組",
        price: 3500,
        desc:"來自於巴塞隆納-Hydroponic (海力龐克)，帶有強烈人文藝術氣息和 南歐熱情的迷人魅力",
        images:[
            "image/new/5.jpg",
            "image/new/5.1.jpg"
        ],
    },
    "n06": {
        name: "Hydroponic x 海綿寶寶 Sponge Bob 8.0\" 整組",
        price: 3500,
        desc:"來自於巴塞隆納-Hydroponic (海力龐克)，帶有強烈人文藝術氣息和 南歐熱情的迷人魅力。",
        images: ["image/new/6.jpg","image/new/6.1.jpg"],
    },
    "n07": {
        name: "Hydroponic x 南方四賤客 South Park Buddies 7.75\" 整組",
        price: 3500,
        desc:"來自於巴塞隆納-Hydroponic (海力龐克)，帶有強烈人文藝術氣息和 南歐熱情的迷人魅力。",
        images: ["image/new/7.jpg","image/new/7.1.jpg","image/new/7.2.jpg"],
    },
    "n08": {
        name: "Hydroponic x 南方四賤客 South Park Stan 8.0\" 整組",
        price: 3500,
        desc:"來自於巴塞隆納-Hydroponic (海力龐克)，帶有強烈人文藝術氣息和 南歐熱情的迷人魅力。",
        images: ["image/new/8.jpg","image/new/8.1.jpg","image/new/8.2.jpg"],
    },
    "n09": {
        name: "Hydroponic x 南方四賤客 South Park Kenny 8.125\" 整組",
        price: 3500,
        desc:"來自於巴塞隆納-Hydroponic (海力龐克)，帶有強烈人文藝術氣息和 南歐熱情的迷人魅力。",
        images: ["image/new/9.jpg","image/new/9.1.jpg","image/new/9.2.jpg"],
    },
    "n10": {
        name: "Hydroponic x 南方四賤客 South Park Gang 8.0\" 整組",
        price: 3500,
        desc:"來自於巴塞隆納-Hydroponic (海力龐克)，帶有強烈人文藝術氣息和 南歐熱情的迷人魅力。",
        images: ["image/new/10.jpg","image/new/10.1.jpg","image/new/10.2.jpg"],
    },
    "n11": {
        name: "Hydroponic Hand Red 8.125\" 整組",
        price: 3300,
        desc:"來自於巴塞隆納-Hydroponic (海力龐克)，帶有強烈人文藝術氣息和 南歐熱情的迷人魅力。",
        images: ["image/new/11.jpg"],
    },
    "n12": {
        name: "Hydroponic Hand Cyan 8.0\" 整組",
        price: 3300,
        desc:"來自於巴塞隆納-Hydroponic (海力龐克)，帶有強烈人文藝術氣息和 南歐熱情的迷人魅力。",
        images: ["image/new/12.jpg"],
    },

    "skb01": {
        name: "Hydroponic Hand Yellow 7.75' 整組",
        price: 3200,
        desc:"黑色砂紙\n"+
            "基本型輪架 95a Bushings\n"+
            "53mm 100a Conical 輪組\n"+
            "ABEC 7 軸承\n"+
            "來自於巴塞隆納-Hydroponic (海力龐克)，帶有強烈人文藝術氣息和 南歐熱情的迷人魅力。",
        images: ["image/skateboard/1.jpg"],
    },
    "skb02": {
        name: "Powell Peralta Sidewalk Surfer Quad Stringer Birch 8.37 x 28.2 交通板",
        price: 3500,
        desc: "Powell-Peralta 祖師級滑板品牌，由 George Powell 與 Stacy Peralta 於 1978 年創立，其聞名業界的原創圖樣，包含骷髏 'Ripper' 與 Steve Caballero 的 'Dragon'，至今依舊經典不敗。40年以上的豐富經驗，所發表的科技板身 Flight® ，以及滑板輪 Dragon Formula 的驚人性能表現，皆展現出傲人的頂尖研發技術。",
        images: ["image/skateboard/2.jpg","image/skateboard/2.1.jpg","image/skateboard/2.2.jpg"],
    },
    "skb03": {
        name: "Globe Huntsman 9.75\" - Bamboo/Play 整組板",
        price: 3500,
        desc: "為現今最大滑板公司之一，由 Peter、Stephen 及 Matt Hill 三兄弟在 1994 年於澳洲創立，，提供高品質的滑板組件與各式鞋款、服飾配件。",
        images: ["image/skateboard/3.jpg","image/skateboard/3.1.jpg","image/skateboard/3.2.jpg","image/skateboard/3.3.jpg"],
    },
    "skb04": {
        name: "The Heart Supply Vertical Flow Neon Blue 8.25 超值整組",
        price: 3500,
        desc: "由 Element 創始人 Johnny Schillereff 與家族成員共同成立，致力於建立一個多元、、創意及包容性的滑板社群，讓更多人能透過滑板找到快樂。",
        images: ["image/skateboard/4.jpg","image/skateboard/4.1.jpg"],
    },
    "skb05": {
        name: "The Heart Supply Vertical Flow Neon Green 8.125 超值整組",
        price: 3500,
        desc: "由 Element 創始人 Johnny Schillereff 與家族成員共同成立，致力於建立一個多元、、創意及包容性的滑板社群，讓更多人能透過滑板找到快樂。",
        images: ["image/skateboard/5.jpg","image/skateboard/5.1.jpg"],
    },
    "skb06": {
        name: "The Heart Supply Vertical Flow Neon Pink 8.0 超值整組",
        price: 3500,
        desc: "The Heart Supply 由 Element 創始人 Johnny Schillereff 與家族成員共同成立，致力於建立一個多元、、創意及包容性的滑板社群，讓更多人能透過滑板找到快樂。",
        images: ["image/skateboard/6.jpg","image/skateboard/6.1.jpg"],
    },
    "skb07": {
        name: "The Heart Supply Jagger Eaton Neon World Blue 8.25 超值整組",
        price: 3500,
        desc: "The Heart Supply 由 Element 創始人 Johnny Schillereff 與家族成員共同成立，致力於建立一個多元、、創意及包容性的滑板社群，讓更多人能透過滑板找到快樂。",
        images: ["image/skateboard/7.jpg","image/skateboard/7.1.jpg"],
    },
    "skb08": {
        name: "Antihero Pigeon Close Up 7.75' 整組",
        price: 3500,
        desc: "由 Julien Stranger 於1995年所創立，傳達 100% 純粹原始的滑板精神，沒有華麗的商業操作，只有一貫的硬派堅持，品牌象徵 Anti-Eagle 老鷹圖樣，更是業界最高辨識度的圖樣之一。",
        images: ["image/skateboard/8.jpg"],
    },
    "skb09": {
        name: "Sk8mafia House Logo White - Micro 6.0\" 迷你/整組*",
        price: 3000,
        desc: "規格迷你，樂趣無比。",
        images: ["image/skateboard/9.jpg","image/skateboard/9.1.jpg"],
    },
    "skb10": {
        name: "Real Mosaic Oval 8.0' 整組",
        price: 3500,
        desc: "REAL Skateboards 自 1991 創立至今，由兩大傳奇選手 Jim Thiebaud & Tommy Guerrero 所領導，品牌體現'真正'的滑板精神，不斷激勵著滑板圈，並透過 Actions REALized 合作計劃，將滑板精神轉化為正面的力量，將部分收益捐贈給醫學單位或罕見疾病基金會，用於幫助病童以及回饋社會。",
        images: ["image/skateboard/10.jpg"],
    },
    "skb11": {
        name: "Real Rose Oval 8.0' 整組 ⓵",
        price: 3500,
        desc: "REAL Skateboards 自 1991 創立至今，由兩大傳奇選手 Jim Thiebaud & Tommy Guerrero 所領導，品牌體現'真正'的滑板精神，不斷激勵著滑板圈，並透過 Actions REALized 合作計劃，將滑板精神轉化為正面的力量，將部分收益捐贈給醫學單位或罕見疾病基金會，用於幫助病童以及回饋社會。",
        images: ["image/skateboard/11.jpg"],
    },
    "skb12": {
        name: "Antihero Copier Eagle 8.0' 整組",
        price: 3500,
        desc: "由 Julien Stranger 於1995年所創立，傳達 100% 純粹原始的滑板精神，沒有華麗的商業操作，只有一貫的硬派堅持，品牌象徵 Anti-Eagle 老鷹圖樣，更是業界最高辨識度的圖樣之一。",
        images: ["image/skateboard/12.jpg"],
    },
    "skb13": {
        name: "Hydroponic DBZ 七龍珠 Shenron 8.125' 整組",
        price: 3500,
        desc: "來自於巴塞隆納-Hydroponic (海力龐克)，帶有強烈人文藝術氣息和 南歐熱情的迷人魅力。",
        images: ["image/skateboard/13.jpg"],
    },
    "skb14": {
        name: "Girl Carroll Pac-Man 7.75 整組",
        price: 3500,
        desc: "極高辨識度的 OG 經典滑板品牌，，由職業選手 Rick Howard 與 Mike Carroll 於 1993 年創立，旗下擁有最優秀的團隊陣容，加上同為品牌創辦人之一的奧斯卡級創意導演 - Spike Jonze 之手，Girl 拍攝製作出多部經典滑板影像作品，從 Goldfish、Mouse、Yeah Right 到 Pretty Sweet 等，每部都對滑板界造成了轟動且深遠的影響，是滑板圈重要的創意推手。",
        images: ["image/skateboard/14.jpg"],
    },
    "skb15": {
        name: "Push Louie Barletta Guest 8.0 整組",
        price: 3500,
        desc: "以「取之於滑板、用之於滑板」為宗旨，部分收益將捐給非營利組織 Make Life Skate Life，支持在全球欠缺地區建立滑板公園，並將與職業選手和藝術家合作，推出聯名產品，共同推動滑板文化的發展。",
        images: ["image/skateboard/15.jpg","image/skateboard/15.1.jpg"],
    },
    "skb16": {
        name: "Push Lizard Guy 7.5 DIY禮盒/整組",
        price: 3500,
        desc: "以「取之於滑板、用之於滑板」為宗旨，部分收益將捐給非營利組織 Make Life Skate Life，支持在全球欠缺地區建立滑板公園，並將與職業選手和藝術家合作，推出聯名產品，共同推動滑板文化的發展。",
        images: ["image/skateboard/16.jpg","image/skateboard/16.1.jpg","image/skateboard/16.2.jpg","image/skateboard/16.3.jpg"],
    },

    "h01": {
        name: "DGK Pray - W/Navy 帽子",
        price: 1600,
        desc:"DGK 全名為 Dirty Ghetto Kids，由費城傳奇選手 Stevie Williams 於 2004 年所創立，品牌風格結合塗鴉、嘻哈等街頭文化的獨特魅力，傳達突破困境的精神，無論設計與作品都展現出強烈的個性與態度。",
        images: ["image/hat/1.jpg","image/hat/1.1.jpg","image/hat/1.2.jpg"],
    },
    "h02": {
        name: "DGK Pray - Navy 帽子",
        price: 1600,
        desc:"DGK 全名為 Dirty Ghetto Kids，由費城傳奇選手 Stevie Williams 於 2004 年所創立，品牌風格結合塗鴉、嘻哈等街頭文化的獨特魅力，傳達突破困境的精神，無論設計與作品都展現出強烈的個性與態度。",
        images: ["image/hat/2.jpg","image/hat/2.1.jpg","image/hat/2.2.jpg","image/hat/2.3.jpg"],
    },
    "h03": {
        name: "Brixton Coors Light Silver Speed - Silver 帽子",
        price: 1500,
        desc:"Brixton 來自南加州的帽飾品牌，成立於 2004 年，秉持高品質製帽精神，設計簡潔獨特，工藝精緻，並選用高品質材料。品牌風格深受音樂、滑板、衝浪、復古機車和日常生活啟發，融合英倫歐風元素，展現層次感，讓擁有者能真正體會其價值。",
        images: ["image/hat/3.jpg","image/hat/3.1.jpg","image/hat/3.2.jpg"],
    },
    "h04": {
        name: "Brixton Coors Light Blower - White/Coors Navy 帽子",
        price: 1500,
        desc:"Brixton 來自南加州的帽飾品牌，成立於 2004 年，秉持高品質製帽精神，設計簡潔獨特，工藝精緻，並選用高品質材料。品牌風格深受音樂、滑板、衝浪、復古機車和日常生活啟發，融合英倫歐風元素，展現層次感，讓擁有者能真正體會其價值。",
        images: ["image/hat/4.jpg","image/hat/4.1.jpg","image/hat/4.2.jpg"],
    },
    "h05": {
        name: "Brixton Danforth NetPlus® - Bark Camo 帽子",
        price: 1300,
        desc:"Brixton 來自南加州的帽飾品牌，成立於 2004 年，秉持高品質製帽精神，設計簡潔獨特，工藝精緻，並選用高品質材料。品牌風格深受音樂、滑板、衝浪、復古機車和日常生活啟發，融合英倫歐風元素，展現層次感，讓擁有者能真正體會其價值。",
        images: ["image/hat/5.jpg","image/hat/5.1.jpg","image/hat/5.2.jpg"],
    },
    "h06": {
        name: "Brixton Lamont - Black 帽子",
        price: 1100,
        desc:"Brixton 來自南加州的帽飾品牌，成立於 2004 年，秉持高品質製帽精神，設計簡潔獨特，工藝精緻，並選用高品質材料。品牌風格深受音樂、滑板、衝浪、復古機車和日常生活啟發，融合英倫歐風元素，展現層次感，讓擁有者能真正體會其價值。",
        images: ["image/hat/6.jpg","image/hat/6.1.jpg","image/hat/6.2.jpg"],
    },
    "h07": {
        name: "Brixton Crest NetPlus® - Black 帽子",
        price: 1100,
        desc:"Brixton 來自南加州的帽飾品牌，成立於 2004 年，秉持高品質製帽精神，設計簡潔獨特，工藝精緻，並選用高品質材料。品牌風格深受音樂、滑板、衝浪、復古機車和日常生活啟發，融合英倫歐風元素，展現層次感，讓擁有者能真正體會其價值。",
        images: ["image/hat/7.jpg","image/hat/7.1.jpg"],
    },
    "h08": {
        name: "Brixton Crest NetPlus® - Mood Indigo/Off White 帽子",
        price: 1100,
        desc:"Brixton 來自南加州的帽飾品牌，成立於 2004 年，秉持高品質製帽精神，設計簡潔獨特，工藝精緻，並選用高品質材料。品牌風格深受音樂、滑板、衝浪、復古機車和日常生活啟發，融合英倫歐風元素，展現層次感，讓擁有者能真正體會其價值。",
        images: ["image/hat/8.jpg","image/hat/8.1.jpg","image/hat/8.2.jpg"],
    },
    "h09": {
        name: "Magenta Deep Bucket 漁夫帽",
        price: 1600,
        desc:"為法國獨立滑板公司，由兩位滑板愛好者 Soy Panday 與 Vivien Feil 於2010年成立，憑藉其獨特的圖像與滑板風格逐漸從眾多滑板品脾中脫穎而出，不斷壯大，並在滑板圈中建立起知名度。 Magenta 絕大部分圖像皆出自於其創辦人 Soy Panday 之手，他將滑板視為傳達藝術以及訊息的媒介，進而把自己想表地的巴黎浪漫氣息轉化成圖像並藉由滑板呈現。",
        images: ["image/hat/9.jpg","image/hat/9.1.jpg","image/hat/9.2.jpg","image/hat/9.3.jpg"],
    },
    "h10": {
        name: "Brixton Love Packable Bucket - Camo 帽子",
        price: 2200,
        desc:"起源於南加洲的年輕帽飾品牌, 成立於 2004年，創辦人 David Stoddard，Jason Young，Michael Chapin 三人秉持著高質感的製帽精神, 獨特簡潔的設計風格, 細膩的車工,天然的素材及精緻的內裡, 處處都顯示出 Brixton 的精緻與珍貴。 Brixton 的設計理念大多來自於音樂， 滑板，衝浪，復古機車，與日常生活的點滴， 運用英倫歐風元素呈現整體的層次所在, 唯有真的擁有才能體會其價值所在。",
        images: ["image/hat/10.jpg","image/hat/10.1.jpg"],
    },
    "h11": {
        name: "OBEY Comstock - Army 漁夫帽",
        price: 1500,
        desc:"OBEY Clothing 由藝術家 Shepard Fairey 創立的街頭服飾品牌，融合藝術、政治訊息與街頭文化，標誌性設計如 \"André the Giant Has a Posse\" 臉孔。品牌強調反叛精神、社會批判與可持續性，成為全球文化象徵。",
        images: ["image/hat/11.jpg","image/hat/11.1.jpg"],
    },
    "h12": {
        name: "Brixton Gramercy Packable Bucket 漁夫帽 (深藍色)",
        price: 1700,
        desc:"Brixton成立於2004年，簡潔乾淨的設計，訴諸個體的多種風格，卻也保留著傳統製帽的精神，從音樂、文化等為設計出發點，Brixton獨特的產品風格，秉持著高品質精緻細膩的做法。",
        images: ["image/hat/12.jpg"],
    },
    "h13": {
        name: "Preduce Boonie 登山帽",
        price: 900,
        desc:"泰國第一家滑板公司，多年來，Preduce在曼谷暹羅廣場的旗艦店已發展成為曼谷滑板文化的發源地， 致力於發展泰國的滑板文化讓泰國滑板實力能被世界看到，為了使Preduce成為當今亞洲最好的滑板品牌之一，Preduce與當地和國際的藝術家，設計師等品牌合作，用心設計出更多原創的滑板周邊及服裝設計。",
        images: ["image/hat/13.jpg","image/hat/13.1.jpg"],
    },
    "h14": {
        name: "OBEY Bold Cord - Black 漁夫帽",
        price: 1300,
        desc:"OBEY Clothing 由藝術家 Shepard Fairey 創立的街頭服飾品牌，融合藝術、政治訊息與街頭文化，標誌性設計如 \"André the Giant Has a Posse\" 臉孔。品牌強調反叛精神、社會批判與可持續性，成為全球文化象徵。",
        images: ["image/hat/14.jpg"],
    },
    "h15": {
        name: "OBEY Bold Cord - Sago 漁夫帽",
        price: 1300,
        desc:"OBEY Clothing 由藝術家 Shepard Fairey 創立的街頭服飾品牌，融合藝術、政治訊息與街頭文化，標誌性設計如 \"André the Giant Has a Posse\" 臉孔。品牌強調反叛精神、社會批判與可持續性，成為全球文化象徵。",
        images: ["image/hat/15.jpg"],
    },
    "h16": {
        name: "Obey Madras 6 Panel - Aqua 漁夫帽",
        price: 1300,
        desc:"OBEY Clothing 由藝術家 Shepard Fairey 創立的街頭服飾品牌，融合藝術、政治訊息與街頭文化，標誌性設計如 \"André the Giant Has a Posse\" 臉孔。品牌強調反叛精神、社會批判與可持續性，成為全球文化象徵。",
        images: ["image/hat/16.jpg"],
    },

    "t01": {
        name: "OBEY Joy Faded Crew - Digital Black 大學T",
        price: 3200,
        desc:"OBEY Clothing 由藝術家 Shepard Fairey 創立的街頭服飾品牌，融合藝術、政治訊息與街頭文化，標誌性設計如 \"André the Giant Has a Posse\" 臉孔。品牌強調反叛精神、社會批判與可持續性，成為全球文化象徵。",
        images: ["image/university t/1.jpg","image/university t/1.1.jpg"],
    },
    "t02": {
        name: "OBEY Established Works Bold Mockneck - Black",
        price: 3000,
        desc:"OBEY Clothing 由藝術家 Shepard Fairey 創立的街頭服飾品牌，融合藝術、政治訊息與街頭文化，標誌性設計如 \"André the Giant Has a Posse\" 臉孔。品牌強調反叛精神、社會批判與可持續性，成為全球文化象徵。",
        images: ["image/university t/2.jpg","image/university t/2.1.jpg","image/university t/2.2.jpg"],
    },
    "t03": {
        name: "OBEY Established Works Bold Mockneck - Ash Grey 長袖",
        price: 3000,
        desc:"OBEY Clothing 由藝術家 Shepard Fairey 創立的街頭服飾品牌，融合藝術、政治訊息與街頭文化，標誌性設計如 \"André the Giant Has a Posse\" 臉孔。品牌強調反叛精神、社會批判與可持續性，成為全球文化象徵。",
        images: ["image/university t/3.jpg","image/university t/3.1.jpg","image/university t/3.2.jpg"],
    },
    "t04": {
        name: "Thrasher Who Cares by Neckface - Black 長袖",
        price: 1600,
        desc:"被譽為滑板聖經，由Kevin Thatcher、Eric Swenson、Fausto Vitello 於1981年1月創立，專門出版滑板相關雜誌刊物，主要內容包括滑板和音樂相關文章，攝影訪談和滑板評論。後來進而發展服裝、配件等周邊商品，眾多歐美名人及時裝周都可以看到Thrasher 的搭配，影響力橫跨了滑板界及時尚界，其地位絕對是崇高無比的，熱愛滑板及時尚的朋友們一定都要入手一件。",
        images: ["image/university t/4.jpg"],
    },
    "t05": {
        name: "Magenta Script Crewneck - Ash 長袖",
        price: 3000,
        desc:"為法國獨立滑板公司，由兩位滑板愛好者 Soy Panday 與 Vivien Feil 於2010年成立，憑藉其獨特的圖像與滑板風格逐漸從眾多滑板品脾中脫穎而出，不斷壯大，並在滑板圈中建立起知名度。 Magenta 絕大部分圖像皆出自於其創辦人 Soy Panday 之手，他將滑板視為傳達藝術以及訊息的媒介，進而把自己想表地的巴黎浪漫氣息轉化成圖像並藉由滑板呈現。",
        images: ["image/university t/5.jpg","image/university t/5.1.jpg","image/university t/5.2.jpg"],
    },
    "t06": {
        name: "Volcom Skate Vitals Remy S Crew - Asphalt Black 長袖",
        price: 2500,
        desc:"忠於自我、無所畏懼、勇敢挑戰不可能 來自美國加州，創立於1991，集滑板、滑雪、衝浪、音樂、藝術於一身的品牌，打造出舒適又具潮流感的服飾配件，利用音樂、藝術傳達叛逆、創新、不羈的生活態度，挑戰別人眼中的不可能。",
        images: ["image/university t/6.jpg","image/university t/6.1.jpg","image/university t/6.2.jpg"],
    },
    "t07": {
        name: "Volcom Elzo Durt - Blueprint 長袖",
        price: 2100,
        desc:"忠於自我、無所畏懼、勇敢挑戰不可能 來自美國加州，創立於1991，集滑板、滑雪、衝浪、音樂、藝術於一身的品牌，打造出舒適又具潮流感的服飾配件，利用音樂、藝術傳達叛逆、創新、不羈的生活態度，挑戰別人眼中的不可能。",
        images: ["image/university t/7.jpg",,"image/university t/7.1.jpg","image/university t/7.2.jpg","image/university t/7.3.jpg"],
    },
    "t08": {
        name: "Thrasher Outlined - Navy/Orange 長袖",
        price: 1600,
        desc:"被譽為滑板聖經，由Kevin Thatcher、Eric Swenson、Fausto Vitello 於1981年1月創立，專門出版滑板相關雜誌刊物，主要內容包括滑板和音樂相關文章，攝影訪談和滑板評論。後來進而發展服裝、配件等周邊商品，眾多歐美名人及時裝周都可以看到Thrasher 的搭配，影響力橫跨了滑板界及時尚界，其地位絕對是崇高無比的，熱愛滑板及時尚的朋友們一定都要入手一件。",
        img: ["image/university t/8.jpg","image/university t/8.1.jpg"],
    },
    "t09": {
        name: "Thrasher Skate Mag - Black 長袖",
        price: 1600,
        desc:"被譽為滑板聖經，由Kevin Thatcher、Eric Swenson、Fausto Vitello 於1981年1月創立，專門出版滑板相關雜誌刊物，主要內容包括滑板和音樂相關文章，攝影訪談和滑板評論。後來進而發展服裝、配件等周邊商品，眾多歐美名人及時裝周都可以看到Thrasher 的搭配，影響力橫跨了滑板界及時尚界，其地位絕對是崇高無比的，熱愛滑板及時尚的朋友們一定都要入手一件。",
        images: ["image/university t/9.jpg","image/university t/9.1.jpg"],
    },
    "t10": {
        name: "There Ways 長袖",
        price: 1900,
        desc:"",
        images: ["image/university t/10.jpg","image/university t/10.1.jpg"],
    },
    "t11": {
        name: "Lakai Letterman 長袖",
        price: 2000,
        desc:"",
        images: ["image/university t/11.jpg"],
    },
    "t12": {
        name: "Taikan Plain Crew 長袖",
        price: 2780,
        desc:"由來自加拿大溫哥華一個充滿創意的團隊所成立，將創意及熱情發揮極致，將其融入 Taikan 產品並呈現給注重整體造型搭配的您。Taikan 音同 Taken [ˋtekən]；有“帶著”或“...使前進“的意思，一切端看個體的自我解讀；Taikan 團隊持續捍衛著最初的理念，不斷的的駛向新的旅程。Taikan 的商品出現在市場上所缺乏的簡約設計與功能並存的考量，著重於生產出極簡的高質感時尚設計與功能兼具的優質產品。",
        images: ["image/university t/12.jpg","image/university t/12.1.jpg","image/university t/12.2.jpg"],
    },
    "ht01": {
        name: "Thrasher x Spitfire Big Head Outline - Black 連帽上衣",
        price: 2400,
        desc:"Thrasher Magazine - 被譽為滑板聖經，創立於1981年美國舊金山，為全球滑板文化的權威媒體， 報導內容涵蓋了滑板趨勢、選手專訪、精彩攝影作品，以及與滑板文化息息相關的獨立音樂與街頭元素等，Thrasher 不僅在滑板界擁有深遠影響力，其品牌也成功橫跨時尚圈及流行產業。",
        images: ["image/hat t/1.jpg"],
    },
    "ht02": {
        name: "OBEY Icon Extra Heavy Hood II - Elmwood 連帽上衣",
        price: 3200,
        desc:"OBEY Clothing 由藝術家 Shepard Fairey 創立的街頭服飾品牌，融合藝術、政治訊息與街頭文化，標誌性設計如 \"André the Giant Has a Posse\" 臉孔。品牌強調反叛精神、社會批判與可持續性，成為全球文化象徵。",
        images: ["image/hat t/2.jpg","image/hat t/2.1.jpg"],
    },
    "ht03": {
        name: "OBEY Icon Extra Heavy Hood II - Black 連帽上衣",
        price: 3200,
        desc:"OBEY Clothing 由藝術家 Shepard Fairey 創立的街頭服飾品牌，融合藝術、政治訊息與街頭文化，標誌性設計如\"André the Giant Has a Posse\" 臉孔。品牌強調反叛精神、社會批判與可持續性，成為全球文化象徵。",
        images: ["image/hat t/3.jpg","image/hat t/3.1.jpg"],
    },
    "ht04": {
        name: "Thrasher Red Curb by LSD Worldpeace - Ash Grey 連帽上衣",
        price: 2400,
        desc:"Thrasher Magazine - 被譽為滑板聖經，創立於1981年美國舊金山，為全球滑板文化的權威媒體， 報導內容涵蓋了滑板趨勢、選手專訪、精彩攝影作品，以及與滑板文化息息相關的獨立音樂與街頭元素等，Thrasher 不僅在滑板界擁有深遠影響力，其品牌也成功橫跨時尚圈及流行產業。",
        images: ["image/hat t/4.jpg"],
    },
    "ht05": {
        name: "Thrasher Shadow Mag Logo - Black 連帽上衣",
        price: 2400,
        desc:"Thrasher Magazine - 被譽為滑板聖經，創立於1981年美國舊金山，為全球滑板文化的權威媒體， 報導內容涵蓋了滑板趨勢、選手專訪、精彩攝影作品，以及與滑板文化息息相關的獨立音樂與街頭元素等，Thrasher 不僅在滑板界擁有深遠影響力，其品牌也成功橫跨時尚圈及流行產業。",
        images: ["image/hat t/5.jpg"],
    },
    "ht06": {
        name: "Spitfire Classic '87 Swirl Fade Fill - Cement 連帽上衣",
        price: 2600,
        desc:"Spitfire Wheels 來自舊金山，全球最暢銷專業滑板輪組品牌，提供一流品質的滑板硬體周邊，頂尖職業選手參與研發測試，獨家輪組配方 Formula Fours (F4) 提供卓越的表現性能，極高辨識度的經典火焰頭 \"Bighead\" 服飾周邊，更是深受街頭滑板玩家熱愛。",
        images: ["image/hat t/6.jpg","image/hat t/6.1.jpg"],
    },
    "ht07": {
        name: "Thrasher Stacked - Sport Grey 連帽上衣",
        price: 2400,
        desc:"Thrasher Magazine - 被譽為滑板聖經，創立於1981年美國舊金山，為全球滑板文化的權威媒體， 報導內容涵蓋了滑板趨勢、選手專訪、精彩攝影作品，以及與滑板文化息息相關的獨立音樂與街頭元素等，Thrasher 不僅在滑板界擁有深遠影響力，其品牌也成功橫跨時尚圈及流行產業。",
        images: ["image/hat t/7.jpg"],
    },
    "ht08": {
        name: "Thrasher Bully - Forest Green 連帽上衣",
        price: 2400,
        desc:"被譽為滑板聖經，創立於1981年美國舊金山，為全球滑板文化的權威媒體， 報導內容涵蓋了滑板趨勢、選手專訪、精彩攝影作品，以及與滑板文化息息相關的獨立音樂與街頭元素等，Thrasher 不僅在滑板界擁有深遠影響力，其品牌也成功橫跨時尚圈及流行產業。",
        images: ["image/hat t/8.jpg"],
    },
    "ht09": {
        name: "Thrasher Balloons - Navy 連帽上衣",
        price: 2400,
        desc:"被譽為滑板聖經，創立於1981年美國舊金山，為全球滑板文化的權威媒體， 報導內容涵蓋了滑板趨勢、選手專訪、精彩攝影作品，以及與滑板文化息息相關的獨立音樂與街頭元素等，Thrasher 不僅在滑板界擁有深遠影響力，其品牌也成功橫跨時尚圈及流行產業。",
        images: ["image/hat t/9.jpg"],
    },
    "ht10": {
        name: "Spitfire Happy Classic - Black 連帽上衣",
        price: 2600,
        desc:"Spitfire Wheels 來自舊金山，全球最暢銷專業滑板輪組品牌，提供一流品質的滑板硬體周邊，頂尖職業選手參與研發測試，獨家輪組配方 Formula Fours (F4) 提供卓越的表現性能，極高辨識度的經典火焰頭 \"Bighead\" 服飾周邊，更是深受街頭滑板玩家熱愛。",
        images: ["image/hat t/10.jpg","image/hat t/10.1.jpg"],
    },
    "ht11": {
        name: "Magenta 3D - Ash 連帽上衣",
        price: 2900,
        desc:"為法國獨立滑板公司，由兩位滑板愛好者 Soy Panday 與 Vivien Feil 於2010年成立，憑藉其獨特的圖像與滑板風格逐漸從眾多滑板品脾中脫穎而出，不斷壯大，並在滑板圈中建立起知名度。 Magenta 絕大部分圖像皆出自於其創辦人 Soy Panday 之手，他將滑板視為傳達藝術以及訊息的媒介，進而把自己想表地的巴黎浪漫氣息轉化成圖像並藉由滑板呈現。",
        images: ["image/hat t/11.jpg","image/hat t/11.1.jpg"],
    }
};

// 2. 邏輯：從網址抓取參數 (例如 product.html?id=louie)
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');
// 3. 填入資料
const product = database[productId];

var currentImgIndex = 0;
var timer = null;

if (product) {
    document.getElementById('pName').innerText = product.name;
    document.getElementById('pPrice').innerText = "商品價格:" + product.price;
    document.getElementById('pDesc').innerText = product.desc;

    const qtyInput = document.getElementById('quantity');
    document.getElementById('plus').onclick = () => {
        qtyInput.value = parseInt(qtyInput.value) + 1;
    };
    document.getElementById('minus').onclick = () => {
        if (qtyInput.value > 1) qtyInput.value = parseInt(qtyInput.value) - 1;
    };

    renderGallery();
    startAutoPlay();

    const addToCartBtn = document.querySelector('.buy-group button:first-child');
    
    if (addToCartBtn) {
        addToCartBtn.onclick = () => {
            const qtyInput = document.getElementById('quantity');
            const buyItem = {
                id: productId,
                name: product.name,
                price: product.price,
                img: product.images[0], // 取得第一張圖片
                qty: parseInt(qtyInput.value)
            };

            // 使用你現有的 updateStorage 函式
            updateStorage('cartItems', buyItem);
            alert(`🛹 ${product.name} 已加入購物車！`);
        };
    }

    const buyNowBtn = document.querySelector('.buy-group button:last-child');
    if (buyNowBtn) {
        buyNowBtn.onclick = () => {
            const qty = parseInt(document.getElementById('quantity').value);
            const buyItem = {
                id: productId,
                name: product.name,
                price: product.price,
                img: product.images[0],
                qty: qty
            };
            updateStorage('cartItems', buyItem);
            window.location.href = 'car.html'; // 儲存後立即跳轉
        };
    }

    const wishlistBtn = document.querySelector('.btn-wishlist');
    if (wishlistBtn) {
        wishlistBtn.onclick = () => {
            const loveItem = {
                id: productId,
                name: product.name,
                price: product.price,
                img: product.images[0]
            };
            updateStorage('loveItems', loveItem);
            const heartIcon = wishlistBtn.querySelector('i');
            if (heartIcon) heartIcon.style.color = 'red';
            
            alert(`❤️ ${product.name} 已加入我的最愛！`);
        };
    }

} else {
    document.getElementById('pName').innerText = "找不到該商品";
}
function renderGallery(){
    const mainImg = document.getElementById('mainImg');
    const thumbContainer = document.getElementById('thumbContainer');

    mainImg.classList.add('fade-out');
    setTimeout(() => {
        mainImg.src = product.images[currentImgIndex];
        mainImg.classList.remove('fade-out');
    }, 200);

    // 生成下方縮圖
    thumbContainer.innerHTML = "";
    product.images.forEach((path, index) => {
        const img = document.createElement('img');
        img.src = path;
        img.className = (index === currentImgIndex) ? 'thumb active' : 'thumb';
        img.onclick = () => { 
            currentImgIndex = index; 
            resetAutoPlay() };
        thumbContainer.appendChild(img);
    });
}
function plusSlides(direction) {
    currentImgIndex += direction;
    if (currentImgIndex >= product.images.length){
        currentImgIndex = 0;
    }
    if (currentImgIndex < 0){
        currentImgIndex = product.images.length - 1;
    }
    resetAutoPlay();
}
function startAutoPlay(){
    if (product.images && product.images.length>1){
        timer = setInterval(()=>{
            currentImgIndex++;
            if (currentImgIndex >= product.images.length){
                currentImgIndex = 0;
            }
            renderGallery();
        },3000)
    }
}
function resetAutoPlay() {
    clearInterval(timer);
    renderGallery();
    startAutoPlay();
}

//相關產品
function renderRelatedProducts() {
    const grid = document.getElementById('relatedGrid');
    const sample = document.getElementById('card-sample');
    if (!grid || !sample || !product) return;

    
    const categoryPrefix = productId.substring(0, 2);
    let candidates = Object.keys(database).filter(id => {
        return id !== productId && 
               database[id].name !== "" && 
               id.startsWith(categoryPrefix);
    });

    // 隨機排序、取 5 個
    candidates.sort(() => Math.random() - 0.5);
    const selectedIds = candidates.slice(0, 5);

    
    selectedIds.forEach(id => {
        const item = database[id];
        const newCard = sample.cloneNode(true);
        newCard.removeAttribute('id');
        newCard.classList.add('card');

        newCard.dataset.id = id;
        newCard.dataset.name = item.name;
        newCard.dataset.price = item.price;

        const imgTag = newCard.querySelector('img'); 
        const nameTag = newCard.querySelector('h4');
        const priceTag = newCard.querySelector('h5');

        if (imgTag) imgTag.src = item.images[0];
        if (nameTag) nameTag.innerText = item.name;
        if (priceTag) priceTag.innerText = `NT$${item.price}`;

        // 點擊跳轉功能
        newCard.onclick = (e) => {
            if(e.target.closest('button')) return;
            window.location.href = `goods.html?id=${id}`;
        };
        setupOverlayButtons(newCard);

        grid.appendChild(newCard);
    });

    sample.remove();
}

// 左右滑動
function scrollRelated(direction) {
    const grid = document.getElementById('relatedGrid');
    // 每次滑動一個卡片的寬度
    const cardWidth = grid.querySelector('section').offsetWidth + 20; 
    grid.scrollBy({
        left: direction * cardWidth,
        behavior: 'smooth'
    });
}

// 在頁面載入時執行
if (product) {
    renderRelatedProducts();
}

// 處理懸停按鈕點擊事件
function setupOverlayButtons(cardElement) {
    const cartBtn = cardElement.querySelector('.add-to-cart-overlay');
    const loveBtn = cardElement.querySelector('.add-to-love-overlay');

    if (cartBtn) {
        cartBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation(); // 防止觸發父層的 onclick 跳轉頁面
            
            const product = {
                id: cardElement.dataset.id,
                name: cardElement.dataset.name,
                price: parseInt(cardElement.dataset.price),
                img: cardElement.querySelector('img').src,
                qty: 1
            };

            updateStorage('cartItems', product);
            alert(`🛹 ${product.name} 已成功加入購物車！`);
        };
    }

    if (loveBtn) {
        loveBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const product = {
                id: cardElement.dataset.id,
                name: cardElement.dataset.name,
                price: parseInt(cardElement.dataset.price),
                img: cardElement.querySelector('img').src
            };

            updateStorage('loveItems', product);
            this.querySelector('i').style.color = '#ff4d4d'; // 愛心變紅
            alert(`❤️ ${product.name} 已加入我的最愛！`);
        };
    }
}

function updateStorage(key, newItem) {
    let list = JSON.parse(localStorage.getItem(key)) || [];
    const index = list.findIndex(item => item.id === newItem.id);

    if (index > -1) {
        if (key === 'cartItems') {
            list[index].qty = (list[index].qty || 0) + (newItem.qty || 1);
        }
    } else {
        if (!newItem.qty) newItem.qty = 1; 
        list.push(newItem);
    }
    localStorage.setItem(key, JSON.stringify(list));
}