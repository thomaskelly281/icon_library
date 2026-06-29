import { mdiFlowerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlowerOutline(props: IconComponentProps) {
  return <Icon path={mdiFlowerOutline} {...props} />;
}

export { mdiFlowerOutline as path };
