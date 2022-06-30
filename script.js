// ==UserScript==
// @name Quick-AccessMenu2.1
// @namespace https://www.bondageprojects.com/
// @version 1.4.2
// @description Everything you'll ever need for BC
// @author Nemesea
// @match https://bondageprojects.elementfx.com/*
// @match https://www.bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://www.bondage-europe.com/*
// @match http://localhost:*/*
// @icon data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant none
// @run-at document-end
// ==/UserScript==
(typeof OLDmenu !== "undefined") && (ChatRoomSendChat = OLDmenu); //reset
async function NEWmenu() {
    var content = ElementValue("InputChat").trim();
    //var tmpname = Player.Nickname;

    //chatcommand
    if (CurrentScreen == "ChatRoom") {

        if (content.indexOf("/help") == 0) {
            if (content.endsWith("/help")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: QAM 帮助按类别进行组织。 使用 <b>/help</b> (类别)。 类别列表：\n" +
                    "<b>bondage</b> = 与束缚有关的命令。\n" +
                    "<b>character</b> = 与您的角色相关的命令。\n" +
                    "<b>chat</b> = 在聊天室中具有额外功能的命令。\n" +
                    "<b>clothing</b> = 与衣服有关的命令。\n" +
                    "<b>escape</b> = 与逃生相关的命令。\n" +
                    "<b>fun</b> = 与乐趣、痛苦和快乐有关的命令。\n" +
                    "<b>misc</b> = 特殊命令。\n" +
                    "<b>talking</b> = 与谈话有关的命令。\n" +
                    "<b>visual</b> = 与动画和背景相关的命令。\n" +
                    "<b>zones</b> = 与游戏区域相关的命令。\n" +
                    " \n" +
		    "使用 <b>/help new</b> 获取有关当前 QAM 版本更改的信息。\n" +
		    " \n" +
		    "有几个命令需要指定一个目标。 可以是昵称，也可以是会员号。"	
                );
            } else if (content.includes("bondage")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: 束缚命令：\n" +
                    "<b>/lock</b> = 在所有可锁定的项目上添加锁。 使用 /help lock 获取更多信息。\n" +
                    "<b>/pet</b> = 变成一个完全约束宠物女孩。\n" +
                    "<b>/randomize</b> (targetname) = 添加随机约束和衣服。\n" +
                    "<b>/restrain</b> (targetname) = 添加随机约束。\n" +
                    "<b>/solidity</b> (value) = 改变大多数当前约束的可靠性。 值必须介于 1 和 99 之间。使用高值使逃生成为不可能！"
                );
            } else if (content.includes("character")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: 角色命令——  *更多使用信息，  **更改可以在您的个人资料中看到\n" +
                    "<b>/becomeownlover</b> = 成为自己的爱人。\n" +
                    "<b>/becomeownowner</b> = 成为你自己的主人。\n" +
                    "<b>/difficulty</b> (number) = 改变游戏难度。 0 角色扮演 - 1 常规 - 2 硬核 - 3 极端 **\n" +
                    "<b>/giveeverything</b> = 获得所有物品（包括隐藏物品）。\n" +
                    "<b>/maxstatistics</b> = 获得最大金钱声望技能。\n" +
                    "<b>/money</b> (value) = 修改金钱数量。\n" +
                    "<b>/name</b> (newnamehere) = 选择一个临时的新昵称。\n" +
                    "<b>/reputation</b> (reputation) (level) = 改变声望。 *\n" +
                    "<b>/resetinventory</b> = 清空你的库存。 会先发出警告。\n" +
                    "<b>/roleplay</b> (rolehere) = 添加一个称号。 *\n" +
                    "<b>/rolequit</b> (role or clubarea here) = 去掉一个称号。 *\n" +
                    "<b>/savename</b> (newnamehere) = 为临时昵称赋予确定的地位。可能有问题。\n" +
                    "<b>/skill</b> (skill) (level) = 改变一个技能。 *\n" +
                    "<b>/title</b> (newtitlehere) = 选择一个新标题。 *"
                );
            } else if (content.includes("chat")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: 聊天命令：\n" +
                    "<b>/autokick</b> = 自动踢出 0 天的帐户。\n" +
                    "<b>/erase</b> = 删除聊天记录。\n" +
                    "<b>/font</b> (newfont) (size) = 更改 BC 中的字体。 使用将提供更多信息。\n" +
                    "<b>/frlist</b> = 允许在 15 秒内访问好友列表，其中包含指向其他房间的可点击链接。\n" +
                    "<b>/hiddenmessages</b> = 切换显示游戏隐藏的消息。\n" +
                    "<b>/profile</b> (targetname) = 可以直接访问聊天室中任何玩家的个人资料描述。\n" +
                    "<b>/search</b> (areaname) = 打开房间搜索，区域是：俱乐部或庇护。\n" +
                    "<b>/theme</b> (number) = 自动重新登录后更改聊天主题颜色。 数字必须介于 0 和 3 之间。"
                );
            } else if (content.includes("clothing")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: 服装命令：\n" +
                    "<b>/clothes</b> (targetname) = 改变衣服。\n" +
                    "<b>/diaper</b> (actionhere) (targetname or setvalue) = 玩尿布（ABDL 游戏）。 使用将提供更多信息。\n" +
                    "<b>/naked</b> (targetname) = 去除衣服。\n" +
                    "<b>/outfit</b> (targetname) = 恢复/保存/加载装备。 使用将提供更多信息。\n" +
                    "<b>/underwear</b> (targetname) = 改变内衣。\n" +
                    "<b>/wardrobe</b> (targetname) = 打开目标衣柜。"
                );
            } else if (content.includes("escape")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: 逃生命令：\n" +
                    "<b>/boost</b> = 提升技能，类似于女仆宿舍的咖啡。\n" +
                    "<b>/collarremove</b> = 删除奴隶/所有者项圈。 也可以是：/removecollar。\n" +
                    "<b>/frlist</b> = 允许在 15 秒内访问好友列表，其中包含指向其他房间的可点击链接。\n" +
                    "<b>/leave</b> = 离开房间，即使被阻止。\n" +
                    "<b>/release</b> (targetname) = 删除所有约束。\n" +
                    "<b>/resetdifficulty</b> = 重新设置难度，从而逃离它。 会先发出警告。\n" +
                    "<b>/safewordspecific</b> = 移除特定的项目。 使用时提供更多信息。\n" +
                    "<b>/solidity</b> (value) = 改变大多数当前约束的可靠性。 使用低值来逃离！ 值 1 允许逃离未来的箱子。\n" +
                    "<b>/totalrelease</b> (targetname) = 移除所有绑定、项圈、安全带、贞操、玩具。\n" +
                    "<b>/unlock</b> (targetname) (locktype) = 删除所有锁或仅删除指定类型的锁。 更多信息 /help unl。"
                );
            } else if (content.includes("fun")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: 有趣的命令：\n" +
                    "<b>/arousal</b> (level) = 设置兴奋水平。 级别必须在 0 到 100 之间。\n" +
                    "<b>/cum</b> = 引起高潮。\n" +
                    "<b>/moaner</b> = 性欲和刺激时呻吟。 使用将提供更多信息。\n" +
                    "<b>/superdice</b> (sides)  = 掷出一个超级骰子。 边数可以在 2 到 999999999 之间。"
                );
            } else if (content.includes("lock")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: 锁命令的几种用法：\n" +
                    "/lock (targetname) (locktype) 用于 1 到 8 号锁\n" +
                    "/lock (targetname) (locktype) (r) 9号锁\n" +
                    "/lock (targetname) (locktype) (code) 10号锁\n" +
                    "/lock (targetname) (locktype) (password) (r) 用于 11 和 12号锁\n" +
                    "/lock (targetname) (locktype) (minutes) (h) (i) (r) 用于 13 至 15 号锁\n" +
                    "/lock (targetname) (locktype) (password) (minutes) (h) (i) (r) 16号锁\n" +
                    " \n" +
                    "锁类型：\n" +
                    "1 金属挂锁 - 2 专属挂锁 - 3 复杂的挂锁 - 4 高安全挂锁\n" +
                    "5 潘多拉魔盒锁 - 6 女王锁 - 7 爱人锁 - 8 主人锁\n" +
                    "9 五分钟计时锁 - 10 组合密码锁 - 11 安全词锁\n" +
                    "12 密码锁 - 13 女王计时锁 - 14 爱人计时锁\n" +
                    "15 主人计时锁 - 16 计时密码锁\n" +
                    "使用 <b>/help lpar</b> 获取有关其他参数的信息"
                );
            } else if (content.includes("lpar")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: 锁定命令的特殊参数：\n" +
                    "code 必须介于 0 和 9999 之间。\n" +
                    "password 限制为 8 个字符。\n" +
                    "maximum time = 13 号和 16 号锁为 240 分钟，\n" +
                    "14 号和 15 号锁为 10080 分钟。\n" +
                    " \n" +
                    "可选参数：\n" +
                    "h 隐藏计时器，\n" +
                    "i 允许其他玩家输入时间，\n" +
                    "r 输入正确密码时移除物品\n" +
                    "or 锁定计时器耗尽。\n" +
                    " \n" +
                    "Tip: 当您需要跳过它们时，将 h 和/或 i 替换为另一个字符。"
                );
            } else if (content.includes("misc")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: 其他命令：\n" +
                    "<b>/clubhelp</b> (level) = 显示游戏的标准命令（以及可选的 BCE 命令）\n" +
                    "<b>/help</b> (category) = 显示 QAM 命令。 可用类别：束缚、角色、服装、逃脱、乐趣、杂项、谈话、视觉、区域。\n" +
                    "<b>/login</b> (accountname) (password) = 登录一个新帐户。\n" +
                    "<b>/relog</b> = 重新登录。\n" +
                    "<b>/unrestrict</b> =  removes all restrictions from game. Can use maid drink tray/other stuff. Using will give more info. Submissives should use /unrestrict soft."
                );
            } else if (content.includes("new")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: v.1.4.2 的主要变化：\n" +
                    "- 改进了宠物命令，具有更多随机外观和对任何玩家的扩展\n" +
                    "- 通过添加对目标成员编号的支持，改进了所有带有目标名称的命令\n" +
	            "- 在帮助命令中添加了“新”选项以获取有关当前 QAM 版本更改的信息\n" +
                    "- 更新了 bg1 命令。"
                );   	    
            } else if (content.includes("talking")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: 谈话命令：\n" +
                    "<b>/action</b> (stuffhere) = 插入一个动作。 也可以：/a\n" +
                    "<b>/babytalk</b> (stuffhere) = 像婴儿一样说话。 也可以：/b\n" +
                    "<b>/gagheavy</b> (stuffhere) = 像严重堵嘴一样说话。也可以: /gv\n" +
                    "<b>/gaglight</b> (stuffhere) = 像堵嘴一样说话。 也可以: /gl\n" +
                    "<b>/gagtalk</b> = 解码/不解码被堵嘴人的谈话。\n" +
                    "<b>/moaner</b> = 性欲和刺激时呻吟。 使用将提供更多信息。\n" +
                    "<b>/talkbaby</b> = 切换堵嘴（ADBL）。 记住一次只能使用一个。\n" +
                    "<b>/talkgag light/heavy</b> = 切换堵嘴(轻/重)。 记住一次只能使用一个。\n" +
                    "<b>/whisper</b> (targetname) = 设置悄悄话目标。"
                );
            } else if (content.includes("unl")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: 解锁命令：\n" +
                    "<b>/unlock</b> (targetname) (locktype).\n" +
                    "如果您不指定锁类型，任何类型的所有锁都将被删除。\n" +
                    " \n" +
                    "锁类型：\n" +
                    "1 金属挂锁 - 2 专属挂锁 - 3 复杂的挂锁 - 4 高安全挂锁\n" +
                    "5 潘多拉魔盒锁 - 6 女王锁 - 7 爱人锁 - 8 主人锁\n" +
                    "9 五分钟计时锁 - 10 组合密码锁 - 11 安全词锁\n" +
                    "12 密码锁 - 13 女王计时锁 - 14 爱人计时锁\n" +
                    "15 主人计时锁 - 16 计时密码锁"
                );
            } else if (content.includes("visual")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: 视觉命令：\n" +
                    "<b>/anim2</b> (animhere) = 改变你的面部表情。 使用将提供更多信息。\n" +
                    "<b>/bg1</b> = 添加隐藏聊天室背景。 BCX 用户提示：登录前激活 BCX。\n" +
                    "<b>/bg2</b> (number) = 使用隐藏的平聊天室背景。 数字必须介于 1 和 45 之间。使用 /bg2 0 获取列表。\n" +
                    "<b>/colorchanger</b> (animhere) = 获得颜色变化的动画。 使用将提供更多信息。\n" +
                    "<b>/pose2</b> (posehere) (targetname) = 改变任何玩家的姿势。 使用将提供更多信息。\n" +
                    "<b>/speak</b> = 在聊天中说话时使嘴巴动起来。 也可以：/mouth 或 /speech。"
                );
            } else if (content.includes("zones")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: 游戏区域命令：\n" +
                    "<b>/asylum</b> (minutes) = 进入庇护所，绕过要求。 如果您是病人，请指定分钟。\n" +
                    "<b>/chess</b> (difficulty) = 开始国际象棋，必须先指定难度（1 容易 - 2 普通 - 3 困难）。\n" +
                    "<b>/college</b> = 进入大学，绕过要求。\n" +
                    "<b>/game</b> (minigamehere) = 启动一个小游戏,会离开当前聊天室。 使用将提供更多信息。\n" +
                    "<b>/ggts</b> (minutes) (level) = 在指定时间内进入 ggts 庇护培训。 级别必须在 1 到 6 之间。\n" +
                    "<b>/keydeposit</b> (hours) = 将您的钥匙安全地保存在钥匙保管出中。\n" +
                    "<b>/kinkydungeon</b> = 开始淫靡地城。 推出变态地牢。选项：devious 切换迂回挑战，cheat 以开始作弊。\n" +
                    "<b>/patreoncheats</b> = 更改作弊的设置。 除了大学制服外，所有的都是默认自动切换的。\n" +
                    "<b>/prison</b> (minutes) = 进入潘多拉监狱。 超过 60 分钟是可能的。\n" +
                    "<b>/store</b> = 离开聊天室，去商店。 显示隐藏的项目。\n" +
                    "<b>/timercell</b> (minutes) = 留在隔离室。 超过 60 分钟是可能的。 提示：之前使用束缚命令！"
                );
            }
        } else if ((content.indexOf("/action ") == 0) || (content.indexOf("/a ") == 0)) { //插入一个动作。
            if (content.includes("/action") == true) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: (content.substring(7).trim())
                    }]
                });
            } else {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: (content.substring(2).trim())
                    }]
                });
            }
        } else if (content.indexOf("/anim2") == 0) {  //改变你的面部表情。 使用将提供更多信息。
            CharacterResetFacialExpression(Player);
            CharacterResetFacialExpression(Player);
            if (content.includes("angry1")) {
                CharacterSetFacialExpression(Player, "Mouth", "Angry", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " is angry."
                    }]
                });
            } else if (content.includes("angry2")) {
                CharacterSetFacialExpression(Player, "Mouth", "Angry", 75000);
                CharacterSetFacialExpression(Player, "Eyes", "Angry", 75000);
                CharacterSetFacialExpression(Player, "Eyes2", "Angry", 75000);
                CharacterSetFacialExpression(Player, "Eyebrows", "Angry", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " is very angry."
                    }]
                });
            } else if (content.includes("blink")) {
                CharacterSetFacialExpression(Player, "Eyes", "Closed", .96);
                CharacterSetFacialExpression(Player, "Eyes2", "Closed", .96);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " blinks her eyes."
                    }]
                });
            } else if (content.includes("blush1")) {
                CharacterSetFacialExpression(Player, "Blush", "Low", 2.78);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " slightly blushes."
                    }]
                });
            } else if (content.includes("blush2")) {
                CharacterSetFacialExpression(Player, "Blush", "Medium", 2.78);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " blushes."
                    }]
                });
            } else if (content.includes("blush3")) {
                CharacterSetFacialExpression(Player, "Blush", "High", 2.78);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " blushes a lot."
                    }]
                });
            } else if (content.includes("blush4")) {
                CharacterSetFacialExpression(Player, "Blush", "VeryHigh", 2.78);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " very strongly blushes."
                    }]
                });
            } else if (content.includes("blush5")) {
                CharacterSetFacialExpression(Player, "Blush", "Extreme", 2.78);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " extremely blushes."
                    }]
                });
            } else if (content.includes("chuckle")) {
                CharacterSetFacialExpression(Player, "Mouth", "Grin", 1.11);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " chuckles."
                    }]
                });
            } else if (content.includes("closeeyes")) {
                CharacterSetFacialExpression(Player, "Eyes", "Closed", 75000);
                CharacterSetFacialExpression(Player, "Eyes2", "Closed", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " closes her eyes."
                    }]
                });
            } else if (content.includes("closemouth")) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " closes her mouth."
                    }]
                });
            } else if (content.includes("confused")) {
                CharacterSetFacialExpression(Player, "Eyebrows", "OneRaised", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " is confused."
                    }]
                });
            } else if (content.includes("cuddle")) {
                CharacterSetFacialExpression(Player, "Eyes", "ShylyHappy", 9.99);
                CharacterSetFacialExpression(Player, "Eyes2", "ShylyHappy", 9.99);
                CharacterSetFacialExpression(Player, "Eyebrows", "Raised", 9.99);
                CharacterSetFacialExpression(Player, "Mouth", "Happy", 9.99);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " cuddles with her friend."
                    }]
                });
            } else if (content.includes("cry")) {
                CharacterSetFacialExpression(Player, "Fluids", "TearsMedium", 1000, "#000016");
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " cries."
                    }]
                });
            } else if (content.includes("disoriented")) {
                CharacterSetFacialExpression(Player, "Eyes", "Dizzy", 8.22);
                CharacterSetFacialExpression(Player, "Eyes2", "Dizzy", 8.22);
                CharacterSetFacialExpression(Player, "Eyebrows", "Raised", 8.22);
                CharacterSetFacialExpression(Player, "Blush", "Medium", 8.22);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " feels disoriented."
                    }]
                });
            } else if (content.includes("distressed")) {
                CharacterSetFacialExpression(Player, "Eyes", "Scared", 75000);
                CharacterSetFacialExpression(Player, "Eyes2", "Scared", 75000);
                CharacterSetFacialExpression(Player, "Eyebrows", "Soft", 75000);
                CharacterSetFacialExpression(Player, "Mouth", "Angry", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " is distressd."
                    }]
                });
            } else if (content.includes("droolreset")) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " stops to drool."
                    }]
                });
            } else if (content.includes("droolsides")) {
                CharacterSetFacialExpression(Player, "Fluids", "DroolSides", 1000, "#000016");
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " is drooling."
                    }]
                });
            } else if (content.includes("frown")) {
                CharacterSetFacialExpression(Player, "Mouth", "Frown", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " disagrees."
                    }]
                });
            } else if (content.includes("gaginflate")) {
                CharacterSetFacialExpression(Player, "Eyes", "Lewd", 4.11);
                CharacterSetFacialExpression(Player, "Eyes2", "Lewd", 4.11);
                CharacterSetFacialExpression(Player, "Blush", "Medium", 4.11);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " is excited by the inflation of her gag."
                    }]
                });
            } else if (content.includes("giggle")) {
                RunExpressionAnimation([null, "Laughing", "Grin", "Happy", "Laughing", "Happy", null]);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " giggles."
                    }]
                });
            } else if (content.includes("glare")) {
                CharacterSetFacialExpression(Player, "Eyes", "Angry", 75000);
                CharacterSetFacialExpression(Player, "Eyes2", "Angry", 75000);
                CharacterSetFacialExpression(Player, "Eyebrows", "Harsh", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " looks at everybody with angry eyes."
                    }]
                });
            } else if (content.includes("grin")) {
                CharacterSetFacialExpression(Player, "Eyes", "Horny", 75000);
                CharacterSetFacialExpression(Player, "Eyes2", "Horny", 75000);
                CharacterSetFacialExpression(Player, "Mouth", "Grin", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " grins."
                    }]
                });
            } else if (content.includes("happy")) {
                CharacterSetFacialExpression(Player, "Mouth", "Happy", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " is happy."
                    }]
                });
            } else if (content.includes("iced")) {
                CharacterSetFacialExpression(Player, "Eyes", "Surprised", 1.83);
                CharacterSetFacialExpression(Player, "Eyes2", "Surprised", 1.83);
                CharacterSetFacialExpression(Player, "Mouth", "Angry", 2.11);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " feels the effect of something very cold on her skin."
                    }]
                });
            } else if (content.includes("kiss1")) {
                CharacterSetFacialExpression(Player, "Mouth", "HalfOpen", 1.44);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " gives simple kisses to her friend."
                    }]
                });
            } else if (content.includes("kiss2")) {
                CharacterSetFacialExpression(Player, "Eyes", "Closed", 2.88);
                CharacterSetFacialExpression(Player, "Eyes2", "Closed", 2.88);
                CharacterSetFacialExpression(Player, "Mouth", "HalfOpen", 2.88);
                CharacterSetFacialExpression(Player, "Blush", "Low", 2.88);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " kisses her friend on the lips."
                    }]
                });
            } else if (content.includes("kiss3")) {
                CharacterSetFacialExpression(Player, "Eyes", "Closed", 4.22);
                CharacterSetFacialExpression(Player, "Eyes2", "Closed", 4.22);
                CharacterSetFacialExpression(Player, "Mouth", "Open", 4.22);
                CharacterSetFacialExpression(Player, "Blush", "Medium", 5.00);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " gives a long kiss to her friend."
                    }]
                });
            } else if (content.includes("laugh")) {
                RunExpressionAnimation([null, "Laughing", "Grin", "Laughing", "Happy", "Laughing", "Grin", "Laughing", "Happy", null]);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " laughs."
                    }]
                });
            } else if (content.includes("lick")) {
                CharacterSetFacialExpression(Player, "Mouth", "Ahegao", 4.11);
                CharacterSetFacialExpression(Player, "Blush", "Low", 4.11);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " licks sensitive body zones of her friend."
                    }]
                });
            } else if (content.includes("lipbite")) {
                CharacterSetFacialExpression(Player, "Mouth", "LipBite", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " bites her lips."
                    }]
                });
            } else if (content.includes("narroweyes")) {
                CharacterSetFacialExpression(Player, "Eyes", "Horny", 75000);
                CharacterSetFacialExpression(Player, "Eyes2", "Horny", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " narrows her eyes."
                    }]
                });
            } else if (content.includes("neutral")) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " goes back to a neutral facial expression."
                    }]
                });
            } else if (content.includes("openeyes")) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " opens her eyes."
                    }]
                });
            } else if (content.includes("openmouth")) {
                CharacterSetFacialExpression(Player, "Mouth", "Moan", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " opens her mouth."
                    }]
                });
            } else if (content.includes("pout")) {
                CharacterSetFacialExpression(Player, "Mouth", "Pout", 75000);
                CharacterSetFacialExpression(Player, "Eyes", "Dazed", 75000);
                CharacterSetFacialExpression(Player, "Eyes2", "Dazed", 75000);
                CharacterSetFacialExpression(Player, "Eyebrows", "Harsh", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " pouts."
                    }]
                });
            } else if (content.includes("raisebrows")) {
                CharacterSetFacialExpression(Player, "Eyebrows", "Raised", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " raises her brows."
                    }]
                });
            } else if (content.includes("resetbrows")) {
                CharacterSetFacialExpression(Player, "Eyebrows", "", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " feels reassured."
                    }]
                });
            } else if (content.includes("sad")) {
                CharacterSetFacialExpression(Player, "Mouth", "Frown", 75000);
                CharacterSetFacialExpression(Player, "Eyes", "Shy", 75000);
                CharacterSetFacialExpression(Player, "Eyes2", "Shy", 75000);
                CharacterSetFacialExpression(Player, "Eyebrows", "Soft", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " is sad."
                    }]
                });
            } else if (content.includes("smile")) {
                CharacterSetFacialExpression(Player, "Mouth", "Grin", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " smiles."
                    }]
                });
            } else if (content.includes("smirk")) {
                CharacterSetFacialExpression(Player, "Mouth", "Smirk", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " smirks."
                    }]
                });
            } else if (content.includes("spanked")) {
                CharacterSetFacialExpression(Player, "Eyes", "Lewd", 2.44);
                CharacterSetFacialExpression(Player, "Eyes2", "Lewd", 2.44);
                CharacterSetFacialExpression(Player, "Eyebrows", "Soft", 2.44);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " feels the effect of the spanking on her skin."
                    }]
                });
            } else if (content.includes("wink")) {
                CharacterSetFacialExpression(Player, "Eyes2", "Closed", 1.42);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " winks."
                    }]
                });
            } else if (content.includes("worried")) {
                CharacterSetFacialExpression(Player, "Eyes", "Surprised", 75000);
                CharacterSetFacialExpression(Player, "Eyes2", "Surprised", 75000);
                CharacterSetFacialExpression(Player, "Eyebrows", "Soft", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " is worried."
                    }]
                });
            } else if (content.endsWith("/anim2")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: 面部表情命令必须包含一个表情\n" +
                    " \n" +
                    "Available anims:\n" +
                    "angry1, angry2, blink, blush1, blush2, blush3, blush4,\n" +
                    "blush5, chuckle, closeeyes, closemouth, confused, cuddle,\n" +
                    "cry, disoriented, distressed, droolreset, droolsides, frown,\n" +
                    "gaginflate, giggle, glare, grin, happy, iced, kiss1, kiss2,\n" +
                    "kiss3, laugh, lick, lipbite, narroweyes, neutral, openeyes,\n" +
                    "openmouth, pout, raisebrows, resetbrows, sad, smile,\n" +
                    "smirk, spanked, wink, worried."
                );
            }
        } else if (content.indexOf("/arousal") == 0) {  //设置兴奋水平。 级别必须在 0 到 100 之间。
            Player.ArousalSettings.Progress = content.substring(8);
            ServerPlayerSync();
            if (content.includes("100")) {
                ActivityOrgasmRuined = false;
                ActivityOrgasmStart(Player);
            }
        } else if (content.indexOf("/asylum") == 0) {  //进入庇护，绕过要求。 如果您是病人，请指定分钟。
            var minutes = content.substring(7).trim();
            DialogLentLockpicks = false;
            ChatRoomClearAllElements();
            ServerSend("ChatRoomLeave", "");
            ChatRoomSetLastChatRoom("");
            ChatRoomLeashPlayer = null;
            CommonSetScreen("Room", "AsylumEntrance");
            CharacterDeleteAllOnline();
            AsylumEntranceIsWearingNurseClothes = function() {
                return true
            };
            if (ReputationGet("Asylum") < 0) {
                LogAdd("Committed", "Asylum", CurrentTime + 60000 * minutes);
            }
        } else if (content.indexOf("/autokick") == 0) {  //自动踢出 0 天的帐户。
            if (this.AutoKickOn == false || this.AutoKickOn == undefined) {
                ChatRoomSendLocal("AutoKick：准备好了。");
                AutoKickOn = true;
                AutoKicker = function(data, days = 1, hours = 12, minutes = 0) {
                    minutes *= 60000;
                    hours *= 3600000;
                    days *= 86400000;
                    let character = ChatRoomCharacter.find((c) => c.MemberNumber === data.Sender);
                    if (data.Content == "ServerEnter" && character.Creation > CurrentTime - days - hours - minutes) {
                        ServerSend("ChatRoomAdmin", {
                            MemberNumber: character.MemberNumber,
                            Action: "Ban"
                        });
                        ServerSend("ChatRoomChat", {
                            Content: "Beep",
                            Type: "Action",
                            Dictionary: [{
                                Tag: "Beep",
                                Text: "AutoKick：帐户是 0 天。"
                            }]
                        });
                    };
                };
                ServerSocket.on("ChatRoomMessage", AutoKicker);
            } else {
                AutoKickOn = false;
                ServerSocket.off("ChatRoomMessage", AutoKicker);
                ChatRoomSendLocal("AutoKick：禁用。");
            }
        } else if ((content.indexOf("/babytalk") == 0) || content.indexOf("/b ") == 0) {  //像婴儿一样说话。
            if (content.includes("/babytalk")) {
                content = SpeechBabyTalk({
                    Effect: ["RegressedTalk"]
                }, content);
                ServerSend("ChatRoomChat", {
                    "Content": content.substring(9).trim(),
                    "Type": "Chat"
                });
            } else {
                content = SpeechBabyTalk({
                    Effect: ["RegressedTalk"]
                }, content);
                ServerSend("ChatRoomChat", {
                    "Content": content.substring(2).trim(),
                    "Type": "Chat"
                });
            }
        } else if (content.indexOf("/becomeownlover") == 0) {  //成为自己的爱人。
            if (content.includes("yes")) {
                ServerSend("AccountLovership", {
                    MemberNumber: Player.MemberNumber,
                    Action: "Propose" && "Accept"
                })
                ServerSend("AccountLovership", {
                    MemberNumber: Player.MemberNumber,
                    Action: "CanOfferBeginWedding" && "Propose"
                });
                ServerSend("AccountLovership", {
                    MemberNumber: Player.MemberNumber,
                    Action: "CanBeginWedding" && "Accept"
                });
                ChatRoomSendLocal("Quick-AccessMenu2: 完成。 分手是通过俱乐部管理完成的。");
            } else {
                ChatRoomSendLocal(
                    "<b>警告</b>: 删除自己作为情人时可能会出现未经确认的故障，在此期间将随机删除一个情人\n" +
                    "使用时要考虑到风险。 键入以下内容进行确认： <b>/becomeownlover yes</b>"
                );
            }
            //ManagementBreakLover(L)删除第L个情人，从0开始
        }//如果可能，考虑编写情人分手代码以弥补故障。
        else if (content.indexOf("/becomeownowner") == 0) {   //成为你自己的主人。
            ServerSend("AccountOwnership", {
                MemberNumber: Player.MemberNumber,
                Action: "Propose" && "Accept"
            })
            ServerSend("AccountOwnership", {
                MemberNumber: Player.MemberNumber,
                Action: "CanOfferEndTrial" && "Propose"
            });
            ServerSend("AccountOwnership", {
                MemberNumber: Player.MemberNumber,
                Action: "CanEndTrial" && "Accept"
            });
            ChatRoomSendLocal("Quick-AccessMenu2: 完成。 分手是通过俱乐部管理完成的。");
        }//由于俱乐部的极端模式阻止但不允许所有者破坏，因此无法摆脱所有者。 愚蠢的...
        else if (content.indexOf("/bg1") == 0) {  //添加隐藏聊天室背景。
            var BackgroundsTagList = [   //创建在线聊天室的所有标签列表
                BackgroundsTagNone,
                BackgroundsTagIndoor,
                BackgroundsTagOutdoor,
                BackgroundsTagAquatic,
                BackgroundsTagSpecial,
                BackgroundsTagSciFiFantasy,
                BackgroundsTagClub,
                BackgroundsTagHouse,
                BackgroundsTagDungeon,
                BackgroundsTagAsylum
            ];
            BackgroundsList.push({
                Name: "Pandora/Ground/Entrance",   //潘多拉地面入口
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Cell0",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Cell1",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Cell2",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Cell3",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Cell4",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Cell5",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Cell6",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Entrance",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Fork0",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Fork1",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Fork2",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Fork3",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Fork4",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Fork5",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Fork6",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Rest0",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Tunnel0",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Tunnel1",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Tunnel2",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Tunnel3",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Tunnel4",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Tunnel5",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Tunnel6",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Cell0",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Cell1",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Cell2",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Cell3",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Cell4",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Cell5",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Cell6",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Entrance",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Fork0",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Fork1",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Fork2",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Fork3",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Fork4",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Fork5",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Fork6",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Rest0",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Tunnel0",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Tunnel1",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Tunnel2",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Tunnel3",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Tunnel4",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Tunnel5",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Tunnel6",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "AmandaCollarIntro",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "AmandaIntro",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "AsylumGGTSRoomAlert",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Bar",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "BrickWall",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Cell",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "CollegeCafeteria",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "CollegeClass2",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "CollegeDetention",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "CollegeEntrance",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "CollegeTeacherLounge",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "CollegeTennisPlay",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "CraftingWorkshop",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Dressing",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Gambling",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "grey",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "HorseStableLight",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "HypnoSpiral2",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "HypnoticSpiral",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Magic",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "MagicSchoolEscape",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "MagicSchoolLaboratory",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "/Orig/Entrance",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "/Orig/Lounge",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Prison",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "RhythmGame",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "RhythmGameLoading",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "SarahBedroom0",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "SarahBedroom1",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "SarahBedroom2",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "SarahBedroom3",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "SarahIntro",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Sheet",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "SheetWhite",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Shop",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "SlaveMarket",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "SophieIntro",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "White",
                Tag: [BackgroundsTagIndoor]
            });
            ChatCreateBackgroundList = BackgroundsGenerateList(BackgroundsTagList);
            ChatRoomSendLocal("Quick-AccessMenu2: 您现在可以使用更多背景。");
        } else if (content.indexOf("/bg2") == 0) {  //使用隐藏的平台背景。
            var bg = content.substring(4).trim();
            if (bg == 0) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: 隐藏平台背景列表：\n" +
                    "1 和 2 露台 - 3 舞厅\n" +
                    "4, 5, 6 奥利维亚的浴室\n" +
                    "7 地堡卧室 - 8 爱德华的卧室\n" +
                    "9 和 10 伊莎贝拉的卧室 - 11 梅洛迪的卧室\n" +
                    "12, 13, 14 奥利维亚的卧室 - 15 黑\n" +
                    "16 城堡大厅 - 17 学院艺术1\n" +
                    "18 学院教室1 - 19 学院大厅 1\n" +
                    "20, 21, 22 伯爵夫人大厅\n" +
                    "23 和 24 地堡1\n" +
                    "25 和 26 地堡牢房\n" +
                    "27, 28, 29 地堡储藏室\n" +
                    "30 到 40 大厅 (1 to 4) - 41 女仆床\n" +
                    "42 和 43 露台 - 44 和 45 酒窖"
                );
            } else if (bg == 1) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Balcony';
                updateBackground();
            } else if (bg == 2) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/Balcony';
                updateBackground();
            } else if (bg == 3) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Ballroom';
                updateBackground();
            } else if (bg == 4) {
                ChatCreateBackgroundSelect = '../Screens/Room//Platform/Background/Castle/Orig/BathroomOlivia';
                updateBackground();
            } else if (bg == 5) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/BathroomOlivia';
                updateBackground();
            } else if (bg == 6) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/BathroomOlivia';
                updateBackground();
            } else if (bg == 7) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/BedroomDungeon';
                updateBackground();
            } else if (bg == 8) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/BedroomEdward';
                updateBackground();
            } else if (bg == 9) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/BedroomIsabella';
                updateBackground();
            } else if (bg == 10) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/BedroomIsabella';
                updateBackground();
            } else if (bg == 11) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/BedroomMelody';
                updateBackground();
            } else if (bg == 12) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/BedroomOlivia';
                updateBackground();
            } else if (bg == 13) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/BedroomOlivia';
                updateBackground();
            } else if (bg == 14) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/BedroomOliviaDark';
                updateBackground();
            } else if (bg == 15) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/Black';
                updateBackground();
            } else if (bg == 16) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/CastleHall';
                updateBackground();
            } else if (bg == 17) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/College/CollegeArt1';
                updateBackground();
            } else if (bg == 18) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/College/CollegeClass1';
                updateBackground();
            } else if (bg == 19) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/College/CollegeHall1';
                updateBackground();
            } else if (bg == 20) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/CountessHall';
                updateBackground();
            } else if (bg == 21) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/CountessHall';
                updateBackground();
            } else if (bg == 22) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/CountessHallDeadEnd';
                updateBackground();
            } else if (bg == 23) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Dungeon1C';
                updateBackground();
            } else if (bg == 24) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Dungeon1W';
                updateBackground();
            } else if (bg == 25) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/DungeonCell';
                updateBackground();
            } else if (bg == 26) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/DungeonCell';
                updateBackground();
            } else if (bg == 27) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/DungeonStorage';
                updateBackground();
            } else if (bg == 28) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/DungeonStorage';
                updateBackground();
            } else if (bg == 29) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/DungeonStorageDark';
                updateBackground();
            } else if (bg == 30) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Hall1C';
                updateBackground();
            } else if (bg == 31) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Hall1W';
                updateBackground();
            } else if (bg == 32) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Hall2C';
                updateBackground();
            } else if (bg == 33) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Hall3C';
                updateBackground();
            } else if (bg == 34) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Hall3Cv2';
                updateBackground();
            } else if (bg == 35) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Hall3E';
                updateBackground();
            } else if (bg == 36) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Hall3W';
                updateBackground();
            } else if (bg == 37) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Hall4C';
                updateBackground();
            } else if (bg == 38) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Hall4E';
                updateBackground();
            } else if (bg == 39) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Hall4W1';
                updateBackground();
            } else if (bg == 40) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Hall4W2';
                updateBackground();
            } else if (bg == 41) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/MaidBed';
                updateBackground();
            } else if (bg == 42) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Terrace';
                updateBackground();
            } else if (bg == 43) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/Terrace';
                updateBackground();
            } else if (bg == 44) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/WineCellar';
                updateBackground();
            } else if (bg == 45) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/WineCellar';
                updateBackground();
            }
        } else if (content.indexOf("/boost") == 0) {  //提升技能，类似于女仆宿舍酒。
            LogAdd("ModifierLevel", "SkillModifier", 105);
            LogAdd("ModifierDuration", "SkillModifier", CurrentTime + 3600000);
            ChatRoomSendLocal("Quick-AccessMenu2: 你觉得你的技能提高了（束缚/逃避）。 可以在信息面板中看到变化。");
        } else if (content.indexOf("/chess") == 0) {  //开始国际象棋，必须先指定难度（1 容易 - 2 普通 - 3 困难）。
            CollegeChessGameEndALT = function() {
                document.removeEventListener("chessOnMove", CollegeChessGameProgress);
                MiniGameEnded = true;
                ChessEndStatus = "Draw";
                ElementRemove("DivChessBoard");
                //CommonDynamicFunction(MiniGameReturnFunction + "()");
                CommonSetScreen("Online", "ChatRoom");
                CurrentScreen = "ChatRoom";
                ChatRoomDrawCharacter();
                ChatRoomMenuBuild();
                ChatRoomDrawBackground();
                ChatRoomLoad();
                ChatRoomClearAllElements();
            };
            CollegeChessGameStartALT = function(Difficulty) {
                CollegeChessDifficulty = parseInt(Difficulty);
                const playerStarts = Math.random() < 0.5;
                ChessCharacterWhite = playerStarts ? Player : CollegeChessOpponent;
                ChessCharacterBlack = playerStarts ? CollegeChessOpponent : Player;
                MiniGameStart("Chess", CollegeChessDifficulty, "CollegeChessGameEndALT");//以设定的难度开始给定的迷你游戏并保持
                document.addEventListener("chessOnMove", CollegeChessGameProgress);
            };
            var chessdifficulty = content.substring(6).trim();
            if (this.ChessOn == false || this.ChessOn == undefined) {
                ChessOn = true;
                CommonSetScreen("Room", "CollegeChess");
                CollegeChessGameStartALT(chessdifficulty);
                setTimeout(function() {
                    CommonSetScreen("Online", "ChatRoom");
                    //ElementPositionFix("DivChessBoard", null, -1000, 0);
                }, 2000);
            } else {
                ChessOn = false;
                CollegeChessGameEndALT();
            }
        } else if (content.indexOf("/clothes") == 0) {//改变衣服。
            var targetname = content.substring(8).trim();
            if (targetname == undefined) {
                targetname = Player.Name
            };
            var targetfinder = new RegExp('^' + targetname + '', 'i');
            var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
            if (target[0] == null) {
                var targetnumber = parseInt(targetname);
                target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);
            };
            if (target[0] != null) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "魔法激光使 " + target[0].Name + " 换装。"
                    }]
                });
                if ((target[0].Name == Player.Name) == false) {
                    ChatRoomTargetMemberNumber = target[0].MemberNumber;
                    consoleWhisper();
                };
                CharacterAppearanceFullRandom(target[0], true);
                ChatRoomCharacterUpdate(target[0]);
            }
        } else if (content.indexOf("/clubhelp") == 0) {//显示游戏的标准命令（以及可选的 BCE 命令）
            CommandPrintHelpFor(Commands);
        } else if ((content.indexOf("/collarremove") == 0) || (content.indexOf("/removecollar") == 0)) {//删除奴隶/所有者项圈。 也可以是：/removecollar。
            ServerSend("ChatRoomChat", {
                Content: "PlayerOwnerCollarRelease",
                Type: "Action",
                Dictionary: [{
                    Tag: "DestinationCharacterName",
                    Text: Player.Name,
                    MemberNumber: Player.MemberNumber
                }]
            });
            LogAdd("Released.Collar", "OwnerRule");
            InventoryRemove(Player, "ItemNeck");
            ChatRoomCharacterItemUpdate(Player, "ItemNeck");
        } else if (content.indexOf("/college") == 0) {//进入大学，绕过要求。
            ChatRoomSetLastChatRoom("");
            ServerSend("ChatRoomLeave", "");
            OnlineGameName = "";
            CommonSetScreen("Room", "CollegeEntrance");
            ChatRoomClearAllElements();
            CollegeEntranceIsWearingTennisClothes = function() {
                return true;
            }
            CollegeEntranceIsWearingCollegeClothes = function() {
                return true;
            }
            CollegeEntranceIsWearingTennisClothes = function() {
                return true;
            }
            CollegeEntranceCanGoTeacher = function() {
                return true;
            }
        } else if (content.indexOf("/colorchanger") == 0) {//获得颜色变化的动画。 使用将提供更多信息。

            if (content.includes("custom") || content.includes("set") || content.includes("select")) {
                ChatRoomSendLocal("Quick-AccessMenu2: 您有 5 秒钟的时间点击目标，选择区域。 如果成功，将返回。 如果没有，请重试。");
                setTimeout(function() {
                    if (CurrentCharacter.FocusGroup.Name) {
                        var RandomColor = null;
                        var ColorTargetNameCustom = CurrentCharacter;
                        if (ColorTargetNameCustom !== Player) {
                            ServerSend("ChatRoomChat", {
                                Content: "Quick-Access Menu2: " + Player.Name + " 在你身上使用了换色器。 如果这是不希望的，将她列入黑名单。",
                                Type: "Whisper",
                                Target: ColorTargetNameCustom.MemberNumber
                            })
                        };


                        if (this.ColorTarget1 == undefined) {
                            this.ColorTarget1 = CurrentCharacter.FocusGroup.Name
                        } else if (this.ColorTarget2 == undefined) {
                            this.ColorTarget2 = CurrentCharacter.FocusGroup.Name
                        } else if (this.ColorTarget3 == undefined) {
                            this.ColorTarget3 = CurrentCharacter.FocusGroup.Name
                        } else if (this.ColorTarget4 == undefined) {
                            this.ColorTarget4 = CurrentCharacter.FocusGroup.Name
                        } else if (this.ColorTarget5 == undefined) {
                            this.ColorTarget5 = CurrentCharacter.FocusGroup.Name
                        } else if (this.ColorTarget6 == undefined) {
                            this.ColorTarget6 = CurrentCharacter.FocusGroup.Name
                        } else if (this.ColorTarget7 == undefined) {
                            this.ColorTarget7 = CurrentCharacter.FocusGroup.Name
                        } else if (this.ColorTarget8 == undefined) {
                            this.ColorTarget8 = CurrentCharacter.FocusGroup.Name
                        } else if (this.ColorTarget9 == undefined) {
                            this.ColorTarget9 = CurrentCharacter.FocusGroup.Name
                        } else if (this.ColorTarget10 == undefined) {
                            this.ColorTarget10 = CurrentCharacter.FocusGroup.Name
                        }

                        ColorChangerCustom = function() {
                            setTimeout(function() {
                                ColorChangerCustom()
                            }, 1000);
                            RandomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                            if (this.ColorTarget1) {
                                CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget1);
                                ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget1);
                            };
                            if (this.ColorTarget2) {
                                CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget2);
                                ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget2);
                            };
                            if (this.ColorTarget3) {
                                CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget3);
                                ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget3);
                            };
                            if (this.ColorTarget4) {
                                CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget4);
                                ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget4);
                            };
                            if (this.ColorTarget5) {
                                CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget5);
                                ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget5);
                            };
                            if (this.ColorTarget6) {
                                CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget6);
                                ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget6);
                            };
                            if (this.ColorTarget7) {
                                CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget7);
                                ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget7);
                            };
                            if (this.ColorTarget8) {
                                CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget8);
                                ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget8);
                            };
                            if (this.ColorTarget9) {
                                CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget9);
                                ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget9);
                            };
                            if (this.ColorTarget510) {
                                CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget10);
                                ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget10);
                            };
                        };
                        ColorChangerCustom();
                        DialogLeave();
                    }
                }, 5000);
            } else if (content.includes("eyes")) {
                ChatRoomSendLocal("Quick-AccessMenu2: 您有 5 秒钟的时间点击目标，选择区域。 如果成功，将返回。 如果没有，请重试。");
                setTimeout(function() {
                    if (CurrentCharacter) {
                        var ColorTargetNameEyes = CurrentCharacter;
                        ColorChangerEyes = function() {
                            setTimeout(function() {
                                ColorChangerEyes()
                            }, 1000);
                            var RandomColor = null;
                            RandomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                            InventoryGet(ColorTargetNameEyes, "Eyes").Color = RandomColor
                            InventoryGet(ColorTargetNameEyes, "Eyes2").Color = RandomColor
                            ChatRoomCharacterItemUpdate(ColorTargetNameEyes, "Eyes");
                            ChatRoomCharacterItemUpdate(ColorTargetNameEyes, "Eyes2");
                        };
                        ColorChangerEyes();
                        DialogLeave();
                        if (ColorTargetNameEyes !== Player) {
                            ServerSend("ChatRoomChat", {
                                Content: "Quick-Access Menu2: " + Player.Name + " 在你身上使用了换色器。 如果这是不希望的，将她列入黑名单。",
                                Type: "Whisper",
                                Target: ColorTargetNameEyes.MemberNumber
                            })
                        };
                    }
                }, 5000);
            } else if (content.includes("hair")) {
                ChatRoomSendLocal("Quick-AccessMenu2: 您有 5 秒钟的时间点击目标，选择区域。 如果成功，将返回。 如果没有，请重试。");
                setTimeout(function() {
                    if (CurrentCharacter) {
                        var ColorTargetNameHair = CurrentCharacter;
                        ColorChangerHair = function() {
                            setTimeout(function() {
                                ColorChangerHair()
                            }, 1000);
                            var RandomColor = null;
                            RandomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                            InventoryGet(ColorTargetNameHair, "HairFront").Color = RandomColor
                            InventoryGet(ColorTargetNameHair, "HairBack").Color = RandomColor
                            ChatRoomCharacterItemUpdate(ColorTargetNameHair, "HairFront");
                            ChatRoomCharacterItemUpdate(ColorTargetNameHair, "HairBack");
                        };
                        ColorChangerHair();
                        DialogLeave();
                        if (ColorTargetNameHair !== Player) {
                            ServerSend("ChatRoomChat", {
                                Content: "Quick-Access Menu2: " + Player.Name + " 在你身上使用了换色器。 如果这是不希望的，将她列入黑名单。",
                                Type: "Whisper",
                                Target: ColorTargetNameHair.MemberNumber
                            })
                        };
                    }
                }, 5000);
            } else if (content.includes("stop") || content.includes("reset")) {
                ColorChangerCustom = function() {};
                ColorChangerEyes = function() {};
                ColorChangerHair = function() {};
                this.ColorTarget1 = undefined;
                this.ColorTarget2 = undefined;
                this.ColorTarget3 = undefined;
                this.ColorTarget4 = undefined;
                this.ColorTarget5 = undefined;
                this.ColorTarget6 = undefined;
                this.ColorTarget7 = undefined;
                this.ColorTarget8 = undefined;
                this.ColorTarget9 = undefined;
                this.ColorTarget10 = undefined;
                this.ColorTargetNameCustom = undefined;
            } else if (content.endsWith("/colorchanger")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: 换色器命令：\n" +
                    "要预先选择，存在两个选项，请键入： <b>/colorchanger hair</b> or <b>/colorchanger eyes</b>\n" +
                    "要手动选择区域，请键入：<b>/colorchanger set</b> or <b>/colorchanger select</b> or <b>/colorchanger custom</b>\n" +
                    "手动选择一次只能针对10个区域，\n" +
                    "然后需要重置以重用，键入： <b>/colorchanger stop</b> or <b>/colorchanger reset</b>\n" +
                    "一次只能激活 1 个目标"
                );
            }
        } else if (content.indexOf("/cum") == 0) {//引起高潮。
            ActivityOrgasmRuined = false;
            ActivityOrgasmStart(Player);
        } else if (content.indexOf("/diaper") == 0) { //玩尿布（ABDL 游戏）。 使用将提供更多信息。
            if (content.includes("change1")) {
                var stringChange1 = content;
                var stringChange2 = stringChange1.split(/[ ,]+/);
                var targetname = stringChange2[2];
                if (targetname == undefined) {
                    targetname = Player.Name
                };
                var targetfinder = new RegExp('^' + targetname + '', 'i');
                var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
                if (target[0] == null) {
                    var targetnumber = parseInt(targetname);
                    target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);
                };
                if (target[0] != null) {
                    if ((target[0].Name == Player.Name) == false) {
                        ServerSend("ChatRoomChat", {
                            Content: "Quick-Access Menu2: " + Player.Name + " 将更换您的普通尿布并允许您使用 /diaper change1 命令。",
                            Type: "Whisper",
                            Target: target[0].MemberNumber
                        })
                    };
                    refreshDiaper("panties");
                }
            } else if (content.includes("change2")) {
                var stringChange1 = content;
                var stringChange2 = stringChange1.split(/[ ,]+/);
                var targetname = stringChange2[2];
                if (targetname == undefined) {
                    targetname = Player.Name
                };
                var targetfinder = new RegExp('^' + targetname + '', 'i');
                var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
                if (target[0] == null) {
                    var targetnumber = parseInt(targetname);
                    target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);
                };
                if (target[0] != null) {
                    if ((target[0].Name == Player.Name) == false) {
                        ServerSend("ChatRoomChat", {
                            Content: "Quick-Access Menu2: " + Player.Name + " 将更换您的贞操尿布并允许您使用 /diaper change2 命令。",
                            Type: "Whisper",
                            Target: target[0].MemberNumber
                        })
                    };
                    refreshDiaper("chastity");
                }
            } else if (content.includes("change3")) {
                var stringChange1 = content;
                var stringChange2 = stringChange1.split(/[ ,]+/);
                var targetname = stringChange2[2];
                if (targetname == undefined) {
                    targetname = Player.Name
                };
                var targetfinder = new RegExp('^' + targetname + '', 'i');
                var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
                if (target[0] == null) {
                    var targetnumber = parseInt(targetname);
                    target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);
                };
                if (target[0] != null) {
                    if ((target[0].Name == Player.Name) == false) {
                        ServerSend("ChatRoomChat", {
                            Content: "Quick-Access Menu2: " + Player.Name + " 将更换您所有的尿布，并允许您使用 /diaper change3 命令。",
                            Type: "Whisper",
                            Target: target[0].MemberNumber
                        })
                    };
                    refreshDiaper("both");
                }
            } else if (content.includes("setdesperation")) {
                var stringSet1 = content;
                var stringSet2 = stringSet1.split(/[ ,]+/);
                var setchange = stringSet2[2];
                diaperDefaultValues.desperationLevel = setchange;
                ChatRoomSendLocal("Quick-AccessMenu2: 你的绝望程度已经改变。");
            } else if (content.includes("setmesschance")) {
                var stringSet1 = content;
                var stringSet2 = stringSet1.split(/[ ,]+/);
                var setchange = stringSet2[2];
                diaperDefaultValues.messChance = setchange;
                ChatRoomSendLocal("Quick-AccessMenu2: 你弄脏尿布的机会已经改变。");
            } else if (content.includes("setmess1")) {
                if (InventoryGet(Player, "Panties") != null) {
                    if (InventoryGet(Player, "Panties").Asset.Name == "BulkyDiaper" || InventoryGet(Player, "Panties").Asset.Name === "PoofyDiaper") {
                        var stringSet1 = content;
                        var stringSet2 = stringSet1.split(/[ ,]+/);
                        var setchange = stringSet2[2];
                        if (setchange < diaperDefaultValues.wetLevelInner) {
                            diaperDefaultValues.messLevelInner = setchange;
                            ChatRoomSendLocal("Quick-AccessMenu2: 更改了普通尿布的混乱程度。");
                        }
                    }
                }
            } else if (content.includes("setmess2")) {
                if (InventoryGet(Player, "ItemPelvis") != null) {
                    if (InventoryGet(Player, "ItemPelvis").Asset.Name == "BulkyDiaper" || InventoryGet(Player, "ItemPelvis").Asset.Name === "PoofyDiaper") {
                        var stringSet1 = content;
                        var stringSet2 = stringSet1.split(/[ ,]+/);
                        var setchange = stringSet2[2];
                        if (setchange < diaperDefaultValues.wetLevelOuter) {
                            diaperDefaultValues.messLevelOuter = setchange;
                            ChatRoomSendLocal("Quick-AccessMenu2: 更改了贞操尿布的混乱程度。");
                        }
                    }
                }
            } else if (content.includes("setregression")) {
                var stringSet1 = content;
                var stringSet2 = stringSet1.split(/[ ,]+/);
                var setchange = stringSet2[2];
                diaperDefaultValues.regressionLevel = setchange;
                ChatRoomSendLocal("Quick-AccessMenu2: 你的回归水平已经改变。");
            } else if (content.includes("settimer")) {
                var stringSet1 = content;
                var stringSet2 = stringSet1.split(/[ ,]+/);
                var setchange = stringSet2[2];
                diaperDefaultValues.baseTimer = setchange;
                ChatRoomSendLocal("Quick-AccessMenu2: 您的湿/脏计时器已更改。");
            } else if (content.includes("setwetchance")) {
                var stringSet1 = content;
                var stringSet2 = stringSet1.split(/[ ,]+/);
                var setchange = stringSet2[2];
                diaperDefaultValues.wetChance = setchange;
                ChatRoomSendLocal("Quick-AccessMenu2: 您弄湿尿布的机会已更改。");
            } else if (content.includes("setwet1")) {
                if (InventoryGet(Player, "Panties") != null) {
                    if (InventoryGet(Player, "Panties").Asset.Name == "BulkyDiaper" || InventoryGet(Player, "Panties").Asset.Name === "PoofyDiaper") {
                        var stringSet1 = content;
                        var stringSet2 = stringSet1.split(/[ ,]+/);
                        var setchange = stringSet2[2];
                        if (setchange > diaperDefaultValues.messLevelInner) {
                            diaperDefaultValues.wetLevelInner = setchange;
                            ChatRoomSendLocal("Quick-AccessMenu2: 你的普通纸尿裤的湿润度已更改。");
                        }
                    }
                }
            } else if (content.includes("setwet2")) {
                if (InventoryGet(Player, "ItemPelvis") != null) {
                    if (InventoryGet(Player, "ItemPelvis").Asset.Name == "BulkyDiaper" || InventoryGet(Player, "ItemPelvis").Asset.Name === "PoofyDiaper") {
                        var stringSet1 = content;
                        var stringSet2 = stringSet1.split(/[ ,]+/);
                        var setchange = stringSet2[2];
                        if (setchange > diaperDefaultValues.messLevelOuter) {
                            diaperDefaultValues.wetLevelOuter = setchange;
                            ChatRoomSendLocal("Quick-AccessMenu2: 你的贞操尿布的湿润度已经改变。");
                        }
                    }
                }
            } else if (content.includes("start")) {
                diaperWetter();
            } else if (content.includes("stop")) {
                stopWetting();
            } else if (content.includes("tick")) {
                diaperTick();
            } else if (content.endsWith("/diaper")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: 尿布命令必须包含一个动作。\n" +
                    "您需要穿一层或两层尿布（仅限笨重和蓬松版）\n" +
                    "<b>/diaper start</b> 启用脚本\n" +
                    "<b>/diaper stop</b> 禁用脚本\n" +
                    "<b>/diaper tick</b> 强制勾选\n" +
                    " \n" +
                    "要获得新的干净尿布：\n" +
                    "<b>/diaper change1</b> (target) 普通纸尿裤\n" +
                    "<b>/diaper change2</b> (target)贞操尿布\n" +
                    "<b>/diaper change3</b> (target) 两个尿布\n" +
                    " \n" +
                    "自定义（在使用 /diaper start 之前）：\n" +
                    "使用 <b>/diaper custom</b> 获取详细信息"
                );
            } else if (content.includes("custom")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: 尿布定制（在使用 /diaper start 之前）：\n" +
                    "<b>/diaper setdesperation</b> (value between 0 and 3) 绝望程度，通常通过在你身上使用奶瓶来控制\n" +
                    "<b>/diaper setregression</b> (value between 0 and 3) 用于回归水平，通常通过长时间饮用婴儿奶粉来控制\n" +
                    "<b>/diaper settimer</b> (minutes) 更改湿/脏计时器\n" +
                    "<b>/diaper setwetchance</b> (value between 0 and 1) 控制你多久弄湿一次\n" +
                    "<b>/diaper setmesschance</b> (value between 0 and 1) 控制你弄脏的频率。 确保这低于wetchance。\n" +
                    "<b>/diaper setwet1</b> (value)* 普通纸尿裤的湿润度\n" +
                    "<b>/diaper setwet2</b> (value)* 贞洁纸尿裤湿润度\n" +
                    "<b>/diaper setmess1</b> (value)* 普通纸尿裤的混乱程度\n" +
                    "<b>/diaper setmess2</b> (value)* 贞洁纸尿裤的混乱程度\n" +
                    "* = 0 到 2 之间的值"
                );
            }
        } else if (content.indexOf("/difficulty") == 0) {//改变游戏难度。
            if (content.endsWith("/difficulty")) {
                PreferenceDifficultyLevel = Player.Difficulty.Level;
            } else {
                PreferenceDifficultyLevel = content.substring(11).trim() * 1;
            }
            if ((PreferenceDifficultyLevel > -1) && (PreferenceDifficultyLevel < 4) && (PreferenceDifficultyLevel != Player.Difficulty.Level)) {
                PreferenceDifficultyAccept = true;
                Player.Difficulty = {
                    LastChange: CurrentTime,
                    Level: PreferenceDifficultyLevel
                };
                ServerSend("AccountDifficulty", PreferenceDifficultyLevel);
                PreferenceInitPlayer();
                LoginDifficulty(true);
            }
        } else if (content.indexOf("/erase") == 0) {//删除聊天记录。
            ElementRemove("TextAreaChatLog");
        } else if (content.indexOf("/font") == 0) {//更改 BC 中的字体。 使用将提供更多信息。
            if (content.endsWith("/font")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: 字体命令必须是后跟一个字体编号和字体的大小编号。\n" +
                    "自动重新登录后效果将在聊天中可见。\n" +
                    "支持的字体： 0 Arial - 1 Times New Roman\n" +
                    "2 Papyrus - 3 Comic Sans - 4 Impact\n" +
                    "5 Helvetica Neue - 6 Verdana - 7 Century Gothic\n" +
                    "8 Georgia - 9 Courrier New - 10 Copperplate\n" +
                    "大小 0 Small - 1 Medium - 2 Large"
                );
            } else {
                var stringFont1 = content;
                var stringFont2 = stringFont1.split(/[ ,]+/);
                var font = stringFont2[1];
                var size = stringFont2[2];
                Player.GraphicsSettings.Font = PreferenceGraphicsFontList[font];
                CommonGetFont.clearCache();
                CommonGetFontName.clearCache();
                DrawingGetTextSize.clearCache();
                if ((size > -1) && (size < 3)) {
                    Player.ChatSettings.FontSize = PreferenceChatFontSizeList[size];
                    ChatRoomRefreshFontSize();
                }
                ServerAccountUpdate.QueueData({
                    ChatSettings: Player.ChatSettings
                });
                ServerAccountUpdate.QueueData({
                    GraphicsSettings: Player.GraphicsSettings
                });
                ServerSocket.close();
                ServerSocket.open();
            }
        } else if (content.indexOf("/frlist") == 0) {//允许在 15 秒内访问好友列表，其中包含指向其他房间的可点击链接。
            setTimeout(function() {
                ChatRoomSpace = "";
                CommonSetScreen("Online", "ChatSearch");
                ChatRoomSetLastChatRoom("");
                document.getElementById("InputChat").style.display = "none";
                document.getElementById("TextAreaChatLog").style.display = "none";
                ElementRemove("InputSearch");
                FriendListReturn = {
                    Screen: CurrentScreen,
                    Module: CurrentModule
                };
                CommonSetScreen("Character", "FriendList");
            }, 3000);
            setTimeout(function() {
                FriendListExit();
                CommonSetScreen("Online", "ChatRoom");
                document.getElementById("InputChat").style.display = "inline";
                document.getElementById("TextAreaChatLog").style.display = "inline";
            }, 15000);
        } else if (content.indexOf("/gagheavy") == 0) {//像严重堵嘴一样说话。也可以: /gv
            content = SpeechGarbleByGagLevel(6, content.substring(9).trim());
            ServerSend("ChatRoomChat", {
                "Content": content,
                "Type": "Chat"
            });
        } else if (content.indexOf("/gaglight") == 0) { //像堵嘴一样说话。 也可以: /gl
            content = SpeechGarbleByGagLevel(1, content.substring(9).trim());
            ServerSend("ChatRoomChat", {
                "Content": content,
                "Type": "Chat"
            });
        } else if (content.indexOf("/gagtalk") == 0) {//解码/不解码被堵嘴人的谈话。
            if (this.GagTalkOff == undefined | this.GagTalkOff == false) {
                SpeechGagLevelLookup = {};
                GagTalkOff = true;
                ChatRoomSendLocal("Quick-AccessMenu2: 堵嘴关掉了。");
            } else {
                SpeechGagLevelLookup = {
                    GagTotal4: 20,
                    GagTotal3: 16,
                    GagTotal2: 12,
                    GagTotal: 8,
                    GagVeryHeavy: 7,
                    GagHeavy: 6,
                    GagMedium: 5,
                    GagNormal: 4,
                    GagEasy: 3,
                    GagLight: 2,
                    GagVeryLight: 1,
                };
                GagTalkOff = false;
                ChatRoomSendLocal("Quick-AccessMenu2: 堵嘴打开了。");
            }
        } else if (content.indexOf("/game") == 0) {//启动一个小游戏。 使用将提供更多信息。
            if (content.endsWith("/game")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: 游戏命令必须包含一个小游戏。\n" +
                    "可用的小游戏：\n" +
                    "carrot, cleaning, dojo, drinks, hurdle, kidnap, puppy,\n" +
                    "rhythm, training, whippony.\n" +
                    "Training is the trainer version of the hurdle game.\n" +
                    "You need to click on the maid in the Maid Quarters for the cleaning, drinks and rhythm games."
                );
            } else {
                ServerSend("ChatRoomLeave", "");
                ChatRoomSetLastChatRoom("");
                OnlineGameName = "";
                ChatRoomClearAllElements();
                if (content.includes("carrot")) {
                    CommonSetScreen("Room", "Stable");
                    StableDressPonyStart();
                    StableWearPonyEquipment(Player);
                    MiniGameStart("HorseWalk", "Carrot", "StablePonyEnd");
                } else if (content.includes("cleaning")) {
                    CommonSetScreen("Room", "MaidQuarters");
                    GameType = "MaidCleaning";
                    MaidQuartersMaid.Stage = "400";
                } else if (content.includes("dojo")) {
                    CommonSetScreen("Room", "Introduction");
                    IntroductionJobStart("SubDojo", 0)
                    IntroductionJobDojoStart();
                } else if (content.includes("drinks")) {
                    CommonSetScreen("Room", "MaidQuarters");
                    GameType = "MaidDrinks";
                    MaidQuartersMaid.Stage = "200";
                } else if (content.includes("hurdle")) {
                    CommonSetScreen("Room", "Stable");
                    StableDressPonyStart();
                    StableWearPonyEquipment(Player);
                    MiniGameStart("HorseWalk", "Hurdle", "StablePonyEnd");
                } else if (content.includes("kidnap")) {
                    CommonSetScreen("Room", "Introduction");
                    IntroductionJobStart("DomKidnap", 0)
                    IntroductionJobBouncerStart();
                } else if (content.includes("puppy")) {
                    CommonSetScreen("Room", "Introduction");
                    IntroductionJobStart("DomPuppy", 0)
                    IntroductionJobPuppyStart();
                } else if (content.includes("rhythm")) {
                    CommonSetScreen("Room", "MaidQuarters");
                    GameType = "RhythmGame";
                    MaidQuartersMaid.Stage = "500";
                } else if (content.includes("training")) {
                    CommonSetScreen("Room", "Stable");
                    StablePlayerAppearance = Player.Appearance.slice();
                    StableWearTrainerEquipment(Player);
                    MiniGameStart("HorseWalk", "HurdleTraining", "StableTrainerEnd");
                } else if (content.includes("whippony")) {
                    CommonSetScreen("Room", "Stable");
                    StablePlayerAppearance = Player.Appearance.slice();
                    StableWearTrainerEquipment(Player);
                    MiniGameStart("HorseWalk", "WhipPony", "StableTrainerEnd");
                }
            }
        } else if (content.indexOf("/ggts") == 0) {//在指定时间内进入 ggts 庇护培训。 级别必须在 1 到 6 之间。
            if (content.endsWith("/ggts")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: /ggts命令必须包含时间和等级\n" +
                    "级别必须在 1 到 6 之间。"
                );
            } else {
                var stringGgts1 = content;
                var stringGgts2 = stringGgts1.split(/[ ,]+/);
                var minutes = stringGgts2[1];
                var level = stringGgts2[2];
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + Player.Name + " 被两个女仆抓住，关进了收容,所用好女孩训练系统 " + level + "级训练" + minutes + "分钟。"
                    }]
                });
                DialogLentLockpicks = false;
                ChatRoomClearAllElements();
                ServerSend("ChatRoomLeave", "");
                CharacterDeleteAllOnline();
                AsylumGGTSLock(minutes, TextGet("GGTSIntro"));
                AsylumGGTSStartLevel(level);
            }
        } else if (content.indexOf("/giveeverything") == 0) {//获得所有项目。
            ChatRoomSendLocal("Quick-AccessMenu2: 现在添加了游戏中的所有物品。");
            AssetFemale3DCG.forEach(group => group.Asset.forEach(item => InventoryAdd(Player, item.Name, group.Group)));
            ServerPlayerInventorySync();
        } else if (content.indexOf("/gl") == 0) {
            content = SpeechGarbleByGagLevel(1, content.substring(3).trim());
            ServerSend("ChatRoomChat", {
                "Content": content,
                "Type": "Chat"
            });
        } else if (content.indexOf("/gv") == 0) {
            content = SpeechGarbleByGagLevel(6, content.substring(3).trim());
            ServerSend("ChatRoomChat", {
                "Content": content,
                "Type": "Chat"
            });
        } else if (content.indexOf("/hiddenmessages") == 0) {//切换显示游戏隐藏的消息。
            if (this.HiddenMessagesOn == undefined || this.HiddenMessagesOn == false) {
                HiddenMessagesOn = true;
                ChatRoomSendLocal("Quick-AccessMenu2: 隐藏的信息被揭露。");
                (typeof oldChatRoomMessage !== 'undefined') && (ChatRoomMessage = oldChatRoomMessage); //reset
                newChatRoomMessage = function(data) {
                    if (data.Type == "Hidden") {
                        ChatRoomMessage({
                            Content: "隐藏的信息:" + data.Content,
                            Type: "LocalMessage",
                            Sender: Player.MemberNumber
                        });
                    }
                    oldChatRoomMessage(data);
                }
                window.oldChatRoomMessage = ChatRoomMessage;
                window.ChatRoomMessage = newChatRoomMessage;
            } else {
                HiddenMessagesOn = false;
                ChatRoomSendLocal("Quick-AccessMenu2: 隐藏的信息被隐藏。");
                (typeof oldChatRoomMessage !== 'undefined') && (ChatRoomMessage = oldChatRoomMessage); //reset
                newChatRoomMessage = function(data) {}
            }
        } else if (content.indexOf("/keydeposit") == 0) {//将您的钥匙安全地保存在钥匙保管出中。
            var hours = content.substring(11).trim();
            ServerSend("ChatRoomChat", {
                Content: "Beep",
                Type: "Action",
                Dictionary: [{
                    Tag: "Beep",
                    Text: "" + Player.Name + " 钥匙现在可以在钥匙保管处安全保存 " + hours + " 小时。"
                }]
            });
            CellDepositKeys(hours);
        } else if (content.indexOf("/kinkydungeon") == 0) {
            ArcadeKinkyDungeonEnd = function() {
                CommonSetScreen("Online", "ChatRoom");
                document.getElementById("InputChat").style.display = "inline";
                document.getElementById("TextAreaChatLog").style.display = "inline";
            }; //rewrite end to return to chatroom and restore chat
            ArcadeDeviousChallengeAllowed = function() {} //null to always allow
            if (content.includes("devious")) {
                if (this.DeviousOn == undefined || this.DeviousOn == false) {
                    DeviousOn = true;
                    ArcadeDeviousChallenge = true;
                    LogAdd("DeviousChallenge", "Arcade", 1, true);
                    ChatRoomSendLocal("Quick-AccessMenu2: 启用了狡猾的挑战");
                } else {
                    DeviousOn = false;
                    ArcadeDeviousChallenge = false;
                    LogDelete("DeviousChallenge", "Arcade", true);
                    ChatRoomSendLocal("Quick-AccessMenu2: 狡猾的挑战已禁用");
                }
            } else if (content.includes("cheat")) {
                ChatRoomSendLocal("Quick-AccessMenu2: 如果第一次未加载作弊，请退出并重新启动。");
                ArcadeRun();//运行街机室并绘制角色。
                ArcadeKinkyDungeonStart(ReputationGet("Gaming"));//开始古怪的地牢游戏
                document.getElementById("InputChat").style.display = "none";
                document.getElementById("TextAreaChatLog").style.display = "none";
                setTimeout(function() {
                    KinkyDungeonRedKeys += 999;
                    //KinkyDungeonGreenKeys += 999;
                    KinkyDungeonBlueKeys += 999;
                    KinkyDungeonLockpicks += 999;
                    KinkyDungeonAddGold(999999);
                    //KinkyDungeonEnchantedBlades += 999;
                    //KinkyDungeonNormalBlades += 999;
                    KinkyDungeonStatManaLowRegen = 20;
                    KinkyDungeonStatManaRegen = 15;
                    KinkyDungeonStatStaminaRegen = 10;
                    var KinkyDungeonMysticSeals = 999;
                    var KinkyDungeonSpells = [{
                            name: "Firebolt",
                            exhaustion: 1,
                            components: ["Arms"],
                            level: 1,
                            type: "bolt",
                            projectile: true,
                            onhit: "",
                            power: 3,
                            delay: 0,
                            range: 50,
                            damage: "fire",
                            speed: 1,
                            playerEffect: {
                                name: "Damage"
                            }
                        },
                        {
                            name: "Snare",
                            exhaustion: 1,
                            components: ["Legs"],
                            level: 1,
                            type: "inert",
                            projectile: false,
                            onhit: "lingering",
                            lifetime: -1,
                            time: 10,
                            delay: 3,
                            range: 1,
                            damage: "stun",
                            playerEffect: {
                                name: "MagicRope",
                                time: 3
                            }
                        },
                        {
                            name: "Fireball",
                            exhaustion: 6,
                            components: ["Arms"],
                            level: 4,
                            type: "bolt",
                            projectile: true,
                            onhit: "aoe",
                            power: 4,
                            delay: 0,
                            range: 50,
                            aoe: 1.5,
                            size: 3,
                            lifetime: 1,
                            damage: "fire",
                            speed: 1,
                            playerEffect: {
                                name: "Damage"
                            }
                        }, // 向每回合移动 1 格的方向投掷火球
                        {
                            name: "Icebolt",
                            exhaustion: 4,
                            components: ["Arms"],
                            level: 2,
                            type: "bolt",
                            projectile: true,
                            onhit: "",
                            time: 4,
                            power: 2,
                            delay: 0,
                            range: 50,
                            damage: "ice",
                            speed: 2,
                            playerEffect: {
                                name: "Damage"
                            }
                        },
                        {
                            name: "Electrify",
                            exhaustion: 2,
                            components: ["Arms"],
                            level: 2,
                            type: "inert",
                            projectile: false,
                            onhit: "aoe",
                            power: 5,
                            time: 1,
                            delay: 1,
                            range: 4,
                            size: 1,
                            aoe: 0.75,
                            lifetime: 1,
                            damage: "electric",
                            playerEffect: {
                                name: "Shock",
                                time: 1
                            }
                        },
                        {
                            name: "Shield",
                            exhaustion: 3,
                            components: ["Legs"],
                            level: 1,
                            type: "inert",
                            projectile: false,
                            block: 5,
                            onhit: "",
                            power: 0,
                            delay: 1,
                            range: 1.5,
                            size: 1,
                            damage: ""
                        },
                        {
                            name: "GreaterShield",
                            exhaustion: 4,
                            components: ["Legs"],
                            level: 2,
                            type: "inert",
                            projectile: false,
                            block: 10,
                            onhit: "",
                            power: 0,
                            delay: 5,
                            range: 2,
                            size: 1,
                            damage: ""
                        },
                        {
                            name: "Slime",
                            exhaustion: 5,
                            components: ["Legs"],
                            level: 3,
                            type: "inert",
                            projectile: false,
                            onhit: "lingering",
                            time: 2,
                            delay: 1,
                            range: 4,
                            size: 3,
                            aoe: 2,
                            lifetime: 3,
                            lifetimeHitBonus: 12,
                            damage: "stun",
                            playerEffect: {
                                name: "SlimeTrap",
                                time: 3
                            }
                        },
                        {
                            name: "ChainBolt",
                            exhaustion: 1,
                            components: ["Arms"],
                            level: 1,
                            type: "bolt",
                            projectile: true,
                            onhit: "",
                            time: 1,
                            power: 2,
                            delay: 0,
                            range: 50,
                            damage: "chain",
                            speed: 2,
                            playerEffect: {
                                name: "SingleChain",
                                time: 1
                            }
                        },
                        {
                            name: "SlimeBall",
                            exhaustion: 4,
                            components: ["Arms"],
                            level: 2,
                            type: "bolt",
                            projectile: true,
                            onhit: "",
                            time: 2,
                            power: 2.5,
                            delay: 0,
                            range: 50,
                            damage: "glue",
                            speed: 1,
                            trailLifetime: 10,
                            trailDamage: "stun",
                            trail: "lingering",
                            trailChance: 1.0,
                            playerEffect: {
                                name: "SlimeTrap",
                                time: 3
                            }
                        },
                        {
                            name: "Leap",
                            exhaustion: 5,
                            components: ["Legs"],
                            level: 2,
                            type: "inert",
                            projectile: false,
                            onhit: "teleport",
                            delay: 1,
                            lifetime: 1,
                            range: 5,
                            damage: ""
                        },
                        {
                            name: "Blink",
                            exhaustion: 3,
                            components: ["Verbal"],
                            level: 2,
                            type: "inert",
                            projectile: false,
                            onhit: "teleport",
                            delay: 3,
                            range: 3,
                            damage: ""
                        },
                        {
                            name: "Flash",
                            exhaustion: 3,
                            components: ["Verbal"],
                            level: 2,
                            type: "inert",
                            projectile: false,
                            onhit: "aoe",
                            time: 3,
                            delay: 1,
                            range: 2.5,
                            size: 3,
                            aoe: 1.5,
                            lifetime: 1,
                            damage: "stun",
                            playerEffect: {
                                name: "Blind",
                                time: 3
                            }
                        },
                        {
                            name: "GreaterFlash",
                            exhaustion: 5,
                            components: ["Verbal"],
                            level: 3,
                            type: "inert",
                            projectile: false,
                            onhit: "aoe",
                            time: 4,
                            delay: 1,
                            range: 2.5,
                            size: 5,
                            aoe: 2.5,
                            lifetime: 1,
                            damage: "stun",
                            playerEffect: {
                                name: "Blind",
                                time: 3
                            }
                        },
                        {
                            name: "FocusedFlash",
                            exhaustion: 6,
                            components: ["Verbal"],
                            level: 4,
                            type: "inert",
                            projectile: false,
                            onhit: "aoe",
                            time: 12,
                            delay: 2,
                            range: 2.5,
                            size: 3,
                            aoe: 1.5,
                            lifetime: 1,
                            damage: "stun",
                            playerEffect: {
                                name: "Blind",
                                time: 12
                            }
                        },
                        {
                            name: "Shroud",
                            exhaustion: 4,
                            components: ["Verbal"],
                            level: 3,
                            type: "inert",
                            projectile: false,
                            buffs: [{
                                type: "Evasion",
                                power: 0.75,
                                player: true,
                                enemies: true,
                                tags: ["darkness"],
                                range: 1.5
                            }],
                            onhit: "",
                            aoe: 1.5,
                            power: 0,
                            delay: 8,
                            range: 4,
                            size: 3,
                            damage: ""
                        },
                    ];
                }, 5000);
            } else if (content.endsWith("/kinkydungeon")) {
                ArcadeRun();
                ArcadeKinkyDungeonStart(ReputationChange("Gaming"));
                document.getElementById("InputChat").style.display = "none";
                document.getElementById("TextAreaChatLog").style.display = "none";
                setTimeout(function() {
                    KinkyDungeonRedKeys += 0;
                    //KinkyDungeonGreenKeys += 0;
                    KinkyDungeonBlueKeys += 0;
                    KinkyDungeonLockpicks += 0;
                    KinkyDungeonAddGold(0);
                    //KinkyDungeonEnchantedBlades += 0;
                    //KinkyDungeonNormalBlades += 0;
                    var KinkyDungeonMysticSeals = 0;
                    var KinkyDungeonSpells = [];
                }, 5000);
            }
        } else if (content.indexOf("/leave") == 0) {//离开房间，即使被阻止。
            ChatRoomSetLastChatRoom("");
            ServerSend("ChatRoomLeave", "");
            CommonSetScreen("Online", "ChatSearch");
            ChatRoomClearAllElements();
            OnlineGameName = "";
        } else if (content.indexOf("/lock") == 0) {//在所有可锁定的项目上添加锁。 使用 /help lock 获取更多信息。
            var stringLock1 = content;
            var stringLock2 = stringLock1.split(/[ ,]+/);
            var lk = stringLock2[2];
            if (lk == 1) {
                Lock = "MetalPadlock";
            } else if (lk == 2) {
                Lock = "ExclusivePadlock";
            } else if (lk == 3) {
                Lock = "IntricatePadlock";
            } else if (lk == 4) {
                Lock = "HighSecurityPadlock";
            } else if (lk == 5) {
                Lock = "PandoraPadlock";
            } else if (lk == 6) {
                Lock = "MistressPadlock";
            } else if (lk == 7) {
                Lock = "LoversPadlock";
            } else if (lk == 8) {
                Lock = "OwnerPadlock";
            } else if (lk == 9) {
                Lock = "TimerPadlock";
                var removeitem = stringLock2[3];
            } else if (lk == 10) {
                Lock = "CombinationPadlock";
                var code = stringLock2[3];
            } else if (lk == 11) {
                Lock = "SafewordPadlock";
                var PS = /^[A-Z]+$/;
                var pw = stringLock2[3].toUpperCase();
                var removeitem = stringLock2[4];
            } else if (lk == 12) {
                Lock = "PasswordPadlock";
                var PS = /^[A-Z]+$/;
                var pw = stringLock2[3].toUpperCase();
                var removeitem = stringLock2[4];
            } else if (lk == 13) {
                Lock = "MistressTimerPadlock";
                var minutes = stringLock2[3];
                time = (minutes - 5);
                var hidetimer = stringLock2[4];
                var enableinput = stringLock2[5];
                var removeitem = stringLock2[6];
            } else if (lk == 14) {
                Lock = "LoversTimerPadlock";
                var minutes = stringLock2[3];
                time = (minutes - 5);
                var hidetimer = stringLock2[4];
                var enableinput = stringLock2[5];
                var removeitem = stringLock2[6];
            } else if (lk == 15) {
                Lock = "OwnerTimerPadlock";
                var minutes = stringLock2[3];
                time = (minutes - 5);
                var hidetimer = stringLock2[4];
                var enableinput = stringLock2[5];
                var removeitem = stringLock2[6];
            } else if (lk == 16) {
                Lock = "TimerPasswordPadlock";
                var PS = /^[A-Z]+$/;
                var pw = stringLock2[3].toUpperCase();
                var minutes = stringLock2[4];
                time = (minutes - 5);
                var hidetimer = stringLock2[5];
                var enableinput = stringLock2[6];
                var removeitem = stringLock2[7];
            }
            var targetname = stringLock2[1];
            var targetfinder = new RegExp('^' + targetname + '', 'i');
            var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
            if (target[0] == null) {
                var targetnumber = parseInt(targetname);
                target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);
            };
            if (target[0] != null) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "魔法激光使 " + target[0].Name + " 身体出现锁。"
                    }]
                });
                if ((target[0].Name == Player.Name) == false) {
                    ChatRoomTargetMemberNumber = target[0].MemberNumber;
                    consoleWhisper();
                };
                mn = Player.MemberNumber;
                if ((InventoryGet(target[0], "ItemAddon") != null) && (InventoryGet(target[0], "ItemAddon").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemAddon").Property != null) && (InventoryGet(target[0], "ItemAddon").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemAddon").Property == null)) {
                        InventoryLock(target[0], "ItemAddon", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemAddon").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemAddon").Property.RemoveTimer = InventoryGet(target[0], "ItemAddon").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemAddon").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemAddon").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemAddon").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemAddon").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemArms") != null) && (InventoryGet(target[0], "ItemArms").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemArms").Property != null) && (InventoryGet(target[0], "ItemArms").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemArms").Property == null)) {
                        InventoryLock(target[0], "ItemArms", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemArms").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemArms").Property.RemoveTimer = InventoryGet(target[0], "ItemArms").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemArms").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemArms").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemArms").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemArms").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemBoots") != null) && (InventoryGet(target[0], "ItemBoots").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemBoots").Property != null) && (InventoryGet(target[0], "ItemBoots").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemBoots").Property == null)) {
                        InventoryLock(target[0], "ItemBoots", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemBoots").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemBoots").Property.RemoveTimer = InventoryGet(target[0], "ItemBoots").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemBoots").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemBoots").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemBoots").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemBoots").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemBreast") != null) && (InventoryGet(target[0], "ItemBreast").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemBreast").Property != null) && (InventoryGet(target[0], "ItemBreast").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemBreast").Property == null)) {
                        InventoryLock(target[0], "ItemBreast", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemBreast").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemBreast").Property.RemoveTimer = InventoryGet(target[0], "ItemBreast").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemBreast").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemBreast").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemBreast").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemBreast").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemButt") != null) && (InventoryGet(target[0], "ItemButt").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemButt").Property != null) && (InventoryGet(target[0], "ItemButt").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemButt").Property == null)) {
                        InventoryLock(target[0], "ItemButt", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemButt").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemButt").Property.RemoveTimer = InventoryGet(target[0], "ItemButt").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemButt").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemButt").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemButt").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemButt").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemDevices") != null) && (InventoryGet(target[0], "ItemDevices").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemDevices").Property != null) && (InventoryGet(target[0], "ItemDevices").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemDevices").Property == null)) {
                        InventoryLock(target[0], "ItemDevices", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemDevices").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemDevices").Property.RemoveTimer = InventoryGet(target[0], "ItemDevices").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemDevices").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemDevices").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemDevices").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemDevices").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemEars") != null) && (InventoryGet(target[0], "ItemEars").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemEars").Property != null) && (InventoryGet(target[0], "ItemEars").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemEars").Property == null)) {
                        InventoryLock(target[0], "ItemEars", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemEars").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemEars").Property.RemoveTimer = InventoryGet(target[0], "ItemEars").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemEars").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemEars").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemEars").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemEars").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemFeet") != null) && (InventoryGet(target[0], "ItemFeet").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemFeet").Property != null) && (InventoryGet(target[0], "ItemFeet").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemFeet").Property == null)) {
                        InventoryLock(target[0], "ItemFeet", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemFeet").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemFeet").Property.RemoveTimer = InventoryGet(target[0], "ItemFeet").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemFeet").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemFeet").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemFeet").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemFeet").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemHands") != null) && (InventoryGet(target[0], "ItemHands").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemHands").Property != null) && (InventoryGet(target[0], "ItemHands").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemHands").Property == null)) {
                        InventoryLock(target[0], "ItemHands", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemHands").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemHands").Property.RemoveTimer = InventoryGet(target[0], "ItemHands").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemHands").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemHands").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemHands").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemHands").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemHead") != null) && (InventoryGet(target[0], "ItemHead").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemHead").Property != null) && (InventoryGet(target[0], "ItemHead").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemHead").Property == null)) {
                        InventoryLock(target[0], "ItemHead", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemHead").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemHead").Property.RemoveTimer = InventoryGet(target[0], "ItemHead").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemHead").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemHead").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemHead").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemHead").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemHood") != null) && (InventoryGet(target[0], "ItemHood").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemHood").Property != null) && (InventoryGet(target[0], "ItemHood").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemHood").Property == null)) {
                        InventoryLock(target[0], "ItemHood", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemHood").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemHood").Property.RemoveTimer = InventoryGet(target[0], "ItemHood").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemHood").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemHood").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemHood").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemHood").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemLegs") != null) && (InventoryGet(target[0], "ItemLegs").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemLegs").Property != null) && (InventoryGet(target[0], "ItemLegs").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemLegs").Property == null)) {
                        InventoryLock(target[0], "ItemLegs", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemLegs").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemLegs").Property.RemoveTimer = InventoryGet(target[0], "ItemLegs").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemLegs").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemLegs").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemLegs").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemLegs").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemMisc") != null) && (InventoryGet(target[0], "ItemMisc").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemMisc").Property != null) && (InventoryGet(target[0], "ItemMisc").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemMisc").Property == null)) {
                        InventoryLock(target[0], "ItemMisc", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemMisc").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemMisc").Property.RemoveTimer = InventoryGet(target[0], "ItemMisc").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemMisc").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemMisc").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemMisc").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemMisc").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemMouth") != null) && (InventoryGet(target[0], "ItemMouth").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemMouth").Property != null) && (InventoryGet(target[0], "ItemMouth").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemMouth").Property == null)) {
                        InventoryLock(target[0], "ItemMouth", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemMouth").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemMouth").Property.RemoveTimer = InventoryGet(target[0], "ItemMouth").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemMouth").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemMouth").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemMouth").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemMouth").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemMouth2") != null) && (InventoryGet(target[0], "ItemMouth2").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemMouth2").Property != null) && (InventoryGet(target[0], "ItemMouth2").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemMouth2").Property == null)) {
                        InventoryLock(target[0], "ItemMouth2", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemMouth2").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemMouth2").Property.RemoveTimer = InventoryGet(target[0], "ItemMouth2").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemMouth2").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemMouth2").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemMouth2").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemMouth2").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemMouth3") != null) && (InventoryGet(target[0], "ItemMouth3").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemMouth3").Property != null) && (InventoryGet(target[0], "ItemMouth3").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemMouth3").Property == null)) {
                        InventoryLock(target[0], "ItemMouth3", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemMouth3").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemMouth3").Property.RemoveTimer = InventoryGet(target[0], "ItemMouth3").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemMouth3").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemMouth3").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemMouth3").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemMouth3").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemNeck") != null) && (InventoryGet(target[0], "ItemNeck").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemNeck").Property != null) && (InventoryGet(target[0], "ItemNeck").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemNeck").Property == null)) {
                        InventoryLock(target[0], "ItemNeck", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemNeck").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemNeck").Property.RemoveTimer = InventoryGet(target[0], "ItemNeck").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemNeck").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemNek").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemNeck").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemNeck").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemNeckAccessories") != null) && (InventoryGet(target[0], "ItemNeckAccessories").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemNeckAccessories").Property != null) && (InventoryGet(target[0], "ItemNeckAccessories").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemNeckAccessories").Property == null)) {
                        InventoryLock(target[0], "ItemNeckAccessories", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemNeckAccessories").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemNeckAccessories").Property.RemoveTimer = InventoryGet(target[0], "ItemNeckAccessories").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemNeckAccessories").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemNeckAccessories").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemNeckAccessories").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemNeckAccessories").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemNeckRestraints") != null) && (InventoryGet(target[0], "ItemNeckRestraints").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemNeckRestraints").Property != null) && (InventoryGet(target[0], "ItemNeckRestraints").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemNeckRestraints").Property == null)) {
                        InventoryLock(target[0], "ItemNeckRestraints", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemNeckRestraints").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemNeckRestraints").Property.RemoveTimer = InventoryGet(target[0], "ItemNeckRestraints").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemNeckRestraints").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemNeckRestraints").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemNeckRestraints").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemNeckRestraints").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemNipples") != null) && (InventoryGet(target[0], "ItemNipples").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemNipples").Property != null) && (InventoryGet(target[0], "ItemNipples").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemNipples").Property == null)) {
                        InventoryLock(target[0], "ItemNipples", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemNipples").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemNipples").Property.RemoveTimer = InventoryGet(target[0], "ItemNipples").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemNipples").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemNipples").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemNipples").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemNipples").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemNipplesPiercings") != null) && (InventoryGet(target[0], "ItemNipplesPiercings").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemNipplesPiercings").Property != null) && (InventoryGet(target[0], "ItemNipplesPiercings").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemNipplesPiercings").Property == null)) {
                        InventoryLock(target[0], "ItemNipplesPiercings", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemNipplesPiercings").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemNipplesPiercings").Property.RemoveTimer = InventoryGet(target[0], "ItemNipplesPiercings").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemNipplesPiercings").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemNipplesPiercings").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemNipplesPiercings").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemNipplesPiercings").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemNose") != null) && (InventoryGet(target[0], "ItemNose").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemNose").Property != null) && (InventoryGet(target[0], "ItemNose").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemNose").Property == null)) {
                        InventoryLock(target[0], "ItemNose", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemNose").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemNose").Property.RemoveTimer = InventoryGet(target[0], "ItemNose").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemNose").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemNose").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemNose").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemNose").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemPelvis") != null) && (InventoryGet(target[0], "ItemPelvis").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemPelvis").Property != null) && (InventoryGet(target[0], "ItemPelvis").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemPelvis").Property == null)) {
                        InventoryLock(target[0], "ItemPelvis", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemPelvis").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemPelvis").Property.RemoveTimer = InventoryGet(target[0], "ItemPelvis").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemPelvis").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemPelvis").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemPelvis").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemPelvis").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemTorso") != null) && (InventoryGet(target[0], "ItemTorso").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemTorso").Property != null) && (InventoryGet(target[0], "ItemTorso").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemTorso").Property == null)) {
                        InventoryLock(target[0], "ItemTorso", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemTorso").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemTorso").Property.RemoveTimer = InventoryGet(target[0], "ItemTorso").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemTorso").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemTorso").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemTorso").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemTorso").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemVulva") != null) && (InventoryGet(target[0], "ItemVulva").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemVulva").Property != null) && (InventoryGet(target[0], "ItemVulva").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemVulva").Property == null)) {
                        InventoryLock(target[0], "ItemVulva", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemVulva").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemVulva").Property.RemoveTimer = InventoryGet(target[0], "ItemVulva").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemVulva").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemVulva").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemVulva").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemVulva").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemVulvaPiercings") != null) && (InventoryGet(target[0], "ItemVulvaPiercings").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemVulvaPiercings").Property != null) && (InventoryGet(target[0], "ItemVulvaPiercings").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemVulvaPiercings").Property == null)) {
                        InventoryLock(target[0], "ItemVulvaPiercings", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemVulvaPiercings").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemVulvaPiercings").Property.RemoveTimer = InventoryGet(target[0], "ItemVulvaPiercings").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemVulvaPiercings").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemVulvaPiercings").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemVulvaPiercings").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemVulvaPiercings").Property.Password = pw;
                        }
                    }
                }
                ChatRoomCharacterUpdate(target[0]);
            }
        } else if (content.indexOf("/login") == 0) {//登录一个新帐户。
            var stringLogin1 = content;
            var stringLogin2 = stringLogin1.split(/[ ,]+/);
            this.LoginName = SpeechGarbleByGagLevel(6, stringLogin2[1]);
            this.LoginPassword = SpeechGarbleByGagLevel(6, stringLogin2[2]);
            ServerSocket.close();
            ServerSocket.open();
            ServerSend("AccountLogin", {
                AccountName: stringLogin2[1],
                Password: stringLogin2[2]
            });
            setTimeout(function() {
                ChatRoomClearAllElements();
            }, 3000);
        } else if (content.indexOf("/maxstatistics") == 0) {//获得最大金钱声望技能。
            Player.Money = 9999999999;
            SkillChange("Infiltration", 10);
            SkillChange("SelfBondage", 10);
            SkillChange("Willpower", 10);
            SkillChange("Evasion", 10);
            SkillChange("Bondage", 10);
            SkillChange("Dressage", 10);
            SkillChange("LockPicking", 10)
            ReputationChange("Gaming", 100);
            ReputationChange("Gambling", 100);
            ReputationChange("LARP", 100);
            ReputationChange("Maid", 100);
            ReputationChange("ABDL", 100);
            //ReputationChange("Nurse", 100);
            GameLARPLevelProgress(50); //可能需要修复
            CheatAllow = true;
            LogAdd("BondageCollege", "Import");
            LogAdd("KidnapSophie", "Sarah");
            ChatRoomSendLocal("Quick-AccessMenu2: 修改成功，有些东西必须手动设置。 请参阅 /roleplay 和 /rolequit 命令。");
        } else if (content.indexOf("/moaner") == 0) {//性欲和刺激时呻吟。 使用将提供更多信息。
            if (content.endsWith("/moaner")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: 使用 moaner 命令可以执行以下操作：\n" +
                    "<b>/moaner on</b> = 启用呻吟\n" +
                    "<b>/moaner off</b> = 禁用呻吟\n" +
                    "<b>/moaner profile</b> (profilename) =  selects a moaner profile. Without profilename, access to moaner profile help\n" +
                    "<b>/moaner status</b> = 显示当前的moaner状态\n" +
                    "<b>/moaner verbose</b> (on/off) = 启用/禁用详细模式\n" +
                    " \n" +
                    "您还可以通过以下方式启用/禁用 Moaner 的某些部分：\n" +
                    "<b>/moaner orgasm</b> (on/off): 高潮时呻吟\n" +
                    "<b>/moaner spank</b> (on/off): 被打屁股时呻吟\n" +
                    "<b>/moaner talk</b> (on/off): 如果有振动，说话时会呻吟\n" +
                    "<b>/moaner vibe</b> (on/off): moans when vibes settings changed"
                );
            } else {
                var stringMoan1 = content;
                var stringMoan2 = stringMoan1.split(/[ ,]+/);
                var feature = stringMoan2[1];
                if ((feature == "on") || (feature == "off")) {
                    scriptControl(feature);
                    M_MOANER_saveControls();
                } else {
                    var commande = stringMoan2[2];
                    if (feature == "orgasm") {
                        orgasmControl(commande);
                        M_MOANER_saveControls();
                    } else if (feature == "profile") {
                        if (commande == null) {
                            profilesList();
                        } else if (commande != null) {
                            M_MOANER_activerProfile(commande);
                            M_MOANER_saveControls();
                        }
                        showM_MOANER_profileStatus();
                    } else if (feature == "spank") {
                        spankControl(commande);
                        M_MOANER_saveControls();
                    } else if (feature == "status") {
                        showStatus();
                    } else if (feature == "talk") {
                        talkControl(commande);
                        M_MOANER_saveControls();
                    } else if (feature == "verbose") {
                        verboseControl(commande);
                        M_MOANER_saveControls();
                    } else if (feature == "vibe") {
                        vibeControl(commande);
                        M_MOANER_saveControls();
                    }
                }
            }
        } else if (content.indexOf("/money") == 0) {//修改金钱数量
            Player.Money = content.substring(6);
            ServerPlayerSync();
            ChatRoomSendLocal("Quick-AccessMenu2: 修改金钱数量为 " + Player.Money + " 。");
        } else if (content.indexOf("/naked") == 0) {//去除衣服
            var targetname = content.substring(6).trim();
            if (targetname == undefined) {
                targetname = Player.Name
            };
            var targetfinder = new RegExp('^' + targetname + '', 'i');
            var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
            if (target[0] == null) {
                var targetnumber = parseInt(targetname);
                target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);              
            };
            if (target[0] != null) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "魔法激光使 " + target[0].Name + " 身上的衣服消失。"
                    }]
                });
                if ((target[0].Name == Player.Name) == false) {
                    ChatRoomTargetMemberNumber = target[0].MemberNumber;
                    consoleWhisper();
                };
                CharacterNaked(target[0]);
                ChatRoomCharacterUpdate(target[0]);
            }
        } else if (content.indexOf("/name") == 0) {//选择一个临时的新昵称。
            var NewName = content.substring(5).trim();
            var LS = /[/\p{L}\p{N}\p{Z}'-]/gu;
            var tmpname = Player.Nickname;
            if ((NewName.length <= 20) && (NewName.match(LS))) {
                if (NewName != tmpname) {
                    ServerSend("ChatRoomChat", {
                        Content: "Beep",
                        Type: "Action",
                        Dictionary: [{
                            Tag: "Beep",
                            Text: "" + tmpname + " is now known as " + NewName + "."
                        }]
                    });
                }
                Player.Nickname = NewName;
                var tmpname = NewName;
            }
        } else if (content.indexOf("/outfit") == 0) {//恢复/保存/加载装备。 使用将提供更多信息。
            if (content.includes("load1")) {
                ChatRoomSendLocal("Quick-AccessMenu2: 你有 5 秒的时间来点击目标。 如果成功，将加载该服装。 如果没有，请重试。");
                setTimeout(function() {
                    CurrentCharacter.Appearance = this.savedoutfit1.slice(0);
                    CharacterRefresh(CurrentCharacter);
                    ChatRoomCharacterUpdate(CurrentCharacter);
                    DialogLeave();
                }, 5000);
            } else if (content.includes("load2")) {
                ChatRoomSendLocal("Quick-AccessMenu2: 你有 5 秒的时间来点击目标。 如果成功，将加载该服装。 如果没有，请重试。");
                setTimeout(function() {
                    CurrentCharacter.Appearance = savedoutfit2.slice(0);
                    CharacterRefresh(CurrentCharacter);
                    ChatRoomCharacterUpdate(CurrentCharacter);
                    DialogLeave();
                }, 5000);
            } else if (content.includes("load3")) {
                ChatRoomSendLocal("Quick-AccessMenu2: 你有 5 秒的时间来点击目标。 如果成功，将加载该服装。 如果没有，请重试。");
                setTimeout(function() {
                    CurrentCharacter.Appearance = savedoutfit3.slice(0);
                    CharacterRefresh(CurrentCharacter);
                    ChatRoomCharacterUpdate(CurrentCharacter);
                    DialogLeave();
                }, 5000);
            } else if (content.includes("reset") || content.includes("revert") || content.includes("restore")) {
                Player.Appearance = ChatSearchSafewordAppearance.slice(0);
                // Player.ActivePose = ChatSearchSafewordPose; should not be needed
                CharacterRefresh(Player);
                ChatRoomCharacterUpdate(Player);
            } else if (content.includes("save1")) {
                ChatRoomSendLocal("Quick-AccessMenu2: 您有 5 秒钟的时间点击目标。 如果成功，服装将被保存。 如果没有，请重试。");
                setTimeout(function() {
                    this.savedoutfit1 = CurrentCharacter.Appearance.slice(0);
                    DialogLeave();
                }, 5000);
            } else if (content.includes("save2")) {
                ChatRoomSendLocal("Quick-AccessMenu2: 您有 5 秒钟的时间点击目标。 如果成功，服装将被保存。 如果没有，请重试。");
                setTimeout(function() {
                    this.savedoutfit2 = CurrentCharacter.Appearance.slice(0);
                    DialogLeave();
                }, 5000);
            } else if (content.includes("save3")) {
                ChatRoomSendLocal("Quick-AccessMenu2: 您有 5 秒钟的时间点击目标。 如果成功，服装将被保存。 如果没有，请重试。");
                setTimeout(function() {
                    this.savedoutfit3 = CurrentCharacter.Appearance.slice(0);
                    DialogLeave();
                }, 5000);
            } else if (content.endsWith("/outfit")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: 服装命令选项：\n" +
                    "要将您的装备恢复到进入房间之前的状态，请输入：<b>/outfit reset</b> 或 <b>/outfit restore</b> 或 <b>/outfit revert</b>\n" +
                    "使用 <b>/outfit save1</b> 或 <b>/outfit save2</b> 或 <b>/outfit save3</b> 可以保存三套服装\n" +
                    "要加载已保存的服装，请输入：<b>/outfit load1</b> 或 <b>/outfit load2</b> 或 <b>/outfit load3</b>\n" +
                    "您将有 5 秒钟的时间点击目标。 如果保存/加载不成功，请重试\n" +
                    "重新登陆后失效。"
                );
            }
        } else if (content.indexOf("/patreoncheats") == 0) {
            CheatValidate = function() {
                return true;
            };
            CheatAllow = true;
            CheatRun();
            document.getElementById("InputChat").style.display = "none";
            document.getElementById("TextAreaChatLog").style.display = "none";
            CommonSetScreen("Character", "Cheat");
            CheatExit = function() { //rewrite cheattexit to return to chatroom
                CheatExport();
                CommonSetScreen("Online", "ChatRoom");
                document.getElementById("InputChat").style.display = "inline";
                document.getElementById("TextAreaChatLog").style.display = "inline";
            }
        } else if (content.indexOf("/pet") == 0) {//变成一个完全约束宠物女孩。
            var targetname = content.substring(4).trim();
            if (targetname == undefined) {
                targetname = Player.Name
            };
            var targetfinder = new RegExp('^' + targetname + '', 'i');
            var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
            if (target[0] == null) {
                    var targetnumber = parseInt(targetname);
                    target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);
            };
            if (target[0] != null) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + target[0].Name + " 变成了可爱的宠物少女。"
                    }]
                });
                if ((target[0].Name == Player.Name) == false) {
                    ChatRoomTargetMemberNumber = target[0].MemberNumber;
                    consoleWhisper();
                };
                CharacterNaked(target[0]);
                InventoryWearRandom(target[0], "ItemArms", 8, null, false, true, ["ArmbinderJacket", "BitchSuit", "BitchSuitExposed", "Bolero", "BoxTieArmbinder", "Chains", "FullLatexSuit", "HempRope", "InflatableStraightLeotard", "LatexBoxtieLeotard", "LatexButterflyLeotard", "LatexSleevelessLeotard", "LeatherStraitJacket", "StraitLeotard", "StrictLeatherPetCrawler"], true);
                InventoryWearRandom(target[0], "HairAccessory1", 8, null, false, true, ["Antennae", "BunnyEars1", "BunnyEars2", "CowHorns", "Ears1", "Ears2", "ElfEars", "FoxEars1", "FoxEars2", "FoxEars3", "KittenEars1", "KittenEars2", "MouseEars1", "MouseEars2", "PonyEars1", "PuppyEars1", "PuppyEars2", "RaccoonEars1", "WolfEars1", "WolfEars2"], true);
                InventoryWearRandom(target[0], "TailStraps", 8, null, false, true, ["CowtailStrap", "FoxTailsStrap", "FoxTailStrap1", "FoxTailStrap2", "HorseTailStrap", "HorseTailStrap1", "KittenTailStrap1", "KittenTailStrap2", "MouseTailStrap1", "MouseTailStrap2", "PuppyTailStrap", "PuppyTailStrap1", "RaccoonStrap", "WolfTailStrap1", "WolfTailStrap2", "WolfTailStrap3"], true);
                if (InventoryGet(target[0], "ItemMouth") == null) InventoryWearRandom(target[0], "ItemMouth", 8);
                if (InventoryGet(target[0], "ItemNeck") == null) InventoryWearRandom(target[0], "ItemNeck", 8);
                if (InventoryGet(target[0], "ItemNeckRestraints") == null) InventoryWear(target[0], "ChainLeash", "ItemNeckRestraints", null, 8);
                CharacterSetActivePose(target[0], "Kneel", true);
                CharacterRefresh(target[0]);
                ChatRoomCharacterUpdate(target[0]);
            };
        } else if (content.indexOf("/pose2") == 0) {//改变任何玩家的姿势。 使用将提供更多信息。
            if (content.endsWith("/pose2")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: pose2 命令后面必须跟一个姿势和一个目标。\n" +
                    " \n" +
                    "可用姿势：\n" +
                    "armsfree, belly, boxtied, cuffed, elbowtied, exercise,\n" +
                    "kneel1, kneel2, legsclosed, legsopen, pet,\n" +
                    "sleep, spreadarms1, spreadarms2, spreadeagle1\n" +
                    "spreadeagle2, spreadlegs, stand, suspension,\n" +
                    "tapedhands. 只对你自己可用： jump, roof.\n" +
                    "使用 <b>/pose2 reset</b> (target) 回到默认姿势。\n" + 
		            "如果启用了 BCE，请在 /pose2 reset 重置失败时仅对自己使用 <b>/pose baseupper</b>。"
                );
            } else {
                var stringPose1 = content;
                var stringPose2 = stringPose1.split(/[ ,]+/);
                var targetname = stringPose2[2];
                if (targetname == undefined) {
                    targetname = Player.Name
                };
                var targetfinder = new RegExp('^' + targetname + '', 'i');
                var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
                if (target[0] == null) {
                    var targetnumber = parseInt(targetname);
                    target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);
                };
                if (target[0] != null) {
                    //poses for any player
                    if (content.includes("armsfree")) {
                        CharacterSetActivePose(target[0], "BaseUpper");
                        ChatRoomCharacterUpdate(target[0]);
                        if (target[0].Name == Player.Name) {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 放松她的手臂。"
                                }]
                            });
                        } else {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 让 " + target[0].Name + " 放松她的手臂。"
                                }]
                            });
                        }
                    } else if (content.includes("belly")) {//驷马
                        CharacterSetActivePose(target[0], "Hogtied");
                        ChatRoomCharacterUpdate(target[0]);
                        if (target[0].Name == Player.Name) {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 变换驷马姿势"
                                }]
                            });
                        } else {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 强制 " + target[0].Name + " 驷马姿势"
                                }]
                            });
                        }
                    } else if (content.includes("boxtied")) {
                        CharacterSetActivePose(target[0], "BackBoxTie");
                        ChatRoomCharacterUpdate(target[0]);
                        if (target[0].Name == Player.Name) {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 把手臂放在她背后。"
                                }]
                            });
                        } else {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 强制 " + target[0].Name + " 将手臂放在背后。"
                                }]
                            });
                        }
                    } else if (content.includes("cuffed")) {
                        CharacterSetActivePose(target[0], "BackCuffs");
                        ChatRoomCharacterUpdate(target[0]);
                        if (target[0].Name == Player.Name) {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 像戴上手铐一样伸出双臂。"
                                }]
                            });
                        } else {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 强制 " + target[0].Name + " 像戴上手铐一样伸出手臂。"
                                }]
                            });
                        }
                    } else if (content.includes("elbowtied")) {
                        CharacterSetActivePose(target[0], "BackElbowTouch");
                        ChatRoomCharacterUpdate(target[0]);
                        if (target[0].Name == Player.Name) {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 将手臂放在背后，肘部几乎接触。"
                                }]
                            });
                        } else {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 强制 " + target[0].Name + " 将手臂放在背后，肘部几乎接触。"
                                }]
                            });
                        }
                    } else if (content.includes("kneel1")) {
                        CharacterSetActivePose(target[0], "Kneel");
                        ChatRoomCharacterUpdate(target[0]);
                        if (target[0].Name == Player.Name) {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 跪了下来。"
                                }]
                            });
                        } else {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 帮助 " + target[0].Name + " 跪下。"
                                }]
                            });
                        }
                    } else if (content.includes("kneel2")) {
                        CharacterSetActivePose(target[0], "KneelingSpread");
                        ChatRoomCharacterUpdate(target[0]);
                        if (target[0].Name == Player.Name) {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 跪下来，张开双腿。"
                                }]
                            });
                        } else {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 帮助 " + target[0].Name + " 跪下，迫使她的双腿张开。"
                                }]
                            });
                        }
                    } else if (content.includes("legsclosed")) {
                        CharacterSetActivePose(target[0], "LegsClosed");
                        ChatRoomCharacterUpdate(target[0]);
                        if (target[0].Name == Player.Name) {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 站起来并合上她的腿。"
                                }]
                            });
                        } else {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 帮助 " + target[0].Name + " 站起来并合上她的腿。"
                                }]
                            });
                        }
                    } else if (content.includes("legsopen")) {
                        CharacterSetActivePose(target[0], "LegsOpen");
                        ChatRoomCharacterUpdate(target[0]);
                        if (target[0].Name == Player.Name) {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 正常站立。"
                                }]
                            });
                        } else {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 帮助 " + target[0].Name + " 正常站立。"
                                }]
                            });
                        }
                    } else if (content.includes("pet")) {
                        CharacterSetActivePose(target[0], "AllFours");
                        ChatRoomCharacterUpdate(target[0]);
                        if (target[0].Name == Player.Name) {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 像宠物一样四肢着地。"
                                }]
                            });
                        } else {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 强制 " + target[0].Name + " 像宠物一样四肢着地。"
                                }]
                            });
                        }
                    } else if (content.includes("spreadarms1")) {
                        CharacterSetActivePose(target[0], "Yoked");
                        ChatRoomCharacterUpdate(target[0]);
                        if (target[0].Name == Player.Name) {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 举起她的手。"
                                }]
                            });
                        } else {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 帮助 " + target[0].Name + " 举起她的手。"
                                }]
                            });
                        }
                    } else if (content.includes("spreadarms2")) {
                        CharacterSetActivePose(target[0], "OverTheHead");
                        ChatRoomCharacterUpdate(target[0]);
                        if (target[0].Name == Player.Name) {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 将双手举过头顶。"
                                }]
                            });
                        } else {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 强制 " + target[0].Name + " 将双手举过头顶。"
                                }]
                            });
                        }
                    } else if (content.includes("spreadeagle1")) {
                        CharacterSetActivePose(target[0], "Yoked");
                        CharacterSetActivePose(target[0], "Spread");
                        ChatRoomCharacterUpdate(target[0]);
                        if (target[0].Name == Player.Name) {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 举起双手并张开双腿。"
                                }]
                            });
                        } else {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 强制 " + target[0].Name + " 举起双手并张开双腿。"
                                }]
                            });
                        }
                    } else if (content.includes("spreadeagle2")) {
                        CharacterSetActivePose(target[0], "OverTheHead");
                        CharacterSetActivePose(target[0], "Spread");
                        ChatRoomCharacterUpdate(target[0]);
                        if (target[0].Name == Player.Name) {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 将双手举过头顶并张开双腿。"
                                }]
                            });
                        } else {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 强制 " + target[0].Name + " 将双手举过头顶并张开双腿。"
                                }]
                            });
                        }
                    } else if (content.includes("spreadlegs")) {
                        CharacterSetActivePose(target[0], "Spread");
                        ChatRoomCharacterUpdate(target[0]);
                        if (target[0].Name == Player.Name) {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 张开她的腿。"
                                }]
                            });
                        } else {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 强制 " + target[0].Name + " 张开她的腿。"
                                }]
                            });
                        }
                    } else if (content.includes("stand")) {
                        CharacterSetActivePose(target[0], null);
                        ChatRoomCharacterUpdate(target[0]);
                        if (target[0].Name == Player.Name) {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 起立。"
                                }]
                            });
                        } else {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 帮助 " + target[0].Name + " 起立。"
                                }]
                            });
                        }
                    } else if (content.includes("suspension")) {
                        CharacterSetActivePose(target[0], "Suspension");
                        ChatRoomCharacterUpdate(target[0]);
                        if (target[0].Name == Player.Name) {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 以杂技姿势悬挂。"
                                }]
                            });
                        } else {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 强制 " + target[0].Name + " 以杂技姿势悬挂。"
                                }]
                            });
                        }
                    } else if (content.includes("tapedhands")) {
                        CharacterSetActivePose(target[0], "TapedHands");
                        ChatRoomCharacterUpdate(target[0]);
                        if (target[0].Name == Player.Name) {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 伸出她的手臂，就像她的手被胶带缠住一样。"
                                }]
                            });
                        } else {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " 强制 " + target[0].Name + " 伸出的手臂，就像她的手被胶带缠住一样。"
                                }]
                            });
                        }
                    }
                    //poses only on yourself
                    else if (content.includes("jump")) {
                        ServerSend("ChatRoomChat", {
                            Content: "Beep",
                            Type: "Action",
                            Dictionary: [{
                                Tag: "Beep",
                                Text: "" + Player.Name + " 高兴得跳起来。"
                            }]
                        });
                        CharacterSetActivePose(Player, null);
                        setTimeout(function() {
                            InventoryGet(Player, "Emoticon").Property.OverrideHeight = {
                                Height: 150
                            };
                            CharacterSetActivePose(Player, "Kneel");
                            CurrentScreen === "ChatRoom" ?
                                ChatRoomCharacterUpdate(Player) :
                                CharacterRefresh(Player);
                        }, 1000);
                        setTimeout(function() {
                            InventoryGet(Player, "Emoticon").Property.OverrideHeight = undefined;
                            CharacterSetActivePose(Player, null);
                            CurrentScreen === "ChatRoom" ?
                                ChatRoomCharacterUpdate(Player) :
                                CharacterRefresh(Player);
                        }, 2000);
                        setTimeout(function() {
                            InventoryGet(Player, "Emoticon").Property.OverrideHeight = {
                                Height: 150
                            };
                            CharacterSetActivePose(Player, "Kneel");
                            CurrentScreen === "ChatRoom" ?
                                ChatRoomCharacterUpdate(Player) :
                                CharacterRefresh(Player);
                        }, 3000);
                        setTimeout(function() {
                            CharacterSetActivePose(Player, null);
                            delete InventoryGet(Player, 'Emoticon').Property.OverrideHeight;
                            CurrentScreen === 'ChatRoom' ?
                                ChatRoomCharacterUpdate(Player) :
                                CharacterRefresh(Player);
                        }, 4000);
                    } else if (content.includes("roof")) {
                        ServerSend("ChatRoomChat", {
                            Content: "Beep",
                            Type: "Action",
                            Dictionary: [{
                                Tag: "Beep",
                                Text: "" + Player.Name + " 跳到天花板上。"
                            }]
                        });
                        CharacterSetFacialExpression(Player, "Emoticon", "Annoyed", 1);
                        CharacterSetActivePose(Player, null);
                        ChatRoomCharacterUpdate(Player);
                        setTimeout(function() {
                            CharacterSetActivePose(Player, "OverTheHead");
                            ChatRoomCharacterUpdate(Player);
                        }, 500);
                        setTimeout(function() {
                            InventoryGet(Player, "Emoticon").Property.OverrideHeight = {
                                Height: 250
                            };
                            CurrentScreen === "ChatRoom" ?
                                ChatRoomCharacterUpdate(Player) :
                                CharacterRefresh(Player);
                        }, 1000);
                        setTimeout(function() {
                            CharacterSetActivePose(Player, "Kneel");
                            ChatRoomCharacterUpdate(Player);
                        }, 2000);
                        setTimeout(function() {
                            CharacterSetActivePose(Player, "BaseUpper");
                            CharacterSetActivePose(Player, null);
                            CharacterSetActivePose(Player, ["Suspension", "Kneel"]);
                            InventoryGet(Player, "Emoticon").Property.OverrideHeight = {
                                Height: -300
                            };
                            CurrentScreen === "ChatRoom" ?
                                ChatRoomCharacterUpdate(Player) :
                                CharacterRefresh(Player);
                        }, 3000);
                    }
                    //exercises on any player
                    else if (content.includes("exercise")) {
                        var Region = undefined;
                        if (InventoryGet(target[0], "ItemButt") == null) {
                            InventoryWear(target[0], "AnalHook", "ItemButt", "#272727");
                            Region = "ItemButt";
                        } else if (InventoryGet(target[0], "ItemButt").Asset.Name == "AnalHook") {
                            Region = "ItemButt";
                        } else if (InventoryGet(target[0], "ItemTorso") == null) {
                            InventoryWear(target[0], "HempRopeHarness", "ItemTorso", "#272727");
                            InventoryGet(target[0], "ItemTorso").Property = {
                                Type: "Waist"
                            };
                            Region = "ItemTorso";
                        } else if (InventoryGet(target[0], "ItemTorso").Asset.Name == "HempRopeHarness") {
                            InventoryGet(target[0], "ItemTorso").Property = {
                                Type: "Waist"
                            };
                            Region = "ItemTorso";
                        } else if (InventoryGet(target[0], "ItemPelvis") == null) {
                            InventoryWear(target[0], "HempRope", "ItemPelvis", "#272727");
                            Region = "ItemPelvis";
                        } else if (InventoryGet(target[0], "ItemPelvis").Asset.Name == "HempRope") {
                            Region = "ItemPelvis";
                        } else {
                            ChatRoomMessage({
                                Content: "Quick-AccessMenu2.1: You're too heavily tied to excercise.",
                                Type: "LocalMessage",
                                Sender: Player.MemberNumber
                            })
                        };
                        if (target[0].Name == Player.Name) {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " makes her workout."
                                }]
                            });
                        } else {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + Player.Name + " helps " + target[0].Name + " to make her workout."
                                }]
                            });
                        }
                        CharacterSetActivePose(target[0], null);
                        ChatRoomCharacterUpdate(target[0]);
                        setTimeout(function() {
                            CharacterSetActivePose(target[0], "OverTheHead");
                            ChatRoomCharacterUpdate(target[0]);
                        }, 500);
                        setTimeout(function() {
                            target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
                            DialogExtendItem(InventoryGet(target[0], Region));
                            DialogFocusItem.Property.OverrideHeight = {
                                Height: 100
                            };
                            ChatRoomCharacterUpdate(target[0]);
                            DialogLeaveItemMenu();
                        }, 1000);
                        setTimeout(function() {
                            CharacterSetActivePose(target[0], "Kneel");
                        }, 2000);
                        setTimeout(function() {
                            CharacterSetActivePose(target[0], "Yoked");
                            target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
                            DialogExtendItem(InventoryGet(target[0], Region));
                            DialogFocusItem.Property.OverrideHeight = {
                                Height: 350
                            };
                            ChatRoomCharacterUpdate(target[0]);
                            DialogLeaveItemMenu();
                        }, 3000);
                        setTimeout(function() {
                            CharacterSetActivePose(target[0], "OverTheHead");
                            target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
                            DialogExtendItem(InventoryGet(target[0], Region));
                            DialogFocusItem.Property.OverrideHeight = {
                                Height: 100
                            };
                            ChatRoomCharacterUpdate(target[0]);
                            DialogLeaveItemMenu();
                        }, 4000);
                        setTimeout(function() {
                            CharacterSetActivePose(target[0], "Yoked");
                            target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
                            DialogExtendItem(InventoryGet(target[0], Region));
                            DialogFocusItem.Property.OverrideHeight = {
                                Height: 350
                            };
                            ChatRoomCharacterUpdate(target[0]);
                            DialogLeaveItemMenu();
                        }, 5000);
                        setTimeout(function() {
                            CharacterSetActivePose(target[0], "OverTheHead");
                            target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
                            DialogExtendItem(InventoryGet(target[0], Region));
                            DialogFocusItem.Property.OverrideHeight = {
                                Height: 100
                            };
                            ChatRoomCharacterUpdate(target[0]);
                            DialogLeaveItemMenu();
                        }, 6000);
                        setTimeout(function() {
                            CharacterSetActivePose(target[0], "Yoked");
                            target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
                            DialogExtendItem(InventoryGet(target[0], Region));
                            DialogFocusItem.Property.OverrideHeight = {
                                Height: 350
                            };
                            ChatRoomCharacterUpdate(target[0]);
                            DialogLeaveItemMenu();
                        }, 7000);
                        setTimeout(function() {
                            CharacterSetActivePose(target[0], "OverTheHead");
                            target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
                            DialogExtendItem(InventoryGet(target[0], Region));
                            DialogFocusItem.Property.OverrideHeight = {
                                Height: 100
                            };
                            ChatRoomCharacterUpdate(target[0]);
                            DialogLeaveItemMenu();
                        }, 8000);
                        setTimeout(function() {
                            CharacterSetActivePose(target[0], "Yoked");
                            target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
                            DialogExtendItem(InventoryGet(target[0], Region));
                            DialogFocusItem.Property.OverrideHeight = {
                                Height: 350
                            };
                            ChatRoomCharacterUpdate(target[0]);
                            DialogLeaveItemMenu();
                        }, 9000);
                        setTimeout(function() {
                            CharacterSetActivePose(target[0], "OverTheHead");
                            target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
                            DialogExtendItem(InventoryGet(target[0], Region));
                            DialogFocusItem.Property.OverrideHeight = {
                                Height: 100
                            };
                            ChatRoomCharacterUpdate(target[0]);
                            DialogLeaveItemMenu();
                        }, 10000);
                        setTimeout(function() {
                            CharacterSetActivePose(target[0], null);
                            target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
                            DialogExtendItem(InventoryGet(target[0], Region));
                            DialogFocusItem.Property.OverrideHeight = undefined;
                            ChatRoomCharacterUpdate(target[0]);
                            DialogLeaveItemMenu();
                        }, 10000);
                    }
                    //reset
                    else if (content.includes("reset")) {
                        CharacterSetActivePose(target[0], null);
                        delete InventoryGet(target[0], 'Emoticon').Property.OverrideHeight;
                        ChatRoomCharacterUpdate(target[0]);
                        CharacterRefresh(target[0]);
                    }
                }
            }
        } else if (content.indexOf("/prison") == 0) {//进入潘多拉监狱。 超过 60 分钟是可能的。
            var minutes = content.substring(7).trim();
            ServerSend("ChatRoomChat", {
                Content: "Beep",
                Type: "Action",
                Dictionary: [{
                    Tag: "Beep",
                    Text: "" + Player.Name + " 被两个女仆抓住，送到潘多拉监狱 " + minutes + " 分钟。"
                }]
            });
            DialogLentLockpicks = false;
            ChatRoomClearAllElements();
            ServerSend("ChatRoomLeave", "");
            CharacterDeleteAllOnline();
            PandoraBackground = "Pandora/Underground/Cell" + Math.floor(Math.random() * 7).toString();
            PandoraRestrainPlayer();
            PandoraPunishmentSentence(minutes);
            PandoraPunishmentStart();
        } else if (content.indexOf("/profile") == 0) {//可以直接访问聊天室中任何玩家的个人资料描述。
            var targetname = content.substring(8).trim();
            if (targetname == undefined) {
                targetname = Player.Name
            };
            var targetfinder = new RegExp('^' + targetname + '', 'i');
            var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
            if (target[0] == null) {
                var targetnumber = parseInt(targetname);
                target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);
            };
            if (target[0] != null) {
                InformationSheetLoadCharacter(target[0]);
                OnlineProfileRun();
                document.getElementById("InputChat").style.display = "none";
                document.getElementById("TextAreaChatLog").style.display = "none";
                CommonSetScreen("Character", "OnlineProfile");
            }
        } else if (content.indexOf("/randomize") == 0) {//添加随机约束和衣服
            var targetname = content.substring(10).trim();
            if (targetname == undefined) {
                targetname = Player.Name
            };
            var targetfinder = new RegExp('^' + targetname + '', 'i');
            var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
            if (target[0] == null) {
                var targetnumber = parseInt(targetname);
                target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);
            };
            if (target[0] != null) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "魔法激光在 " + target[0].Name + " 身体上施加随机衣服和约束。"
                    }]
                });
                if ((target[0].Name == Player.Name) == false) {
                    ChatRoomTargetMemberNumber = target[0].MemberNumber;
                    consoleWhisper();
                };
                CharacterNaked(target[0]);
                CharacterRandomUnderwear(target[0]);
                CharacterAppearanceFullRandom(target[0], true);
                CharacterFullRandomRestrain(target[0], "ALL");
                ChatRoomCharacterUpdate(target[0]);
            }
        } else if (content.indexOf("/release") == 0) {//删除所有约束。
            var targetname = content.substring(8).trim();
            if (targetname == undefined) {
                targetname = Player.Name
            };
            var targetfinder = new RegExp('^' + targetname + '', 'i');
            var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
            if (target[0] == null) {
                var targetnumber = parseInt(targetname);
                target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);
            };
            if (target[0] != null) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "魔法激光使 " + target[0].Name + " 身体上的约束消失。"
                    }]
                });
                if ((target[0].Name == Player.Name) == false) {
                    ChatRoomTargetMemberNumber = target[0].MemberNumber;
                    consoleWhisper();
                };
                CharacterRelease(target[0]);
                ChatRoomCharacterUpdate(target[0]);
            }
        } else if (content.indexOf("/relog") == 0) {//重新登录。
            ServerSocket.close();
            ServerSocket.open();
        } else if (content.indexOf("/reputation") == 0) {//改变声望。
            if (content.endsWith("/reputation")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: reputation 命令后面必须跟一个声望和一个等级。\n" +
                    "更改能够在你的个人资料中查看。\n" +
                    " \n" +
                    "可用声望：\n" +
                    "恋尿布, amplector, corporis, dominant, gambling,\n" +
                    "gaming, kidnap, larp, maid, maiestas, nurse,\n" +
                    "patient, submissive, vincula.\n" +
                    "级别必须介于 0 和 100 之间。"
                );
            } else {
                var stringReputation1 = content;
                var stringReputation2 = stringReputation1.split(/[ ,]+/);
                var reputation = stringReputation2[1];
                var level = stringReputation2[2];
                if (reputation == "恋尿布") {
                    DialogSetReputation("ABDL", level);
                } else if (reputation == "amplector") {
                    DialogSetReputation("HouseCorporis", 0);
                    DialogSetReputation("HouseMaiestas", 0);
                    DialogSetReputation("HouseVincula", 0);
                    LogDelete("Mastery", "MagicSchool");
                    DialogSetReputation("HouseAmplector", level);
                } else if (reputation == "corporis") {
                    DialogSetReputation("HouseAmplector", 0);
                    DialogSetReputation("HouseMaiestas", 0);
                    DialogSetReputation("HouseVincula", 0);
                    LogDelete("Mastery", "MagicSchool");
                    DialogSetReputation("HouseCorporis", level);
                } else if (reputation == "dominant") {
                    DialogSetReputation("Dominant", level);
                } else if (reputation == "gambling") {
                    DialogSetReputation("Gambling", level);
                } else if (reputation == "gaming") {
                    DialogSetReputation("Gaming", level);
                } else if (reputation == "kidnap") {
                    DialogSetReputation("Kidnap", level);
                } else if (reputation == "larp") {
                    DialogSetReputation("LARP", level);
                } else if (reputation == "maid") {
                    DialogSetReputation("Maid", level);
                } else if (reputation == "maiestas") {
                    DialogSetReputation("HouseAmplector", 0);
                    DialogSetReputation("HouseCorporis", 0);
                    DialogSetReputation("HouseVincula", 0);
                    LogDelete("Mastery", "MagicSchool");
                    DialogSetReputation("HouseMaiestas", level);
                } else if (reputation == "nurse") {
                    DialogSetReputation("Asylum", level);
                } else if (reputation == "patient") {
                    DialogSetReputation("Asylum", -level);
                } else if (reputation == "submissive") {
                    DialogSetReputation("Dominant", -level);
                } else if (reputation == "vincula") {
                    DialogSetReputation("HouseAmplector", 0);
                    DialogSetReputation("HouseCorporis", 0);
                    DialogSetReputation("HouseMaiestas", 0);
                    LogDelete("Mastery", "MagicSchool");
                    DialogSetReputation("HouseVincula", level);
                }
            }
        } else if (content.indexOf("/resetdifficulty") == 0) {
            if (content.includes("yes")) {
                Player.Difficulty = [];
                ChatRoomSendLocal("Quick-AccessMenu2: Difficulty reset, select a new one in settings.");
            } else {
                ChatRoomSendLocal("<b>Warning</b>: Resetting difficulty will incur a 7-day waiting period to rechange. Confirm by typing: <b>/resetdifficulty yes</b>");
            }
        } else if (content.indexOf("/resetinventory") == 0) {
            if (content.includes("yes")) {
                Player.Inventory = [];
                ServerPlayerInventorySync();
                ChatRoomSendLocal("Quick-AccessMenu2: Accomplished. Visit store to buy new clothes and items..");
            } else {
                ChatRoomSendLocal("<b>Warning</b>: You will lose many clothes and items, you will need to buy them again. Confirm by typing: <b>/resetinventory yes</b>");
            }
        } else if (content.indexOf("/restrain") == 0) {
            var targetname = content.substring(9).trim();
            if (targetname == undefined) {
                targetname = Player.Name
            };
            var targetfinder = new RegExp('^' + targetname + '', 'i');
            var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
            if (target[0] == null) {
                var targetnumber = parseInt(targetname);
                target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);
            };
            if (target[0] != null) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "Magical lasers apply random restraints on " + target[0].Name + " body."
                    }]
                });
                if ((target[0].Name == Player.Name) == false) {
                    ChatRoomTargetMemberNumber = target[0].MemberNumber;
                    consoleWhisper();
                };
                CharacterFullRandomRestrain(target[0], "ALL");
                ChatRoomCharacterUpdate(target[0]);
            }
        } else if (content.indexOf("/roleplay") == 0) {
            if (content.includes("clubmistress")) {
                LogAdd("ClubMistress", "Management");
            } else if (content.includes("clubslave")) {
                LogAdd("ClubSlave", "Management", CurrentTime + 3600000);
            } else if (content.includes("doctor")) {
                LogAdd("Committed", "Asylum", CurrentTime);
                ReputationChange('Asylum', 200);
            } else if (content.includes("escapedpatient")) {
                LogAdd("Escaped", "Asylum", CurrentTime + 86400000);
            } else if (content.includes("headmaid")) {
                LogAdd("LeadSorority", "Maid");
            } else if (content.includes("kidnapper")) {
                DialogSetReputation("Kidnap", 50);
            } else if (content.includes("magician")) {
                DialogSetReputation("HouseAmplector", 0);
                DialogSetReputation("HouseCorporis", 0);
                DialogSetReputation("HouseMaiestas", 0);
                LogDelete("Mastery", "MagicSchool");
                DialogSetReputation("HouseVincula", 50);
            } else if (content.includes("magus")) {
                DialogSetReputation("HouseAmplector", 0);
                DialogSetReputation("HouseCorporis", 0);
                DialogSetReputation("HouseVincula", 0);
                LogDelete("Mastery", "MagicSchool");
                DialogSetReputation("HouseMaiestas", 100);
            } else if (content.includes("maid")) {
                LogDelete("LeadSorority", "Maid");
                LogAdd("JoinedSorority", "Management");
            } else if (content.includes("masterkidnapper")) {
                ReputationChange("Kidnap", 100);
            } else if (content.includes("mistress")) {
                LogAdd("ClubMistress", "Management");
                ReputationChange("Dominant", 200);
            } else if (content.includes("nurse")) {
                LogAdd("Committed", "Asylum", CurrentTime);
                DialogSetReputation("Asylum", 50);
            } else if (content.includes("oracle")) {
                DialogSetReputation("HouseCorporis", 0);
                DialogSetReputation("HouseMaiestas", 0);
                DialogSetReputation("HouseVincula", 0);
                LogDelete("Mastery", "MagicSchool");
                DialogSetReputation("HouseAmplector", 100);
            } else if (content.includes("patient")) {
                DialogSetReputation("Asylum", -50);
            } else if (content.includes("permanentpatient")) {
                ReputationChange('Asylum', -200);
            } else if (content.includes("sage")) {
                DialogSetReputation("HouseCorporis", 0);
                DialogSetReputation("HouseMaiestas", 0);
                DialogSetReputation("HouseVincula", 0);
                LogDelete("Mastery", "MagicSchool");
                DialogSetReputation("HouseAmplector", 50);
            } else if (content.includes("sorcerer")) {
                DialogSetReputation("HouseAmplector", 0);
                DialogSetReputation("HouseCorporis", 0);
                DialogSetReputation("HouseMaiestas", 0);
                LogDelete("Mastery", "MagicSchool");
                DialogSetReputation("HouseVincula", 100);
            } else if (content.includes("warlock")) {
                DialogSetReputation("HouseAmplector", 0);
                DialogSetReputation("HouseMaiestas", 0);
                DialogSetReputation("HouseVincula", 0);
                LogDelete("Mastery", "MagicSchool");
                DialogSetReputation("HouseCorporis", 100);
            } else if (content.includes("witch")) {
                DialogSetReputation("HouseAmplector", 0);
                DialogSetReputation("HouseMaiestas", 0);
                DialogSetReputation("HouseVincula", 0);
                LogDelete("Mastery", "MagicSchool");
                DialogSetReputation("HouseCorporis", 50);
            } else if (content.includes("wizard")) {
                DialogSetReputation("HouseAmplector", 0);
                DialogSetReputation("HouseCorporis", 0);
                DialogSetReputation("HouseVincula", 0);
                LogDelete("Mastery", "MagicSchool");
                DialogSetReputation("HouseMaiestas", 50);
            } else if (content.endsWith("/roleplay")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: The roleplay command must include a role.\n" +
                    "You will be able to check the changes in your profile.\n" +
                    " \n" +
                    "Available roles:\n" +
                    "clubmistress, clubslave, doctor, escapedpatient,\n" +
                    "headmaid, kidnapper, maid, magician, magus,\n" +
                    "masterkidnapper, mistress, nurse, oracle, patient,\n" +
                    "permanentpatient, sage, sorcerer, warlock, witch, wizard.\n" +
                    "Be careful with clubslave, you will be forced to complete contract. Similar warning for escapedpatient."
                );
            }
        } else if (content.indexOf("/rolequit") == 0) {
            if (content.includes("asylum")) {
                LogAdd("Escaped", "Asylum", CurrentTime);
                LogAdd("Committed", "Asylum", CurrentTime);
                DialogSetReputation("Asylum", 0);
            } else if (content.includes("clubslave")) {
                LogAdd("ClubSlave", "Management", CurrentTime);
                LogAdd("BlockChange", "Rule", CurrentTime);
                ManagementIsClubSlave = function() {
                    return false
                }
                ManagementClubSlaveDialog = function(Player) {}
                ManagementFinishClubSlave()
            } else if (content.includes("ggts")) {
                Level = parseInt(0);
                Player.Game.GGTS.Level = 0;
                ServerAccountUpdate.QueueData({
                    Game: Player.Game
                });
            } else if (content.includes("kidnapper")) {
                DialogSetReputation("Kidnap", 0)
            } else if (content.includes("magician")) {
                DialogSetReputation("HouseMaiestas", 0);
                DialogSetReputation("HouseVincula", 0);
                DialogSetReputation("HouseAmplector", 0);
                DialogSetReputation("HouseCorporis", 0);
                LogDelete("Mastery", "MagicSchool");
            } else if ((content.includes("management")) || content.includes("mistress")) {
                LogDelete("ClubMistress", "Management");
                LogDelete("Mistress", "Management");
            } else if ((content.includes("sorority")) || content.includes("maid")) {
                LogDelete("JoinedSorority", "Management");
                LogDelete("LeadSorority", "Maid");
            } else if (content.endsWith("/rolequit")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: The rolequit command must include a role or clubarea.\n" +
                    "You will be able to check the changes in your profile.\n" +
                    " \n" +
                    "Available roles or areas:\n" +
                    "asylum to cease being doctor, nurse, patient or permanent patient.\n" +
                    "clubslave to break the club slave contract.\n" +
                    "ggts to leave ggts training (back to level 0).\n" +
                    "kidnapper to cease being kidnapper or master kidnapper.\n" +
                    "magician to cease one of the 8 magic roles.\n" +
                    "management or mistress to cease being mistress or club mistress.\n" +
                    "sorority or maid to cease being maid or headmaid."
                );
            }
        } else if (content.indexOf("/safewordspecific") == 0) {
            ChatRoomSendLocal("Quick-AccessMenu2: You have 5 seconds to click  on target, select area. If successful, will be returned. If not, retry.");
            setTimeout(function() {
                if (CurrentCharacter !== Player) {
                    ServerSend("ChatRoomChat", {
                        Content: "Quick-Access Menu2: " + Player.Name + " has removed " + InventoryGet(CurrentCharacter, CurrentCharacter.FocusGroup.Name).Asset.Name + " on you via console. If this is undesired, blacklist player.",
                        Type: "Whisper",
                        Target: CurrentCharacter.MemberNumber
                    })
                };
                CurrentCharacter.Appearance = CurrentCharacter.Appearance.filter(x => (CurrentCharacter.FocusGroup && CurrentCharacter.FocusGroup.Name) ? x.Asset.Group.Name !=
                    CurrentCharacter.FocusGroup.Name : true);
                ChatRoomCharacterUpdate(CurrentCharacter);
                DialogLeave();
            }, 5000);
        } else if (content.indexOf("/savename") == 0) {
            var NewName = tmpname;
            ServerAccountUpdate.QueueData({
                Nickname: NewName
            });
            ChatRoomSendLocal("Quick-AccessMenu2: Your temporary nickname has now a definitive status.");
        } else if (content.indexOf("/search") == 0) {
            if (content.includes("Asylum") || content.includes("asylum")) {
                setTimeout(function() {
                    ChatRoomSpace = "Asylum";
                    ChatSearchLeaveRoom = "AsylumEntrance";
                    ChatSearchBackground = "AsylumEntrance";
                    ChatCreateBackgroundList = BackgroundsTagAsylum
                    CommonSetScreen("Online", "ChatSearch");
                    ChatRoomSetLastChatRoom("");
                    document.getElementById("InputChat").style.display = "none";
                    document.getElementById("TextAreaChatLog").style.display = "none";
                }, 3000);
                setTimeout(function() {
                    CommonSetScreen("Online", "ChatRoom");
                    document.getElementById("InputChat").style.display = "inline";
                    document.getElementById("TextAreaChatLog").style.display = "inline";
                }, 15000);
            }
            if (content.includes("club") || content.includes("Club") || content.includes("LARP") || content.includes("larp")) {
                setTimeout(function() {
                    ChatRoomSpace = "";
                    CommonSetScreen("Online", "ChatSearch");
                    ChatRoomSetLastChatRoom("");
                    document.getElementById("InputChat").style.display = "none";
                    document.getElementById("TextAreaChatLog").style.display = "none";
                }, 3000);
                setTimeout(function() {
                    CommonSetScreen("Online", "ChatRoom");
                    document.getElementById("InputChat").style.display = "inline";
                    document.getElementById("TextAreaChatLog").style.display = "inline";
                }, 15000);
            }
        } else if (content.indexOf("/skill") == 0) {
            if (content.endsWith("/skill")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: The skill command must be followed by a skill and a level.\n" +
                    "You will be able to check the change in your profile.\n" +
                    " \n" +
                    "Available skills:\n" +
                    "bondage, dressage, evasion, infiltration,\n" +
                    "lockpicking, selfbondage, willpower.\n" +
                    "Level must be between 0 and 10."
                );
            } else {
                var stringSkill1 = content;
                var stringSkill2 = stringSkill1.split(/[ ,]+/);
                var skill = stringSkill2[1];
                var level = stringSkill2[2];
                if (skill == "bondage") {
                    SkillChange("Bondage", level);
                } else if (skill == "dressage") {
                    SkillChange("Dressage", level);
                } else if (skill == "evasion") {
                    SkillChange("Evasion", level);
                } else if (skill == "infiltration") {
                    SkillChange("Infiltration", level);
                } else if (skill == "lockpicking") {
                    SkillChange("LockPicking", level);
                } else if (skill == "selfbondage") {
                    SkillChange("SelfBondage", level);
                } else if (skill == "willpower") {
                    SkillChange("Willpower", level);
                }
            }
        } else if (content.indexOf("/solidity") == 0) {
            var solidity = content.substring(9).trim();
            if (InventoryGet(Player, "ItemDevices") != null) {
                if (InventoryGet(Player, "ItemDevices").Asset.Name == "FuturisticCrate") {
                    if (solidity < 2) {
                        InventoryRemove(Player, "ItemDevices");
                        ServerSend("ChatRoomChat", {
                            Content: "Beep",
                            Type: "Action",
                            Dictionary: [{
                                Tag: "Beep",
                                Text: "Magical lasers make disappear the futuristic crate in which " + Player.Name + " was prisoner."
                            }]
                        });
                    }
                }
            }
            InventorySetDifficulty(Player, "ItemAddon", solidity);
            InventorySetDifficulty(Player, "ItemArms", solidity);
            InventorySetDifficulty(Player, "ItemBoots", solidity);
            InventorySetDifficulty(Player, "ItemBreast", solidity);
            InventorySetDifficulty(Player, "ItemButt", solidity);
            InventorySetDifficulty(Player, "ItemDevices", solidity);
            InventorySetDifficulty(Player, "ItemEars", solidity);
            InventorySetDifficulty(Player, "ItemFeet", solidity);
            InventorySetDifficulty(Player, "ItemHands", solidity);
            InventorySetDifficulty(Player, "ItemHead", solidity);
            InventorySetDifficulty(Player, "ItemHood", solidity);
            InventorySetDifficulty(Player, "ItemLegs", solidity);
            InventorySetDifficulty(Player, "ItemMisc", solidity);
            InventorySetDifficulty(Player, "ItemMouth", solidity);
            InventorySetDifficulty(Player, "ItemMouth2", solidity);
            InventorySetDifficulty(Player, "ItemMouth3", solidity);
            InventorySetDifficulty(Player, "ItemNeck", solidity);
            InventorySetDifficulty(Player, "ItemNeckAccessories", solidity);
            InventorySetDifficulty(Player, "ItemNeckRestraints", solidity);
            InventorySetDifficulty(Player, "ItemNipples", solidity);
            InventorySetDifficulty(Player, "ItemNipplesPiercings", solidity);
            InventorySetDifficulty(Player, "ItemNose", solidity);
            InventorySetDifficulty(Player, "ItemPelvis", solidity);
            InventorySetDifficulty(Player, "ItemTorso", solidity)
            InventorySetDifficulty(Player, "ItemVulva", solidity);
            InventorySetDifficulty(Player, "ItemVulvaPiercings", solidity);
            ServerPlayerInventorySync();
            ChatRoomSendLocal("Quick-AccessMenu2: The solidity of most current bindings has been changed.");
        } else if ((content.indexOf("/speak") == 0) || (content.indexOf("/mouth") == 0) || (content.indexOf("/speech") == 0)) {
            (typeof OLDtalking !== 'undefined') && (ChatRoomSendChat = OLDtalking); // reset
            NEWtalking = function() {
                this.msg = ElementValue("InputChat").trim();
                if (!this.msg.startsWith("/") && !this.msg.startsWith("*") && !this.msg.startsWith("!")) {
                    if (this.msg.length > 10) {
                        RunExpressionAnimation([null, "Grin", "Smirk", null, "Grin", "Smirk", null]);
                    } else {
                        RunExpressionAnimation([null, "Grin", "Smirk", null]);
                    }
                }
                OLDtalking();
            }
            this.OLDtalking = ChatRoomSendChat;
            this.ChatRoomSendChat = NEWtalking;
        } else if (content.indexOf("/store") == 0) {
            Asset.forEach(e => {
                if (e.Value < 0) e.Value = 1;
            });
            ServerSend("ChatRoomLeave", "");
            CommonSetScreen("Room", "Shop");
            ChatRoomSetLastChatRoom("");
            OnlineGameName = "";
            ChatRoomClearAllElements();
        } else if (content.indexOf("/superdice") == 0) {
            var sides = content.substring(10).trim();
            if ((sides < 2) || (sides > 1000000000)) sides = 6;
            const Result = [];
            let Roll = Math.floor(Math.random() * sides) + 1;
            Result.push(Roll);
            ServerSend("ChatRoomChat", {
                Content: "Beep",
                Type: "Action",
                Dictionary: [{
                    Tag: "Beep",
                    Text: "" + Player.Name + " rolls a superdice of " + sides + " sides. The result is " + Result + "."
                }]
            });
        } else if (content.indexOf("/talkbaby") == 0) {
            ElementValue("InputChat", "");
            if (this.BabyTalkOn == false || this.BabyTalkOn == undefined) {
                BabyTalkOn = true;
                OLDmenu();
            } else {
                BabyTalkOn = false;
                OLDmenu();
            }
        } else if (content.indexOf("/talkgag") == 0) {
            if (content.includes("light")) {
                ElementValue("InputChat", "");
                if (this.TalkGagLightOn == false || this.TalkGagLightOn == undefined) {
                    TalkGagLightOn = true;
                } else {
                    TalkGagLightOn = false;
                }
            } else if (content.includes("heavy")) {
                ElementValue("InputChat", "");
                if (this.TalkGagHeavyOn == false || this.TalkGagHeavyOn == undefined) {
                    TalkGagHeavyOn = true;
                } else {
                    TalkGagHeavyOn = false;
                }
            }
        } else if (content.indexOf("/theme") == 0) {
            var theme = content.substring(6).trim();
            if ((theme > -1) && (theme < 4)) {
                Player.ChatSettings.ColorTheme = PreferenceChatColorThemeList[theme]
                ServerAccountUpdate.QueueData({
                    ChatSettings: Player.ChatSettings
                });
                ServerSocket.close();
                ServerSocket.open();
            }
        } else if (content.indexOf("/timercell") == 0) {
            var minutes = content.substring(10).trim();
            ServerSend("ChatRoomChat", {
                Content: "Beep",
                Type: "Action",
                Dictionary: [{
                    Tag: "Beep",
                    Text: "" + Player.Name + " gets grabbed by two maids and locked in a timer cell for " + minutes + " minutes."
                }]
            });
            DialogLentLockpicks = false;
            ChatRoomClearAllElements();
            ServerSend("ChatRoomLeave", "");
            CharacterDeleteAllOnline();
            CellLock(minutes);
        } else if (content.indexOf("/title") == 0) {
            if (content.endsWith("/title")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: The title command must be followed by a title.\n" +
                    "It will also change required parameters to get the title.\n" +
                    "You will be able to check the changes in your profile.\n" +
                    " \n" +
                    "Available titles:\n" +
                    "agent, angel, baby, bondage baby, bondage maid,\n" +
                    "bunny, clubslave, coldbloodhorse, collegestudent,\n" +
                    "demon, diaperlover, doctor, doll, drone, duchess,\n" +
                    "escapedpatient, farmhorse, flyingpegasus, foal, foxy,\n" +
                    "goodgirl, goodslave, goodslavegirl, headmaid,\n" +
                    "hotbloodhorse, houdini, infiltrator, kidnapper,\n" +
                    "kitten, ladyluck, littleone, magician, magus, maid,\n" +
                    "majesticalicorn, masterkidnapper, mistress, mole,\n" +
                    "nawashi, nurse, operative, oracle, patient,\n" +
                    "patron, permanentpatient, puppy, sage, shiningunicorn,\n" +
                    "sorcerer, succubus, superspy, switch, warmbloodhorse,\n" +
                    "warlock, wildmustang, witch, wizard."
                );
            } else {
                var title = content.substring(6).trim();
                if (title == "agent") {
                    if ((SkillGetLevel(Player, "Infiltration") < 6) || (SkillGetLevel(Player, "Infiltration") > 7)) {
                        SkillChange("Infiltration", 6);
                    }
                    TitleSet("InfilrationAgent");
                } else if (title == "angel") {
                    TitleSet("Angel");
                } else if (title == "baby") {
                    if (ReputationGet("ABDL") < 1) {
                        DialogSetReputation("ABDL", 1);
                    }
                    TitleSet("Baby");
                } else if (title == "bondagebaby") {
                    if (ReputationGet("ABDL") < 1) {
                        DialogSetReputation("ABDL", 1);
                    }
                    if (SkillGetLevel(Player, "Evasion") < 10) {
                        SkillChange("Evasion", 10);
                    }
                    TitleSet("BondageBaby");
                } else if (title == "bondagemaid") {
                    if ((LogQuery("JoinedSorority", "Maid") == false) || (LogQuery("LeadSorority", "Maid") == false)) {
                        LogAdd("JoinedSorority", "Management");
                    }
                    if (SkillGetLevel(Player, "Evasion") < 10) {
                        SkillChange("Evasion", 10);
                    }
                    TitleSet("BondageMaid");
                } else if (title == "bunny") {
                    TitleSet("Bunny");
                } else if (title == "clubslave") {
                    LogAdd("ClubSlave", "Management", CurrentTime + 3600000);
                } else if (title == "coldbloodhorse") {
                    if ((SkillGetLevel(Player, "Dressage") < 3) || (SkillGetLevel(Player, "Infiltration") > 3)) {
                        SkillChange("Dressage", 3);
                    }
                    TitleSet("PonyCold");
                } else if (title == "collegestudent") {
                    LogAdd("BondageCollege", "Import");
                    TitleSet("CollegeStudent");
                } else if (title == "demon") {
                    TitleSet("Demon");
                } else if (title == "diaperlover") {
                    if (ReputationGet("ABDL") < 1) {
                        DialogSetReputation("ABDL", 1);
                    }
                    TitleSet("DL");
                } else if (title == "doctor") {
                    if (ReputationGet("Asylum") < 100) {
                        DialogSetReputation("Asylum", 100);
                    }
                    LogAdd("Committed", "Asylum", CurrentTime);
                    TitleSet("Doctor");
                } else if (title == "doll") {
                    TitleSet("Doll");
                } else if (title == "drone") {
                    if (AsylumGGTSGetLevel(Player) < 6) {
                        Level = parseInt(6);
                        Player.Game.GGTS.Level = 6;
                        ServerAccountUpdate.QueueData({
                            Game: Player.Game
                        });
                    }
                    TitleSet("Drone");
                } else if (title == "duchess") {
                    LogAdd("KidnapSophie", "Sarah");
                    TitleSet("Duchess");
                } else if (title == "escapedpatient") {
                    LogAdd("Escaped", "Asylum", CurrentTime + 86400000);
                } else if (title == "farmhorse") {
                    if ((SkillGetLevel(Player, "Dressage") < 2) || (SkillGetLevel(Player, "Infiltration") > 2)) {
                        SkillChange("Dressage", 2);
                    }
                    TitleSet("PonyFarm");
                } else if (title == "flyingpegasus") {
                    if ((SkillGetLevel(Player, "Dressage") < 8) || (SkillGetLevel(Player, "Infiltration") > 9)) {
                        SkillChange("Dressage", 8);
                    }
                    TitleSet("PonyPegasus");
                } else if (title == "foal") {
                    if (ReputationGet("ABDL") < 1) {
                        if ((SkillGetLevel(Player, "Dressage") < 1) || (SkillGetLevel(Player, "Infiltration") > 2)) {
                            SkillChange("Dressage", 1);
                        }
                    } else if (ReputationGet("ABDL") >= 1) {
                        if (SkillGetLevel(Player, "Dressage") < 1) {
                            SkillChange("Dressage", 1);
                        }
                    }
                    TitleSet("PonyFoal");
                } else if (title == "foxy") {
                    TitleSet("Foxy");
                } else if (title == "goodgirl") {
                    if (AsylumGGTSGetLevel(Player) < 4) {
                        Level = parseInt(4);
                        Player.Game.GGTS.Level = 4;
                        ServerAccountUpdate.QueueData({
                            Game: Player.Game
                        });
                    }
                    TitleSet("GoodGirl");
                } else if (title == "goodslave") {
                    if (AsylumGGTSGetLevel(Player) < 6) {
                        Level = parseInt(6);
                        Player.Game.GGTS.Level = 6;
                        ServerAccountUpdate.QueueData({
                            Game: Player.Game
                        });
                    }
                    TitleSet("GoodSlave");
                } else if (title == "goodslavegirl") {
                    if (AsylumGGTSGetLevel(Player) < 5) {
                        Level = parseInt(5);
                        Player.Game.GGTS.Level = 5;
                        ServerAccountUpdate.QueueData({
                            Game: Player.Game
                        });
                    }
                    TitleSet("GoodSlaveGirl");
                } else if (title == "headmaid") {
                    LogAdd("LeadSorority", "Maid");
                    TitleSet("HeadMaid");
                } else if (title == "hotbloodhorse") {
                    if ((SkillGetLevel(Player, "Dressage") < 5) || (SkillGetLevel(Player, "Infiltration") > 5)) {
                        SkillChange("Dressage", 5);
                    }
                    TitleSet("PonyHot");
                } else if (title == "houdini") {
                    if (SkillGetLevel(Player, "Evasion") < 10) {
                        SkillChange("Evasion", 10);
                    }
                    TitleSet("Houdini");
                } else if (title == "infiltrator") {
                    if ((SkillGetLevel(Player, "Infiltration") < 4) || (SkillGetLevel(Player, "Infiltration") > 5)) {
                        SkillChange("Infiltration", 4);
                    }
                    TitleSet("InfilrationInfiltrator");
                } else if (title == "kidnapper") {
                    if ((ReputationGet("Kidnap") < 50) || (ReputationGet("Kidnap") > 99)) {
                        DialogSetReputation("Kidnap", 50);
                    }
                    TitleSet("Kidnapper");
                } else if (title == "kitten") {
                    TitleSet("Kitten");
                } else if (title == "ladyluck") {
                    if (ReputationGet("Gambling") < 100) {
                        DialogSetReputation("Gambling", 100);
                    }
                    TitleSet("LadyLuck");
                } else if (title == "littleone") {
                    if (ReputationGet("ABDL") < 1) {
                        DialogSetReputation("ABDL", 1);
                    }
                    TitleSet("LittleOne");
                } else if (title == "magician") {
                    if ((ReputationGet("HouseVincula") < 50) || (ReputationGet("HouseVincula") > 99)) {
                        DialogSetReputation("HouseAmplector", 0);
                        DialogSetReputation("HouseCorporis", 0);
                        DialogSetReputation("HouseMaiestas", 0);
                        LogDelete("Mastery", "MagicSchool");
                        DialogSetReputation("HouseVincula", 50);
                    }
                    TitleSet("MagicSchoolMagician");
                } else if (title == "magus") {
                    if (ReputationGet("HouseMaiestas") < 100) {
                        DialogSetReputation("HouseAmplector", 0);
                        DialogSetReputation("HouseCorporis", 0);
                        DialogSetReputation("HouseVincula", 0);
                        LogDelete("Mastery", "MagicSchool");
                        DialogSetReputation("HouseMaiestas", 100);
                    }
                    TitleSet("MagicSchoolMagus");
                } else if (title == "maid") {
                    LogDelete("LeadSorority", "Maid");
                    LogAdd("JoinedSorority", "Management");
                    TitleSet("Maid");
                } else if (title == "majesticalicorn") {
                    if (SkillGetLevel(Player, "Dressage") < 10) {
                        SkillChange("Dressage", 10);
                    }
                    TitleSet("PonyAlicorn");
                } else if (title == "masterkidnapper") {
                    if (ReputationGet("Kidnap") < 100) {
                        DialogSetReputation("Kidnap", 100);
                    }
                    TitleSet("MasterKidnapper");
                } else if (title == "mistress") {
                    LogAdd("ClubMistress", "Management");
                    TitleSet("Mistress");
                } else if (title == "mole") {
                    if ((SkillGetLevel(Player, "Infiltration") < 2) || (SkillGetLevel(Player, "Infiltration") > 3)) {
                        SkillChange("Infiltration", 2);
                    }
                    TitleSet("InfilrationMole");
                } else if (title == "nawashi") {
                    if (SkillGetLevel(Player, "Bondage") < 10) {
                        SkillChange("Bondage", 10);
                    }
                    TitleSet("Nawashi");
                } else if (title == "nurse") {
                    if ((ReputationGet("Asylum") < 50) || (ReputationGet("Asylum") > 99)) {
                        DialogSetReputation("Asylum", 50);
                    }
                    LogAdd("Committed", "Asylum", CurrentTime);
                    TitleSet("Nurse");
                } else if (title == "operative") {
                    if ((SkillGetLevel(Player, "Infiltration") < 8) || (SkillGetLevel(Player, "Infiltration") > 9)) {
                        SkillChange("Infiltration", 8);
                    }
                    TitleSet("InfilrationOperative");
                } else if (title == "oracle") {
                    if (ReputationGet("HouseAmplector") < 100) {
                        DialogSetReputation("HouseCorporis", 0);
                        DialogSetReputation("HouseMaiestas", 0);
                        DialogSetReputation("HouseVincula", 0);
                        LogDelete("Mastery", "MagicSchool");
                        DialogSetReputation("HouseAmplector", 100);
                    }
                    TitleSet("MagicSchoolOracle");
                } else if (title == "patient") {
                    if ((ReputationGet("Asylum") > -50) || (ReputationGet("Asylum") < -99)) {
                        DialogSetReputation("Asylum", -50);
                    }
                    TitleSet("Patient");
                } else if (title == "patron") {
                    TitleSet("Patron");
                } else if (title == "permanentpatient") {
                    if (ReputationGet("Asylum") > -100) {
                        DialogSetReputation("Asylum", -100);
                    }
                    TitleSet("PermanentPatient");
                } else if (title == "puppy") {
                    TitleSet("Puppy");
                } else if (title == "sage") {
                    if ((ReputationGet("HouseAmplector") < 50) || (ReputationGet("HouseAmplector") > 99)) {
                        DialogSetReputation("HouseCorporis", 0);
                        DialogSetReputation("HouseMaiestas", 0);
                        DialogSetReputation("HouseVincula", 0);
                        LogDelete("Mastery", "MagicSchool");
                        DialogSetReputation("HouseAmplector", 50);
                    }
                    TitleSet("MagicSchoolSage");
                } else if (title == "shiningunicorn") {
                    if ((SkillGetLevel(Player, "Dressage") < 7) || (SkillGetLevel(Player, "Infiltration") > 7)) {
                        SkillChange("Dressage", 7);
                    }
                    TitleSet("PonyUnicorn");
                } else if (title == "sorcerer") {
                    if (ReputationGet("HouseVincula") < 100) {
                        DialogSetReputation("HouseAmplector", 0);
                        DialogSetReputation("HouseCorporis", 0);
                        DialogSetReputation("HouseMaiestas", 0);
                        LogDelete("Mastery", "MagicSchool");
                        DialogSetReputation("HouseVincula", 100);
                    }
                    TitleSet("MagicSchoolSorcerer");
                } else if (title == "succubus") {
                    TitleSet("Succubus");
                } else if (title == "superspy") {
                    if (SkillGetLevel(Player, "Infiltration") < 10) {
                        SkillChange("Infiltration", 10);
                    }
                    TitleSet("InfilrationSuperspy");
                } else if (title == "switch") {
                    TitleSet("Switch");
                } else if (title == "warlock") {
                    if (ReputationGet("HouseCorporis") < 100) {
                        DialogSetReputation("HouseAmplector", 0);
                        DialogSetReputation("HouseMaiestas", 0);
                        DialogSetReputation("HouseVincula", 0);
                        LogDelete("Mastery", "MagicSchool");
                        DialogSetReputation("HouseCorporis", 100);
                    }
                    TitleSet("MagicSchoolWarlock");
                } else if (title == "warmbloodhorse") {
                    if ((SkillGetLevel(Player, "Dressage") < 4) || (SkillGetLevel(Player, "Infiltration") > 4)) {
                        SkillChange("Dressage", 4);
                    }
                    TitleSet("PonyWarm");
                } else if (title == "wildmustang") {
                    if ((SkillGetLevel(Player, "Dressage") < 6) || (SkillGetLevel(Player, "Infiltration") > 6)) {
                        SkillChange("Dressage", 6);
                    }
                    TitleSet("PonyWild");
                } else if (title == "witch") {
                    if ((ReputationGet("HouseCorporis") < 50) || (ReputationGet("HouseCorporis") > 99)) {
                        DialogSetReputation("HouseAmplector", 0);
                        DialogSetReputation("HouseMaiestas", 0);
                        DialogSetReputation("HouseVincula", 0);
                        LogDelete("Mastery", "MagicSchool");
                        DialogSetReputation("HouseCorporis", 50);
                    }
                    TitleSet("MagicSchoolWitch");
                } else if (title == "wizard") {
                    if ((ReputationGet("HouseMaiestas") < 50) || (ReputationGet("HouseMaiestas") > 99)) {
                        DialogSetReputation("HouseAmplector", 0);
                        DialogSetReputation("HouseCorporis", 0);
                        DialogSetReputation("HouseVincula", 0);
                        LogDelete("Mastery", "MagicSchool");
                        DialogSetReputation("HouseMaiestas", 50);
                    }
                    TitleSet("MagicSchoolWizard");
                }
            }
        } else if (content.indexOf("/totalrelease") == 0) {
            var targetname = content.substring(13).trim();
            if (targetname == undefined) {
                targetname = Player.Name
            };
            var targetfinder = new RegExp('^' + targetname + '', 'i');
            var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
            if (target[0] == null) {
                var targetnumber = parseInt(targetname);
                target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);
            };
            if (target[0] != null) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "Magical lasers make disappear all bindings and toys on " + target[0].Name + " body."
                    }]
                });
                if ((target[0].Name == Player.Name) == false) {
                    ChatRoomTargetMemberNumber = target[0].MemberNumber;
                    consoleWhisper();
                };
                CharacterReleaseTotal(target[0]);
                ChatRoomCharacterUpdate(target[0]);
            }
        } else if (content.indexOf("/underwear") == 0) {
            var targetname = content.substring(10).trim();
            if (targetname == undefined) {
                targetname = Player.Name
            };
            var targetfinder = new RegExp('^' + targetname + '', 'i');
            var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
            if (target[0] == null) {
                var targetnumber = parseInt(targetname);
                target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);
            };
            if (target[0] != null) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "Magical lasers put " + target[0].Name + " in random underwear."
                    }]
                });
                if ((target[0].Name == Player.Name) == false) {
                    ChatRoomTargetMemberNumber = target[0].MemberNumber;
                    consoleWhisper();
                };
                CharacterRandomUnderwear(target[0]);
                ChatRoomCharacterUpdate(target[0]);
            }
        } else if (content.indexOf("/unlock") == 0) {
            var stringUnlock1 = content;
            var stringUnlock2 = stringUnlock1.split(/[ ,]+/);
            var lk = stringUnlock2[2];
            var targetname = stringUnlock2[1];
            if (targetname == undefined) {
                targetname = Player.Name
            };
            var targetfinder = new RegExp('^' + targetname + '', 'i');
            var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
            if (target[0] == null) {
                var targetnumber = parseInt(targetname);
                target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);
            };
            if (target[0] != null) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "Magical lasers make disappear locks on " + target[0].Name + " body."
                    }]
                });
                if ((target[0].Name == Player.Name) == false) {
                    ChatRoomTargetMemberNumber = target[0].MemberNumber;
                    consoleWhisper();
                };
                if (lk == null) {
                    CharacterReleaseFromLock(target[0], "CombinationPadlock");
                    CharacterReleaseFromLock(target[0], "ExclusivePadlock");
                    CharacterReleaseFromLock(target[0], "HighSecurityPadlock");
                    CharacterReleaseFromLock(target[0], "IntricatePadlock");
                    CharacterReleaseFromLock(target[0], "LoversPadlock");
                    CharacterReleaseFromLock(target[0], "LoversTimerPadlock");
                    CharacterReleaseFromLock(target[0], "MetalPadlock");
                    CharacterReleaseFromLock(target[0], "MistressPadlock");
                    CharacterReleaseFromLock(target[0], "MistressTimerPadlock");
                    CharacterReleaseFromLock(target[0], "OwnerPadlock");
                    CharacterReleaseFromLock(target[0], "OwnerTimerPadlock");
                    CharacterReleaseFromLock(target[0], "PandoraPadlock");
                    CharacterReleaseFromLock(target[0], "PasswordPadlock");
                    CharacterReleaseFromLock(target[0], "SafewordPadlock");
                    CharacterReleaseFromLock(target[0], "TimerPadlock");
                    CharacterReleaseFromLock(target[0], "TimerPasswordPadlock");
                } else if (lk == 1) {
                    CharacterReleaseFromLock(target[0], "MetalPadlock");
                } else if (lk == 2) {
                    CharacterReleaseFromLock(target[0], "ExclusivePadlock");
                } else if (lk == 3) {
                    CharacterReleaseFromLock(target[0], "IntricatePadlock");
                } else if (lk == 4) {
                    CharacterReleaseFromLock(target[0], "HighSecurityPadlock");
                } else if (lk == 5) {
                    CharacterReleaseFromLock(target[0], "PandoraPadlock");
                } else if (lk == 6) {
                    CharacterReleaseFromLock(target[0], "MistressTimerPadlock");
                } else if (lk == 7) {
                    CharacterReleaseFromLock(target[0], "LoversPadlock");
                } else if (lk == 8) {
                    CharacterReleaseFromLock(target[0], "OwnerPadlock");
                } else if (lk == 9) {
                    CharacterReleaseFromLock(target[0], "TimerPadlock");
                } else if (lk == 10) {
                    CharacterReleaseFromLock(target[0], "CombinationPadlock");
                } else if (lk == 11) {
                    CharacterReleaseFromLock(target[0], "SafewordPadlock");
                } else if (lk == 12) {
                    CharacterReleaseFromLock(target[0], "PasswordPadlock");
                } else if (lk == 13) {
                    CharacterReleaseFromLock(target[0], "MistressTimerPadlock");
                } else if (lk == 14) {
                    CharacterReleaseFromLock(target[0], "LoversTimerPadlock");
                } else if (lk == 15) {
                    CharacterReleaseFromLock(target[0], "OwnerTimerPadlock");
                } else if (lk == 16) {
                    CharacterReleaseFromLock(target[0], "TimerPasswordPadlock");
                }
                ChatRoomCharacterUpdate(target[0]);
            }
        } else if (content.indexOf("/unrestrict") == 0) {
            if (content.includes("soft")) {
                InventoryGroupIsBlocked = function(C, GroupName) {
                    return false;
                }
                InventoryPrerequisiteMessage = function(C, Prerequisit) {
                    return "";
                }
                Player.GameplaySettings.BlindDisableExamine = false;
                Asset.forEach(e => {
                    if (e.Value < 0) e.Value = 1;
                });
                Player.Inventory.forEach(item => item.Asset.Enable = true);
                ChatRoomSendLocal(
                    "Quick-AccessMenu2: Unrestricted softly. Can do most things you couldn't do before.\n" +
                    "Store also includes hidden items. This can only be reset via a full relog."
                );
            } else if (content.includes("total")) {
                ChatRoomSendLocal(
                    "Quick-AccessMenu2: Unrestricted totally. Can do most things you couldn't do before.\n" +
                    "Store also includes hidden items. This can only be reset via a full relog."
                );
                Player.CanInteract = function() {
                    return true;
                }
                Player.CanWalk = function() {
                    return true;
                }
                Player.CanTalk = function() {
                    return true;
                }
                Player.IsPlugged = function() {
                    return false;
                }
                Player.IsVulvaChaste = function() {
                    return false;
                }
                Player.CanChange = function() {
                    return true;
                }
                InventoryGroupIsBlocked = function(C, GroupName) {
                    return false;
                }
                InventoryPrerequisiteMessage = function(C, Prerequisit) {
                    return "";
                }
                Player.GameplaySettings.BlindDisableExamine = false;
                Asset.forEach(e => {
                    if (e.Value < 0) e.Value = 1;
                });
                Player.Inventory.forEach(item => item.Asset.Enable = true);
                DialogHasKey = function(C, Item) {
                    return true
                }
                StruggleLockPickProgressStart = function(C, Item) {
                    InventoryUnlock(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
                    ChatRoomCharacterItemUpdate(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
                    DialogLeave()
                }
                StruggleProgressStart = function(C, PrevItem, NextItem) {
                    if (InventoryGet(CurrentCharacter, CurrentCharacter.FocusGroup.Name) == null) {
                        if (C != Player || PrevItem == null || ((PrevItem != null) && (!InventoryItemHasEffect(PrevItem, "Lock", true) || DialogCanUnlock(C, PrevItem)) && ((Player.CanInteract() && !InventoryItemHasEffect(PrevItem, "Mounted", true)) || StruggleStrengthGetDifficulty(C, PrevItem, NextItem).auto >= 0))) {
                            StruggleProgressCurrentMinigame = "Strength";
                            StruggleStrengthStart(C, PrevItem, NextItem);
                        }
                    } else {
                        InventoryUnlock(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
                        InventoryRemove(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
                        ChatRoomCharacterItemUpdate(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
                    }
                }
            }
            if (content.endsWith("/unrestrict")) {
                ChatRoomSendLocal(
                    "<b>Quick-AccessMenu2</b>: The unrestrict command:\n" +
                    "For total, type <b>/unrestrict total</b>\n" +
                    "For submissives, type <b>/unrestrict soft</b>\n" +
                    "To reset, type <b>/unrestrict reset</b>"
                );
            } else if (content.includes("reset")) {
                ChatRoomSendLocal("Quick-AccessMenu2: Unrestrict reset.");
                Player.CanInteract = function() {
                    return (this.Effect.indexOf("Block") < 0)
                }
                Player.CanTalk = function() {
                    (this.Effect.indexOf("GagVeryLight") < 0) &&
                    (this.Effect.indexOf("GagLight") < 0) &&
                    (this.Effect.indexOf("GagEasy") < 0) &&
                    (this.Effect.indexOf("GagNormal") < 0) &&
                    (this.Effect.indexOf("GagMedium") < 0) &&
                    (this.Effect.indexOf("GagHeavy") < 0) &&
                    (this.Effect.indexOf("GagVeryHeavy") < 0) &&
                    (this.Effect.indexOf("GagTotal") < 0) &&
                    (this.Effect.indexOf("GagTotal2") < 0) &&
                    (this.Effect.indexOf("GagTotal3") < 0) &&
                    (this.Effect.indexOf("GagTotal4") < 0)
                }
                ChatSearchMuffle = function(Text) {
                    let ret = Text;
                    if (Player.ImmersionSettings && Player.ImmersionSettings.ChatRoomMuffle && Player.GetBlindLevel() > 0) {
                        ret = SpeechGarbleByGagLevel(Player.GetBlindLevel() * Player.GetBlindLevel(), Text, true);
                        if (ret.length == 0) return "...";
                        return ret;
                    }
                    return ret;
                }
                Player.CanWalk = function() {
                    return (
                        (this.Effect.indexOf("Freeze") < 0) &&
                        (this.Effect.indexOf("Tethered") < 0) &&
                        ((this.Pose == null) || (this.Pose.indexOf("Kneel") < 0) || (this.Effect.indexOf("KneelFreeze") < 0)))
                }
                Player.IsPlugged = function() {
                    return (this.Effect.indexOf("IsPlugged") >= 0)
                }
                Player.IsVulvaChaste = function() {
                    return (this.Effect.indexOf("Chaste") >= 0)
                }
                Player.CanKneel = function() {
                    return CharacterCanKneel(this)
                }
                Player.GetBlindLevel = function(eyesOnly = false) {
                    let blindLevel = 0;
                    const eyes1 = InventoryGet(this, "Eyes");
                    const eyes2 = InventoryGet(this, "Eyes2");
                    if (eyes1.Property && eyes1.Property.Expression && eyes2.Property && eyes2.Property.Expression) {
                        if ((eyes1.Property.Expression === "Closed") && (eyes2.Property.Expression === "Closed")) {
                            blindLevel += DialogFacialExpressionsSelectedBlindnessLevel;
                        }
                    }
                }
                Player.CanChange = function(Pose) {
                    return CharacterCanChangeToPose(this, Pose)
                }
                InventoryGroupIsBlocked = function(C, GroupName, Activity) {
                    if (InventoryGroupIsBlockedForCharacter(C, GroupName, Activity)) return true;
                    if ((C.ID != 0) && Player.IsEnclose()) return true;
                    return false;
                }
                InventoryPrerequisiteMessage = function(C, Prerequisit) {
                    return "";
                } //too long to restore
                Player.GameplaySettings.BlindDisableExamine = false; //no point
                Player.Inventory.forEach(item => item.Asset.Enable = true); //can't be
                Player.Inventory.forEach(item => item.Asset.Wear = true); //can't be
                DialogHasKey = function(C, Item) {
                    if (InventoryGetItemProperty(Item, "SelfUnlock") == false && (!Player.CanInteract() || C.ID == 0)) return false;
                    if (C.IsOwnedByPlayer() && InventoryAvailable(Player, "OwnerPadlockKey", "ItemMisc") && Item.Asset.Enable) return true;
                    const lock = InventoryGetLock(Item);
                    if (C.IsLoverOfPlayer() && InventoryAvailable(Player, "LoversPadlockKey", "ItemMisc") && Item.Asset.Enable && Item.Property && Item.Property.LockedBy && !Item.Property.LockedBy.startsWith("Owner")) return true;
                    if (lock && lock.Asset.ExclusiveUnlock && ((!Item.Property.MemberNumberListKeys && Item.Property.LockMemberNumber != Player.MemberNumber) || (Item.Property.MemberNumberListKeys && CommonConvertStringToArray("" + Item.Property.MemberNumberListKeys).indexOf(Player.MemberNumber) < 0))) return false;
                    if (lock && lock.Asset.ExclusiveUnlock) return true;
                    var UnlockName = "Unlock-" + Item.Asset.Name;
                    if ((Item.Property != null) && (Item.Property.LockedBy != null)) UnlockName = "Unlock-" + Item.Property.LockedBy;
                    for (let I = 0; I < Player.Inventory.length; I++)
                        if (InventoryItemHasEffect(Player.Inventory[I], UnlockName)) {
                            if (lock != null) {
                                if (lock.Asset.LoverOnly && !C.IsLoverOfPlayer()) return false;
                                if (lock.Asset.OwnerOnly && !C.IsOwnedByPlayer()) return false;
                                return true;
                            } else return true;
                        } return false;
                }
                StruggleStrengthStart = function(C, PrevItem, NextItem) {
                    var StruggleDiff = StruggleStrengthGetDifficulty(C, PrevItem, NextItem);
                    var S = StruggleDiff.difficulty;
                    if ((PrevItem && PrevItem.Asset) || (NextItem && NextItem.Asset)) {
                        var AudioFile = (NextItem && NextItem.Asset) ? NextItem.Asset.Audio : PrevItem.Asset.Audio;
                        if (AudioFile != null) AudioDialogStart("Audio/" + AudioGetFileName(AudioFile) + ".mp3");
                    }
                    if (Player.CanInteract()) {
                        StruggleProgress = 200;
                        StruggleProgressPrevItem = PrevItem;
                        StruggleProgressNextItem = NextItem;
                    } else {
                        StruggleProgress = 0;
                        StruggleProgressAuto = StruggleDiff.auto;
                        StruggleProgressPrevItem = PrevItem;
                        StruggleProgressNextItem = NextItem;
                        StruggleProgressOperation = StruggleProgressGetOperation(C, PrevItem, NextItem);
                        StruggleProgressSkill = StruggleDiff.timer;
                        StruggleProgressChallenge = S * -1;
                        StruggleProgressLastKeyPress = 0;
                        StruggleProgressStruggleCount = 0;
                        DialogItemToLock = null;
                        DialogMenuButtonBuild(C);
                        if ((StruggleProgressAuto < 0) && Player.CanInteract() && (PrevItem == null)) StruggleProgressAuto = 0;
                        if ((StruggleProgressAuto < 0) && Player.CanInteract() && (PrevItem != null) && (!InventoryItemHasEffect(PrevItem, "Lock", true) || DialogCanUnlock(C, PrevItem)) && !InventoryItemHasEffect(PrevItem, "Mounted", true)) StruggleProgressAuto = 0;
                        DialogAllowBlush = ((StruggleProgressAuto < 0) && (StruggleProgressChallenge > 0) && (C.ID == 0) && ((InventoryGet(C, "Blush") == null) || (InventoryGet(C, "Blush").Property == null) || (InventoryGet(C, "Blush").Property.Expression == null)));
                        DialogAllowEyebrows = ((StruggleProgressAuto < 0) && (StruggleProgressChallenge > 0) && (C.ID == 0) && ((InventoryGet(C, "Eyebrows") == null) || (InventoryGet(C, "Eyebrows").Property == null) || (InventoryGet(C, "Eyebrows").Property.Expression == null)));
                        DialogAllowFluids = ((StruggleProgressAuto < 0) && (StruggleProgressChallenge > 0) && (C.ID == 0) && ((InventoryGet(C, "Fluids") == null) || (InventoryGet(C, "Fluids").Property == null) || (InventoryGet(C, "Fluids").Property.Expression == null)));
                    }
                }
                StruggleProgressStart = function(C, PrevItem, NextItem) {
                    if (InventoryGet(CurrentCharacter, CurrentCharacter.FocusGroup.Name) == null) {
                        if (C != Player || PrevItem == null || ((PrevItem != null) && (!InventoryItemHasEffect(PrevItem, "Lock", true) || DialogCanUnlock(C, PrevItem)) && ((Player.CanInteract() && !InventoryItemHasEffect(PrevItem, "Mounted", true)) || StruggleStrengthGetDifficulty(C, PrevItem, NextItem).auto >= 0))) {
                            StruggleProgressCurrentMinigame = "Strength";
                            StruggleStrengthStart(C, PrevItem, NextItem);
                        }
                    } else if (Player.CanInteract()) {
                        ServerSend("ChatRoomChat", {
                            Content: "Beep",
                            Type: "Action",
                            Dictionary: [{
                                Tag: "Beep",
                                Text: Player.Name + " removes the " + InventoryGet(CurrentCharacter, CurrentCharacter.FocusGroup.Name).Asset.Name + " from " + CurrentCharacter.Name + "'s " + CurrentCharacter.FocusGroup.Name
                            }]
                        });
                        InventoryUnlock(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
                        InventoryRemove(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
                        ChatRoomCharacterItemUpdate(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
                    } else {
                        StruggleProgressChoosePrevItem = PrevItem;
                        StruggleProgressChooseNextItem = NextItem;
                        StruggleProgressCurrentMinigame = "";
                        StruggleProgress = 0;
                        DialogMenuButtonBuild(Player);
                        StruggleStrengthStart(Player, StruggleProgressChoosePrevItem, StruggleProgressChooseNextItem);
                    }
                }

                function StruggleLockPickProgressStart(C, Item) {
                    StruggleLockPickArousalText = "";
                    StruggleLockPickArousalTick = 0;
                    if (Item) {
                        StruggleLockPickItem = Item;
                    }
                    var lock = InventoryGetLock(Item);
                    var LockRating = 1;
                    var LockPickingImpossible = false;
                    if (Item != null && lock) {
                        var BondageLevel = Item.Difficulty - Item.Asset.Difficulty;
                        var S = 0;
                        S = S + SkillGetWithRatio("LockPicking");
                        if (lock.Asset.PickDifficulty && lock.Asset.PickDifficulty > 0) {
                            S = S - lock.Asset.PickDifficulty;
                            LockRating = lock.Asset.PickDifficulty;
                        }
                        if (Player.IsEnclose() || Player.IsMounted()) S = S - 2;
                        if (!Player.CanInteract() && (Item != null)) {
                            if (InventoryItemHasEffect(Item, "NotSelfPickable", true)) {
                                S = S - 50;
                                LockPickingImpossible = true;
                            } else {
                                if (InventoryItemHasEffect(InventoryGet(Player, "ItemArms"), "Block", true)) {
                                    if (Item.Asset.Group.Name != "ItemArms" && Item.Asset.Group.Name != "ItemHands") S = S - 50;
                                    else S = S - 2;
                                }
                                if (InventoryItemHasEffect(InventoryGet(Player, "ItemHands"), "Block", true)) {
                                    if (!LogQuery("KeyDeposit", "Cell") && DialogHasKey(Player, Item)) S = S - 4;
                                    else S = S - 50;
                                }
                                if (S < -6) {
                                    LockPickingImpossible = true;
                                }
                                if (!C.CanTalk()) S = S - 1;
                                if (InventoryItemHasEffect(InventoryGet(Player, "ItemLegs"), "Block", true)) S = S - 1;
                                if (InventoryItemHasEffect(InventoryGet(Player, "ItemFeet"), "Block", true)) S = S - 1;
                                if (InventoryGroupIsBlocked(Player, "ItemFeet")) S = S - 1;
                                if (Player.IsBlind()) S = S - 1;
                                if (Player.GetDeafLevel() > 0) S = S - Math.Ceiling(Player.GetDeafLevel() / 2);
                            }
                        }
                        var NumPins = 4;
                        if (LockRating >= 6) NumPins += 2;
                        if (LockRating >= 8) NumPins += 1;
                        if (LockRating >= 10) NumPins += 1;
                        if (LockRating >= 11) NumPins += 2;
                        StruggleLockPickOrder = [];
                        StruggleLockPickSet = [];
                        StruggleLockPickSetFalse = [];
                        StruggleLockPickOffset = [];
                        StruggleLockPickOffsetTarget = [];
                        StruggleLockPickImpossiblePins = [];
                        StruggleLockPickProgressItem = Item;
                        StruggleLockPickProgressOperation = StruggleLockPickProgressGetOperation(C, Item);
                        StruggleLockPickProgressSkill = Math.floor(NumPins * NumPins / 2) + Math.floor(Math.max(0, -S) * Math.max(0, -S));
                        StruggleLockPickProgressSkillLose = NumPins * NumPins / 2;
                        StruggleLockPickProgressChallenge = S * -1;
                        StruggleLockPickProgressCurrentTries = 0;
                        StruggleLockPickSuccessTime = 0;
                        StruggleLockPickFailTime = 0;
                        DialogMenuButtonBuild(C);
                        for (let P = 0; P < NumPins; P++) {
                            StruggleLockPickOrder.push(P);
                            StruggleLockPickSet.push(false);
                            StruggleLockPickSetFalse.push(false);
                            StruggleLockPickOffset.push(0);
                            StruggleLockPickOffsetTarget.push(0);
                        }
                        for (var i = StruggleLockPickOrder.length - 1; i > 0; i--) {
                            var j = Math.floor(Math.random() * (i + 1));
                            var temp = StruggleLockPickOrder[i];
                            StruggleLockPickOrder[i] = StruggleLockPickOrder[j];
                            StruggleLockPickOrder[j] = temp;
                        }
                        if ((Item.Property == null)) Item.Property = {};
                        if (Item.Property != null)
                            if ((Item.Property.LockPickSeed == null) || (typeof Item.Property.LockPickSeed != "string")) {
                                Item.Property.LockPickSeed = CommonConvertArrayToString(StruggleLockPickOrder);
                                StruggleLockPickTotalTries = 0;
                            }
                        else {
                            var conv = CommonConvertStringToArray(Item.Property.LockPickSeed);
                            for (let PP = 0; PP < conv.length; PP++) {
                                if (typeof conv[PP] != "number") {
                                    Item.Property.LockPickSeed = CommonConvertArrayToString(StruggleLockPickOrder);
                                    conv = StruggleLockPickOrder;
                                    break;
                                }
                            }
                            StruggleLockPickOrder = conv;
                        }
                        var PickingImpossible = false;
                        if (S < -6 && LockPickingImpossible) {
                            PickingImpossible = true;
                            StruggleLockPickImpossiblePins.push(StruggleLockPickOrder[StruggleLockPickOrder.length - 1]);
                            if (NumPins >= 6) StruggleLockPickImpossiblePins.push(StruggleLockPickOrder[StruggleLockPickOrder.length - 2]);
                            if (NumPins >= 8) StruggleLockPickImpossiblePins.push(StruggleLockPickOrder[StruggleLockPickOrder.length - 3]);
                        }
                        var NumTries = Math.max(Math.floor(NumPins * (1.5 - 0.3 * BondageLevel / 10)),
                            Math.ceil(NumPins * (3.25 - BondageLevel / 10) - Math.max(0, (StruggleLockPickProgressChallenge + BondageLevel / 2) * 1.5)));
                        StruggleLockPickProgressMaxTries = Math.max(1, NumTries - NumPins);
                    }
                }
            }
        } else if (content.indexOf("/wardrobe") == 0) {
            var targetname = content.substring(10).trim();
            var targetfinder = new RegExp('^' + targetname + '', 'i');
            var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
            if (target[0] == null) {
                var targetnumber = parseInt(targetname);
                target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);
            };
            if (target[0] != null) {
                target[0].OnlineSharedSettings.AllowFullWardrobeAccess = true;
                target[0].OnlineSharedSettings.BlockBodyCosplay = false;
                ChatRoomClickCharacter(target[0]);
                DialogChangeClothes();
            }
        } else if (content.indexOf("/whisper") == 0) {
            var targetname = content.substring(8).trim();
            var targetfinder = new RegExp('^' + targetname + '', 'i');
            var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
            if (target[0] == null) {
                var targetnumber = parseInt(targetname);
                target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);
            };
            if (target[0] != null) {
                ChatRoomTargetMemberNumber = target[0].MemberNumber;
            }
        } else if (content.indexOf('@') == 0) {
            ElementValue("InputChat", content.replace('@', "?"));
            OLDmenu();
            return;
        } else if (tenorRe.test(ElementValue("InputChat"))) {
            if (ChatRoomTargetMemberNumber == null) {
                sendHiddenMessageAll(content);
            } else {
                sendHiddenMessageTarget('CheckMediaSupport', ChatRoomTargetMemberNumber);
                sendHiddenMessageTarget('whisper ' + content, ChatRoomTargetMemberNumber);
                var msg = createMessageElement();
                getChatWindowElement().append(msg);
                var senderName = document.createElement("div");
                senderName.innerText = `Whisper to ${findCharacterInRoom(ChatRoomTargetMemberNumber).Name}:`;
                senderName.classList.add("ChatMessage", "ChatMessageWhisper");
                senderName.style.paddingLeft = "0";
                var a = document.createElement("a");
                a.target = '_blank';
                a.href = `${content}`;
                var img = createImgElement(content);
                img.style.maxWidth = '40%';
                img.style.maxHeight = '40%';
                msg.append(senderName);
                a.append(img);
                msg.append(a);
                img.addEventListener('load', () => {
                    ElementScrollToEnd("TextAreaChatLog");
                })
            }
            ElementRemove("InputChat");
            return;
        } else if (tubeRe.test(ElementValue("InputChat"))) {
            if (ChatRoomTargetMemberNumber == null) {
                sendHiddenMessageAll(content);
            } else {
                sendHiddenMessageTarget('CheckMediaSupport', ChatRoomTargetMemberNumber);
                sendHiddenMessageTarget('whisper ' + content, ChatRoomTargetMemberNumber);
                var videoCode = content.match(tubeRe)[5];
                var msg = createMessageElement();
                getChatWindowElement().append(msg);
                var link = `https://www.youtube.com/embed/${videoCode}`;
                var senderName = document.createElement("div");
                senderName.innerText = `Whisper to ${findCharacterInRoom(ChatRoomTargetMemberNumber).Name}:`;
                senderName.classList.add("ChatMessage", "ChatMessageWhisper");
                senderName.style.paddingLeft = "0";
                var iframe = document.createElement('iframe');
                iframe.src = link;
                iframe.style.width = '50%';
                iframe.style.height = '8em';
                msg.append(senderName);
                msg.append(iframe);
                iframe.addEventListener('load', () => {
                    ElementScrollToEnd("TextAreaChatLog");
                })
            }
            ElementRemove("InputChat");
            return;
        }

        //	DO NOT add new commands past this point.



        //IDEAS
        // -make an auto change background and select 10 of which should cycle
        //-make code to auto promote admin lovers, owner, sub,
        //-make a background rezier that can be seen by others and restorer
        //-make a "move closer togheter" code that can be seen by others and restorer
        //-move speech over toa a "random gestures" that will do yawn and post in chat, use emotes randomly, stick on stuff randomly, detects afk and does stuff, eventually sleeping, perhaps even testing restrains and such
        //-add special safeword If on extreme, add a cooldown after each ue.

        //3 beep leash code, can be used by any
        //add code to be comitted to asylum, can be used by any
        //add code to be added to jail, to be used by any
        //add code to forced work as maid, to be used by any
        //MERGE ALL ABOVE INTO ONE, JUST ADD A SPECIAL CUSTOM CHOSEN WORD NEEDD IN ORDER TO USE that's auto generated adn whsipered to palyer at command

        //add improvestruddle code


        //-make a mid sentence gag talk, rather than looking for double whitespace
        //add game room scripts
        //fix highlights
        //make a group whisper chatREQUIRES JUST "SERVERSEND WHISPER? NO OTHER WAY
        //add auto NPC grab code
        //add code to remove safeties like validation
        //rewrite code to change name and add
        //change whisper code to not just set target but rather /whipser name texthere
        //join room, create room code, from within a room. Seems unecessary since /search code can already accomplish.
        //make safeword total for non hardcore/extrene. Seems unecessary, real asfeword already exist.
        else { //check which speech mode should be used
            if (this.BabyTalkOn == true) {
                content = SpeechBabyTalk({
                    Effect: ["RegressedTalk"]
                }, content);
                ServerSend("ChatRoomChat", {
                    "Content": content,
                    "Type": "Chat"
                })
                ElementValue("InputChat", "");
            } else if (this.TalkGagLightOn == true) {
                content = SpeechGarbleByGagLevel(1, content);
                ServerSend("ChatRoomChat", {
                    "Content": content,
                    "Type": "Chat"
                });
                ElementValue("InputChat", "");
            } else if (this.TalkGagHeavyOn == true) {
                content = SpeechGarbleByGagLevel(6, content);
                ServerSend("ChatRoomChat", {
                    "Content": content,
                    "Type": "Chat"
                });
                ElementValue("InputChat", "");
            } else {
                OLDmenu()
            }
        }
        ElementValue("InputChat", "");
    }
}
//if modified code above is not called, use original.
var OLDmenu = ChatRoomSendChat;
var ChatRoomSendChat = NEWmenu;

//below is additional stuff

//greeting message.
ChatCommandGreeting = function(data) {
    if (CurrentScreen == "ChatRoom" && data.Content == "ServerEnter") {
        ChatRoomSendLocal(
            "Quick-AccessMenu2 - version 1.4.2: Ready, type <b>/help</b> for general menu.\n" +
            "Use <b>/help new</b> to get info about changes in current QAM version.\n" +
            "For any inquiries, join https://discord.gg/YukepB6RVp"
        );
        ServerSocket.off('ChatRoomMessage', ChatCommandGreeting)
    }
}
setTimeout(function() {
    ServerSocket.on('ChatRoomMessage', ChatCommandGreeting);
}, 5000);

//AutoRelog/AntiDisconnect
function LoginDoLogin() { //rewrite login to variabilize credentials for later use
    if (!LoginSubmitted && ServerIsConnected) {
        this.LoginName = ElementValue("InputName");
        this.LoginPassword = ElementValue("InputPassword");
        var letters = /^[a-zA-Z0-9]+$/;
        if (LoginName.match(letters) && LoginPassword.match(letters) && (LoginName.length > 0) && (LoginName.length <= 20) && (LoginPassword.length > 0) && (LoginPassword.length <= 20)) {
            LoginSetSubmitted();
            ServerSend("AccountLogin", {
                AccountName: LoginName,
                Password: LoginPassword
            });
        } else LoginStatusReset("InvalidNamePassword");
    }
    LoginUpdateMessage();
}

function ServerDisconnect(data, close = false) { //rewrite disconnect to prevent relog screen
    if (!ServerIsConnected) return;
    ChatRoomSendLocal("Disconnected! Reconnecting...");
    const ShouldRelog = Player.Name != "";
    AutoRelog();
    let msg = data;
    if (data) {
        console.warn(data);
        msg = data;
    }
    ServerSetConnected(false, msg);
    if (close) {
        ServerSocket.disconnect();
    }
}

function AutoRelog() {
    if (ServerPlayerIsInChatRoom()) {
        RelogChatLog = document.getElementById("TextAreaChatLog").cloneNode(true);
        RelogChatLog.id = "RelogChatLog";
        RelogChatLog.name = "RelogChatLog";
        RelogInputText = ElementValue("InputChat").trim();
        ElementRemove("InputChat");
        ElementRemove("TextAreaChatLog");
        CurrentScreen = "ChatSearch";
        CurrentModule = "Online";
        CurrentCharacter = null;
    } else {
        RelogChatLog = null;
        RelogInputText = "";
    }
    RelogData = {
        Screen: CurrentScreen,
        Module: CurrentModule,
        Character: CurrentCharacter
    };
    CurrentCharacter = null;
    ServerSend("AccountLogin", {
        AccountName: LoginName,
        Password: LoginPassword
    });
}

//其他功能
function consoleWhisper() {
    ServerSend("ChatRoomChat", {
        Content: "Quick-Access Menu2: " + Player.Name + " 已使用控制台更改外观。 如果这是不希望的，将她列入黑名单。",
        Type: "Whisper",
        Target: ChatRoomTargetMemberNumber
    })
};

function updateBackground() {
    var UpdatedRoom = {
        Name: ChatRoomData.Name,
        Description: ChatRoomData.Description,
        Language: ChatRoomData.Language,
        Background: ChatCreateBackgroundSelect,
        Limit: "" + ChatRoomData.Limit,
        Admin: ChatRoomData.Admin,
        Ban: ChatRoomData.Ban,
        BlockCategory: ChatRoomData.BlockCategory,
        Game: ChatRoomData.Game,
        Private: ChatRoomData.Private,
        Locked: ChatRoomData.Locked,
    };
    ServerSend("ChatRoomAdmin", {
        MemberNumber: Player.ID,
        Room: UpdatedRoom,
        Action: "Update",
    });
}

//Mouth animator
var expressionAnimation;
var expressionAnimationIndex = 0;

function RunExpressionAnimationStep() {
    CharacterSetFacialExpression(Player, "Mouth", expressionAnimation[expressionAnimationIndex++]);
    if (expressionAnimationIndex < expressionAnimation.length) {
        setTimeout(RunExpressionAnimationStep, 1000);
    } else {
        expressionAnimation = null;
    }
}

function RunExpressionAnimation(list) {
    if (expressionAnimation) {
        return;
    }
    expressionAnimation = list;
    expressionAnimationIndex = 0;
    expressionAnimationEx = InventoryGet(Player, "Mouth");
    if (expressionAnimationEx && expressionAnimationEx.Property && expressionAnimationEx.Property.Expression) {
        expressionAnimation[expressionAnimation.length - 1] = expressionAnimationEx.Property.Expression; //set last to current
    }
    RunExpressionAnimationStep();
}
//core functionaliy moved to: /speak /mouth /speech


//Moaner
//ChatRoom
/*var backupChatRoomSendChat;
var backupActivityOrgasmPrepare;
var backupActivityOrgasmStart;
var backupChatRoomMessage;
var backupChatRoomFirstTimeHelp;*/

var M_MOANER_scriptOn = true;
let backupChatRoomMessage = ChatRoomMessage;

function M_MOANER_MoanerInitAlteredFns() {
    //gemissements quand on parle
    M_MOANER_initChatRoomSendChatOverride();
    //initActivityOrgasmPrepareOverride();
    M_MOANER_initActivityOrgasmStart();
    //gemissements quand on recoit une stimulation
    M_MOANER_initChatRoomMessageOverride();
    //message d'aide
    M_MOANER_initChatRoomFirstTimeHelpOverride();
}

function M_MOANER_initChatRoomFirstTimeHelpOverride() {
    let backupChatRoomFirstTimeHelp = ChatRoomFirstTimeHelp;
    ChatRoomFirstTimeHelp = () => {
        firstHelp();
        backupChatRoomFirstTimeHelp();
    }
}

var M_MOANER_tempChatRoomData;

function M_MOANER_initChatRoomMessageOverride() {
    M_MOANER_logDebug("Entree initChatRoomOverride pour ChatRoomMessage");
    let backupChatRoomMessage = ChatRoomMessage;
    ChatRoomMessage = (data) => {
        if (M_MOANER_scriptOn && window.CurrentScreen == "ChatRoom") {
            M_MOANER_tempChatRoomData = data;
            if (data != null && data.Content != undefined && data.Content != null) {
                M_MOANER_logDebug("lancerM_MOANER_reactionTrigger");
                M_MOANER_reactionTrigger(data);
            }
        }
        backupChatRoomMessage(data);
    };
}

function M_MOANER_initChatRoomSendChatOverride() {
    M_MOANER_logDebug("Entree M_MOANER_MoanerInitAlteredFns pour ChatRoomSendChat");
    let backupChatRoomSendChat = ChatRoomSendChat;
    ChatRoomSendChat = (...rest) => {

        let msg = ElementValue("InputChat").trim();
        if (M_MOANER_scriptOn && M_MOANER_isSimpleChat(msg)) {
            msg = M_MOANER_reactionExcitation(Player, msg);
            ElementValue("InputChat", msg);
        }
        M_MOANER_logDebug("msg=" + msg);
        backupChatRoomSendChat(...rest);
        M_MOANER_logDebug("Sortie ChatRoomSendChat");
    };
}

function M_MOANER_initActivityOrgasmStart() {
    let backupActivityOrgasmStart = ActivityOrgasmStart;
    ActivityOrgasmStart = (C) => {
        if (M_MOANER_scriptOn) {
            M_MOANER_reactionOrgasm(C);
        }
        backupActivityOrgasmStart(C);
    };
}

function M_MOANER_isCommande(msg) {
    return msg.startsWith("/") && ChatRoomTargetMemberNumber == null;
}

function M_MOANER_isSimpleChat(msg) {
    return msg.trim().length > 0 && !msg.startsWith("/") && !msg.startsWith("(") && !msg.startsWith("*") && ChatRoomTargetMemberNumber == null;
}

function M_MOANER_isInChatRoom() {
    return window.CurrentScreen == "ChatRoom";
}

//MoanerCommands
//commande:
//@moaner feature commande
//feature: talk (quand on parle), orgasm, startVibrator, spank
//commande On, OFF

var M_MOANER_moanerKey = "bc_moaner_";

//features
var M_MOANER_talkActive = true;
var M_MOANER_orgasmActive = true;
var M_MOANER_vibratorActive = true;
var M_MOANER_spankActive = true;
var M_MOANER_verboseActive = true;
var M_MOANER_firstHelpSeen = false;

var M_MOANER_scriptStatus = ["The moaner is active.", "The moaner is not active."];
var M_MOANER_orgasmStatus = ["The orgasm moan is active. You will moan while cumming.", "The orgasm moan is not active. You will not moan while cumming anymore."];
var M_MOANER_vibratorStatus = ["The vibes moan is active. If your vibrator's setting changes, you will moan.", "The vibes moan is not active. If your vibrator's setting changes, you will not moan."];
var M_MOANER_spankStatus = ["The spank moan is active. You will moan while being spanked.", "The spank moan is not active. You will not moan while being spanked."];
var M_MOANER_talkStatus = ["The talk moan is active. If you're vibed, you will moan while speaking.", "The talk moan is not active. If you're vibed, you will not moan while speaking anymore."];
var M_MOANER_verboseStatus = ["Moaner is verbose.", "Moaner is not verbose."];
var M_MOANER_profileStatus = ["No custom profile loaded.", "Current moans profile: "];
var M_MOANER_profileListM_MOANER_intro = "Available moaning profiles: ";

var M_MOANER_intro = "Myrhanda Moaner installed. Type /moaner for more info, /moaner status for current status.";

function M_MOANER_initControls() {
    var datas = JSON.parse(localStorage.getItem(M_MOANER_moanerKey + "_" + Player.MemberNumber));

    if (datas == null || datas == undefined) {
        M_MOANER_talkActive = true;
        M_MOANER_orgasmActive = true;
        M_MOANER_vibratorActive = true;
        M_MOANER_spankActive = true;
        M_MOANER_scriptOn = false;
        profileName = "default";
        //M_MOANER_saveControls();
    } else {
        M_MOANER_talkActive = datas.talkMoan;
        M_MOANER_orgasmActive = datas.orgasmMoan;
        M_MOANER_vibratorActive = datas.vibeMoan;
        M_MOANER_spankActive = datas.spankMoan;
        M_MOANER_scriptOn = datas.script;
        profileName = datas.moanProfile;
    }
}

function M_MOANER_saveControls() {
    var controls = {
        "talkMoan": M_MOANER_talkActive,
        "orgasmMoan": M_MOANER_orgasmActive,
        "vibeMoan": M_MOANER_vibratorActive,
        "spankMoan": M_MOANER_spankActive,
        "script": M_MOANER_scriptOn,
        "moanProfile": profileName
    };
    localStorage.setItem(M_MOANER_moanerKey + "_" + Player.MemberNumber, JSON.stringify(controls));
}

function M_MOANER_deleteControls() {
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.startsWith(M_MOANER_moanerKey) && key.endsWith(Player.MemberNumber)) {
            localStorage.removeItem(key);
        }
    }
}

//控制整个脚本
function scriptControl(commande) {
    if (commande == "on") {
        M_MOANER_scriptOn = true;
    } else if (commande == "off") {
        M_MOANER_scriptOn = false;
    }
    showM_MOANER_scriptStatus();
}

//controle sur le mode verbose
function verboseControl(commande) {
    if (commande == "on") {
        M_MOANER_verboseActive = true;
    } else if (commande == "off") {
        M_MOANER_verboseActive = false;
    }
    showM_MOANER_verboseStatus();
}

//controle sur les gÃ©missements quand on parle
function talkControl(commande) {
    if (commande == "on") {
        M_MOANER_talkActive = true;
    } else if (commande == "off") {
        M_MOANER_talkActive = false;
    }
    showM_MOANER_talkStatus();
}

//controle sur les gÃ©missements Ã  l'orgasme
function orgasmControl(commande) {
    if (commande == "on") {
        M_MOANER_orgasmActive = true;
    } else if (commande == "off") {
        M_MOANER_orgasmActive = false;
    }
    showM_MOANER_orgasmStatus();
}

//controle sur les gÃ©missements au lancement d'un vibrateur
function vibeControl(commande) {
    if (commande == "on") {
        M_MOANER_vibratorActive = true;
    } else if (commande == "off") {
        M_MOANER_vibratorActive = false;
    }
    showM_MOANER_vibratorStatus();
}

//controle sur les gÃ©missements Ã  la fessÃ©e
function spankControl(commande) {
    if (commande == "on") {
        M_MOANER_spankActive = true;
    } else if (commande == "off") {
        M_MOANER_spankActive = false;
    }
    showM_MOANER_spankStatus();
}

function firstHelp() {
    //console.log("ChatRoomHelpSeen="+ChatRoomHelpSeen);
    if (!M_MOANER_firstHelpSeen) {
        M_MOANER_firstHelpSeen = true;
        console.log("firstHelp! " + ChatRoomHelpSeen);
        M_MOANER_sendMessageToWearer(M_MOANER_intro);
    }
}

function profilesList() {
    let liste = M_MOANER_getKeys(M_MOANER_moansProfiles);
    let msg = M_MOANER_profileListM_MOANER_intro + liste;
    M_MOANER_sendMessageToWearer(msg);
}

//Status
function showStatus() {
    showM_MOANER_scriptStatus();
    showM_MOANER_profileStatus();
    showM_MOANER_talkStatus();
    showM_MOANER_orgasmStatus();
    showM_MOANER_vibratorStatus();
    showM_MOANER_spankStatus();
    showM_MOANER_verboseStatus();
}

function showM_MOANER_profileStatus() {
    if (!M_MOANER_verboseActive) {
        return;
    }
    let msg;
    if (profileName == "default") {
        msg = M_MOANER_profileStatus[0];
    } else {
        msg = M_MOANER_profileStatus[1] + profileName;
    }
    M_MOANER_sendMessageToWearer(msg);
}

function showM_MOANER_verboseStatus() {
    if (!M_MOANER_verboseActive) {
        return;
    }
    let msg;
    if (M_MOANER_scriptOn) {
        msg = M_MOANER_verboseStatus[0];
    } else {
        msg = M_MOANER_verboseStatus[1];
    }
    M_MOANER_sendMessageToWearer(msg);
}

function showM_MOANER_scriptStatus() {
    if (!M_MOANER_verboseActive) {
        return;
    }
    let msg;
    if (M_MOANER_scriptOn) {
        msg = M_MOANER_scriptStatus[0];
    } else {
        msg = M_MOANER_scriptStatus[1];
    }
    M_MOANER_sendMessageToWearer(msg);
}

function showM_MOANER_talkStatus() {
    if (!M_MOANER_verboseActive) {
        return;
    }
    let msg;
    if (M_MOANER_talkActive) {
        msg = M_MOANER_talkStatus[0];
    } else {
        msg = M_MOANER_talkStatus[1];
    }
    M_MOANER_sendMessageToWearer(msg);
}

function showM_MOANER_orgasmStatus() {
    if (!M_MOANER_verboseActive) {
        return;
    }
    let msg;
    if (M_MOANER_orgasmActive) {
        msg = M_MOANER_orgasmStatus[0];
    } else {
        msg = M_MOANER_orgasmStatus[1];
    }
    M_MOANER_sendMessageToWearer(msg);
}

function showM_MOANER_vibratorStatus() {
    if (!M_MOANER_verboseActive) {
        return;
    }
    let msg;
    if (M_MOANER_vibratorActive) {
        msg = M_MOANER_vibratorStatus[0];
    } else {
        msg = M_MOANER_vibratorStatus[1];
    }
    M_MOANER_sendMessageToWearer(msg);
}

function showM_MOANER_spankStatus() {
    if (!M_MOANER_verboseActive) {
        return;
    }
    let msg;
    if (M_MOANER_spankActive) {
        msg = M_MOANER_spankStatus[0];
    } else {
        msg = M_MOANER_spankStatus[1];
    }
    M_MOANER_sendMessageToWearer(msg);
}

//MoanerUtils

function M_MOANER_logDebug(msg) {}

function startDebug() {
    M_MOANER_logDebug = (msg) => {
        console.log("DEBUG: " + msg);
    };
}

function stopDebug() {
    M_MOANER_logDebug = (msg) => {
        console.log("DEBUG: " + msg);
    };
}

let MoanerIsLoaded;

MoanerLoginListener();

async function MoanerLoginListener() {
    while (!MoanerIsLoaded) {
        try {
            while ((!window.CurrentScreen || window.CurrentScreen == "Login" || (typeof window.CursedStarter === "function" && window.cursedConfig === undefined)) && !MoanerIsLoaded) {
                //console.log("cherche isLoaded");
                //console.log("window.CurrentScreen="+window.CurrentScreen);
                await new Promise(r => setTimeout(r, 2000));
            }
            //console.log("window.CurrentScreen="+window.CurrentScreen);
            //console.log("MoanerIsLoaded trouvÃ©");
            MoanerIsLoaded = true;
            M_MOANER_MoanerInitAlteredFns();
            M_MOANER_initControls();

        } catch (err) {
            console.log(err);
        }
        await new Promise(r => setTimeout(r, 2000));
    }
}

function M_MOANER_getKeys(obj) {
    var keys = [];
    for (var key in obj) {
        keys.push(key);
    }
    return keys;
}

function M_MOANER_shuffle(array, seed) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    // While there remain elements to M_MOANER_shuffle...
    while (0 !== currentIndex) {
        seed = M_MOANER_getRandomNumber(seed);

        // Pick a remaining element...
        randomIndex = seed % (array.length - 1);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function M_MOANER_sendMessageToWearer(msg) {
    ServerSend("ChatRoomChat", {
        Type: "Action",
        Content: "gag",
        Target: Player.MemberNumber,
        Dictionary: [{
            Tag: "gag",
            Text: msg
        }],
    });
}

function M_MOANER_getRandomNumber(seed) {
    let number = Math.floor(Math.abs(Math.sin(seed) * 1000));
    return number;
}

//MoanerManagement

/*const baseM_MOANER_factor4Moans=["n... Nyah\u2665","Oooh","mmmmmh!","NYyaaA\u2665"];
const baseM_MOANER_factor3Moans=["mm","aaaah","nyAh\u2665"];
const baseM_MOANER_factor2Moans=["nyah\u2665","Aah!","mh","oh!\u2665","mh\u2665"];
const basefactor1Moans=["mh","\u2665oh\u2665","ah","...\u2665"];
const baseM_MOANER_orgasmMoans=["Nya...Ny...NyaaAAaah!","Mmmmh... MMmh... Hhhmmmm...","Oooooh... Mmmmh... OooOOOOh!","Mmmhnn... Nyhmm... Nyah!"];
const basePainMoans=["Aie!","Aoouch!","Eek","ouch","Aow"];*/

var M_MOANER_profileName = "default";

M_MOANER_defaultMoans = {
    "hot": ["n... Nyah\u2665", "Oooh", "mmmmmh!", "NYyaaA\u2665"],
    "medium": ["mm", "aaaah", "nyAh\u2665"],
    "light": ["nyah\u2665", "Aah!", "mh", "oh!\u2665", "mh\u2665"],
    "low": ["mh", "\u2665oh\u2665", "ah", "...\u2665"],
    "orgasm": ["Nya...Ny...NyaaAAaah!", "Mmmmh... MMmh... Hhhmmmm...", "Oooooh... Mmmmh... OooOOOOh!", "Mmmhnn... Nyhmm... Nyah!"],
    "pain": ["Aie!", "Aoouch!", "Aaaaie!", "Ouch", "Aow"]
}

M_MOANER_customMoans = {
    "hot": [],
    "medium": [],
    "light": [],
    "low": [],
    "orgasm": [],
    "pain": []
}

var M_MOANER_moansProfiles = [];

function M_MOANER_activerProfile(name) {
    if (M_MOANER_moansProfiles[name] == undefined) {
        profileName = "default";
        resetMoans(Math.random() * 300);
    } else {
        profileName = name;
        resetMoans(Math.random() * 300);
    }
}

function M_MOANER_getMoans(name) {
    var pleasureMoans = M_MOANER_moansProfiles[name];
    if (pleasureMoans == undefined) {
        pleasureMoans = M_MOANER_defaultMoans;
    }
    return pleasureMoans;
}

function M_MOANER_addMoansProfile(name, pleasure) {
    if (pleasure.hot == undefined || pleasure.hot.length == 0) {
        pleasure.hot = M_MOANER_defaultMoans.hot;
    }
    if (pleasure.medium == undefined || pleasure.medium.length == 0) {
        pleasure.medium = M_MOANER_defaultMoans.medium;
    }
    if (pleasure.light == undefined || pleasure.light.length == 0) {
        pleasure.light = M_MOANER_defaultMoans.light;
    }
    if (pleasure.low == undefined || pleasure.low.length == 0) {
        pleasure.low = M_MOANER_defaultMoans.low;
    }
    if (pleasure.orgasm == undefined || pleasure.orgasm.length == 0) {
        pleasure.orgasm = M_MOANER_defaultMoans.orgasm;
    }
    if (pleasure.pain == undefined || pleasure.pain.length == 0) {
        pleasure.pain = M_MOANER_defaultMoans.pain;
    }
    M_MOANER_moansProfiles[name] = pleasure;
}

function addLowMoans(name, pleasureList) {
    var profile = M_MOANER_moansProfiles[name];
    if (profile == undefined) {
        profiledefaultPleasureMoans;
    }
    profile.low = pleasureList;
    addMoansProfile(name, profile);
}

M_MOANER_addMoansProfile("default", M_MOANER_defaultMoans);

//MoanerReactions

var M_MOANER_orgasmMoans = [];

var M_MOANER_factor4Moans = [];
var M_MOANER_factor3Moans = [];
var M_MOANER_factor2Moans = [];
var factor1Moans = [];
var PROPORTION_MAX = 40;

/******************************************************************/
//rÃ©agir au chat
/******************************************************************/
function M_MOANER_reactionExcitation(C, CD) {

    if (M_MOANER_talkActive && IsStimulated(C)) {

        // Validate nulls
        if (CD == null) CD = "";

        // Validates that the preferences allow stuttering
        /*if ((C.ArousalSettings == null) || (C.ArousalSettings.AffectStutter == null) || (C.ArousalSettings.AffectStutter != "None")) {
        	return M_MOANER_applyMoanToMsg(C,CD);
        }*/
        return M_MOANER_applyMoanToMsg(C, CD);
    }

    // No stutter effect, we return the regular text
    return CD;
}

function M_MOANER_reactionOrgasm(C) {
    if (M_MOANER_orgasmActive && M_MOANER_scriptOn && C.MemberNumber == Player.MemberNumber && window.CurrentScreen == "ChatRoom") {
        if (C.ID == 0 && C.MemberNumber == Player.MemberNumber) {
            var moan;
            var backupChatRoomTargetMemberNumber = null;
            //doit pas se lancer en prive
            //doit pas se lancer en /me
            //doit se lancer uniquement en chat simple
            msg = ElementValue("InputChat");
            if (M_MOANER_isSimpleChat(msg)) {

                moan = msg + "... " + getOrgasmMoan();

                ElementValue("InputChat", moan);
                msg = "";
                ChatRoomSendChat();
            } else {
                backupChatRoomTargetMemberNumber = ChatRoomTargetMemberNumber;
                ChatRoomTargetMemberNumber = null;
                moan = "... " + getOrgasmMoan();
                ElementValue("InputChat", moan);
                ChatRoomSendChat();
                ChatRoomTargetMemberNumber = backupChatRoomTargetMemberNumber;
                ElementValue("InputChat", msg);
            }
        }
    }
}

function M_MOANER_reactionTrigger(data) {
    if (M_MOANER_isPlayerTarget(data)) {
        var msg = ElementValue("InputChat");
        if (M_MOANER_isSimpleChat(msg)) {
            M_MOANER_reactionVibeWithChat(data);
            M_MOANER_reactionSpankWithChat(data);
        } else {
            M_MOANER_reactionSpankWithoutChat(data);
            M_MOANER_reactionVibeWithoutChat(data);
        }
    }
}

function M_MOANER_reactionSpankWithChat(data) {
    if (M_MOANER_spankActive && M_MOANER_isSpank(data)) {
        //rÃ©cupÃ©rer le gÃ©missement Ã  appliquer
        //datas pour gÃ©nÃ©ration des gÃ©missements
        var Factor = Math.floor(Player.ArousalSettings.Progress / 20);
        var moan = getSpankMoan(Factor, Math.random() * 300);
        var msg = ElementValue("InputChat");
        if (msg != "") {
            moan = msg + "... " + moan;
        }
        ElementValue("InputChat", moan);
        ChatRoomSendChat();
    }
}

function M_MOANER_reactionSpankWithoutChat(data) {
    if (M_MOANER_spankActive && M_MOANER_isSpank(data)) {
        //rÃ©cupÃ©rer le gÃ©missement Ã  appliquer
        //datas pour gÃ©nÃ©ration des gÃ©missements
        var Factor = Math.floor(Player.ArousalSettings.Progress / 20);
        var moan = getSpankMoan(Factor, Math.random() * 300);
        var msg = ElementValue("InputChat");
        let backtarget = ChatRoomTargetMemberNumber;
        ChatRoomTargetMemberNumber = null;
        ElementValue("InputChat", moan);
        ChatRoomSendChat();
        ElementValue("InputChat", msg);
        ChatRoomTargetMemberNumber = backtarget;
    }
}

function M_MOANER_reactionVibeWithoutChat(data) {
    if (M_MOANER_vibratorActive && M_MOANER_isVibes(data)) {
        //rÃ©cupÃ©rer le gÃ©missement Ã  appliquer
        //datas pour gÃ©nÃ©ration des gÃ©missements
        var Factor = Math.floor(Player.ArousalSettings.Progress / 20);
        var moan = getMoan(Factor, true, Math.random() * 300);
        var msg = ElementValue("InputChat");
        let backtarget = ChatRoomTargetMemberNumber;
        ChatRoomTargetMemberNumber = null;
        ElementValue("InputChat", moan);
        ChatRoomSendChat();
        ElementValue("InputChat", msg);
        ChatRoomTargetMemberNumber = backtarget;
    }
}

function M_MOANER_reactionVibeWithChat(data) {
    if (M_MOANER_vibratorActive && M_MOANER_isVibes(data)) {
        //rÃ©cupÃ©rer le gÃ©missement Ã  appliquer
        //datas pour gÃ©nÃ©ration des gÃ©missements
        var Factor = Math.floor(Player.ArousalSettings.Progress / 20);
        var moan = getMoan(Factor, true, Math.random() * 300);
        var msg = ElementValue("InputChat");
        console.log("msg=" + msg);
        if (msg != "") {
            moan = msg + "... " + moan;
        }
        ElementValue("InputChat", moan);
        ChatRoomSendChat();
    }
}

function M_MOANER_isSpank(data) {
    var array = data.Dictionary;
    if (data.Content == "ActionActivitySpankItem") {
        return true;
    }
    for (index in array) {
        let elem = array[index];
        if (elem.Tag == "ActivityName") {
            if (elem.Text == "Spank" || elem.Text == "Slap") {
                return true;
            }
        }
    }
    return false;
}

function M_MOANER_isVibes(data) {
    if (data.Type == "Action" && data.Content.includes("Vibe")) {
        return true;
    }
    return false;
}

function M_MOANER_isPlayerTarget(data) {
    var array = data.Dictionary;
    for (index in array) {
        let elem = array[index];
        if ((elem.Tag == "DestinationCharacter" || elem.Tag == "TargetCharacter" || elem.Tag == "DestinationCharacterName") && elem.MemberNumber == Player.MemberNumber) {
            return true;
        }
    }
    return false;
}

function M_MOANER_applyMoanToMsg(C, CD) {
    //dÃ©terminer le nombre de gÃ©missements
    //calculer Ã§a en fonction du nombre de mots
    //proportion: PROPORTION_MAX*niveauExcitation
    //PROPORTION_MAX=40%
    var proportion = C.ArousalSettings.Progress * PROPORTION_MAX / 10000;
    M_MOANER_logDebug("proportion: " + proportion);
    var CDList = CD.split(" ");

    var currentIndex = 0;
    var stop = false;
    var finalTextList = [];

    //rÃ©cupÃ©rer les gÃ©missements Ã  appliquer
    //datas pour gÃ©nÃ©ration des gÃ©missements
    var Factor = Math.floor(C.ArousalSettings.Progress / 20);
    while (currentIndex < CDList.length) {
        //si le prochain mot contient une parenthÃ¨se, on arrÃ¨te la rÃ©partission des gÃ©missements)
        var currentWord = CDList[currentIndex++];
        var presenceParenthese = M_MOANER_detectParentheses(currentWord);
        if (presenceParenthese == 1) {
            stop = true;
        }
        if (stop) {
            finalTextList.push(currentWord);
        } else {
            let random = Math.ceil(Math.random() * 100)
            let result;
            if (random <= proportion * 100) {
                if (random % 2 == 0) {
                    result = currentWord + "..." + getMoan(Factor, true, CD.length);
                } else {
                    result = getMoan(Factor, true, CD.length) + " " + currentWord;
                }
                finalTextList.push(result);
            } else {
                finalTextList.push(currentWord);
            }
        }
        if (presenceParenthese == 2) {
            stop = false;
        }
    }
    return finalTextList.join(" ");
}

//return 1 if opening bracket, 2 of closing bracket, 0 otherwise
function M_MOANER_detectParentheses(CD) {
    if (!CD.includes("(") && !CD.includes(")")) {
        return 0;
    }
    for (i = CD.length; i >= 0; i--) {
        if (CD.charAt(i) == ")") {
            return 2;
        }
        if (CD.charAt(i) == "(") {
            return 1;
        }
    }
    return 0;
}

function transformText(isStimulated, L, ArouseFactor, CD) {
    if (isStimulated) {
        return CD.substring(0, L) + CD.charAt(L) + getMoan(ArouseFactor, isStimulated) + CD.substring(L, CD.length);
    } else {
        return CD.substring(0, L) + CD.charAt(L) + "-" + CD.substring(L, CD.length);
    }
}

function getMoan(Factor, isStimulated, seed) {
    //M_MOANER_logDebug("getMoan: factor="+Factor);
    //M_MOANER_logDebug("getMoan: isStimulated="+isStimulated);
    if (!isStimulated) return "";
    //sÃ©lectionner un gÃ©missement
    return " " + selectMoan(Factor, seed);
}

function getSpankMoan(Factor, seed) {
    let gemissement;
    //selon le niveau de fetichisme fessÃ©e
    let activity = getActivityTaste("Spank");
    if (activity == undefined) return "";
    let activityTaste = activity.Self;

    let seuilDouleur = Math.min(10, (4 - activityTaste) * 25);
    let seuilPlaisir = seuilDouleur + 40
    let douleur = Player.ArousalSettings.Progress <= seuilDouleur;
    let plaisir = Player.ArousalSettings.Progress > seuilPlaisir;
    if (douleur) {
        gemissement = getPainMoan();
    } else if (plaisir) {
        gemissement = "\u2665" + getMoan(Factor, true, 300) + "\u2665";
    } else {
        gemissement = getPainMoan() + "\u2665" + getMoan(Factor, true, 300) + "\u2665";
    }
    return gemissement;
}

function getZoneTaste(data) {
    let zone;
    let taste;
    for (index in data.Dictionary) {
        var elem = data.Dictionary[index];
        if (elem.Tag == "ActivityGroup") zone = getZone(elem.Text);
    }
    if (zone == undefined || zone == null || zone.Factor == undefined) {
        return undefined;
    }
    taste = zone.Factor;
    if (zone.Orgasm == true) {
        taste *= 2;
    }
    return taste;
}

function getZone(name) {
    for (index in Player.ArousalSettings.Activity) {
        var zone = Player.ArousalSettings.Zone[index];
        if (zone.Name == name) return zone;
    }
}

function getActivityTaste(name) {
    for (index in Player.ArousalSettings.Activity) {
        var activity = Player.ArousalSettings.Activity[index];
        if (activity.Name == name) return activity;
    }
}

function resetMoans(seed) {
    //M_MOANER_logDebug("resetMoans IN");

    factor1Moans = M_MOANER_shuffle(basefactor1Moans.concat([]), seed);
    M_MOANER_factor2Moans = M_MOANER_shuffle(factor1Moans.concat(baseM_MOANER_factor2Moans), seed);
    M_MOANER_factor3Moans = M_MOANER_shuffle(M_MOANER_factor2Moans.concat(baseM_MOANER_factor3Moans), seed);
    M_MOANER_factor4Moans = M_MOANER_shuffle(M_MOANER_factor3Moans.concat(baseM_MOANER_factor4Moans), seed);
    //M_MOANER_logDebug("resetMoans OUT");
}

function getPainMoanBACK() {
    let index = Math.floor(Math.random() * basePainMoans.length);
    return basePainMoans[index];
}

function resetMoans(seed) {
    //M_MOANER_logDebug("resetMoans IN");
    moanProfile = M_MOANER_getMoans(profileName);
    factor1Moans = M_MOANER_shuffle(moanProfile.low.concat([]), seed);
    M_MOANER_factor2Moans = M_MOANER_shuffle(factor1Moans.concat(moanProfile.light), seed);
    M_MOANER_factor3Moans = M_MOANER_shuffle(M_MOANER_factor2Moans.concat(moanProfile.medium), seed);
    M_MOANER_factor4Moans = M_MOANER_shuffle(M_MOANER_factor3Moans.concat(moanProfile.hot), seed);
    //M_MOANER_logDebug("resetMoans OUT");
}

function getPainMoan() {
    moanProfile = M_MOANER_getMoans(profileName);
    let index = Math.floor(Math.random() * moanProfile.pain.length);
    return moanProfile.pain[index];
}

function getOrgasmMoan() {
    var gemissement;

    if (M_MOANER_orgasmMoans.length == 0) {
        M_MOANER_logDebug("getOrgasmMoan: reset list");
        let seed = 3000;
        M_MOANER_logDebug("getOrgasmMoan: seed=" + seed);
        moanProfile = M_MOANER_getMoans(profileName);
        M_MOANER_orgasmMoans = M_MOANER_shuffle(moanProfile.orgasm.concat([]), seed);
    }
    gemissement = M_MOANER_orgasmMoans.shift();
    return gemissement;
}

function selectMoan(Factor, seed) {
    if (Factor < 2) {
        //M_MOANER_logDebug("factor1Moans.length="+factor1Moans.length);
        if (factor1Moans.length <= 0) {
            resetMoans(seed);
            return selectMoan(Factor, seed);
        } else {
            return factor1Moans.shift();
        }
    } else if (Factor < 3) {
        //M_MOANER_logDebug("M_MOANER_factor2Moans.length="+M_MOANER_factor2Moans.length);
        if (M_MOANER_factor2Moans.length <= 0) {
            resetMoans(seed);
            return selectMoan(Factor, seed);
        } else {
            return M_MOANER_factor2Moans.shift();
        }
    } else if (Factor < 4) {
        //M_MOANER_logDebug("M_MOANER_factor3Moans.length="+M_MOANER_factor3Moans.length);
        if (M_MOANER_factor3Moans.length <= 0) {
            resetMoans(seed);
            return selectMoan(Factor, seed);
        } else {
            return M_MOANER_factor3Moans.shift();
        }
    } else if (Factor >= 4) {
        //M_MOANER_logDebug("M_MOANER_factor4Moans.length="+M_MOANER_factor4Moans.length);
        if (M_MOANER_factor4Moans.length <= 0) {
            resetMoans(seed);
            return selectMoan(Factor, seed);
        } else {
            return M_MOANER_factor4Moans.shift();
        }
    }
}

function IsStimulated(C) {
    if (C.IsEgged() && ((C.ArousalSettings == null) || (C.ArousalSettings.AffectStutter == null) || (C.ArousalSettings.AffectStutter == "Vibration") || (C.ArousalSettings.AffectStutter == "All")))
        for (let A = 0; A < C.Appearance.length; A++) {
            var Item = C.Appearance[A];
            if (InventoryItemHasEffect(Item, "Vibrating", true))
                return true;
        }
    return false;
}

//MoanerProfiles
//dog
M_MOANER_dogMoans = {
    "hot": ["w... Wouuuf\u2665", "aouuh\u2665"],
    "medium": ["waaaf\u2665", "ky\u016b\u016b\n", "..wouf"],
    "light": ["Ouaff\u2665", "Aouh!", "Oua\u2665af", "Ky\u016bn\u2665"],
    "low": ["wou..", "ouah\u2665", "Wouf\u2665", "\u2665ky\u016bn\u2665", "ky\u016b\u2665"],
    "orgasm": ["ouaf\u2665 O... Ouuw... Ouaaaa!!", "Mmmhnn... aaaa... Ouuuaaaaaf!!", "mmmh... Aouuuh.... Aouhhhh!"],
    "pain": ["Ka\u00ef!", "Aoouch!", "Kaaa\u00ef!", "Ouch", "Aow"]
}
M_MOANER_addMoansProfile("dog", M_MOANER_dogMoans);

//fox
//base: wif, yif, aouh
//thanks to Noriko
M_MOANER_foxMoans = {
    "hot": ["w... Wiiif\u2665", "Yiiif\u2665"],
    "medium": ["wiiif\u2665", "Yiii", "..yif"],
    "light": ["Wiff\u2665", "Yif!", "yi\u2665iif", "Wiif"],
    "low": ["wif", "Wy\u2665", "if\u2665", "\u2665yi\u2665", "Yi\u2665"],
    "orgasm": ["Wiff\u2665 W... Wiii... WIIF!!", "Mmmhnn... Wiiif... Yiiiif!!", "mmmh... Aouuuh.... Aouhhhh!"],
    "pain": []
}
M_MOANER_addMoansProfile("fox", M_MOANER_foxMoans);

//mouse
//base coui
M_MOANER_mouseMoans = {
    "hot": ["Scouiiic\u2665", "couiiic\u2665"],
    "medium": ["scouiii\u2665", "Couyk", "..scoui"],
    "light": ["Scouii\u2665", "Coui!", "kouu\u2665ic", "Couic \u2665"],
    "low": ["coui..", "scoui\u2665", "cou\u2665i", "Couic ", "koui\u2665"],
    "orgasm": ["Couic\u2665 sc.. couIIIiic!!", "Mmmhnn... ooo... ouiiiic!!", "mmmh... Scouuu.... Scouiiic!"],
    "pain": []
}
M_MOANER_addMoansProfile("mouse", M_MOANER_mouseMoans);

//neko
M_MOANER_nekoMoans = {
    "hot": ["n... Nyah\u2665", "NYyaaA\u2665"],
    "medium": ["nyAh\u2665", "nyyy", "..yah"],
    "light": ["nyah\u2665", "Yah!", "myuh", "mh\u2665"],
    "low": ["myu", "ny\u2665", "mh", "\u2665yh\u2665", "ny\u2665"],
    "orgasm": ["Nya...Ny...NyaaAAaah!", "Mmmhnn... Nyhmm... Nyah!", "mmmh... mmmeeeee.... meeeoooow!"],
    "pain": []
}
M_MOANER_addMoansProfile("neko", M_MOANER_nekoMoans);

//pig
M_MOANER_pigMoans = {
    "hot": ["Gruiik\u2665", "gruik\u2665"],
    "medium": ["gruiii\u2665", "Gruik", "..Grui.."],
    "light": ["Grui\u2665", "Gruik!", "gruuiii\u2665ic", "gruik \u2665"],
    "low": ["grui.. gruiik\u2665", "gruiik\u2665", "gru\u2665i", "Gruik ", "Groi\u2665"],
    "orgasm": ["Gru\u2665 gr.. gruiIIIiick!!", "Mmmhnn... uii... gruiiik!!", "mmmh... Gruiik.... Gruiiiiik!"],
    "pain": ["Gruuik!!", "Aoouch!", "Awo... gruik!", "Ouch", "Gruiiik"]
}
M_MOANER_addMoansProfile("pig", M_MOANER_pigMoans);

//wildFox
M_MOANER_wildFoxMoans = {
    "hot": ["w... Wiiif\u2665", "Yiiif\u2665", "Wa\u2665ouu"],
    "medium": ["wiiif\u2665", "Yiii", "..yif", "waouuu"],
    "light": ["Wiff\u2665", "Yif!", "yi\u2665iif", "Wiif", "waou"],
    "low": ["wif", "Wy\u2665", "if\u2665", "\u2665yi\u2665", "Yi\u2665", "aou"],
    "orgasm": ["WAAAAOUUUUUUUHHHHH!", "Mmmhnn... Wiiif... Yiiiif!!", "AOUUUUUH!", "WAHOOOOOOOUUUUH!", "WAAAAAAAAHH!", "WAAAAOUUUUUUUHHHHH!", "AOUUUUUH!", "WAHOOOOOOOUUUUH!", "WAAAAAAAAHH!"],
    "pain": []
}
M_MOANER_addMoansProfile("wildFox", M_MOANER_wildFoxMoans);


//BC-Diaper-Wetter
// A simple table for the colors that the script will use.
DiaperUseLevels = [
    ["#808080", "#97916A", "#8B8D41"],
    ["#877C6C", "#7E774E"],
    ["#4C3017"]
];

// Use messages table. Brought out here so it could be modified later in the GUI.
DiaperUseMessages = {
    "MessInner": " has messed her inner diaper.",
    "MessInnerFully": " has fully messed her inner diaper.",
    "WetInner": " has wet her inner diaper.",
    "WetInnerFully": " has fully wet her inner diaper.",
    "MessOuter": " has messed her outer diaper.",
    "MessOuterFully": " has fully messed her outer diaper.",
    "WetOuter": " has wet her outer diaper.",
    "WetOuterFully": " has fully wet her outer diaper.",
    "MessOnly": " has messed her diaper.",
    "MessOnlyFully": " has fully messed her diaper.",
    "WetOnly": " has wet her diaper.",
    "WetOnlyFully": " has fully wet her diaper.",
    "ChangeDiaperInner": " has gotten a fresh inner diaper.",
    "ChangeDiaperOuter": " has gotten a fresh outer diaper.",
    "ChangeDiaperOnly": " has gotten a fresh diaper.",
    "ChangeDiaperBoth": " has gotten a fresh pair of diapers."
};

// Table to store all the defaul values for diaperWetter()
const diaperDefaultValues = {
    messChance: .3,
    wetChance: .5,
    baseTimer: 30,
    regressionLevel: 0,
    desperationLevel: 0,
    messLevelInner: 0,
    wetLevelInner: 0,
    messLevelOuter: 0,
    wetLevelOuter: 0
};

const diaperHelpMessages = {
    default: "Welcome to BCDW: Bondage Club Diaper Wetter! Where we make sure babies use their diapers!\nTo get started, use the ->diaper start to begin using your diaper and ->diaper stop to stop. You can also use ->diaper help <command> to get more information on any given command (for example, arguments!).",
    start: "",
    change: "",
    stop: ""
};

diaperLoop = null; // Keeps a hold of the loop so it can be exited at any time easily

// Destutter speach. Needed for interations with other mods
function destutter(string) {
    // Step over every character in the string
    for (var i = 0; i < string.length - 2; i++) {
        if (string.at(i + 1) === "-" && string.at(i) === string.at(i + 2)) {
            console.log(string.at(i));
            string = string.substring(0, i) + string.substring(i + 2, string.length);
        }
    }
    return string;
}

// Chat handeler
// ServerSocket.on("ChatRoomMessage", bcdw);
function bcdw(data) {
    // First, make sure there's actually something to read
    if (data) {
        // Check to see if a milk bottle is used on the user
        if (
            data.Type === "Action" &&
            data.Content === "ActionUse" &&
            data.Dictionary[1]?.Tag === "DestinationCharacter" &&
            data.Dictionary[1]?.MemberNumber === Player.MemberNumber &&
            data.Dictionary[2]?.AssetName === "MilkBottle"
        ) {
            setDesperation();
        }

        // Starts the script running
        if (
            destutter(data?.Content).startsWith("->diaper") &&
            (data.Type === "Chat" || data.Type === "Whisper")
        ) {
            // Parse out data into a queue for easier processing
            chatCommand = data?.Content.toLowerCase().split(" ");
            chatCommand.shift();

            // Send to command parser
            bcdwCommands(chatCommand.reverse(), data.Sender, data.Type);
        }
    }
}

// Command handler
function bcdwCommands(chatCommand, callerID, type) {
    // Commands only the user can use
    if (callerID === Player.MemberNumber) {
        // Start the script
        if (chatCommand[chatCommand.length - 1] === "start") {
            // Check to see if other arguments have been passed as well (default regression level, desperation, or use levels)
            chatCommand.pop()

            // Parse arguments for command
            let commandArguments = ["wetchance", "messchance", "desperation", "regression", "timer", "wetpanties", "messpanties", "wetchastity", "messchastity"];
            let caughtArguments = diaperDefaultValues;
            while (commandArguments.includes(chatCommand[chatCommand.length - 1])) {
                let tempVal = chatCommand.pop();
                switch (tempVal) {
                    case commandArguments[0]:
                        caughtArguments.initWetChance = (isNaN(chatCommand[chatCommand.length - 1])) ? diaperDefaultValues.wetChance : chatCommand[chatCommand.length - 1];
                        break;
                    case commandArguments[1]:
                        caughtArguments.initMessChance = (isNaN(chatCommand[chatCommand.length - 1])) ? diaperDefaultValues.messChance : chatCommand[chatCommand.length - 1];
                        break;
                    case commandArguments[2]:
                        caughtArguments.initDesperationLevel = (isNaN(chatCommand[chatCommand.length - 1])) ? diaperDefaultValues.desperationLevel : chatCommand[chatCommand.length - 1];
                        break;
                    case commandArguments[3]:
                        caughtArguments.initRegressionLevel = (isNaN(chatCommand[chatCommand.length - 1])) ? diaperDefaultValues.regressionLevel : chatCommand[chatCommand.length - 1];
                        break;
                    case commandArguments[4]:
                        caughtArguments.baseTimer = (isNaN(chatCommand[chatCommand.length - 1])) ? diaperDefaultValues.baseTimer : chatCommand[chatCommand.length - 1];
                        break;
                    case commandArguments[5]:
                        caughtArguments.initWetLevelInner = (isNaN(chatCommand[chatCommand.length - 1])) ? diaperDefaultValues.wetLevelInner : chatCommand[chatCommand.length - 1];
                        break;
                    case commandArguments[6]:
                        caughtArguments.initMessLevelInner = (isNaN(chatCommand[chatCommand.length - 1])) ? diaperDefaultValues.messLevelInner : chatCommand[chatCommand.length - 1];
                        break;
                    case commandArguments[7]:
                        caughtArguments.initWetLevelOuter = (isNaN(chatCommand[chatCommand.length - 1])) ? diaperDefaultValues.wetLevelOuter : chatCommand[chatCommand.length - 1];
                        break;
                    case commandArguments[8]:
                        caughtArguments.initMessLevelOuter = (isNaN(chatCommand[chatCommand.length - 1])) ? diaperDefaultValues.messLevelOuter : chatCommand[chatCommand.length - 1];
                        break;
                }
                chatCommand.pop();
            }
            diaperWetter(caughtArguments);
        }

        // End the script
        else if (chatCommand[chatCommand.length - 1] === "stop") {
            stopWetting();
        }
    }
    // Chat commands that can be executed by other people
    {
        // Filter to make sure the command is targeted at the user
        if (chatCommand[chatCommand.length - 2] === Player.MemberNumber || type === "Whisper" || callerID === Player.MemberNumber) {
            // Change into a fresh diaper
            if (chatCommand[chatCommand.length - 1] === "change") {
                chatCommand.pop();

                // Get rid of the member number in case that was passed
                if (chatCommand[chatCommand.length - 1] === Player.MemberNumber) {
                    chatCommand.pop();
                }

                // See if you should be changing both or just one of the diaper (and which one, of course)
                if (chatCommand[chatCommand.length - 1] === "panties") {
                    if (!checkForDiaper("panties")) {
                        ServerSend("ChatRoomChat", {
                            Type: "Action",
                            Content: "gag",
                            Dictionary: [{
                                Tag: "gag",
                                Text: Player.Name + " doesn't have a diaper there!"
                            }]
                        });
                    } else {
                        refreshDiaper({
                            cdiaper: "panties"
                        });
                    }
                } else if (chatCommand[chatCommand.length - 1] === "chastity") {
                    if (!checkForDiaper === "chastity") {
                        ServerSend("ChatRoomChat", {
                            Type: "Action",
                            Content: "gag",
                            Dictionary: [{
                                Tag: "gag",
                                Text: Player.Name + " doesn't have a diaper there!"
                            }]
                        });
                    } else {
                        refreshDiaper({
                            cdiaper: "chastity"
                        });
                    }
                } else {
                    if (!(checkForDiaper("panties") || checkForDiaper("chastity"))) {
                        ServerSend("ChatRoomChat", {
                            Type: "Action",
                            Content: "gag",
                            Dictionary: [{
                                Tag: "gag",
                                Text: Player.Name + " doesn't have a diaper! Get one on her before she makes a mess!"
                            }]
                        });
                    } else {
                        refreshDiaper({
                            cdiaper: "both"
                        });
                    }
                }
            }
        }
    }
}

// Initializer function
function diaperWetter({
    initMessChance = diaperDefaultValues.messChance,
    initWetChance = diaperDefaultValues.wetChance,
    baseTimer = diaperDefaultValues.baseTimer,
    initRegressionLevel = diaperDefaultValues.regressionLevel,
    initDesperationLevel = diaperDefaultValues.desperationLevel,
    initMessLevelInner = diaperDefaultValues.messLevelInner,
    initWetLevelInner = diaperDefaultValues.wetLevelInner,
    initMessLevelOuter = diaperDefaultValues.messLevelOuter,
    initWetLevelOuter = diaperDefaultValues.wetLevelOuter
} = {}) {
    // Greating message
    ServerSend("ChatRoomChat", {
        Type: "Action",
        Content: "gag",
        Dictionary: [{
            Tag: "gag",
            Text: "Say hello to the little baby " + Player.Name + "!"
        }]
    });

    // Initial clear.
    refreshDiaper({
        cdiaper: "both",
        inMessLevelChastity: (initMessLevelOuter < 0 || initMessLevelOuter > 2) ?
            diaperDefaultValues.messLevelOuter : initMessLevelOuter,
        inWetLevelChastity: (initWetLevelOuter < 0 || initWetLevelOuter > 2) ?
            ((initMessLevelOuter < 0 || initMessLevelOuter > 2) ?
                diaperDefaultValues.messLevelOuter :
                inMessLevelOuter
            ) : ((initWetLevelOuter > initMessLevelOuter) ?
                initWetLevelOuter :
                ((initMessLevelOuter < 0 || initMessLevelOuter > 2) ?
                    diaperDefaultValues.messLevelOuter :
                    initMessLevelOuter
                )
            ),
        inMessLevelPanties: (initMessLevelInner < 0 || initMessLevelInner > 2) ?
            diaperDefaultValues.messLevelInner : initMessLevelInner,
        inWetLevelPanties: (initWetLevelInner < 0 || initWetLevelInner > 2) ?
            ((initMessLevelInner < 0 || initMessLevelInner > 2) ?
                diaperDefaultValues.messLevelInner :
                initMessLevelOuter
            ) : ((initWetLevelInner > initMessLevelInner) ?
                initWetLevelInner :
                ((initMessLevelInner < 0 || initMessLevelInner > 2) ?
                    diaperDefaultValues.messLevelInner :
                    initMessLevelInner
                )
            ),
    });
    messChance = initMessChance;
    wetChance = initWetChance;
    diaperTimerBase = baseTimer; // The default amount of time between ticks in minutes
    regressionLevel = initRegressionLevel; // Used for tracking how much the user has regressed (affects the timer)
    desperationLevel = initDesperationLevel; // Used for tracking how recently a milk bottle has been used (affects the timer)


    // Handle modifiers
    var diaperTimerModifier = 1; // We will divide by the modifier (positive modifiers decrease the timer)
    diaperTimerModifier = manageRegression(diaperTimerModifier);
    diaperTimerModifier = manageDesperation(diaperTimerModifier);
    diaperTimer = diaperTimerBase / diaperTimerModifier;

    // Go into main loop
    diaperRunning = true; // Helps with the kill switch
    checkTick();
}

// Changes how long it takes between ticks (in minutes)
function changeDiaperTimer(delay) {
    // Bound the delay to between 2 minutes and 1 hour
    if (delay < 2) {
        delay = 2;
    } else if (delay > 60) {
        delay = 60;
    }

    diaperTimerBase = delay; // Updates diaperTimerBase
}

// Refresh the diaper settings so wet and mess levels are 0. Pass "chastity", "panties", or "both" so only the correct diaper gets reset.
function refreshDiaper({
    cdiaper = "both",
    inWetLevelPanties = diaperDefaultValues.wetLevelInner,
    inMessLevelPanties = diaperDefaultValues.messLevelInner,
    inWetLevelChastity = diaperDefaultValues.wetLevelOuter,
    inMessLevelChastity = diaperDefaultValues.messLevelOuter,
} = {}) {
    if (cdiaper === "both") {
        MessLevelPanties = inMessLevelPanties;
        WetLevelPanties = inWetLevelPanties;
        MessLevelChastity = inMessLevelChastity;
        WetLevelChastity = inWetLevelChastity;
        changeDiaperColor("ItemPelvis");
        changeDiaperColor("Panties");
        if (checkForDiaper("Panties") && checkForDiaper("ItemPelvis")) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: Player.Name + DiaperUseMessages["ChangeDiaperBoth"]
                }]
            });
        } else if ((checkForDiaper("Panties") && !checkForDiaper("ItemPelvis")) || (checkForDiaper("ItemPelvis") && !checkForDiaper("Panties"))) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: Player.Name + DiaperUseMessages["ChangeDiaperOnly"]
                }]
            });
        }
    } else if (cdiaper === "chastity") {
        MessLevelChastity = inMessLevelChastity;
        WetLevelChastity = inWetLevelChastity;
        changeDiaperColor("ItemPelvis");
        if (checkForDiaper("ItemPelvis") && checkForDiaper("Panties")) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: Player.Name + DiaperUseMessages["ChangeDiaperOuter"]
                }]
            });
        } else if (checkForDiaper("ItemPelvis") && !checkForDiaper("Panties")) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: Player.Name + DiaperUseMessages["ChangeDiaperOnly"]
                }]
            });
        }
    } else if (cdiaper === "panties") {
        MessLevelPanties = inMessLevelPanties;
        WetLevelPanties = inWetLevelPanties;
        changeDiaperColor("Panties");
        if (checkForDiaper("ItemPelvis") && checkForDiaper("Panties")) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: Player.Name + DiaperUseMessages["ChangeDiaperOuter"]
                }]
            });
        } else if (checkForDiaper("Panties") && !checkForDiaper("ItemPelvis")) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: Player.Name + DiaperUseMessages["ChangeDiaperOnly"]
                }]
            });
        }
    }
}

