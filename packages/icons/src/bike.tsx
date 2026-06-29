import { mdiBike } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bike(props: IconComponentProps) {
  return <Icon path={mdiBike} {...props} />;
}

export { mdiBike as path };
