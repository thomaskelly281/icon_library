import { mdiBorderOutside } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BorderOutside(props: IconComponentProps) {
  return <Icon path={mdiBorderOutside} {...props} />;
}

export { mdiBorderOutside as path };
