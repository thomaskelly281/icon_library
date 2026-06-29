import { mdiFocusAuto } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FocusAuto(props: IconComponentProps) {
  return <Icon path={mdiFocusAuto} {...props} />;
}

export { mdiFocusAuto as path };
