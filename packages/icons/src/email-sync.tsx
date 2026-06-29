import { mdiEmailSync } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailSync(props: IconComponentProps) {
  return <Icon path={mdiEmailSync} {...props} />;
}

export { mdiEmailSync as path };
