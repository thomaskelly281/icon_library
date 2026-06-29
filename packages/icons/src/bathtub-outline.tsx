import { mdiBathtubOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BathtubOutline(props: IconComponentProps) {
  return <Icon path={mdiBathtubOutline} {...props} />;
}

export { mdiBathtubOutline as path };
