import { mdiLanguageRust } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LanguageRust(props: IconComponentProps) {
  return <Icon path={mdiLanguageRust} {...props} />;
}

export { mdiLanguageRust as path };
