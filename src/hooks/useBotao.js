import { useState } from "react";
export function useBotao(callback){
    const [clicado, setClicado] = useState(false);
    const handleDown = e => {
        if (e.type === "keydown"){
            if (e.key !== "Enter" && e.key !== " ") return;
            e.preventDefault();
        }
        setClicado(true);
    }
    const handleUp = (e) => {
        if (!clicado) return;
        setClicado(false);
        if (e.currentTarget) e.currentTarget.blur();
        if (callback) callback();
        if (e.type === "touchend") e.preventDefault();
    }
    const handleCancel = e => {
        setClicado(false);
        e.target.blur();
    }
    return {
        clicado,
        bind: { onKeyDown: handleDown,
                onKeyUp: handleUp,
                onMouseDown: handleDown,
                onMouseUp: handleUp,
                onTouchStart: handleDown,
                onTouchEnd: handleUp,
                onBlur: handleCancel,
                onContextMenu: e => e.preventDefault(),
                onTouchCancel: handleCancel,
                onMouseLeave: handleCancel, }
    }
}
