import { mdiFanAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FanAlert(props: IconComponentProps) {
  return <Icon path={mdiFanAlert} {...props} />;
}

export { mdiFanAlert as path };
