import { mdiDiamondOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DiamondOutline(props: IconComponentProps) {
  return <Icon path={mdiDiamondOutline} {...props} />;
}

export { mdiDiamondOutline as path };
