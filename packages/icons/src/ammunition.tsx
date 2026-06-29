import { mdiAmmunition } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ammunition(props: IconComponentProps) {
  return <Icon path={mdiAmmunition} {...props} />;
}

export { mdiAmmunition as path };
