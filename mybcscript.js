// ==UserScript==
// @name Quick-AccessMenu2.1
// @namespace https://www.bondageprojects.com/
// @version 1.7.0
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
    if (Player.Nickname == '') { 
        var tmpname = Player.Name;
    } else {
        var tmpname = Player.Nickname;
    }
	
    //chatcommand
    if (CurrentScreen == "ChatRoom") {

        if (content.indexOf("/help") == 0) {
            if (content.endsWith("/help")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: QAM help is organized into categories. Use <b>/help</b> (category). List of categories:\n" +
                    "<b>bondage</b> = 与束缚有关的命令。\n" +
                    "<b>character</b> = 与您的角色相关的命令。\n" +
                    "<b>chat</b> = 在聊天室中具有额外功能的命令。\n" +
                    "<b>clothing</b> = 与衣服有关的命令。\n" +
                    "<b>escape</b> = 与逃生相关的命令。\n" +
		            "<b>features</b> = 无需命令即可实现自动功能。\n" +
                    "<b>fun</b> = 与乐趣、痛苦和快乐有关的命令。\n" +
		            "<b>kd</b> = 关于kd命令的信息(用于淫魔地城)。\n" +
                    "<b>misc</b> = 特殊命令。\n" +
                    "<b>talking</b> = 与谈话有关的命令。\n" +
                    "<b>visual</b> = 与动画和背景相关的命令。\n" +
                    "<b>zones</b> = 与游戏区域相关的命令。\n" +
		            "有几个命令需要指定目标。它可以是一个真实的名字，也可以是一个会员号码。\n" +
		            "使用 <b>/help new</b> 获取有关当前 QAM 版本更改的信息。\n" +
		            "也请访问我们的 <a href='https://github.com/tetris245/tetris245/wiki' target='_blank'>维基</a></p>"	
                );
            }
        } else if (content.indexOf("/外观") == 0) {
            if (content.includes("重置") || content.includes("revert") || content.includes("restore")) {
                Player.Appearance = ChatSearchSafewordAppearance.slice(0);
                // Player.ActivePose = ChatSearchSafewordPose; should not be needed
                CharacterRefresh(Player);
                ChatRoomCharacterUpdate(Player);
            } else if (content.includes("导出")) {
                var target = content.substring(4).trim();
                if (!target) {
                    targetMember = Player;
                } else {
                    targetMember = Character.find((c) => c.MemberNumber === parseInt(target));
                }
                if (!targetMember) {
                    var targetfinder = new RegExp('^' + target + '', 'i');
                    var targetMember = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)))[0];
                }

                const includeBinds = window.confirm(displayText("包括束缚?"));
                const includeLocks = includeBinds && window.confirm(displayText("包括锁?"));
                const includeBase = window.confirm(displayText("包括身高、体型、头发等?"));

                const base = targetMember.Appearance.filter(
                    (a) => a.Asset.Group.IsDefault && !a.Asset.Group.Clothing
                );
                const clothes = targetMember.Appearance.filter(
                    (a) => a.Asset.Group.Category === "Appearance" && a.Asset.Group.Clothing
                );
                const binds = targetMember.Appearance.filter(
                    (a) => a.Asset.Group.Category === "Item" && !["ItemNeck", "ItemNeckAccessories"].includes(a.Asset.Group.Name) && !a.Asset.Group.BodyCosplay
                );

                const appearance = [...clothes];
                if (includeBinds) {
                    appearance.push(...binds);
                }
                if (includeBase) {
                    appearance.push(...base);
                }

                /** @type {ItemBundle[]} */
                const looks = appearance.map((i) => {
                    const property = i.Property ? { ...i.Property } : {};
                    if (!includeLocks && property.LockedBy) {
                        delete property.LockedBy;
                        delete property.LockMemberNumber;
                    }
                    if (property?.LockMemberNumber) {
                        property.LockMemberNumber = Player.MemberNumber;
                    }
                    return {
                        Group: i.Asset.Group.Name,
                        Name: i.Asset.Name,
                        Color: i.Color,
                        Difficulty: i.Difficulty,
                        Property: property,
                        Craft: i.Craft,
                    };
                });

                const targetName = targetMember.IsPlayer()
                    ? "yourself"
                    : CharacterNickname(targetMember);

                await navigator.clipboard.writeText(
                    LZString.compressToBase64(JSON.stringify(looks))
                );
            }
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
		if (ChatRoomTargetMemberNumber == null) {
                    ServerSend("ChatRoomChat", {
                        "Content": content,
                        "Type": "Chat"
                    }); 
                } else {
                    ServerSend("ChatRoomChat", { 
                        "Content": content, 
                        "Type": "Whisper", 
                        "Target": ChatRoomTargetMemberNumber
                    });
                    for (let C = 0; C < ChatRoomCharacter.length; C++)
                        if (ChatRoomTargetMemberNumber == ChatRoomCharacter[C].MemberNumber) {
		            TargetName = ChatRoomCharacter[C].Name;
		            break;
	                }
	            ChatRoomMessage({ 
                        Content: "Whisper to "+TargetName+": "+ content, 
                        Type: "LocalMessage", 
                        Sender: Player.MemberNumber 
                    });
		    document.querySelector('#TextAreaChatLog').lastChild.style.fontStyle = "italic";	
		    document.querySelector('#TextAreaChatLog').lastChild.style.color = "silver";
                }                         
                ElementValue("InputChat", "");
            } if (this.GagTalkOn == true) {
                content = SpeechGarbleByGagLevel(gl, content);
		if (ChatRoomTargetMemberNumber == null) {
                    ServerSend("ChatRoomChat", {
                        "Content": content,
                        "Type": "Chat"
                    }); 
                } else {
                    ServerSend("ChatRoomChat", { 
                        "Content": content, 
                        "Type": "Whisper", 
                        "Target": ChatRoomTargetMemberNumber
                    });
                    for (let C = 0; C < ChatRoomCharacter.length; C++)
                        if (ChatRoomTargetMemberNumber == ChatRoomCharacter[C].MemberNumber) {
		            TargetName = ChatRoomCharacter[C].Name;
		            break;
	                }
	            ChatRoomMessage({ 
                        Content: "Whisper to "+TargetName+": "+ content, 
                        Type: "LocalMessage", 
                        Sender: Player.MemberNumber 
                    });
		    document.querySelector('#TextAreaChatLog').lastChild.style.fontStyle = "italic";	
		    document.querySelector('#TextAreaChatLog').lastChild.style.color = "silver";
                }                      		
                ElementValue("InputChat", "");
            } if (this.Stutter1On == true) {
                content = StutterTalk1(content);
		if (ChatRoomTargetMemberNumber == null) {
                    ServerSend("ChatRoomChat", {
                        "Content": content,
                        "Type": "Chat"
                    }); 
                } else {
                    ServerSend("ChatRoomChat", { 
                        "Content": content, 
                        "Type": "Whisper", 
                        "Target": ChatRoomTargetMemberNumber
                    });
                    for (let C = 0; C < ChatRoomCharacter.length; C++)
                        if (ChatRoomTargetMemberNumber == ChatRoomCharacter[C].MemberNumber) {
		            TargetName = ChatRoomCharacter[C].Name;
		            break;
	                }
	            ChatRoomMessage({ 
                        Content: "Whisper to "+TargetName+": "+ content, 
                        Type: "LocalMessage", 
                        Sender: Player.MemberNumber 
                    });
		    document.querySelector('#TextAreaChatLog').lastChild.style.fontStyle = "italic";	
		    document.querySelector('#TextAreaChatLog').lastChild.style.color = "silver";
                }                     
                ElementValue("InputChat", "");		    		    
            } if (this.Stutter2On == true) {
                content = StutterTalk2(content);
		if (ChatRoomTargetMemberNumber == null) {
                    ServerSend("ChatRoomChat", {
                        "Content": content,
                        "Type": "Chat"
                    }); 
                } else {
                    ServerSend("ChatRoomChat", { 
                        "Content": content, 
                        "Type": "Whisper", 
                        "Target": ChatRoomTargetMemberNumber
                    });
                    for (let C = 0; C < ChatRoomCharacter.length; C++)
                        if (ChatRoomTargetMemberNumber == ChatRoomCharacter[C].MemberNumber) {
		            TargetName = ChatRoomCharacter[C].Name;
		            break;
	                }
	            ChatRoomMessage({ 
                        Content: "Whisper to "+TargetName+": "+ content, 
                        Type: "LocalMessage", 
                        Sender: Player.MemberNumber 
                    });
		    document.querySelector('#TextAreaChatLog').lastChild.style.fontStyle = "italic";	
		    document.querySelector('#TextAreaChatLog').lastChild.style.color = "silver";
                }                     
                ElementValue("InputChat", "");
            } if (this.Stutter3On == true) {
		content = StutterTalk3(content);
		if (ChatRoomTargetMemberNumber == null) {
                    ServerSend("ChatRoomChat", {
                        "Content": content,
                        "Type": "Chat"
                    }); 
                } else {
                    ServerSend("ChatRoomChat", { 
                        "Content": content, 
                        "Type": "Whisper", 
                        "Target": ChatRoomTargetMemberNumber
                    });
                    for (let C = 0; C < ChatRoomCharacter.length; C++)
                        if (ChatRoomTargetMemberNumber == ChatRoomCharacter[C].MemberNumber) {
		            TargetName = ChatRoomCharacter[C].Name;
		            break;
	                }
	            ChatRoomMessage({ 
                        Content: "Whisper to "+TargetName+": "+ content, 
                        Type: "LocalMessage", 
                        Sender: Player.MemberNumber 
                    });
		    document.querySelector('#TextAreaChatLog').lastChild.style.fontStyle = "italic";	
		    document.querySelector('#TextAreaChatLog').lastChild.style.color = "silver";
                }                         
                ElementValue("InputChat", "");
            } if (this.Stutter4On == true) {
                content = StutterTalk4(content);
		if (ChatRoomTargetMemberNumber == null) {
                    ServerSend("ChatRoomChat", {
                        "Content": content,
                        "Type": "Chat"
                    }); 
                } else {
                    ServerSend("ChatRoomChat", { 
                        "Content": content, 
                        "Type": "Whisper", 
                        "Target": ChatRoomTargetMemberNumber
                    });
                    for (let C = 0; C < ChatRoomCharacter.length; C++)
                        if (ChatRoomTargetMemberNumber == ChatRoomCharacter[C].MemberNumber) {
		            TargetName = ChatRoomCharacter[C].Name;
		            break;
	                }
	            ChatRoomMessage({ 
                        Content: "Whisper to "+TargetName+": "+ content, 
                        Type: "LocalMessage", 
                        Sender: Player.MemberNumber 
                    });
		    document.querySelector('#TextAreaChatLog').lastChild.style.fontStyle = "italic";	
		    document.querySelector('#TextAreaChatLog').lastChild.style.color = "silver";
                }                      
                ElementValue("InputChat", "");    
            } else {
                OLDmenu()
            }
        }
        ElementValue("InputChat", "");
    }
}

