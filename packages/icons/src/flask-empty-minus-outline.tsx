import { mdiFlaskEmptyMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlaskEmptyMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiFlaskEmptyMinusOutline} {...props} />;
}

export { mdiFlaskEmptyMinusOutline as path };
