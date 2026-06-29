import { mdiCameraMeteringPartial } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CameraMeteringPartial(props: IconComponentProps) {
  return <Icon path={mdiCameraMeteringPartial} {...props} />;
}

export { mdiCameraMeteringPartial as path };
