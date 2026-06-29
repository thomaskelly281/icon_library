import { mdiCogOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CogOffOutline(props: IconComponentProps) {
  return <Icon path={mdiCogOffOutline} {...props} />;
}

export { mdiCogOffOutline as path };
