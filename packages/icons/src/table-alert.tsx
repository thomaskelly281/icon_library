import { mdiTableAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableAlert(props: IconComponentProps) {
  return <Icon path={mdiTableAlert} {...props} />;
}

export { mdiTableAlert as path };
