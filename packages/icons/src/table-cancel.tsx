import { mdiTableCancel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableCancel(props: IconComponentProps) {
  return <Icon path={mdiTableCancel} {...props} />;
}

export { mdiTableCancel as path };
