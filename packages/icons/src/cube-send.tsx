import { mdiCubeSend } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CubeSend(props: IconComponentProps) {
  return <Icon path={mdiCubeSend} {...props} />;
}

export { mdiCubeSend as path };
