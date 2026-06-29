import { mdiAccountMusicOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountMusicOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountMusicOutline} {...props} />;
}

export { mdiAccountMusicOutline as path };
