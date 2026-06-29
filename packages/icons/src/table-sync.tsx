import { mdiTableSync } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableSync(props: IconComponentProps) {
  return <Icon path={mdiTableSync} {...props} />;
}

export { mdiTableSync as path };
