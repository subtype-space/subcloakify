import { type ReactNode, useReducer } from "react";
import { Button } from "@/components/ui/button";
import { EyeClosed, EyeIcon } from "lucide-react";
import type { I18n } from "./i18n";

type Props = {
    i18n: I18n;
    passwordInputId: string;
    renderInput: (inputProps: { id: string; type: "text" | "password" }) => ReactNode;
};

/**
 * Port of the upstream keycloakify-starter <Password /> component
 * (https://github.com/keycloakify/keycloakify-starter/blob/bf089a53/src/login/components/field/Password.tsx)
 * adapted to this theme's shadcn components. The input's type is driven
 * entirely by React state through renderInput — no DOM mutation and no
 * MutationObserver — so mobile password managers that briefly flip the
 * type attribute to autofill are left alone (keycloakify#1045).
 */
export function Password(props: Props) {
    const { i18n, passwordInputId, renderInput } = props;
    const { msgStr } = i18n;

    const [isPasswordRevealed, toggleIsPasswordRevealed] = useReducer(
        isPasswordRevealed => !isPasswordRevealed,
        false
    );

    return (
        <div className="relative">
            {renderInput({ id: passwordInputId, type: isPasswordRevealed ? "text" : "password" })}
            <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label={msgStr(isPasswordRevealed ? "hidePassword" : "showPassword")}
                aria-controls={passwordInputId}
                onClick={toggleIsPasswordRevealed}
            >
                <i aria-hidden>{isPasswordRevealed ? <EyeIcon /> : <EyeClosed />}</i>
            </Button>
        </div>
    );
}
