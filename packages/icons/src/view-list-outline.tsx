import { mdiViewListOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewListOutline(props: IconComponentProps) {
  return <Icon path={mdiViewListOutline} {...props} />;
}

export { mdiViewListOutline as path };
