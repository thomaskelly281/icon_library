import { mdiStadiumOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StadiumOutline(props: IconComponentProps) {
  return <Icon path={mdiStadiumOutline} {...props} />;
}

export { mdiStadiumOutline as path };
