import { mdiHomeAccount } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeAccount(props: IconComponentProps) {
  return <Icon path={mdiHomeAccount} {...props} />;
}

export { mdiHomeAccount as path };
