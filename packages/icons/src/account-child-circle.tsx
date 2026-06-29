import { mdiAccountChildCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountChildCircle(props: IconComponentProps) {
  return <Icon path={mdiAccountChildCircle} {...props} />;
}

export { mdiAccountChildCircle as path };
