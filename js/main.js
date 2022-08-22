const Block = {
    components: [],
    init: function(options){
        const rndIdx = Math.floor(Math.random()*10000);
        Util.createFieldsetBlockWapper(options, [], this.components, '.moran-container', `block-${rndIdx}-setting-module`);
    }
};

const Input = {
    components: [],
    init: function(options, callbacks){
        let defaultOptions = options.defaultOptions;
        const defaultVal = defaultOptions.words instanceof Array ? defaultOptions.words && defaultOptions.words.join(options.split || " ") : defaultOptions.words;
        let defaultComponents = [
            {
                type: 'textarea',
                suffixSelector: '-textarea',
                defaultVal: defaultVal,
                initVal: options.defaultValue,
                placeHolder: options.textareaHolder,
                callback: callbacks.textareaCallback
            },
            {
                type: 'usefull',
                callback: callbacks.createPage
            },
            {
                label: options.bihuaLabel,
                type: 'bihua',
                defaultVal: defaultOptions.bihuas && defaultOptions.bihuas.join(" "),
                initVal: options.defaultBihuas,
                options: Util.createBihuaArray(defaultOptions.bihuaPaths),
                callback: callbacks.selectBihuaCallback
            },
            {
                label: options.bushouLabel,
                type: 'bushou',
                defaultVal: defaultOptions.bushous && defaultOptions.bushous.join(" "),
                initVal: options.defaultBushous,
                options: Util.createBushouArray(defaultOptions.pianPangBushous),
                callback: callbacks.selectBushouCallback
            },
            {
                label: options.fillBlankTimesTxt,
                type: 'slider',
                suffixSelector: '-fill-blank-perline',
                defaultVal: defaultOptions.fillBlankTimes,
                initVal: 0,
                min: 0,
                max: 40,
                callback: callbacks.fillBlankCallback
            },
            {
                label: options.fillPinyinPerLineTxt,
                type: 'slider',
                suffixSelector: '-fill-pinyin-perline',
                defaultVal: defaultOptions.fillPinyinTimes,
                initVal: 4,
                min: 0,
                max: 40,
                callback: callbacks.fillPinyinCallback
            },
            {
                label: options.fillWordsPerLineTxt,
                type: 'slider',
                suffixSelector: '-fill-words-perline',
                defaultVal: defaultOptions.fillHanziTimes,
                initVal: 4,
                min: 0,
                max: 40,
                callback: callbacks.fillWordCallback
            }
        ]
        Util.createFieldsetBlockWapper(options, defaultComponents, this.components, '.moran-container', 'word-input-module');
    }
};

const MathInput = {
    components: [],
    init: function(options, callbacks){
        let defaultOptions = options.defaultOptions;
        let defaultComponents = [
            {
                type: 'textarea',
                suffixSelector: '-textarea',
                defaultVal:defaultOptions.words && defaultOptions.words.join(" "),
                initVal: options.defaultValue,
                placeHolder: options.textareaHolder,
                callback: callbacks.textareaCallback
            },
            {
                label: options.inputRangeTxt,
                type: 'slider',
                suffixSelector: '-input-range',
                defaultVal: defaultOptions.inputRange,
                initVal: [0, 99],
                min: 0,
                max: 1000,
                range: true,
                callback: callbacks.inputRangeCallback
            },
            {
                label: options.generatePagesTxt,
                type: 'slider',
                suffixSelector: '-generate-pages',
                defaultVal: defaultOptions.generatePages,
                initVal: 1,
                min: 0,
                max: 90,
                callback: callbacks.generatePagesCallback
            },
            {
                label: options.subjectTimesTxt,
                type: 'slider',
                suffixSelector: '-subject-times',
                defaultVal: defaultOptions.subjectTimes,
                initVal: 60,
                min: 0,
                max: 69,
                callback: callbacks.subjectTimesCallback
            },
            {
                label: options.fillBlankTimesTxt,
                type: 'slider',
                suffixSelector: '-fill-blank-perline',
                defaultVal: defaultOptions.fillBlankTimes,
                initVal: 0,
                min: 0,
                max: 40,
                callback: callbacks.fillBlankCallback
            },
            {
                label: options.fillWordsPerLineTxt,
                type: 'slider',
                suffixSelector: '-fill-words-perline',
                defaultVal: defaultOptions.fillHanziTimes,
                initVal: 4,
                min: 0,
                max: 40,
                callback: callbacks.fillWordCallback
            }
        ]
        Util.createFieldsetBlockWapper(options, defaultComponents, this.components, '.moran-container', 'math-input-module');
    }
};

