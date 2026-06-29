import { mdiFileAccount } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileAccount(props: IconComponentProps) {
  return <Icon path={mdiFileAccount} {...props} />;
}

export { mdiFileAccount as path };
