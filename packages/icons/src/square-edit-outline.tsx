import { mdiSquareEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SquareEditOutline(props: IconComponentProps) {
  return <Icon path={mdiSquareEditOutline} {...props} />;
}

export { mdiSquareEditOutline as path };
