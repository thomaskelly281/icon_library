import { mdiScriptTextOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ScriptTextOutline(props: IconComponentProps) {
  return <Icon path={mdiScriptTextOutline} {...props} />;
}

export { mdiScriptTextOutline as path };
