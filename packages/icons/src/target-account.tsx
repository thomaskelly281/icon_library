import { mdiTargetAccount } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TargetAccount(props: IconComponentProps) {
  return <Icon path={mdiTargetAccount} {...props} />;
}

export { mdiTargetAccount as path };
