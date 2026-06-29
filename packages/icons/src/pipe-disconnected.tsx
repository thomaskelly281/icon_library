import { mdiPipeDisconnected } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PipeDisconnected(props: IconComponentProps) {
  return <Icon path={mdiPipeDisconnected} {...props} />;
}

export { mdiPipeDisconnected as path };
