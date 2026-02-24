class ECStyleSheet {
    constructor(options = {}) {
        this.breakpoints = {
            mobile: { type: "max", width: "767px" },
            tablet: { type: "range", min: "768px", max: "1023px" },
            pc: { type: "min", width: "1024px" }
        };
        this.ecClasses = [
            /ecgrid-(\d+)x(\d+)/,
            /ecbounceanimation-(\d+)/,
            /eclisthc-(\d+)/,
            /eclisthf-(\d+)/,
            /eclistho-(\d+)/,
            /eclisth/,
            /eclistvc-(\d+)/,
            /eclistvf-(\d+)/,
            /eclistvo-(\d+)/,
            /eclistv/
        ];
        this.cache = new Set();
        this.styleTag = this.createStyleTag();
        this.scan();
        this.observe();
    }
    createStyleTag() {
        const tag = document.createElement("style");
        tag.id = "ec-styles";
        document.head.appendChild(tag);
        return tag;
    }
    scan(root = document) {
        const elements = root.querySelectorAll("*");
        elements.forEach(el => {
            el.classList.forEach(className => {
                this.processClass(className);
            });
        });
    }
    processClass(className) {
        if (this.cache.has(className)){
            return;
        }
        if (!className.includes("-") && !this.ecClasses.some(regex => regex.test(className))){
            return;
        }
        const parts = className.split(":");
        let media = null;
        let pseudo = null;
        let base = parts.pop();
        parts.forEach(part => {
            if (this.breakpoints[part]) media = part;
            else pseudo = part;
        });
        const ecMatch = this.ecClasses.map(regex => className.match(regex)).find(match => match);
        if (ecMatch){
            this.cache.add(className);
            const escaped = CSS.escape(className);
            const selector = `.${escaped}${pseudo ? ":" + pseudo : ""}`;
            const rules = this.generateECGroupStyles(selector, ecMatch);
            rules.forEach(rule => {
                const finalRule = media ? this.wrapWithMedia(rule, media) : rule;
                this.styleTag.sheet.insertRule(finalRule, this.styleTag.sheet.cssRules.length);
            });
        } else {
            if (!base.includes("-")){
                return;
            }
            const [propertyRaw, ...valueParts] = base.split("-");
            const value = valueParts.join("-");
            if (!propertyRaw || !value){
                return;
            }
            const property = this.toKebabCase(propertyRaw);
            if (!(property in document.body.style)){
                return;
            }
            this.cache.add(className);
            const escapedClass = CSS.escape(className);
            let rule = `.${escapedClass}${pseudo ? ":" + pseudo : ""} { ${property}: ${/\[.*\]/.test(value) ? value.replaceAll(/\[|\]/g, '').replaceAll('_', ' ') : value}; }`;
            if (media) {
                rule = this.wrapWithMedia(rule, media);
            }
            this.styleTag.sheet.insertRule(rule, this.styleTag.sheet.cssRules.length);
        }
    }
    generateECGroupStyles(selector, match){
        const rules = [];
        // GRID
        if (match[0].startsWith("ecgrid-")){
            const [_, cols, rows] = match;
            rules.push(`${selector} { display:grid; grid-template-columns:repeat(${cols},1fr); grid-template-rows:repeat(${rows},1fr); }`);
            return rules;
        }
        // BOUNCE ANIMATION
        if (match[0].startsWith("ecbounceanimation-")){
            const [_, amount] = match;
            rules.push(`${selector} { transition: 0.2s; }`);
            rules.push(`${selector}:hover { transform: scale(${1 + (Number(amount) / 100)}); }`);
            rules.push(`${selector}:active { transform: scale(${1 - (Number(amount) / 100)}); }`);
            return rules;
        }
        // HORIZONTAL LIST
        if (match[0].includes("eclisth")) {
            const size = match[1] ? `${match[1]}px` : '0px';
            const half = match[1] ? `${Math.round(match[1]/2)}px` : '0px';
            rules.push(`${selector} { display:flex; flex-direction:row; }`);
            let type = match[0].replace("eclisth", "");
            if (type.includes('c')) {
                rules.push(`${selector} > * { border-radius:${half}; }`);
                rules.push(`${selector} > *:first-child { border-top-left-radius:${size}; border-bottom-left-radius:${size}; }`);
                rules.push(`${selector} > *:last-child { border-top-right-radius:${size}; border-bottom-right-radius:${size}; }`);
            } else if (type.includes('o')) {
                rules.push(`${selector} > *:first-child { border-top-left-radius:${size}; border-bottom-left-radius:${size}; }`);
                rules.push(`${selector} > *:last-child { border-top-right-radius:${size}; border-bottom-right-radius:${size}; }`);
            } else if (type.includes('f')) {
                rules.push(`${selector} > * { border-radius:${size}; }`);
            }
        }
        // VERTICAL LIST
        if (match[0].includes("eclistv")) {
            const size = match[1] ? `${match[1]}px` : '0px';
            const half = match[1] ? `${Math.round(match[1]/2)}px` : '0px';
            rules.push(`${selector} { display:flex; flex-direction:column; }`);
            let type = match[0].replace("eclistv", "");
            if (type.includes('c')) {
                rules.push(`${selector} > * { border-radius:${half}; }`);
                rules.push(`${selector} > *:first-child { border-top-left-radius:${size}; border-top-right-radius:${size}; }`);
                rules.push(`${selector} > *:last-child { border-bottom-left-radius:${size}; border-bottom-right-radius:${size}; }`);
            } else if (type.includes('o')) {
                rules.push(`${selector} > *:first-child { border-top-left-radius:${size}; border-top-right-radius:${size}; }`);
                rules.push(`${selector} > *:last-child { border-bottom-left-radius:${size}; border-bottom-right-radius:${size}; }`);
            } else if (type.includes('f')) {
                rules.push(`${selector} > * { border-radius:${size}; }`);
            }
        }
        return rules;
    }
    wrapWithMedia(rule, key) {
        const bp = this.breakpoints[key];
        if (bp.type === "max") {
            return `@media (max-width: ${bp.width}) { ${rule} }`;
        }
        if (bp.type === "min") {
            return `@media (min-width: ${bp.width}) { ${rule} }`;
        }
        if (bp.type === "range") {
            return `@media (min-width: ${bp.min}) and (max-width: ${bp.max}) { ${rule} }`;
        }
        return rule;
    }
    observe() {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) {
                        this.scan(node);
                    }
                });
            });
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    toKebabCase(str) {
        return str.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
    }
}
window.addEventListener('DOMContentLoaded', () => new ECStyleSheet());