import { mdiLanguageJavascript } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LanguageJavascript(props: IconComponentProps) {
  return <Icon path={mdiLanguageJavascript} {...props} />;
}

export { mdiLanguageJavascript as path };
