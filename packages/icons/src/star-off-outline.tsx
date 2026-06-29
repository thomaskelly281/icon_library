import { mdiStarOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarOffOutline(props: IconComponentProps) {
  return <Icon path={mdiStarOffOutline} {...props} />;
}

export { mdiStarOffOutline as path };
