import { mdiDomainPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DomainPlus(props: IconComponentProps) {
  return <Icon path={mdiDomainPlus} {...props} />;
}

export { mdiDomainPlus as path };
