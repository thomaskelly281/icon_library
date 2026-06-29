import { mdiBeakerAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BeakerAlert(props: IconComponentProps) {
  return <Icon path={mdiBeakerAlert} {...props} />;
}

export { mdiBeakerAlert as path };
