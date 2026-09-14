import { useImperativeHandle, useState } from "react";
export function useBotao(callback, ref){
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
    const pressDown = () => setClicado(true);
    const pressUp = () => {
        if (!clicado) return;
        setClicado(false);
        if (callback) callback();
    }
    useImperativeHandle(ref, () => ({pressDown, pressUp}))
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
