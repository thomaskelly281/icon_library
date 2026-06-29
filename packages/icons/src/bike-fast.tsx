import { mdiBikeFast } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BikeFast(props: IconComponentProps) {
  return <Icon path={mdiBikeFast} {...props} />;
}

export { mdiBikeFast as path };
