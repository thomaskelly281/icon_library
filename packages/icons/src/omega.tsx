import { mdiOmega } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Omega(props: IconComponentProps) {
  return <Icon path={mdiOmega} {...props} />;
}

export { mdiOmega as path };
