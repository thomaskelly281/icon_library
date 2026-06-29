import { mdiLanguageKotlin } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LanguageKotlin(props: IconComponentProps) {
  return <Icon path={mdiLanguageKotlin} {...props} />;
}

export { mdiLanguageKotlin as path };
