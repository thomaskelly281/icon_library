import { mdiFlaskPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlaskPlus(props: IconComponentProps) {
  return <Icon path={mdiFlaskPlus} {...props} />;
}

export { mdiFlaskPlus as path };
