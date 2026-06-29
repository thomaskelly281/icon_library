import { mdiCarParkingLights } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarParkingLights(props: IconComponentProps) {
  return <Icon path={mdiCarParkingLights} {...props} />;
}

export { mdiCarParkingLights as path };
