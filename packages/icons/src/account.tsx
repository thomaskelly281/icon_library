import { mdiAccount } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Account(props: IconComponentProps) {
  return <Icon path={mdiAccount} {...props} />;
}

export { mdiAccount as path };
