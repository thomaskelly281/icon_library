import { mdiTableRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableRemove(props: IconComponentProps) {
  return <Icon path={mdiTableRemove} {...props} />;
}

export { mdiTableRemove as path };
