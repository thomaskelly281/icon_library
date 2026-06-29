import { mdiThermometer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Thermometer(props: IconComponentProps) {
  return <Icon path={mdiThermometer} {...props} />;
}

export { mdiThermometer as path };
