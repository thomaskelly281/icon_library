import { mdiSquareMediumOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SquareMediumOutline(props: IconComponentProps) {
  return <Icon path={mdiSquareMediumOutline} {...props} />;
}

export { mdiSquareMediumOutline as path };
