import { mdiFileCancel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileCancel(props: IconComponentProps) {
  return <Icon path={mdiFileCancel} {...props} />;
}

export { mdiFileCancel as path };
