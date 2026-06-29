import { mdiHomeAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeAlert(props: IconComponentProps) {
  return <Icon path={mdiHomeAlert} {...props} />;
}

export { mdiHomeAlert as path };
