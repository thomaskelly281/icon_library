import { mdiCameraMeteringSpot } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraMeteringSpot(props: IconComponentProps) {
  return <Icon path={mdiCameraMeteringSpot} {...props} />;
}

export { mdiCameraMeteringSpot as path };
