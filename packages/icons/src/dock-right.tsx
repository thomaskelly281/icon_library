import { mdiDockRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DockRight(props: IconComponentProps) {
  return <Icon path={mdiDockRight} {...props} />;
}

export { mdiDockRight as path };