// Check for if a diaper is in the Panties or ItemPelvies slot
function checkForDiaper(slot) {
    return InventoryGet(Player, slot)?.Asset?.Name === "PoofyDiaper" || InventoryGet(Player, slot)?.Asset?.Name === "BulkyDiaper";
}

// Checks to see if the user has a nursery milk equiped
function checkForNurseryMilk() {
    return (InventoryGet(Player, "ItemMouth")?.Asset?.Name === "RegressedMilk") || (InventoryGet(Player, "ItemMouth2")?.Asset?.Name === "RegressedMilk") || (InventoryGet(Player, "ItemMouth3")?.Asset?.Name === "RegressedMilk");
}

// Checks for a normal milk bottle
function checkForMilk() {
    return (InventoryGet(Player, "ItemMouth")?.Asset?.Name === "MilkBottle") || (InventoryGet(Player, "ItemMouth2")?.Asset?.Name === "MilkBottle") || (InventoryGet(Player, "ItemMouth3")?.Asset?.Name === "MilkBottle");
}

// Handles the regression counter
function manageRegression(diaperTimerModifier = 1) {
    if (checkForNurseryMilk() && regressionLevel < 3) {
        regressionLevel++;
    } else if (!checkForNurseryMilk() && regressionLevel > 0) {
        regressionLevel--;
    }

    return diaperTimerModifier * Math.pow(2, regressionLevel);
}

