import { mdiPoolThermometer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PoolThermometer(props: IconComponentProps) {
  return <Icon path={mdiPoolThermometer} {...props} />;
}

export { mdiPoolThermometer as path };
