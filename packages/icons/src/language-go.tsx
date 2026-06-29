import { mdiLanguageGo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LanguageGo(props: IconComponentProps) {
  return <Icon path={mdiLanguageGo} {...props} />;
}

export { mdiLanguageGo as path };
