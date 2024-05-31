"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([[1448],{

/***/ 14616:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MML = void 0;
var MmlNode_js_1 = __webpack_require__(18426);
var math_js_1 = __webpack_require__(27225);
var mi_js_1 = __webpack_require__(16689);
var mn_js_1 = __webpack_require__(94411);
var mo_js_1 = __webpack_require__(5213);
var mtext_js_1 = __webpack_require__(86237);
var mspace_js_1 = __webpack_require__(4254);
var ms_js_1 = __webpack_require__(17931);
var mrow_js_1 = __webpack_require__(68550);
var mfrac_js_1 = __webpack_require__(294);
var msqrt_js_1 = __webpack_require__(53162);
var mroot_js_1 = __webpack_require__(68091);
var mstyle_js_1 = __webpack_require__(95546);
var merror_js_1 = __webpack_require__(53583);
var mpadded_js_1 = __webpack_require__(38480);
var mphantom_js_1 = __webpack_require__(15837);
var mfenced_js_1 = __webpack_require__(90719);
var menclose_js_1 = __webpack_require__(22599);
var maction_js_1 = __webpack_require__(79024);
var msubsup_js_1 = __webpack_require__(74529);
var munderover_js_1 = __webpack_require__(75723);
var mmultiscripts_js_1 = __webpack_require__(13195);
var mtable_js_1 = __webpack_require__(7252);
var mtr_js_1 = __webpack_require__(2117);
var mtd_js_1 = __webpack_require__(49016);
var maligngroup_js_1 = __webpack_require__(89);
var malignmark_js_1 = __webpack_require__(53698);
var mglyph_js_1 = __webpack_require__(83954);
var semantics_js_1 = __webpack_require__(19223);
var TeXAtom_js_1 = __webpack_require__(66846);
var mathchoice_js_1 = __webpack_require__(67801);
exports.MML = (_a = {},
    _a[math_js_1.MmlMath.prototype.kind] = math_js_1.MmlMath,
    _a[mi_js_1.MmlMi.prototype.kind] = mi_js_1.MmlMi,
    _a[mn_js_1.MmlMn.prototype.kind] = mn_js_1.MmlMn,
    _a[mo_js_1.MmlMo.prototype.kind] = mo_js_1.MmlMo,
    _a[mtext_js_1.MmlMtext.prototype.kind] = mtext_js_1.MmlMtext,
    _a[mspace_js_1.MmlMspace.prototype.kind] = mspace_js_1.MmlMspace,
    _a[ms_js_1.MmlMs.prototype.kind] = ms_js_1.MmlMs,
    _a[mrow_js_1.MmlMrow.prototype.kind] = mrow_js_1.MmlMrow,
    _a[mrow_js_1.MmlInferredMrow.prototype.kind] = mrow_js_1.MmlInferredMrow,
    _a[mfrac_js_1.MmlMfrac.prototype.kind] = mfrac_js_1.MmlMfrac,
    _a[msqrt_js_1.MmlMsqrt.prototype.kind] = msqrt_js_1.MmlMsqrt,
    _a[mroot_js_1.MmlMroot.prototype.kind] = mroot_js_1.MmlMroot,
    _a[mstyle_js_1.MmlMstyle.prototype.kind] = mstyle_js_1.MmlMstyle,
    _a[merror_js_1.MmlMerror.prototype.kind] = merror_js_1.MmlMerror,
    _a[mpadded_js_1.MmlMpadded.prototype.kind] = mpadded_js_1.MmlMpadded,
    _a[mphantom_js_1.MmlMphantom.prototype.kind] = mphantom_js_1.MmlMphantom,
    _a[mfenced_js_1.MmlMfenced.prototype.kind] = mfenced_js_1.MmlMfenced,
    _a[menclose_js_1.MmlMenclose.prototype.kind] = menclose_js_1.MmlMenclose,
    _a[maction_js_1.MmlMaction.prototype.kind] = maction_js_1.MmlMaction,
    _a[msubsup_js_1.MmlMsub.prototype.kind] = msubsup_js_1.MmlMsub,
    _a[msubsup_js_1.MmlMsup.prototype.kind] = msubsup_js_1.MmlMsup,
    _a[msubsup_js_1.MmlMsubsup.prototype.kind] = msubsup_js_1.MmlMsubsup,
    _a[munderover_js_1.MmlMunder.prototype.kind] = munderover_js_1.MmlMunder,
    _a[munderover_js_1.MmlMover.prototype.kind] = munderover_js_1.MmlMover,
    _a[munderover_js_1.MmlMunderover.prototype.kind] = munderover_js_1.MmlMunderover,
    _a[mmultiscripts_js_1.MmlMmultiscripts.prototype.kind] = mmultiscripts_js_1.MmlMmultiscripts,
    _a[mmultiscripts_js_1.MmlMprescripts.prototype.kind] = mmultiscripts_js_1.MmlMprescripts,
    _a[mmultiscripts_js_1.MmlNone.prototype.kind] = mmultiscripts_js_1.MmlNone,
    _a[mtable_js_1.MmlMtable.prototype.kind] = mtable_js_1.MmlMtable,
    _a[mtr_js_1.MmlMlabeledtr.prototype.kind] = mtr_js_1.MmlMlabeledtr,
    _a[mtr_js_1.MmlMtr.prototype.kind] = mtr_js_1.MmlMtr,
    _a[mtd_js_1.MmlMtd.prototype.kind] = mtd_js_1.MmlMtd,
    _a[maligngroup_js_1.MmlMaligngroup.prototype.kind] = maligngroup_js_1.MmlMaligngroup,
    _a[malignmark_js_1.MmlMalignmark.prototype.kind] = malignmark_js_1.MmlMalignmark,
    _a[mglyph_js_1.MmlMglyph.prototype.kind] = mglyph_js_1.MmlMglyph,
    _a[semantics_js_1.MmlSemantics.prototype.kind] = semantics_js_1.MmlSemantics,
    _a[semantics_js_1.MmlAnnotation.prototype.kind] = semantics_js_1.MmlAnnotation,
    _a[semantics_js_1.MmlAnnotationXML.prototype.kind] = semantics_js_1.MmlAnnotationXML,
    _a[TeXAtom_js_1.TeXAtom.prototype.kind] = TeXAtom_js_1.TeXAtom,
    _a[mathchoice_js_1.MathChoice.prototype.kind] = mathchoice_js_1.MathChoice,
    _a[MmlNode_js_1.TextNode.prototype.kind] = MmlNode_js_1.TextNode,
    _a[MmlNode_js_1.XMLNode.prototype.kind] = MmlNode_js_1.XMLNode,
    _a);