// Sets the users desperationLevel to 3 when they are given a milk bottle
function setDesperation() {
    desperationLevel = 3;
}

// Handles "desperateness" aka how recently a milk bottle was drunk
function manageDesperation(diaperTimerModifier = 1) {
    // If they don't have a milk bottle anymore
    if (!checkForMilk()) {
        // Decrease desperationLevel to a minimum of zero if no milk is found
        desperationLevel = (desperationLevel != 0) ? desperationLevel - 1 : 0;
    }
    return diaperTimerModifier * (desperationLevel + 1);
}

// Updates the color of a diaper
function changeDiaperColor(slot) {
    if (slot === "ItemPelvis" && checkForDiaper(slot)) {
        InventoryWear(
            Player,
            InventoryGet(Player, slot)?.Asset?.Name,
            slot,
            [
                InventoryGet(Player, slot)?.Color[0],
                DiaperUseLevels[MessLevelChastity][WetLevelChastity - MessLevelChastity],
                InventoryGet(Player, slot)?.Color[2],
                InventoryGet(Player, slot)?.Color[3]
            ],
            InventoryGet(Player, slot)?.Difficulty,
            Player.MemberNumber
        );
    } else if (slot === "Panties" && checkForDiaper(slot)) {
        InventoryWear(
            Player,
            InventoryGet(Player, slot)?.Asset?.Name,
            slot,
            [
                InventoryGet(Player, slot)?.Color[0],
                DiaperUseLevels[MessLevelPanties][WetLevelPanties - MessLevelPanties],
                InventoryGet(Player, slot)?.Color[2],
                InventoryGet(Player, slot)?.Color[3]
            ],
            InventoryGet(Player, slot)?.Difficulty,
            Player.MemberNumber
        );
    }
}

