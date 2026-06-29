import { mdiTransitTransfer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TransitTransfer(props: IconComponentProps) {
  return <Icon path={mdiTransitTransfer} {...props} />;
}

export { mdiTransitTransfer as path };
