import { mdiDockBottom } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DockBottom(props: IconComponentProps) {
  return <Icon path={mdiDockBottom} {...props} />;
}

export { mdiDockBottom as path };
