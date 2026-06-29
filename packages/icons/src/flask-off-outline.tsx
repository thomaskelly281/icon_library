import { mdiFlaskOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlaskOffOutline(props: IconComponentProps) {
  return <Icon path={mdiFlaskOffOutline} {...props} />;
}

export { mdiFlaskOffOutline as path };
