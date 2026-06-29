import { mdiEmailOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailOpen(props: IconComponentProps) {
  return <Icon path={mdiEmailOpen} {...props} />;
}

export { mdiEmailOpen as path };
