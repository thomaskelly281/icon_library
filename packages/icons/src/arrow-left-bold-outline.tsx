import { mdiArrowLeftBoldOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowLeftBoldOutline(props: IconComponentProps) {
  return <Icon path={mdiArrowLeftBoldOutline} {...props} />;
}

export { mdiArrowLeftBoldOutline as path };
