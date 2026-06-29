import { mdiFocusFieldHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FocusFieldHorizontal(props: IconComponentProps) {
  return <Icon path={mdiFocusFieldHorizontal} {...props} />;
}

export { mdiFocusFieldHorizontal as path };