// Command to stop the script from running
function stopWetting() {
    console.log("See you next time!");
    diaperRunning = false;
    clearTimeout(diaperLoop);
    checkTick();
}

// Funcky while loop
function checkTick() {
    // Terminate loop if the user isn't wearing a compatible diaper
    if ((checkForDiaper("ItemPelvis") || checkForDiaper("Panties")) && diaperRunning === true) {
        // Wait for a bit
        diaperLoop = setTimeout(checkTick, diaperTimer * 60 * 1000);
        // Go to main logic
        diaperTick();
    } else {
        diaperRunning = false;
        ServerSend("ChatRoomChat", {
            Type: "Action",
            Content: "gag",
            Dictionary: [{
                Tag: "gag",
                Text: "Awww, " + Player.Name + " is all grown up!"
            }]
        });
    }
}

// Body function
// If the baby uses their diaper, it will make the front of their diaper look like it's been used
function diaperTick() {
    // Handle modifiers
    var diaperTimerModifier = 1; // We will divide by the modifier (positive modifiers decrease the timer)
    diaperTimerModifier = manageRegression(diaperTimerModifier);
    diaperTimerModifier = manageDesperation(diaperTimerModifier);
    diaperTimer = diaperTimerBase / diaperTimerModifier;

    testMess = Math.random();
    // If the baby messes, increment the mess level to a max of 2 and make sure that the wet level is at least as high as the mess level.
    if (testMess > 1 - messChance) {
        if (MessLevelPanties === 2 || !checkForDiaper("Panties")) {
            MessLevelChastity = (MessLevelChastity < 2) ? MessLevelChastity + 1 : MessLevelChastity;
            WetLevelChastity = (WetLevelChastity < MessLevelChastity) ? MessLevelChastity : WetLevelChastity;
        } else if (checkForDiaper("Panties")) {
            MessLevelPanties = MessLevelPanties + 1;
            WetLevelPanties = (WetLevelPanties < MessLevelPanties) ? MessLevelPanties : WetLevelPanties;
        }

        // Display messages for when a diaper is messed.
        if ((MessLevelPanties === 2 && checkForDiaper("Panties") && !checkForDiaper("ItemPelvis")) || (MessLevelChastity === 2 && checkForDiaper("ItemPelvis") && !checkForDiaper("Panties"))) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: Player.Name + DiaperUseMessages["MessOnlyFully"]
                }]
            });
        } else if ((checkForDiaper("Panties") && !checkForDiaper("ItemPelvis")) || (checkForDiaper("ItemPelvis") && !checkForDiaper("Panties"))) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: Player.Name + DiaperUseMessages["MessOnly"]
                }]
            });
        } else if (MessLevelChastity === 0) {
            if (MessLevelPanties === 2) {
                ServerSend("ChatRoomChat", {
                    Type: "Action",
                    Content: "gag",
                    Dictionary: [{
                        Tag: "gag",
                        Text: Player.Name + DiaperUseMessages["MessInnerFully"]
                    }]
                });
            } else if (MessLevelPanties === 1) {
                ServerSend("ChatRoomChat", {
                    Type: "Action",
                    Content: "gag",
                    Dictionary: [{
                        Tag: "gag",
                        Text: Player.Name + DiaperUseMessages["MessInner"]
                    }]
                });
            }
        } else if (MessLevelChastity === 1) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: Player.Name + DiaperUseMessages["MessOuter"]
                }]
            });
        } else if (MessLevelChastity === 2) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: Player.Name + DiaperUseMessages["MessOuterFully"]
                }]
            });
        }
    }
    // If the baby only wets, increment the wet level to a max of 2.
    else if (testMess > 1 - wetChance) {
        if (WetLevelPanties == 2 && (InventoryGet(Player, "Panties") !== "PoofyDiaper" && InventoryGet(Player, "Panties") !== "BulkyDiaper")) {
            WetLevelChastity = (WetLevelChastity < 2) ? WetLevelChastity + 1 : WetLevelChastity;
        } else {
            WetLevelPanties = WetLevelPanties + 1;
        }

        // Display messages for when a diaper is wet.
        if ((WetLevelPanties === 2 && checkForDiaper("Panties") && !checkForDiaper("ItemPelvis")) || (WetLevelChastity === 2 && checkForDiaper("ItemPelvis") && !checkForDiaper("Panties"))) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: Player.Name + DiaperUseMessages["MessOnlyFully"]
                }]
            });
        } else if ((checkForDiaper("Panties") && !checkForDiaper("ItemPelvis")) || (checkForDiaper("ItemPelvis") && !checkForDiaper("Panties"))) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: Player.Name + DiaperUseMessages["WetOnly"]
                }]
            });
        } else if (WetLevelChastity === 0) {
            if (WetLevelPanties === 2) {
                ServerSend("ChatRoomChat", {
                    Type: "Action",
                    Content: "gag",
                    Dictionary: [{
                        Tag: "gag",
                        Text: Player.Name + DiaperUseMessages["WetInnerFully"]
                    }]
                });
            } else if (WetLevelPanties === 1) {
                ServerSend("ChatRoomChat", {
                    Type: "Action",
                    Content: "gag",
                    Dictionary: [{
                        Tag: "gag",
                        Text: Player.Name + DiaperUseMessages["WetInner"]
                    }]
                });
            }
        } else if (WetLevelChastity === 1) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: Player.Name + DiaperUseMessages["WetOuter"]
                }]
            });
        } else if (WetLevelChastity === 2) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: Player.Name + DiaperUseMessages["WetOuterFully"]
                }]
            });
        }
    }
    // Don't update the color when it's not needed.
    else {
        return;
    }

    // Update color based on the DiaperUseLevels table.
    changeDiaperColor("ItemPelvis");
    changeDiaperColor("Panties");
    ChatRoomCharacterUpdate(Player);
}

