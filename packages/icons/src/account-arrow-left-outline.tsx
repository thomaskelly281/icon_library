import { mdiAccountArrowLeftOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountArrowLeftOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountArrowLeftOutline} {...props} />;
}

export { mdiAccountArrowLeftOutline as path };
