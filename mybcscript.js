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

        if (content.indexOf("/帮助") == 0) {
            if (content.endsWith("/帮助")) {
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
            }else if (content.indexOf("/外观") == 0) {
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
        }
    }
}