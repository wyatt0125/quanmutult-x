/*******************************

脚本名称: 勇者大人的剑——无限钻石金币
下载地址：微信小程序搜索【勇者大人的剑】
软件版本：9.9.9
脚本作者：彭于晏💞
更新时间：2023-8-16
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^http[s]?:\/\/idauth.cdwaterbear.cn\/getStorage url script-response-body https://raw.githubusercontent.com/wyatt0125/quanmutult-x/master/game/yzdrdj.js

[mitm] 

hostname = idauth.cdwaterbear.cn

*******************************/

var body = $response.body.replace(/"moneyInfo\\":\{\\"co\\":\\"\d+\\",\\"je\\":\\"\d+\\"/g,'"moneyInfo\\":\{\\"co\\":\\"999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\\",\\"je\\":\\"999999999999999999999999999999999999999\\"')
$done({ body });