import { mdiToyBrickRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ToyBrickRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiToyBrickRemoveOutline} {...props} />;
}

export { mdiToyBrickRemoveOutline as path };
