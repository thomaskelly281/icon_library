import { mdiBottleWineOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BottleWineOutline(props: IconComponentProps) {
  return <Icon path={mdiBottleWineOutline} {...props} />;
}

export { mdiBottleWineOutline as path };
