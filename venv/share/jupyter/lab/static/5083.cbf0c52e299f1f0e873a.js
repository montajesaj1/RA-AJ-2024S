"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([[5083],{

/***/ 25083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Accordion": () => (/* reexport */ Accordion),
  "AccordionItem": () => (/* reexport */ AccordionItem),
  "Anchor": () => (/* reexport */ Anchor),
  "AnchoredRegion": () => (/* reexport */ AnchoredRegion),
  "Avatar": () => (/* reexport */ Avatar),
  "Badge": () => (/* reexport */ Badge),
  "Breadcrumb": () => (/* reexport */ Breadcrumb),
  "BreadcrumbItem": () => (/* reexport */ BreadcrumbItem),
  "Button": () => (/* reexport */ Button),
  "Card": () => (/* reexport */ Card),
  "Checkbox": () => (/* reexport */ Checkbox),
  "Combobox": () => (/* reexport */ Combobox),
  "DataGrid": () => (/* reexport */ DataGrid),
  "DataGridCell": () => (/* reexport */ DataGridCell),
  "DataGridRow": () => (/* reexport */ DataGridRow),
  "DateField": () => (/* reexport */ DateField),
  "DesignSystemProvider": () => (/* reexport */ DesignSystemProvider),
  "Dialog": () => (/* reexport */ Dialog),
  "Disclosure": () => (/* reexport */ Disclosure),
  "Divider": () => (/* reexport */ Divider),
  "Listbox": () => (/* reexport */ Listbox),
  "Menu": () => (/* reexport */ Menu),
  "MenuItem": () => (/* reexport */ MenuItem),
  "NumberField": () => (/* reexport */ NumberField),
  "Option": () => (/* reexport */ Option),
  "Picker": () => (/* reexport */ Picker),
  "Progress": () => (/* reexport */ Progress),
  "ProgressRing": () => (/* reexport */ ProgressRing),
  "Radio": () => (/* reexport */ Radio),
  "RadioGroup": () => (/* reexport */ RadioGroup),
  "Search": () => (/* reexport */ Search),
  "Select": () => (/* reexport */ Select),
  "Skeleton": () => (/* reexport */ Skeleton),
  "Slider": () => (/* reexport */ Slider),
  "SliderLabel": () => (/* reexport */ SliderLabel),
  "Switch": () => (/* reexport */ Switch),
  "Tab": () => (/* reexport */ Tab),
  "TabPanel": () => (/* reexport */ TabPanel),
  "Tabs": () => (/* reexport */ Tabs),
  "TextArea": () => (/* reexport */ TextArea),
  "TextField": () => (/* reexport */ TextField),
  "Toolbar": () => (/* reexport */ Toolbar),
  "Tooltip": () => (/* reexport */ Tooltip),
  "TreeItem": () => (/* reexport */ TreeItem),
  "TreeView": () => (/* reexport */ TreeView),
  "wrap": () => (/* reexport */ wrap)
});

// EXTERNAL MODULE: consume shared module (default) @jupyter/web-components@~0.15.3 (singleton) (fallback: ./node_modules/@jupyter/web-components/dist/esm/index.js)
var index_js_ = __webpack_require__(13710);
// EXTERNAL MODULE: consume shared module (default) @microsoft/fast-element@^1.12.0 (singleton) (fallback: ./node_modules/@microsoft/fast-element/dist/esm/index.js)
var esm_index_js_ = __webpack_require__(81351);
// EXTERNAL MODULE: consume shared module (default) @microsoft/fast-foundation@^2.49.2 (singleton) (fallback: ./node_modules/@microsoft/fast-foundation/dist/esm/index.js)
var dist_esm_index_js_ = __webpack_require__(16904);
;// CONCATENATED MODULE: ./node_modules/@microsoft/fast-react-wrapper/dist/esm/index.js


