import { mdiNatureOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NatureOutline(props: IconComponentProps) {
  return <Icon path={mdiNatureOutline} {...props} />;
}

export { mdiNatureOutline as path };
