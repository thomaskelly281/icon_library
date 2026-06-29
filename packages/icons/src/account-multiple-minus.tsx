import { mdiAccountMultipleMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountMultipleMinus(props: IconComponentProps) {
  return <Icon path={mdiAccountMultipleMinus} {...props} />;
}

export { mdiAccountMultipleMinus as path };
