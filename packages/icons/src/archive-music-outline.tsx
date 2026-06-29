import { mdiArchiveMusicOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveMusicOutline(props: IconComponentProps) {
  return <Icon path={mdiArchiveMusicOutline} {...props} />;
}

export { mdiArchiveMusicOutline as path };
