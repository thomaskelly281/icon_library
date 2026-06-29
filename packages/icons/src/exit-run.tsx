import { mdiExitRun } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ExitRun(props: IconComponentProps) {
  return <Icon path={mdiExitRun} {...props} />;
}

export { mdiExitRun as path };
