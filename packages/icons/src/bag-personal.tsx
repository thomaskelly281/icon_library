import { mdiBagPersonal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BagPersonal(props: IconComponentProps) {
  return <Icon path={mdiBagPersonal} {...props} />;
}

export { mdiBagPersonal as path };
