import { mdiTumbleDryerAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TumbleDryerAlert(props: IconComponentProps) {
  return <Icon path={mdiTumbleDryerAlert} {...props} />;
}

export { mdiTumbleDryerAlert as path };
