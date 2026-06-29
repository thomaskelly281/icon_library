import { mdiToyBrickOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ToyBrickOutline(props: IconComponentProps) {
  return <Icon path={mdiToyBrickOutline} {...props} />;
}

export { mdiToyBrickOutline as path };