/**
 * @param {string} original - The English message
 * @param {Record<string, string>} [replacements] - The replacements
 * @returns {string} - The translated message
 */
 function displayText(original, replacements = {}) {
    /** @type {Readonly<Record<string, Record<string, string>>>} */
    const translations = Object.freeze({
        CN: {
            "Automatic Arousal Expressions (Replaces Vanilla)":
                "自动欲望表情 (替换原版)",
            "Activity Expressions": "活动表示",
            "Alternate Arousal (Replaces Vanilla, requires hybrid/locked arousal meter)":
                "另一种欲望 (替换原版, 需要混合或锁定欲望条)",
            "Alternative speech stutter": "另一种言语不清",
            "Enable layering menus": "开启服装分层选项",
            "Extended wardrobe slots (96)": "扩展衣柜保存槽 (96个)",
            "Replace wardrobe list with character previews":
                "使用角色预览替换衣柜保存列表",
            "Clear Drawing Cache Hourly": "每小时清除绘图缓存",
            "Instant messenger": "即时通讯",
            "Chat Links and Embeds": "聊天链接和嵌入",
            "Use Ctrl+Enter to OOC": "使用Ctrl+Enter进行OOC发言",
            "Use italics for input when whispering": "悄悄话使用斜体字",
            "Improve colors for readability": "改善颜色以提高可读性",
            "Show friend presence notifications": "显示好友在线通知",
            "Show friends going offline too (requires friend presence)":
                "显示朋友离线通知 (需要启用好友在线通知)",
            "Understand All Gagged and when Deafened":
                "在被堵住嘴和被堵住耳朵时可以听懂所有发言",
            "Reveal Lockpicking Order Based on Skill": "根据技能显示撬锁/开锁顺序",
            "Allow layering menus while bound": "允许在捆绑时用分层菜单",
            "Load BCX by Jomshir98 (requires refresh - no auto-update)":
                "加载 BCX by Jomshir98 (需要刷新 - 无自动更新)",
            "Load BCX beta (requires refresh - auto-updates, compatibility not guaranteed)":
                "加载 BCX beta 测试版 (需要刷新 - 自动升级, 不保证兼容性)",
            "Limited gag anti-cheat: cloth-gag equivalent garbling":
                "有限的堵嘴反作弊: 和布堵嘴相同的乱码",
            "Full gag anti-cheat: use equipped gags to determine garbling":
                "完整的堵嘴反作弊: 使用当前装备的堵嘴来确定乱码",
            "Extra gag anti-cheat: even more garbling for the most extreme gags":
                "扩展的堵嘴反作弊: 对于使用最极端的堵嘴更加混乱",
            "Require glasses to see": "需要眼镜才能看清",
            "Check for updates": "检查更新",
            "Automatic Relogin on Disconnect": "断线后自动重连",
            "Show gag cheat and anti-cheat options in chat":
                "在聊天室里显示堵嘴作弊和反作弊选项",
            "Automatically ghost+blocklist unnaturally new users":
                "自动对不自然的用户无视并添加黑名单",
            "Use accurate timer inputs": "使用准确的计时器输入",
            "Confirm leaving the game": "离开游戏前需要确认",
            "Discreet mode (disable drawing)": "谨慎模式 (禁用绘图)",
            "Keep tab active (requires refresh)":
                "保持标签页处于活动状态 (需要刷新)",
            "Show FPS counter": "显示 FPS 计数器",
            "Limit FPS in background": "在后台时限制FPS",
            "Limit FPS to ~15": "限制 FPS 最高为 ~15",
            "Limit FPS to ~30": "限制 FPS 最高为 ~30",
            "Limit FPS to ~60": "限制 FPS 最高为 ~60",
            "Make automatic progress while struggling": "在挣扎时自动增加进度",
            "Allow leashing without wearing a leashable item (requires leasher to have FBC too)":
                "允许在不佩戴牵引绳的情况下也可以进行牵引（需要牵引者也安装有FBC）",
            "Enable buttplug.io (requires refresh)":
                "启用buttplug.io（需要刷新网页)",
            "This page allows configuration of the synchronization of bluetooth connected toys.":
                "此页面允许配置将BC震动器状态同步到蓝牙连接的玩具",
            "Save & browse seen profiles (requires refresh)":
                "保存并浏览已知的个人资料 (需要刷新)",
            "Chat & Social": "聊天 & 社交",
            "Activities & Arousal": "活动 & 欲望",
            "Appearance & Wardrobe": "外观 & 衣柜",
            "Immersion & Anti-Cheat": "沉浸体验 & 反作弊",
            Performance: "表现",
            Misc: "杂项",
            Cheats: "作弊",
            "Other Addons": "其他插件",
            "Show nicknames": "修改你的昵称",
            "Change your nickname": "修改你的昵称",
            ah: "啊",
            aah: "啊❤",
            mnm: "唔姆",
            nn: "嗯啊",
            mnh: "嗯哈",
            mngh: "唔啊",
            haa: "哈啊",
            nng: "嗯嗯❤",
            mnng: "唔啊❤",
        },
    });

    let text =
        TranslationLanguage in translations &&
        original in translations[TranslationLanguage]
            ? translations[TranslationLanguage][original]
            : original;
    for (const [key, val] of Object.entries(replacements)) {
        while (text.includes(key)) {
            text = text.replace(key, val);
        }
    }
    return text;
}

//if modified code above is not called, use original.
var OLDmenu = ChatRoomSendChat;
var ChatRoomSendChat = NEWmenu;

//below is additional stuff

