import { mdiFlaskRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlaskRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiFlaskRemoveOutline} {...props} />;
}

export { mdiFlaskRemoveOutline as path };
