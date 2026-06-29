import { mdiCarTireAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarTireAlert(props: IconComponentProps) {
  return <Icon path={mdiCarTireAlert} {...props} />;
}

export { mdiCarTireAlert as path };
