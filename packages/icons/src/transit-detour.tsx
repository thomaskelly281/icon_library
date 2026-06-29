import { mdiTransitDetour } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TransitDetour(props: IconComponentProps) {
  return <Icon path={mdiTransitDetour} {...props} />;
}

export { mdiTransitDetour as path };
