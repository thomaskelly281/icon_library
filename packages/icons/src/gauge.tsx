import { mdiGauge } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Gauge(props: IconComponentProps) {
  return <Icon path={mdiGauge} {...props} />;
}

export { mdiGauge as path };
