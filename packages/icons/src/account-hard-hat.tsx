import { mdiAccountHardHat } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountHardHat(props: IconComponentProps) {
  return <Icon path={mdiAccountHardHat} {...props} />;
}

export { mdiAccountHardHat as path };
