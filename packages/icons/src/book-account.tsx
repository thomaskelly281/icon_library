import { mdiBookAccount } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookAccount(props: IconComponentProps) {
  return <Icon path={mdiBookAccount} {...props} />;
}

export { mdiBookAccount as path };
