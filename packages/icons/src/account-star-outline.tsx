import { mdiAccountStarOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountStarOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountStarOutline} {...props} />;
}

export { mdiAccountStarOutline as path };
