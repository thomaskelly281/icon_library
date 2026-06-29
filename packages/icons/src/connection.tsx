import { mdiConnection } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Connection(props: IconComponentProps) {
  return <Icon path={mdiConnection} {...props} />;
}

export { mdiConnection as path };
