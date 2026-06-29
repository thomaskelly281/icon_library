import { mdiPipeWrench } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PipeWrench(props: IconComponentProps) {
  return <Icon path={mdiPipeWrench} {...props} />;
}

export { mdiPipeWrench as path };
