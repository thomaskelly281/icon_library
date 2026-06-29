import { mdiBicycleElectric } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BicycleElectric(props: IconComponentProps) {
  return <Icon path={mdiBicycleElectric} {...props} />;
}

export { mdiBicycleElectric as path };
