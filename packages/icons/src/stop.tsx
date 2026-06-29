import { mdiStop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Stop(props: IconComponentProps) {
  return <Icon path={mdiStop} {...props} />;
}

export { mdiStop as path };
