import { mdiFlaskOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlaskOff(props: IconComponentProps) {
  return <Icon path={mdiFlaskOff} {...props} />;
}

export { mdiFlaskOff as path };
