import { mdiTableAccount } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableAccount(props: IconComponentProps) {
  return <Icon path={mdiTableAccount} {...props} />;
}

export { mdiTableAccount as path };
