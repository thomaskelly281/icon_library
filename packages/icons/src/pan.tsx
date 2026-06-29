import { mdiPan } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pan(props: IconComponentProps) {
  return <Icon path={mdiPan} {...props} />;
}

export { mdiPan as path };
