import { mdiToyBrickMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ToyBrickMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiToyBrickMinusOutline} {...props} />;
}

export { mdiToyBrickMinusOutline as path };
