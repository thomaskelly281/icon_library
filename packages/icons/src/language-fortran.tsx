import { mdiLanguageFortran } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LanguageFortran(props: IconComponentProps) {
  return <Icon path={mdiLanguageFortran} {...props} />;
}

export { mdiLanguageFortran as path };
