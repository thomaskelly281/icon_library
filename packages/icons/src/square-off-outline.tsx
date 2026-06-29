import { mdiSquareOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SquareOffOutline(props: IconComponentProps) {
  return <Icon path={mdiSquareOffOutline} {...props} />;
}

export { mdiSquareOffOutline as path };
