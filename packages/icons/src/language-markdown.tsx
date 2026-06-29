import { mdiLanguageMarkdown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LanguageMarkdown(props: IconComponentProps) {
  return <Icon path={mdiLanguageMarkdown} {...props} />;
}

export { mdiLanguageMarkdown as path };
