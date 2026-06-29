import { mdiTelevision } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Television(props: IconComponentProps) {
  return <Icon path={mdiTelevision} {...props} />;
}

export { mdiTelevision as path };
