import { mdiFlaskEmpty } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlaskEmpty(props: IconComponentProps) {
  return <Icon path={mdiFlaskEmpty} {...props} />;
}

export { mdiFlaskEmpty as path };
