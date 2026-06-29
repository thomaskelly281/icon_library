import { mdiSquareCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SquareCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiSquareCircleOutline} {...props} />;
}

export { mdiSquareCircleOutline as path };
