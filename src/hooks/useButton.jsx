import { useBotao } from "./useBotao.js";

export const Button = ({onClick, className, children}) => {
    const {clicado, bind} = useBotao(onClick);
    return (
        <button {...bind} className={`${className} ${clicado ? "clicado" : "sem-click"}`}>{children}</button>
    )
};
