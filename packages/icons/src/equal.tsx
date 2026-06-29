import { mdiEqual } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Equal(props: IconComponentProps) {
  return <Icon path={mdiEqual} {...props} />;
}

export { mdiEqual as path };
