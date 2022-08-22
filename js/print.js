function _strMapToObj(strMap){
	let obj= Object.create(null);
	for (let[k,v] of strMap) {
		obj[k] = v;
	}
	return obj;
}
function _mapToJson(map) {
	if(map){
		try {
			return JSON.stringify(_strMapToObj(map));
		} catch (error) {
			return "";
		}
		
	}else{
		return "";
	}
}
function _objToStrMap(obj){
	let strMap = new Map();
	for (let k of Object.keys(obj)) {
		strMap.set(k,obj[k]);
	}
	return strMap;
}
function _jsonToMap(jsonStr){
	if(jsonStr){
		try {
			return _objToStrMap(JSON.parse(jsonStr));
		} catch (error) {
			return new Map();
		}
		
	}else{
		return new Map();
	}
}
function saveWord(word, cache){
	console.log(word, cache)
	if(cache.dict && cache.dict.py && cache.dict.py.length > 0){
		localStorage.setItem(word, JSON.stringify(cache));
	}
}
function save(Storage){
	// console.log('print saving....', Storage)
	Storage._wordsCache = _mapToJson(Storage.wordsCache);
	const currentKey = localStorage.getItem("currentKey");
	try {
		
		localforage.setItem(currentKey, Storage).then(function (value) {
			console.log(`saved: ${currentKey} = `, value)
		}).catch(function(err) {
			console.log('save error:', err);
		});
		localStorage.setItem(currentKey, JSON.stringify(Storage));
	} catch (error) {
		console.log('save error', error.message);
	}
}

function createSearch(that, array, em, article){
	var pinyin = $( that ).parent();
	if(em){
		pinyin = $( that ).parent().parent().next();
	}
	array.push("去百度查拼音");
	$( that ).autocomplete({ source: array, minLength: 0,select: function( event, ui ) {
		let text = ui.item.value;
		let wd = pinyin.next().attr("data-word");
		if(article||!wd){
			wd = $(that).attr("data-word");
		}
		if(!wd){
			wd = $( that ).parent().attr("data-key");
		}
		if("去百度查拼音" == text){
			event.preventDefault();
			$(this).empty();
			if(wd){
				let queryUrl = "https://www.baidu.com/s?wd=" + encodeURIComponent(wd + "字的拼音");
				let gui = require('nw.gui');
				gui.Shell.openExternal(queryUrl);
			}
		}else{
			console.log('createSearch', wd, text);
			let cacheStr = localStorage.getItem(wd);
			if(cacheStr){
				let cache = JSON.parse(cacheStr);
				if(cache){
					cache.current.py = text;
					saveWord(wd, cache);
				}
			}
			if(pinyin.hasClass("pinyin")){
				pinyin.removeClass('todo');
				pinyin.attr("data-pinyin",text);
				if(!article){
					let liIdx = 0;
					const currentKey = localStorage.getItem("currentKey");
					localforage.getItem(currentKey).then(function(value) {
						let localStore = value;
						if(!localStore){
							const localStr = localStorage.getItem(currentKey);
							if(localStr){
								localStore = JSON.parse(localStr);
							}
						}
						pinyin.find("li").each(function(){
							let originTxt = $(this).text();
							if(originTxt && !$(this).attr("data-fixed")){
								if(liIdx < localStore.fillPinyinTimes){
									liIdx++;
									$(this).text(text);
								}
							}
						});
					});
					try {
						pinyin.prev().find("em.first").text(text);
						pinyin.prev().find("em.first").removeClass('todo');
					} catch (error) {
						console.log(error)
					}
				}else{
					$(this).text(text);
				}
			}else{
				//em
			}
		}
	}});
}
function modifyPinyin(that){
	let article = false;
	var pinyin = $( that ).parent();
	if(!pinyin.attr("data-pyarr")){
		pinyin = $(that);
		article = true;
	}
	pinyin.removeClass("todo");
	var array = pinyin.attr("data-pyarr").split(",");
	createSearch(that, array, false, article)
	$( that ).autocomplete( "search", "" );
}
function modify(that, str){
	$( that ).removeClass("todo");
	var array = str.split(",");
	createSearch(that, array, true, false)
	$( that ).autocomplete( "search", "" );
}

