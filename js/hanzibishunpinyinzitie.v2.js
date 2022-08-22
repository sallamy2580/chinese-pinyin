const preview = Util.preview;
Helper._Key = 'hanzibishunpinyinzitie.v2';
Helper._Storage = {
    originText: '',
    words: '字帖大师生成演示'.split(""),
    wordsCache: null,
    _wordsCache: null,
    fillBlankTimes: 0,
    fillPinyinTimes: 4,
    fillHanziTimes: 4,
    unit: "px",
    pageWidth: 210,
    pageHeight: 296.3,
    wordsPerPage: 8,
    columnsPerLine: 12,
    boxSize: 57,
    boxHeight: 28.5,
    lineIndex: 0,
    fillHanziLines: 0,
    fillEmptyLines: 0,
    pinyinShow: true,
    pinyinFont: 'pinyin',
    pinyinPosition: 'center',
    pinyinSize: 20,
    longPinyinSize: 16,
    pinyinLineHeight: 24,
    longPinyinLineHeight: 27,
    pinyinLetterSpacing: -1,
    pinyinEffectLines: [0, 3],
    pinyinEffectColumns: [0, 39],
    pinyinBoxId: '1',
    pinyinBoxCustomImage: '',
    pinyinBoxUploadImages: [],
    pinyinBoxOutlineSize: 1,
    pinyinBoxOutlineColor: '#00b050',
    pinyinBoxOutlineStyle: 'solid',
    pinyinBoxInlineSize: 1,
    pinyinBoxInlineColor: '#00b050',
    pinyinBoxInlineOpacity: 100,
    pinyinBoxInlineDashArray: [3, 4],
    pinyinBoxArray: new Array(),
    pinyinBoxParams: new Array(),
    firstPinyinColor: '#980F29',
    otherPinyinColor: '#FFB8B8',
    hanziFont: Util.defaultChineseFont,
    hanziPosition: 'center',
    hanziSize: 42,
    hanziLineHeight: 57,
    hanziPaddingLeft: 0,
    firstHanziColor: '#980F29',
    otherHanziColor: '#FFB8B8',
    effectLines: [0, 25],
    effectColumns: [0, 39],
    boxId: '11',
    boxCustomImage: '',
    boxUploadImages: [],
    boxOutlineSize: 1,
    boxOutlineColor: '#00b050',
    boxOutlineStyle: 'solid',
    boxInlineSize: 1,
    boxInlineColor: '#00b050',
    boxInlineOpacity: 100,
    boxInlineDashArray: [3, 4],
    boxArray: new Array(),
    topPinyinShow: true,
    topBushouShow: true,
    topBishuShow: true,
    topZuciShow: false,
    topBishunShow: true,
    topFont: Util.defaultChineseFont,
    topLeftWidth: 224,
    topRightWidth: 650,
    topSize: 14,
    topLeftBackgroundColor: '#D6F5E7',
    topAnswerbackgroundColor: '#ffffff',
    
    topAnswerColor: '#000000',
    topStrokeOrderBackgroundColor: '#D6F5E7',
    topStrokeOrderSize: 0.02,
    topOtherStrokeColor: '#FFB8B8',
    topCurrentStrokeColor: '#980F29',
    topOutlineSize: 1,
    topOutlineColor: '#00b050',
    topOutlineStyle: 'solid',
    backgroundPic: '',
    backgroundColor: '#ffffff',
    positionLeftRight: 50,
    positionHeaderUpDown: 12,
    positionContentUpDown: 100,
    positionContentLeftRight: 0,
    positionFooterUpDown: 12,
    coverShow: false,
    coverPic: '',
    coverTitle: '',
    coverTitleFont: Util.defaultChineseFont,
    coverTitleSize: 50,
    coverTitleColor: '#000000',
    coverTitlePaddingLeft: 161,
    coverTitleTop:170,
    coverFont: Util.defaultChineseFont,
    coverSize: 25,
    coverColor: '#000000',
    coverPaddingLeft: 189,
    coverContentUpDown: 120,
    coverLineHeight: 27,
    coverLineStyle: 'solid',
    coverLineSize: 1,
    coverLineColor: '#000000',
    coverCustom: false,
    coverCustomContent: '',
    coverCustomName: '',
    coverCustomClass: '',
    coverCustomNo: '',
    headerWidth: 686,
    headerFont: Util.defaultChineseFont,
    headerSize: 14,
    headerColor: '#000000',
    headerPosition: 'left',//center, right,
    headerLeftContent: '',
    headerLineStyle: 'solid',
    headerLineSize: 1,
    headerLineColor: '#00b050',
    headerCustomRight: false,
    headerCustomRightContent: '',
    headerName: '',
    headerClass: '',
    headerNo: '',
    footerWidth: 686,
    footerFont: Util.defaultChineseFont,
    footerSize: 14,
    footerColor: '#000000',
    footerPosition: 'left',//center, right,
    footerLeftContent: '',
    footerLineStyle: 'solid',
    footerLineSize: 1,
    footerLineColor: '#00b050',
    footerShowPage: true,
    footerShowTotalPage: true,
    footerStartPage: 1,
    footerTotalPage: 0,
    autoprint: false,
    silent: false,
    printer: Util.defaultPrinter,
    landscape: false,
    printCopies: 1,
    scaleFactor: 100,
    mediaSize: {name: 'A4',value: 'ISOA4',width: 210,height: 297},
    mediaWidth: '210',
    mediaHeight: '297',
    hide: true,
    inited: false,
    synModifyPage: false,

    //格子内线参数
    axisX: 40,
    axisY: 40,
    slantDown: -2,
    slantUp: 80,
    rectangleX: 20,
    rectangleY: 10,
    rectangleWidth: 58,
    rectangleHeight: 68,
    squareXY: 20,
    squareWidth: 60,
};

