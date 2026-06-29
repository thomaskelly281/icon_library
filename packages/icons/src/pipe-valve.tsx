import { mdiPipeValve } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PipeValve(props: IconComponentProps) {
  return <Icon path={mdiPipeValve} {...props} />;
}

export { mdiPipeValve as path };
