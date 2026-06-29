import { mdiViewDayOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewDayOutline(props: IconComponentProps) {
  return <Icon path={mdiViewDayOutline} {...props} />;
}

export { mdiViewDayOutline as path };
