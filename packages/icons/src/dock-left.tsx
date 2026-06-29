import { mdiDockLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DockLeft(props: IconComponentProps) {
  return <Icon path={mdiDockLeft} {...props} />;
}

export { mdiDockLeft as path };
