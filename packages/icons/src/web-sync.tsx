import { mdiWebSync } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WebSync(props: IconComponentProps) {
  return <Icon path={mdiWebSync} {...props} />;
}

export { mdiWebSync as path };
