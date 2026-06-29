import { mdiCancel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cancel(props: IconComponentProps) {
  return <Icon path={mdiCancel} {...props} />;
}

export { mdiCancel as path };
