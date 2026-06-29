import { mdiLaravel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Laravel(props: IconComponentProps) {
  return <Icon path={mdiLaravel} {...props} />;
}

export { mdiLaravel as path };
