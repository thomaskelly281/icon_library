import { mdiDockTop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DockTop(props: IconComponentProps) {
  return <Icon path={mdiDockTop} {...props} />;
}

export { mdiDockTop as path };
