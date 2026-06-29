import { mdiToyBrickPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ToyBrickPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiToyBrickPlusOutline} {...props} />;
}

export { mdiToyBrickPlusOutline as path };
