import { mdiAccountDetails } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountDetails(props: IconComponentProps) {
  return <Icon path={mdiAccountDetails} {...props} />;
}

export { mdiAccountDetails as path };
