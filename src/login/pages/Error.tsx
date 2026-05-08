import type { PageProps } from "keycloakify/login/pages/PageProps";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const header = () => {
    return (
        <CardHeader>
            <CardTitle id="card-title" className="uppercase font-black tracking-tight">An error occurred</CardTitle>
            <CardDescription id="card-description" className="uppercase text-xs tracking-widest font-medium">We couldn't process your request — please try again</CardDescription>
        </CardHeader>
    );
};

export default function Error(props: PageProps<Extract<KcContext, { pageId: "error.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { message, client, skipLink } = kcContext;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={false}
            headerNode={header()}
        >
            <CardContent>
                <div id="kc-error-message">
                    <p className="instruction" dangerouslySetInnerHTML={{ __html: kcSanitize(message.summary) }} />
                    {!skipLink && client !== undefined && client.baseUrl !== undefined && (
                        <p>
                            <Button className="w-full kc-primary" variant="secondary" asChild>
                            <a id="backToApplication" href={client.baseUrl}>
                                Go back
                            </a>
                            </Button>
                        </p>
                    )}
                </div>
            </CardContent>
        </Template>
    );
}
