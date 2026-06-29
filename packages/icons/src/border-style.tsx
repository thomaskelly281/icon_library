import { mdiBorderStyle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BorderStyle(props: IconComponentProps) {
  return <Icon path={mdiBorderStyle} {...props} />;
}

export { mdiBorderStyle as path };