//text limits remover by rewriting functions
//transport jacket can not be rewritten.
//pet bowl can not be rewritten.
//wooden box can not be rewritten.
//canvas hood can not be rewritetn.
InventoryItemMiscWoodenSignLoad = function() {
    DynamicDrawLoadFont(InventoryItemMiscWoodenSignFont);
    var C = CharacterGetCurrent();
    var MustRefresh = false;
    if (DialogFocusItem.Property == null) DialogFocusItem.Property = {};
    if (DialogFocusItem.Property.Text == null && DialogFocusItem.Property.Text2 == null) {
        DialogFocusItem.Property.Text = "";
        DialogFocusItem.Property.Text2 = "";
        MustRefresh = true;
    }
    if (MustRefresh) {
        CharacterRefresh(C);
        ChatRoomCharacterItemUpdate(C, DialogFocusItem.Asset.Group.Name);
    }
    const input1 = ElementCreateInput("WoodenSignText1", "text", DialogFocusItem.Property.Text, "50");
    const input2 = ElementCreateInput("WoodenSignText2", "text", DialogFocusItem.Property.Text2, "50");
    if (input1) input1.pattern = DynamicDrawTextInputPattern;
    if (input2) input2.pattern = DynamicDrawTextInputPattern;
}
//
InventoryItemNeckAccessoriesCustomCollarTagLoad = function() {
    var C = CharacterGetCurrent();
    var MustRefresh = false;
    if (DialogFocusItem.Property == null) DialogFocusItem.Property = {};
    if (DialogFocusItem.Property.Text == null) {
        DialogFocusItem.Property.Text = "Tag";
        MustRefresh = true;
    }
    if (MustRefresh) {
        CharacterRefresh(C);
        ChatRoomCharacterItemUpdate(C, DialogFocusItem.Asset.Group.Name);
    }
    if (!InventoryItemHasEffect(DialogFocusItem, "Lock", true)) {
        ElementCreateInput("TagText", "text", DialogFocusItem.Property.Text, "30");
    }
}
//
InventoryItemNeckAccessoriesElectronicTagLoad = function() {
    var C = CharacterGetCurrent();
    var MustRefresh = false;
    if (DialogFocusItem.Property == null) DialogFocusItem.Property = {};
    if (DialogFocusItem.Property.Text == null) {
        DialogFocusItem.Property.Text = "Tag";
        MustRefresh = true;
    }
    if (MustRefresh) {
        CharacterRefresh(C);
        ChatRoomCharacterItemUpdate(C, DialogFocusItem.Asset.Group.Name);
    }
    if (!InventoryItemHasEffect(DialogFocusItem, "Lock", true)) {
        ElementCreateInput("TagText", "text", DialogFocusItem.Property.Text, "30");
    }
}

