import { mdiCricket } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cricket(props: IconComponentProps) {
  return <Icon path={mdiCricket} {...props} />;
}

export { mdiCricket as path };
