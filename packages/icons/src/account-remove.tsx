import { mdiAccountRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountRemove(props: IconComponentProps) {
  return <Icon path={mdiAccountRemove} {...props} />;
}

export { mdiAccountRemove as path };
