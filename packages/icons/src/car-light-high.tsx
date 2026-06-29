import { mdiCarLightHigh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarLightHigh(props: IconComponentProps) {
  return <Icon path={mdiCarLightHigh} {...props} />;
}

export { mdiCarLightHigh as path };
