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
    const handleUp = () => {
        if (!clicado) return;
        setClicado(false);
        if (callback) callback();
    }
    return {
        clicado,
        bind: { onKeyDown: handleDown,
                onKeyUp: handleUp,
                onMouseDown: handleDown,
                onMouseUp: handleUp,
                onTouchStart: handleDown,
                onTouchEnd: handleUp, }
    }
}
