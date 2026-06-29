import { mdiFlaskEmptyOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlaskEmptyOff(props: IconComponentProps) {
  return <Icon path={mdiFlaskEmptyOff} {...props} />;
}

export { mdiFlaskEmptyOff as path };
