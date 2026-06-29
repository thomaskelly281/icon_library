import { mdiBaseballDiamondOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BaseballDiamondOutline(props: IconComponentProps) {
  return <Icon path={mdiBaseballDiamondOutline} {...props} />;
}

export { mdiBaseballDiamondOutline as path };
