import { mdiMetronomeTick } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MetronomeTick(props: IconComponentProps) {
  return <Icon path={mdiMetronomeTick} {...props} />;
}

export { mdiMetronomeTick as path };
