import { mdiSync } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Sync(props: IconComponentProps) {
  return <Icon path={mdiSync} {...props} />;
}

export { mdiSync as path };
