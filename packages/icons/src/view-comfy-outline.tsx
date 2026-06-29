import { mdiViewComfyOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewComfyOutline(props: IconComponentProps) {
  return <Icon path={mdiViewComfyOutline} {...props} />;
}

export { mdiViewComfyOutline as path };
