import { mdiDiscAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DiscAlert(props: IconComponentProps) {
  return <Icon path={mdiDiscAlert} {...props} />;
}

export { mdiDiscAlert as path };
