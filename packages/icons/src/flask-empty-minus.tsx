import { mdiFlaskEmptyMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlaskEmptyMinus(props: IconComponentProps) {
  return <Icon path={mdiFlaskEmptyMinus} {...props} />;
}

export { mdiFlaskEmptyMinus as path };