const Layout = {
    components: [],
    init: function(options, callbacks){
        let defaultOptions = options.defaultOptions;
        let defaultComponents = [
            {
                type: 'inputpair',
                label: '换算',
                inputs: [
                    {
                        id: "convert-unit-px",
                        label: "像素",
                        value: "",
                        initVal: "",
                        callback: function (that) {
                            $("#page-layout-module-convert-unit-mm").val(Util.pxTomm($(that).val()))
                        }
                    },
                    {
                        id: "convert-unit-mm",
                        label: "毫米",
                        value: "",
                        initVal: "",
                        callback: function (that) {
                            $("#page-layout-module-convert-unit-px").val(Util.mmTopx($(that).val()))
                        }
                    }
                ]
            },
            {
                label: options.pageWidthTxt,
                type: 'slider',
                suffixSelector: '-page-width',
                defaultVal: defaultOptions.pageWidth * 10,
                initVal: 2100,
                min: 1,
                max: 4000,
                style: '35px',
                callback: callbacks.pageWidthCallback
            },
            {
                label: options.pageHeightTxt,
                type: 'slider',
                suffixSelector: '-page-height',
                defaultVal: defaultOptions.pageHeight * 10,
                initVal: 2963,
                min: 1,
                max: 4000,
                style: '35px',
                callback: callbacks.pageHeightCallback
            },
            {
                label: options.wordsPerPageTxt,
                type: 'slider',
                suffixSelector: '-words-per-page',
                defaultVal: defaultOptions.wordsPerPage,
                initVal: 8,
                min: 1,
                max: 50,
                callback: callbacks.wordsPerPageCallback
            },
            {
                label: options.bosesPerLineTxt,
                type: 'slider',
                suffixSelector: '-box-per-line',
                defaultVal: defaultOptions.columnsPerLine,
                initVal: 12,
                min: 5,
                max: 40,
                callback: callbacks.bosesPerLineCallback
            },
            {
                label: options.boxSizeTxt,
                type: 'slider',
                suffixSelector: '-box-size',
                defaultVal: defaultOptions.boxSize,
                initVal: 57,
                min: 10,
                max: 350,
                style: '30px',
                callback: callbacks.boxSizeCallback
            },
            {
                label: options.boxHeightTxt,
                type: 'slider',
                suffixSelector: '-box-height',
                defaultVal: defaultOptions.boxHeight,
                initVal: 35,
                min: 10,
                max: 350,
                style: '30px',
                callback: callbacks.boxHeightCallback
            },
            {
                label: options.fillOtherLineTxt,
                type: 'slider',
                suffixSelector: '-fill-other-line',
                defaultVal: defaultOptions.fillHanziLines,
                initVal: 0,
                min: 0,
                max: 26,
                callback: callbacks.fillOtherLineCallback
            },
            {
                label: options.fillEmptyLineTxt,
                type: 'slider',
                suffixSelector: '-fill-empty-line',
                defaultVal: defaultOptions.fillEmptyLines,
                initVal: 0,
                min: 0,
                max: 26,
                callback: callbacks.fillEmptyLineCallback
            },
            {
                label: options.leftRightTxt,
                type: 'slider',
                suffixSelector: '-position-left-right',
                defaultVal: defaultOptions.positionLeftRight,
                initVal: 50,
                min: 1,
                max: 107,
                style: '30px',
                callback: callbacks.leftRightCallback
            },
            {
                label: options.headerWidthTxt,
                type: 'slider',
                suffixSelector: '-header-width',
                defaultVal: defaultOptions.headerWidth,
                initVal: 686,
                min: 0,
                max: 3000,
                style: '35px',
                callback: callbacks.headerWidthCallback
            },
            {
                label: options.footerWidthTxt,
                type: 'slider',
                suffixSelector: '-footer-width',
                defaultVal: defaultOptions.footerWidth,
                initVal: 686,
                min: 0,
                max: 3000,
                style: '35px',
                callback: callbacks.footerWidthCallback
            },
            {
                label: options.headerUpDownTxt,
                type: 'slider',
                suffixSelector: '-header-up-down',
                defaultVal: defaultOptions.positionHeaderUpDown*10,
                initVal: 400,
                min: -500,
                max: 2000,
                style: '35px',
                callback: callbacks.headerUpDownCallback
            },
            {
                label: options.contentUpDownTxt,
                type: 'slider',
                suffixSelector: '-content-up-down',
                defaultVal: defaultOptions.positionContentUpDown,
                initVal: 100,
                min: -150,
                max: 600,
                style: '30px',
                callback: callbacks.contentUpDownCallback
            },
            {
                label: options.contentLeftRightTxt,
                type: 'slider',
                suffixSelector: '-content-left-right',
                defaultVal: defaultOptions.positionContentLeftRight,
                initVal: 0,
                min: -350,
                max: 350,
                style: '30px',
                callback: callbacks.contentLeftRightCallback
            },
            {
                label: options.footerUpDownTxt,
                type: 'slider',
                suffixSelector: '-footer-up-down',
                defaultVal: defaultOptions.positionFooterUpDown*10,
                initVal: 400,
                min: -500,
                max: 2000,
                style: '35px',
                callback: callbacks.footerUpDownCallback
            }
        ]
        Util.createFieldsetBlockWapper(options, defaultComponents, this.components, '.moran-container', 'page-layout-module');
    }
};

const English = {
    components: [],
    init: function(options, callbacks){
        let defaultOptions = options.defaultOptions;
        let defaultComponents = [
            {
                type: 'font',
                fonts: Util.englishFonts,
                defaultVal: defaultOptions.pinyinFont,
                initVal: "pinyin",
                callback: callbacks.pinyinFontCallback
            },
            {
                type: 'button',
                buttons: options.buttons
            },
            {
                type: 'buttonSet',
                buttons: options.aligns
            },
            {
                label: options.pinyinSizeTxt,
                type: 'slider',
                suffixSelector: '-pinyin-font-size',
                defaultVal: defaultOptions.pinyinSize,
                initVal: 20,
                min: 12,
                max: 100,
                style: '30px',
                callback: callbacks.pinyinFontSizeCallback
            },
            {
                label: options.lineHeightTxt,
                type: 'slider',
                suffixSelector: '-pinyin-line-height',
                defaultVal: defaultOptions.pinyinLineHeight,
                initVal: 24,
                min: 12,
                max: 100,
                style: '30px',
                callback: callbacks.lineHeightCallback
            },
            {
                label: options.lowerCaseSizeTxt,
                type: 'slider',
                suffixSelector: '-lower-case-font-size',
                defaultVal: defaultOptions.lowerCaseSize,
                initVal: 22,
                min: 12,
                max: 100,
                style: '30px',
                callback: callbacks.lowerCaseSizeCallback
            },
            {
                label: options.lowerCaseLineHeightTxt,
                type: 'slider',
                suffixSelector: '-lower-case-line-height',
                defaultVal: defaultOptions.lowerCaseLineHeight,
                initVal: 26,
                min: 12,
                max: 100,
                style: '30px',
                callback: callbacks.lowerCaseLineHeightCallback
            },
            {
                label: options.letterSpacingTxt,
                type: 'slider',
                suffixSelector: '-pinyin-letter-spacing',
                defaultVal: defaultOptions.pinyinLetterSpacing,
                initVal: -1,
                min: -20,
                max: 30,
                style: '30px',
                callback: callbacks.letterSpacingCallback
            },
            {
                label: options.firstColorTxt,
                type: 'color',
                suffixSelector: '-first-pinyin-color',
                defaultVal: defaultOptions.firstPinyinColor,
                initVal: '#980F29',
                callback: callbacks.pinyinFirstPinyinColorCallback
            },
            {
                label: options.otherColorTxt,
                type: 'color',
                suffixSelector: '-other-pinyin-color',
                defaultVal: defaultOptions.otherPinyinColor,
                initVal: '#FFB8B8',
                opacity: true,
                callback: callbacks.pinyinOtherPinyinColorCallback
            }
        ]
        Util.createFieldsetBlockWapper(options, defaultComponents, this.components, '.moran-container', 'english-setting-module');
    }
};

