import { mdiMicroSd } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicroSd(props: IconComponentProps) {
  return <Icon path={mdiMicroSd} {...props} />;
}

export { mdiMicroSd as path };
