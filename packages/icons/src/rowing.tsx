import { mdiRowing } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Rowing(props: IconComponentProps) {
  return <Icon path={mdiRowing} {...props} />;
}

export { mdiRowing as path };
