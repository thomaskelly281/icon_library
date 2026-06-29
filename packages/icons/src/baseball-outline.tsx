import { mdiBaseballOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BaseballOutline(props: IconComponentProps) {
  return <Icon path={mdiBaseballOutline} {...props} />;
}

export { mdiBaseballOutline as path };
