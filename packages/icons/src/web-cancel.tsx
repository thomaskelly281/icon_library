import { mdiWebCancel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WebCancel(props: IconComponentProps) {
  return <Icon path={mdiWebCancel} {...props} />;
}

export { mdiWebCancel as path };