const Pinyin = {
    components: [],
    init: function(options, callbacks){
        let defaultOptions = options.defaultOptions;
        let defaultComponents = [
            {
                type: 'font',
                fonts: Util.chinesePinyinFonts,
                defaultVal: defaultOptions.pinyinFont,
                initVal: "pinyin",
                callback: callbacks.pinyinFontCallback
            },
            {
                type: 'button',
                buttons: options.buttons
            },
            {
                type: 'buttonSet',
                buttons: options.aligns
            },
            {
                label: options.pinyinSizeTxt,
                type: 'slider',
                suffixSelector: '-pinyin-font-size',
                defaultVal: defaultOptions.pinyinSize,
                initVal: 20,
                min: 12,
                max: 100,
                style: '30px',
                callback: callbacks.pinyinFontSizeCallback
            },
            {
                label: options.longPinyinSizeTxt,
                type: 'slider',
                suffixSelector: '-long-pinyin-font-size',
                defaultVal: defaultOptions.longPinyinSize,
                initVal: 16,
                min: 12,
                max: 100,
                style: '30px',
                callback: callbacks.longPinyinFontSizeCallback
            },
            {
                label: options.lineHeightTxt,
                type: 'slider',
                suffixSelector: '-pinyin-line-height',
                defaultVal: defaultOptions.pinyinLineHeight,
                initVal: 24,
                min: 12,
                max: 100,
                style: '30px',
                callback: callbacks.lineHeightCallback
            },
            {
                label: options.longLineHeightTxt,
                type: 'slider',
                suffixSelector: '-long-pinyin-line-height',
                defaultVal: defaultOptions.longPinyinLineHeight,
                initVal: 24,
                min: 12,
                max: 100,
                style: '30px',
                callback: callbacks.longLineHeightCallback
            },
            {
                label: options.letterSpacingTxt,
                type: 'slider',
                suffixSelector: '-pinyin-letter-spacing',
                defaultVal: defaultOptions.pinyinLetterSpacing,
                initVal: -1,
                min: -20,
                max: 30,
                style: '30px',
                callback: callbacks.letterSpacingCallback
            },
            {
                label: options.firstColorTxt,
                type: 'color',
                suffixSelector: '-first-pinyin-color',
                defaultVal: defaultOptions.firstPinyinColor,
                initVal: '#980F29',
                callback: callbacks.pinyinFirstPinyinColorCallback
            },
            {
                label: options.otherColorTxt,
                type: 'color',
                suffixSelector: '-other-pinyin-color',
                defaultVal: defaultOptions.otherPinyinColor,
                initVal: '#FFB8B8',
                opacity: true,
                callback: callbacks.pinyinOtherPinyinColorCallback
            }
        ]
        Util.createFieldsetBlockWapper(options, defaultComponents, this.components, '.moran-container', 'pinyin-setting-module');
    }
};

const PinyinBox = {
    components: [],
    init: function(options, callbacks){
        let defaultOptions = options.defaultOptions;
        let defaultComponents = [
            {
                label: options.effectLineTxt,
                type: 'slider',
                suffixSelector: '-effect-lines',
                range: true,
                defaultVal: defaultOptions.pinyinEffectLines,
                initVal: [0, 3],
                min: 0,
                max: 3,
                callback: callbacks.effectLinesCallback
            },
            {
                label: options.effectBoxTxt,
                type: 'slider',
                suffixSelector: '-effect-boses',
                range: true,
                defaultVal: defaultOptions.pinyinEffectColumns,
                initVal: [0, 39],
                min: 0,
                max: 39,
                callback: callbacks.effectBosesCallback
            },
            {
                type: 'box',
                boses: Util.pinyinBoses,
                defaultVal: defaultOptions.pinyinBoxId,
                initVal: "1",
                callback: callbacks.boxCallback
            },
            {
                label: options.boxUploadTxt,
                placeHolder: options.tipsTxt,
                type: 'file',
                suffixSelector: '-box-upload',
                callback: callbacks.boxUploadCallback
            },
            {
                label: options.boxOutlineSizeTxt,
                type: 'slider',
                suffixSelector: '-box-outline-size',
                defaultVal: defaultOptions.pinyinBoxOutlineSize,
                initVal: 1,
                min: 1,
                max: 7,
                style: '20px',
                callback: callbacks.boxOutlineSizeCallback
            },
            {
                label: options.boxOutlineColorTxt,
                type: 'color',
                suffixSelector: '-box-outline-color',
                defaultVal: defaultOptions.pinyinBoxOutlineColor,
                initVal: '#00b050',
                callback: callbacks.boxOutlineColorCallback
            },
            {
                label: options.boxOutlineStyleTxt,
                type: 'border',
                defaultVal: defaultOptions.pinyinBoxOutlineStyle,
                initVal: '',
                callback: callbacks.borderStyleCallback
            },
            {
                label: options.boxInnerlineSizeTxt,
                type: 'slider',
                suffixSelector: '-box-innerline-size',
                defaultVal: defaultOptions.pinyinBoxInlineSize,
                initVal: 1,
                min: 1,
                max: 10,
                style: '20px',
                callback: callbacks.boxInnerlineSizeCallback
            },
            {
                label: options.boxInnerlineColorTxt,
                type: 'color',
                suffixSelector: '-box-innerline-color',
                defaultVal: defaultOptions.pinyinBoxInlineColor,
                initVal: '#70d39d',
                callback: callbacks.boxInnerlineColorCallback
            },
            {
                label: options.boxInnerlineOpacityTxt,
                type: 'slider',
                suffixSelector: '-box-innerline-opacity',
                defaultVal: defaultOptions.pinyinBoxInlineOpacity,
                initVal: 100,
                min: 0,
                max: 100,
                style: '30px',
                callback: callbacks.boxInnerlineOpacityCallback
            },
            {
                label: options.boxInnerlineDasharrayTxt,
                type: 'slider',
                range: true,
                suffixSelector: '-box-innerline-dasharray',
                defaultVal: defaultOptions.pinyinBoxInlineDashArray,
                initVal: [3, 4],
                min: 0,
                max: 10,
                callback: callbacks.boxInnerlineDasharrayCallback
            }
        ]
        Util.createFieldsetBlockWapper(options, defaultComponents, this.components, '.moran-container', 'pinyin-box-setting-module');
    }
};

