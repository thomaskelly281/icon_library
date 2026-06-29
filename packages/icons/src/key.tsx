import { mdiKey } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Key(props: IconComponentProps) {
  return <Icon path={mdiKey} {...props} />;
}

export { mdiKey as path };
