import { mdiFlaskEmptyOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlaskEmptyOutline(props: IconComponentProps) {
  return <Icon path={mdiFlaskEmptyOutline} {...props} />;
}

export { mdiFlaskEmptyOutline as path };
