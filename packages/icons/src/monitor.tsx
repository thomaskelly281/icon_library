import { mdiMonitor } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Monitor(props: IconComponentProps) {
  return <Icon path={mdiMonitor} {...props} />;
}

export { mdiMonitor as path };
