import { mdiSunThermometer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SunThermometer(props: IconComponentProps) {
  return <Icon path={mdiSunThermometer} {...props} />;
}

export { mdiSunThermometer as path };
