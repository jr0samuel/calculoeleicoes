import { useCallback } from "react";

export function useEnterSubmit(btnRef) {
    const onKeyDown = useCallback(e => {
        if (e.key === "Enter") {
            e.preventDefault();
            btnRef.current?.pressDown();
        }
    }, [btnRef]);
    const onKeyUp = useCallback( e => {
        if (e.key === "Enter") btnRef.current?.pressUp();
    }, [btnRef] );
    return {onKeyDown, onKeyUp};
};
