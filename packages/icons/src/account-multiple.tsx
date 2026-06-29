import { mdiAccountMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountMultiple(props: IconComponentProps) {
  return <Icon path={mdiAccountMultiple} {...props} />;
}

export { mdiAccountMultiple as path };
