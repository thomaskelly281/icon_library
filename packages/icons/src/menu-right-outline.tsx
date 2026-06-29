import { mdiMenuRightOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MenuRightOutline(props: IconComponentProps) {
  return <Icon path={mdiMenuRightOutline} {...props} />;
}

export { mdiMenuRightOutline as path };
