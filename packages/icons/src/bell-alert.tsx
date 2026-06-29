import { mdiBellAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BellAlert(props: IconComponentProps) {
  return <Icon path={mdiBellAlert} {...props} />;
}

export { mdiBellAlert as path };
