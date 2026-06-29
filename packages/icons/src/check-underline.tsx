import { mdiCheckUnderline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckUnderline(props: IconComponentProps) {
  return <Icon path={mdiCheckUnderline} {...props} />;
}

export { mdiCheckUnderline as path };