//Auto enable patreon cheats. Also allows functionality for submissive mistress. If patched, blank functions.
CheatValidate = function() {
    return true;
};
CheatAllow = true;
CheatActivated.push("AutoShowTraits");
CheatActivated.push("BlockRandomKidnap");
CheatActivated.push("CantLoseMistress");
CheatActivated.push("ChangeNPCTrait");
CheatActivated.push("DoubleGGTSTime");
CheatActivated.push("DoubleItemSpeed");
CheatActivated.push("DoubleMoney");
CheatActivated.push("DoubleReputation");
CheatActivated.push("DoubleSkill");
// CheatActivated.push("FreeCollegeOutfit");withheld to prevent auto cheating
CheatActivated.push("FreeNPCDress");
CheatActivated.push("MiniGameBonus");
CheatActivated.push("NoLoveDecay");
CheatActivated.push("SkipTrialPeriod");
CheatExport();

//Additionaly rule changers for game.
Asset.forEach(e => {
    if (e.Value < 0) e.Value = 1;
});

function ManagementCannotBeReleasedExtreme() {}

function ManagementCannotBreakUpLoverNPC(L) {
    return false
}

function ManagementCanBeClubMistress() {
    return true
}

function ManagementCannotBeClubMistress() {}

function ManagementCannotBeClubMistressLaugh() {}

