import { mdiCableData } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CableData(props: IconComponentProps) {
  return <Icon path={mdiCableData} {...props} />;
}

export { mdiCableData as path };
