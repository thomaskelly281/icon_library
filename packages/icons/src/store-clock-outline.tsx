import { mdiStoreClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StoreClockOutline(props: IconComponentProps) {
  return <Icon path={mdiStoreClockOutline} {...props} />;
}

export { mdiStoreClockOutline as path };
