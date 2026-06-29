import { mdiServer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Server(props: IconComponentProps) {
  return <Icon path={mdiServer} {...props} />;
}

export { mdiServer as path };
