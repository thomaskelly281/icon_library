import { mdiBorderColor } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BorderColor(props: IconComponentProps) {
  return <Icon path={mdiBorderColor} {...props} />;
}

export { mdiBorderColor as path };