//# sourceMappingURL=MML.js.map

/***/ }),

/***/ 61448:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MmlFactory = void 0;
var NodeFactory_js_1 = __webpack_require__(88100);
var MML_js_1 = __webpack_require__(14616);
var MmlFactory = (function (_super) {
    __extends(MmlFactory, _super);
    function MmlFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MmlFactory.prototype, "MML", {
        get: function () {
            return this.node;
        },
        enumerable: false,
        configurable: true
    });
    MmlFactory.defaultNodes = MML_js_1.MML;
    return MmlFactory;
}(NodeFactory_js_1.AbstractNodeFactory));
exports.MmlFactory = MmlFactory;
//# sourceMappingURL=MmlFactory.js.map

/***/ }),

/***/ 89:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MmlMaligngroup = void 0;
var MmlNode_js_1 = __webpack_require__(18426);
var Attributes_js_1 = __webpack_require__(7013);
var MmlMaligngroup = (function (_super) {
    __extends(MmlMaligngroup, _super);
    function MmlMaligngroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MmlMaligngroup.prototype, "kind", {
        get: function () {
            return 'maligngroup';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MmlMaligngroup.prototype, "isSpacelike", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    MmlMaligngroup.prototype.setChildInheritedAttributes = function (attributes, display, level, prime) {
        attributes = this.addInheritedAttributes(attributes, this.attributes.getAllAttributes());
        _super.prototype.setChildInheritedAttributes.call(this, attributes, display, level, prime);
    };
    MmlMaligngroup.defaults = __assign(__assign({}, MmlNode_js_1.AbstractMmlLayoutNode.defaults), { groupalign: Attributes_js_1.INHERIT });
    return MmlMaligngroup;
}(MmlNode_js_1.AbstractMmlLayoutNode));
exports.MmlMaligngroup = MmlMaligngroup;
//# sourceMappingURL=maligngroup.js.map

/***/ }),

