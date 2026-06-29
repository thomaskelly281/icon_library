import { mdiBookCancel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookCancel(props: IconComponentProps) {
  return <Icon path={mdiBookCancel} {...props} />;
}

export { mdiBookCancel as path };
