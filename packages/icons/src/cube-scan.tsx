import { mdiCubeScan } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CubeScan(props: IconComponentProps) {
  return <Icon path={mdiCubeScan} {...props} />;
}

export { mdiCubeScan as path };
