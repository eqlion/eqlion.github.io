import { createContext } from "react";

export type Language = "ru" | "en";

export const LanguageContext = createContext<{
    language: Language;
    changeLanguage: () => void;
}>({
    language: "en",
    changeLanguage: () => {
        return;
    },
});
