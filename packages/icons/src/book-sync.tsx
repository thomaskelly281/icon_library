import { mdiBookSync } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookSync(props: IconComponentProps) {
  return <Icon path={mdiBookSync} {...props} />;
}

export { mdiBookSync as path };
