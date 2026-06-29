import { mdiMotherNurse } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MotherNurse(props: IconComponentProps) {
  return <Icon path={mdiMotherNurse} {...props} />;
}

export { mdiMotherNurse as path };
