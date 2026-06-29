import { mdiRunFast } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RunFast(props: IconComponentProps) {
  return <Icon path={mdiRunFast} {...props} />;
}

export { mdiRunFast as path };
