import { mdiFruitGrapesOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FruitGrapesOutline(props: IconComponentProps) {
  return <Icon path={mdiFruitGrapesOutline} {...props} />;
}

export { mdiFruitGrapesOutline as path };
