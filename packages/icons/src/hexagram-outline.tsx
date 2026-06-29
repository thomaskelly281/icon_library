import { mdiHexagramOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HexagramOutline(props: IconComponentProps) {
  return <Icon path={mdiHexagramOutline} {...props} />;
}

export { mdiHexagramOutline as path };
