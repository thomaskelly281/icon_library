import { mdiMulticast } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Multicast(props: IconComponentProps) {
  return <Icon path={mdiMulticast} {...props} />;
}

export { mdiMulticast as path };
