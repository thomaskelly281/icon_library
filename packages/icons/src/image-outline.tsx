import { mdiImageOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageOutline(props: IconComponentProps) {
  return <Icon path={mdiImageOutline} {...props} />;
}

export { mdiImageOutline as path };
