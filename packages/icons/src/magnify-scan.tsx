import { mdiMagnifyScan } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MagnifyScan(props: IconComponentProps) {
  return <Icon path={mdiMagnifyScan} {...props} />;
}

export { mdiMagnifyScan as path };
