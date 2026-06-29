import { mdiFlagPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlagPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiFlagPlusOutline} {...props} />;
}

export { mdiFlagPlusOutline as path };
