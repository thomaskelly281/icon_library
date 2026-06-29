import { mdiFitToPageOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FitToPageOutline(props: IconComponentProps) {
  return <Icon path={mdiFitToPageOutline} {...props} />;
}

export { mdiFitToPageOutline as path };
