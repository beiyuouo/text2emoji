var frm = document.getElementById("frm");
var res = document.getElementById("res");
var btn = document.getElementById("btn");
var viw = document.getElementById("viw");

// console.log('haha');
// console.log(frm.value)

function string2unicode(str) {
	var ret = "";
	var ustr = "";
	for (var i = 0; i < str.length; i++) {
		var code = str.charCodeAt(i);
		var code16 = code.toString(16);
		if (code < 0xf) {
			ustr = "\\u" + "000" + code16;
		} else if (code < 0xff) {
			ustr = "\\u" + "00" + code16;
		} else if (code < 0xfff) {
			ustr = "\\u" + "0" + code16;
		} else {
			ustr = "\\u" + code16;
		}
		ret += ustr;
		//ret += "\\u" + str.charCodeAt(i).toString(16);   
	} return ret;
}
function unicode2string(str) {
	// var str = "\\u6211\\u662Funicode\\u7F16\\u7801";
	str = eval("'" + str + "'");
	str = unescape(str.replace(/\u/g, "%u"));
	return str;
}


/*
var str_u = string2unicode("中国人CN"); //"\u4e2d\u56fd\u4eba\u0043\u004e"
var str_s = unicode2string(str_u); //中国人CN　
console.log(str_u);
console.log(str_s);
*/

btn.addEventListener("click", function() {
	var html = frm.value.trim().replace(/\n/g, '<br/>');
	// html = string2unicode(html);
	for(var i in mp) {
		// console.log(i)
		// console.log(html.search(i))
		var reg = new RegExp("["+string2unicode(i)+"]","g");
		// console.log(reg)
		// console.log(html.match(reg));
		// console.log(html.search(reg))
		html = html.replace(reg, mp[i]);
	}
	// console.log(html);
	// html = unicode2string(html)
	console.log(html)
	res.innerHTML = html
	viw.innerHTML = jEmoji.unifiedToHTML(html);
});


var mp = new Array();
mp['日'] = '☀';
mp['阳'] = '☀';
mp['?'] = '❔';
mp['？'] = '❔';
mp['妈'] = '🐴';
mp['吗'] = '🐴';
mp['嘛'] = '🐴';
mp['马'] = '🐴';
mp['猪'] = '🐷';
mp['猴'] = '🐵';
mp['好'] = '🐵';
mp['虫'] = '🐛';
mp['鸡'] = '🐔';
mp['像'] = '🐘';
mp['象'] = '🐘';
mp['狗'] = '🐶';
mp['牛'] = '🐮';
mp['兔'] = '🐰';
mp['吐'] = '🐰';
mp['鸽'] = '🐦';
mp['羊'] = '🐑';
mp['鬼'] = '👻';
mp['拒'] = '🙅';
mp['龟'] = '🐢';
mp['云'] = '☁';
mp['雨'] = '☔';
mp['peach'] = '🍑';
mp['舔'] = '👅';
mp['看'] = '👀';
mp['鼻'] = '👃';
mp['吻'] = '👄';
mp['瓜'] = '🍉';
mp['蛇'] = '🐍';
mp['真'] = '💉';
mp['针'] = '💉';
mp['8'] = '🎱';
mp['不'] = '🎱';
mp['啤'] = '🍺';
mp['酒'] = '🍺';
mp['批'] = '🍺';
mp['逼'] = '🍺';
mp['ok'] = '🆗';
mp['有'] = '🈶';
mp['无'] = '🈚';
mp['权'] = '👊';
mp['星'] = '⭐';
mp['行'] = '⭐';
mp['可'] = '🉑';
mp['屎'] = '💩';
mp['强'] = '💪';
mp['锁'] = '🔒';
mp['对'] = '✔';
mp['爷'] = '👴';
mp['钱'] = '💰';
// 2
mp['错'] = '✖️';
mp['得'] = '🉐';
mp['爱'] = '❤️';
mp['心'] = '❤️';
mp['鲨'] = '🦈';
mp['杀'] = '🦈';
mp['惊'] = '🐳';
mp['鲸'] = '🐳';
mp['鸡'] = '🐔';
mp['激'] = '🐔';
mp['鸭'] = '🦆';
mp['呀'] = '🦆';
mp['玫瑰'] = '🌷';
mp['火'] = '🔥';
mp['雨'] = '🌧';
mp['右'] = '➡️️';
mp['左'] = '⬅️';
mp['上'] = '⬆️';
mp['下'] = '⬇️';
mp['刀'] = '🔪';
mp['flag'] = '🏳️';


btn.click()