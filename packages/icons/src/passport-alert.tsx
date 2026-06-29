import { mdiPassportAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PassportAlert(props: IconComponentProps) {
  return <Icon path={mdiPassportAlert} {...props} />;
}

export { mdiPassportAlert as path };
