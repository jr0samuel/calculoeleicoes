import { forwardRef } from "react";
import { useBotao } from "./useBotao.js";
export const Button = forwardRef(function Button({onClick, className, children}, ref) {
    const {clicado, bind} = useBotao(onClick, ref);
    return <button {...bind} ref={ref} onClick={onClick} className={`${className} ${clicado ? "clicado" : "sem-click"}`}>{children}</button>
});
