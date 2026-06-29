import { mdiCameraMeteringMatrix } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraMeteringMatrix(props: IconComponentProps) {
  return <Icon path={mdiCameraMeteringMatrix} {...props} />;
}

export { mdiCameraMeteringMatrix as path };
