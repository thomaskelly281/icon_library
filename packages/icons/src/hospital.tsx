import { mdiHospital } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Hospital(props: IconComponentProps) {
  return <Icon path={mdiHospital} {...props} />;
}

export { mdiHospital as path };
