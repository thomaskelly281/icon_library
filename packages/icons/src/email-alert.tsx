import { mdiEmailAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailAlert(props: IconComponentProps) {
  return <Icon path={mdiEmailAlert} {...props} />;
}

export { mdiEmailAlert as path };