/***/ 53698:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MmlMalignmark = void 0;
var MmlNode_js_1 = __webpack_require__(18426);
var MmlMalignmark = (function (_super) {
    __extends(MmlMalignmark, _super);
    function MmlMalignmark() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MmlMalignmark.prototype, "kind", {
        get: function () {
            return 'malignmark';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MmlMalignmark.prototype, "arity", {
        get: function () {
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MmlMalignmark.prototype, "isSpacelike", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    MmlMalignmark.defaults = __assign(__assign({}, MmlNode_js_1.AbstractMmlNode.defaults), { edge: 'left' });
    return MmlMalignmark;
}(MmlNode_js_1.AbstractMmlNode));
exports.MmlMalignmark = MmlMalignmark;
//# sourceMappingURL=malignmark.js.map

/***/ }),

/***/ 67801:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MathChoice = void 0;
var MmlNode_js_1 = __webpack_require__(18426);
var MathChoice = (function (_super) {
    __extends(MathChoice, _super);
    function MathChoice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MathChoice.prototype, "kind", {
        get: function () {
            return 'MathChoice';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MathChoice.prototype, "arity", {
        get: function () {
            return 4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MathChoice.prototype, "notParent", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    MathChoice.prototype.setInheritedAttributes = function (attributes, display, level, prime) {
        var selection = (display ? 0 : Math.max(0, Math.min(level, 2)) + 1);
        var child = this.childNodes[selection] || this.factory.create('mrow');
        this.parent.replaceChild(child, this);
        child.setInheritedAttributes(attributes, display, level, prime);
    };
    MathChoice.defaults = __assign({}, MmlNode_js_1.AbstractMmlBaseNode.defaults);
    return MathChoice;
}(MmlNode_js_1.AbstractMmlBaseNode));
exports.MathChoice = MathChoice;
//# sourceMappingURL=mathchoice.js.map

/***/ }),

/***/ 53583:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MmlMerror = void 0;
var MmlNode_js_1 = __webpack_require__(18426);
var MmlMerror = (function (_super) {
    __extends(MmlMerror, _super);
    function MmlMerror() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.texclass = MmlNode_js_1.TEXCLASS.ORD;
        return _this;
    }
    Object.defineProperty(MmlMerror.prototype, "kind", {
        get: function () {
            return 'merror';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MmlMerror.prototype, "arity", {
        get: function () {
            return -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MmlMerror.prototype, "linebreakContainer", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    MmlMerror.defaults = __assign({}, MmlNode_js_1.AbstractMmlNode.defaults);
    return MmlMerror;
}(MmlNode_js_1.AbstractMmlNode));
exports.MmlMerror = MmlMerror;
//# sourceMappingURL=merror.js.map

/***/ }),

/***/ 15837:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MmlMphantom = void 0;
var MmlNode_js_1 = __webpack_require__(18426);
var MmlMphantom = (function (_super) {
    __extends(MmlMphantom, _super);
    function MmlMphantom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.texclass = MmlNode_js_1.TEXCLASS.ORD;
        return _this;
    }
    Object.defineProperty(MmlMphantom.prototype, "kind", {
        get: function () {
            return 'mphantom';
        },
        enumerable: false,
        configurable: true
    });
    MmlMphantom.defaults = __assign({}, MmlNode_js_1.AbstractMmlLayoutNode.defaults);
    return MmlMphantom;
}(MmlNode_js_1.AbstractMmlLayoutNode));
exports.MmlMphantom = MmlMphantom;
//# sourceMappingURL=mphantom.js.map

/***/ }),

/***/ 95546:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MmlMstyle = void 0;
var MmlNode_js_1 = __webpack_require__(18426);
var Attributes_js_1 = __webpack_require__(7013);
var MmlMstyle = (function (_super) {
    __extends(MmlMstyle, _super);
    function MmlMstyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MmlMstyle.prototype, "kind", {
        get: function () {
            return 'mstyle';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MmlMstyle.prototype, "notParent", {
        get: function () {
            return this.childNodes[0] && this.childNodes[0].childNodes.length === 1;
        },
        enumerable: false,
        configurable: true
    });
    MmlMstyle.prototype.setChildInheritedAttributes = function (attributes, display, level, prime) {
        var scriptlevel = this.attributes.getExplicit('scriptlevel');
        if (scriptlevel != null) {
            scriptlevel = scriptlevel.toString();
            if (scriptlevel.match(/^\s*[-+]/)) {
                level += parseInt(scriptlevel);
            }
            else {
                level = parseInt(scriptlevel);
            }
            prime = false;
        }
        var displaystyle = this.attributes.getExplicit('displaystyle');
        if (displaystyle != null) {
            display = (displaystyle === true);
            prime = false;
        }
        var cramped = this.attributes.getExplicit('data-cramped');
        if (cramped != null) {
            prime = cramped;
        }
        attributes = this.addInheritedAttributes(attributes, this.attributes.getAllAttributes());
        this.childNodes[0].setInheritedAttributes(attributes, display, level, prime);
    };
    MmlMstyle.defaults = __assign(__assign({}, MmlNode_js_1.AbstractMmlLayoutNode.defaults), { scriptlevel: Attributes_js_1.INHERIT, displaystyle: Attributes_js_1.INHERIT, scriptsizemultiplier: 1 / Math.sqrt(2), scriptminsize: '8px', mathbackground: Attributes_js_1.INHERIT, mathcolor: Attributes_js_1.INHERIT, dir: Attributes_js_1.INHERIT, infixlinebreakstyle: 'before' });
    return MmlMstyle;
}(MmlNode_js_1.AbstractMmlLayoutNode));
exports.MmlMstyle = MmlMstyle;
//# sourceMappingURL=mstyle.js.map

/***/ }),

/***/ 88100:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractNodeFactory = void 0;
var Factory_js_1 = __webpack_require__(86161);
var AbstractNodeFactory = (function (_super) {
    __extends(AbstractNodeFactory, _super);
    function AbstractNodeFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbstractNodeFactory.prototype.create = function (kind, properties, children) {
        if (properties === void 0) { properties = {}; }
        if (children === void 0) { children = []; }
        return this.node[kind](properties, children);
    };
    return AbstractNodeFactory;
}(Factory_js_1.AbstractFactory));
exports.AbstractNodeFactory = AbstractNodeFactory;
//# sourceMappingURL=NodeFactory.js.map

/***/ })

}]);
//# sourceMappingURL=1448.6e406954ae6569b8ddf6.js.map?v=6e406954ae6569b8ddf6