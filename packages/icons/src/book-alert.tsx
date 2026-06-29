import { mdiBookAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookAlert(props: IconComponentProps) {
  return <Icon path={mdiBookAlert} {...props} />;
}

export { mdiBookAlert as path };