var isPaste = false;
function emptyArray(length){
	let array = [];
	for(let i=0; i<length; i++){
		array.push("");
	}
	return array;
}
function compare(narr, oarr){
	if(oarr && oarr.length > 0){
		const length = Math.max(narr.length, oarr.length);
		for(let i=0; i<length; i++){
			if(oarr[i] && !narr[i]){
				narr[i] = oarr[i];
			}
		}
	}
	console.log(narr)
	return narr
}
function saveTolocalForage(key, textArr, rd, py){
	try {
		const currentKey = localStorage.getItem("currentKey");
		localforage.getItem(currentKey).then(function(value) {
			let localStore = value;
			if(!localStore){
				const localStr = localStorage.getItem(currentKey);
				if(localStr){
					localStore = JSON.parse(localStr);
				}
			}
			if(localStore){
				const line = 0;
				if(key){
					if(!localStore.cache){
						localStore.cache = [];
					}
					if(!localStore.cache[key]){
						localStore.cache[key] = {
							custom: [],
							store: {}
						};
					}
					const wordsCache = _jsonToMap(localStore._wordsCache).get(key);
					if(rd){
						wordsCache.current.rd = rd;
					}
					if(py){
						wordsCache.current.py = py;
						console.log(key, wordsCache);
						// let localCacheStr = localStorage.getItem(key);
						// if(localCacheStr){
						// 	let localCache = JSON.parse(localCacheStr);
						// 	if(localCache){
						// 		saveWord(key, localCache);
						// 	}
						// }
						
					}
					localStore.cache[key].store = wordsCache;
					if(textArr){
						localStore.cache[key].custom[line] = compare(textArr, localStore.cache[key].custom[line]);
					}
					
					localforage.setItem(currentKey, localStore).then(function (value) {
						console.log(`saved: ${currentKey}=`, value)
					}).catch(function(err) {
						console.log('save error:', err);
					});
				}
				isPaste = false;
			}
		}).catch(function(err) {
			console.log(err);
		});
	} catch (error) {
		console.log(error);
	}
}
function fill(that, text){
	const reg = new RegExp('^[\u4E00-\u9FFF]+$');
	if (reg.test(text.replace(/\s+/g, ""))) {
		const textArr = text.split("");
		if(textArr && textArr.length > 0){
			$(that).text(textArr[0]);
			const nexts = $(that).nextAll();
			if(nexts){
				nexts.each(function(n, next){
					if(n < textArr.length - 1){
						if(!isPaste){
							$(next).focus().select();
						}
						$(next).text(textArr[n+1]);
					}
				});
			}
		}
		const key = $(that).parent().attr("data-word");
		saveTolocalForage(key, emptyArray($(that).index()).concat(textArr), null, null);
	}
}
function inputHandle(that){//粘贴，输入
	if(!isPaste){
		const text = $(that).text();
		console.log(`come into inputHandle ${text}`)
		fill(that, text);
	}
}
function pasteHandle(that){//粘贴，输入
	const clipboard = nw.Clipboard.get();
	const text = clipboard.get("text");
	isPaste = true;
	fill(that, text);
}
function dblclickCopy(that){
	
	localforage.setItem('dblclickCopy', $(that).html()).then(function (value) {
		console.log(`saved: dblclickCopy = `, value)
	}).catch(function(err) {
		console.log('save error:', err);
	});
}
function emChange(that){
	const text = $(that).text();
	const reg = new RegExp('^[\u4E00-\u9FFF]+$');
	if (reg.test(text.replace(/\s+/g, ""))) {
		const key = $(that).parent().attr("data-key");
		const label = $(that).attr("data-label");
		if(label === "部首"){
			saveTolocalForage(key, null, text, null);
		}else{
			console.log(key, label)
		}
	}
}
function loadCache(){
	try {
		const currentKey = localStorage.getItem("currentKey");
		localforage.getItem(currentKey).then(function(value) {
			let localStore = value;
			if(!localStore){
				const localStr = localStorage.getItem(currentKey);
				if(localStr){
					localStore = JSON.parse(localStr);
				}
			}
			if(localStore){
				const uls = $("ul.word");
				if(uls){
					let line = 0;
					let key = "";
					uls.each(function(u, ul){
						const word = $(ul).attr("data-word");
						if(key !== word){
							line = 0;
							key = word;
						}else{
							line++;
						}
						if(localStore.cache && localStore.cache[key]){
							const cache = localStore.cache[key];
							if(cache){
								const custom = cache.custom;
								console.log('custom', custom)
								if(custom[line]){
									const lis = $(ul).find("li");
									if(lis){
										lis.each(function(l, li){
											if(custom[line][l]){
												$(li).text(custom[line][l]);
											}
										});
									}
								}
							}
						}
					});
				}
				const divs = $("div.basic-info");
				if(divs){
					divs.each(function(d, div){
						const key = $(div).attr("data-key");
						if(localStore.cache && localStore.cache[key]){
							const cache = localStore.cache[key];
							if(cache){
								const store = cache.store;
								if(store.current && store.current.rd){
									const ems = $(div).find("em[data-label='部首']");
									ems.each(function(e, em){
										if(store.current.rd){
											$(em).text(store.current.rd);
										}
									});
								}
							}
						}
					});
				}
			}
		}).catch(function(err) {
			console.log(err);
		});
	} catch (error) {
		console.log(error);
	}
}
$(function(){
	const printOptionKey = 'print.option.key';

	function customTop(restore){
		let top = $("div.content").css('top')
		if(top){
			let newTop = restore ? parseInt(top)+20 : parseInt(top)-20;
			$("div.content").css('top', newTop);
		}
	}
	function printOption(autoprint, silent, filePath, store){
		let option = {
			autoprint: autoprint,
			silent: silent,
			printer: "",
			pdf_path:filePath,
			headerFooterEnabled:false,
			landscape:false,
			scaleFactor:100,
			shouldPrintBackgrounds:true,
			marginsType:1
		};
		if(store){
			if(!filePath){
				option.printer = store.printer.value;
			}
			option.copies = store.printCopies;
			option.landscape = store.landscape;
			option.scaleFactor = store.scaleFactor;
			option.mediaSize = {'name': 'CUSTOM', 'width_microns': store.mediaWidth*1000, 'height_microns': store.mediaHeight*1000, 'custom_display_name':'自定义纸张'}
		}
		
		return option;
	}
	function customPrint(autoprint, silent, filePath){
		console.time('show all page')
		// customTop(false);
		// let marginLeft = $(".book").css("margin-left");
		// $(".book").css("margin-left", "");

		$("div.page:hidden").show();
		console.timeEnd('show all page')
		let currentKey = localStorage.getItem("currentKey");
		localforage.getItem(currentKey).then(function(value) {
			let localStore = value;
			if(!localStore){
				const localStr = localStorage.getItem(currentKey);
				if(localStr){
					localStore = JSON.parse(localStr);
				}
			}
			let option = printOption(autoprint, silent, filePath, localStore);
			console.log(option);
			nw.Window.get().print(option);
			// $(".book").css("margin-left", marginLeft);
			if(filePath){
				alert("PDF导出成功，文件路径：" + filePath);
			}
		});
	}

	var loadCacheButton = $(`<input id="loadCacheButton" type="button" style="width:0;height:0;visibility: hidden;"/>`);
	loadCacheButton.appendTo($("body"));
	loadCacheButton.bind("click", function(){
		loadCache();
	});

	var input = $(`<input id="filePath" type="file" style="width:0;height:0;visibility: hidden;" nwsaveas="字帖大师.pdf"/>`);
    input.appendTo($("body"));
    input.bind('input propertychange', function(){
		var filePath = $(this).val();
		if(filePath){
			if(filePath.toLocaleLowerCase().indexOf(".pdf") < 0){
				filePath += ".pdf";
			}
		
			customPrint(true, true, filePath);
			console.log("正在导出 PDF，请稍候 ...");
			$(this).val("");
		}else{
			alert("请选择文件保存位置！");
		}
	});
	var printButton = $(`<input id="printButton" type="button" style="width:0;height:0;visibility: hidden;"/>`);
	printButton.appendTo($("body"));
	printButton.bind("click", function(){
		customPrint(false, false, "");
	});
	var style = $(`<style>@media print{.page{box-shadow:none;border:none;height: 296.3mm;} .content{margin-top:5mm;} .book{overflow: hidden;margin-bottom:-6.3mm;} .page-footer{bottom:30px;}}</style>`)
	style.appendTo($("head"));

	let bottomH=50;
	let pwindow = $(window);
	pwindow.scroll(function() {
		totalheight = parseFloat(pwindow.height()) + parseFloat(pwindow.scrollTop()+bottomH);

		if ($(document).height() <= totalheight) {
			$("div.page:hidden").first().show();
		}
	});
});