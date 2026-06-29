import { mdiBorderInside } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BorderInside(props: IconComponentProps) {
  return <Icon path={mdiBorderInside} {...props} />;
}

export { mdiBorderInside as path };
