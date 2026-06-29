import { mdiLanguageXaml } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LanguageXaml(props: IconComponentProps) {
  return <Icon path={mdiLanguageXaml} {...props} />;
}

export { mdiLanguageXaml as path };
