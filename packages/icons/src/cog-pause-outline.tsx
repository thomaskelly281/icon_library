import { mdiCogPauseOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CogPauseOutline(props: IconComponentProps) {
  return <Icon path={mdiCogPauseOutline} {...props} />;
}

export { mdiCogPauseOutline as path };