const reservedReactProperties = new Set([
    "children",
    "localName",
    "ref",
    "style",
    "className",
]);
const emptyProps = Object.freeze(Object.create(null));
const DEFAULT_CACHE_NAME = "_default";
// This will be a two levels cache Map<type, Map<name, ReactWrapper>>
// to distinguish components of same type but different tag name.
// Default name: '_default'
const wrappersCache = new Map();
// There are 2 kinds of refs and there's no built in React API to set one.
function setRef(ref, value) {
    if (typeof ref === "function") {
        ref(value);
    }
    else {
        ref.current = value;
    }
}
function getTagName(type, config) {
    if (!config.name) {
        /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
        const definition = esm_index_js_.FASTElementDefinition.forType(type);
        if (definition) {
            config.name = definition.name;
        }
        else {
            throw new Error("React wrappers must wrap a FASTElement or be configured with a name.");
        }
    }
    return config.name;
}
function getElementEvents(config) {
    return config.events || (config.events = {});
}
function keyIsValid(type, config, name) {
    if (reservedReactProperties.has(name)) {
        console.warn(`${getTagName(type, config)} contains property ${name} which is a React ` +
            `reserved property. It will be used by React and not set on ` +
            `the element.`);
        return false;
    }
    return true;
}
function getElementKeys(type, config) {
    if (!config.keys) {
        if (config.properties) {
            config.keys = new Set(config.properties.concat(Object.keys(getElementEvents(config))));
        }
        else {
            const keys = new Set(Object.keys(getElementEvents(config)));
            const accessors = esm_index_js_.Observable.getAccessors(type.prototype);
            if (accessors.length > 0) {
                for (const a of accessors) {
                    if (keyIsValid(type, config, a.name)) {
                        keys.add(a.name);
                    }
                }
            }
            else {
                for (const p in type.prototype) {
                    if (!(p in HTMLElement.prototype) && keyIsValid(type, config, p)) {
                        keys.add(p);
                    }
                }
            }
            config.keys = keys;
        }
    }
    return config.keys;
}
/**
 * @param React - The React module, typically imported from the `react` npm
 * package
 * @param designSystem - A design system to register the components with.
 * @public
 */
