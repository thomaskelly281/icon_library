import { mdiEmailArrowLeftOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailArrowLeftOutline(props: IconComponentProps) {
  return <Icon path={mdiEmailArrowLeftOutline} {...props} />;
}

export { mdiEmailArrowLeftOutline as path };
