import { mdiCheckDecagramOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckDecagramOutline(props: IconComponentProps) {
  return <Icon path={mdiCheckDecagramOutline} {...props} />;
}

export { mdiCheckDecagramOutline as path };
