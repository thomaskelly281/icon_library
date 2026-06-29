import { mdiOilLamp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OilLamp(props: IconComponentProps) {
  return <Icon path={mdiOilLamp} {...props} />;
}

export { mdiOilLamp as path };
