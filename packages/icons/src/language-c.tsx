import { mdiLanguageC } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LanguageC(props: IconComponentProps) {
  return <Icon path={mdiLanguageC} {...props} />;
}

export { mdiLanguageC as path };
