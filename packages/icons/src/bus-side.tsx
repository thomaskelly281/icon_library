import { mdiBusSide } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BusSide(props: IconComponentProps) {
  return <Icon path={mdiBusSide} {...props} />;
}

export { mdiBusSide as path };
