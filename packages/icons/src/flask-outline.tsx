import { mdiFlaskOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlaskOutline(props: IconComponentProps) {
  return <Icon path={mdiFlaskOutline} {...props} />;
}

export { mdiFlaskOutline as path };
