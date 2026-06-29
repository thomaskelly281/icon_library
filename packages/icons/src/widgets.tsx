import { mdiWidgets } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Widgets(props: IconComponentProps) {
  return <Icon path={mdiWidgets} {...props} />;
}

export { mdiWidgets as path };
