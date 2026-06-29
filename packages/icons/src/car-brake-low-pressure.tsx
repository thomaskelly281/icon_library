import { mdiCarBrakeLowPressure } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarBrakeLowPressure(props: IconComponentProps) {
  return <Icon path={mdiCarBrakeLowPressure} {...props} />;
}

export { mdiCarBrakeLowPressure as path };
