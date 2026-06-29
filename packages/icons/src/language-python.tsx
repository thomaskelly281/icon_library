import { mdiLanguagePython } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LanguagePython(props: IconComponentProps) {
  return <Icon path={mdiLanguagePython} {...props} />;
}

export { mdiLanguagePython as path };