//greeting message.
ChatCommandGreeting = function(data) {
    if (CurrentScreen == "ChatRoom" && data.Content == "ServerEnter") {
	Player.RestrictionSettings.BypassNPCPunishments = true;
	ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2 - version 1.7.0: Ready, type <b>/help</b> for general menu.\n" +
		    "Note: NPC punishments are disabled.\n" +
                    "Use <b>/help new</b> to get info about changes in current QAM version.\n" +
		    "Use <b>/clubhelp</b> to get the standard BC menu (+ BCE menu when enabled).\n" +
		    "Visit also our <a href='https://github.com/tetris245/tetris245/wiki' target='_blank'>Wiki</a>\n" +
                    "For any inquiries, join <a href='https://discord.gg/YukepB6RVp' target='_blank'>https://discord.gg/YukepB6RVp</a></p>"
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
    ChatRoomSendLocal(
        "<p style='background-color:#5fbd7a'>Disconnected! Reconnecting...</p>"
    );
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

//Other functions
function consoleWhisper() {
    ServerSend("ChatRoomChat", {
        Content: "Quick-Access Menu2: " + Player.Name + " has used console to alter appearance. If this is undesired, blacklist player.",
        Type: "Whisper",
        Target: ChatRoomTargetMemberNumber
    })
};

function gagSpeak() {
     OldSpeechGarble = SpeechGarble;
     SpeechGarble = function(C,CD,NoDeaf){
         origin = CD;
         out  = OldSpeechGarble(C,CD,NoDeaf)
         var GagEffect = 0;
         GagEffect += SpeechGetGagLevel(C, "ItemEars");
         GagEffect += SpeechGetGagLevel(C, "ItemMouth");
         GagEffect += SpeechGetGagLevel(C, "ItemMouth2");
         GagEffect += SpeechGetGagLevel(C, "ItemMouth3");
         GagEffect += SpeechGetGagLevel(C, "ItemHead");
         GagEffect += SpeechGetGagLevel(C, "ItemHood");
         GagEffect += SpeechGetGagLevel(C, "ItemNeck");
         GagEffect += SpeechGetGagLevel(C, "ItemDevices");
         if((GagEffect>0 || Player.GetDeafLevel()>0) && origin.charAt(0)!='('){
              out = out+' ('+ origin + ')';
         } 
         return out;
    }
    NewSpeechGarble = SpeechGarble;
}

function GetBlindLevel0 () {
    let blindLevel = 0;
    return blindLevel;
}

function GetBlindLevel1 () {
    let blindLevel = 1;
    return blindLevel;
}

function GetBlindLevel2 () {
    let blindLevel = 2;
    return blindLevel;
}

function GetBlindLevel3 () {
    let blindLevel = 3;
    return blindLevel;
}

function GetBlurLevel0 () {
    let blurLevel = 0;
    return blurLevel;
}

function GetBlurLevel1 () {
    let blurLevel = 3;
    return blurLevel;
}

function GetBlurLevel2 () {
    let blurLevel = 8;
    return blurLevel;
}

function GetBlurLevel3 () {
    let blurLevel = 20;
    return blurLevel;
}

function GetBlurLevel4 () {
    let blurLevel = 50;
    return blurLevel;
}

function GetDeafLevel0 () {
    let deafLevel = 0;
    return deafLevel;
}

function GetDeafLevel1 () {
    let deafLevel = 1;
    return deafLevel;
}

function GetDeafLevel2 () {
    let deafLevel = 2;
    return deafLevel;
}

function GetDeafLevel3 () {
    let deafLevel = 3;
    return deafLevel;
}

function GetDeafLevel4 () {
    let deafLevel = 4;
    return deafLevel;
}

function StutterTalk1(CD) {
	if (CD == null) CD = "";
	var Par = false;
	var CS = 1;
	var Seed = CD.length;
	for (let L = 0; L < CD.length; L++) {
	    var H = CD.charAt(L).toLowerCase();
	    if (H == "(") Par = true;
	    if (!Par && CS >= 0 && (H.match(/[[a-z?-??]/i))) {
	        var R = Math.sin(Seed++) * 10000;
		   R = R - Math.floor(R);
		   R = Math.floor(R * 10) + 2;
		   if (CS == 1 || R >= 10) {
		       CD = CD.substring(0, L) + CD.charAt(L) + "-" + CD.substring(L, CD.length);
			  L += 2;
		   }
		   CS = -1;
	     }
		if (H == " ") CS = 0;
		}
	return CD;
}

function StutterTalk2(CD) {
	if (CD == null) CD = "";
	var Par = false;
	var CS = 1;
	var Seed = CD.length;
	for (let L = 0; L < CD.length; L++) {
	    var H = CD.charAt(L).toLowerCase();
	    if (H == "(") Par = true;
	    if (!Par && CS >= 0 && (H.match(/[[a-z?-??]/i))) {
	        var R = Math.sin(Seed++) * 10000;
		   R = R - Math.floor(R);
		   R = Math.floor(R * 10) + 4;
		   if (CS == 1 || R >= 10) {
		       CD = CD.substring(0, L) + CD.charAt(L) + "-" + CD.substring(L, CD.length);
			  L += 2;
		   }
		   CS = -1;
	     }
		if (H == " ") CS = 0;
		}
	return CD;
}

function StutterTalk3(CD) {
	if (CD == null) CD = "";
	var Par = false;
	var CS = 1;
	var Seed = CD.length;
	for (let L = 0; L < CD.length; L++) {
	    var H = CD.charAt(L).toLowerCase();
	    if (H == "(") Par = true;
	    if (!Par && CS >= 0 && (H.match(/[[a-z?-??]/i))) {
	        var R = Math.sin(Seed++) * 10000;
		   R = R - Math.floor(R);
		   R = Math.floor(R * 10) + 6;
		   if (CS == 1 || R >= 10) {
		       CD = CD.substring(0, L) + CD.charAt(L) + "-" + CD.substring(L, CD.length);
			  L += 2;
		   }
		   CS = -1;
	     }
		if (H == " ") CS = 0;
		}
	return CD;
}

function StutterTalk4(CD) {
	if (CD == null) CD = "";
	var Par = false;
	var CS = 1;
	var Seed = CD.length;
	for (let L = 0; L < CD.length; L++) {
	    var H = CD.charAt(L).toLowerCase();
	    if (H == "(") Par = true;
	    if (!Par && CS >= 0 && (H.match(/[[a-z?-??]/i))) {
	        var R = Math.sin(Seed++) * 10000;
		   R = R - Math.floor(R);
		   R = Math.floor(R * 10) + 8;
		   if (CS == 1 || R >= 10) {
		       CD = CD.substring(0, L) + CD.charAt(L) + "-" + CD.substring(L, CD.length);
			  L += 2;
		   }
		   CS = -1;
	     }
		if (H == " ") CS = 0;
		}
	return CD;
}

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
var PlatformTemplate = [];
var PlatformRoomList = [];
var PlatformDialogCharacterTemplate = [];

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

//controle sur le script entier
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

//controle sur les gÃƒÂ©missements quand on parle
function talkControl(commande) {
    if (commande == "on") {
        M_MOANER_talkActive = true;
    } else if (commande == "off") {
        M_MOANER_talkActive = false;
    }
    showM_MOANER_talkStatus();
}

//controle sur les gÃƒÂ©missements ÃƒÂ  l'orgasme
function orgasmControl(commande) {
    if (commande == "on") {
        M_MOANER_orgasmActive = true;
    } else if (commande == "off") {
        M_MOANER_orgasmActive = false;
    }
    showM_MOANER_orgasmStatus();
}

//controle sur les gÃƒÂ©missements au lancement d'un vibrateur
function vibeControl(commande) {
    if (commande == "on") {
        M_MOANER_vibratorActive = true;
    } else if (commande == "off") {
        M_MOANER_vibratorActive = false;
    }
    showM_MOANER_vibratorStatus();
}

//controle sur les gÃƒÂ©missements ÃƒÂ  la fessÃƒÂ©e
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
            //console.log("MoanerIsLoaded trouvÃƒÂ©");
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
//rÃƒÂ©agir au chat
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
        //rÃƒÂ©cupÃƒÂ©rer le gÃƒÂ©missement ÃƒÂ  appliquer
        //datas pour gÃƒÂ©nÃƒÂ©ration des gÃƒÂ©missements
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
        //rÃƒÂ©cupÃƒÂ©rer le gÃƒÂ©missement ÃƒÂ  appliquer
        //datas pour gÃƒÂ©nÃƒÂ©ration des gÃƒÂ©missements
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
        //rÃƒÂ©cupÃƒÂ©rer le gÃƒÂ©missement ÃƒÂ  appliquer
        //datas pour gÃƒÂ©nÃƒÂ©ration des gÃƒÂ©missements
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
        //rÃƒÂ©cupÃƒÂ©rer le gÃƒÂ©missement ÃƒÂ  appliquer
        //datas pour gÃƒÂ©nÃƒÂ©ration des gÃƒÂ©missements
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
    //dÃƒÂ©terminer le nombre de gÃƒÂ©missements
    //calculer ÃƒÂ§a en fonction du nombre de mots
    //proportion: PROPORTION_MAX*niveauExcitation
    //PROPORTION_MAX=40%
    var proportion = C.ArousalSettings.Progress * PROPORTION_MAX / 10000;
    M_MOANER_logDebug("proportion: " + proportion);
    var CDList = CD.split(" ");

    var currentIndex = 0;
    var stop = false;
    var finalTextList = [];

    //rÃƒÂ©cupÃƒÂ©rer les gÃƒÂ©missements ÃƒÂ  appliquer
    //datas pour gÃƒÂ©nÃƒÂ©ration des gÃƒÂ©missements
    var Factor = Math.floor(C.ArousalSettings.Progress / 20);
    while (currentIndex < CDList.length) {
        //si le prochain mot contient une parenthÃƒÂ¨se, on arrÃƒÂ¨te la rÃƒÂ©partission des gÃƒÂ©missements)
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
    //sÃƒÂ©lectionner un gÃƒÂ©missement
    return " " + selectMoan(Factor, seed);
}

function getSpankMoan(Factor, seed) {
    let gemissement;
    //selon le niveau de fetichisme fessÃƒÂ©e
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
                                Text: Player.Nickname + " doesn't have a diaper there!"
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
                                Text: Player.Nickname + " doesn't have a diaper there!"
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
                                Text: Player.Nickname + " doesn't have a diaper! Get one on her before she makes a mess!"
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
            Text: "Say hello to the little baby " + Player.Nickname + "!"
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
                    Text: Player.Nickname + DiaperUseMessages["ChangeDiaperBoth"]
                }]
            });
        } else if ((checkForDiaper("Panties") && !checkForDiaper("ItemPelvis")) || (checkForDiaper("ItemPelvis") && !checkForDiaper("Panties"))) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: Player.Nickname + DiaperUseMessages["ChangeDiaperOnly"]
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
                    Text: Player.Nickname + DiaperUseMessages["ChangeDiaperOuter"]
                }]
            });
        } else if (checkForDiaper("ItemPelvis") && !checkForDiaper("Panties")) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: Player.Nickname + DiaperUseMessages["ChangeDiaperOnly"]
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
                    Text: Player.Nickname + DiaperUseMessages["ChangeDiaperOuter"]
                }]
            });
        } else if (checkForDiaper("Panties") && !checkForDiaper("ItemPelvis")) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: Player.Nickname + DiaperUseMessages["ChangeDiaperOnly"]
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
                Text: "Awww, " + Player.Nickname + " is all grown up!"
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
                    Text: Player.Nickname + DiaperUseMessages["MessOnlyFully"]
                }]
            });
        } else if ((checkForDiaper("Panties") && !checkForDiaper("ItemPelvis")) || (checkForDiaper("ItemPelvis") && !checkForDiaper("Panties"))) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: Player.Nickname + DiaperUseMessages["MessOnly"]
                }]
            });
        } else if (MessLevelChastity === 0) {
            if (MessLevelPanties === 2) {
                ServerSend("ChatRoomChat", {
                    Type: "Action",
                    Content: "gag",
                    Dictionary: [{
                        Tag: "gag",
                        Text: Player.Nickname + DiaperUseMessages["MessInnerFully"]
                    }]
                });
            } else if (MessLevelPanties === 1) {
                ServerSend("ChatRoomChat", {
                    Type: "Action",
                    Content: "gag",
                    Dictionary: [{
                        Tag: "gag",
                        Text: Player.Nickname + DiaperUseMessages["MessInner"]
                    }]
                });
            }
        } else if (MessLevelChastity === 1) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: Player.Nickname + DiaperUseMessages["MessOuter"]
                }]
            });
        } else if (MessLevelChastity === 2) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: Player.Nickname + DiaperUseMessages["MessOuterFully"]
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
                    Text: Player.Nickname + DiaperUseMessages["MessOnlyFully"]
                }]
            });
        } else if ((checkForDiaper("Panties") && !checkForDiaper("ItemPelvis")) || (checkForDiaper("ItemPelvis") && !checkForDiaper("Panties"))) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: Player.Nickname + DiaperUseMessages["WetOnly"]
                }]
            });
        } else if (WetLevelChastity === 0) {
            if (WetLevelPanties === 2) {
                ServerSend("ChatRoomChat", {
                    Type: "Action",
                    Content: "gag",
                    Dictionary: [{
                        Tag: "gag",
                        Text: Player.Nickname + DiaperUseMessages["WetInnerFully"]
                    }]
                });
            } else if (WetLevelPanties === 1) {
                ServerSend("ChatRoomChat", {
                    Type: "Action",
                    Content: "gag",
                    Dictionary: [{
                        Tag: "gag",
                        Text: Player.Nickname + DiaperUseMessages["WetInner"]
                    }]
                });
            }
        } else if (WetLevelChastity === 1) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: Player.Nickname + DiaperUseMessages["WetOuter"]
                }]
            });
        } else if (WetLevelChastity === 2) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: Player.Nickname + DiaperUseMessages["WetOuterFully"]
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