Helper.initRender = function(that){
    Util.updatePinyinBoxArray(that.Storage);
    Util.updateBoxArray(that.Storage);
    that.createPage(that.Storage.words);
};

Helper.init();
Helper.initBoard = function(){
    Input.init({
        legendTxt: "字帖内容", 
        textareaHolder: "请输入要生成字帖的词语，用空格分隔", 
        defaultValue: "字帖大师生成演示", 
        fillBlankTimesTxt: "空几格描",
        fillPinyinPerLineTxt: "填充拼音", 
        fillWordsPerLineTxt: "填充汉字", 
        defaultOptions: Helper.Storage
    }, 
    { 
        createPage: function(that){
            var text = that.replace(/ /g,"").replace(/\s+/g,"");
            // var reg = new RegExp('^[\u4E00-\u9FFF]+$');
            // if (reg.test(text)) {
            //     Helper.Storage.originText = text;
            //     Helper.Storage.words = text.split("");
            //     Helper.createPage(Helper.Storage.words);
            // }
            Helper.Storage.originText = text;
            Helper.Storage.words = text.split("");
            Helper.createPage(Helper.Storage.words);
        },
        textareaCallback: function (that) { 
            var text = $(that).val().replace(/ /g,"").replace(/\s+/g,"");
            // var reg = new RegExp('^[\u4E00-\u9FFF]+$');
            // if (reg.test(text)) {
            //     Helper.Storage.originText = text;
            //     Helper.Storage.words = text.split("");
            //     Helper.createPage(Helper.Storage.words);
            // }
            Helper.Storage.originText = text;
            Helper.Storage.words = text.split("");
            Helper.createPage(Helper.Storage.words);
        }, 
        fillBlankCallback: function (event, ui){
            Helper.Storage.fillBlankTimes = ui.value;
            Helper.createPage(Helper.Storage.words);
        },
        fillPinyinCallback: function (event, ui) { 
            Helper.Storage.fillPinyinTimes = ui.value;
            Helper.createPage(Helper.Storage.words);
        }, 
        fillWordCallback: function (event, ui) { 
            Helper.Storage.fillHanziTimes = ui.value;
            Helper.createPage(Helper.Storage.words);
        }
    });

    Layout.init({
        legendTxt: "布局设置", 
        pageWidthTxt: "页面宽度", 
        pageHeightTxt: "页面高度", 
        wordsPerPageTxt: "每页字数", 
        bosesPerLineTxt: "每行格数", 
        boxSizeTxt: "格子大小", 
        boxHeightTxt: "音格高度", 
        fillOtherLineTxt: "增加描行", 
        fillEmptyLineTxt: "增加空行", 
        leftRightTxt: "左右调整", 
        headerWidthTxt: "页眉宽度", 
        footerWidthTxt: "页脚宽度", 
        headerUpDownTxt: "页眉位置", 
        contentUpDownTxt: "内容位置", 
        contentLeftRightTxt: "内容左右", 
        footerUpDownTxt: "页脚位置", 
        defaultOptions: Helper.Storage
    }, 
    { 
        pageWidthCallback: function(event, ui){
            Helper.Storage.pageWidth = ui.value/10;
            Helper.createPage(Helper.Storage.words);
        },
        pageHeightCallback: function(event, ui){
            Helper.Storage.pageHeight = ui.value/10;
            Helper.createPage(Helper.Storage.words);
        },
        wordsPerPageCallback: function (event, ui) { 
            Helper.Storage.wordsPerPage = ui.value;
            Helper.createPage(Helper.Storage.words);
        }, 
        bosesPerLineCallback: function (event, ui) { 
            Helper.Storage.columnsPerLine = ui.value;
            Util.updateColumns('.pinyin', Helper.Storage.columnsPerLine)
            Util.updateColumns('.word', Helper.Storage.columnsPerLine);
        }, 
        boxSizeCallback: function (event, ui) { 
            Helper.Storage.boxSize = ui.value;
            Util.updateBoxSize('.pinyin', Helper.Storage.boxSize, Helper.Storage.boxSize/2);
            Util.updateBoxSize('.word', Helper.Storage.boxSize, Helper.Storage.boxSize);
        }, 
        boxHeightCallback: function (event, ui) { 
            Helper.Storage.boxHeight = ui.value;
            Util.updateBoxSize('.pinyin', Helper.Storage.boxSize, Helper.Storage.boxHeight);
            Util.updateBoxSize('.word', Helper.Storage.boxSize, Helper.Storage.boxSize);
        },
        fillOtherLineCallback: function (event, ui) { 
            Helper.Storage.fillHanziLines = ui.value;
            Helper.createPage(Helper.Storage.words);
        }, 
        fillEmptyLineCallback: function (event, ui) { 
            Helper.Storage.fillEmptyLines = ui.value;
            Helper.createPage(Helper.Storage.words);
        },
        leftRightCallback: function(event, ui){
            Helper.Storage.positionLeftRight = ui.value;
            Helper.createPage(Helper.Storage.words);
        },
        headerWidthCallback: function(event, ui){
            Helper.Storage.headerWidth = ui.value;
            Helper.createPage(Helper.Storage.words);
        },
        footerWidthCallback: function(event, ui){
            Helper.Storage.footerWidth = ui.value;
            Helper.createPage(Helper.Storage.words);
        },
        headerUpDownCallback: function(event, ui){
            Helper.Storage.positionHeaderUpDown = ui.value/10;
            Helper.createPage(Helper.Storage.words);
        },
        contentUpDownCallback: function(event, ui){
            Helper.Storage.positionContentUpDown = ui.value;
            Helper.createPage(Helper.Storage.words);
        },
        contentLeftRightCallback: function(event, ui){
            Helper.Storage.positionContentLeftRight = ui.value;
            Helper.createPage(Helper.Storage.words);
        },
        footerUpDownCallback: function(event, ui){
            Helper.Storage.positionFooterUpDown = ui.value/10;
            Helper.createPage(Helper.Storage.words);
        }
    });

    Pinyin.init({
        legendTxt: "拼音设置", 
        buttons: [
            { 
                id: "show-pinyin-line", 
                label: "显示拼音", 
                checked: Helper.Storage.pinyinShow, 
                name: "show-pinyin-line",
                // value: "show",
                callback: function (that) { 
                    Helper.Storage.pinyinShow = $(that).is(":checked");
                    Helper.createPage(Helper.Storage.words);
                } 
            },
            { 
                id: "show-multi-pinyin", 
                label: "只显示多音字", 
                name: "show-multi-pinyin",
                value: "hide",
                callback: function (that) { 
                    Util.hide($(that).is(":checked"));
                } 
            }
        ], 
        aligns: [
            {
                id: "show-align-left",
                label: "居左",
                checked: Helper.Storage.pinyinPosition === "left",
                name: "pinyin-setting-module-show-align",
                value: "left",
                callback: function (that) {
                    Helper.Storage.pinyinPosition = $(that).val()
                    Helper.createPage(Helper.Storage.words);
                }
            },
            {
                id: "show-align-center",
                label: "居中",
                checked: Helper.Storage.pinyinPosition === "center",
                name: "pinyin-setting-module-show-align",
                value: "center",
                callback: function (that) {
                    Helper.Storage.pinyinPosition = $(that).val()
                    Helper.createPage(Helper.Storage.words);
                }
            },
            {
                id: "show-align-right",
                label: "居右",
                checked: Helper.Storage.pinyinPosition === "right",
                name: "pinyin-setting-module-show-align",
                value: "right",
                callback: function (that) {
                    Helper.Storage.pinyinPosition = $(that).val()
                    Helper.createPage(Helper.Storage.words);
                }
            }
        ],
        pinyinSizeTxt: "拼音大小", 
        longPinyinSizeTxt: "长音大小", 
        lineHeightTxt: "拼音位置",  
        longLineHeightTxt: "长音位置", 
        letterSpacingTxt: "拼音间距", 
        firstColorTxt: "首音颜色", 
        otherColorTxt: "描音颜色", 
        defaultOptions: Helper.Storage
    }, 
    { 
        pinyinFontCallback: function (that) { 
            Helper.Storage.pinyinFont = $(that).attr("data-url");;
            Helper.createPage(Helper.Storage.words);
        }, 
        pinyinFontSizeCallback: function (event, ui) { 
            Helper.Storage.pinyinSize = ui.value;
            Helper.createPage(Helper.Storage.words);
        },
        longPinyinFontSizeCallback: function (event, ui) { 
            Helper.Storage.longPinyinSize = ui.value;
            Helper.createPage(Helper.Storage.words);
        },
        lineHeightCallback: function (event, ui) { 
            Helper.Storage.pinyinLineHeight = ui.value;
            Helper.createPage(Helper.Storage.words);
        },
        longLineHeightCallback: function (event, ui) { 
            Helper.Storage.longPinyinLineHeight = ui.value;
            Helper.createPage(Helper.Storage.words);
        },
        letterSpacingCallback: function (event, ui) { 
            Helper.Storage.pinyinLetterSpacing = ui.value;
            Helper.createPage(Helper.Storage.words);
        },
        pinyinFirstPinyinColorCallback: function (that) { 
            Helper.Storage.firstPinyinColor = $(that).val();
            Helper.createPage(Helper.Storage.words);
        }, 
        pinyinOtherPinyinColorCallback: function (that) { 
            Helper.Storage.otherPinyinColor = $(that).attr("data-rgba");
            Helper.createPage(Helper.Storage.words);
        } 
    });

    PinyinBox.init({
        legendTxt: "音格设置", 
        effectLineTxt: "改哪几线", 
        effectBoxTxt: "改哪几列", 
        boxUploadTxt: "上传格子", 
        tipsTxt: "支持无外框格子", 
        boxOutlineStyleTxt: "外框风格", 
        boxOutlineSizeTxt: "外框粗细", 
        boxOutlineColorTxt: "外框颜色", 
        boxInnerlineSizeTxt: "内框粗细", 
        boxInnerlineColorTxt: "内框颜色", 
        boxInnerlineOpacityTxt: "透明程度", 
        boxInnerlineDasharrayTxt: "虚实间隙", 
        defaultOptions: Helper.Storage
    }, 
    { 
        effectLinesCallback: function (event, ui) { 
            Helper.Storage.pinyinEffectLines = ui.values;
        }, 
        effectBosesCallback: function (event, ui) { 
            Helper.Storage.pinyinEffectColumns = ui.values;
        }, 
        boxCallback: function (that) { 
            Helper.Storage.pinyinBoxCustomImage = '';
            Helper.Storage.pinyinBoxId = $(that).attr("data-url");
            Util.updatePinyinBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        },
        boxUploadCallback: function (that){
            let ul = $("li[data-url='1']").parent();
            console.log(ul)
            let files = $(that)[0].files;
            let file = files[0];
            let reader = new FileReader();
            reader.onload = function(e) {
                let data = e.target.result;
                Helper.Storage.pinyinBoxUploadImages.push(data);
                let customBoxLi = $(`<li data-url="${data}" title="自定义格子" style="width:58px;height: 35px;border:solid 1px #00b050;"><img alt="" style="width:50px;height:15px" src="${data}"></li>`);
                customBoxLi.click(function(){
                    ul.find('li').removeClass("selected");
                    $(this).addClass("selected");
                    Helper.Storage.pinyinBoxCustomImage = data;
                    Util.updatePinyinBoxArray(Helper.Storage);
                    Helper.createPage(Helper.Storage.words);
                });
                customBoxLi.appendTo(ul);
            };
            reader.readAsDataURL(file);
        },
        boxOutlineSizeCallback: function (event, ui) { 
            Helper.Storage.pinyinBoxOutlineSize = ui.value;
            Util.updatePinyinBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        }, 
        boxOutlineColorCallback: function (that) { 
            Helper.Storage.pinyinBoxOutlineColor = $(that).val();
            Util.updatePinyinBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        }, 
        borderStyleCallback: function (that) { 
            Helper.Storage.pinyinBoxOutlineStyle = $(that).attr("data-url");
            Util.updatePinyinBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        }, 
        boxInnerlineSizeCallback: function (event, ui) { 
            Helper.Storage.pinyinBoxInlineSize = ui.value;
            Util.updatePinyinBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        }, 
        boxInnerlineColorCallback: function (that) { 
            Helper.Storage.pinyinBoxInlineColor = $(that).val();
            Util.updatePinyinBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        }, 
        boxInnerlineOpacityCallback: function (event, ui) { 
            Helper.Storage.pinyinBoxInlineOpacity = ui.value;
            Util.updatePinyinBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        }, 
        boxInnerlineDasharrayCallback: function (event, ui) { 
            Helper.Storage.pinyinBoxInlineDashArray = ui.values;
            Util.updatePinyinBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        } 
    });

    Font.init({
        legendTxt: "汉字设置", 
        buttons: [
            {
                id: "show-align-left",
                label: "居左",
                checked: Helper.Storage.hanziPosition === "left",
                name: "word-font-module-show-align",
                value: "left",
                callback: function (that) {
                    Helper.Storage.hanziPosition = $(that).val()
                    Helper.createPage(Helper.Storage.words);
                }
            },
            {
                id: "show-align-center",
                label: "居中",
                checked: Helper.Storage.hanziPosition === "center",
                name: "word-font-module-show-align",
                value: "center",
                callback: function (that) {
                    Helper.Storage.hanziPosition = $(that).val()
                    Helper.createPage(Helper.Storage.words);
                }
            },
            {
                id: "show-align-right",
                label: "居右",
                checked: Helper.Storage.hanziPosition === "right",
                name: "word-font-module-show-align",
                value: "right",
                callback: function (that) {
                    Helper.Storage.hanziPosition = $(that).val()
                    Helper.createPage(Helper.Storage.words);
                }
            }
        ], 
        sizeTxt: "字体大小", 
        lineHeightTxt: "文字位置", 
        hanziPaddingLeftTxt: "文字左右", 
        firstColorTxt: "首字颜色", 
        otherColorTxt: "描字颜色", 
        defaultOptions: Helper.Storage
    }, 
    { 
        wordFontCallback: function (that) { 
            Helper.Storage.hanziFont = $(that).attr("data-url");
            Helper.createPage(Helper.Storage.words);
        }, 
        wordFontSizeCallback: function (event, ui) { 
            Helper.Storage.hanziSize = ui.value;
            Helper.createPage(Helper.Storage.words);
        },
        lineHeightCallback: function (event, ui) {
            Helper.Storage.hanziLineHeight = ui.value;
            Helper.createPage(Helper.Storage.words);
        },
        hanziPaddingLeftCallback: function(event, ui){
            Helper.Storage.hanziPaddingLeft = ui.value;
            Helper.createPage(Helper.Storage.words);
        },
        wordFirstWordColorCallback: function (that) { 
            Helper.Storage.firstHanziColor = $(that).val();
            Helper.createPage(Helper.Storage.words);
        }, 
        wordOtherWordColorCallback: function (that) { 
            Helper.Storage.otherHanziColor = $(that).attr("data-rgba");
            Helper.createPage(Helper.Storage.words);
        }
    });

    Box.init({
        legendTxt: "汉格设置", 
        effectLineTxt: "改哪几行", 
        effectBoxTxt: "改哪几列", 
        boxUploadTxt: "上传格子", 
        tipsTxt: "支持无外框格子", 
        boxOutlineStyleTxt: "外框风格", 
        boxOutlineSizeTxt: "外框粗细", 
        boxOutlineColorTxt: "外框颜色", 
        axisXTxt: "横线位置",
        axisYTxt: "竖线位置",
        slantUpTxt: "上斜位置",
        slantDownTxt: "下斜位置",
        rectangleXTxt: "长方X点",
        rectangleYTxt: "长方Y点",
        rectangleWidthTxt: "长方形宽",
        rectangleHeightTxt: "长方形高",
        squareXYTxt: "正方XY点",
        squareWidthTxt: "正方形宽",
        boxInnerlineSizeTxt: "内框粗细", 
        boxInnerlineColorTxt: "内框颜色", 
        boxInnerlineOpacityTxt: "透明程度", 
        boxInnerlineDasharrayTxt: "虚实间隙", 
        defaultOptions: Helper.Storage
    }, 
    { 
        effectLinesCallback: function (event, ui) { 
            Helper.Storage.effectLines = ui.values;
        }, 
        effectBosesCallback: function (event, ui) { 
            Helper.Storage.effectColumns = ui.values;
        }, 
        boxCallback: function (that) { 
            Helper.Storage.boxCustomImage = '';
            Helper.Storage.boxId = $(that).attr("data-url");
            Util.updateBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        },
        boxUploadCallback: function (that){
            let ul = $("li[data-url='11']").parent();
            let files = $(that)[0].files;
            let file = files[0];
            let reader = new FileReader();
            reader.onload = function(e) {
                let data = e.target.result;
                Helper.Storage.boxUploadImages.push(data);
                let customBoxLi = $(`<li data-url="${data}" title="自定义格子" style="width:58px;height: 50px;padding-top: 8px;border:solid 1px #00b050;"><img alt="" style="width:50px;height:45px" src="${data}"></li>`);
                customBoxLi.click(function(){
                    ul.find('li').removeClass("selected");
                    $(this).addClass("selected");
                    Helper.Storage.boxCustomImage = data;
                    Util.updateBoxArray(Helper.Storage);
                    Helper.createPage(Helper.Storage.words);
                });
                customBoxLi.appendTo(ul);
            };
            reader.readAsDataURL(file);
        },
        boxOutlineSizeCallback: function (event, ui) { 
            Helper.Storage.boxOutlineSize = ui.value;
            Util.updateBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        }, 
        boxOutlineColorCallback: function (that) { 
            Helper.Storage.boxOutlineColor = $(that).val();
            Util.updateBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        }, 
        borderStyleCallback: function (that) { 
            Helper.Storage.boxOutlineStyle = $(that).attr("data-url");
            Util.updateBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        }, 
        axisXCallback: function(event, ui){
            Helper.Storage.axisX = ui.value;
            Util.updateSvgMap(Helper.Storage);
            Util.updateBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        },
        axisYCallback: function(event, ui){
            Helper.Storage.axisY = ui.value;
            Util.updateSvgMap(Helper.Storage);
            Util.updateBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        },
        slantUpCallback: function(event, ui){
            Helper.Storage.slantUp = ui.value;
            Util.updateSvgMap(Helper.Storage);
            Util.updateBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        },
        slantDownCallback: function(event, ui){
            Helper.Storage.slantDown = ui.value;
            Util.updateSvgMap(Helper.Storage);
            Util.updateBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        },
        rectangleXCallback: function(event, ui){
            Helper.Storage.rectangleX = ui.value;
            Util.updateSvgMap(Helper.Storage);
            Util.updateBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        },
        rectangleYCallback: function(event, ui){
            Helper.Storage.rectangleY = ui.value;
            Util.updateSvgMap(Helper.Storage);
            Util.updateBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        },
        rectangleWidthCallback: function(event, ui){
            Helper.Storage.rectangleWidth = ui.value;
            Util.updateSvgMap(Helper.Storage);
            Util.updateBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        },
        rectangleHeightCallback: function(event, ui){
            Helper.Storage.rectangleHeight = ui.value;
            Util.updateSvgMap(Helper.Storage);
            Util.updateBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        },
        squareXYCallback: function(event, ui){
            Helper.Storage.squareXY = ui.value;
            Util.updateSvgMap(Helper.Storage);
            Util.updateBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        },
        squareWidthCallback: function(event, ui){
            Helper.Storage.squareWidth = ui.value;
            Util.updateSvgMap(Helper.Storage);
            Util.updateBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        },
        boxInnerlineSizeCallback: function (event, ui) { 
            Helper.Storage.boxInlineSize = ui.value;
            Util.updateBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        }, 
        boxInnerlineColorCallback: function (that) { 
            Helper.Storage.boxInlineColor = $(that).val();
            Util.updateBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        }, 
        boxInnerlineOpacityCallback: function (event, ui) { 
            Helper.Storage.boxInlineOpacity = ui.value;
            Util.updateBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        }, 
        boxInnerlineDasharrayCallback: function (event, ui) { 
            Helper.Storage.boxInlineDashArray = ui.values;
            Util.updateBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        } 
    });

    Top.init({
        legendTxt: "行头设置", 
        buttons: [
            { 
                id: "show-pinyin", 
                label: "拼音", 
                checked: Helper.Storage.topPinyinShow, 
                callback: function (that) {
                    Helper.Storage.topPinyinShow = $(that).is(":checked");
                    Helper.createPage(Helper.Storage.words);
                }
            },
            { 
                id: "show-bushou", 
                label: "部首", 
                checked: Helper.Storage.topBushouShow, 
                callback: function (that) {
                    Helper.Storage.topBushouShow = $(that).is(":checked");
                    Helper.createPage(Helper.Storage.words);
                }
            },
            { 
                id: "show-bishu", 
                label: "笔数", 
                checked: Helper.Storage.topBishuShow, 
                callback: function (that) {
                    Helper.Storage.topBishuShow = $(that).is(":checked");
                    Helper.createPage(Helper.Storage.words);
                }
            },
            { 
                id: "show-zuci", 
                label: "组词", 
                checked: Helper.Storage.topZuciShow, 
                callback: function (that) {
                    Helper.Storage.topZuciShow = $(that).is(":checked");
                    Helper.createPage(Helper.Storage.words);
                }
            },
            { 
                id: "show-bishun", 
                label: "笔顺", 
                checked: Helper.Storage.topBishunShow, 
                callback: function (that) {
                    Helper.Storage.topBishunShow = $(that).is(":checked");
                    Helper.createPage(Helper.Storage.words);
                }
            }
        ], 
        topLeftWidthTxt: "左侧宽度",
        topLeftFontSizeTxt: "文字大小", 
        topLeftBackgroundColorTxt: "左侧背景", 
        topAnswerBackgroundColorTxt: "答案背景", 
        topAnswerColorTxt: "答案颜色", 
        topRightWidthTxt: "右侧宽度",
        strokerOrderBackgroundColorTxt: "笔顺背景", 
        strokerOrderFontSizeTxt: "笔顺大小", 
        strokerOrderColorTxt: "笔顺颜色", 
        currentStrokerOrderColorTxt: "当前笔顺", 
        topOutlineSizeTxt: "外框粗细", 
        topOutlineColorTxt: "外框颜色", 
        topOutlineStyleTxt: "外框风格", 
        defaultOptions: Helper.Storage
    }, 
    { 
        topFontCallback: function (that) { 
            Helper.Storage.topFont = $(that).attr("data-url");
            Helper.createPage(Helper.Storage.words);
        }, 
        topLeftBackgroundColorCallback: function (that) { 
            Helper.Storage.topLeftBackgroundColor = $(that).val();
            Helper.createPage(Helper.Storage.words);
        }, 
        topLeftWidthCallback: function(event, ui){
            Helper.Storage.topLeftWidth = ui.value;
            Helper.createPage(Helper.Storage.words);
        },
        topLeftFontSizeCallback: function (event, ui) { 
            Helper.Storage.topSize = ui.value;
            Helper.createPage(Helper.Storage.words);
        }, 
        topAnswerBackgroundColorCallback: function (that) { 
            Helper.Storage.topAnswerBackgroundColor = $(that).val();
            Helper.createPage(Helper.Storage.words);
        }, 
        topAnswerColorCallback: function (that) { 
            Helper.Storage.topAnswerColor = $(that).val();
            Helper.createPage(Helper.Storage.words);
        }, 
        topRightWidthCallback: function(event, ui){
            Helper.Storage.topRightWidth = ui.value;
            Helper.createPage(Helper.Storage.words);
        },
        strokerOrderBackgroundColorCallback: function (that) {
            Helper.Storage.topStrokeOrderBackgroundColor = $(that).val();
            Helper.createPage(Helper.Storage.words);
        },
        strokerOrderFontSizeCallback: function (event, ui){
            Helper.Storage.topStrokeOrderSize = (ui.value / 1000);
            Helper.createPage(Helper.Storage.words);
        },
        topStrokerOrderColorCallback: function (that) { 
            Helper.Storage.topOtherStrokeColor = $(that).val();
            Helper.createPage(Helper.Storage.words);
        }, 
        topCurrentStrokerOrderColorCallback: function (that) { 
            Helper.Storage.topCurrentStrokeColor = $(that).val();
            Helper.createPage(Helper.Storage.words);
        },
        outlineSizeCallback: function (event, ui){
            Helper.Storage.topOutlineSize = ui.value;
            Util.updateBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        },
        outlineColorCallback: function (that){
            Helper.Storage.topOutlineColor = $(that).val();
            Util.updateBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        },
        borderStyleCallback: function (that){
            Helper.Storage.topOutlineStyle = $(that).attr("data-url");
            Util.updateBoxArray(Helper.Storage);
            Helper.createPage(Helper.Storage.words);
        }
    });

    Util.initCommonComponents();
}