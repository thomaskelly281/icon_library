import { mdiHomeMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiHomeMinusOutline} {...props} />;
}

export { mdiHomeMinusOutline as path };
