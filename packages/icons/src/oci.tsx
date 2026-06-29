import { mdiOci } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Oci(props: IconComponentProps) {
  return <Icon path={mdiOci} {...props} />;
}

export { mdiOci as path };
