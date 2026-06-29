import { mdiFlaskEmptyPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlaskEmptyPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiFlaskEmptyPlusOutline} {...props} />;
}

export { mdiFlaskEmptyPlusOutline as path };
