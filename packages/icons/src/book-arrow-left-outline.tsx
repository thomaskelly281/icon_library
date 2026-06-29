import { mdiBookArrowLeftOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookArrowLeftOutline(props: IconComponentProps) {
  return <Icon path={mdiBookArrowLeftOutline} {...props} />;
}

export { mdiBookArrowLeftOutline as path };
