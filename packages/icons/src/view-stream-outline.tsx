import { mdiViewStreamOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewStreamOutline(props: IconComponentProps) {
  return <Icon path={mdiViewStreamOutline} {...props} />;
}

export { mdiViewStreamOutline as path };
