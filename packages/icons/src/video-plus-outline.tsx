import { mdiVideoPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiVideoPlusOutline} {...props} />;
}

export { mdiVideoPlusOutline as path };
