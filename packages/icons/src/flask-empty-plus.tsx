import { mdiFlaskEmptyPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlaskEmptyPlus(props: IconComponentProps) {
  return <Icon path={mdiFlaskEmptyPlus} {...props} />;
}

export { mdiFlaskEmptyPlus as path };
