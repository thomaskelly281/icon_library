import { mdiScriptTextKeyOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ScriptTextKeyOutline(props: IconComponentProps) {
  return <Icon path={mdiScriptTextKeyOutline} {...props} />;
}

export { mdiScriptTextKeyOutline as path };
