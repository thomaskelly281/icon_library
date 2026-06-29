import { mdiFileStarOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileStarOutline(props: IconComponentProps) {
  return <Icon path={mdiFileStarOutline} {...props} />;
}

export { mdiFileStarOutline as path };
