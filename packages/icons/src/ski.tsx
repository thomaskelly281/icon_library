import { mdiSki } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ski(props: IconComponentProps) {
  return <Icon path={mdiSki} {...props} />;
}

export { mdiSki as path };