const Font = {
    components: [],
    init: function(options, callbacks){
        let defaultOptions = options.defaultOptions;
        let defaultComponents = [
            {
                type: 'font',
                fonts: defaultOptions.fonts || Util.chineseFonts,
                defaultVal: defaultOptions.hanziFont,
                callback: callbacks.wordFontCallback
            },
            {
                type: 'buttonSet',
                buttons: options.buttons
            },
            {
                label: options.sizeTxt,
                type: 'slider',
                suffixSelector: '-slider-font-size',
                defaultVal: defaultOptions.hanziSize,
                initVal: 42,
                min: 1,
                max: 100,
                style: '30px',
                callback: callbacks.wordFontSizeCallback
            },
            {
                label: options.lineHeightTxt,
                type: 'slider',
                suffixSelector: '-slider-line-height',
                defaultVal: defaultOptions.hanziLineHeight,
                initVal: 57,
                min: 1,
                max: 100,
                style: '30px',
                callback: callbacks.lineHeightCallback
            },
            {
                label: options.hanziPaddingLeftTxt,
                type: 'slider',
                suffixSelector: '-slider-word-padding-left',
                defaultVal: defaultOptions.hanziPaddingLeft,
                initVal: 0,
                min: -20,
                max: 20,
                style: '30px',
                callback: callbacks.hanziPaddingLeftCallback
            },
            {
                label: options.firstColorTxt,
                type: 'color',
                suffixSelector: '-first-word-color',
                defaultVal: defaultOptions.firstHanziColor,
                initVal: '#980F29',
                callback: callbacks.wordFirstWordColorCallback
            },
            {
                label: options.otherColorTxt,
                type: 'color',
                suffixSelector: '-other-word-color',
                defaultVal: defaultOptions.otherHanziColor,
                initVal: '#FFB8B8',
                opacity: true,
                callback: callbacks.wordOtherWordColorCallback
            }
        ]
        Util.createFieldsetBlockWapper(options, defaultComponents, this.components, '.moran-container', 'word-font-module');
    }
};

