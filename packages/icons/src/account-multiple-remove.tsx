import { mdiAccountMultipleRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountMultipleRemove(props: IconComponentProps) {
  return <Icon path={mdiAccountMultipleRemove} {...props} />;
}

export { mdiAccountMultipleRemove as path };
