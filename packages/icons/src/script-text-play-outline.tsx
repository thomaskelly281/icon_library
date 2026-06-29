import { mdiScriptTextPlayOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ScriptTextPlayOutline(props: IconComponentProps) {
  return <Icon path={mdiScriptTextPlayOutline} {...props} />;
}

export { mdiScriptTextPlayOutline as path };
