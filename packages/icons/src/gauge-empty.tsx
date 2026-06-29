import { mdiGaugeEmpty } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GaugeEmpty(props: IconComponentProps) {
  return <Icon path={mdiGaugeEmpty} {...props} />;
}

export { mdiGaugeEmpty as path };
