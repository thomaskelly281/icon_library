import { mdiSafeSquareOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SafeSquareOutline(props: IconComponentProps) {
  return <Icon path={mdiSafeSquareOutline} {...props} />;
}

export { mdiSafeSquareOutline as path };
