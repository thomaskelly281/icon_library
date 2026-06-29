import { mdiCarLiftedPickup } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarLiftedPickup(props: IconComponentProps) {
  return <Icon path={mdiCarLiftedPickup} {...props} />;
}

export { mdiCarLiftedPickup as path };
