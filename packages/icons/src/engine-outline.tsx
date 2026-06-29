import { mdiEngineOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EngineOutline(props: IconComponentProps) {
  return <Icon path={mdiEngineOutline} {...props} />;
}

export { mdiEngineOutline as path };
