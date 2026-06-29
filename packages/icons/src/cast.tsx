import { mdiCast } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cast(props: IconComponentProps) {
  return <Icon path={mdiCast} {...props} />;
}

export { mdiCast as path };
