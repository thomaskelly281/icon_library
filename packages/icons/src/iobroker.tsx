import { mdiIobroker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Iobroker(props: IconComponentProps) {
  return <Icon path={mdiIobroker} {...props} />;
}

export { mdiIobroker as path };
