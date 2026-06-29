import { mdiValveOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ValveOpen(props: IconComponentProps) {
  return <Icon path={mdiValveOpen} {...props} />;
}

export { mdiValveOpen as path };
