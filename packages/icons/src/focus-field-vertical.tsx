import { mdiFocusFieldVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FocusFieldVertical(props: IconComponentProps) {
  return <Icon path={mdiFocusFieldVertical} {...props} />;
}

export { mdiFocusFieldVertical as path };
