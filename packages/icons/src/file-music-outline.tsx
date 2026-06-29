import { mdiFileMusicOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileMusicOutline(props: IconComponentProps) {
  return <Icon path={mdiFileMusicOutline} {...props} />;
}

export { mdiFileMusicOutline as path };
