/*******************************

脚本名称: 模拟商业街——无限资源
下载地址：微信小程序
软件版本：9.99.9
脚本作者：彭于晏💞
更新时间：2023-8-30
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^http[s]?:\/\/sm.helobuee.com\/request\/login url script-response-body https://raw.githubusercontent.com/wyatt0125/quanmutult-x/master/game/mnsyj.js

[mitm] 

hostname = sm.helobuee.com

*******************************/

var body = $response.body.replace(/user":".*?"/g,'user":"99999999999999,88888888,88-27-27,0,0.0000,0"')
$done({ body });