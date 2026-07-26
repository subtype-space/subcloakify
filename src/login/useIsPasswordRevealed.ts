import { useState, useEffect } from "react";

/**
 * Local replacement for keycloakify/tools/useIsPasswordRevealed
 */
export function useIsPasswordRevealed(params: { passwordInputId: string }) {
    const { passwordInputId } = params;

    const [isPasswordRevealed, setIsPasswordRevealed] = useState(false);

    useEffect(() => {
        const passwordInputElement = document.getElementById(passwordInputId);

        if (!(passwordInputElement instanceof HTMLInputElement)) {
            return;
        }

        passwordInputElement.type = isPasswordRevealed ? "text" : "password";
    }, [isPasswordRevealed, passwordInputId]);

    return {
        isPasswordRevealed,
        toggleIsPasswordRevealed: () => setIsPasswordRevealed(revealed => !revealed)
    };
}
