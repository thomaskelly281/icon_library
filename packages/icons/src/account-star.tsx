import { mdiAccountStar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountStar(props: IconComponentProps) {
  return <Icon path={mdiAccountStar} {...props} />;
}

export { mdiAccountStar as path };
