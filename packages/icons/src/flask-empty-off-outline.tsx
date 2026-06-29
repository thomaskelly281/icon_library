import { mdiFlaskEmptyOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlaskEmptyOffOutline(props: IconComponentProps) {
  return <Icon path={mdiFlaskEmptyOffOutline} {...props} />;
}

export { mdiFlaskEmptyOffOutline as path };
