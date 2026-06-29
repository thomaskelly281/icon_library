import { mdiAccountKey } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountKey(props: IconComponentProps) {
  return <Icon path={mdiAccountKey} {...props} />;
}

export { mdiAccountKey as path };
