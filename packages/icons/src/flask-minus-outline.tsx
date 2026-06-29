import { mdiFlaskMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlaskMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiFlaskMinusOutline} {...props} />;
}

export { mdiFlaskMinusOutline as path };
