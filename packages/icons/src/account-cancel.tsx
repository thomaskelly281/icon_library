import { mdiAccountCancel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountCancel(props: IconComponentProps) {
  return <Icon path={mdiAccountCancel} {...props} />;
}

export { mdiAccountCancel as path };