const Box = {
    components: [],
    init: function(options, callbacks){
        let defaultOptions = options.defaultOptions;
        let defaultComponents = [
            {
                label: options.effectLineTxt,
                type: 'slider',
                suffixSelector: '-effect-lines',
                range: true,
                defaultVal: defaultOptions.effectLines,
                initVal: [0, 25],
                min: 0,
                max: 25,
                callback: callbacks.effectLinesCallback
            },
            {
                label: options.effectBoxTxt,
                type: 'slider',
                suffixSelector: '-effect-boses',
                range: true,
                defaultVal: defaultOptions.effectColumns,
                initVal: [0, 39],
                min: 0,
                max: 39,
                callback: callbacks.effectBosesCallback
            },
            {
                type: 'box',
                defaultVal: defaultOptions.boxId,
                initVal: "11",
                callback: callbacks.boxCallback
            },
            {
                label: options.boxUploadTxt,
                placeHolder: options.tipsTxt,
                type: 'file',
                suffixSelector: '-box-upload',
                callback: callbacks.boxUploadCallback
            },
            {
                label: options.boxOutlineSizeTxt,
                type: 'slider',
                suffixSelector: '-box-outline-size',
                defaultVal: defaultOptions.boxOutlineSize,
                initVal: 1,
                min: 1,
                max: 7,
                callback: callbacks.boxOutlineSizeCallback
            },
            {
                label: options.boxOutlineColorTxt,
                type: 'color',
                suffixSelector: '-box-outline-color',
                defaultVal: defaultOptions.boxOutlineColor,
                initVal: '#00b050',
                callback: callbacks.boxOutlineColorCallback
            },
            {
                label: options.otherColorTxt,
                type: 'color',
                suffixSelector: '-other-word-color',
                defaultVal: defaultOptions.otherHanziColor,
                initVal: '#FFB8B8',
                opacity: true,
                callback: callbacks.wordOtherWordColorCallback
            },
            {
                label: options.boxOutlineStyleTxt,
                type: 'border',
                defaultVal: defaultOptions.boxOutlineStyle,
                initVal: '',
                callback: callbacks.borderStyleCallback
            },
            {
                label: options.axisXTxt,
                type: 'slider',
                suffixSelector: '-box-axis-x',
                defaultVal: defaultOptions.axisX,
                initVal: 40,
                min: -200,
                max: 200,
                callback: callbacks.axisXCallback
            },
            {
                label: options.axisYTxt,
                type: 'slider',
                suffixSelector: '-box-axis-y',
                defaultVal: defaultOptions.axisY,
                initVal: 40,
                min: -200,
                max: 200,
                callback: callbacks.axisYCallback
            },
            {
                label: options.slantUpTxt,
                type: 'slider',
                suffixSelector: '-box-slant-up',
                defaultVal: defaultOptions.slantUp,
                initVal: 80,
                min: -200,
                max: 200,
                callback: callbacks.slantUpCallback
            },
            {
                label: options.slantDownTxt,
                type: 'slider',
                suffixSelector: '-box-slant-down',
                defaultVal: defaultOptions.slantDown,
                initVal: -2,
                min: -200,
                max: 200,
                callback: callbacks.slantDownCallback
            },
            {
                label: options.rectangleXTxt,
                type: 'slider',
                suffixSelector: '-box-rectangle-x',
                defaultVal: defaultOptions.rectangleX,
                initVal: 20,
                min: -200,
                max: 200,
                callback: callbacks.rectangleXCallback
            },
            {
                label: options.rectangleYTxt,
                type: 'slider',
                suffixSelector: '-box-rectangle-y',
                defaultVal: defaultOptions.rectangleY,
                initVal: 10,
                min: -200,
                max: 200,
                callback: callbacks.rectangleYCallback
            },
            {
                label: options.rectangleWidthTxt,
                type: 'slider',
                suffixSelector: '-box-rectangle-width',
                defaultVal: defaultOptions.rectangleWidth,
                initVal: 58,
                min: -200,
                max: 200,
                callback: callbacks.rectangleWidthCallback
            },
            {
                label: options.rectangleHeightTxt,
                type: 'slider',
                suffixSelector: '-box-rectangle-height',
                defaultVal: defaultOptions.rectangleHeight,
                initVal: 68,
                min: -200,
                max: 200,
                callback: callbacks.rectangleHeightCallback
            },
            {
                label: options.squareXYTxt,
                type: 'slider',
                suffixSelector: '-box-square-xy',
                defaultVal: defaultOptions.squareXY,
                initVal: 20,
                min: -200,
                max: 200,
                callback: callbacks.squareXYCallback
            },
            {
                label: options.squareWidthTxt,
                type: 'slider',
                suffixSelector: '-box-square-width',
                defaultVal: defaultOptions.squareWidth,
                initVal: 60,
                min: -200,
                max: 200,
                callback: callbacks.squareWidthCallback
            },
            {
                label: options.boxInnerlineSizeTxt,
                type: 'slider',
                suffixSelector: '-box-innerline-size',
                defaultVal: defaultOptions.boxInlineSize,
                initVal: 1,
                min: 1,
                max: 10,
                callback: callbacks.boxInnerlineSizeCallback
            },
            {
                label: options.boxInnerlineColorTxt,
                type: 'color',
                suffixSelector: '-box-innerline-color',
                defaultVal: defaultOptions.boxInlineColor,
                initVal: '#70d39d',
                callback: callbacks.boxInnerlineColorCallback
            },
            {
                label: options.boxInnerlineOpacityTxt,
                type: 'slider',
                suffixSelector: '-box-innerline-opacity',
                defaultVal: defaultOptions.boxInlineOpacity,
                initVal: 100,
                min: 1,
                max: 100,
                style: '30px',
                callback: callbacks.boxInnerlineOpacityCallback
            },
            {
                label: options.boxInnerlineDasharrayTxt,
                type: 'slider',
                range: true,
                suffixSelector: '-box-innerline-dasharray',
                defaultVal: defaultOptions.boxInlineDashArray,
                initVal: [3, 4],
                min: 1,
                max: 10,
                style: '20px',
                callback: callbacks.boxInnerlineDasharrayCallback
            }
        ]
        Util.createFieldsetBlockWapper(options, defaultComponents, this.components, '.moran-container', 'box-setting-module');
    }
};

