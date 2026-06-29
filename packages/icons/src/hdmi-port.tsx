import { mdiHdmiPort } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HdmiPort(props: IconComponentProps) {
  return <Icon path={mdiHdmiPort} {...props} />;
}

export { mdiHdmiPort as path };