function provideReactWrapper(React, designSystem) {
    let registrations = [];
    const registry = {
        register(container, ...rest) {
            registrations.forEach(x => x.register(container, ...rest));
            registrations = [];
        },
    };
    function wrap(type, config = {}) {
        var _a, _b;
        if (type instanceof dist_esm_index_js_.FoundationElementRegistry) {
            if (designSystem) {
                designSystem.register(type);
            }
            else {
                registrations.push(type);
            }
            type = type.type;
        }
        const cachedCandidates = wrappersCache.get(type);
        if (cachedCandidates) {
            const cachedWrapper = cachedCandidates.get((_a = config.name) !== null && _a !== void 0 ? _a : DEFAULT_CACHE_NAME);
            if (cachedWrapper) {
                return cachedWrapper;
            }
        }
        class ReactComponent extends React.Component {
            constructor() {
                super(...arguments);
                this._element = null;
            }
            _updateElement(oldProps) {
                const element = this._element;
                if (element === null) {
                    return;
                }
                const currentProps = this.props;
                const previousProps = oldProps || emptyProps;
                const events = getElementEvents(config);
                for (const key in this._elementProps) {
                    const newValue = currentProps[key];
                    const event = events[key];
                    if (event === undefined) {
                        element[key] = newValue;
                    }
                    else {
                        const oldValue = previousProps[key];
                        if (newValue === oldValue) {
                            continue;
                        }
                        if (oldValue !== undefined) {
                            element.removeEventListener(event, oldValue);
                        }
                        if (newValue !== undefined) {
                            element.addEventListener(event, newValue);
                        }
                    }
                }
            }
            componentDidMount() {
                this._updateElement();
            }
            componentDidUpdate(old) {
                this._updateElement(old);
            }
            render() {
                // Since refs only get fulfilled once, pass a new one if the user's
                // ref changed. This allows refs to be fulfilled as expected, going from
                // having a value to null.
                const userRef = this.props.__forwardedRef;
                if (this._ref === undefined || this._userRef !== userRef) {
                    this._ref = (value) => {
                        if (this._element === null) {
                            this._element = value;
                        }
                        if (userRef !== null) {
                            setRef(userRef, value);
                        }
                        this._userRef = userRef;
                    };
                }
                // Filter class properties and pass the remaining attributes to React.
                // This allows attributes to use framework rules
                // for setting attributes and render correctly under SSR.
                const newReactProps = { ref: this._ref };
                const newElementProps = (this._elementProps = {});
                const elementKeys = getElementKeys(type, config);
                const currentProps = this.props;
                for (const k in currentProps) {
                    const v = currentProps[k];
                    if (elementKeys.has(k)) {
                        newElementProps[k] = v;
                    }
                    else {
                        // React does *not* handle `className` for custom elements so
                        // coerce it to `class` so it's handled correctly.
                        newReactProps[k === "className" ? "class" : k] = v;
                    }
                }
                return React.createElement(getTagName(type, config), newReactProps);
            }
        }
        const reactComponent = React.forwardRef((props, ref) => React.createElement(ReactComponent, Object.assign(Object.assign({}, props), { __forwardedRef: ref }), props === null || props === void 0 ? void 0 : props.children));
        if (!wrappersCache.has(type)) {
            wrappersCache.set(type, new Map());
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        wrappersCache.get(type).set((_b = config.name) !== null && _b !== void 0 ? _b : DEFAULT_CACHE_NAME, reactComponent);
        return reactComponent;
    }
    return { wrap, registry };
}

// EXTERNAL MODULE: consume shared module (default) react@^18.2.0 (singleton) (fallback: ./node_modules/react/index.js)
var react_index_js_ = __webpack_require__(28416);
var react_index_js_default = /*#__PURE__*/__webpack_require__.n(react_index_js_);
;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/wrap.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.



const { wrap } = provideReactWrapper((react_index_js_default()), (0,index_js_.provideJupyterDesignSystem)());

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/accordion/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Accordion = wrap((0,index_js_.jpAccordion)(), { events: { onChange: 'change' } });
// @ts-expect-error unknown property
Accordion.displayName = 'Jupyter.Accordion';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/accordion-item/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const AccordionItem = wrap((0,index_js_.jpAccordionItem)(), { events: { onChange: 'change' } });
// @ts-expect-error unknown property
AccordionItem.displayName = 'Jupyter.AccordionItem';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/anchor/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Anchor = wrap((0,index_js_.jpAnchor)());
// @ts-expect-error unknown property
Anchor.displayName = 'Jupyter.Anchor';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/anchored-region/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const AnchoredRegion = wrap((0,index_js_.jpAnchoredRegion)());
// @ts-expect-error unknown property
AnchoredRegion.displayName = 'Jupyter.AnchoredRegion';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/avatar/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Avatar = wrap((0,index_js_.jpAvatar)());
// @ts-expect-error unknown property
Avatar.displayName = 'Jupyter.Avatar';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/badge/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Badge = wrap((0,index_js_.jpBadge)());
// @ts-expect-error unknown property
Badge.displayName = 'Jupyter.Badge';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/breadcrumb/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Breadcrumb = wrap((0,index_js_.jpBreadcrumb)());
// @ts-expect-error unknown property
Breadcrumb.displayName = 'Jupyter.Breadcrumb';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/breadcrumb-item/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const BreadcrumbItem = wrap((0,index_js_.jpBreadcrumbItem)());
// @ts-expect-error unknown property
BreadcrumbItem.displayName = 'Jupyter.BreadcrumbItem';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/button/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Button = wrap((0,index_js_.jpButton)());
// @ts-expect-error unknown property
Button.displayName = 'Jupyter.Button';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/card/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Card = wrap((0,index_js_.jpCard)());
// @ts-expect-error unknown property
Card.displayName = 'Jupyter.Card';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/checkbox/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Checkbox = wrap((0,index_js_.jpCheckbox)(), { events: { onChange: 'change' } });
// @ts-expect-error unknown property
Checkbox.displayName = 'Jupyter.Checkbox';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/combobox/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Combobox = wrap((0,index_js_.jpCombobox)(), {
    events: {
        onChange: 'change',
        onInput: 'input'
    }
});
// @ts-expect-error unknown property
Combobox.displayName = 'Jupyter.Combobox';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/data-grid/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


// WARNING The wrapping needs to be called in order (from bottom to top DOM elements)
// Otherwise during the wrapping the tag for sub elements won't be resolved and this
// will contaminate the standard web component.
const DataGridCell = wrap((0,index_js_.jpDataGridCell)(), {
    events: { onFocus: 'cell-focused' }
});
// @ts-expect-error unknown property
DataGridCell.displayName = 'Jupyter.DataGridCell';
const DataGridRow = wrap((0,index_js_.jpDataGridRow)(), { events: { onFocus: 'row-focused' } });
// @ts-expect-error unknown property
DataGridRow.displayName = 'Jupyter.DataGridRow';
const DataGrid = wrap((0,index_js_.jpDataGrid)());
// @ts-expect-error unknown property
DataGrid.displayName = 'Jupyter.DataGrid';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/date-field/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const DateField = wrap((0,index_js_.jpDateField)(), {
    events: { onChange: 'change' }
});
// @ts-expect-error unknown property
DateField.displayName = 'Jupyter.DateField';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/design-system-provider/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const DesignSystemProvider = wrap((0,index_js_.jpDesignSystemProvider)());
// @ts-expect-error unknown property
DesignSystemProvider.displayName = 'Jupyter.DesignSystemProvider';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/dialog/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Dialog = wrap((0,index_js_.jpDialog)());
// @ts-expect-error unknown property
Dialog.displayName = 'Jupyter.Dialog';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/disclosure/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Disclosure = wrap((0,index_js_.jpDisclosure)(), {
    events: { onToggle: 'toggle' }
});
// @ts-expect-error unknown property
Disclosure.displayName = 'Jupyter.Disclosure';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/divider/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Divider = wrap((0,index_js_.jpDivider)());
// @ts-expect-error unknown property
Divider.displayName = 'Jupyter.Divider';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/listbox/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Listbox = wrap((0,index_js_.jpListbox)());
// @ts-expect-error unknown property
Listbox.displayName = 'Jupyter.Listbox';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/menu/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Menu = wrap((0,index_js_.jpMenu)());
// @ts-expect-error unknown property
Menu.displayName = 'Jupyter.Menu';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/menu-item/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const MenuItem = wrap((0,index_js_.jpMenuItem)(), { events: { onExpand: 'expanded-change' } });
// @ts-expect-error unknown property
MenuItem.displayName = 'Jupyter.MenuItem';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/number-field/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const NumberField = wrap((0,index_js_.jpNumberField)(), {
    events: { onChange: 'change', onInput: 'input' }
});
// @ts-expect-error unknown property
NumberField.displayName = 'Jupyter.NumberField';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/option/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Option = wrap((0,index_js_.jpOption)());
// @ts-expect-error unknown property
Option.displayName = 'Juypter.Option';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/progress/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Progress = wrap((0,index_js_.jpProgress)(), { name: 'jp-progress' });
// @ts-expect-error unknown property
Progress.displayName = 'Jupyter.Progress';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/progress-ring/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const ProgressRing = wrap((0,index_js_.jpProgressRing)(), 
// Name need to be exported otherwise a `jp-progress` element is instantiated
{ name: 'jp-progress-ring' });
// @ts-expect-error unknown property
ProgressRing.displayName = 'Jupyter.ProgressRing';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/radio/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Radio = wrap((0,index_js_.jpRadio)(), { events: { onChange: 'change' } });
// @ts-expect-error unknown property
Radio.displayName = 'Jupyter.Radio';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/radio-group/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const RadioGroup = wrap((0,index_js_.jpRadioGroup)(), { events: { onChange: 'change' } });
// @ts-expect-error unknown property
RadioGroup.displayName = 'Jupyter.RadioGroup';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/search/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Search = wrap((0,index_js_.jpSearch)(), {
    events: {
        onChange: 'change',
        onInput: 'input'
    }
});
// @ts-expect-error unknown property
Search.displayName = 'Jupyter.Search';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/select/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Select = wrap((0,index_js_.jpSelect)(), {
    events: {
        onChange: 'change',
        onInput: 'input'
    }
});
// @ts-expect-error unknown property
Select.displayName = 'Jupyter.Select';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/skeleton/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Skeleton = wrap((0,index_js_.jpSkeleton)());
// @ts-expect-error unknown property
Skeleton.displayName = 'Jupyter.Skeleton';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/slider/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Slider = wrap((0,index_js_.jpSlider)(), { events: { onChange: 'change' } });
// @ts-expect-error unknown property
Slider.displayName = 'Jupyter.Slider';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/slider-label/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const SliderLabel = wrap((0,index_js_.jpSliderLabel)());
// @ts-expect-error unknown property
SliderLabel.displayName = 'Jupyter.SliderLabel';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/switch/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Switch = wrap((0,index_js_.jpSwitch)(), { events: { onChange: 'change' } });
// @ts-expect-error unknown property
Switch.displayName = 'Jupyter.Switch';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/tab-panel/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const TabPanel = wrap((0,index_js_.jpTabPanel)());
// @ts-expect-error unknown property
TabPanel.displayName = 'Jupyter.TabPanel';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/tab/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Tab = wrap((0,index_js_.jpTab)());
// @ts-expect-error unknown property
Tab.displayName = 'Jupyter.Tab';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/tabs/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Tabs = wrap((0,index_js_.jpTabs)(), { events: { onChange: 'change' } });
// @ts-expect-error unknown property
Tabs.displayName = 'Jupyter.Tabs';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/text-area/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const TextArea = wrap((0,index_js_.jpTextArea)(), {
    events: { onChange: 'change' }
});
// @ts-expect-error unknown property
TextArea.displayName = 'Jupyter.TextArea';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/text-field/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const TextField = wrap((0,index_js_.jpTextField)(), {
    events: { onChange: 'change', onInput: 'input' }
});
// @ts-expect-error unknown property
TextField.displayName = 'Jupyter.TextField';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/toolbar/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Toolbar = wrap((0,index_js_.jpToolbar)());
// @ts-expect-error unknown property
Toolbar.displayName = 'Jupyter.Toolbar';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/tooltip/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const Tooltip = wrap((0,index_js_.jpTooltip)());
// @ts-expect-error unknown property
Tooltip.displayName = 'Jupyter.Tooltip';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/tree-item/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const TreeItem = wrap((0,index_js_.jpTreeItem)(), {
    events: { onExpand: 'expanded-change', onSelect: 'selected-change' }
});
// @ts-expect-error unknown property
TreeItem.displayName = 'Jupyter.TreeItem';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/tree-view/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


const TreeView = wrap((0,index_js_.jpTreeView)());
// @ts-expect-error unknown property
TreeView.displayName = 'Jupyter.TreeView';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/drafts/picker/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


/**
 * @alpha
 */
const Picker = wrap((0,index_js_.jpPicker)(), {
    events: {
        onChange: 'change',
        onInput: 'input'
    }
});
// @ts-expect-error unknown property
Picker.displayName = 'Jupyter.Picker';

;// CONCATENATED MODULE: ./node_modules/@jupyter/react-components/lib/index.js
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.














































/***/ })

}]);
//# sourceMappingURL=5083.cbf0c52e299f1f0e873a.js.map?v=cbf0c52e299f1f0e873a