const Top = {
    components: [],
    init: function(options, callbacks){
        let defaultOptions = options.defaultOptions;
        let defaultComponents = [
            {
                type: 'button',
                buttons: options.buttons
            },
            {
                type: 'font',
                defaultVal: defaultOptions.topFont,
                callback: callbacks.topFontCallback
            },
            {
                label: options.topLeftWidthTxt,
                type: 'slider',
                suffixSelector: '-top-left-width',
                defaultVal: defaultOptions.topLeftWidth,
                initVal: 224,
                min: 0,
                max: 500,
                callback: callbacks.topLeftWidthCallback
            },
            {
                label: options.topLeftFontSizeTxt,
                type: 'slider',
                suffixSelector: '-top-left-font-size',
                defaultVal: defaultOptions.topSize,
                initVal: 14,
                min: 1,
                max: 100,
                callback: callbacks.topLeftFontSizeCallback
            },
            {
                label: options.topLeftBackgroundColorTxt,
                type: 'color',
                suffixSelector: '-top-left-background-color',
                defaultVal: defaultOptions.topLeftBackgroundColor,
                initVal: '#D6F5E7',
                callback: callbacks.topLeftBackgroundColorCallback
            },
            {
                label: options.topAnswerBackgroundColorTxt,
                type: 'color',
                suffixSelector: '-top-answer-background-color',
                defaultVal: defaultOptions.topAnswerBackgroundColor,
                initVal: '#ffffff',
                callback: callbacks.topAnswerBackgroundColorCallback
            },
            {
                label: options.topAnswerColorTxt,
                type: 'color',
                suffixSelector: '-top-answer-color',
                defaultVal: defaultOptions.topAnswerColor,
                initVal: '#000000',
                callback: callbacks.topAnswerColorCallback
            },
            {
                label: options.topRightWidthTxt,
                type: 'slider',
                suffixSelector: '-top-right-width',
                defaultVal: defaultOptions.topRightWidth,
                initVal: 650,
                min: 0,
                max: 1000,
                style: '30px',
                callback: callbacks.topRightWidthCallback
            },
            {
                label: options.strokerOrderBackgroundColorTxt,
                type: 'color',
                suffixSelector: '-stroker-order-background-color',
                defaultVal: defaultOptions.topStrokeOrderBackgroundColor,
                initVal: '#D6F5E7',
                callback: callbacks.strokerOrderBackgroundColorCallback
            },
            {
                label: options.strokerOrderFontSizeTxt,
                type: 'slider',
                suffixSelector: '-stroker-order-font-size',
                defaultVal: defaultOptions.topStrokeOrderSize*1000,
                initVal: 20,
                min: 1,
                max: 24,
                callback: callbacks.strokerOrderFontSizeCallback
            },
            {
                label: options.strokerOrderColorTxt,
                type: 'color',
                suffixSelector: '-stroker-order-color',
                defaultVal: defaultOptions.topOtherStrokeColor,
                initVal: '#FFB8B8',
                callback: callbacks.topStrokerOrderColorCallback
            },
            {
                label: options.currentStrokerOrderColorTxt,
                type: 'color',
                suffixSelector: '-current-stroker-order-color',
                defaultVal: defaultOptions.topCurrentStrokeColor,
                initVal: '#980F29',
                callback: callbacks.topCurrentStrokerOrderColorCallback
            },
            {
                label: options.topOutlineSizeTxt,
                type: 'slider',
                suffixSelector: '-top-outline-size',
                defaultVal: defaultOptions.topOutlineSize,
                initVal: 1,
                min: 1,
                max: 7,
                callback: callbacks.outlineSizeCallback
            },
            {
                label: options.topOutlineColorTxt,
                type: 'color',
                suffixSelector: '-top-outline-color',
                defaultVal: defaultOptions.topOutlineColor,
                initVal: '#00b050',
                callback: callbacks.outlineColorCallback
            },
            {
                label: options.topOutlineStyleTxt,
                type: 'border',
                defaultVal: defaultOptions.topOutlineStyle,
                initVal: '',
                callback: callbacks.borderStyleCallback
            }
        ]
        Util.createFieldsetBlockWapper(options, defaultComponents, this.components, '.moran-container', 'top-setting-mobule');
    }
};

const Background = {
    components: [],
    init: function(options, callbacks){
        let defaultOptions = options.defaultOptions;
        let defaultComponents = [
            {
                type: 'buttonSet',
                buttons: options.buttons
            },
            {
                label: options.backgroundUploadTxt,
                suffixSelector: '-background-image',
                placeHolder: options.tipsTxt,
                type: 'file',
                callback: callbacks.backgroundImageCallback
            },
            {
                label: options.backgroundColorTxt,
                type: 'color',
                suffixSelector: '-background-color',
                defaultVal: defaultOptions.backgroundColor,
                initVal: '#ffffff',
                opacity: true,
                callback: callbacks.backgroundColorCallback
            }
        ]
        Util.createFieldsetBlockWapper(options, defaultComponents, this.components, '.moran-container', 'background-setting-module');
    }
};

