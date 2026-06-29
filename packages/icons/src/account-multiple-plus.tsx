import { mdiAccountMultiplePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountMultiplePlus(props: IconComponentProps) {
  return <Icon path={mdiAccountMultiplePlus} {...props} />;
}

export { mdiAccountMultiplePlus as path };
