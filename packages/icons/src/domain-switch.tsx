import { mdiDomainSwitch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DomainSwitch(props: IconComponentProps) {
  return <Icon path={mdiDomainSwitch} {...props} />;
}

export { mdiDomainSwitch as path };