function ManagementCannotBeClubMistressTime() {}

function ManagementCanBeClubSlave() {
    return true
}

function ManagementCannotBeClubSlaveOwnerLock() {}

function ManagementCannotBeClubSlaveLoverLock() {}

function AsylumEntranceIsWearingNurseClothes() {
    return true
}

function ServerAppearanceLoadFromBundle(C, AssetFamily, Bundle, SourceMemberNumber, AppearanceFull = false) {
    const appearanceDiffs = ServerBuildAppearanceDiff(AssetFamily, C.Appearance, Bundle);
    ServerAddRequiredAppearance(AssetFamily, appearanceDiffs);
    if (SourceMemberNumber == null) SourceMemberNumber = C.MemberNumber;
    const updateParams = ValidationCreateDiffParams(C, SourceMemberNumber);
    let {
        appearance,
        updateValid
    } = Object.keys(appearanceDiffs)
        .reduce(({
            appearance,
            updateValid
        }, key) => {
            const diff = appearanceDiffs[key];
            const {
                item,
                valid
            } = ValidationResolveAppearanceDiff(diff[0], diff[1], updateParams);
            if (item) appearance.push(item);
            updateValid = updateValid && valid;
            return {
                appearance,
                updateValid
            };
        }, {
            appearance: [],
            updateValid: true
        });
    if (AppearanceFull) {
        C.AppearanceFull = appearance;
    } else {
        C.Appearance = appearance;
    }
}