const Cover = {
    components: [],
    init: function(options, callbacks){
        let defaultOptions = options.defaultOptions;
        let defaultComponents = [
            {
                type: 'button',
                buttons: options.buttons
            },
            {
                label: options.backgroundUploadTxt,
                suffixSelector: '-background-image',
                placeHolder: options.tipsTxt,
                type: 'file',
                callback: callbacks.backgroundImageCallback
            },
            {
                label: options.coverTitleTxt,
                type: 'input',
                suffixSelector: '-cover-title-text',
                defaultVal: defaultOptions.coverTitle,
                callback: callbacks.coverTitleCallback
            },
            {
                type: 'font',
                defaultVal: defaultOptions.coverTitleFont,
                callback: callbacks.coverTitleFontCallback
            },
            {
                label: options.coverTitleSizeTxt,
                type: 'slider',
                suffixSelector: '-cover-title-font-size',
                defaultVal: defaultOptions.coverTitleSize,
                initVal: 50,
                min: 1,
                max: 99,
                callback: callbacks.coverTitleFontSizeCallback
            },
            {
                label: options.coverTitleColorTxt,
                type: 'color',
                suffixSelector: '-cover-title-color',
                defaultVal: defaultOptions.coverTitleColor,
                initVal: '#000000',
                callback: callbacks.coverTitleColorCallback
            },
            {
                label: options.titlePaddingLeftTxt,
                type: 'slider',
                suffixSelector: '-cover-title-padding-left',
                defaultVal: defaultOptions.coverTitlePaddingLeft,
                initVal: 161,
                min: 1,
                max: 385,
                style: '30px',
                callback: callbacks.titlePaddingLeftCallback
            },
            {
                label: options.titleTopTxt,
                type: 'slider',
                suffixSelector: '-cover-title-top',
                defaultVal: defaultOptions.coverTitleTop,
                initVal: 170,
                min: 1,
                max: 385,
                style: '30px',
                callback: callbacks.titleTopCallback
            },
            {
                type: 'button',
                buttons: options.customButtons
            },
            {
                label: options.coverStdContentTxt,
                type: 'input',
                suffixSelector: '-input-right-content-text',
                defaultVal: defaultOptions.coverCustomContent,
                hide: defaultOptions.coverCustom,
                callback: callbacks.coverStdContentCallback
            },
            {
                label: options.coverStdNameTxt,
                type: 'input',
                suffixSelector: '-input-right-stdname-text',
                defaultVal: defaultOptions.coverCustomName,
                hide: !defaultOptions.coverCustom,
                callback: callbacks.coverStdNameCallback
            },
            {
                label: options.coverStdClassTxt,
                type: 'input',
                suffixSelector: '-input-right-stdclass-text',
                defaultVal: defaultOptions.coverCustomClass,
                hide: !defaultOptions.coverCustom,
                callback: callbacks.coverStdClassCallback
            },
            {
                label: options.coverStdNumTxt,
                type: 'input',
                suffixSelector: '-input-right-stdnum-text',
                defaultVal: defaultOptions.coverCustomNo,
                hide: !defaultOptions.coverCustom,
                callback: callbacks.coverStdNumCallback
            },
            {
                type: 'font',
                prefixSelector: 'fix-setting-module-content',
                defaultVal: defaultOptions.coverFont,
                callback: callbacks.coverFontCallback
            },
            {
                label: options.coverSizeTxt,
                type: 'slider',
                suffixSelector: '-cover-content-font-size',
                defaultVal: defaultOptions.coverSize,
                initVal: 26,
                min: 1,
                max: 99,
                style: '30px',
                callback: callbacks.coverContentFontSizeCallback
            },
            {
                label: options.coverColorTxt,
                type: 'color',
                suffixSelector: '-cover-content-color',
                defaultVal: defaultOptions.coverColor,
                initVal: '#000000',
                callback: callbacks.coverContentColorCallback
            },
            {
                label: options.paddingLeftTxt,
                type: 'slider',
                suffixSelector: '-cover-content-padding-left',
                defaultVal: defaultOptions.coverPaddingLeft,
                initVal: 189,
                min: 1,
                max: 385,
                style: '30px',
                callback: callbacks.paddingLeftCallback
            },
            {
                label: options.upDownTxt,
                type: 'slider',
                suffixSelector: '-cover-content-up-down',
                defaultVal: defaultOptions.coverContentUpDown,
                initVal: 120,
                min: -20,
                max: 600,
                style: '30px',
                callback: callbacks.upDownCallback
            },
            {
                label: options.lineHeightTxt,
                type: 'slider',
                suffixSelector: '-cover-content-line-height',
                defaultVal: defaultOptions.coverLineHeight,
                initVal: 27,
                min: 1,
                max: 100,
                style: '30px',
                callback: callbacks.lineHeightCallback
            },
            {
                label: options.coverLineStyleTxt,
                type: 'border',
                defaultVal: defaultOptions.coverLineStyle,
                callback: callbacks.coverLineBorderStyleCallback
            },
            {
                label: options.coverLineSizeTxt,
                type: 'slider',
                suffixSelector: '-header-line-border-size',
                defaultVal: defaultOptions.coverLineSize,
                initVal: 1,
                min: 0,
                max: 10,
                callback: callbacks.coverLineBorderSizeCallback
            },
            {
                label: options.coverLineColorTxt,
                type: 'color',
                suffixSelector: '-header-line-color',
                defaultVal: defaultOptions.coverLineColor,
                initVal: '#000000',
                callback: callbacks.coverLineColorCallback
            }
        ]
        Util.createFieldsetBlockWapper(options, defaultComponents, this.components, '.moran-container', 'fix-setting-module');
    }
};

const Header = {
    components: [],
    init: function(options, callbacks){
        let defaultOptions = options.defaultOptions;
        let defaultComponents = [
            {
                type: 'font',
                defaultVal: defaultOptions.headerFont,
                callback: callbacks.headerFontCallback
            },
            {
                type: 'buttonSet',
                buttons: options.aligns
            },
            {
                label: options.headerLeftContentTxt,
                type: 'input',
                suffixSelector: '-input-content-text',
                defaultVal: defaultOptions.headerLeftContent,
                callback: callbacks.headerInputContentCallback
            },
            {
                label: options.headerSizeTxt,
                type: 'slider',
                suffixSelector: '-header-content-font-size',
                defaultVal: defaultOptions.headerSize,
                initVal: 14,
                min: 12,
                max: 32,
                callback: callbacks.headerContentFontSizeCallback
            },
            {
                label: options.headerColorTxt,
                type: 'color',
                suffixSelector: '-header-content-color',
                defaultVal: defaultOptions.headerColor,
                initVal: '#000000',
                callback: callbacks.headerContentColorCallback
            },
            {
                label: options.headerLineStyleTxt,
                type: 'border',
                defaultVal: defaultOptions.headerLineStyle,
                callback: callbacks.headerBorderStyleCallback
            },
            {
                label: options.headerLineSizeTxt,
                type: 'slider',
                suffixSelector: '-header-line-border-size',
                defaultVal: defaultOptions.headerLineSize,
                initVal: 1,
                min: 0,
                max: 10,
                callback: callbacks.headerLineBorderSizeCallback
            },
            {
                label: options.headerLineColorTxt,
                type: 'color',
                suffixSelector: '-header-line-color',
                defaultVal: defaultOptions.headerLineColor,
                initVal: '#00b050',
                callback: callbacks.headerLineColorCallback
            },
            {
                type: 'button',
                buttons: options.buttons
            },
            {
                label: options.headerRightContentTxt,
                type: 'input',
                suffixSelector: '-input-right-content-text',
                defaultVal: defaultOptions.headerCustomRightContent,
                hide: defaultOptions.headerCustomRight,
                callback: callbacks.headerInputRightContentCallback
            },
            {
                label: options.headerRightStdNameTxt,
                type: 'input',
                suffixSelector: '-input-right-stdname-text',
                defaultVal: defaultOptions.headerName,
                hide: !defaultOptions.headerCustomRight,
                callback: callbacks.headerInputRightStdnameCallback
            },
            {
                label: options.headerRightStdClassTxt,
                type: 'input',
                suffixSelector: '-input-right-stdclass-text',
                defaultVal: defaultOptions.headerClass,
                hide: !defaultOptions.headerCustomRight,
                callback: callbacks.headerInputRightStdclassCallback
            },
            {
                label: options.headerRightStdNumTxt,
                type: 'input',
                suffixSelector: '-input-right-stdnum-text',
                defaultVal: defaultOptions.headerNo,
                hide: !defaultOptions.headerCustomRight,
                callback: callbacks.headerInputRightStdnumCallback
            }
        ]
        Util.createFieldsetBlockWapper(options, defaultComponents, this.components, '.moran-container', 'header-setting-module');
    }
};

