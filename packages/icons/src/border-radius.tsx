import { mdiBorderRadius } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BorderRadius(props: IconComponentProps) {
  return <Icon path={mdiBorderRadius} {...props} />;
}

export { mdiBorderRadius as path };
