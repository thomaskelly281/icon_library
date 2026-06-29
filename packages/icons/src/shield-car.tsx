import { mdiShieldCar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldCar(props: IconComponentProps) {
  return <Icon path={mdiShieldCar} {...props} />;
}

export { mdiShieldCar as path };