function ChatRoomSyncItem(data) {
    if ((data == null) || (typeof data !== "object") || (data.Source == null) || (typeof data.Source !== "number") || (data.Item == null) || (typeof data.Item !== "object") || (data.Item.Target == null) || (typeof data.Item.Target !== "number") || (data.Item.Group == null) || (typeof data.Item.Group !== "string")) return;
    for (let C = 0; C < ChatRoomCharacter.length; C++)
        if (ChatRoomCharacter[C].MemberNumber === data.Item.Target) {
            const updateParams = ValidationCreateDiffParams(ChatRoomCharacter[C], data.Source);
            const previousItem = InventoryGet(ChatRoomCharacter[C], data.Item.Group);
            const newItem = ServerBundledItemToAppearanceItem(ChatRoomCharacter[C].AssetFamily, data.Item);
            let {
                item,
                valid
            } = ValidationResolveAppearanceDiff(previousItem, newItem, updateParams);
            ChatRoomAllowCharacterUpdate = false;
            if (!item || (previousItem && previousItem.Asset.Name !== item.Asset.Name)) {
                InventoryRemove(ChatRoomCharacter[C], data.Item.Group, false);
            }
            if (item) {
                CharacterAppearanceSetItem(
                    ChatRoomCharacter[C], data.Item.Group, item.Asset, item.Color, item.Difficulty, null, false);
                InventoryGet(ChatRoomCharacter[C], data.Item.Group).Property = item.Property;
                /** @type {AppearanceDiffMap} */
                const diffMap = {};
                for (const appearanceItem of ChatRoomCharacter[C].Appearance) {
                    const groupName = appearanceItem.Asset.Group.Name;
                    if (groupName === data.Item.Group) {
                        diffMap[groupName] = [previousItem, appearanceItem];
                    } else {
                        diffMap[groupName] = [appearanceItem, appearanceItem];
                    }
                }
                const cyclicBlockSanitizationResult = ValidationResolveCyclicBlocks(ChatRoomCharacter[C].Appearance, diffMap);
                ChatRoomCharacter[C].Appearance = cyclicBlockSanitizationResult.appearance;
                valid = valid && cyclicBlockSanitizationResult.valid;
            }
            ChatRoomAllowCharacterUpdate = true;
            CharacterRefresh(ChatRoomCharacter[C]);
            for (let R = 0; R < ChatRoomData.Character.length; R++) {
                if (ChatRoomData.Character[R].MemberNumber == data.Item.Target)
                    ChatRoomData.Character[R].Appearance = ChatRoomCharacter[C].Appearance;
            }
            return;
        }
}

function DialogExtendItem(Item, SourceItem) {
    const C = CharacterGetCurrent();
    StruggleProgress = -1;
    StruggleLockPickOrder = null;
    DialogLockMenu = false;
    DialogCraftingMenu = false;
    DialogColor = null;
    DialogFocusItem = Item;
    DialogFocusSourceItem = SourceItem;
    CommonDynamicFunction("Inventory" + Item.Asset.Group.Name + Item.Asset.Name + "Load()");
}

function CharacterRefresh(C, Push, RefreshDialog = true) {
    CharacterLoadEffect(C);
    CharacterLoadPose(C);
    CharacterLoadCanvas(C);
    C.RunScripts = (!C.AccountName.startsWith('Online-') || !(Player.OnlineSettings && Player.OnlineSettings.DisableAnimations)) && (!Player.GhostList || Player.GhostList.indexOf(C.MemberNumber) == -1);
    C.HasScriptedAssets = !!C.Appearance.find(CA => CA.Asset.DynamicScriptDraw);
    if ((C.ID == 0) && (C.OnlineID != null) && ((Push == null) || (Push == true))) {
        ChatRoomRefreshChatSettings();
        ServerPlayerAppearanceSync();
    }
    var Current = CharacterGetCurrent();
    if (Current && C.ID == Current.ID && RefreshDialog) {
        CharacterRefreshDialog(C);
    }
}

function CharacterNickname(C) {
    let Regex = /[/\p{L}\p{N}\p{Z}'-]/gu;
    let Nick = C.Nickname;
    if (Nick == null) Nick = "";
    Nick = Nick.trim().substring(0, 20);
    if ((Nick != "") && Regex.test(Nick)) return Nick;
    else return C.Name;
}

function TitleExit() {
    let Regex = /[/\p{L}\p{N}\p{Z}'-]/gu;
    let Nick = ElementValue("InputNickname");
    var tmpname = Player.Nickname;
    if (Nick == null) Nick = "";
    Nick = Nick.trim().substring(0, 20);
    if (Regex.test(Nick)) {
        if (Nick != tmpname) {
            ServerSend("ChatRoomChat", {
                Content: "Beep",
                Type: "Action",
                Dictionary: [{
                    Tag: "Beep",
                    Text: "" + tmpname + " is now known as " + Nick + "."
                }]
            });
        }
        Player.Nickname = Nick;
        ServerAccountUpdate.QueueData({
            Nickname: Nick
        });
        ElementRemove("InputNickname");
        CommonSetScreen("Character", "InformationSheet");
    }
}

function PandoraPrisonRun() {
    if ((Player.Infiltration.Punishment.Timer < CurrentTime) && (CurrentCharacter == null) && !PandoraPrisonEscaped)
        PandoraPrisonCharacter = PandoraPrisonMaid;
    if (PandoraWillpowerTimer < CommonTime()) {
        if (PandoraWillpower < PandoraMaxWillpower) PandoraWillpower++;
        PandoraWillpowerTimer = PandoraWillpowerTimer + ((InfiltrationPerksActive("Recovery")) ? 20000 : 30000);
    }
    if ((Player.Infiltration.Punishment.Timer >= CurrentTime) && (PandoraPrisonCharacterTimer < CommonTime()) && (CurrentCharacter == null) && !PandoraPrisonEscaped) {
        PandoraPrisonBribeEnabled = true;
        PandoraPrisonCharacter = (PandoraPrisonCharacter == null) ? PandoraPrisonGuard : null;
        PandoraPrisonCharacterTimer = CommonTime() + 30000 + Math.floor(Math.random() * 30000);
    }
    if (PandoraPrisonCharacter != null) {
        DrawCharacter(Player, 500, 0, 1);
        DrawCharacter(PandoraPrisonCharacter, 1000, 0, 1);
    } else DrawCharacter(Player, 750, 0, 1);
    if (Player.CanKneel()) DrawButton(1885, 25, 90, 90, "", "White", "Icons/Kneel.png", TextGet("Kneel"));
    DrawButton(1885, 145, 90, 90, "", "White", "Icons/Character.png", TextGet("Profile"));
    if (Player.Infiltration.Punishment.Timer > CurrentTime) {
        DrawText(TextGet("Sentence") + " " + Player.Infiltration.Punishment.Minutes.toString() + " " + TextGet("Minutes"), 1800, 870, "White", "Black");
        DrawText(TextGet("EndsIn") + " " + TimerToString(Player.Infiltration.Punishment.Timer - CurrentTime), 1800, 920, "White", "Black");
    }
    DrawProgressBar(1610, 954, 380, 36, Math.round(PandoraWillpower / PandoraMaxWillpower * 100));
    DrawText(PandoraWillpower.toString(), 1800, 973, "black", "white");
}

function CellLoad() {
    CellKeyDepositStaff = CharacterLoadNPC("NPC_Cell_KeyDepositStaff");
    CellKeyDepositStaff.AllowItem = false;
    CharacterSetActivePose(Player, null);
    CellOpenTimer = LogValue("Locked", "Cell");
    if (CellOpenTimer == null) CellOpenTimer = 0;
}

function CellClick() {
    if (MouseIn(1885, 25, 90, 90) && Player.CanKneel() && (CellOpenTimer > CurrentTime)) CharacterSetActivePose(Player, (Player.ActivePose == null) ? "Kneel" : null, true);
    if (MouseIn(750, 0, 500, 1000)) CharacterSetCurrent(Player);
    if (MouseIn(1885, 145, 90, 90)) InformationSheetLoadCharacter(Player);
    if (CellOpenTimer < CurrentTime) {
        if (MouseIn(1885, 25, 90, 90)) CommonSetScreen("Room", "MainHall");
        if (MouseIn(1885, 265, 90, 90)) CellLock(CellMinutes);
        if (MouseIn(1885, 385, 90, 90)) CellMinutes = CellMinutes + 5;
        if (MouseIn(1885, 505, 90, 90) && (CellMinutes > 5)) CellMinutes = CellMinutes - 5;
        if (MouseIn(1885, 625, 90, 90)) CharacterSetCurrent(CellKeyDepositStaff);
    }
}

function StablePonyEnd() {
    CommonSetScreen("Room", "Stable");
    CharacterSetCurrent(StableTrainer);
    StableTrainer.Stage = "StableTrainingRunOut";
    CharacterRelease(Player);
    CharacterNaked(Player);
    for (let E = Player.Appearance.length - 1; E >= 0; E--)
        if ((Player.Appearance[E].Asset.Group.Name == "ItemTorso") || (Player.Appearance[E].Asset.Group.Name == "Hat") || (Player.Appearance[E].Asset.Group.Name == "ItemButt")) {
            Player.Appearance.splice(E, 1);
        }
    CharacterDress(Player, StablePlayerAppearance);
    CharacterRefresh(Player);
}

function StableTrainerEnd() {
    CommonSetScreen("Room", "Stable");
    CharacterSetCurrent(StableTrainer);
    StableTrainer.Stage = "StableExamTPass";
    CharacterNaked(Player);
    CharacterDress(Player, StablePlayerAppearance);
    CharacterRefresh(Player);
}

//embed engine. Depends on hidden unicode characters, so don't touch or risk corruption... depenencies are in chatroom script.
var tenorRe = /(?:(?:(?:[A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)(?:(?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)(?:jpg|jpeg|gif|png)/;
var tubeRe = /((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?/;

function getChatWindowElement() {
    var div = document.querySelector("#TextAreaChatLog");
    return div;
}

function createMessageElement() {
    var divMsg = document.createElement('div');
    divMsg.classList.add("ChatMessage", "ChatMessageChat");
    return divMsg;
}

function createImgElement(src) {
    var img = document.createElement('img');
    img.src = src;
    img.classList.add('chatImg');
    return img;
}

function createCharacterNameElement(name) {
    var char = findCharacterInRoom(name);
    var senderName = document.createElement('div');
    senderName.innerText = char.Name + ":";
    senderName.classList.add('ChatMessageName');
    senderName.style.color = char.LabelColor;
    return senderName;
}

function sendLocalMessage(content) {
    ChatRoomMessage({
        Content: content,
        Type: "LocalMessage",
        Sender: Player.MemberNumber
    });
    document.querySelector('#TextAreaChatLog').lastChild.style.color = 'silver';
}

function findCharacterInRoom(name) {
    if (!isNaN(name)) {
        var target = ChatRoomCharacter.find(c => c.MemberNumber == name);
    } else if (typeof name == 'string') {
        var target = ChatRoomCharacter.find(c => c.Name.toLowerCase() == name.toLowerCase());
    }
    return target;
}

function sendHiddenMessageTarget(message, MemberNumber) {
    ServerSend("ChatRoomChat", {
        Content: message,
        Type: "Hidden",
        Target: MemberNumber
    });
}

function sendHiddenMessageAll(message) {
    ServerSend("ChatRoomChat", {
        Content: message,
        Type: "Hidden"
    });
}

function bodyPartHasRestraint(character, groupName) {
    var hasItem = false;
    for (const item of character.Appearance) {
        if (item.Asset.Group.Name == groupName) hasItem = true;
    }
    return hasItem;
}

function getCommand(commandName) {
    for (const cmd of ChatCommands) {
        if (cmd.name == commandName) {
            var command = cmd;
        } else if (cmd.aliases && cmd.aliases.includes(commandName)) {
            var command = cmd;
        }
    }
    return command;
}

setTimeout(function() {
    ServerSocket.on("ChatRoomMessage", function(data) {
        if (data.Content.startsWith("?")) {
            return;
        }
        if (tenorRe.test(data.Content)) {
            var content = data.Content.match(tenorRe);
            if (content) {
                var link = content[0];
                var chatWindow = getChatWindowElement();

                // removes message with link to replace it later with image
                if (tenorRe.test(data.Content) && (data.Type == "Chat" || data.Type == "Whisper")) {
                    chatWindow.lastChild.remove();
                }

                var divMsg = createMessageElement();
                var senderName = createCharacterNameElement(data.Sender);
                var img = createImgElement(link);
                var a = document.createElement("a");
                a.target = '_blank';
                a.href = `${content}`;
                img.style.maxWidth = '40%';
                img.style.maxHeight = '40%';

                // add (whisper) to name for whispers to make it more clear that it is a whisper message
                if (data.Content.startsWith('whisper')) {
                    senderName.innerHTML = `<span class="ChatMessage ChatMessageWhisper" style="text-shadow: none; padding-left: 0px;">(Whisper)</span> ` + senderName.innerText;
                }

                chatWindow.append(divMsg);
                divMsg.append(senderName);
                divMsg.append(a);
                a.append(img);

                // if scroll position near the end, it scrolls chat automatically
                if (tenorRe.test(data.Content) && (chatWindow.scrollHeight - chatWindow.offsetHeight - chatWindow.scrollTop < 300)) {
                    img.addEventListener('load', () => {
                        ElementScrollToEnd("TextAreaChatLog");
                    })
                }
            }
        } else if (tubeRe.test(data.Content)) {
            var content = data.Content.match(tubeRe);
            if (content && content[5] && content[5].length == 11 && (content.includes("youtube.com") || content.includes("youtu.be"))) {
                var link = `https://www.youtube.com/embed/${content[5]}`;
                var chatWindow = getChatWindowElement();

                // removes message with link to replace it later with image
                if (tubeRe.test(data.Content) && (data.Type == "Chat" || data.Type == "Whisper")) {
                    chatWindow.lastChild.remove();
                }
                var divMsg = createMessageElement();
                var senderName = createCharacterNameElement(data.Sender);
                chatWindow.append(divMsg);
                var iframe = document.createElement('iframe');
                iframe.src = link;
                iframe.style.width = '50%';
                iframe.style.height = '8em';

                // add (whisper) to name to make it more clear that it is a whisper message
                if (data.Content.startsWith('whisper')) {
                    senderName.innerHTML = `<span class="ChatMessage ChatMessageWhisper" style="text-shadow: none; padding-left: 0px;">(Whisper)</span> ` + senderName.innerText;
                }

                divMsg.append(senderName);
                divMsg.append(iframe);
                if (tenorRe.test(data.Content) && (chatWindow.scrollHeight - chatWindow.offsetHeight - chatWindow.scrollTop < 300)) {
                    img.addEventListener('load', () => {
                        ElementScrollToEnd("TextAreaChatLog");
                    })
                }
            }
        }
    });
}, 5000);


function ChatSearchJoin() { //rewrite chatroom join to house auto join
    var X = 25;
    var Y = 25;
    for (let C = ChatSearchResultOffset; C < ChatSearchResult.length && C < (ChatSearchResultOffset + ChatSearchRoomsPerPage); C++) {
        if (ChatSearchLastQueryJoin != RoomName || (ChatSearchLastQueryJoin == RoomName && ChatSearchLastQueryJoinTime + 1000 < CommonTime())) {
            if (this.IsOn == undefined || this.IsOn == false) {
                IsOn = true;
                var TextArea = document.createElement("TextArea");
                TextArea.setAttribute("ID", "AutoJoinAlert");
                document.body.appendChild(TextArea);
                ElementValue("AutoJoinAlert", "AutoJoining...");
                ElementPosition("AutoJoinAlert", 300, 970, 350);
            };

            if ((MouseX >= X) && (MouseX <= X + 630) && (MouseY >= Y) && (MouseY <= Y + 85)) {
                var RoomName = ChatSearchResult[C].Name;

                AutoJoin = function() {
                    this.AutoJoinOn = true;
                    setTimeout(function() {
                        AutoJoin()
                    }, 1300);
                    ChatSearchLastQueryJoinTime = CommonTime();
                    ChatSearchLastQueryJoin = RoomName;
                    ChatRoomPlayerCanJoin = true;
                    ServerSend("ChatRoomJoin", {
                        Name: RoomName
                    });
                    ChatRoomPingLeashedPlayers();
                    if (CurrentScreen == "ChatRoom") {
                        AutoJoin = function() {};
                        this.AutoJoinOn = false;
                        ElementRemove("AutoJoinAlert");
                        IsOn = false;
                    }
                };
                if (this.AutoJoinOn == false || this.AutoJoinOn == undefined) {
                    AutoJoin()
                };


            }
        }
        X = X + 660;
        if (X > 1500) {
            X = 25;
            Y = Y + 109;
        }
    }
}