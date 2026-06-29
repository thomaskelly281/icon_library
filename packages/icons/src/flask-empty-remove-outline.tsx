import { mdiFlaskEmptyRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlaskEmptyRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiFlaskEmptyRemoveOutline} {...props} />;
}

export { mdiFlaskEmptyRemoveOutline as path };
