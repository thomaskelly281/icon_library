import { mdiCandelabra } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Candelabra(props: IconComponentProps) {
  return <Icon path={mdiCandelabra} {...props} />;
}

export { mdiCandelabra as path };
