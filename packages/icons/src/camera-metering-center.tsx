import { mdiCameraMeteringCenter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraMeteringCenter(props: IconComponentProps) {
  return <Icon path={mdiCameraMeteringCenter} {...props} />;
}

export { mdiCameraMeteringCenter as path };
