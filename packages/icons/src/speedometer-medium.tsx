import { mdiSpeedometerMedium } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SpeedometerMedium(props: IconComponentProps) {
  return <Icon path={mdiSpeedometerMedium} {...props} />;
}

export { mdiSpeedometerMedium as path };
