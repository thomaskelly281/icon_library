import { mdiAccountSync } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountSync(props: IconComponentProps) {
  return <Icon path={mdiAccountSync} {...props} />;
}

export { mdiAccountSync as path };
