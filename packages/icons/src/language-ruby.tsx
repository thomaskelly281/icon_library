import { mdiLanguageRuby } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LanguageRuby(props: IconComponentProps) {
  return <Icon path={mdiLanguageRuby} {...props} />;
}

export { mdiLanguageRuby as path };
