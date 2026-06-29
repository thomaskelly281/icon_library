import { mdiBikePedal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BikePedal(props: IconComponentProps) {
  return <Icon path={mdiBikePedal} {...props} />;
}

export { mdiBikePedal as path };
