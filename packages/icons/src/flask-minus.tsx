import { mdiFlaskMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlaskMinus(props: IconComponentProps) {
  return <Icon path={mdiFlaskMinus} {...props} />;
}

export { mdiFlaskMinus as path };
