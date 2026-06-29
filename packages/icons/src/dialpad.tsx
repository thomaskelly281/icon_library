import { mdiDialpad } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Dialpad(props: IconComponentProps) {
  return <Icon path={mdiDialpad} {...props} />;
}

export { mdiDialpad as path };
