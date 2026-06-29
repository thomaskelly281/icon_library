import { mdiFireplaceOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FireplaceOff(props: IconComponentProps) {
  return <Icon path={mdiFireplaceOff} {...props} />;
}

export { mdiFireplaceOff as path };
