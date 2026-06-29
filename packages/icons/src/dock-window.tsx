import { mdiDockWindow } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DockWindow(props: IconComponentProps) {
  return <Icon path={mdiDockWindow} {...props} />;
}

export { mdiDockWindow as path };
