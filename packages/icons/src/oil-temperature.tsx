import { mdiOilTemperature } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OilTemperature(props: IconComponentProps) {
  return <Icon path={mdiOilTemperature} {...props} />;
}

export { mdiOilTemperature as path };
