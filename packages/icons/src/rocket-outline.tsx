import { mdiRocketOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RocketOutline(props: IconComponentProps) {
  return <Icon path={mdiRocketOutline} {...props} />;
}

export { mdiRocketOutline as path };
