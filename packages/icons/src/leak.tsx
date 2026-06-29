import { mdiLeak } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Leak(props: IconComponentProps) {
  return <Icon path={mdiLeak} {...props} />;
}

export { mdiLeak as path };
