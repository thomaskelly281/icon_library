import { mdiFuel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Fuel(props: IconComponentProps) {
  return <Icon path={mdiFuel} {...props} />;
}

export { mdiFuel as path };
