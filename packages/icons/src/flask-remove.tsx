import { mdiFlaskRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlaskRemove(props: IconComponentProps) {
  return <Icon path={mdiFlaskRemove} {...props} />;
}

export { mdiFlaskRemove as path };
