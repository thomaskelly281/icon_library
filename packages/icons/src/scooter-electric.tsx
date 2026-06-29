import { mdiScooterElectric } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ScooterElectric(props: IconComponentProps) {
  return <Icon path={mdiScooterElectric} {...props} />;
}

export { mdiScooterElectric as path };
