import { mdiPailRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PailRemove(props: IconComponentProps) {
  return <Icon path={mdiPailRemove} {...props} />;
}

export { mdiPailRemove as path };
