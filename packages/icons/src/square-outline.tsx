import { mdiSquareOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SquareOutline(props: IconComponentProps) {
  return <Icon path={mdiSquareOutline} {...props} />;
}

export { mdiSquareOutline as path };
