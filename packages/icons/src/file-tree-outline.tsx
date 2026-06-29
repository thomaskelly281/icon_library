import { mdiFileTreeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileTreeOutline(props: IconComponentProps) {
  return <Icon path={mdiFileTreeOutline} {...props} />;
}

export { mdiFileTreeOutline as path };
