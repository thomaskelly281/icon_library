import { mdiTransitConnectionVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TransitConnectionVariant(props: IconComponentProps) {
  return <Icon path={mdiTransitConnectionVariant} {...props} />;
}

export { mdiTransitConnectionVariant as path };
