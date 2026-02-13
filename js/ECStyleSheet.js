class ECStyleSheet {
    constructor(options = {}) {
        this.breakpoints = {
            mobile: { type: "max", width: "767px" },
            tablet: { type: "range", min: "768px", max: "1023px" },
            pc: { type: "min", width: "1024px" }
        };
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
        if (this.cache.has(className)) return;
        if (!className.includes("-")) return;
        const parts = className.split(":");
        let media = null;
        let pseudo = null;
        let base = parts.pop();
        parts.forEach(part => {
            if (this.breakpoints[part]) media = part;
            else pseudo = part;
        });
        if (!base.includes("-")) return;
        const [propertyRaw, ...valueParts] = base.split("-");
        const value = valueParts.join("-");
        if (!propertyRaw || !value) return;
        const property = this.toKebabCase(propertyRaw);
        if (!(property in document.body.style)) return;
        this.cache.add(className);
        const escapedClass = CSS.escape(className);
        let rule = `.${escapedClass}${pseudo ? ":" + pseudo : ""} { ${property}: ${value}; }`;
        if (media) {
            rule = this.wrapWithMedia(rule, media);
        }
        this.styleTag.sheet.insertRule(rule, this.styleTag.sheet.cssRules.length);
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