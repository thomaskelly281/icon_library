import { mdiBalloon } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Balloon(props: IconComponentProps) {
  return <Icon path={mdiBalloon} {...props} />;
}

export { mdiBalloon as path };
