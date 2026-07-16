(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/shared/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Утилита для объединения CSS-классов.
 * Используется вместо clsx/classnames для минимизации зависимостей.
 */ __turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatCredits",
    ()=>formatCredits,
    "generateId",
    ()=>generateId,
    "mockDelay",
    ()=>mockDelay
]);
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
function formatCredits(credits) {
    return new Intl.NumberFormat("ru-RU").format(credits);
}
function generateId() {
    return `id-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
function mockDelay(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/lib/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/lib/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
const variantStyles = {
    primary: "bg-white hover:bg-white/90 text-black shadow-lg hover:shadow-white/20",
    secondary: "glass glass-hover text-[var(--color-text-primary)]",
    ghost: "bg-transparent hover:bg-white/5 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
    outline: "bg-transparent border border-[var(--color-surface-border)] hover:border-[var(--color-accent)] text-[var(--color-text-primary)] hover:text-[var(--color-accent)]"
};
const sizeStyles = {
    sm: "px-3 py-1.5 text-sm rounded-lg gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-xl gap-2",
    lg: "px-7 py-3.5 text-base rounded-xl gap-2.5"
};
/**
 * Базовая кнопка.
 * Варианты: primary (акцентная), secondary (glass), ghost (прозрачная), outline (обводка).
 */ const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ variant = "primary", size = "md", children, leftIcon, rightIcon, isLoading = false, disabled, className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        disabled: disabled || isLoading,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none", "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none", "active:scale-[0.97]", variantStyles[variant], sizeStyles[size], className),
        ...props,
        children: [
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "animate-spin h-4 w-4",
                viewBox: "0 0 24 24",
                fill: "none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        className: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/button.tsx",
                        lineNumber: 77,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/button.tsx",
                        lineNumber: 85,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/ui/button.tsx",
                lineNumber: 72,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : leftIcon,
            children,
            rightIcon
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/button.tsx",
        lineNumber: 58,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/ui/modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Modal",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/lib/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const sizeStyles = {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl"
};
function Modal({ isOpen, onClose, title, children, className, size = "md" }) {
    _s();
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            if (!isOpen) return;
            const handleEscape = {
                "Modal.useEffect.handleEscape": (e)=>{
                    if (e.key === "Escape") onClose();
                }
            }["Modal.useEffect.handleEscape"];
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
            return ({
                "Modal.useEffect": ()=>{
                    document.removeEventListener("keydown", handleEscape);
                    document.body.style.overflow = "";
                }
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"], [
        isOpen,
        onClose
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: overlayRef,
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        onClick: (e)=>{
            if (e.target === overlayRef.current) onClose();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in-up"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/modal.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative w-full glass rounded-2xl shadow-2xl animate-fade-in-up", sizeStyles[size], className),
                children: [
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-6 py-4 border-b border-[var(--color-surface-border)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-[var(--color-text-primary)]",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/modal.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-1 rounded-lg hover:bg-white/10 transition-colors text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
                                "aria-label": "Закрыть",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M15 5L5 15M5 5l10 10",
                                        stroke: "currentColor",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/ui/modal.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/ui/modal.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/modal.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/ui/modal.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-5",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/modal.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/ui/modal.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/modal.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(Modal, "rmj6vZ+Vy6O1wOWphXugz2fiTMw=");
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/ui/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/modal.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/widgets/landing-hero/ui/wireframe-globe.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WireframeGlobe",
    ()=>WireframeGlobe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$postprocessing$2f$EffectComposer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/postprocessing/EffectComposer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$postprocessing$2f$RenderPass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/postprocessing/RenderPass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$postprocessing$2f$ShaderPass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/postprocessing/ShaderPass.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const PHOTOS = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=600&auto=format&fit=crop"
];
// Шейдер для полноэкранной рефракции (Glass / Liquid Distortion)
const LiquidShader = {
    uniforms: {
        tDiffuse: {
            value: null
        },
        uTime: {
            value: 0
        },
        uScrollVelocity: {
            value: 0
        }
    },
    vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uScrollVelocity;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      
      // Плавное искажение, имитирующее рефракцию стекла или жидкости
      // Интенсивность искажения увеличивается при скролле
      float intensity = 0.005 + abs(uScrollVelocity) * 0.02;
      float noiseX = sin(uv.y * 8.0 + uTime * 2.0) * intensity;
      float noiseY = cos(uv.x * 8.0 + uTime * 2.0) * intensity;
      
      vec2 distortedUv = uv + vec2(noiseX, noiseY);
      
      // Читаем пиксель со сдвигом, без цветовых аберраций, чтобы цвета оставались естественными
      gl_FragColor = texture2D(tDiffuse, distortedUv);
    }
  `
};
function WireframeGlobe() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const rendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const scrollYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastScrollYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollVelocityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WireframeGlobe.useCallback[handleMouseMove]": (e)=>{
            mouseRef.current.x = e.clientX / window.innerWidth * 2 - 1;
            mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        }
    }["WireframeGlobe.useCallback[handleMouseMove]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WireframeGlobe.useEffect": ()=>{
            isMountedRef.current = true;
            const container = containerRef.current;
            if (!container) return;
            const disposables = [];
            // Scene
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            // Camera
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](60, container.clientWidth / container.clientHeight, 0.1, 1000);
            camera.position.z = 5.5; // Чуть дальше, чтобы вместить картинки
            // Renderer
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                antialias: true,
                alpha: true,
                powerPreference: "high-performance"
            });
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setClearColor(0x000000, 0); // Прозрачный фон
            container.appendChild(renderer.domElement);
            rendererRef.current = renderer;
            // Post-processing
            const composer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$postprocessing$2f$EffectComposer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectComposer"](renderer);
            const renderPass = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$postprocessing$2f$RenderPass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderPass"](scene, camera);
            // Делаем фон RenderPass прозрачным
            renderPass.clearColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0, 0, 0);
            renderPass.clearAlpha = 0;
            composer.addPass(renderPass);
            const liquidPass = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$postprocessing$2f$ShaderPass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderPass"](LiquidShader);
            composer.addPass(liquidPass);
            // 1. Глобус (сферы и точки)
            const globeGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
            const sphereGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](2.2, 36, 24);
            const wireframeMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: 0xffffff,
                wireframe: true,
                transparent: true,
                opacity: 0.08
            });
            const sphere = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](sphereGeometry, wireframeMaterial);
            globeGroup.add(sphere);
            const innerGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](2.15, 18, 12);
            const innerMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: 0x60a5fa,
                wireframe: true,
                transparent: true,
                opacity: 0.04
            });
            const innerSphere = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](innerGeometry, innerMaterial);
            globeGroup.add(innerSphere);
            const dotGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            const positions = sphereGeometry.attributes.position;
            const dotPositions = new Float32Array(positions.count * 3);
            for(let i = 0; i < positions.count; i++){
                dotPositions[i * 3] = positions.getX(i);
                dotPositions[i * 3 + 1] = positions.getY(i);
                dotPositions[i * 3 + 2] = positions.getZ(i);
            }
            dotGeometry.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](dotPositions, 3));
            const dotMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                color: 0xffffff,
                size: 0.015,
                transparent: true,
                opacity: 0.3
            });
            const dots = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](dotGeometry, dotMaterial);
            globeGroup.add(dots);
            scene.add(globeGroup);
            disposables.push(sphereGeometry, wireframeMaterial, innerGeometry, innerMaterial, dotGeometry, dotMaterial);
            // 2. Свет
            const ambientLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientLight"](0x3b82f6, 0.4);
            scene.add(ambientLight);
            // 3. Плавающие картинки (Textures + Planes)
            const textureLoader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]();
            const planes = [];
            const planeConfigs = [
                {
                    x: -3.8,
                    y: 1.5,
                    z: 2.0,
                    rotZ: -0.15,
                    w: 1.6,
                    h: 1.2
                },
                {
                    x: 4.0,
                    y: 1.2,
                    z: -1.0,
                    rotZ: 0.1,
                    w: 1.3,
                    h: 1.7
                },
                {
                    x: 3.5,
                    y: -2.0,
                    z: 1.5,
                    rotZ: -0.1,
                    w: 1.8,
                    h: 1.3
                },
                {
                    x: -3.2,
                    y: -2.2,
                    z: 0.5,
                    rotZ: 0.2,
                    w: 1.5,
                    h: 1.0
                }
            ];
            PHOTOS.forEach({
                "WireframeGlobe.useEffect": (url, i)=>{
                    textureLoader.load(url, {
                        "WireframeGlobe.useEffect": (texture)=>{
                            if (!isMountedRef.current) {
                                texture.dispose();
                                return;
                            }
                            texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                            const config = planeConfigs[i];
                            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](config.w, config.h);
                            const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                                map: texture,
                                transparent: true,
                                opacity: 0,
                                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
                            });
                            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometry, material);
                            mesh.position.set(config.x, config.y, config.z);
                            mesh.rotation.z = config.rotZ;
                            scene.add(mesh);
                            planes.push({
                                mesh,
                                baseRot: config.rotZ,
                                floatSpeed: 0.5 + i * 0.3
                            });
                            disposables.push(geometry, material, texture);
                        }
                    }["WireframeGlobe.useEffect"]);
                }
            }["WireframeGlobe.useEffect"]);
            window.addEventListener("mousemove", handleMouseMove);
            // Оптимизация производительности: слушатель скролла вместо чтения window.scrollY в animate (избегаем layout thrashing)
            const handleScroll = {
                "WireframeGlobe.useEffect.handleScroll": ()=>{
                    scrollYRef.current = window.scrollY;
                }
            }["WireframeGlobe.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            // Animation loop
            const startTime = performance.now();
            const animate = {
                "WireframeGlobe.useEffect.animate": ()=>{
                    const elapsed = (performance.now() - startTime) / 1000;
                    // Автовращение глобуса
                    sphere.rotation.y = elapsed * 0.08;
                    sphere.rotation.x = Math.sin(elapsed * 0.05) * 0.1;
                    innerSphere.rotation.y = -elapsed * 0.05;
                    innerSphere.rotation.x = Math.cos(elapsed * 0.03) * 0.08;
                    dots.rotation.y = sphere.rotation.y;
                    dots.rotation.x = sphere.rotation.x;
                    // Скролл (читаем из ref без layout thrashing)
                    const scrollY = scrollYRef.current;
                    // Расчет скорости скролла для эффекта рефракции
                    const scrollDelta = scrollY - lastScrollYRef.current;
                    lastScrollYRef.current = scrollY;
                    // Плавное затухание скорости (инерция)
                    scrollVelocityRef.current += (scrollDelta * 0.01 - scrollVelocityRef.current) * 0.1;
                    // Обновляем uniform'ы пост-обработки
                    liquidPass.uniforms.uTime.value = elapsed;
                    liquidPass.uniforms.uScrollVelocity.value = scrollVelocityRef.current;
                    // Глобус прокручивается вперед при скролле
                    globeGroup.rotation.x += (scrollY * 0.002 - globeGroup.rotation.x) * 0.05;
                    // Анимация картинок
                    planes.forEach({
                        "WireframeGlobe.useEffect.animate": (p, i)=>{
                            if (p.mesh.material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"] && p.mesh.material.opacity < 1) {
                                p.mesh.material.opacity += 0.02;
                            }
                            // Авто-плавание
                            p.mesh.position.y += Math.sin(elapsed * p.floatSpeed + i) * 0.0015;
                            p.mesh.rotation.z = p.baseRot + Math.cos(elapsed * 0.5 + i) * 0.02;
                            // Картинки всегда немного повернуты к центру камеры
                            p.mesh.lookAt(camera.position.x, camera.position.y, camera.position.z + 10);
                        }
                    }["WireframeGlobe.useEffect.animate"]);
                    // Параллакс КАМЕРЫ (двигаем камеру, чтобы вся сцена реагировала одинаково)
                    // Наезд камеры при скролле
                    const targetCamZ = 5.5 - scrollY * 0.005;
                    // Смещение камеры от мыши (движение в противовес)
                    const targetCamX = -mouseRef.current.x * 1.5;
                    const targetCamY = -mouseRef.current.y * 1.5 - scrollY * 0.002;
                    camera.position.x += (targetCamX - camera.position.x) * 0.05;
                    camera.position.y += (targetCamY - camera.position.y) * 0.05;
                    camera.position.z += (targetCamZ - camera.position.z) * 0.05;
                    // Камера всегда смотрит на глобус
                    camera.lookAt(0, 0, 0);
                    // Интенсивность свечения и увеличение масштаба зависят от расстояния мыши
                    const mouseDistance = Math.sqrt(mouseRef.current.x ** 2 + mouseRef.current.y ** 2);
                    // Интенсивность: от 0.4 до 1.0
                    const targetIntensity = 0.4 + mouseDistance * 0.6;
                    ambientLight.intensity += (targetIntensity - ambientLight.intensity) * 0.05;
                    // Масштаб всей сцены: от 1 в центре до ~1.1 по краям
                    const targetScale = 1 + mouseDistance * 0.1;
                    scene.scale.x += (targetScale - scene.scale.x) * 0.05;
                    scene.scale.y += (targetScale - scene.scale.y) * 0.05;
                    scene.scale.z += (targetScale - scene.scale.z) * 0.05;
                    // Используем composer для пост-обработки вместо renderer.render
                    composer.render();
                    frameIdRef.current = requestAnimationFrame(animate);
                }
            }["WireframeGlobe.useEffect.animate"];
            animate();
            // Resize
            const handleResize = {
                "WireframeGlobe.useEffect.handleResize": ()=>{
                    if (!container) return;
                    const w = container.clientWidth;
                    const h = container.clientHeight;
                    camera.aspect = w / h;
                    camera.updateProjectionMatrix();
                    renderer.setSize(w, h);
                    composer.setSize(w, h);
                }
            }["WireframeGlobe.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            return ({
                "WireframeGlobe.useEffect": ()=>{
                    isMountedRef.current = false;
                    cancelAnimationFrame(frameIdRef.current);
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("scroll", handleScroll);
                    window.removeEventListener("resize", handleResize);
                    disposables.forEach({
                        "WireframeGlobe.useEffect": (d)=>{
                            if (d && typeof d.dispose === 'function') {
                                d.dispose();
                            }
                        }
                    }["WireframeGlobe.useEffect"]);
                    renderPass.dispose();
                    liquidPass.dispose();
                    composer.dispose();
                    renderer.dispose();
                    if (container.contains(renderer.domElement)) {
                        container.removeChild(renderer.domElement);
                    }
                }
            })["WireframeGlobe.useEffect"];
        }
    }["WireframeGlobe.useEffect"], [
        handleMouseMove
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "absolute inset-0 z-0",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/src/widgets/landing-hero/ui/wireframe-globe.tsx",
        lineNumber: 337,
        columnNumber: 5
    }, this);
}
_s(WireframeGlobe, "QW0JBwmk/fNEYZKnSYbeQ8VkzU8=");
_c = WireframeGlobe;
var _c;
__turbopack_context__.k.register(_c, "WireframeGlobe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/widgets/landing-hero/ui/landing-hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingHero",
    ()=>LandingHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/ui/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$landing$2d$hero$2f$ui$2f$wireframe$2d$globe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/widgets/landing-hero/ui/wireframe-globe.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function LandingHero() {
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$landing$2d$hero$2f$ui$2f$wireframe$2d$globe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WireframeGlobe"], {}, void 0, false, {
                fileName: "[project]/src/widgets/landing-hero/ui/landing-hero.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col items-center text-center px-4 max-w-4xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] animate-fade-in-up",
                        style: {
                            animationDelay: "0.1s",
                            fontFamily: '"Actay Wide", sans-serif'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-white",
                                children: "Создавайте"
                            }, void 0, false, {
                                fileName: "[project]/src/widgets/landing-hero/ui/landing-hero.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block mt-2 bg-gradient-to-r from-blue-300 via-white to-blue-300 bg-clip-text text-transparent",
                                children: "видео из идей"
                            }, void 0, false, {
                                fileName: "[project]/src/widgets/landing-hero/ui/landing-hero.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/widgets/landing-hero/ui/landing-hero.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-6 text-lg md:text-xl max-w-xl animate-fade-in-up",
                        style: {
                            color: "var(--color-text-secondary)",
                            animationDelay: "0.2s"
                        },
                        children: "Опишите идею — получите сценарий, сториборд и готовое видео. Всё на базе искусственного интеллекта."
                    }, void 0, false, {
                        fileName: "[project]/src/widgets/landing-hero/ui/landing-hero.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-4 mt-10 animate-fade-in-up",
                        style: {
                            animationDelay: "0.3s"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "lg",
                            variant: "primary",
                            className: "glow",
                            onMouseEnter: ()=>setIsHovered(true),
                            onMouseLeave: ()=>setIsHovered(false),
                            "data-cursor-hover": true,
                            children: "Начать создавать"
                        }, void 0, false, {
                            fileName: "[project]/src/widgets/landing-hero/ui/landing-hero.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/widgets/landing-hero/ui/landing-hero.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/widgets/landing-hero/ui/landing-hero.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/widgets/landing-hero/ui/landing-hero.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(LandingHero, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = LandingHero;
var _c;
__turbopack_context__.k.register(_c, "LandingHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/ui/custom-cursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomCursor",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CustomCursor() {
    _s();
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            // Не показывать кастомный курсор на тач-устройствах
            if ("ontouchstart" in window) return;
            const cursor = cursorRef.current;
            const dot = dotRef.current;
            if (!cursor || !dot) return;
            let mouseX = 0;
            let mouseY = 0;
            let cursorX = 0;
            let cursorY = 0;
            const handleMouseMove = {
                "CustomCursor.useEffect.handleMouseMove": (e)=>{
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                    if (!isVisible) setIsVisible(true);
                }
            }["CustomCursor.useEffect.handleMouseMove"];
            const handleMouseEnter = {
                "CustomCursor.useEffect.handleMouseEnter": ()=>setIsVisible(true)
            }["CustomCursor.useEffect.handleMouseEnter"];
            const handleMouseLeave = {
                "CustomCursor.useEffect.handleMouseLeave": ()=>setIsVisible(false)
            }["CustomCursor.useEffect.handleMouseLeave"];
            // Отслеживаем ховер на интерактивных элементах
            const handleElementHover = {
                "CustomCursor.useEffect.handleElementHover": (e)=>{
                    const target = e.target;
                    const isInteractive = target.closest("a, button, [role='button'], input, textarea, select, [data-cursor-hover]");
                    setIsHovering(!!isInteractive);
                }
            }["CustomCursor.useEffect.handleElementHover"];
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mousemove", handleElementHover);
            document.addEventListener("mouseenter", handleMouseEnter);
            document.addEventListener("mouseleave", handleMouseLeave);
            // Анимация с lerp-сглаживанием
            let animationId;
            const lerp = {
                "CustomCursor.useEffect.lerp": (start, end, factor)=>start + (end - start) * factor
            }["CustomCursor.useEffect.lerp"];
            const animate = {
                "CustomCursor.useEffect.animate": ()=>{
                    cursorX = lerp(cursorX, mouseX, 0.15);
                    cursorY = lerp(cursorY, mouseY, 0.15);
                    cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
                    dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
                    animationId = requestAnimationFrame(animate);
                }
            }["CustomCursor.useEffect.animate"];
            animate();
            // Скрываем дефолтный курсор
            document.body.style.cursor = "none";
            return ({
                "CustomCursor.useEffect": ()=>{
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mousemove", handleElementHover);
                    document.removeEventListener("mouseenter", handleMouseEnter);
                    document.removeEventListener("mouseleave", handleMouseLeave);
                    cancelAnimationFrame(animationId);
                    document.body.style.cursor = "";
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], [
        isVisible
    ]);
    // Не рендерить на тач-устройствах (SSR-safe)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cursorRef,
                className: "fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference",
                style: {
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.3s"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-full border-2 border-white transition-all duration-200",
                    style: {
                        width: isHovering ? 56 : 40,
                        height: isHovering ? 56 : 40,
                        opacity: isHovering ? 0.6 : 0.4
                    }
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/custom-cursor.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/custom-cursor.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dotRef,
                className: "fixed top-0 left-0 z-[9999] pointer-events-none",
                style: {
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.3s"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-full bg-white transition-all duration-200",
                    style: {
                        width: isHovering ? 10 : 8,
                        height: isHovering ? 10 : 8
                    }
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/custom-cursor.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/custom-cursor.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(CustomCursor, "f/S67DTiC7w6E6ETg0fjpSMcOro=");
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0zr6n8k._.js.map