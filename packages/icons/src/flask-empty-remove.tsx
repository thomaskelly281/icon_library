import { mdiFlaskEmptyRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlaskEmptyRemove(props: IconComponentProps) {
  return <Icon path={mdiFlaskEmptyRemove} {...props} />;
}

export { mdiFlaskEmptyRemove as path };
