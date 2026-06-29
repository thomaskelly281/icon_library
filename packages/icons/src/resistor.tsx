import { mdiResistor } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Resistor(props: IconComponentProps) {
  return <Icon path={mdiResistor} {...props} />;
}

export { mdiResistor as path };
