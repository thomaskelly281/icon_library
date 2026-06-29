import { mdiCloseCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloseCircle(props: IconComponentProps) {
  return <Icon path={mdiCloseCircle} {...props} />;
}

export { mdiCloseCircle as path };
