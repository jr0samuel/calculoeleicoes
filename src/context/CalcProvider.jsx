import { useState } from "react";
import { CalcContext } from "./CalcContext.jsx";

export function CalcProvider({children}) {
    const [vve, setVve] = useState("");
    const [vp, setVp] = useState("");
    const [resultadoQe, setResultadoQe] = useState("");
    const [vvpc, setVvpc] = useState("");
    const [qe, setQe] = useState("");
    const [resultadoQp, setResultadoQp] = useState("");
    const [dezQe, setDezQe] = useState("");
    const [resultadoDezQe, setResultadoDezQe] = useState("");
    const [oitentaQe, setOitentaQe] = useState("");
    const [resultadoOitentaQe, setResultadoOitentaQe] = useState("");
    const [siVvPc, setSiVvPc] = useState("");
    const [siQpPc, setSiQpPc] = useState("");
    const [resultadoSi, setResultadoSi] = useState("");
    const [vinteQe, setVinteQe] = useState("");
    const [resultadoVinteQe, setResultadoVinteQe] = useState("");
    const [sxVvPc, setSxVvPc] = useState("");
    const [sxQpPc, setSxQpPc] = useState("");
    const [sxVsPc, setSxVsPc] = useState("");
    const [resultadoSx, setResultadoSx] = useState("");
    return (
        <CalcContext.Provider
            value={{
                vve, setVve, vp, setVp, resultadoQe, setResultadoQe,
                vvpc, setVvpc, qe, setQe, resultadoQp, setResultadoQp,
                dezQe, setDezQe, resultadoDezQe, setResultadoDezQe,
                oitentaQe, setOitentaQe, resultadoOitentaQe, setResultadoOitentaQe,
                siVvPc, setSiVvPc, siQpPc, setSiQpPc, resultadoSi, setResultadoSi,
                vinteQe, setVinteQe, resultadoVinteQe, setResultadoVinteQe,
                sxVvPc, setSxVvPc, sxQpPc, setSxQpPc, sxVsPc, setSxVsPc, resultadoSx, setResultadoSx
            }}
        >
            {children}
        </CalcContext.Provider>
    );
};