//Message in login screen
function LoginRun() {
	if (LoginCredits != null) LoginDrawCredits();
	const CanLogin = ServerIsConnected && !LoginSubmitted;
        DrawButton(750,120,500,60,"QAM 1.7.0 Ready!", "Pink", "Black", "");
	DrawText(TextGet("Welcome"), 1000, 50, "White", "Black");
	DrawText(LoginMessage, 1000, 100, "White", "Black");
	DrawText(TextGet("AccountName"), 1000, 200, "White", "Black");
	ElementPosition("InputName", 1000, 260, 500);
	DrawText(TextGet("Password"), 1000, 350, "White", "Black");
	ElementPosition("InputPassword", 1000, 410, 500);
	DrawButton(775, 500, 200, 60, TextGet("Login"), CanLogin ? "White" : "Grey", "");
	DrawButton(1025, 500, 200, 60, TextGet("Language"), "White", "");
	DrawText(TextGet("CreateNewCharacter"), 1000, 670, "White", "Black");
	DrawButton(825, 740, 350, 60, TextGet("NewCharacter"), CanLogin ? "White" : "Grey", "");
	DrawButton(825, 870, 350, 60, TextGet(CheatAllow ? "Cheats" : "PasswordReset"), CheatAllow || CanLogin ? "White" : "Grey", "");
	DrawCharacter(LoginCharacter, 1400, 100, 0.9);
	if (LoginThankYouNext < CommonTime()) LoginDoNextThankYou();
	DrawImage("Screens/" + CurrentModule + "/" + CurrentScreen + "/Bubble.png", 1400, 16);
	DrawText(TextGet("ThankYou") + " " + LoginThankYou, 1625, 53, "Black", "Gray");
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

function PlatformIntroLoad() {}

function PlatformIntroRun()  {}

function PlatformIntroClick() {}

function PlatformCreateCharacter() {}

function PlatformLoadRoom() {}

function PlatformPartySave() {}

function PlatformPartyLoad() {}

function PlatformRun() {}

function PlatformProfileRun() {}

function PlatformSaveGame() {}

function PlatformLoadGame() {}

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
		        if (item.Craft != null) 
			    for (let Char of ChatRoomCharacter)
			        if (Char.MemberNumber === data.Source)
				    InventoryCraft(Char, ChatRoomCharacter[C], data.Item.Group, item.Craft, false);
                InventoryGet(ChatRoomCharacter[C], data.Item.Group).Property = item.Property;
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

function MainHallRun() {
	KidnapLeagueResetOnlineBountyProgress();
	if (!MainHallBeingPunished) {
		if (Player.ImmersionSettings && Player.LastChatRoom && (Player.LastChatRoom != "") && (AsylumGGTSGetLevel(Player) <= 5) && ((MainHallMaid === null) || (MainHallMaid.Stage === "0"))) {
			if (MainHallFirstFrame) {
				if (Player.ImmersionSettings.ReturnToChatRoom) {
					ChatRoomStart("", "", "MainHall", "Introduction", BackgroundsTagList);
					return;
				} else ChatRoomSetLastChatRoom("");
			} else MainHallFirstFrame = true;
		} else {
			if (CurrentCharacter == null && CommonVersionUpdated && MainHallMaid.Dialog != null && MainHallMaid.Dialog.length > 0) {
				CommonVersionUpdated = false;
				CharacterSetCurrent(MainHallMaid);
				MainHallMaid.Stage = "200";
				MainHallMaid.CurrentDialog = DialogFind(MainHallMaid, "ClubUpdated");
				return;
			}
			if ((CurrentCharacter == null) && ManagementIsClubSlave() && LogQuery("BlockChange", "Rule") && !Player.IsNaked() && (MainHallMaid.Dialog != null) && (MainHallMaid.Dialog.length > 0)) {
				MainHallMaid.Stage = "50";
				MainHallMaid.CurrentDialog = DialogFind(MainHallMaid, "ClubSlaveMustBeNaked");
				CharacterRelease(MainHallMaid);
				CharacterSetCurrent(MainHallMaid);
				MainHallStartEventTimer = null;
				MainHallNextEventTimer = null;
				return;
			}
			if ((CurrentCharacter == null) && LogQuery("ClubMistress", "Management") && (ReputationGet("Dominant") < 50) && (CheatFactor("CantLoseMistress", 0) == 1) && Player.CanTalk() && (MainHallMaid.Dialog != null) && (MainHallMaid.Dialog.length > 0)) {
				CommonSetScreen("Room", "Management");
				CharacterSetCurrent(MainHallMaid);
				CurrentScreen = "MainHall";
				MainHallMaid.Stage = "60";
				MainHallMaid.CurrentDialog = DialogFind(MainHallMaid, "MistressExpulsionIntro");
				return;
			}
		}
	}
	DrawCharacter(Player, 750, 0, 1);
	MainCanvas.font = "italic " + CommonGetFont(30);
	DrawTextWrap(TextGet("Tip" + MainHallTip), 100, 800, 500, 200, "White");
	MainCanvas.font = CommonGetFont(36);
        DrawButton(1365,845,500,90,"Access to Bondage Brawl is blocked", "Pink", "Black", "");
	var QAMtext = "Welcome to Quick-AccessMenu2!      " +
	              "Besides the commands usable only in chat rooms, this addon comes with several automatic features. " +        
                      "Visit QAM Wiki and use /help for more info!";
        MainCanvas.fillStyle = "#50E992";
	MainCanvas.fillRect(20, 588, 640, 246);
	MainCanvas.strokeStyle = "Black";
	MainCanvas.strokeRect(20, 588, 640, 246);
        MainCanvas.textAlign = "left";
	DrawTextWrap(QAMtext, 30 - 630 / 2, 593, 630, 236, "black");
	MainCanvas.textAlign = "center";
	DrawButton(1645, 25, 90, 90, "", "White", "Icons/Character.png", TextGet("Profile"));
	if (Player.CanChangeOwnClothes()) DrawButton(1765, 25, 90, 90, "", "White", "Icons/Dress.png", TextGet("Appearance"));
	DrawButton(1885, 25, 90, 90, "", "White", "Icons/Exit.png", TextGet("Exit"));
	DrawButton(1645, 145, 90, 90, "", "White", "Icons/Chat.png", TextGet("ChatRooms"));
	if (Player.CanWalk() && (!Player.IsRestrained() || !Player.GameplaySettings.OfflineLockedRestrained)) {
		DrawButton(1765, 145, 90, 90, "", "White", "Icons/Shop.png", TextGet("Shop"));
		if (!LogQuery("LockOutOfPrivateRoom", "Rule")) DrawButton(1885, 145, 90, 90, "", "White", "Icons/Private.png", TextGet("PrivateRoom"));
		DrawButton(1645, 265, 90, 90, "", "White", "Icons/Introduction.png", TextGet("IntroductionClass"));
		DrawButton(1765, 265, 90, 90, "", "White", "Icons/Maid.png", TextGet("MaidQuarters"));
		DrawButton(1885, 265, 90, 90, "", "White", "Icons/Management.png", TextGet("ClubManagement"));
		DrawButton(1645, 385, 90, 90, "", "White", "Icons/Kidnap.png", TextGet("KidnapLeague"));
		DrawButton(1765, 385, 90, 90, "", "White", "Icons/Dojo.png", TextGet("ShibariDojo"));
		if (SarahRoomAvailable) DrawButton(1885, 385, 90, 90, "", "White", "Icons/Explore.png", TextGet(SarahRoomLabel()));
		DrawButton(1525, 505, 90, 90, "", "White", "Icons/Crafting.png", TextGet("Crafting"));
		DrawButton(1645, 505, 90, 90, "", "White", "Icons/Question.png", TextGet("LookForTrouble"));
		DrawButton(1765, 505, 90, 90, "", "White", "Icons/Gavel.png", TextGet("SlaveMarket"));
		DrawButton(1885, 505, 90, 90, "", "White", "Icons/Cell.png", TextGet("Cell"));
		if (!ManagementIsClubSlave()) DrawButton(1645, 625, 90, 90, "", "White", "Icons/Battle.png", TextGet("LARPBattle"));
		if (!ManagementIsClubSlave()) DrawButton(1765, 625, 90, 90, "", "White", "Icons/College.png", TextGet("College"));
		if (MainHallAsylumOpen) DrawButton(1885, 625, 90, 90, "", "White", "Icons/Asylum.png", TextGet("Asylum"));
		if (Player.CanChangeOwnClothes()) DrawButton(1525, 745, 90, 90, "", "White", "Icons/MagicSchool.png", TextGet("MagicSchool"));
		if (Player.CanChangeOwnClothes() && Player.CanTalk()) DrawButton(1645, 745, 90, 90, "", "White", "Icons/Poker.png", TextGet("Poker"));
		if (Player.CanChangeOwnClothes()) DrawButton(1765, 745, 90, 90, "", "White", "Icons/Infiltration.png", TextGet("Infiltration"));
		if (Player.CanChangeOwnClothes()) DrawButton(1885, 745, 90, 90, "", "White", "Icons/MovieStudio.png", TextGet("MovieStudio"));
		DrawButton(265, 25, 90, 90, "", "White", "Icons/Camera.png", TextGet("Photographic"));
		DrawButton(145, 25, 90, 90, "", "White", "Icons/Cage.png", TextGet("Prison"));
		DrawButton(25, 25, 90, 90, "", "White", "Icons/Random.png", TextGet("Gambling"));
		DrawButton(265, 145, 90, 90, "", "White", "Icons/Diaper.png", TextGet("Nursery"));
		DrawButton(145, 145, 90, 90, "", "White", "Icons/Magic.png", TextGet("Magic"));
		DrawButton(25, 145, 90, 90, "", "White", "Icons/Horse.png", TextGet("Stable"));
		DrawButton(145, 265, 90, 90, "", "White", "Icons/Arcade.png", TextGet("Arcade"));
		DrawButton(25, 265, 90, 90, "", "White", "Icons/Refreshsments.png", TextGet("Cafe"));
	} else {
		if (Player.CanWalk() && MaidQuartersOnlineDrinkStarted) {
			DrawButton(1765, 265, 90, 90, "", "White", "Icons/Maid.png", TextGet("MaidQuarters"));
			DrawButton(25, 265, 90, 90, "", "White", "Icons/Refreshsments.png", TextGet("Cafe"));
		}
		if (Player.CanWalk() && (InventoryIsWorn(Player, "BountySuitcase", "ItemMisc") || InventoryIsWorn(Player, "BountySuitcaseEmpty", "ItemMisc")))
			DrawButton(1645, 385, 90, 90, "", "White", "Icons/Kidnap.png", TextGet("KidnapLeague"));
	}
	if (MainHallMaid !== null && (MainHallNextEventTimer != null) && (CommonTime() >= MainHallNextEventTimer)) {
		MainHallMaid.Stage = "0";
		CharacterRelease(MainHallMaid);
		CharacterSetCurrent(MainHallMaid);
		MainHallStartEventTimer = null;
		MainHallNextEventTimer = null;
		MainHallMaidWasCalledManually = false;
	}
	if ((MainHallStartEventTimer == null) && (MainHallNextEventTimer == null)) {
		if ( (!Player.GameplaySettings || !Player.GameplaySettings.DisableAutoMaid) && ((!Player.CanInteract() || !Player.CanWalk() || !Player.CanTalk() || Player.IsShackled()))) {
			MainHallStartEventTimer = CommonTime();
			MainHallNextEventTimer = CommonTime() + 40000 + Math.floor(Math.random() * 40000);
		} else {
			DrawText(TextGet("OnlinePlayers") + " " + CurrentOnlinePlayers.toString(), 1650, 960, "White", "Black");
			DrawButton(1885, 900, 90, 90, "", "White", "Icons/ServiceBell.png", TextGet("RequestMaid"));
		}
		MainHallMaidWasCalledManually = false;
	} else {
		if (!MainHallMaidWasCalledManually && !((!Player.CanInteract() || !Player.CanWalk() || !Player.CanTalk() || Player.IsShackled()))) {
			MainHallStartEventTimer = null;
			MainHallNextEventTimer = null;
		} else {
			DrawText(TextGet("RescueIsComing"), 1750, 925, "White", "Black");
			DrawProgressBar(1525, 955, 450, 35, (1 - ((MainHallNextEventTimer - CommonTime()) / (MainHallNextEventTimer - MainHallStartEventTimer))) * 100);
		}
	}
}

function MainHallClick() {
	if ((MouseX >= 750) && (MouseX < 1250) && (MouseY >= 0) && (MouseY < 1000)) CharacterSetCurrent(Player);
	if ((MouseX >= 1645) && (MouseX < 1735) && (MouseY >= 25) && (MouseY < 115)) InformationSheetLoadCharacter(Player);
	if ((MouseX >= 1765) && (MouseX < 1855) && (MouseY >= 25) && (MouseY < 115) && Player.CanChangeOwnClothes()) CharacterAppearanceLoadCharacter(Player);
	if ((MouseX >= 1885) && (MouseX < 1975) && (MouseY >= 25) && (MouseY < 115)) {
		if (window.confirm(TextGet("ExitConfirm"))) {
			ServerAccountUpdate.SyncToServer();
			// eslint-disable-next-line no-self-assign
			window.location = window.location;
		}
	}
	if ((MouseX >= 1645) && (MouseX < 1735) && (MouseY >= 145) && (MouseY < 235)) ChatRoomStart("", "", "MainHall", "Introduction", BackgroundsTagList);
	if (Player.CanWalk() && (!Player.IsRestrained() || !Player.GameplaySettings.OfflineLockedRestrained)) {
		if ((MouseX >= 1765) && (MouseX < 1855) && (MouseY >= 145) && (MouseY < 235)) MainHallWalk("Shop");
		if ((MouseX >= 1885) && (MouseX < 1975) && (MouseY >= 145) && (MouseY < 235) && !LogQuery("LockOutOfPrivateRoom", "Rule")) MainHallWalk("Private");
		if ((MouseX >= 1645) && (MouseX < 1735) && (MouseY >= 265) && (MouseY < 355)) MainHallWalk("Introduction");
		if ((MouseX >= 1765) && (MouseX < 1855) && (MouseY >= 265) && (MouseY < 355)) MainHallWalk("MaidQuarters");
		if ((MouseX >= 1885) && (MouseX < 1975) && (MouseY >= 265) && (MouseY < 355)) MainHallWalk("Management");
		if ((MouseX >= 1645) && (MouseX < 1735) && (MouseY >= 385) && (MouseY < 475)) MainHallWalk("KidnapLeague");
		if ((MouseX >= 1765) && (MouseX < 1855) && (MouseY >= 385) && (MouseY < 475)) MainHallWalk("Shibari");
		if ((MouseX >= 1885) && (MouseX < 1975) && (MouseY >= 385) && (MouseY < 475) && SarahRoomAvailable) MainHallWalk("Sarah");
		if ((MouseX >= 1525) && (MouseX < 1615) && (MouseY >= 505) && (MouseY < 595)) MainHallWalk("Crafting");
		if ((MouseX >= 1645) && (MouseX < 1735) && (MouseY >= 505) && (MouseY < 595)) MainHallWalk("Trouble");
		if ((MouseX >= 1765) && (MouseX < 1855) && (MouseY >= 505) && (MouseY < 595)) MainHallWalk("SlaveMarket");
		if ((MouseX >= 1885) && (MouseX < 1975) && (MouseY >= 505) && (MouseY < 595)) MainHallWalk("Cell");
		if ((MouseX >= 1645) && (MouseX < 1735) && (MouseY >= 625) && (MouseY < 715) && !ManagementIsClubSlave()) MainHallWalk("LARP");
		if ((MouseX >= 1765) && (MouseX < 1855) && (MouseY >= 625) && (MouseY < 715) && !ManagementIsClubSlave()) MainHallWalk("CollegeEntrance");
		if ((MouseX >= 1885) && (MouseX < 1975) && (MouseY >= 625) && (MouseY < 715) && MainHallAsylumOpen) MainHallWalk("AsylumEntrance");
		if ((MouseX >= 1525) && (MouseX < 1615) && (MouseY >= 745) && (MouseY < 855) && Player.CanChangeOwnClothes()) MainHallWalk("MagicSchoolLaboratory");
		if ((MouseX >= 1645) && (MouseX < 1735) && (MouseY >= 745) && (MouseY < 855) && Player.CanChangeOwnClothes() && !Player.IsRestrained() && Player.CanTalk()) MainHallWalk("Poker");
		if ((MouseX >= 1765) && (MouseX < 1855) && (MouseY >= 745) && (MouseY < 855) && Player.CanChangeOwnClothes()) MainHallWalk("Infiltration");
		if ((MouseX >= 1885) && (MouseX < 1975) && (MouseY >= 745) && (MouseY < 855) && Player.CanChangeOwnClothes()) MainHallWalk("MovieStudio");
		if ((MouseX >=   25) && (MouseX <  115) && (MouseY >=  25) && (MouseY < 115)) MainHallWalk("Gambling");
		if ((MouseX >=  145) && (MouseX <  235) && (MouseY >=  25) && (MouseY < 115)) MainHallWalk("Prison");
		if ((MouseX >=  265) && (MouseX <  355) && (MouseY >=  25) && (MouseY < 115)) MainHallWalk("Photographic");
		if ((MouseX >=   25) && (MouseX <  115) && (MouseY >= 145) && (MouseY < 235)) MainHallWalk("Stable");
		if ((MouseX >=  145) && (MouseX <  235) && (MouseY >= 145) && (MouseY < 235)) MainHallWalk("Magic");
		if ((MouseX >=  265) && (MouseX <  355) && (MouseY >= 145) && (MouseY < 235)) MainHallWalk("Nursery");
		if ((MouseX >=   25) && (MouseX <  115) && (MouseY >= 265) && (MouseY < 355)) MainHallWalk("Cafe");
		if ((MouseX >=   145) && (MouseX <  235) && (MouseY >= 265) && (MouseY < 355)) MainHallWalk("Arcade");
	} else {
		if (Player.CanWalk() && MaidQuartersOnlineDrinkStarted) {
			if ((MouseX >= 1765) && (MouseX < 1855) && (MouseY >= 265) && (MouseY < 355))
				MainHallWalk("MaidQuarters");
			if ((MouseX >=   25) && (MouseX <  115) && (MouseY >= 265) && (MouseY < 355))
				MainHallWalk("Cafe");
		}
		if (Player.CanWalk() && (InventoryIsWorn(Player, "BountySuitcase", "ItemMisc") || InventoryIsWorn(Player, "BountySuitcaseEmpty", "ItemMisc")))
			if ((MouseX >= 1645) && (MouseX < 1735) && (MouseY >= 385) && (MouseY < 475))
				MainHallWalk("KidnapLeague");

	}
	if ((MainHallStartEventTimer == null) && (MainHallNextEventTimer == null)) {
		if (MouseIn(1885, 900, 90, 90)) {
			if (MainHallNextEventTimer == null) {
				AudioPlayInstantSound("Audio/BellSmall.mp3");
				MainHallStartEventTimer = CommonTime();
				MainHallNextEventTimer = CommonTime() + 40000 + Math.floor(Math.random() * 40000);
				MainHallMaidWasCalledManually = true;
			}
		}
	}
}

function AppearanceRun() {
	var C = CharacterAppearanceSelection;
	if (CharacterAppearanceHeaderTextTime < CommonTime() && CharacterAppearanceMode == "Cloth")
		CharacterAppearanceHeaderText = "";
	if (CharacterAppearanceHeaderText == "") {
		if (C.ID == 0) CharacterAppearanceHeaderText = TextGet("SelectYourAppearance");
		else CharacterAppearanceHeaderText = TextGet("SelectSomeoneAppearance").replace("TargetCharacterName", C.Name);
	}
	DrawCharacter(C, -600, -100 + 4 * C.HeightModifier, 4, false);
	DrawCharacter(C, 750, 0, 1);
	DrawText(CharacterAppearanceHeaderText, 400, 40, "White", "Black");
	if (DialogFocusItem != null) {
		CommonDynamicFunction("Inventory" + DialogFocusItem.Asset.Group.Name + DialogFocusItem.Asset.Name + "Draw()");
		DrawButton(1885, 25, 90, 90, "", "White", "Icons/Exit.png");
		return;
	}
	if (CharacterAppearanceMenuMode !== CharacterAppearanceMode) {
		CharacterAppearanceMenuMode = CharacterAppearanceMode;
		AppearanceMenuBuild(C);
	}
	AppearanceMenuDraw();
	if (CharacterAppearanceMode == "") {
		for (let A = CharacterAppearanceOffset; A < AssetGroup.length && A < CharacterAppearanceOffset + CharacterAppearanceNumPerPage; A++)
			if ((AssetGroup[A].Family == C.AssetFamily) && (AssetGroup[A].Category == "Appearance") && AssetGroup[A].AllowCustomize) {
				const Item = InventoryGet(C, AssetGroup[A].Name);
				const ButtonColor = WardrobeGroupAccessible(C, AssetGroup[A]) ? "White" : "#888";
				if (AssetGroup[A].AllowNone && (AssetGroup[A].Category == "Appearance") && (Item != null) && WardrobeGroupAccessible(C, AssetGroup[A]))
					DrawButton(1210, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", ButtonColor, "Icons/Small/Naked.png", TextGet("StripItem"));
				DrawBackNextButton(1300, 145 + (A - CharacterAppearanceOffset) * 95, 400, 65, AssetGroup[A].Description + ": " + CharacterAppearanceGetCurrentValue(C, AssetGroup[A].Name, "Description"), ButtonColor, "",
					() => WardrobeGroupAccessible(C, AssetGroup[A]) ? CharacterAppearanceNextItem(C, AssetGroup[A].Name, false, true) : "",
					() => WardrobeGroupAccessible(C, AssetGroup[A]) ? CharacterAppearanceNextItem(C, AssetGroup[A].Name, true, true) : "",
					!WardrobeGroupAccessible(C, AssetGroup[A]),
					AssetGroup[A].AllowNone || AppearancePreviewUseCharacter(AssetGroup[A]) ? 65 : null);
				var Color = CharacterAppearanceGetCurrentValue(C, AssetGroup[A].Name, "Color");
				const ColorButtonText = ItemColorGetColorButtonText(Color);
				const ColorButtonColor = ColorButtonText.startsWith("#") ? ColorButtonText : "#fff";
				const CanCycleColors = !!Item && WardrobeGroupAccessible(C, AssetGroup[A]) && (Item.Asset.ColorableLayerCount > 0 || Item.Asset.Group.ColorSchema.length > 1) && !InventoryBlockedOrLimited(C, Item);
				const CanPickColor = CanCycleColors && AssetGroup[A].AllowColorize;
				const ColorIsSimple = ItemColorIsSimple(Item);

				DrawButton(1725, 145 + (A - CharacterAppearanceOffset) * 95, 160, 65, ColorButtonText, CanCycleColors ? ColorButtonColor : "#aaa", null, null, !CanCycleColors);
				DrawButton(1910, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", CanPickColor ? "#fff" : "#aaa", CanPickColor ? ColorIsSimple ? "Icons/Color.png" : "Icons/MultiColor.png" : "Icons/ColorBlocked.png", null, !CanPickColor);
			}
	}
	if (CharacterAppearanceMode == "Wardrobe") {
		DrawText(CharacterAppearanceWardrobeText, 1645, 220, "White", "Gray");
		ElementPosition("InputWardrobeName", 1645, 315, 690);
           DrawButton(1300, 240, 330, 50, "QAM Export", "#50E992", "");
           DrawButton(1645, 240, 330, 50, "QAM Import", "#50E992", "");
		for (let W = CharacterAppearanceWardrobeOffset; W < Player.Wardrobe.length && W < CharacterAppearanceWardrobeOffset + 6; W++) {
			DrawButton(1300, 430 + (W - CharacterAppearanceWardrobeOffset) * 95, 500, 65, "", "White", "");
			DrawTextFit((W + 1).toString() + (W < 9 ? ":  " : ": ") + Player.WardrobeCharacterNames[W], 1550, 463 + (W - CharacterAppearanceWardrobeOffset) * 95, 496, "Black");
			DrawButton(1820, 430 + (W - CharacterAppearanceWardrobeOffset) * 95, 160, 65, "Save", "White", "");
		}
	}
	if (CharacterAppearanceMode == "Color") {
		// Leave the color picker if the item is gone.
		if (!InventoryGet(CharacterAppearanceSelection, CharacterAppearanceColorPickerGroupName)) ItemColorCancelAndExit();
		// Draw the color picker
		ItemColorDraw(CharacterAppearanceSelection, CharacterAppearanceColorPickerGroupName, 1200, 25, 775, 950, true);
	}
	if (CharacterAppearanceMode == "Cloth") {
		// Prepares a 3x3 square of clothes to present all the possible options
		let X = 1250;
		let Y = 125;
		for (let I = DialogInventoryOffset; (I < DialogInventory.length) && (I < DialogInventoryOffset + 9); I++) {
			const Item = DialogInventory[I];
			const Hover = MouseIn(X, Y, 225, 275) && !CommonIsMobile;
			const Background = AppearanceGetPreviewImageColor(C, Item, Hover);
			if (Item.Hidden) {
				DrawPreviewBox(X, Y, "Icons/HiddenItem.png", Item.Asset.Description, { Background });
			} else if (AppearancePreviewUseCharacter(C.FocusGroup)) {
				const Z = C.FocusGroup.PreviewZone;
				const PreviewCanvas = DrawCharacterSegment(AppearancePreviews[I], Z[0], Z[1], Z[2], Z[3]);
				DrawCanvasPreview(X, Y, PreviewCanvas, Item.Asset.Description, { Background, Vibrating: Item.Vibrating, Icons: Item.Icons });
			} else {
				DrawAssetPreview(X, Y, Item.Asset, { Background, Vibrating: Item.Vibrating, Icons: Item.Icons });
			}
			setButton(X, Y);
			X = X + 250;
			if (X > 1800) {
				X = 1250;
				Y = Y + 300;
			}
		}
	}
}

function AppearanceClick() {
	var C = CharacterAppearanceSelection;
	ClearButtons();
	if (DialogFocusItem != null) {
		CommonDynamicFunction("Inventory" + DialogFocusItem.Asset.Group.Name + DialogFocusItem.Asset.Name + "Click()");
	}
	else if (CharacterAppearanceMode == "Color") {
		ItemColorClick(CharacterAppearanceSelection, CharacterAppearanceColorPickerGroupName, 1200, 25, 775, 950, true);
	}
	else if (MouseYIn(25, 90)) AppearanceMenuClick(C);
	else if (CharacterAppearanceMode == "") {
		if ((MouseX >= 1210) && (MouseX < 1275) && (MouseY >= 145) && (MouseY < 975))
			for (let A = CharacterAppearanceOffset; A < AssetGroup.length && A < CharacterAppearanceOffset + CharacterAppearanceNumPerPage; A++)
				if ((AssetGroup[A].Family == C.AssetFamily) && (AssetGroup[A].Category == "Appearance") && WardrobeGroupAccessible(C, AssetGroup[A]) && AssetGroup[A].AllowNone && (InventoryGet(C, AssetGroup[A].Name) != null))
					if ((MouseY >= 145 + (A - CharacterAppearanceOffset) * 95) && (MouseY <= 210 + (A - CharacterAppearanceOffset) * 95)) {
						InventoryRemove(C, AssetGroup[A].Name, false);
						CharacterRefresh(C, false);
					}
		if ((MouseX >= 1300) && (MouseX < 1700) && (MouseY >= 145) && (MouseY < 975)) {
			C.FocusGroup = null;
			for (let A = CharacterAppearanceOffset; A < AssetGroup.length && A < CharacterAppearanceOffset + CharacterAppearanceNumPerPage; A++)
				if ((AssetGroup[A].Family == C.AssetFamily) && (AssetGroup[A].Category == "Appearance") && WardrobeGroupAccessible(C, AssetGroup[A]))
					if (MouseYIn(145 + (A - CharacterAppearanceOffset) * 95, 65))
						if (!AssetGroup[A].AllowNone && !AppearancePreviewUseCharacter(AssetGroup[A])) {
							CharacterAppearanceNextItem(C, AssetGroup[A].Name, MouseX > 1500);
						}
						else {
							if (MouseXIn(1300, 65)) CharacterAppearanceNextItem(C, AssetGroup[A].Name, false);
							else if (MouseXIn(1635, 65)) CharacterAppearanceNextItem(C, AssetGroup[A].Name, true);
							else {										C.FocusGroup = AssetGroup[A];
							DialogInventoryBuild(C, null, true);
							CharacterAppearanceCloth = InventoryGet(C, C.FocusGroup.Name);
							CharacterAppearanceMode = "Cloth";
								return;
							}
						}
		}
		if ((MouseX >= 1725) && (MouseX < 1885) && (MouseY >= 145) && (MouseY < 975))
			for (let A = CharacterAppearanceOffset; A < AssetGroup.length && A < CharacterAppearanceOffset + CharacterAppearanceNumPerPage; A++) {
				const Item = InventoryGet(C, AssetGroup[A].Name);
				if ((AssetGroup[A].Family == C.AssetFamily) &&
					(AssetGroup[A].Category == "Appearance") &&
					WardrobeGroupAccessible(C, AssetGroup[A]) &&
					Item &&
					(Item.Asset.ColorableLayerCount > 0 || Item.Asset.Group.ColorSchema.length > 1) &&
					!InventoryBlockedOrLimited(C, Item))
					if ((MouseY >= 145 + (A - CharacterAppearanceOffset) * 95) && (MouseY <= 210 + (A - CharacterAppearanceOffset) * 95))
					CharacterAppearanceNextColor(C, AssetGroup[A].Name);
			}
		if (MouseIn(1910, 145, 65, 830))
			for (let A = CharacterAppearanceOffset; A < AssetGroup.length && A < CharacterAppearanceOffset + CharacterAppearanceNumPerPage; A++) {
				const Item = InventoryGet(C, AssetGroup[A].Name);
				if ((AssetGroup[A].Family == C.AssetFamily) &&
					(AssetGroup[A].Category == "Appearance") &&
					WardrobeGroupAccessible(C, AssetGroup[A]) &&
					AssetGroup[A].AllowColorize &&
					Item &&
					Item.Asset.ColorableLayerCount > 0 &&
					!InventoryBlockedOrLimited(C, Item))
					if ((MouseY >= 145 + (A - CharacterAppearanceOffset) * 95) && (MouseY <= 210 + (A - CharacterAppearanceOffset) * 95)) {
						AppearanceItemColor(C, Item, AssetGroup[A].Name, "");
					}
			}
		return;
	}
	else if (CharacterAppearanceMode == "Wardrobe") {
            if ((MouseX >= 1300) && (MouseX < 1630) && (MouseY >= 240) && (MouseY < 290)) {
		if (ServerPlayerIsInChatRoom()) {
                    var appall = new Array();
                    C.Appearance.forEach(item=>{
                        var app = new Array();
                        app.push(item.Asset.Name);
                        app.push(item.Asset.Group.Name);
                        app.push(item.Color);
                        app.push(item.Difficulty);
                        app.push(item.Craft);
                        app.push(false);
                        appall.push(app);
                            }
                    );
                    ChatRoomSendLocal(
                         "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Appearance saved.</p>\n" +
                         btoa(encodeURI(JSON.stringify(appall)))
                    );
                    DialogLeave();
		}	
            }
            if ((MouseX >= 1645) && (MouseX < 1975) && (MouseY >= 240) && (MouseY < 290)) {
                appinp = prompt('Please input the awcode (Compatible with BCG).', '');
                CharacterNaked(C);                  
                CharacterReleaseTotal(C);
                var appobj = JSON.parse(decodeURI(atob(appinp)));
                appobj.forEach(itemstr=>{
                    InventoryWear(C, itemstr[0], itemstr[1], itemstr[2], itemstr[3], -1, itemstr[4]);
                    }
                 );                
                ChatRoomCharacterUpdate(C);
	    }
	    if ((MouseX >= 1300) && (MouseX < 1800) && (MouseY >= 430) && (MouseY < 970))
	        for (let W = CharacterAppearanceWardrobeOffset; W < Player.Wardrobe.length && W < CharacterAppearanceWardrobeOffset + 6; W++)
	            if ((MouseY >= 430 + (W - CharacterAppearanceWardrobeOffset) * 95) && (MouseY <= 495 + (W - CharacterAppearanceWardrobeOffset) * 95)) {
		        WardrobeFastLoad(C, W, false);
		        ElementValue("InputWardrobeName", Player.WardrobeCharacterNames[W]);
		    }
	    if ((MouseX >= 1820) && (MouseX < 1975) && (MouseY >= 430) && (MouseY < 970))
		for (let W = CharacterAppearanceWardrobeOffset; W < Player.Wardrobe.length && W < CharacterAppearanceWardrobeOffset + 6; W++)
		    if ((MouseY >= 430 + (W - CharacterAppearanceWardrobeOffset) * 95) && (MouseY <= 495 + (W - CharacterAppearanceWardrobeOffset) * 95)) {
		        WardrobeFastSave(C, W);
			var LS = /^[a-zA-Z0-9 ]+$/;
			var Name = ElementValue("InputWardrobeName").trim();
			if (Name.match(LS) || Name.length == 0) {
			    WardrobeSetCharacterName(W, Name);
			    CharacterAppearanceWardrobeText = TextGet("WardrobeNameInfo");
			} else {
			    CharacterAppearanceWardrobeText = TextGet("WardrobeNameError");
			}
		   }
		return;
	}
	else if (CharacterAppearanceMode == "Cloth") {
		var X = 1250;
		var Y = 125;
		for (let I = DialogInventoryOffset; (I < DialogInventory.length) && (I < DialogInventoryOffset + 9); I++) {
			if ((MouseX >= X) && (MouseX < X + 225) && (MouseY >= Y) && (MouseY < Y + 275)) {
				var Item = DialogInventory[I];
				const CurrentItem = InventoryGet(C, C.FocusGroup.Name);
				const worn = (CurrentItem && (CurrentItem.Asset.Name == Item.Asset.Name));
				if (DialogItemPermissionMode) {
				DialogInventoryTogglePermission(Item, worn);
				} else {
					if (InventoryBlockedOrLimited(C, Item)) return;
					if (InventoryAllow(C, Item.Asset)) {
						if (worn && CurrentItem.Asset.Extended) {
						DialogExtendItem(CurrentItem);
						} else {
						CharacterAppearanceSetItem(C, C.FocusGroup.Name, DialogInventory[I].Asset);
							DialogInventoryBuild(C, DialogInventoryOffset);
							AppearanceMenuBuild(C);
						}
					} else {
					CharacterAppearanceHeaderTextTime = DialogTextDefaultTimer;
						CharacterAppearanceHeaderText = DialogText;
					}
				}
				return;
			}
			X = X + 250;
			if (X > 1800) {
				X = 1250;
				Y = Y + 300;
			}
		}
	}
}

function CraftingItemListBuild() {
	let Search = ElementValue("InputSearch");
	if (Search == null) Search = "";
	Search = Search.toUpperCase().trim();
	CraftingItemList = [];
	for (let A of Asset) {
		if (!InventoryAvailable(Player, A.Name, A.Group.Name)) continue;
		if (!A.Group.Name.startsWith("Item")) continue;
		let Match = true;
		const desc = A.DynamicDescription(Player).toUpperCase().trim();
		if (desc.indexOf(Search) < 0) Match = false;
		if (Match)
			for (let E of CraftingItemList)
				if (E.CraftGroup === A.Name || E.Name === A.CraftGroup)
					Match = false;
		if (Match) CraftingItemList.push(A);
	}
	CraftingItemList.sort((a,b) => (a.Description > b.Description) ? 1 : (b.Description > a.Description) ? -1 : 0);
	if (CraftingOffset >= CraftingItemList.length) CraftingOffset = 0;
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
    if ((Nick == "") || !Regex.test(Nick)) Nick = C.Name;
    return AsylumGGTSCharacterName(C, Nick);
}

function TitleExit() {
    let Regex = /[/\p{L}\p{N}\p{Z}'-]/gu;
    let Nick = ElementValue("InputNickname");
    if (Player.Nickname == '') { 
        var tmpname = Player.Name;
    } else {
        var tmpname = Player.Nickname;
    }
    if (Nick == null) Nick = "";
    Nick = Nick.trim().substring(0, 20);
    if (Nick.length == 0) {
	if (Player.Name != tmpname) {  
	    if (ServerPlayerIsInChatRoom()) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " is now known as " + Player.Name + "."
                    }]
                });
	    }	
	}	
        Player.Nickname = Player.Name;
        ServerAccountUpdate.QueueData({
            Nickname: Nick
        });
    } else if ((Nick.length <= 20) && (Nick.match(Regex))) {
	if (ServerPlayerIsInChatRoom()) {    
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
         }
         Player.Nickname = Nick;
         ServerAccountUpdate.QueueData({
            Nickname: Nick
         });
    }
    TitleSet(TitleSelectedTitle);
    ElementRemove("InputNickname");
    CommonSetScreen("Character", "InformationSheet");
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
		ServerSend("ChatRoomChat", {
                        Content: "Beep",
                        Type: "Action",
                        Dictionary: [{
                            Tag: "Beep",
                            Text: ("A link for more fun: " + link + " ")
                        }]
                });
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
		var lk = content[0];                        
                ServerSend("ChatRoomChat", {
                        Content: "Beep",
                        Type: "Action",
                        Dictionary: [{
                            Tag: "Beep",
                            Text: ("A link for more fun: " + lk + " ")
                        }]
                }); 
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
