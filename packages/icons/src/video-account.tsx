import { mdiVideoAccount } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoAccount(props: IconComponentProps) {
  return <Icon path={mdiVideoAccount} {...props} />;
}

export { mdiVideoAccount as path };
