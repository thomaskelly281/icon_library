import { mdiFileSync } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileSync(props: IconComponentProps) {
  return <Icon path={mdiFileSync} {...props} />;
}

export { mdiFileSync as path };
