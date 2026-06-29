import { mdiRun } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Run(props: IconComponentProps) {
  return <Icon path={mdiRun} {...props} />;
}

export { mdiRun as path };
