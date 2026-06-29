import { mdiDomainOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DomainOff(props: IconComponentProps) {
  return <Icon path={mdiDomainOff} {...props} />;
}

export { mdiDomainOff as path };
