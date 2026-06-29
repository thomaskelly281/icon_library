import { mdiFlaskRoundBottomOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlaskRoundBottomOutline(props: IconComponentProps) {
  return <Icon path={mdiFlaskRoundBottomOutline} {...props} />;
}

export { mdiFlaskRoundBottomOutline as path };
