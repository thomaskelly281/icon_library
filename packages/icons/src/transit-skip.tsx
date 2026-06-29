import { mdiTransitSkip } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TransitSkip(props: IconComponentProps) {
  return <Icon path={mdiTransitSkip} {...props} />;
}

export { mdiTransitSkip as path };
