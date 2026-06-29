import { mdiAccountAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountAlert(props: IconComponentProps) {
  return <Icon path={mdiAccountAlert} {...props} />;
}

export { mdiAccountAlert as path };
