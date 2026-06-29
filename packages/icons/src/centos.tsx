import { mdiCentos } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Centos(props: IconComponentProps) {
  return <Icon path={mdiCentos} {...props} />;
}

export { mdiCentos as path };
