import { mdiEngineOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EngineOffOutline(props: IconComponentProps) {
  return <Icon path={mdiEngineOffOutline} {...props} />;
}

export { mdiEngineOffOutline as path };
