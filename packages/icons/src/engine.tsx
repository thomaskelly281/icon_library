import { mdiEngine } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Engine(props: IconComponentProps) {
  return <Icon path={mdiEngine} {...props} />;
}

export { mdiEngine as path };
