import { mdiFlaskPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlaskPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiFlaskPlusOutline} {...props} />;
}

export { mdiFlaskPlusOutline as path };
