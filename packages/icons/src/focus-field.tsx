import { mdiFocusField } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FocusField(props: IconComponentProps) {
  return <Icon path={mdiFocusField} {...props} />;
}

export { mdiFocusField as path };
