import { mdiHandWashOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandWashOutline(props: IconComponentProps) {
  return <Icon path={mdiHandWashOutline} {...props} />;
}

export { mdiHandWashOutline as path };
