import { mdiLanguageLua } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LanguageLua(props: IconComponentProps) {
  return <Icon path={mdiLanguageLua} {...props} />;
}

export { mdiLanguageLua as path };