const Footer = {
    components: [],
    init: function(options,callbacks){
        let defaultOptions = options.defaultOptions;
        let defaultComponents = [
            {
                type: 'font',
                defaultVal: defaultOptions.footerFont,
                callback: callbacks.footerFontCallback
            },
            {
                label: options.footerLeftContentTxt,
                type: 'input',
                suffixSelector: '-input-content-text',
                defaultVal: defaultOptions.footerLeftContent,
                callback: callbacks.footerInputContentCallback
            },
            {
                label: options.footerSizeTxt,
                type: 'slider',
                suffixSelector: '-footer-content-font-size',
                defaultVal: defaultOptions.footerSize,
                initVal: 14,
                min: 12,
                max: 32,
                callback: callbacks.footerContentFontSizeCallbak
            },
            {
                label: options.footerColorTxt,
                type: 'color',
                suffixSelector: '-footer-content-color',
                defaultVal: defaultOptions.footerColor,
                initVal: '#000000',
                callback: callbacks.footerContentColorCallback
            },
            {
                label: options.footerLineStyleTxt,
                type: 'border',
                defaultVal: defaultOptions.footerLineStyle,
                callback: callbacks.footerBorderStyleCallback
            },
            {
                label: options.footerLineSizeTxt,
                type: 'slider',
                suffixSelector: '-footer-line-border-size',
                defaultVal: defaultOptions.footerLineSize,
                initVal: 1,
                min: 0,
                max: 10,
                callback: callbacks.footerLineBorderSizeCallback
            },
            {
                label: options.footerLineColorTxt,
                type: 'color',
                suffixSelector: '-footer-line-color',
                defaultVal: defaultOptions.footerLineColor,
                initVal: '#00b050',
                callback: callbacks.footerLineColorCallback
            },
            {
                type: 'button',
                buttons: options.buttons
            },
            {
                label: options.footerStartPageTxt,
                type: 'input',
                suffixSelector: '-input-start-page-text',
                defaultVal: defaultOptions.footerStartPage,
                initVal: "1",
                callback: callbacks.footerInputStartPageCallback
            },
            {
                label: options.footerTotalPageTxt,
                type: 'input',
                suffixSelector: '-input-total-page-text',
                defaultVal: defaultOptions.footerTotalPage,
                callback: callbacks.footerInputTotalPageCallback
            }
        ]
        Util.createFieldsetBlockWapper(options, defaultComponents, this.components, '.moran-container', 'footer-setting-module');
    }
};

const Print = {
    components: [],
    init: function(options, callbacks){
        let defaultOptions = options.defaultOptions;
        let defaultComponents = [
            {
                type: 'buttonSet',
                buttons: options.buttons
            },
            {
                label: options.printerTxt,
                type: 'select',
                suffixSelector: '-printer-select-text',
                defaultVal: defaultOptions.printer,
                initVal: {name:'', value: ''},
                options: Util.systemPrinters,
                callback: callbacks.printerCallback
            },
            {
                label: options.copiesTxt,
                type: 'slider',
                suffixSelector: '-print-copies',
                defaultVal: defaultOptions.printCopies,
                initVal: 1,
                min: 1,
                max: 100,
                style: '30px',
                callback: callbacks.printCopiesCallbak
            },
            {
                label: options.scaleFactorTxt,
                type: 'slider',
                suffixSelector: '-print-scale-factor',
                defaultVal: defaultOptions.scaleFactor,
                initVal: 100,
                min: 0,
                max: 500,
                style: '30px',
                callback: callbacks.scaleFactorCallback
            },
            {
                type: 'button',
                buttons: options.buttons2
            },
            {
                label: options.mediaSizeTxt,
                type: 'select',
                suffixSelector: '-printer-media-size',
                defaultVal: defaultOptions.mediaSize,
                initVal: {name: 'A4',value: 'ISOA4',width: 210,height: 297},
                options: Util.systemMediaSizes,
                callback: callbacks.mediaSizeCallback
            },
            {
                label: options.mediaWidthTxt,
                type: 'slider',
                suffixSelector: '-print-media-width',
                defaultVal: defaultOptions.mediaWidth,
                initVal: 210,
                min: 1,
                max: 2000,
                style: '35px',
                callback: callbacks.mediaWidthCallbak
            },
            {
                label: options.mediaHeightTxt,
                type: 'slider',
                suffixSelector: '-print-media-height',
                defaultVal: defaultOptions.mediaHeight,
                initVal: 297,
                min: 1,
                max: 2000,
                style: '35px',
                callback: callbacks.mediaHeightCallback
            },
            {
                type: 'button',
                buttons: options.operations
            }
        ]
        Util.createFieldsetBlockWapper(options, defaultComponents, this.components, '.moran-container', 'print-setting-module');
    }
};

const Operation = {
    components: [],
    init: function(options, callbacks){
        let defaultComponents = [
            {
                type: 'buttonSet',
                buttons: options.buttons
            },
            {
                type: 'button',
                buttons: options.buttons2
            },
            {
                type: 'button',
                parentStyle: options.parentStyle,
                buttons: options.operations
            }
        ]
        Util.createFieldsetBlockWapper(options, defaultComponents, this.components, '.moran-container', 'operation-setting-module');
    }
};