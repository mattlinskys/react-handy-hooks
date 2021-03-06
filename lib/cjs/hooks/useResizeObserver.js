"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useResizeObserver = (ref, cb) => {
    (0, react_1.useEffect)(() => {
        const resizeObserver = new ResizeObserver(cb);
        if (ref.current) {
            resizeObserver.observe(ref.current, {});
        }
        return () => {
            resizeObserver.disconnect();
        };
    }, [cb]);
};
exports.default = useResizeObserver;
//# sourceMappingURL=useResizeObserver.js.map