import { mdiFileImageOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileImageOutline(props: IconComponentProps) {
  return <Icon path={mdiFileImageOutline} {...props} />;
}

export { mdiFileImageOutline as path };
